/* Shared storefront behavior for every Nui Len page. */
(() => {
    "use strict";

    const CART_KEY = "nuilen-cart";
    const products = Array.isArray(window.NUILEN_PRODUCTS)
        ? window.NUILEN_PRODUCTS
        : [];
    let toastTimer;

    function getProduct(idOrName) {
        return products.find(product =>
            product.id === idOrName || product.name === idOrName
        ) || null;
    }

    function priceForVariant(product, variant = "") {
        return Number(product?.variantPrices?.[variant]) || Number(product?.price) || 0;
    }

    function getCart() {
        try {
            const entries = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
            return new Map(Array.isArray(entries) ? entries : []);
        } catch {
            return new Map();
        }
    }

    function updateCartCount() {
        const count = [...getCart().values()].reduce(
            (total, item) => total + (Number(item.quantity) || 0), 0
        );

        document.querySelectorAll(".cart-count").forEach(badge => {
            badge.textContent = count;
            badge.hidden = count === 0;
        });
        return count;
    }

    function saveCart(cart) {
        const entries = cart instanceof Map ? [...cart] : cart;
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(entries));
        } catch {
            return false;
        }
        updateCartCount();
        window.dispatchEvent(new CustomEvent("nuilen:cart-change", {
            detail: { cart: getCart() }
        }));
        return true;
    }

    function addToCart(idOrName, amount = 1, variant = "") {
        const product = getProduct(idOrName);
        const quantity = Number(amount);
        if (!product) return { ok: false, reason: "not-found" };
        if (!Number.isInteger(quantity) || quantity < 1) {
            return { ok: false, reason: "invalid-quantity" };
        }
        const selectedVariant = String(variant || "").trim();
        if (Array.isArray(product.variants) && product.variants.length &&
            !product.variants.includes(selectedVariant)) {
            return { ok: false, reason: "variant-required" };
        }

        const cart = getCart();
        const cartKey = selectedVariant ? `${product.name} — ${selectedVariant}` : product.name;
        const item = cart.get(cartKey) || {
            id: product.id,
            price: priceForVariant(product, selectedVariant),
            quantity: 0,
            image: product.image,
            variant: selectedVariant
        };
        item.quantity = Number(item.quantity) || 0;

        if (item.quantity + quantity > product.stock) {
            return { ok: false, reason: "out-of-stock", product };
        }

        item.id = product.id;
        item.price = priceForVariant(product, selectedVariant);
        item.image = product.image;
        item.variant = selectedVariant;
        item.quantity += quantity;
        cart.set(cartKey, item);

        if (!saveCart(cart)) return { ok: false, reason: "storage-error" };
        return { ok: true, product, item };
    }
    function discountPercent(product) {
        if (!product || !product.original) return 0;
        return Math.max(0, Math.round((1 - product.price / product.original) * 100));
    }

    /* Trạng thái kho cho Bootstrap 3 progress bar */
    function stockStatus(product) {
        const sold = Math.max(0, Number(product?.sold) || 0);
        const stock = Math.max(0, Number(product?.stock) || 0);
        const total = sold + stock;
        const percent = total ? Math.round(sold / total * 100) : 0;
        if (stock === 0) {
            return { total, percent: 100, cls: "progress-bar-danger", tone: "danger", label: "Hết hàng" };
        }
        const almostSoldOut = product.stock <= 8 || percent >= 70;
        const lowStock = product.stock <= 15 || percent >= 50;
        return {
            total,
            percent,
            cls: almostSoldOut ? "progress-bar-danger"
                : lowStock ? "progress-bar-warning" : "progress-bar-success",
            tone: almostSoldOut ? "danger" : lowStock ? "warning" : "success",
            label: almostSoldOut ? "Sắp hết hàng"
                : lowStock ? "Còn ít hàng" : "Còn hàng"
        };
    }
    function formatPrice(value) {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
            maximumFractionDigits: 0
        }).format(Number(value) || 0);
    }

    function showToast(message) {
        const toast = document.getElementById("toast");
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("visible");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
    }

    function initSearchForms() {
        document.querySelectorAll(".search-form").forEach(form => {
            form.addEventListener("submit", event => {
                event.preventDefault();
                const input = form.querySelector('input[type="search"]');
                const destination = new URL("ecommerce.html", window.location.href);
                destination.searchParams.set("q", input ? input.value.trim() : "");
                destination.hash = "products";
                window.location.href = destination.href;
            });
        });
    }

    function initMobileNavigation() {
        document.querySelectorAll(".main-navigation").forEach(nav => {
            const toggle = nav.querySelector(".nav-toggle");
            if (!toggle) return;

            const closeMenu = () => {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", "Mở menu");
            };

            toggle.addEventListener("click", () => {
                const isOpen = toggle.getAttribute("aria-expanded") === "true";
                nav.classList.toggle("is-open", !isOpen);
                toggle.setAttribute("aria-expanded", String(!isOpen));
                toggle.setAttribute("aria-label", isOpen ? "Mở menu" : "Đóng menu");
            });

            nav.querySelectorAll(".nav-list a").forEach(link => {
                link.addEventListener("click", closeMenu);
            });

            document.addEventListener("click", event => {
                if (!nav.contains(event.target)) closeMenu();
            });

            nav.addEventListener("keydown", event => {
                if (event.key === "Escape") {
                    closeMenu();
                    toggle.focus();
                }
            });

            window.addEventListener("resize", () => {
                if (window.innerWidth > 650) closeMenu();
            });
        });
    }

    window.NuiLen = Object.freeze({
        CART_KEY,
        products,
        getProduct,
        priceForVariant,
        getCart,
        saveCart,
        addToCart,
        updateCartCount,
        formatPrice,
        discountPercent,
        stockStatus,
        showToast
    });

    window.addEventListener("storage", event => {
        if (event.key === CART_KEY) updateCartCount();
    });

    document.addEventListener("DOMContentLoaded", () => {
        updateCartCount();
        initSearchForms();
        initMobileNavigation();
    });
})();

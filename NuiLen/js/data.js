/* Shared product catalog for the Nui Len storefront. Add extra photo URLs to each product gallery array. */
window.NUILEN_PRODUCTS = [

            {
                id: "mochi", name: "G\u1EA5u b\u00F4ng th\u1ECF Mochi",
                category: "amigurumi", label: "G\u1EA5u b\u00F4ng v\u00E0 Hoa",
                price: 159000, original: 199000, stock: 12, sold: 38,
                badge: "Best Seller", rating: 5,
                image: "images/thobong.png",
                gallery: [
                    "images/thobong1.png",
                    "images/THOBONG2.png"
                ],
                description: "Th\u1ECF b\u00F4ng Mochi \u0111\u01B0\u1EE3c m\u00F3c th\u1EE7 c\u00F4ng t\u1EEB s\u1EE3i nhung \u0111\u0169a m\u1EC1m m\u1ECB, cho b\u1EC1 m\u1EB7t \u00EAm tay v\u00E0 v\u1EBB ngo\u00E0i b\u00F4ng x\u1ED1p \u0111\u00E1ng y\u00EAu. Th\u00E2n th\u1ECF c\u00F3 d\u00E1ng tr\u00F2n, \u0111\u00F4i tai d\u00E0i m\u1EC1m r\u1EE7 nh\u1EB9 v\u00E0 g\u01B0\u01A1ng m\u1EB7t \u0111\u01B0\u1EE3c ho\u00E0n thi\u1EC7n t\u1EC9 m\u1EC9, th\u00EDch h\u1EE3p \u0111\u1EC3 \u00F4m, trang tr\u00ED g\u00F3c h\u1ECDc t\u1EADp ho\u1EB7c l\u00E0m m\u00F3n qu\u00E0 \u1EA5m \u00E1p. S\u1EA3n ph\u1EA9m cao kho\u1EA3ng 25 cm t\u00EDnh c\u1EA3 tai, ngang kho\u1EA3ng 13 cm; k\u00EDch th\u01B0\u1EDBc c\u00F3 th\u1EC3 ch\u00EAnh l\u1EC7ch 1-2 cm do \u0111\u01B0\u1EE3c l\u00E0m th\u1EE7 c\u00F4ng. M\u1ED7i ch\u00FA th\u1ECF \u0111\u01B0\u1EE3c ho\u00E0n thi\u1EC7n ri\u00EAng n\u00EAn bi\u1EC3u c\u1EA3m v\u00E0 d\u00E1ng len c\u00F3 n\u00E9t duy\u00EAn ri\u00EAng."
            },
            {
                id: "milk-cotton", name: "Len Milk Cotton",
                category: "yarn", label: "Len s\u1EE3i",
                price: 15000, original: 25000, stock: 35, sold: 65,
                badge: "", rating: 4.9,
                image: "images/milk cotton.jpg",
                gallery: [
                    "https://down-vn.img.susercontent.com/file/5ff6f2f2be74fded92cc238e8f131a7a",
                    "https://lensoiquynhlam.com/wp-content/uploads/2024/10/len-milk-cotton-50gr-mac-den-bang-mau-0-500x500.webp"
                ],
                description: "Len Milk Cotton có sợi mềm, đều và dễ thao tác, phù hợp cho cả người mới bắt đầu lẫn người đã quen móc len. Chất len cho bề mặt mịn, lên mũi rõ và có bảng màu phong phú để bạn thỏa sức phối hoa, thú bông, túi nhỏ hay phụ kiện handmade. Mỗi cuộn có thể được sử dụng linh hoạt cho nhiều dự án; hãy chọn mã màu yêu thích trước khi thêm vào giỏ nhé.",
                variants: Array.from({ length: 61 }, (_, index) => `Mã màu ${String(index + 1).padStart(2, "0")}`),
                reviews: [
                    { author: "Ngọc Anh", rating: 5, createdAt: "2026-10-18", comment: "Sợi mềm, màu lên đẹp và dễ móc. Mình dùng làm hoa len rất ưng." },
                    { author: "Minh Thư", rating: 5, createdAt: "2026-10-09", comment: "Đóng gói gọn gàng, màu giống hình và sợi khá đều." }
                ]
            },
            {
                id: "flower", name: "B\u00F3 hoa len d\u1ECBu d\u00E0ng",
                category: "amigurumi", label: "G\u1EA5u b\u00F4ng v\u00E0 Hoa",
                price: 129000, original: 129000, stock: 15, sold: 35,
                badge: "New", rating: 5,
                image: "images/hoalen.png",
                gallery: [
                    "https://pos.nvncdn.com/71e899-15049/ps/20230414_PwT107DTml.jpeg?v=1681446880",
                    "https://pos.nvncdn.com/71e899-15049/ps/20230523_iibKe7sVba.jpeg?v=1684820117"
                ],
                description: "M\u00F3n qu\u00E0 handmade l\u01B0u gi\u1EEF kho\u1EA3nh kh\u1EAFc \u0111\u1EB9p."
            },

            {
                id: "sun-earth-keychain", name: "M\u00F3c kh\u00F3a len M\u1EB7t tr\u1EDDi v\u00E0 Tr\u00E1i \u0110\u1EA5t",
                category: "keychain", label: "M\u00F3c kh\u00F3a len",
                price: 59000, original: 59000, stock: 18, sold: 24,
                badge: "New", rating: 5,
                image: "images/mockhoa.png",
                gallery: [
                    "https://pos.nvncdn.com/71e899-15049/ps/20240312_Ch7dFr4k46.jpeg?v=1710233308",
                    "https://pos.nvncdn.com/71e899-15049/ps/20240312_Uk6TKHqcDy.jpeg?v=1710233315"
                ],
                description: "Bộ móc khóa len Mặt Trời và Trái Đất được móc thủ công với màu sắc tươi sáng, đường nét nhỏ xinh và phần khoen tiện dụng. Bạn có thể chọn riêng Mặt Trời, riêng Trái Đất hoặc chọn set gồm cả hai để tạo thành một cặp đôi đồng điệu. Sản phẩm phù hợp trang trí chìa khóa, balô, túi xách và cũng là món quà nhỏ đáng yêu dành tặng bạn bè.",
                variants: ["M\u1EB7t tr\u1EDDi", "Tr\u00E1i \u0110\u1EA5t", "Set M\u1EB7t tr\u1EDDi v\u00E0 Tr\u00E1i \u0110\u1EA5t"],
                variantPrices: { "Set M\u1EB7t tr\u1EDDi v\u00E0 Tr\u00E1i \u0110\u1EA5t": 100000 },
                reviews: [
                    { author: "Bảo Trân", rating: 5, createdAt: "2026-10-21", comment: "Móc khóa nhỏ xinh, đường móc chắc chắn và màu sắc tươi." },
                    { author: "Hà My", rating: 5, createdAt: "2026-10-12", comment: "Mình chọn set, nhận được đủ hai mẫu. Làm quà rất dễ thương." }
                ]
            },
            {
                id: "nhung-gau", name: "Len Nhung G\u1EA5u",
                category: "yarn", label: "Len s\u1EE3i",
                price: 22000, original: 35000, stock: 30, sold: 18,
                badge: "", rating: 4.9,
                image: "images/nhung%20g%E1%BA%A5u.jpg",
                gallery: [
                    "https://bizweb.dktcdn.net/100/664/432/products/img-6583.jpg?v=1774592762187",
                    "https://bizweb.dktcdn.net/100/664/432/products/img-6584-2.jpg?v=1774592763623",
                    "https://bizweb.dktcdn.net/100/664/432/products/img-6585.jpg?v=1774611538017",
                    "https://bizweb.dktcdn.net/100/664/432/products/img-6586-2.jpg?v=1774611538017",
                    "https://bizweb.dktcdn.net/100/664/432/products/img-6587-2.jpg?v=1774611538017",
                    "https://bizweb.dktcdn.net/100/664/432/products/img-6588-2.jpg?v=1774611538017"
                ],
                description: "Len Nhung Gấu có sợi nhung mềm mại, êm tay và tạo độ bông đẹp cho thành phẩm. Sợi len phù hợp để móc thú bông, gối nhỏ, chăn mini và các món phụ kiện cần bề mặt mềm xốp. Có nhiều màu để lựa chọn và phối hợp; bạn hãy chọn mã màu trước khi đặt hàng để hoàn thiện món đồ handmade theo phong cách riêng.",
                variants: Array.from({ length: 44 }, (_, index) => `Mã màu ${String(index + 1).padStart(2, "0")}`),
                reviews: [
                    { author: "Thảo Vy", rating: 5, createdAt: "2026-10-20", comment: "Len mềm, móc thú bông lên rất xinh. Sợi không bị xơ nhiều." },
                    { author: "Phương Linh", rating: 4, createdAt: "2026-10-05", comment: "Màu đẹp và sờ mềm tay, phù hợp với người mới tập móc." }
                ]
            },
            {
                id: "bottle-bag", name: "T\u00FAi \u0111\u1EF1ng b\u00ECnh n\u01B0\u1EDBc 600ml",
                category: "bag", label: "T\u00FAi & ph\u1EE5 ki\u1EC7n",
                price: 89000, original: 109000, stock: 10, sold: 16,
                badge: "", rating: 5,
                image: "https://thoccrochet.com/wp-content/uploads/2023/06/Len-TuiBN01.jpg",
                gallery: [
                    "https://thoccrochet.com/wp-content/uploads/2023/06/Len-TuiBN01b.jpg",

                ],
                description: "T\u00FAi \u0111\u1EF1ng b\u00ECnh n\u01B0\u1EDBc 600ml ti\u1EC7n d\u1EE5ng, xinh x\u1EAFn cho nh\u1EEFng chuy\u1EBFn \u0111i h\u1EB1ng ng\u00E0y."
            },
            {
                id: "earbud-pouch", name: "T\u00FAi t\u1ECFi \u0111\u1EF1ng tai nghe",
                category: "bag", label: "T\u00FAi & ph\u1EE5 ki\u1EC7n",
                price: 49000, original: 59000, stock: 14, sold: 21,
                badge: "", rating: 4.9,
                image: "https://i.pinimg.com/736x/5f/c8/6b/5fc86b736fc210a08a34abb0d1472f12.jpg",
                gallery: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHkRGh71Rk8h2QsdX5tkhk5UlxIx1j-7MVw6C4ZyGmQ&s",
                    "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mfgeahrb4iz39e"
                ],
                description: "T\u00FAi t\u1ECFi nh\u1ECF g\u1ECDn gi\u00FAp b\u1EA3o qu\u1EA3n tai nghe v\u00E0 c\u00E1c m\u00F3n ph\u1EE5 ki\u1EC7n."
            },
            {
                id: "hook-skc", name: "Kim m\u00F3c len SKC",
                category: "materials", label: "Kim m\u00F3c & ph\u1EE5 li\u1EC7u",
                price: 25000, original: 30000, stock: 25, sold: 20,
                badge: "", rating: 4.9,
                image: "images/kim%20m%C3%B3c.jpg",
                gallery: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGcSwLmjygeYfxa20plv5l0c19Pl9LG_hRyoK27kqvUkRh2tMQL7KYx8&s=10",
                    "https://bizweb.dktcdn.net/100/348/234/products/o1cn01mvqluq1s3ywtome9w-980142192-0-cib.jpg?v=1681200705523",
                    "https://bizweb.dktcdn.net/thumb/1024x1024/100/492/053/products/9-1658843618510.jpg?v=1715937480753"
                ],
                description: "Kim móc len SKC có nhiều kích cỡ để bạn lựa chọn theo độ dày của sợi và độ chặt mong muốn. Thân kim gọn, dễ cầm nắm và hỗ trợ thao tác móc mượt mà trong các dự án từ hoa len, thú bông đến phụ kiện nhỏ. Hãy chọn đúng kích thước tính bằng milimét trước khi thêm sản phẩm vào giỏ.",
                variants: ["1.5mm", "2.0mm", "2.5mm", "3.0mm", "3.5mm", "4.0mm", "4.5mm", "5.0mm", "5.5mm", "6.0mm"],
                reviews: [
                    { author: "Yến Nhi", rating: 5, createdAt: "2026-10-16", comment: "Kim cầm vừa tay, đầu kim móc len thuận tiện." },
                    { author: "Kim Oanh", rating: 4, createdAt: "2026-10-02", comment: "Có đủ cỡ cần dùng, thao tác ổn và dễ chọn size." }
                ]
            },
            {
                id: "stitch-markers", name: "[T\u00FAi 10 c\u00E1i] \u0110\u00E1nh d\u1EA5u len b\u1EB1ng nh\u1EF1a ch\u1EAFc ch\u1EAFn",
                category: "materials", label: "Kim m\u00F3c & ph\u1EE5 li\u1EC7u",
                price: 12000, original: 15000, stock: 40, sold: 32,
                badge: "", rating: 4.8,
                image: "https://bizweb.dktcdn.net/100/664/432/products/img-1599-jpeg.jpg?v=1774867883797",
                gallery: [
                    "https://bizweb.dktcdn.net/100/664/432/products/img-1600-jpeg.jpg?v=1774867884630",
                    "https://bizweb.dktcdn.net/100/664/432/products/img-1603-jpeg.jpg?v=1774867886790"
                ],
                description: "T\u00FAi 10 d\u1EA5u \u0111\u00E1nh d\u1EA5u len b\u1EB1ng nh\u1EF1a, gi\u00FAp theo d\u00F5i c\u00E1c m\u00F3c len d\u1EC5 d\u00E0ng.",
            }
];

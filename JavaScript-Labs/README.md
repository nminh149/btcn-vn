
# JAVASCRIPT LABS – BÁO CÁO THỰC HÀNH

## 1. Thông tin sinh viên

| Thông tin | Nội dung |
|---|---|
| Họ và tên | Nguyễn Đặng Ngọc Minh |
| Mã số sinh viên | 31241020263 |
| Lớp học phần | EE0001 |
| GitHub Repository | [btcn-vn](https://github.com/nminh149/btcn-vn) |
| GitHub Pages | [JavaScript Labs](https://nminh149.github.io/btcn-vn/JavaScript-Labs/) |

## 2. Mục tiêu thực hiện 03 bài Lab

Thông qua ba bài thực hành JavaScript (Lab 08, Lab 09 và Lab 10), sinh viên hướng đến các mục tiêu sau:

- Nắm vững kiến thức nền tảng của JavaScript, bao gồm cú pháp, biến, kiểu dữ liệu, hàm, mảng và đối tượng.
- Hiểu và thực hành cách truy xuất, thay đổi các thành phần HTML thông qua DOM.
- Biết cách xử lý sự kiện và tương tác của người dùng trên trang web.
- Làm quen với thư viện jQuery để thao tác DOM, xử lý sự kiện và tạo hiệu ứng cho giao diện.
- Thực hành gửi yêu cầu dữ liệu bất đồng bộ bằng AJAX và xử lý kết quả trả về.
- Rèn luyện kỹ năng kiểm tra, gỡ lỗi chương trình bằng Browser Console và Developer Tools.
- Biết cách tổ chức mã nguồn và triển khai các bài thực hành lên GitHub Pages.

## 3. Cấu trúc thư mục

Repository được tổ chức thành ba thư mục tương ứng với ba bài Lab. Mỗi thư mục chứa mã nguồn HTML, CSS, JavaScript, tài nguyên hình ảnh và tài liệu hướng dẫn đi kèm.

```text
JavaScript-Labs/
│
├── index.html
├── README.md
├── image/
│   └── nminh.jpg
│
├── Lab08/
│   └── ch08-lab-start-master/
│       ├── css/
│       ├── flags/
│       ├── images/
│       ├── js/
│       ├── exercise.html
│       ├── lab08-walkthrough02.html
│       ├── lab08-walkthrough06.html
│       ├── lab08-walkthrough07.html
│       ├── lab08-walkthrough08.html
│       ├── lab08-walkthrough09.html
│       ├── lab08-walkthrough10.html
│       ├── lab08-walkthrough11.html
│       ├── Lab08.pdf
│       └── README.md
│
├── Lab09/
│   └── ch09-lab-start-master/
│       ├── css/
│       ├── flags/
│       ├── images/
│       ├── js/
│       ├── lab09-walkthrough01.html
│       ├── lab09-walkthrough02.html
│       ├── lab09-walkthrough03.html
│       ├── lab09-walkthrough04.html
│       ├── lab09-walkthrough05.html
│       ├── lab09-walkthrough07.html
│       ├── lab09-walkthrough08.html
│       ├── Lab09.pdf
│       └── README.md
│
└── Lab10/
    └── ch10-lab-start-master/
        ├── css/
        ├── images/
        ├── js/
        ├── lab10-walkthrough01.html
        ├── lab10-walkthrough03.html
        ├── lab10-walkthrough04.html
        ├── lab10-walkthrough05.html
        ├── lab10-walkthrough06.html
        ├── lab10-walkthrough07.html
        ├── lab10-walkthrough08.html
        ├── lab10-walkthrough09.html
        ├── lab10-walkthrough10.html
        ├── Lab10.pdf
        └── README.md
```

**Chức năng các thành phần chính:**

- `index.html`: Trang Portfolio giới thiệu và liên kết đến ba bài Lab.
- `README.md`: Tài liệu mô tả repository và hướng dẫn truy cập.
- `css/`: Chứa các tệp định dạng giao diện bằng CSS.
- `js/`: Chứa mã nguồn JavaScript và thư viện được sử dụng.
- `images/`, `flags/`: Chứa hình ảnh, biểu tượng và tài nguyên phục vụ bài thực hành.
- `exercise.html`, `labXX-walkthroughXX.html`: Các trang HTML dùng để thực hiện và kiểm tra từng nội dung thực hành.
- `LabXX.pdf`: Tài liệu hướng dẫn bài Lab tương ứng.

## 4. Nội dung thực hiện từng Lab

### Lab 08 – JavaScript 1: Language Foundations

**Mục tiêu:** Làm quen với ngôn ngữ JavaScript và các thành phần cơ bản của ngôn ngữ.

**Nội dung thực hiện:**
- Tìm hiểu cách bật/tắt JavaScript trên trình duyệt.
- Thực hành nhúng JavaScript trực tiếp vào HTML và liên kết tệp JavaScript bên ngoài.
- Sử dụng thẻ `noscript` để hiển thị nội dung khi trình duyệt không hỗ trợ hoặc tắt JavaScript.
- Làm quen với Browser Console và các lệnh `console.log()`, `console.warn()`, `console.error()`.
- Thực hành sử dụng các đối tượng có sẵn trong JavaScript.
- Khai báo, truy xuất và xử lý dữ liệu mảng.
- Xây dựng và sử dụng hàm, tìm hiểu hàm như một đối tượng.
- Khởi tạo đối tượng, truy cập thuộc tính và phương thức.
- Thực hành làm việc với mảng chứa nhiều đối tượng.

**Thư mục thực hiện:** `Lab08/ch08-lab-start-master/`

### Lab 09 – JavaScript 2: DOM and Events

**Mục tiêu:** Hiểu cách JavaScript tương tác với cấu trúc HTML thông qua DOM và xử lý các sự kiện trên trang web.

**Nội dung thực hiện:**
- Sử dụng các phương thức để truy xuất phần tử DOM như `getElementById()`, `getElementsByTagName()`, `getElementsByClassName()` và `querySelector()`.
- Tìm hiểu mối quan hệ giữa các phần tử DOM như phần tử cha, phần tử con và phần tử anh em.
- Thực hành tạo, thêm và xóa phần tử HTML bằng JavaScript.
- Sử dụng `addEventListener()` để đăng ký và xử lý sự kiện.
- Tìm hiểu sự kiện tải trang và thời điểm thực thi mã JavaScript.
- Sử dụng Debugger để theo dõi chương trình và kiểm tra đối tượng sự kiện.
- Xử lý các sự kiện `focus` và `blur` trên biểu mẫu.
- Kiểm tra dữ liệu nhập và xử lý việc gửi biểu mẫu.

**Thư mục thực hiện:** `Lab09/ch09-lab-start-master/`

### Lab 10 – JavaScript 3: jQuery

**Mục tiêu:** Làm quen với thư viện jQuery và ứng dụng thư viện trong việc thao tác DOM, xử lý sự kiện và trao đổi dữ liệu.

**Nội dung thực hiện:**
- Thiết lập và sử dụng thư viện jQuery trong trang HTML.
- Thực hành các bộ chọn cơ bản và nâng cao để truy xuất phần tử.
- Đăng ký và xử lý sự kiện bằng jQuery.
- Chèn các phần tử HTML vào trang bằng những phương thức thao tác DOM.
- Sử dụng các hiệu ứng như ẩn/hiện, fade và animation.
- Thực hành gửi yêu cầu GET để lấy dữ liệu.
- Sử dụng AJAX để trao đổi dữ liệu bất đồng bộ.
- Xử lý kết quả trả về và các trạng thái thành công hoặc lỗi thông qua jqXHR.

**Thư mục thực hiện:** `Lab10/ch10-lab-start-master/`

## 5. Đường dẫn GitHub Pages

Các bài thực hành được triển khai thông qua GitHub Pages tại địa chỉ:

**[https://nminh149.github.io/btcn-vn/JavaScript-Labs/](https://nminh149.github.io/btcn-vn/JavaScript-Labs/)**

Đây là trang Portfolio tổng hợp, cho phép truy cập và kiểm tra nội dung của cả ba bài Lab.

## 6. Hướng dẫn truy cập các bài thực hành

**Bước 1:** Truy cập trang GitHub Pages:

[https://nminh149.github.io/btcn-vn/JavaScript-Labs/](https://nminh149.github.io/btcn-vn/JavaScript-Labs/)

**Bước 2:** Tại trang Portfolio, tìm đến khu vực JavaScript Labs và chọn bài thực hành muốn xem.

**Bước 3:** Nhấn nút **Xem bài thực hành** tương ứng với Lab 08, Lab 09 hoặc Lab 10.

**Bước 4:** Tại thư mục của từng Lab, mở tệp HTML tương ứng để xem và thực hiện nội dung bài tập.

Các trang HTML có thể truy cập trực tiếp:

- **Lab 08:** [Mở Exercise](https://nminh149.github.io/btcn-vn/JavaScript-Labs/Lab08/ch08-lab-start-master/exercise.html)
- **Lab 09:** [Mở Walkthrough 01](https://nminh149.github.io/btcn-vn/JavaScript-Labs/Lab09/ch09-lab-start-master/lab09-walkthrough01.html)
- **Lab 10:** [Mở Walkthrough 01](https://nminh149.github.io/btcn-vn/JavaScript-Labs/Lab10/ch10-lab-start-master/lab10-walkthrough01.html)

**Bước 5:** Để kiểm tra mã nguồn và kết quả thực thi, sử dụng Developer Tools bằng cách nhấn `F12` hoặc `Ctrl + Shift + I`, sau đó chọn tab Console hoặc Sources để theo dõi và gỡ lỗi chương trình.

---

**Lưu ý:** Các tệp HTML, CSS, JavaScript và tài nguyên liên quan cần được giữ đúng cấu trúc thư mục để các trang thực hành hoạt động chính xác trên GitHub Pages.

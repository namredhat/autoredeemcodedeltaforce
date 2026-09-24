⚡ Delta Force Auto Redeem Pro UltraDelta Force Auto Redeem Pro Ultra là một tự động hóa script (Client-Side Automation) chạy trực tiếp trên trình duyệt, hỗ trợ người chơi nhập tự động danh sách hàng trăm Gift Code game Delta Force vào trang nhận thưởng chính thức chỉ với một thao tác.Script đi kèm với giao diện điều khiển HUD Glassmorphism hiện đại, cơ chế bỏ qua Popup bằng MutationObserver, và xử lý mượt mà trên các Framework Web hiện đại (React/Vue).🌟 Tính Năng Nổi Bật (Key Features)🎨 Giao diện HUD Modern Glassmorphism:Hiển thị UI đè (Floating HUD) góc trên bên phải với hiệu ứng mờ nhòe kính (Blur effect) và animation mượt mà.Cập nhật thời gian thực (Real-time): Thanh tiến trình (%), đồng hồ đếm thời gian thực thi, Code đang xử lý.Tự động hiển thị Toast Notification khi khởi chạy và hoàn tất.⚡ Xử Lý DOM Native & Synthetic Events:Sử dụng Native Value Setter (HTMLInputElement.prototype) giúp vượt qua cơ chế Data Binding của các framework như React, Vue, Angular.Tự động kích hoạt chuỗi sự kiện input và change để đảm bảo ô nhập nhận dữ liệu chính xác.🛡️ Tự Động Bỏ Qua Popup (Auto-Dismiss Modals):Tích hợp MutationObserver lắng nghe biến động DOM, tự động phát hiện và bấm đóng ngay lập tức các ô thông báo (Popup thông báo thành công / thất bại / hết hạn) mà không làm ngắt quãng vòng lặp.🧹 Tự Động Lọc & Tối Ưu Code:Sử dụng Set để loại bỏ toàn bộ các code trùng lặp từ nhiều nguồn khác nhau.Tự động xóa khoảng trắng thừa (trim()) tránh lỗi định dạng.🔍 Thuật Toán Tìm Kiếm Phàn Tử Linh Hoạt (Smart Selector Fallback):Tự động dò tìm ô nhập liệu và nút bấm nhận thưởng thông qua hàng loạt Selector dự phòng nếu trang web thay đổi giao diện.🛠️ Kiến Trúc Hệ Thống (Architecture)[Danh sách Raw Code]
        │
        ▼
 [Lọc Trùng & Format Set] ──► [Khởi tạo Glassmorphism HUD Overlay]
                                          │
 ┌────────────────────────────────────────┴────────────────────────────────────────┐
 │ Vòng Lặp Async Redeem (Bảo vệ bởi MutationObserver tự đóng Popup)               │
 ├─────────────────────────────────────────────────────────────────────────────────┤
 │  1. Cập nhật UI Progress % / Thời gian trôi qua                                │
 │  2. Set value bằng Native Prototype Setter & Dispatch Event (Input/Change)     │
 │  3. Trigger Click Nút Đổi Quà                                                  │
 │  4. Sleep (DELAY_TIME = 650ms)                                                 │
 └─────────────────────────────────────────────────────────────────────────────────┘
        │
        ▼
 [Hoàn Tất & Dọn Dẹp MutationObserver] ──► [Toast Notification Success]
🚀 Hướng Dẫn Sử Dụng (Quick Start)Bạn có thể chạy script này theo 3 cách đơn giản dưới đây:Cách 1: Chạy Qua Developer Console (Nhanh Nhất)Mở trình duyệt và truy cập vào Trang nhập Code Delta Force chính thức.Đăng nhập vào tài khoản Game của bạn.Nhấn phím F12 (hoặc chuột phải chọn Kiểm tra / Inspect) ➔ Chọn thẻ Console.Sao chép toàn bộ mã nguồn nhapcodedeltaforce_2.js và dán vào Console.Nhấn Enter để chạy. Trình duyệt sẽ xuất hiện Bảng điều khiển màu xanh lá nhạt ở góc phải và bắt đầu tự động nhập code.Cách 2: Tạo Bookmarklet (Chạy 1-Click Cho Lần Sau)Bật thanh Bookmark của trình duyệt (Ctrl + Shift + O hoặc Cmd + Option + B).Tạo một Bookmark mới:Tên (Name): ⚡ Auto Redeem Delta ForceURL / Địa chỉ: Nhập đoạn mã wrapper bên dưới:javascript:(function(){const s=document.createElement('script');s.src='PATH_TO_YOUR_SCRIPT.js';document.body.appendChild(s);})();
(Hoặc dán trực tiếp toàn bộ code JS vào sau tiền tố javascript:).Mỗi khi vào trang nhập code, chỉ cần click vào Bookmark này.Cách 3: Cài Đặt Qua Tampermonkey / Violentmonkey (Userscript)Nếu bạn muốn script tự chạy hoặc sẵn sàng mỗi khi mở trang:Cài đặt Extension Tampermonkey hoặc Violentmonkey trên Chrome/Edge/Firefox.Tạo Script mới và dán đoạn header metadata sau vào đầu file:// ==UserScript==
// @name         Delta Force Auto Redeem Pro Ultra
// @namespace    http://tampermonkey.net/
// @version      2.1.0
// @description  Tự động nhập danh sách Gift Code Delta Force với giao diện Modern Glassmorphism
// @author       YourName
// @match        https://*.garena.vn/*
// @match        https://*.qq.com/*
// @match        https://*.playdeltaforce.com/*
// @grant        none
// ==/UserScript==
Dán toàn bộ mã nguồn chính bên dưới và nhấn Save.⚙️ Cấu HÌnh Nâng Cao (Customization)Bạn có thể dễ dàng điều chỉnh các tham số ở đầu file nhapcodedeltaforce_2.js:// Thay đổi thời gian chờ giữa mỗi lần nhập code (mặc định: 650ms)
// Giảm xuống nếu mạng nhanh, tăng lên nếu bị Rate Limit (Lỗi phản hồi chậm)
const DELAY_TIME = 650; 

// Thêm hoặc bớt Gift Code vào mảng rawCodes
const rawCodes = [
    "CODE_MOI_1",
    "CODE_MOI_2",
    // ...
];
❓ Xử Lý Lỗi Thường Gặp (Troubleshooting)Sự cố / LỗiNguyên nhânCách khắc phục❌ Không tìm thấy ô nhập code hoặc nút gửi!Trang web thay đổi cấu trúc HTML hoặc chưa tải xong DOM.Hãy đảm bảo bạn đã đăng nhập và đang ở đúng màn hình có khung nhập code trước khi bấm chạy script.Code bị nhảy quá nhanh / Không ăn codeMạng bị lag hoặc Server game giới hạn truy vấn (Rate Limit).Tăng biến DELAY_TIME từ 650 lên 1000 hoặc 1200 (ms).Popup thông báo không tự tắtLớp CSS của nút Close bị nhà phát hành đổi tên.Thêm Class / Selector của nút đóng đó vào mảng closeSelectors trong hàm closePopupImmediately().⚠️ Miễn Trừ Tách Nhiệm (Disclaimer)Script này được phát triển hoàn toàn vì mục đích học tập và hỗ trợ cộng đồng (Automation Tooling).Script không can thiệp vào bộ nhớ game, không hack/cheat, chỉ thay thế thao tác gõ bàn phím và click chuột của người dùng trên trình duyệt web.Tác giả không chịu trách nhiệm nếu trang web nhà phát hành thay đổi cơ chế API hoặc chính sách dịch vụ.📜 Giấy Phép (License)Dự án được phân phối dưới dạng open-source theo giấy phép MIT License. Bạn có thể tự do chỉnh sửa, phân phối lại hoặc tích hợp vào các công cụ cá nhân.

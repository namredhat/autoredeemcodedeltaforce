# 🎟️ Delta Force — Auto Redeem

> Công cụ tự động nhập và gửi nhiều Gift Code Delta Force trực tiếp trên **trang đổi code chính thức của Garena** bằng **Developer Console** của trình duyệt.

![Delta Force](https://img.shields.io/badge/Delta%20Force-Auto%20Redeem-00AEEF?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-Console-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Garena](https://img.shields.io/badge/Garena-Official-EA1C24?style=for-the-badge)

---

## 🌐 Trang nhập Gift Code chính thức

> ⚠️ **BẮT BUỘC:** Bạn phải truy cập trang bên dưới, **đăng nhập tài khoản Garena và vào được giao diện nhập code trước khi chạy script**.

### 👉 [🎁 MỞ TRANG NHẬP CODE DELTA FORCE](https://redeem.df.garena.sg/vi/cdkgarena.html)

**Quy trình bắt buộc:**

```text
Mở trang chính thức
       ↓
Đăng nhập Garena
       ↓
Vào giao diện nhập Gift Code
       ↓
Mở Developer Console
       ↓
Dán script
       ↓
Enter
       ↓
Script tự động nhập code
```

---

# 🚀 Hướng dẫn sử dụng

## 1. Mở trang redeem

Truy cập:

**https://redeem.df.garena.sg/vi/cdkgarena.html**

Đăng nhập tài khoản Garena của bạn.

Sau khi đăng nhập, hãy đảm bảo bạn **đang ở đúng trang nhập Gift Code**.

---

## 2. Mở Developer Console

### Chrome / Edge

Nhấn:

```text
F12
```

hoặc:

```text
Ctrl + Shift + J
```

Sau đó chọn tab:

```text
Console
```

---

## 3. Cho phép dán code vào Console

Một số phiên bản Chrome/Edge có thể chặn thao tác paste vào Console để chống Self-XSS.

Nếu trình duyệt hiện cảnh báo, hãy làm theo hướng dẫn của trình duyệt để cho phép dán.

> Chỉ chạy script mà bạn hiểu hoặc lấy từ nguồn đáng tin cậy. Không dán mật khẩu, cookie, token hoặc thông tin đăng nhập vào Console.

---

## 4. Copy script

Mở file:

```text
nhapcodedeltaforce.js
```

hoặc copy toàn bộ JavaScript của project.

**Phải copy toàn bộ script**, không chỉ một phần.

---

## 5. Dán vào Console

Trong tab **Console**:

```text
Ctrl + V
```

Sau đó nhấn:

```text
Enter
```

Script sẽ bắt đầu chạy.

---

# ⚡ Script hoạt động như thế nào?

Script tự động:

1. Lấy danh sách Gift Code.
2. Loại bỏ code trùng nhau.
3. Tìm ô nhập Gift Code.
4. Tìm nút gửi/đổi code.
5. Nhập từng code.
6. Tự động gửi code.
7. Chuyển sang code tiếp theo.
8. Hiển thị tiến trình trên màn hình.

Danh sách code được lọc trùng bằng `Set`, đồng thời loại bỏ khoảng trắng dư thừa.

---

# 🖥️ Giao diện

Khi chạy, script tạo một bảng điều khiển nhỏ ở góc màn hình:

```text
┌──────────────────────────────────┐
│  DELTA FORCE // AUTO REDEEM  ●  │
│                                  │
│  25 / 300              16s       │
│  ███████████░░░░░░░░░             │
│                                  │
│  CODE HIỆN TẠI                   │
│  DFXXXXXXXX                      │
└──────────────────────────────────┘
```

Giao diện hiển thị:

* Tiến trình hiện tại
* Tổng số code
* Phần trăm hoàn thành
* Thời gian đã chạy
* Gift Code đang được xử lý
* Trạng thái hoàn thành

Các thành phần tiến trình và code hiện tại được tạo trực tiếp bởi script.

---

# ⏱️ Tốc độ nhập code

Script hiện sử dụng khoảng nghỉ:

```javascript
const DELAY_TIME = 650;
```

Tức khoảng **650 ms giữa mỗi lần gửi code**.

> ⚠️ Không nên giảm delay quá thấp nếu trang redeem phản hồi chậm hoặc có giới hạn yêu cầu.

---

# 📋 Danh sách Gift Code

Danh sách code được khai báo trực tiếp trong:

```javascript
const rawCodes = [
    "CODE_1",
    "CODE_2",
    "CODE_3"
];
```

Script sau đó tự động:

```javascript
new Set(...)
```

để loại bỏ các code trùng nhau.

### Thêm code mới

Chỉ cần thêm code vào mảng:

```javascript
const rawCodes = [
    "CODE_MOI_1",
    "CODE_MOI_2",
    "CODE_MOI_3"
];
```

Sau đó copy lại **toàn bộ script** và chạy lại.

---

# 🛑 Khi nào không nên chạy?

Không chạy script nếu:

* Chưa đăng nhập Garena.
* Không ở trang redeem chính thức.
* Trang đang tải hoặc chưa hiển thị ô nhập code.
* Trang đang gặp lỗi.
* Bạn không chắc script mình đang sử dụng có nguồn gốc từ đâu.

Script yêu cầu trang đã có ô nhập và nút gửi; nếu không tìm thấy chúng, script sẽ dừng và thông báo lỗi.

---

# 🔄 Nếu script không hoạt động

Thử lần lượt:

### 1. Reload trang

```text
Ctrl + R
```

Sau đó đăng nhập lại nếu cần.

### 2. Kiểm tra Console

Đảm bảo đang ở:

```text
Console
```

không phải:

```text
Elements
Network
Sources
```

### 3. Kiểm tra ô nhập code

Trang phải hiển thị giao diện nhập Gift Code bình thường.

### 4. Chạy lại script

Copy toàn bộ script → Console → Enter.

---

# ❗ Lưu ý quan trọng

### 🔐 Bảo mật tài khoản

Script này được thiết kế để thao tác với **giao diện trang redeem hiện tại**. Không cung cấp:

```text
Mật khẩu
Cookie
Session Token
Access Token
OTP
```

cho bất kỳ script nào.

### 🎟️ Code hết hạn

Việc script gửi một code **không đồng nghĩa code đó còn hiệu lực**.

Code có thể:

* Đã hết hạn
* Đã được sử dụng
* Không dành cho khu vực/tài khoản
* Không còn khả dụng
* Không hợp lệ

Script chỉ tự động hóa thao tác nhập/gửi; kết quả cuối cùng vẫn phụ thuộc vào hệ thống redeem của Delta Force/Garena.

### 🌐 Chỉ sử dụng trang chính thức

Trang redeem:

**https://redeem.df.garena.sg/vi/cdkgarena.html**

Không nhập thông tin tài khoản vào các trang redeem không rõ nguồn gốc.

---

# 🧩 Cấu trúc hoạt động

```text
Gift Code List
      │
      ▼
Remove Duplicates
      │
      ▼
Find Input Field
      │
      ▼
Find Submit Button
      │
      ▼
┌─────────────────┐
│   CODE 1        │
│   Submit        │
│   Wait 650 ms   │
├─────────────────┤
│   CODE 2        │
│   Submit        │
│   Wait 650 ms   │
├─────────────────┤
│      ...        │
├─────────────────┤
│   CODE N        │
│   Submit        │
└─────────────────┘
      │
      ▼
   Completed
```

Phần vòng lặp của script lần lượt nhập từng code, nhấn nút gửi và chờ trước khi chuyển sang code tiếp theo.

---

# ✅ Hoàn thành

Khi xử lý hết danh sách, giao diện sẽ chuyển sang:

```text
🎉 Hoàn thành toàn bộ!
```

và trạng thái được đổi thành:

```text
Hoàn thành
```

---

## 📌 Quick Start

Nếu bạn đã biết cách sử dụng Console:

```text
1. Mở trang redeem chính thức
2. Đăng nhập Garena
3. Vào giao diện nhập Gift Code
4. F12 → Console
5. Copy toàn bộ script
6. Paste
7. Enter
8. Chờ script hoàn tất
```

### 🔗 Official Redeem

**https://redeem.df.garena.sg/vi/cdkgarena.html**

---

<p align="center">

**Delta Force • Auto Redeem**

*Automate repetitive code redemption directly from the official Garena redemption page.*

</p>

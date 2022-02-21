Xây dựng game Bouncing Ball
B1: Đề tài: game Bouncing Ball
B2: Phân tích:
    - Nghiệp vụ chơi: điềU khiểN thanh ngang đỡ quả bóng phá gạch.
    - Chức năng chính: 
        +Phá gạch
        +ĐiềU khiển thanh ngang đỡ quả bóng
        +Mỗi lầN phá gạch thì được tính điểm
        +Có chức năng tạm dừng và tiếP tục
    - Các đối tượng:
        + Gạch - Brick
            .Thuộc tính: x, y, width, height, status, color
            .Phương thức draw(), drawBricks()
        + Thanh ngang - Rectangle
            .Thuộc tính: width, height, x, y, color
            .Phương thức: draw(), moveLeft(), moveRight()
        + Quả bóng - Ball 
            .Thuộc tính: x, y, radius, color
            .Phương thức: draw()
            

** Làm thêm chạm dưới Canvas thì nó sẽ thua và dừng trò chơi  -----> CHƯA LÀM
(Ý tưởng, làm 1 cái hàm chạm dưới riêng rồi qua index.js để gọi riêng hàm đó để check rồi clearInterval thôi).
** Thêm thời gian từng lượt chơi                              --> Đã làm
** Thêm chức năng thống kê danh sách các lượt chơi như list   --> Đã làm

https://www.stdio.vn/javascript/hien-thuc-timer-voi-javascript-6g3Um1
** Chuyển đổi bô đếm giờ thành Class với tham số: second, minute, và mảng để lưu lại từng thời gian.

** Đã xong chuyển đổi Time thành đối tượng, xử lý lại cho gọn với là thêm cái tính người chơi xuất sắc nhất ==> Xong game over

** Phát triểN thêm nhập tên người chơi vào rồi nếU thắng thì sẽ hiểN thị tên người đÓ cùng mốc thời gian

** Sau 1 thời gian thì thêm 1 tầng gạch nữa hạ xuống.
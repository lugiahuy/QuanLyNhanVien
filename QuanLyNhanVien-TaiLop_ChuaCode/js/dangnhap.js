var nguoiDungSV = new NguoiDungSerVice();

function dangNhap() {
    var taiKhoan = document.getElementById('txtTaiKhoan').value;
    var matKhau = document.getElementById('txtMatKhau').value;
        //axios chạy trả ra 1 promise nếu thành công chạy then thất bại chạy catch
        nguoiDungSV.DangNhap(taiKhoan, matKhau).then(function (res) {
            if (res.data.MaLoaiNguoiDung === "QuanTri") {
                // localStorage truyền vào 2 tham số là tên tự đặt và chuỗi. JSON.stringify(chuyển thành chuỗi)
                localStorage.setItem("currentUser", JSON.stringify(res.data));
                window.location.assign('index.html');
            }
        })
        .catch(function (ex) {
            console.log(ex.message);
        })
}
//call back function: truyen 1 ham vao ham khac duoi dang tham so
document.getElementById('btnDangNhap').addEventListener('click', dangNhap);
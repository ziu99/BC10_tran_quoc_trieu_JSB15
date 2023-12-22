// ? QUẢN LÝ TUYỂN SINH

function tinhDiemThi() {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let chonKhuVuc = document.getElementById("chonKhuVuc").value * 1;
  let chonDoiTuong = document.getElementById("chonDoiTuong").value * 1;
  console.log({ diemChuan, chonKhuVuc, chonDoiTuong });

  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;
  console.log({ diemMon1, diemMon2, diemMon3 });

  let diemThi = "";

  diemThi = diemMon1 + diemMon2 + diemMon3 + chonKhuVuc + chonDoiTuong;
  console.log(diemThi);

  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    diemThi = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    console.log(diemThi);
  } else if (diemThi >= diemChuan) {
    diemThi = "Điểm thi : " + diemThi + " . Bạn đã đậu";
    console.log(diemThi);
  } else {
    diemThi = "Điểm thi : " + diemThi + " . Bạn đã rớt";
    console.log(diemThi);
  }

  document.getElementById("ketQuaThi").innerHTML = diemThi;
}

// ? TÍNH TIỀN ĐIỆN

function tinhTienDien() {
  let nhapHoTen = document.getElementById("nhapHoTen").value;
  let soKw = document.getElementById("nhapKw").value * 1;
  console.log({ nhapHoTen, soKw });

  let gia50KwDau = 500;
  let gia50KwKe = 650;
  let gia100KwKe = 850;
  let gia150KwKe = 1100;
  let giaTren350Kw = 1300;
  console.log({ gia50KwDau, gia50KwKe, gia100KwKe, gia150KwKe, giaTren350Kw });

  let giaTienDien = "";
  if (soKw <= 50) {
    giaTienDien = gia50KwDau * soKw;
  } else if (50 < soKw && soKw <= 100) {
    giaTienDien = gia50KwDau * 50 + (soKw - 50) * gia50KwKe;
  } else if (100 < soKw && soKw <= 200) {
    giaTienDien = gia50KwDau * 50 + 50 * gia50KwKe + (soKw - 100) * gia100KwKe;
  } else if (200 < soKw && soKw <= 350) {
    giaTienDien =
      gia50KwDau * 50 +
      50 * gia50KwKe +
      100 * gia100KwKe +
      (soKw - 200) * gia150KwKe;
  } else {
    giaTienDien =
      gia50KwDau * 50 +
      50 * gia50KwKe +
      100 * gia100KwKe +
      150 * gia150KwKe +
      (soKw - 350) * giaTren350Kw;
  }
  console.log({ giaTienDien });

  document.getElementById("ketQuaTienDien").innerHTML =
    "Họ tên : " +
    nhapHoTen +
    "<br> Tiền điện : " +
    giaTienDien.toLocaleString() +
    " đ";
}

// ? TÍNH THUẾ THU NHẬP CÁ NHÂN

function tinhThuNhapChiuThue(thuNhap, soNguoi) {
  let tong = "";
  tong = thuNhap - 4e6 - soNguoi * 1.6e6;
  if (tong <= 0) {
    tong = 0;
    alert("Nhập số không hợp lệ");
    return tong;
  }
  if (tong > 0) {
    return tong;
  }
}

function tinhTienThue() {
  let hoTen = document.getElementById("hoTen").value;
  let thuNhap = document.getElementById("thuNhapNam").value * 1;
  let soNguoi = document.getElementById("soNguoiPhuThuoc").value * 1;
  console.log({ hoTen, thuNhap, soNguoi });

  let thuNhapChiuThue = tinhThuNhapChiuThue(thuNhap, soNguoi);
  console.log({ thuNhapChiuThue });

  let tongTienThue = "";

  if (thuNhap <= 60e6) {
    tongTienThue = thuNhapChiuThue * 0.05;
  } else if (60e6 < thuNhap && thuNhap <= 120e6) {
    tongTienThue = thuNhapChiuThue * 0.1;
  } else if (120e6 < thuNhap && thuNhap <= 210e6) {
    tongTienThue = thuNhapChiuThue * 0.15;
  } else if (210e6 < thuNhap && thuNhap <= 384e6) {
    tongTienThue = thuNhapChiuThue * 0.2;
  } else if (384e6 < thuNhap && thuNhap <= 624e6) {
    tongTienThue = thuNhapChiuThue * 0.25;
  } else if (624e6 < thuNhap && thuNhap <= 960e6) {
    tongTienThue = thuNhapChiuThue * 0.3;
  } else {
    tongTienThue = thuNhapChiuThue * 0.35;
  }

  console.log({ tongTienThue });

  document.getElementById("ketQuaThue").innerHTML =
    "Họ tên : " +
    hoTen +
    "<br> Thuế thu nhập cá nhân : " +
    tongTienThue.toLocaleString() +
    " VND";
}

// ? TÍNH TIỀN CÁP
function hienAnSoKetNoi() {
  // Lấy giá trị được chọn từ dropdown
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;

  // Lấy thẻ input số kết nối
  let soKetNoi = document.getElementById("soKetNoi");

  // Nếu loại khách hàng là "vip", hiện ô nhập số kết nối, ngược lại ẩn đi
  if (loaiKhachHang == 2) {
    soKetNoi.style.display = "block";
  } else {
    soKetNoi.style.display = "none";
  }
}

function tinhGiaTienCap(loaiKhachHang,soKenh,) {
  if (loaiKhachHang == 0) {
    giaCap=0;
    alert("Vui lòng chọn loại khách hàng");
    return giaCap;
  }
  if (loaiKhachHang == 1) {
    giaCap = soKenh * 7.5 + 25;
    return giaCap;
  }
  if (loaiKhachHang == 2) {
    giaCap = soKenh * 50 + 90;
    return giaCap;
  }
}

function tinhTienCap() {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let maKh = document.getElementById("maKh").value;
  let soKenh = document.getElementById("soKenh").value * 1;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  console.log({ loaiKhachHang, maKh, soKenh });

  let giaTienCap = tinhGiaTienCap(loaiKhachHang,soKenh,soKetNoi);
  
  if (soKetNoi<=10){
    giaTienCap=giaTienCap;
  }
  else {
    giaTienCap=giaTienCap+(soKetNoi-10)*5;
  }
  console.log({ giaTienCap });

document.getElementById("ketQuaTienCap").innerHTML="Mã khách hàng : " + maKh + "<br><br> Tiền Cáp : " + " $ " + giaTienCap.toLocaleString() ;

}

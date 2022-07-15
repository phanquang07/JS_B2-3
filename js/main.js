/**
*? Ex1: Tính lương nhân viên
* Khối 1: Input
* Khai báo biến
* + luongMotNgay: 100.000
* + soNgayLam
* + tongLuong
* Khối 2: Process
* tongLuong = LuongMotNgay * soNgayLam
* Khối 3: Output
* in ra tongLuong
* */

function tinhLuong() {
  var luongMotNgay = 100000
  var soNgayLam = document.getElementById('date-time').value
  var tongLuong = 0
  tongLuong = luongMotNgay * soNgayLam
  document.getElementById('salary').innerHTML = 'Tổng lương: ' + tongLuong
}
document.getElementById('btn-salary').onclick = tinhLuong


/**
 *? Ex2: Tính giá trị trung bình
 * Khối 1: Input
 * Khai báo 5 phần tử
 * Khai báo mảng arrNum gồm 5 phần tử
 * Khai báo biến tbCong và gán bằng 0
 * Khối 2: Process
 * Lặp qua các phần tử
 * tbCong += arrNum[i] / 5
 * Khối 3: Output
 * in ra tbCong
 */


function tinhTbCong() {
  var num1 = document.getElementById('inputNum1').value
  var num2 = document.getElementById('inputNum2').value
  var num3 = document.getElementById('inputNum3').value
  var num4 = document.getElementById('inputNum4').value
  var num5 = document.getElementById('inputNum5').value
  var arrNum = [num1, num2, num3, num4, num5]
  var tbCong = 0
  for (var i in arrNum) {
    tbCong += arrNum[i] / 5
  }
  document.getElementById('sumNum').innerHTML = 'Trung bình cộng: ' + tbCong
}

document.getElementById('btn-sum').onclick = tinhTbCong



/**
 *? Ex3: Quy đổi tiền
 * Khối 1: Input
 * Khai báo
 * + giaUSD = 23.500 
 * + soTien
 * Khối 2: Process
 * tiGia = giaUSD * soTien
 * Khối 3: Output
 * in ra tiGia
 *  */
function exchangeRate() {
  var giaUSD = 23500
  var soTien = document.getElementById('inputMoney').value
  var tiGia = 0
  tiGia = giaUSD * soTien
  document.getElementById('money').innerHTML = 'Thành tiền: ' + tiGia + ' VNĐ'
}

document.getElementById('btn-money').onclick = exchangeRate


/**
 *? Ex4: Tính chu vi, diện tích hcn
 * Khối 1: Input
 * Khai báo biến
 * + chieuDai
 * + chieuRong
 * + chuVi
 * + dienTich
 * Khối 2: Process
 * chuVi = (chieuDai + chieuRong) * 2
 * dienTich = (chieuDai * chieuRong)
 * Khối 3: Output
 * In ra chuVi, dienTich
 */

function tinhHcn() {
  const chieuDai = document.getElementById('chieuDai').value
  const chieuRong = document.getElementById('chieuRong').value
  var chuVi = 0
  var dienTich = 0
  chuVi = (Number(chieuDai) + Number(chieuRong)) * 2
  dienTich = chieuDai * chieuRong
  document.getElementById('chuViDienTich').innerHTML = 'Chu vi: ' + chuVi + '<br>' + 'Diện tích: ' + dienTich
}

document.getElementById('btn-calc').onclick = tinhHcn


/**
 *? Ex5: Tính tổng 2 ký số
 * Khối 1: Input
 * Khai báo 
 * + so (số có 2 chữ số)
 * + soHangChuc
 * + soHangDonVi
 * + tongHaiSo
 * Khối 2: process
 * soHangChuc = Math.floor(so / 10)
 * soHangDonVi = so % 10
 * tongHaiSo = soHangChuc + soHangDonVi
 * Khối 3: Output
 * in ra tongHaiSo
 */

function tinhTong() {
  var so = document.getElementById('inputNum').value
  var soHangChuc = Math.floor(so / 10)
  var soHangDonVi = so % 10
  var tongHaiSo = Number(soHangChuc) + Number(soHangDonVi)
  document.getElementById('sumNum2').innerHTML = 'Tổng 2 ký số: ' + tongHaiSo
}

document.getElementById('btn-sum2').onclick = tinhTong


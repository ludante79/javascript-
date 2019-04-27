// Lấy danh sách điểm từ giao diện 

var laydiemTB = document.getElementsByClassName("diem");
console.log(laydiemTB);

var mangDiem = [];
for (var i = 0; i < laydiemTB.length; i++) {
	var diemTB = parseFloat(laydiemTB[i].innerHTML);
	mangDiem.push(diemTB);
}
console.log(mangDiem);

//Tinh diem trung binh 

function tinhDiemTrungBinh() {
	var sum = 0;
	var avg = 0;
	for (var i = 0; i < mangDiem.length; i++) {
		sum = sum + mangDiem[i];
	}
	avg = sum / mangDiem.length;
	console.log(avg);
	timSinhVienYeu();
	timSinhVienDiemCaoNhat();
	sapXepSinhVien();
	
	console.log(mangDiem);
	var mangSapXep = quick_Sort(mangDiem); 
	console.log(mangSapXep);
}
//Tìm sinh viên có điểm cao nhất 

function timSinhVienDiemCaoNhat() {
	var max = mangDiem[0];
	for (var i = 1; i < mangDiem.length; i++) {
		if (max < mangDiem[i]) {
			max = mangDiem[i];
		}
	}
	console.log(max);
}
// Kiem tra co bao nhieu sinh vien yeu
function timSinhVienYeu() {
	// Nếu sinh viên có điểm trung bình nhỏ hơn 5 thì là sinh viên Yếu

	var sum = 0;
	for (var i = 0; i < mangDiem.length; i++) {
		if (mangDiem[i] < 5) {
			sum++;
		}
	}
	console.log(sum);
}
function sapXepSinhVien(){
	//Interchange sort
	for (var i = 0; i < mangDiem.length -1 ; i++){
		for (var j = i+1; j< mangDiem.length; j++){
			if (mangDiem[i]<mangDiem[j]){
				var temp = mangDiem[i];
				mangDiem[i] = mangDiem[j];
				mangDiem[j] = temp;
			}
		}
	}
	console.log(mangDiem);
}
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}


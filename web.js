//code comment
function dy(){
    var arr=document.getElementsByTagName('input');
    var name1=arr[0].value;
    var num1=arr[1].value;
    var year1=arr[2].value;
    var gamil1=arr[3].value;
    var pass1=arr[4].value;
    if(name1==""||num1==""||year1==""||gamil1==""||pass1==""){
        alert("ban chua nhap day du thong tin");
        return;
    }
    var dc=confirm('ban co chac muon dang ky khong\n'+name1+"\n"+num1+"\n"+year1+"\n"+gamil1+"\n"+pass1);
    if(dc==1){
        alert("dang ky thanh cong");
    }
}
function quay(){
    document.getElementById('dangnhap')[0].xao();;
}
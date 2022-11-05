function dy(){
    var arr=document.getElementsByTagName('input');
    var name1=arr[0].value;
    var num1=arr[1].value;
    var year1=arr[2].value;
    var gamil1=arr[6].value;
    var pass1=arr[7].value;
    var gender="";
    if(arr[3].checked){
        gender="Nam";
    }
    else if(arr[4].checked){
        gender="Nữ";
    }
    else{
        gender="LGBT";
    }
    if(name1==""){
        alert("bạn chưa ghi tên");
        return;
    }
    if(num1==""){
        alert("bạn chưa ghi số điện thoại");
        return;
    }
    if(year1==""){
        alert("bạn chưa nhập sinh");
        return;
    }
    if(gamil1==""){
        alert("bạn chưa ghi email");
        return;
    }
    if(pass1==""){
        alert("bạn chưa ghi mật khẩu");
        return;
    }

    var dc=confirm('ban co chac muon dang ky khong\n'+name1+"\n"+num1+"\n"+gender+"\n"+year1+"\n"+gamil1+"\n"+pass1);
    if(dc==1){
        alert("dang ky thanh cong");
    }
    else{
        alert("dang ky that bai");
    }
}
function signup(e) {
    event.preventDefault();
    var name1=document.getElementById("name1").value;
        var num1=document.getElementById("num1").value;
        var year1=document.getElementById("year1").value;
        var gamil1=document.getElementById("gmail1").value;
        var pass1=document.getElementById("pass1").value;
    var user = {
        name1:name1,
        num1:num1,
        year1:year1,
        gamil1:gamil1,
        pass1:pass1,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(name1, json);
    alert("dang ky thanh cong");
  }
  function login(e) {
    event.preventDefault();
    var name1 = document.getElementById("name1").value;
    var pass1 = document.getElementById("pass1").value;
    var user = localStorage.getItem(name1);
    var data = JSON.parse(user);
    if (!user) {
      alert("vui long kiem tra lai ten dang nhap hoac mat khau");
    } else if (
      name1 == data.name1 &&
      pass1 == data.pass1
    ) {
      alert("dang nhap thanh cong");
      window.location.href = "web.html";
    } else {
      alert("dang nhap that bai");
    }
  }


//初始化頁面
function initform(){
//第一個文字框獲取焦點
//document.getElementById("username").focus();
//產生驗證碼
getCode();
}
//產生驗證碼
function getCode(){
var code = String(Math.round(Math.random()*10000));
while(code.length<4){
code = "0"+code;
}
document.getElementById("newcode").value=code;
}
//剔除空格
function trim(){
return this.replace(/(^s*)|(s*$)/g, "");
}
//顯示錯誤提示
function shouWarn(uid,msg){
document.getElementById(uid).innerHTML=msg;
document.getElementById(uid).style.display="";
}
//清空錯誤提示
function clearWarn(uid){
document.getElementById(uid).style.display="none";
}
//檢驗驗證碼
function checkCode(code,uid){
var checkcode = document.getElementById("newcode").value;
if(checkcode==code){
var msg="<font color='#0F0'>√√√√√</font>";
shouWarn(uid,msg)
return (true);
}else{
msg="<font color='#F00'>驗證碼輸入錯誤!</font>";
shouWarn(uid,msg);
return (false);
}
}
//驗證使用者名稱
function checkUserName(usename,uid){
var uName = usename.trim();
var reg1 = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,19}$/;
if(reg1.test(uName)==true){
var msg="<font color='#0F0'>√√√√√</font>";
shouWarn(uid,msg)
return (true);
}else{
msg="<font color='#F00'>使用者名稱輸入不規範!</font>";
shouWarn(uid,msg);
return (false);
}
}
//驗證密碼
function checkPassword(password,uid){
var pwd = password.trim();
var reg2 = /^[a-zA-Z0-9]{6,20}$/;
if(reg2.test(pwd)==true){
var msg="<font color='#0F0'>√√√√√</font>";
shouWarn(uid,msg);
return (true);
}else{
msg="<font color='#F00'>密碼輸入不規範!</font>";
shouWarn(uid,msg);
return (false);
}
}
//驗證確認密碼
function checkRePassword(repwd,uid){
var pwd = repwd.trim();
var repassword = document.getElementById("password").value.trim();
if(repassword==pwd){
var msg="<font color='#0F0'>√√√√√</font>";
shouWarn(uid,msg);
return (true);
}else{
msg="<font color='#F00'>密碼與上次輸入不一致!</font>";
shouWarn(uid,msg);
return (false);
}
}

// 驗證郵箱
function checkEmail(email,uid){
var em = email.trim();
var reg3 = /^[a-zA-Z0-9_-]{5,}@([a-zA-Z0-9_-]{2,})+.+(com|gov|net|com.cn|edu.cn)$/;
if(reg3.test(em)==true){
var msg="<font color='#0F0'>√√√√√</font>";
shouWarn(uid,msg);
return (true);
}else{
msg="<font color='#F00'>郵箱地址輸入不規範!</font>";
shouWarn(uid,msg);
return (false);
}
}
// 判斷是否選擇性別
function checkSex(form,uid){
if(form.chk_sex[0].checked||form.chk_sex[1].checked){
clearWarn(uid);
return(true);
}else{
msg="<font color='#F00'>請選擇性別!</font>";
shouWarn(uid,msg);
return(false);
}
}
//判斷是否選擇啟用空間
function checkAccept(form,uid){
if(form.chk_accept.checked){
clearWarn(uid);
return(true);
}else{
msg="<font color='#F00'>請啟用百度空間!</font>";
shouWarn(uid,msg);
return(false)
}
}

//判斷表單引數
function checkInput(){
var form = document.register;
if(checkUserName(form.username.value,"username_warn")&&checkPassword(form.password.value,"pwd_warn")&&checkRePassword
(form.repwd.value,"repwd_warn")&&checkSex(form,"sex_warn")&&checkEmail(form.email.value,"email_warn")&&checkCode(form.code.value,"code_warn")&&checkAccept(form,"accept_warn")){
alert("恭喜,註冊成功!");
form.submit();
}else{
alert("註冊失敗,請按提示輸入資訊!");
}
}


window.onload = function(){
      let obj_map = document.getElementById('mapframe');
      obj_map.style.display = "none" ;
      let mapbtn = document.getElementById('openmap')
      let obj_select = document.getElementById("Readmenu");
      let obj_div = document.getElementById("menu");
      obj_div.style.display ="none";
      obj_select.onchange = function(){
      obj_div.style.display = this.value==2? "block" : "none";
      }
      let map = 0;
      mapbtn.addEventListener('click',function(m){
            map++;
      if (map==1){
            showmap(m)
      }else{
            closemap(m)
            map=0
      }
            function showmap(){
                  obj_map.style.display = "block" ;
            }

            function closemap(){
                  obj_map.style.display = "none" ;
            }
      },false);
}

// function follow()  
//               {  
//                   var parm1 = document.getElementById("follow").value;
//                   let parm2 = document.getElementById("name").value;
//                   var myurl="Favorite.html"+"?"+"parm1="+parm1;  
//                   window.location.assign(encodeURI(myurl));  
//              }

 rest = [
      restname = '肯德基',
      restimg ='https://www.mirrormedia.com.tw/assets/images/20190115091118-cde2982e382bc9c6c18ba229501706b8-mobile.jpg',
      restthx='感謝您追蹤肯德基，餐廳新菜色，敬請期待！'
      ]


// function locals()
// {
// localStorage.setItem('restname','肯德基');
// localStorage.setItem('thx','感謝您追蹤肯德基，餐廳新菜色，敬請期待！');
// window.location.href="Favorite.html";
// }
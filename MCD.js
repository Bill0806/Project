
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

      // obj.rest1=[
      //       name=document.getElementById('name').value
      // ]
      
}

// function follow()  
//               {  
//                   var parm1 = document.getElementById("follow").value;
//                   let parm2 = document.getElementById("name").value;
//                   var myurl="Favorite.html"+"?"+"parm1="+parm1;  
//                   window.location.assign(encodeURI(myurl));  
//              }
      function locals()
      {
      localStorage.setItem('restname02','麥當勞');
      localStorage.setItem('thx02','感謝您追蹤麥當勞，餐廳新菜色，敬請期待！');
      window.location.href="Favorite.html";
      }
   
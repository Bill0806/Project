window.onload = function(){
      let datas = ['麥當勞','肯德基','胖老爹','聽見花開咖啡馆','觅时蜜食','伴珈家','古拉爵','帕狄尼諾','波隆那'];
      let itemBox = document.getElementById("item-box");
      createList(datas);
      document.getElementById("ipt").addEventListener('input',function(e) {
         // console.log('e.target.value',e.target.value)
          let val = e.target.value;
          let arr = [];
          for(let i = 0;i<datas.length;i++){
            //   toString 將數字轉為字串 indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果没有找到匹配的字符串则返回 -1。
               if(datas[i].toString().indexOf(val.toString())!=-1){
                   arr.push(datas[i])
                
               }
            let search = document.getElementById('search');
            search.addEventListener('click',function(){
                if (datas[i]=="麥當勞"){
                    window.location.href="file:///C:/Users/user/Desktop/Project/MCD.html";
                    document.getElementById('ipt').value='';
                }
                else{
                    window.location.href="file:///C:/Users/user/Desktop/Project/KFC.html";
                    document.getElementById('ipt').value='';
                }
            },false)
            
          }
          itemBox.innerHTML = '';
          createList(arr);
      });
    //   將Data裡的資料再放回到itembox
      function createList(datas){
          for(let i = 0;i<datas.length;i++){
              let newDom = document.createElement("div");
              newDom.className = "item";
              newDom.innerHTML = datas[i];
              itemBox.appendChild(newDom);
          }
      }
    }

changelist();
        function changelist()
        {
              switch(document.data.list.value)
              {
                    case "1":
                    document.all.namelist.innerHTML="<ul><li><button><option value=1>麥當勞</button></li><li><button><option value=2>肯德基</button></li><li><button><option value=3>胖老爹</button></li></ul>"
                    break;
                    case "2":
                    document.all.namelist.innerHTML="<ul><li><button><option value=1>聽見花開咖啡館</button></li><li><button><option value=2>觅时蜜食</button></li><li><button><option value=3>伴珈家</button></li></ul>"
                    break;
                    case "3":
                    document.all.namelist.innerHTML="<ul><li><button><option value=1>古拉爵</button></li><li><button><option value=2>帕狄尼諾</button></li><li><button><option value=3>波隆那</button></li></ul>"
                    break;
              }
            
        }

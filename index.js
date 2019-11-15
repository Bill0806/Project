window.onload = function(){
      let datas = ['麥當勞','肯德基','胖老爹','聽見花開咖啡馆','觅时蜜食','伴珈家','古拉爵','帕狄尼諾','波隆那'];
      let itemBox = document.getElementById("item-box");
      createList(datas);
      document.getElementById("ipt").addEventListener('input',function(e) {
         // console.log('e.target.value',e.target.value)
          let val = e.target.value;
          let arr = [];
          for(let i = 0;i<datas.length;i++){
               if(datas[i].toString().indexOf(val.toString())!=-1){
                   arr.push(datas[i])
               }
          }
          itemBox.innerHTML = '';
          createList(arr);
      });
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
              switch(document.data.test.value)
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

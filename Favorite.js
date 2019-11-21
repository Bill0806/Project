let show = document.getElementById('bt1');
 show.addEventListener('click',function(){
    if (localStorage.length ==4){
    lg1 ()
    function lg1(){
    let restname = localStorage.getItem('restname');
    let tx = localStorage.getItem('thx');
    console.log(localStorage);
    let ul = document.getElementById('my-list');
    let li = document.createElement('li');
    let rsn = document.createTextNode(restname);
    let div = document.createElement('div');
    div.style.color='red';div.style.fontSize=16+'px';
    let div01 = document.createElement('div');
    div01.style.color='red';div01.style.fontSize=24+'px';
    let thx = document.createTextNode(tx);
    let trash;
    let img = document.createElement('img');
    img.src="https://www.mirrormedia.com.tw/assets/images/20190115091118-cde2982e382bc9c6c18ba229501706b8-mobile.jpg" ;
    img.style.height='100px';
    (trash = document.createElement('button')).innerHTML="取消追蹤";
    let button = trash.id = "disfollow";
    trash.className = 'btn-sm  btn-outline-danger mt-1 ;'
    div.appendChild(img);
    li.appendChild(div);
    div.appendChild(thx)
    div01.appendChild(rsn);
    li.appendChild(div01);
    li.appendChild(div);
    li.appendChild(trash);
    ul.appendChild(li);

    let mylist = document.getElementById('my-list');
        // console.log (mylist);
            mylist.addEventListener('click',function(event){
                // console.log(event.target.id)
                // console.log(event.target.parentNode)
                let parent = document.getElementById('mylist');
                let child = document.getElementById('disfollow').parentNode;
                if(event.target.id == 'disfollow'){
                    event.target.parentNode.remove()
                    localStorage.removeItem('restname')
                }
            },false)
        }
        lg2 ()
        function lg2(){
        let restname = localStorage.getItem('restname02');
        let tx = localStorage.getItem('thx02');
        console.log(localStorage);
        let ul = document.getElementById('my-list');
        let li = document.createElement('li');
        let rsn = document.createTextNode(restname);
        let div = document.createElement('div');
        div.style.color='red';div.style.fontSize=16+'px';
        let div01 = document.createElement('div');
        div01.style.color='red';div01.style.fontSize=24+'px';
        let thx = document.createTextNode(tx);
        let trash;
        let img = document.createElement('img');
        img.src="https://media.bnextmedia.com.tw/image/album/2019-04/img-1554178414-23505.jpg" ;
        img.style.height='100px';
        (trash = document.createElement('button')).innerHTML="取消追蹤";
        let button = trash.id = "disfollow";
        trash.className = 'btn-sm  btn-outline-danger mt-1 ;'
        div.appendChild(img);
        li.appendChild(div);
        div.appendChild(thx)
        div01.appendChild(rsn);
        li.appendChild(div01);
        li.appendChild(div);
        li.appendChild(trash);
        ul.appendChild(li);
    
        let mylist = document.getElementById('my-list');
            // console.log (mylist);
                mylist.addEventListener('click',function(event){
                    // console.log(event.target.id)
                    // console.log(event.target.parentNode)
                    let parent = document.getElementById('mylist');
                    let child = document.getElementById('disfollow').parentNode;
                    if(event.target.id == 'disfollow'){
                        event.target.parentNode.remove()
                        localStorage.removeItem('restname')
                    }
                },false)
            }
    }

 },false)

// function  view (){
    


//      var url=location.href;  
    
//                 var tmp1=url.split("?")[1];  
    
//                 var tmp2=tmp1.split("&")[0];  
    
//                 var tmp3=tmp2.split("=")[1];  
    
//                 var param1=tmp3;  
    
//     let show = document.getElementById('bt1')
//     show.addEventListener('click',function(t){
//         if(param1 == "follow01"){
//             // console.log(param1);
//             show01(t);
//         }
//         else if (param1 == "follow02"){
//             // console.log(param1);
//             show02(t);
//         }
//     },false)}

   
    
//     function show01(){
//         let trash; 
//         let img = document.createElement('img');
//         img.src="https://media.bnextmedia.com.tw/image/album/2019-04/img-1554178414-23505.jpg";
//         (trash = document.createElement('button')).innerHTML="取消追蹤";
//         let button = trash.id = "disfollow";
//         (div01 = document.createElement('div')).innerHTML="麥當勞";
//         (div02 = document.createElement('div')).innerHTML="感謝您的追蹤，餐廳新菜色，敬請期待！";
//         let ul = document.getElementById('my-list');
//         let li = document.createElement('li');
//         div01.style.fontWeight='bold';div01.style.fontSize=28+'px';div01.style.marginBottom = '20px';
//         div02.style.color='red';div02.style.fontSize=16+'px';
//         img.style.height=150+'px';
//         li.className = 'col  d-flex justify-content-between align-self-center  mb-3";'
//         trash.className = 'btn btn-outline-danger mt-1 ; width:10px ; hight:10px;'
//         div01.appendChild(img);
//         div01.appendChild(div02);
//         div01.appendChild(trash);
//         li.appendChild(div01);
//         ul.appendChild(li);

//         let mylist = document.getElementById('my-list');
//         // console.log (mylist);
//             mylist.addEventListener('click',function(event){
//                 // console.log(event.target.id)
//                 // console.log(event.target.parentNode)
//                 let parent = document.getElementById('mylist');
//                 let child = document.getElementById('disfollow').parentNode;
//                 if(event.target.id == 'disfollow'){
//                     event.target.parentNode.remove()
//                 }
//             },false)
        
//     }

//     function show02(){
//         let trash; 
//         let img = document.createElement('img');
//         img.src="https://www.mirrormedia.com.tw/assets/images/20190115091118-cde2982e382bc9c6c18ba229501706b8-mobile.jpg";
//         (trash = document.createElement('button')).innerHTML="取消追蹤";
//         let button = trash.id = "disfollow";
//         (div01 = document.createElement('div')).innerHTML="肯德基";
//         (div02 = document.createElement('div')).innerHTML="感謝您的追蹤，餐廳新菜色，敬請期待！";
//         let ul = document.getElementById('my-list');
//         let li = document.createElement('li');
//         div01.style.fontWeight='bold';div01.style.fontSize=28+'px';div01.style.marginBottom = '20px';
//         div02.style.color='red';div02.style.fontSize=16+'px';
//         img.style.height=150+'px';
//         li.className = 'col  d-flex justify-content-between align-self-center  mb-3";'
//         trash.className = 'btn btn-outline-danger mt-1 ; width:10px ; hight:10px;'
//         div01.appendChild(img);
//         div01.appendChild(div02);
//         div01.appendChild(trash);
//         li.appendChild(div01);
//         ul.appendChild(li);

//         let mylist = document.getElementById('my-list');
//             mylist.addEventListener('click',function(event){
//                 let parent = document.getElementById('mylist');
//                 let child = document.getElementById('disfollow').parentNode;
//                 if(event.target.id == 'disfollow'){
//                     event.target.parentNode.remove()
//                 }
//             },false)
        
    // }
   


window.onload = function(){
     var url=location.href;  
    
                var tmp1=url.split("?")[1];  
    
                var tmp2=tmp1.split("&")[0];  
    
                var tmp3=tmp2.split("=")[1];  
    
                var param1=tmp3;  
    
    let show = document.getElementById('bt1')
    show.addEventListener('click',function(t){
        if(param1 == "follow"){
            // console.log(param1);
            showtodo(t);
        }
    },false)}

   
    
    function showtodo(){
        let trash; 
        let img = document.createElement('img');
        img.src="https://media.bnextmedia.com.tw/image/album/2019-04/img-1554178414-23505.jpg";
        (trash = document.createElement('button')).innerHTML="取消追蹤";
        let button = trash.id = "disfollow";
        (div01 = document.createElement('div')).innerHTML="麥當勞";
        (div02 = document.createElement('div')).innerHTML="感謝您的追蹤，餐廳新菜色，敬請期待！";
        let ul = document.getElementById('my-list');
        let li = document.createElement('li');
        div01.style.fontWeight='bold';div01.style.fontSize=28+'px';div01.style.marginBottom = '20px';
        div02.style.color='red';div02.style.fontSize=16+'px';
        img.style.height=100+'px';
        li.className = 'col  d-flex justify-content-between align-self-center  mb-3";'
        trash.className = 'btn btn-outline-danger mt-1 ; width:10px ; hight:10px;'
        div01.appendChild(img);
        div01.appendChild(div02);
        div01.appendChild(trash);
        li.appendChild(div01);
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
                }
            },false)
        
    }
   


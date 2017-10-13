window.onload = function(){

    var timer = 0;

    var box = document.getElementById('box');

    var tittle = document.querySelectorAll('p span');

    var right = document.querySelectorAll('.oDiv');

    var imgs = right[0].querySelectorAll('img');
    
    var text = right[0].querySelectorAll('li');

    text[0].style.backgroundColor = 'red';
    tittle[0].style.backgroundColor = 'red';
    var a = 0;
    var num = 0;
    
    fn()
    function fn(){
        clearInterval(timer);
        timer = setInterval(function(){
            
            imgs[a].className = ''
            text[a].style.background = '';
            tittle[num].style.background = '';
            a++;
            if(a>text.length-1){
                a=0;
                right[num].style.display = 'none';
                num++
            }
            if(num>right.length-1){
                num=0;
            }
            text = right[num].querySelectorAll('li');
            imgs = right[num].querySelectorAll('img');
            imgs[a].className = 'active'
            text[a].style.backgroundColor='red';
            right[num].style.display='block';
            tittle[num].style.background = 'red';
        },1000);
    };

    for(var i=0;i<tittle.length;i++){
        tittle[i].index = i;
        tittle[i].onmouseover = function(){
            a=0;
            for(var i=0;i<tittle.length;i++){
                text = right[i].querySelectorAll('li');
                imgs = right[i].querySelectorAll('img');
                for(var j=0;j<imgs.length;j++){
                    imgs[j].className = '';
                    text[j].style.backgroundColor='';
                };
            };
            text[a].style.backgroundColor = '';
            right[num].style.display='none';
            tittle[num].style.backgroundColor='';
           
            num = this.index;
            right[num].style.display = 'block';
            imgs = right[num].querySelectorAll('img');
            imgs[a].className = 'active';
            
            tittle[num].style.background = 'red';
            
            text = right[num].querySelectorAll('li');
            text[a].style.backgroundColor='red';
        };
    }

    for(var k=0;k<right.length;k++){
        
        right[k].onmouseover = function(){
            text = this.querySelectorAll('li');
            imgs = this.querySelectorAll('img');
            for(var i=0;i<text.length;i++){
               
                text[i].index = i;
                text[i].onmouseover = function(){
                    for(var i=0;i<text.length;i++){
                        text[i].style.background = '';
                        imgs[i].className = '';
                    }
                    imgs[this.index].className = 'active';
                    this.style.background = 'red';
                };
                text[i].onmouseout = function(){
                    a = this.index;
                };
            }
        }
    }

    box.onmouseover = function(){
        clearInterval(timer);
    }
    box.onmouseout = function(){
        fn();
    }

}
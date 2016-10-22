//定义声音
var oAudio=new Audio();
var bgsound=new Audio();


/*function stopAudio(){
  oAudio.stop();
  }*/
//滑屏相关变量
var touch_rot=0;//滑屏幕方向
var theoneY=false;
var theotherY=false;
var theoneX=false;
var theotherX=false;


function playvideo(url,fct)
{
    s("W0r").style.top="0%";
    s("video").innerHTML="<video id='videoMP4' style='width:100%; height:100%;' autoplay"+" onEnded="+"'"+fct+"'"+" controls><source src="+url+".ogv type='video/ogg'><source src="+url+".mp4 type='video/mp4'></video>";
    //eval(fct);
}

function playvideoat(id,url,fct)
{
    //s("W0r").style.top="0%";
    s(id).innerHTML="<video id='videoMP4' style='width:100%; height:100%;' autoplay"+" onEnded="+"'"+fct+"'"+" controls><source src="+url+".ogv type='video/ogg'><source src="+url+".mp4 type='video/mp4'></video>";
    //eval(fct);
}


function dragobj_a(id1,id2,a,b,c,d,code1,code2)
{
    var target=id1;
    var touchtarget=id2;
    s(id2).addEventListener("touchstart",function()
                            {
                                s("Wm").addEventListener("touchmove",drag,false);
                                s("Wm").addEventListener("touchend",dragend,false);
                            },false);
    function dragend()
    {
        s("Wm").removeEventListener("touchmove",drag,false);
        s("Wm").removeEventListener("touchend",dragend,false);

        var ax=parseInt(s(target).style.left)+(parseInt(s(target).style.width)>>1);
        var ay=parseInt(s(target).style.top)+(parseInt(s(target).style.height)>>1);

        if(ax>a&&ax<b&&ay>c&&ay<d)
        {
            eval(code1);
        }else
        {
            eval(code2);
        }
    }

    function drag(ev)
    {
        ev.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
        s(target).style.left=(((ev.targetTouches[0].pageX-parseInt(s("Wm").style.left)))/scaleXY)-((parseInt(s(target).style.width))>>1)+"px";
        s(target).style.top=(((ev.targetTouches[0].pageY-parseInt(s("Wm").style.top)))/scaleXY)-((parseInt(s(target).style.height))>>1)+"px";
        s(touchtarget).style.left=(((ev.targetTouches[0].pageX-parseInt(s("Wm").style.left)))/scaleXY)-((parseInt(s(touchtarget).style.width))>>1)+"px";
        s(touchtarget).style.top=(((ev.targetTouches[0].pageY-parseInt(s("Wm").style.top)))/scaleXY)-((parseInt(s(touchtarget).style.height))>>1)+"px";
    }
}
function dragobj(id,a,b,c,d,code1,code2)
{
    var target=id;
    s(id).addEventListener("touchstart",function()
                           {
                               s("Wm").addEventListener("touchmove",drag,false);
                               s("Wm").addEventListener("touchend",dragend,false);
                           },false);
    function dragend()
    {
        s("Wm").removeEventListener("touchmove",drag,false);
        s("Wm").removeEventListener("touchend",dragend,false);

        var ax=parseInt(s(target).style.left)+(parseInt(s(target).style.width)>>1);
        var ay=parseInt(s(target).style.top)+(parseInt(s(target).style.height)>>1);

        if(ax>a&&ax<b&&ay>c&&ay<d)
        {
            eval(code1);
        }else
        {
            eval(code2);
        }
    }

    function drag(ev)
    {
        ev.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
        s(target).style.left=(((ev.targetTouches[0].pageX-parseInt(s("Wm").style.left)))/scaleXY)-((parseInt(s(target).style.width))>>1)+"px";
        s(target).style.top=(((ev.targetTouches[0].pageY-parseInt(s("Wm").style.top)))/scaleXY)-((parseInt(s(target).style.height))>>1)+"px";
    }
}

function playsound(url)
{
    oAudio.src=url;
    oAudio.play();
}
function playbgsound(url)
{
    bgsound.src=url;
    bgsound.loop="loop";
    bgsound.play();
}

function playsoundand(url,fct)
{
    oAudio.src=url;
    oAudio.play();
    oAudio.onended=window[fct]();
}



function touchstartEvent(id,fct)
{
    s(id).addEventListener('touchstart',window[fct],false);
}
function addTouchEvent(id,fct)
{
    s(id).addEventListener('touchstart',touchstart,false);
    s(id).addEventListener('touchend',touchend,false);
    s(id).addEventListener('touchend',window[fct],false);
}
function touchstart(ev)
{
    //alert("touchstart");
    ev.preventDefault();  //阻止出现滚动条
    theoneX=ev.touches[0].clientX;
    theoneY=ev.touches[0].clientY;
    touch_rot=0;
}
function touchend(ev)
{
    ev.preventDefault();  //阻止出现滚动条
    theotherX=ev.changedTouches[0].clientX;
    theotherY=ev.changedTouches[0].clientY;
    if(Math.abs(theotherY-theoneY)>Math.abs(theotherX-theoneX))
    {
        if(theotherY-theoneY>20)
        {
            //nextpage("P2r",100,900,"Y");
            touch_rot=2;
        }else if(theotherY-theoneY<-20)
        {
            //nextpage("P2r",-100,900,"Y");
            touch_rot=1;
        }
    }else
    {
        if(theotherX-theoneX>20)
        {
            //nextpage("P2r",100,900,"Y");
            touch_rot=4;
        }else if(theotherX-theoneX<-20)
        {
            //nextpage("P2r",-100,900,"Y");
            touch_rot=3;
        }
    }
}



function nextpage(id,n,p,r)
{
    switch(r)
    {
        case "X":
        if(n<=-10&&parseInt(s(id).style.left)>-p)
        {
            setTimeout(function(){nextpage(id,n+10,p,"X")},20);
            s(id).style.left=parseInt(s(id).style.left)-10+"%";
        }
        else if(n>=10&&parseInt(s(id).style.left)<-0)
        {
            setTimeout(function(){nextpage(id,n-10,p,"X")},20);
            s(id).style.left=parseInt(s(id).style.left)+10+"%";
        };
        break;
        case "Y":
        if(n<=-10&&parseInt(s(id).style.top)>-p)
        {
            //&&parseInt(s(id).style.top)>-p;
            setTimeout(function(){nextpage(id,n+10,p,"Y")},20);
            s(id).style.top=parseInt(s(id).style.top)-10+"%";
        }
        else if(n>=10&&parseInt(s(id).style.top)<-0)
        {
            //&&parseInt(s(id).style.top)<-0;
            setTimeout(function(){nextpage(id,n-10,p,"Y")},20);
            s(id).style.top=parseInt(s(id).style.top)+10+"%";
        };
        break;
        default:
        break;
    }
}

function matchWH(w,h)
{
    var bw=document.documentElement.clientWidth;
    var bh=document.documentElement.clientHeight;
    var scalew=bw/w;
    var scaleh=bh/h;
    scaleXY=Math.min(scalew,scaleh);
    s("Wm").style.width=w * scaleXY + "px";
    s("Wm").style.height=h * scaleXY + "px";
    s("Wm").style.left=(bw-scaleXY*w)/2+"px";
    s("Wm").style.top=(bh-scaleXY*h)/2+"px";
}

//添加按钮状态
var btnctl=true;
function addButtonMode(id1,id2,act1,act2)
{
    s(id1).style.background="";
    s(id2).style.display="none";
    s(id1).onclick=function()
    {
        //alert(s(id2).style.display);
        if(btnctl==false)
        {
            return;
        }
        switch(s(id2).style.display)
        {
            case "none":
            s(id2).style.display="block";
            eval(act1);
            break;
            case "block":
            s(id2).style.display="none";
            eval(act2);
            break;
            default:
            break;
        }
        eval(act);
    };
}
//添加点击动作
function addClickAction(id,action)
{
    s(id).onclick=function()
    {
        eval(action);
    };
}


function torad(dig)
{
    return dig*Math.PI/180;
}
function s(id)
{
    return document.getElementById(id);
}

//目标 距离 速度 方向
function move_length(id,length,speed,rotation)
{
    //alert(parseInt(s(id).style.top));
    var lengthX=length*Math.sin(torad(rotation));
    var lengthY=-length*Math.cos(torad(rotation));
    var speedX=Math.abs(speed*Math.sin(torad(rotation)));
    var speedY=Math.abs(speed*Math.cos(torad(rotation)));

    moveX(id,lengthX,speedX);
    moveY(id,lengthY,speedY);
    //alert(lengthX+"||"+lengthY)

}
//目标 距离 速度
function moveX(id,lengthX,speedX)
{
    if(lengthX>=1)
    {
        s(id).style.left=parseInt(s(id).style.left)+1+"px";
        setTimeout(function(){moveX(id,parseInt(lengthX-1),speedX);},1000/speedX);
    }
    if(lengthX<=-1)
    {
        s(id).style.left=parseInt(s(id).style.left)-1+"px";
        setTimeout(function(){moveX(id,parseInt(lengthX+1),speedX);},1000/speedX);
    }
}
function moveY(id,lengthY,speedY)
{
    if(lengthY>=1)
    {
        s(id).style.top=parseInt(s(id).style.top)+1+"px";
        setTimeout(function(){moveY(id,parseInt(lengthY-1),speedY);},1000/speedY);
    }
    if(lengthY<=-1)
    {
        s(id).style.top=parseInt(s(id).style.top)-1+"px";
        setTimeout(function(){moveY(id,parseInt(lengthY+1),speedY);},1000/speedY);
    }
}

//替换图片
function changeimg(i,src)
{
    s(i).src=src;
}

//显示和隐藏
function show(elem)
{
    s(elem).style.display="block";
}
function hide(elem)
{
    s(elem).style.display="none";
}

//预加载
function preLoadImgs()
{
    var aImg=[];
    for(var i=0; i<preLoadImgs.arguments.length; i++)
    {
        aImg[i]=new Image();
        aImg[i].src=preLoadImgs.arguments[i];
    };
};
function moveOpacity(a, b, c, d) {
    if (parseInt(b) < parseInt(c)) {
        s(a).style.opacity = b / 100;
        s(a).style.opacity = Number(s(a).style.opacity) + 0.1;
        setTimeout(function() {
            moveOpacity(a, parseInt(b + 10), c, d);
        }, 1000 / d);
    }
    if (parseInt(b) > parseInt(c)) {
        s(a).style.opacity = b / 100;
        s(a).style.opacity = Number(s(a).style.opacity) - 0.1;
        setTimeout(function() {
            moveOpacity(a, parseInt(b - 10), c, d);
        }, 1000 / d);
    }
    if (b == c) {
        return
    }
}











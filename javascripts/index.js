window.onload=function(){
  var oDiv1=document.getElementById('headspace');
  var oDiv2=document.getElementById('head');
  var oDiv3=document.getElementById('headcon');
  var oImg1=document.getElementById('face');
  var oImg2=document.getElementById('logo');
  var oImg3=document.getElementById('go_up');
  var oSpan1=document.getElementById('path');
  var oSpan2=document.getElementById('title');
  var oUl = document.getElementById("ul1");
  var aLi = oUl.children;
  var oBox = aLi[aLi.length - 1];


//菜单动效

  for(var i = 0; i < aLi.length - 1; i++){
    aLi[i].onmouseover = function(){
      //oBox.style.left = this.offsetLeft +　"px";
      move1(oBox,this.offsetLeft);
    };
  }








//回到顶部
  var timer=null;
  var user=true;
  var k=true;
  oImg3.style.display='none';
  oImg3.onclick=function(){
    moveToTop(0,800);

  };
  //回到顶部的运动函数

  window.onscroll=function(){
    var scrTop=document.documentElement.scrollTop||document.body.scrollTop;

//头部缩进动效
    if(scrTop<20){//放大
      move(oDiv1,{"height":400},{"duration":700,"easing":"ease-out"});
      move(oDiv2,{"height":400},{"duration":700,"easing":"ease-out"});
      move(oDiv3,{"height":400,width:990},{"duration":700,"easing":"ease-out"});
      move(oImg1,{"width":137,"height":137,"margin-top":"30"},{"duration":700,"easing":"ease-out"});
      move(oImg2,{"height":128,"width":158,"margin-top":"200"},{"duration":700,"easing":"ease-out"});
      move(oSpan1,{"fontSize":80,"margin-top":"147","margin-left":"10","margin-right":"10"},{"duration":700,"easing":"ease-out"});
      move(oSpan2,{"fontSize":80,"margin-top":"147","margin-left":"10","margin-right":"10"},{"duration":700,"easing":"ease-out"});
      move(oUl,{"margin-top":"500"},{"duration":700,"easing":"ease-out"});


      k=true;

      // i.style.display="none";
      // i.style.background="url(img/eat.gif)"
    }
    if(k&&(scrTop!=0)){//缩小
      //document.body.scrollTop=20;
      //i.style.display="block";
      move(oDiv3,{height:50,width:1200},{"duration":800,"easing":"ease-out"});
      move(oDiv2,{"height":50},{"duration":700,"easing":"ease-out"});
      move(oDiv1,{"height":50},{"duration":700,"easing":"ease-out"});
      move(oImg1,{"width":50,"height":50,"margin-top":"0"},{"duration":700,"easing":"ease-out"});
      move(oImg2,{"height":50,"width":50,"margin-top":0},{"duration":700,"easing":"ease-out"});
      move(oSpan1,{"fontSize":30,"margin-top":"5"},{"duration":700,"easing":"ease-out"});
      move(oSpan2,{"fontSize":30,"margin-top":"5"},{"duration":700,"easing":"ease-out"});
      move(oUl,{"margin-top":"0"},{"duration":700,"easing":"ease-out"});

      k=false;

      return false
    }
      //回到顶部的停止判断
    if(user){
      clearInterval(timer);

    }
    user=true;
    var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrTop<500){
      oImg3.style.display='none';
    }else{
      oImg3.style.display='block';
    }
  };





  //回到顶部的运动函数
  function moveToTop(iTarget,time){
    var start=document.documentElement.scrollTop||document.body.scrollTop;
    var dis=iTarget-start;
    var count=Math.round(time/30);
    var n=0;
    clearInterval(timer);
    timer=setInterval(function(){
      n++;
      var a=1-n/count;
      var cur=start+dis*(1-a*a*a);

      document.documentElement.scrollTop=cur;
      document.body.scrollTop=cur;

      user=false;

      if(n==count){
        clearInterval(timer);
      }
    },30);
  }



};
//动态菜单动效
  var speed = 0;
  var left = 0;
function move1(obj,iTarget){


  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    speed += (iTarget - left)/5;//加速度
    speed *= 0.7;  //摩擦

    left += speed;
    obj.style.left = Math.round(left) + "px";
    //if(obj.offsetLeft == iTarget){
    if(obj.offsetLeft == iTarget && Math.abs(speed) < 1){
      clearInterval(obj.timer);
    }
  },30);
}



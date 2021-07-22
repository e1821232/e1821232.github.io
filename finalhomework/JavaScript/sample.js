var carr,nowStatus;
window.addEventListener("load",function(){
carr=[{f:false,v:0,obj:null},{f:false,v:0,obj:null},{f:false,v:0,obj:null}];
  carr[0].obj=document.getElementById("c1");
  carr[1].obj=document.getElementById("c2");
  carr[2].obj=document.getElementById("c3");
  nowStatus = false;
  setInterval(interval,100);
});
function interval(){
  if(nowStatus){
    for(let i=0;i<carr.length;i++){
      if(carr[i].f){
        carr[i].v++;
        if(carr[i].v>9){carr[i].v=0;}
        carr[i].obj.innerHTML=carr[i].v;
      }
    }
  }
}
function start(){
  if(nowStatus){return;}
  nowStatus=true; carr[0].f=true; carr[1].f=true; carr[2].f=true;
}
function stop(c){
  if(nowStatus){
    carr[c].f=false;
    if(!carr[0].f && !carr[1].f && !carr[2].f){
      nowStatus=false;
      if(carr[0].v==carr[1].v && carr[1].v==carr[2].v){
        document.getElementById("char").innerHTML="あたり";
      }else{
        document.getElementById("char").innerHTML="はずれ";
      }
    }
  }
}

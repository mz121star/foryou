$(function(){
  /*  $(".timeline li").css("display","none")*/
    var times=  $(".timeline li");
   /* $.each(times,function(i,item){
        $(item).css("display","block");
    })  ;*/
    var i=0
    window.setInterval(function(){
        if(i<times.length) {
          $(times[i]).fadeIn(4000);
            i++;
        }
    },1000)
})

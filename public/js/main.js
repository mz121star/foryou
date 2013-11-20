
(function($) {
    $(document).ready(function() {
        /*  $(".timeline li").css("display","none")*/
        var fadein=function(){
        var times=  $(".timeline li");

        var i=0
        window.setInterval(function(){
            if(i<times.length) {
                $(times[i]).fadeIn(4000);
                i++;
            }
        },100)
        }
        var source   = $("#entry-template").html();
        var template = Handlebars.compile(source);
        Handlebars.registerHelper('contentHTML', function() {
            return new Handlebars.SafeString(
                this.content
            );
          /* return $.parseHTML(this.content)*/
        });

        /* $('#wysiwyg').wysiwyg({
         controls: {
         strikeThrough: { visible: true },
         underline: { visible: true },
         subscript: { visible: true },
         superscript: { visible: true }
         }
         });*/
        $.get("js/data.json").done(function(d){

            var data ={}
            data.result=d
            console.log(template(data))
           /* $("#timelineContent").html(template(data))*/

            fadein()
        })

        $('#wysiwyg').wysiwyg();
    });
})(jQuery);
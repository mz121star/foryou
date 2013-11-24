(function ($) {
    $(document).ready(function () {
        /*  $(".timeline li").css("display","none")*/
        var fadein = function () {
            var times = $(".timeline .step");

            var i = 0
            window.setInterval(function () {
                if (i < times.length) {
                    $(times[i]).slideDown("slow");
                    i++;
                }
            }, 100)
        }
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        Handlebars.registerHelper('contentHTML', function () {
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
        $.get("js/data.json").done(function (d) {

            var data = {}
            data.result = d
            console.log(template(data))
          /*  $("#timelineContent").html(template(data))*/


        })

        $('#wysiwyg').wysiwyg();

        /**********************************************************************
         *  地图操作
         **********************************************************************/
        // 百度地图API功能
        var map = new BMap.Map("allmap");            // 创建Map实例
        map.centerAndZoom("大连", 14);                   // 初始化地图,设置城市和地图级别。
        //地图事件设置函数：

        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
        var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上,并调整地图视野
        var getPoint = function () {
            var address = $("#place").val();
            myGeo.getPoint(address, function (point) {
                if (point) {
                    map.centerAndZoom(point, 16);
                    map.addOverlay(new BMap.Marker(point));
                }
            }, "大连市");
        }

        $("#place").on("keyup", getPoint) ;

        map.addEventListener("click", function (e) {
          /*  var gc = new BMap.Geocoder();
            gc.getLocation(e.point, function(rs){
                var addComp = rs.addressComponents;
                console.log(addComp);
                alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
            });*/
            $("#place").val(e.point.lng + "," + e.point.lat)
        });
        $("#mark").on("click", function () {
            $("#allmap").toggle(1000);

        })


    });
})(jQuery);
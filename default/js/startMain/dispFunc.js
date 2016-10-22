/*
  UI function

*/

var VIP = VIP || {};
VIP.DisplayFunc = function(funcObj) {
    var pubObj = this;
    var PriObj = {};

    $(window).on("load", function() {
        // playbgsound("audio/bgm.mp3");
		// funcObj.playVideo(["bgMusic"])

        pubObj.mySwiper = new Swiper ('.swiper-container', {
            touchRatio:2,
            speed:500,
            loop: false,
            direction: 'vertical',
            setWrapperSize: true,
            nextButton: '.swiper-button-next',
            preloadImages: true,
            noSwiping: true,
            noSwipingClass: 'stop-swiping',
            threshold : 50,
            effect : 'none',
            slidesPerView: 1,
            centeredSlides: true,
            coverflow: {
                rotate: 30,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows : true
            },
            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                setTimeout(function(){
                    swiperAnimate(swiper); //初始化完成开始动画
                },200);

                // debug
                // setTimeout(function(){
                //     pubObj.mySwiper.slideTo(2, 10, true);
                // }, 400);
            },
            onTransitionStart: function(swiper) { //监听当前的slider
                PriObj.SwiperTransStart(swiper.activeIndex);
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper);
            }
        });
    });

    PriObj.SwiperTransStart = function(swiperIndex){
        switch(swiperIndex)
        {
            case 0:

            break;
            case 1:

            break;
            case 2:

            break;
            case 3:

            break;
            case 4:
            // console.log(112345);
            break;
            case 5:
            break;
        }
    }
	
    PriObj.PreLoadImg = function(b, e) {
        var c = 0;
        var a = {};
        var d = b.length;

        for (src in b) {
            a[src] = new Image();
            // console.log(a[src])
            a[src].onload = function() {
                if (++c >= d) {
                    e(a);
                }
            };
            a[src].src = b[src];
        }
    }
    PriObj.CloseLoadingPage = function() {
        var imgArray = new Array();
        var index = 2;
        $("img").each(function() {
            imgArray.push($(this).attr("src"));
        });

        var imgUnique = new Array();
        for(var i = 0; i < imgArray.length; i++) {
            if (imgUnique.indexOf(imgArray[i]) == -1) {
                imgUnique.push(imgArray[i]);
            }
        }
        // console.log("1234")
        PriObj.PreLoadImg(imgUnique, function(){
            // console.log("1234")
            $("#loading").css("display", "none");
        });
    };

    (function() {
        PriObj.CloseLoadingPage();
    }());
};
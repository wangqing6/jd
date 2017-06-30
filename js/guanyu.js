/**
 * Created by hxsd on 2017/6/28.
 */
$(function(){
    $(window).resize(function(){
        if($(window).width()>=760){
            $('html').css({fontSize:'100px'})
        }else{
            var dom=$(window).width()/6.4;
            $('html').css({fontSize:dom>100?"100px":dom+'px'});
        }
        if($(window).width()<=760){
            $('#bs-example-navbar-collapse-1').addClass('weiyi2').removeClass('weiyi')
        }
    })
    //导航条按钮----------------------------------------------------
    $('.daohang li').click(function(){
        $(this).addClass("click").siblings().removeClass("click")
    })
    $('.navbar-toggle').click(function(){
        $(this).css({background:"#f39c12"})
    })
    $('.navbar-toggle').mouseleave(function(){
        $(this).css({background:"#000"})
    })
    //下拉菜单-------------------------------------------------------

    $('.add').click(function(){
        var i=$(this).index();
        $('.xiala2').eq(parseInt(i/2)).slideToggle()
        var a= $('.jia').eq(parseInt(i/2)).html()
        if( a=="-"){
            $('.jia').eq(parseInt(i/2)).html('+')
        }else if(a=="+"){
            $('.jia').eq(parseInt(i/2)).html('-')
        }

    })

    //导航栏删除按钮
    $('.remove').click(function(){
        $('#bs-example-navbar-collapse-1').addClass('weiyi').removeClass('weiyi2')
    })
    //导航栏显示按钮
    $('.left_pic').click(function(){
        $('#bs-example-navbar-collapse-1').addClass('weiyi2').removeClass('weiyi')
    })
    //轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:5000,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

    })
    //视频播放器video
    $('#link').click(function () {
        var src = 'images/video.mp4';
        $('#myModal').modal('show');
        $('#myModal iframe').attr('src', src);
    });

    $('#myModal button').click(function () {
        $('#myModal iframe').removeAttr('src');
    });

    //统计数值
    var num=$('.num').html(),
        num2=$('.num2').html(),
        num3=$('.num3').html(),
        num4=$('.num4').html()
    var time=setInterval(fn,100),
        time2=setInterval(fn2,100),
        time3=setInterval(fn3,90),
        time4=setInterval(fn4,30)
    function fn(){
        num++
        $('.num').html(num)
        if(num==25){
            clearInterval(time)
        }
    }
    function fn2(){
        num2++
        $('.num2').html(num2)
        if(num2==99){
            clearInterval(time2)
        }
    }
    function fn3(){
        num3++
        $('.num3').html(num3)
        if(num3==166){
            clearInterval(time3)
        }
    }
    function fn4(){
        num4++
        $('.num4').html(num4)
        if(num4==500){
            clearInterval(time4)
        }
    }
})
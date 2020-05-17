
    let header = document.getElementById("header");
    let headerTop = document.getElementById('header-top');
    let img = document.getElementById('img');
    let no = document.getElementById('no');
    console.log(no)

    no.onclick = function () {
        header.style.height = '0px';
        headerTop.style.height = '0px';
        img.style.height = '0px';
        no.style.color = 'transparent';
    }

    // js实现导航栏下拉时固定效果代码
    //    var da = document.getElementById('da');
    //     var sizeH = nav.getBoundingClientRect().top;
    //     document.onwheel = function () {
    //         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    //         if (scrollTop >= sizeH) {
    //             //alert('到顶啦');
    //             //position:flexed 用来设置位置固定，位置固定之后标签会脱离当前布局流()
    //             da.style.position = 'fixed';
    //             nav.style.top = '0';
    //         }
    //         if (scrollTop < sizeH) {
    //             da.style.position = 'static';
    //             da.style.top = '0';

    //         }
    //     }    

    //  轮播
    var sum = 0;
    var num = document.getElementById("num");
    var pics = document.getElementById("pic");
    var controls = document.getElementById("control");
    var cspan = document.getElementsByTagName("span");
    var as = num.getElementsByTagName("a");
    var picdiv = pics.getElementsByTagName("div");

    var timer = null;


    clearInterval(timer);
    var timer = setInterval(moveRight, 2000);

    for (var i = 0; i < picdiv.length; i++) {
        picdiv[i].onmouseover = function () {
            clearInterval(timer);
        }
        picdiv[i].onmouseout = function () {
            clearInterval(timer);
            timer = setInterval(moveRight, 2000);
        }
    }

    // 封装一个向右的方法
    function moveRight() {
        for (var i = 0; i < as.length; i++) {
            as[i].className = "";
            picdiv[i].style.display = "none";
        }

        if (sum < 5) {
            sum++;
            picdiv[sum].style.display = "block";
            as[sum].className = "active";
        } else {

            sum = 0
            picdiv[0].style.display = "block";
            as[0].className = "active";
        }
    }


    // 倒计时
    var d1 = document.getElementById("d1");
    var spans = d1.getElementsByTagName("span");
    var time = new Date("2020-2-16 15:31") // 设置需要设定的时间

    var timer1= setInterval(() => {
        var dateTime = new Date()
        var total = time.getTime() - dateTime.getTime();  // 转为毫秒数
        if(total>=0){
        var seconds = parseInt((total/1000)%60).toString().padStart(2,0); // 秒
        var mui = parseInt((total/1000/60)%60).toString().padStart(2,0); // 分钟
        var hours = parseInt((total/1000/60/60)%24).toString().padStart(2,0); // 小时
        spans[0].innerHTML = hours;
        spans[1].innerHTML = mui;
        spans[2].innerHTML = seconds;
        }else{
            // alert("执行完毕")
            clearInterval(timer1)
        }
        
        

    }, 1000);



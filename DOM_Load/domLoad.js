   
   //显示事件对象详细信息
    function showEventInfo(e){
      console.dir(e);
      console.log(e.timeStamp);
    } 
    //测试是否可以操作元素
    function testGetEle(){
      alert(document.body)
    }
    
    //当前javascript处理完成后立即执行，页面在下载和构建期间只有一个javascript处理程序
    setTimeout(function (e){
      console.dir("before1:");//chrome下测试其在body.onload后运行
      //testGetEle();//可以操作元素
      //showEventInfo(e)
    },0);
    
    //页面DOM树加载完后调用（无资源）--- ie9+支持
    document.addEventListener("DOMContentLoaded",function (e){
      console.dir("before2:");
      //testGetEle();//可以操作元素
      //showEventInfo(e)
      
    });
    //页面所有资源都加载完成后调用 --- 所有都支持
    window.onload = function (e){
      console.dir("after1:");
      //testGetEle();//可以操作元素
      //showEventInfo(e)
    }
    //此事件会覆盖window上的onload事件(如果script在head之间会报错)
    /*
    document.body.onload = function (e){
       console.dir("after2:");
       //showEventInfo(e)
    }*/
    //ie专有事件可模拟DOMContentLoaded事件 ie下测试其在DOMContentLoaded之前运行会调用多次
    document.onreadystatechange = function (e){
      //console.log(document.readyState);//加载状态
      testGetEle();//可以操作元素
      var state  = document.readyState;
      if(state === "interactive" || state === "complete"){
        document.onreadystatechange = null;
        console.log("iebefore:");
      }
    }
    testGetEle();//不可以操作元素

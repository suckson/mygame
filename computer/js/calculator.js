// function showTime() {
// 		//获取时间并按放置在div内
// 		var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
// 		var data = [];
// 		data.push(temp[1], temp[2], temp[3], temp[4], temp[5], temp[6]);
// 		var ies = document.getElementsByClassName("timerabc");
// 		//console.log(data)
// 		for(var i = 0; i < ies.length; i++) {
// 			var ie = ies[i];
// 			if(ie.getAttribute("value") == 1) {
// 				ie.innerHTML = data[0] + data[1] + ":";
// 			} else if(ie.getAttribute("value") == 2) {
// 				ie.innerHTML = data[2] + data[3] + ":";
// 			} else if(ie.getAttribute("value") == 3) {
// 				ie.innerHTML = data[4] + data[5];
// 			}
// 		}
// 	}
// 	clearInterval(timer);
// 	var timer = setInterval(function() {
// 		showTime();
// 	}, 500);
 //计算器的主程序
// var onoff=document.getElementById("openoff");
//	onoff.onclick=function switching(){//开关
//		var a =true;
//		if(a=true){
//			a = false;
//		}else{
// 			a=true;
// 		}
// 		return a;
// 	}


//绑定事件
var btns = document.getElementsByTagName("button");
for(var i=0;i<btns.length;i++){
	var btn = btns[i];
	btn.onclick = function complete(e){
		//console.log(e.target.getAttribute("complete"));
		complet(e)
	}
}
//计算器主程序
var operations = ["+","-","×","÷","%"];
var operators = ['←','CE','C'];
var jinzhi=["A","B","C","D","E","F"];
var sincos=["sin","cos","asin","acos","2sin","2cos","2tan","atant","max","min"];
var Maths=["log","n","X2",];
var show =document.getElementById("inport");
var show2 =document.getElementById("inport2");
var num1Array=[];//储存结果每次计算，记忆功能
var num1 //文本的值
var num2 = null;//交换
var exportNumber = null;
var caozuo;//判断运算符

function isInArray(arr,value){
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
            return true;
        }
    }
    return false;
}
function complet(e){
   var val = e.target.getAttribute('complete');
   console.log(val)
   show.value+=val;
   num1=show.value;
   console.log(num1);
   if(isInArray(operations,val)){
   	 switch (val){
   	 	case "+":
   	 	 num2=num1;
   	 	 show.value=null;
   	 	 show2.value+="+";
   	 	 caozuo=val;
   	 		break;
   	 	case "-":
   	 	num2=num1;
   	 	show.value=null;
   	 	show2.value+="-";
   	 	caozuo=val;
   	 		break;
   	 	case "×":
   	 	num2=num1;
   	 	show.value=null;
   	 	show2.value+="×";
   	 	caozuo=val;
   	 		break;
   	 	case "÷":
   	 	num2=num1;
   	 	show.value=null;
   	 	show2.value+="÷";
   	 	caozuo=val;
   	 		break;
   	 	case "%":
   	 	num2=num1;
   	 	show.value=null;
   	 	show2.value+="%";
   	 	caozuo=val;
   	 		break;
   	  }
   }
    else if(isInArray(operators,val)){
	 switch (val){
	 	case "←":
	 	show.value=show.value.slice(0,-2);
	 	show2.value = show2.value.slice(0,-1);
   	 		break;
   	 	case "CE":
   	 	      //取得文本框的值
   	 	    show.value="";
			var txtValue = show2.value;
			console.log(txtValue)
			var splitResult = {};
			var flag = false;
			for(var i=0;i<operations.length;i++){
//				//取得每一个操作符
				var operation = operations[i]
				//根据分隔符分割文本框的值，如果长度大于1时，表示有分隔符存在
				var txtArray = txtValue.split(operation);
				if(txtArray.length>1){
					flag = true;
					txtArray[1] =''
					show2.value = txtArray.join(operation)
				}
			 }
			//没有分隔符时，直接将文本框赋值为空
			 if(!flag){
			  show2.value = ''
			 }
   	 		break;
   	 	case "C":
   	 	  show.value=00;
   	 	  show2.value=00;
   	 	break;	
 	  }
   }
    else{
    	if(val=='='){
		  switch (caozuo){
		  	case "+":
		  	    show.value=parseInt(num2)+parseInt(num3);
		  		break;
		  	case "-":
		  	    show.value=parseInt(num2)-parseInt(num3);
		  		break;
		  	case "×":
		  	    show.value=parseInt(num2)*parseInt(num3);
		  		break;
		  	case "÷":
		  	    show.value=parseInt(num2)/parseInt(num3);
		  		break;
		  	case "%":
		  	    show.value=parseInt(num2)%parseInt(num3);
		    break;
		  }
		}else{
		   show2.value += val;
		   num3=num1;
		}	
    }
 }
 
"use strict";
class calculators{
    constructor(){//实力属性
        this.open = true; //开关状态
        this.timer;
        this.num1 = this.$("inport").value;
    }
    $(tag){  //封装一下获取id的方法
        return document.getElementById(tag)
    }
    getTime(){
        let temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
        let data = [];
        data.push(temp[1], temp[2], temp[3], temp[4], temp[5], temp[6]);
        let ies = document.getElementsByClassName("timerabc");
        for(var i = 0; i < ies.length; i++) {
         var ie = ies[i];
         if(ie.getAttribute("value") == 1) {
             ie.innerHTML = data[0] + data[1];
         } else if(ie.getAttribute("value") == 2) {
             ie.innerHTML = data[2] + data[3] ;
         } else if(ie.getAttribute("value") == 3) {
             ie.innerHTML = data[4] + data[5];
         }
       }
     }
     on(){
         this.timer = setInterval(this.getTime,1000);
     }
     off(){
         let ies = document.getElementsByClassName("timerabc");
         console.log(ies)
         for(var i =0;i<ies.length;i++){
            ies[0].innerHTML = "已"
            ies[1].innerHTML = "关"
            ies[2].innerHTML = "机"
         }
         clearInterval(this.timer)
     }
     complet(a,b,c){
        // params a 运算类型  b第一个参与运算的数  第二个参与运算的数
        switch(a){
            case "+":
                return b+c;
                break;
            case "-":
                return b -c;
                break;
            case "X":
                return b*c;
                break;
            case "除":
                return b/c;
                break;
          }
     }

  }
calculators.prop = 1;//静态属性
calculators.prop1 = 2;
calculators.prop2 = 3;

const calculator = new calculators()
let $ = calculator.$;
$("switch").onclick = ()=> { //开关
    console.log(calculator.open)
    console.log(calculator.num1)
    if (calculator.open==true) {
        calculator.open=!calculator.open;
        calculator.on();
         $("switch").style.left="43px"
    } else {
        calculator.open=!calculator.open;
        calculator.off();
        $("switch").style.left="4px"
    }
}
window.onload = ()=>{
    $("switch").style.left="4px";
    console.log(calculator.complet("+",2,3))
}

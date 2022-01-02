var obj1 = document.querySelector(".sec4");
var obj2 = document.querySelector(".sec2");
var obj3 = document.querySelector(".main-section");
var obj4 = document.querySelector(".isItClicked");

const colArr = ["#781C68","#9A0680","#FFD39A","#FFF89A","#FFC900","#086E7D","#1A5F7A"];

obj2.addEventListener("click",function(){
    var colorInd = Math.floor(Math.random() * colArr.length);
     obj1.value = colArr[colorInd];
     obj3.style.background = colArr[colorInd];
});

obj4.addEventListener("click",function(){
    obj1.select();
    obj1.setSelectionRange(0,99999);
    navigator.clipboard.writeText(obj1.value);
    alert(obj1.value + " copied to clipboard!");
});

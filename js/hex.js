var obj1 = document.querySelector(".sec4");
var obj2 = document.querySelector(".sec2");
var obj3 = document.querySelector(".main-section");
var obj4 = document.querySelector(".isItClicked");

const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

obj2.addEventListener("click",function(){
    var charInd=0;
    var hexColorCode = "#";
    for(let i=0;i<6;i++)
    {
        charInd = Math.floor(Math.random() * 16);
        hexColorCode += arr[charInd];
    }
     obj1.value = hexColorCode;
     obj3.style.background = hexColorCode;
});

obj4.addEventListener("click",function(){
    obj1.select();
    obj1.setSelectionRange(0,99999);
    navigator.clipboard.writeText(obj1.value);
    alert(obj1.value + " copied to clipboard!");
});

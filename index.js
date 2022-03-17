function butClick1(id){
document.querySelector(".divP").innerHTML=id;
};

function todayTime(){ 
    var day=new Date();
 document.querySelector(".today").innerHTML=day.getFullYear()+"/"+(day.getMonth()+1)+"/"+day.getDate(); 
//document.querySelector(".today").innerHTML=Date.now();
};

$(document).ready(function () {
document.querySelector(".divP").innerHTML=id;
});
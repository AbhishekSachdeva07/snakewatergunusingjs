let a = document.getElementById("box1");
let d = document.getElementById("box");
let b = document.getElementById("btn");
let f= document.getElementById("box2")
var user=0 , comp=0;
b.addEventListener("click",gg);
function gg(){
    let c= Math.floor(Math.random()*3)
    d.value=c;
    if (a.value===d.value){
        f.value="Its Draw";
    }
    else if (a.value==0 && d.value==1 || a.value==1 && d.value==2 || a.value==2 && d.value==0){
        user += 1;
        f.value="You Won";
    }
    else if (d.value==0 && a.value==1 || d.value==1 && a.value==2 || d.value==2 && a.value==0){
        comp += 1;
        f.value="Computer Won"
    }

    
    

}

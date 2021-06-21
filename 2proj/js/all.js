var cont2 = document.getElementsByClassName("container2")[0];
var cont3 = document.getElementsByClassName("container3")[0];
var check = document.getElementById("check-icon");
var cancel = document.getElementById("x-icon");

check.addEventListener('click', function(){
    createNote();
})

cancel.addEventListener('click', function(){
    typeNote();
})

function typeNote(){
    if(cont3.style.display=="none"){
        cont3.style.display = "block";
    }
    else{
        cont3.style.display = "none";
    }
}

function createNote(){
    var notetxt = document.getElementById("note-text").value;
    // value;
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML = notetxt;
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0 ,0 ,0 ,.75)" );
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();
    
   

    node0.appendChild(node1);
    cont2.insertAdjacentElement("beforeend", node0);
    
    node0.addEventListener('mouseenter', function(){
        node0.style.transform = "scale(1.2)";
    })

    node0.addEventListener('mouseleave', function(){
        node0.style.transform = "scale(1)";
    })

    node0.addEventListener('dblclick', function(){
        node0.remove();
    })
    document.getElementById("note-text").value = '';
}




// -------------style Attribute----------------------------

function margin(){
    var rand_margin = ["-5px", "1px", "10px", "5px", "8px", "15px", "-6px", "-8px"]
    return rand_margin[Math.floor(Math.random()*rand_margin.length)];
} 

function rotate(){
    var rand_rotate = ["rotate(3deg)", "rotate(-3deg)", "rotate(-10deg)", "rotate(-1deg)", "rotate(5deg)", "rotate(10deg)"];
    return rand_rotate[Math.floor(Math.random()*rand_rotate.length)];
}

var i = 0;
function color(){
    var rand_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
    if(i>rand_color.length-1){
        i = 0;
    }
    return rand_color[i++];
}

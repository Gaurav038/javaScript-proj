var cont2 = document.getElementsByClassName("container2")[0];
var cont3 = document.getElementsByClassName("container3")[0];
var check = document.getElementById("check-icon");
var cancel = document.getElementById("x-icon");

showNotes();
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
    let notetxt = document.getElementById("note-text").value;
    let store = localStorage.getItem("notes");
    if(store==null){
        storeObj = [];
    }
    else{
        storeObj = JSON.parse(store);
    }
    storeObj.push(notetxt);
    localStorage.setItem("notes", JSON.stringify(storeObj));
    notetxt = "";
    showNotes();

}

function showNotes(){
    let store = localStorage.getItem("notes");
    if(store==null){
        storeObj = [];
    }
    else{
        storeObj = JSON.parse(store);
    }
   cont2.innerHTML = '';
    storeObj.forEach(function(element, index) {

         var node0 = document.createElement("div");
         var node1 = document.createElement("h1");
         var del = document.createElement("button");
       
        node1.innerHTML = element;
        node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0 ,0 ,0 ,.75)" );
        node1.style.margin = margin();
        node1.style.transform = rotate();
        node1.style.background = color();
    
        del.setAttribute("class", "btn btn-success");
        del.innerHTML = 'delete';
        del.setAttribute("id", index);
        del.setAttribute("style", "position:relative; top:-18rem");
        del.setAttribute(`onclick`, `deleteNode(this.id);`);
        
        node0.appendChild(node1);
        node0.appendChild(del);

        cont2.insertAdjacentElement("beforeend", node0); 
        console.log(cont2);
        
    node0.addEventListener('mouseenter', function(){
        node0.style.transform = "scale(1.2)";
    })

    node0.addEventListener('mouseleave', function(){
        node0.style.transform = "scale(1)";
    })

    document.getElementById("note-text").value = '';
    });

}

function deleteNode(index){
    let store = localStorage.getItem("notes");
    if(store==null){
        storeObj = [];
    }
    else{
        storeObj = JSON.parse(store);
    }
    storeObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(storeObj));
    showNotes();
}


// -------------style Attribute----------------------------

function margin(){
    var rand_margin = ["-5px", "1px", "2px", "5px", "-2px", "3px", "-6px", "-4px"]
    return rand_margin[Math.floor(Math.random()*rand_margin.length)];
} 

function rotate(){
    var rand_rotate = ["rotate(3deg)", "rotate(-3deg)", "rotate(-7deg)", "rotate(-1deg)", "rotate(5deg)", "rotate(4deg)"];
    return rand_rotate[Math.floor(Math.random()*rand_rotate.length)];
}

function color(){
    var rand_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
   
    return rand_color[Math.floor(Math.random()*rand_color.length)];
}

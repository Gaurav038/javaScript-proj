let myLead = [];
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

deleteBtn.addEventListener('dblclick', function() {
   localStorage.clear();
   myLead = []; 
   renderLead();
})

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLead.push(tabs[0].url);
       localStorage.setItem("webList", JSON.stringify(myLead));
       renderLead();
    });
 })


let FromLocal = JSON.parse(localStorage.getItem("webList"));
if(FromLocal){
    myLead = FromLocal;
    renderLead();
}
else{
    ulEl.innerHTML = 'NO RECORD IS THERE'
}

inputBtn.addEventListener('click', function (e) {
    myLead.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("webList", JSON.stringify(myLead));
    renderLead();
})

function renderLead() {
    ulEl.innerHTML = ""
    for (let i = 0; i < myLead.length; i++) {
        ulEl.innerHTML +=
         `<li>
            <a target="_blank" href='${myLead[i]}'> 
                ${myLead[i]}
            </a>
         </li > `
    }
}


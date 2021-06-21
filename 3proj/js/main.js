// select item
const form = document.querySelector('#itemForm');
const input = document.querySelector('#itemInput');
// ---------------------
const input1 = document.querySelector('#topicName');
// --------------------
const list = document.querySelector('#itemList');
const filter = document.querySelectorAll('.nav-item');
const message = document.querySelector('#message');
// create an empty item list
let todoItem = [];

// Filter Item
const getItemFilter = function(type){
    let filterItem = [];
    switch(type){
        case "todo":
            filterItem = todoItem.filter((item) => !item.isDone);
            break;
        case "done":
            filterItem = todoItem.filter((item) => item.isDone);
            break;    
        default:
            filterItem = todoItem;
    }
    getList(filterItem);
}

// Update item
const updateItem = function(currentItemInd, value){
    const newItem = todoItem[currentItemInd];
    newItem.name = value;
    todoItem.splice(currentItemInd, 1 , newItem);
    setStorage(todoItem);
}


// delete
function deleteitem(index){
        let store = localStorage.getItem("Todo");
        if(store==null){
            storeObj = [];
        }
        else{
            storeObj = JSON.parse(store);
        }
        storeObj.splice(index, 1);
        localStorage.setItem("Todo", JSON.stringify(storeObj));
}

// -------Handle list----------------
const handleitem = function(itemData){
   const ItemList = document.querySelectorAll(".list-group-item");
   ItemList.forEach(item => {
       if(item.querySelector(".head").getAttribute("data-time")==itemData.addedAt){

        // ----------   done----------
        item.querySelector("a[done]").addEventListener('click', function(e){
            e.preventDefault();
            const itemindex = todoItem.indexOf(itemData);
            const current = todoItem[itemindex];

            let Icon = current.isDone ? "bi-check-circle-fill" : "bi-check-circle";

            current.isDone = current.isDone ? false : true;
            todoItem.splice(itemindex, 1, current);
            setStorage(todoItem);

            let currentIcon = current.isDone ? "bi-check-circle-fill" : "bi-check-circle";
            
            this.firstElementChild.classList.replace(Icon, currentIcon);
        });

        // ----------EdIT-----
        item.querySelector("a[edit]").addEventListener('click', function(e){
            e.preventDefault();
            input.value = itemData.name;
            document.querySelector("#objIndex").value = todoItem.indexOf(itemData);
        });

        // ----------DELETE in  display only-----
        item.querySelector("a[delete]").addEventListener('click', function(e){
            e.preventDefault();
            console.log(todoItem);
            if(confirm("want to delete?")){
               list.removeChild(item);
            }
        });

       }    
   });
  
}

// ---show in display---------------
const getList = function (todoItem) {
    list.innerHTML = "";
    if (todoItem.length > 0) {
        todoItem.forEach((item, index) => {
            let iconclass = item.isDone ? "bi-check-circle-fill" : "bi-check-circle";
            list.insertAdjacentHTML("beforeend", ` 
                <div class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">                      
                        <span class="mb-1 display-6">${item.topic}</span>
                        <span>
                            <a href="#" done><i class="bi ${iconclass} green"></i></a>
                            <a href="#" edit><i class="bi bi-pencil-square blue"></i></a>
                            <a id="${index}" onclick="deleteitem(this.id) " href="#" delete><i class="bi bi-trash-fill red"></i></a>
                        </span>
                    </div>
                     <p class="mb-1 head" data-time="${item.addedAt}" >${item.name}</p>
                </div>  ` 
            );
            handleitem(item);
        });
    }
    else{
        list.insertAdjacentHTML("beforeend", ` 
        <div class="list-group-item list-group-item-action">
                <span>NO Record Found....</span>
        </div>  ` 
    );
    }
};



// --------Get from Local Storage-------------------
const getStorage = function () {
    const storage = localStorage.getItem("Todo");
    if (storage === "undefined" || storage === null) {
        todoItem = [];
    }
    else {
        todoItem = JSON.parse(storage);
    }
    console.log("ITEM", todoItem);
    getList(todoItem);
};

// --------Set in Local Storage-------------------
const setStorage = function (todoItem) {
    localStorage.setItem("Todo", JSON.stringify(todoItem));
};



document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const itemtopic = input1.value.trim();
        const itemname = input.value.trim();
        if (itemname.length === 0) {
            alert("please enter....");
        }
        else{
           const currentItemInd = document.querySelector("#objIndex").value;
           if(currentItemInd){
              updateItem(currentItemInd, itemname);
              document.querySelector("#objIndex").value = "";
           }
           else{
               const itemObj = {
                topic:itemtopic,
                name: itemname,
                isDone: false,
                addedAt: new Date().getTime(),
            };
            todoItem.push(itemObj);
            setStorage(todoItem);
           }  
           getList(todoItem); 
        }
        input.value = "";
        input1.value = "";
    })

    // filter Tab
    filter.forEach((tab)=>{
        tab.addEventListener('click',function(e){
        e.preventDefault();
        const tabtype = this.getAttribute("data-type");
        document.querySelectorAll(".nav-link").forEach((nav) => {
            nav.classList.remove("active");
        })
        this.firstElementChild.classList.add("active");
        getItemFilter(tabtype);
        });
    });

    // load storage
    getStorage();
});
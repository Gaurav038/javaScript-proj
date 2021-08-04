function addWorkField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('workField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);

    let workAddBtn = document.getElementById('workBtn');
    let workObj  = document.getElementById('work');
    workObj.insertBefore(newNode, workAddBtn);

}

function addAcadField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('acadField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);

    let acadAddBtn = document.getElementById('acadBtn');
    let acadObj  = document.getElementById('acad');
    acadObj.insertBefore(newNode, acadAddBtn);

}
function generateCv(){
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerText = nameField;

    // direct
    document.getElementById('nameT2').innerHTML = nameField;

    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;

    document.getElementById('gitT').innerHTML = document.getElementById('gitField').value;

    document.getElementById('linkT').innerHTML = document.getElementById('linkField').value;

    document.getElementById('objectT').innerHTML = document.getElementById('objectField').value;

    let workObj = document.getElementsByClassName('workField');
    let str = '';
    for(let e of workObj){
        str += `<li> ${e.value} </li>`;
    }
    document.getElementById('workT').innerHTML = str;

    let acadObj = document.getElementsByClassName('acadField');
    let str2 = '';
    for(let e of acadObj){
        str2 += `<li> ${e.value} </li>`;
    }
    document.getElementById('acadT').innerHTML = str2;

    // --------------set the img--------------------
    let file = document.getElementById('imgField').files[0];
    console.log(file)
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result)
    reader.onloadend = function(){
        console.log(reader.result)
        document.getElementById('imgT').src = reader.result;
    }


    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}
function printCv(){
    window.print();
}
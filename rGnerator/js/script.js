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

    let nameField = document.getElementById('nameField').value.trim();

    if(nameField  === '') {
		setErrorFor(document.getElementById('nameField'), 'Username cannot be blank');
	} else {
		setSuccessFor(document.getElementById('nameField'));
	}
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerText = nameField;

    // direct
    document.getElementById('nameT2').innerHTML = nameField;

    let contactFieldName = document.getElementById('contactField').value;
    if(contactFieldName  === '') {
		setErrorFor(document.getElementById('contactField'), 'contactField cannot be blank');
	} else {
		setSuccessFor(document.getElementById('contactField'));
	}
    document.getElementById('contactT').innerHTML = contactFieldName 

    let addressFieldName = document.getElementById('addressField').value; 
    if(addressFieldName  === '') {
		setErrorFor(document.getElementById('addressField'), 'addressField cannot be blank');
	} else {
		setSuccessFor(document.getElementById('addressField'));
	}
    document.getElementById('addressT').innerHTML = addressFieldName;

    let fbFieldName = document.getElementById('fbField').value;
    if(fbFieldName  === '') {
		setErrorFor(document.getElementById('fbField'), 'fbField cannot be blank');
	} else {
		setSuccessFor(document.getElementById('fbField'));
	}
    document.getElementById('fbT').innerHTML = fbFieldName

    let gitFieldName = document.getElementById('gitField').value;
    if(gitFieldName  === '') {
		setErrorFor(document.getElementById('gitField'), 'gitField cannot be blank');
	} else {
		setSuccessFor(document.getElementById('gitField'));
	}
    document.getElementById('gitT').innerHTML = gitFieldName

    let linkFieldName = document.getElementById('linkField').value;
    if(linkFieldName  === '') {
		setErrorFor(document.getElementById('linkField'), 'linkField cannot be blank');
	} else {
		setSuccessFor(document.getElementById('linkField'));
	}
    document.getElementById('linkT').innerHTML = linkFieldName

    let objectFieldName = document.getElementById('objectField').value.trim();
    if(objectFieldName  === '') {
		setErrorFor(document.getElementById('objectField'), 'objectField cannot be blank');
	} else {
		setSuccessFor(document.getElementById('objectField'));
	}
    document.getElementById('objectT').innerHTML = objectFieldName

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

function setErrorFor(input, message) {
	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');
	formGroup.className = 'form-group error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
	formGroup.className = 'form-group success';
}


function printCv(){
    window.print();
}

// * CRUD - Create, Read, Update and Delete

const inputName = document.querySelector('.inputName');
const inputLastName = document.querySelector('.inputLastName');
const inputAge = document.querySelector('.inputAge');
const btnAdd = document.querySelector('.btnAdd');
const btnSave = document.querySelector('.btnSave');
const btnBack= document.querySelector('.btnBack');
const inputTable = document.querySelector('.inputTable');

let editIdx = null;


const individuals = [
    {
        name: 'Biljana',
        lastName: 'Rasic',
        age: 32
    },
    {
        name: 'Aleksandar',
        lastName: 'Rasic',
        age: 34
    },
    {
        name: 'Anya',
        lastName: 'Rasic',
        age: 10
    },
    {
        name: 'Teodor',
        lastName: 'Rasic',
        age: 5
    },
    {
        name: 'Veljko',
        lastName: 'Rasic',
        age: 5
    },
];

window.addEventListener('load', () => {
    read();
});

btnAdd.addEventListener('click', () => {

    create();
    read();
});

btnBack.addEventListener('click', () => {
    inputName.value = '';
    inputLastName.value = '';
    inputAge.value = '';

    btnAdd.hidden = false;
    btnSave.hidden = true;
    btnBack.hidden = true;

    inputName.focus();

    editIdx = null;
})

btnSave.addEventListener('click', () => {
    individuals[editIdx].name = inputName.value;
    individuals[editIdx].lastName = inputLastName.value;
    individuals[editIdx].age = inputAge.value;

    inputName.value = '';
    inputLastName.value = '';
    inputAge.value = '';

    btnAdd.hidden = false;
    btnSave.hidden = true;
    btnBack.hidden = true;

    inputName.focus();

    editIdx = null;

    read();
})

const read = () => {
    inputTable.innerHTML = '';
    individuals.forEach((person, idx) => {
        inputTable.innerHTML += `
        <tr>
            <th>${idx + 1}</th>
            <td>${person.name}</td>
            <td>${person.lastName}</td>
            <td>${person.age}</td>
            <td><button class="btn btn-basic btnChange" onClick="change(${idx})"><i class="fa-solid fa-pen-to-square btnChange-blue"></i></i></button></td>
            <td><button class="btn btn-basic btnDelete" onClick="erase(${idx})"><i class="fa-solid fa-trash btnDelete-red"></i></button></td>
        </tr>
        ` 
    });
};

const create = () => {
    if(inputName.value !== '' && inputLastName.value !== '' &&  inputAge.value > 0){

        individuals.push({
            name: inputName.value,
            lastName: inputLastName.value,
            age: inputAge.value
        });
        
        inputName.value = '';
        inputLastName.value = '';
        inputAge.value = '';
    }else {
        alert("You didn't enter all the data")
    }
    
    
        inputName.focus();
};

const erase = (idx) => {
    individuals.splice(idx, 1);
    read();
}

const change = (idx) => {
    inputName.value = individuals[idx].name;
    inputLastName.value = individuals[idx].lastName;
    inputAge.value = individuals[idx].age;

    btnAdd.hidden = true;
    btnSave.hidden = false;
    btnBack.hidden = false;

    editIdx = idx;

}


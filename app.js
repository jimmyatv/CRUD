// * CRUD - Create, Read, Update and Delete

const inputName = document.querySelector('.inputName');
const inputLastName = document.querySelector('.inputLastName');
const inputAge = document.querySelector('.inputAge');
const btnAdd = document.querySelector('.btnAdd');
const btnSave = document.querySelector('.btnSave');
const inputTable = document.querySelector('.inputTable');




const individuals = [
    {
        name: 'Bibby',
        lastName: 'Rasic',
        age: 32
    },
    {
        name: 'Jimmmy',
        lastName: 'Rasic',
        age: 34
    },
    {
        name: 'Anya',
        lastName: 'Rasic',
        age: 10
    },
];

window.addEventListener('load', () => {
    inputTable.innerHTML = '';
    individuals.forEach((person, idx) => {
        inputTable.innerHTML += `
        <tr>
            <th>${idx + 1}</th>
            <td>${person.name}</td>
            <td>${person.lastName}</td>
            <td>${person.age}</td>
            <td><button class="btn btn-basic btnChange"><i class="fa-solid fa-pen-to-square btnChange-blue"></i></i></button></td>
            <td><button class="btn btn-basic btnDelete"><i class="fa-solid fa-trash btnDelete-red"></i></button></td>
        </tr>
        ` 
    });


});

btnAdd.addEventListener('click', () => {
    individuals.push({
        name: inputName.value,
        lastName: inputLastName.value,
        age: inputAge.value
    });

    inputTable.innerHTML = '';
    individuals.forEach((person, idx) => {
        inputTable.innerHTML += `
        <tr>
            <th>${idx + 1}</th>
            <td>${person.name}</td>
            <td>${person.lastName}</td>
            <td>${person.age}</td>
            <td><button class="btn btn-basic btnChange"><i class="fa-solid fa-pen-to-square btnChange-blue"></i></i></button></td>
            <td><button class="btn btn-basic btnDelete"><i class="fa-solid fa-trash btnDelete-red"></i></button></td>
        </tr>
        ` 
    });

    
});


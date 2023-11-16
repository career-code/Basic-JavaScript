
// First Program that changes the div color and add border radius/border

let myButton = document.getElementById("myButton");
let myDiv = document.getElementById("myDiv");

myButton.addEventListener("click", function () {
    // Change the background color of the div
    myDiv.style.backgroundColor = "red";

    // Set border radius to 20px
    myDiv.style.borderRadius = "20px";

    // Set border to 5px solid black
    myDiv.style.border = "5px solid black";
});

// Second Program that Reset the div to its default

let resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
    myDiv.style.backgroundColor = "black";
    myDiv.style.borderRadius = "0px";
    myDiv.style.border = "none";
});

// Third Program
// Access Ul with id="myList" and show ul list button by id="showListButton"
let myList = document.getElementById("myList");
let showListButton = document.getElementById("showListButton");

// Array of class student names
let classStudentNames = ["Aliyan Ahmad", "Nazir Ahmad", "Ameer Hamza", "Zargham", "Abdullah", "Zarar", "Hamid Ghaffar", "Adnan Jillani", "Yumna Arif", "Aleezay", "Fatima", "Zainab",];

// Function for loop on array and Concatenate the HTML for each student directly
function displayList() {
    // Loop through the classStudentNames array using forEach
    classStudentNames.forEach(function (student) {
        // Concatenate the HTML for each student directly
        myList.innerHTML += "<li>" + student + "</li>";
    });
    // Disable the button after displaying the list
    showListButton.disabled = true;
}
showListButton.addEventListener("click", displayList);

// Forth Program

function adjustWidth(clickedId) {
    // Set the width of the clicked sub-div to 90%
    document.getElementById(clickedId).style.width = '90%';

    // Find the other sub-div and set its width to 10%
    let otherId;
    if (clickedId === 'firstSubDiv') {
        otherId = 'secondSubDiv';
    } else {
        otherId = 'firstSubDiv';
    }
    document.getElementById(otherId).style.width = '10%';
}

//   Fifth Program

let studentsArray = [
    {
        name: 'Raouf',
        age: 21,
        grade: 'BSCS',
        institute: 'KFC'
    },
    {
        name: 'Aliyan Ahmad',
        age: 23,
        grade: 'BSCS',
        institute: 'KFUEIT'
    },
    {
        name: 'Ameer Hamza',
        age: 22,
        grade: 'BBA',
        institute: 'Allama Iqbal University'
    },
    {
        name: 'Nazir Ahmad',
        age: 20,
        grade: 'BSIT',
        institute: 'COMSATS University'
    },
    {
        name: 'Zargham',
        age: 24,
        grade: 'BSSE',
        institute: 'LUMS University'
    }
];

let printData = document.getElementById("printData"); //Access Button
let tbody = document.getElementById("tbody"); // Access tbody of table
// Add a click event listener to the button
printData.addEventListener("click", printObject);

function printObject() {
    let str = '';
    studentsArray.forEach(function (obj) {
        str = str + `
        <tr>
            <td>${obj.name}</td>
            <td>${obj.age}</td>
            <td>${obj.grade}</td>
            <td>${obj.institute}</td>
        </tr>
        `
    });
    tbody.innerHTML = str;
}
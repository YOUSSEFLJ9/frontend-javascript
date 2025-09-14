interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student = {
    firstName: "Lelisa",
    lastName: "Hailu",
    age: 20,
    location: "Addis Ababa"
};

const Student2: Student = {
    firstName: "Israel",
    lastName: "Chimgamo",
    age: 22,
    location: "Nairobi"
};

// CORRECTED: Changed to studentsList (with 's')
const studentsList: Student[] = [Student1, Student2];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Create header row
const headerRow = document.createElement("tr");
const headers = ["First Name", "Last Name", "Age", "Location"]; // Added all properties

headers.forEach(headerText => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
});

tableBody.appendChild(headerRow);

// Create data rows
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    
    // Add all student properties to the table
    const properties: (keyof Student)[] = ['firstName', 'lastName', 'age', 'location'];
    
    properties.forEach(prop => {
        const cell = document.createElement("td");
        cell.textContent = String(student[prop]); // Convert age to string
        row.appendChild(cell);
    });
    
    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

// Add some basic styling
table.style.borderCollapse = 'collapse';
table.style.margin = '20px';
table.style.border = '1px solid black';

const thCells = table.querySelectorAll('th');
const tdCells = table.querySelectorAll('td');

thCells.forEach(cell => {
    cell.style.border = '1px solid black';
    cell.style.padding = '8px';
    cell.style.backgroundColor = '#f2f2f2';
});

tdCells.forEach(cell => {
    cell.style.border = '1px solid black';
    cell.style.padding = '8px';
});

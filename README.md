# KPS-Management-System
https://kps-management-system.onrender.com/
# Kadam Power System Management System
Overview
Kadam Power System (KPS) Management System is a web-based application designed to manage and display data related to power system components. This application allows users to search, update, and delete records in a user-friendly interface. The project consists of a frontend built with HTML, CSS, and JavaScript.

# Features
Display a list of power system records.
Search functionality to filter records based on user input.
Add new records to the system.
Update existing records.
Delete records from the system.
Responsive design using Bootstrap.
# Project Structure
* index.html: Main page of the application. Contains a form for adding new records and a table for displaying existing records.
* admin.html: Admin page that includes a table to list data and functionality for searching, updating, and deleting records.
* admin.js: JavaScript file for handling data fetching, updating the table, and implementing search functionality.
# Dependencies
* Bootstrap 5.0.2: Used for responsive design and styling.
* jsPDF: Library to generate PDF documents.
* jsPDF AutoTable: Plugin for jsPDF to create tables in PDF documents.
# Installation
* Clone the repository:
bash
* Copy code
git clone https://github.com/abhishekjagtap486/kps-management-system.git
* Navigate to the project directory:
bash
Copy code
cd kps-management-system
* Open index.html in your web browser to view the main page.
* Open admin.html in your web browser to access the admin functionalities.
# Usage
* Adding New Records:

* Open index.html in a web browser.
Fill out the form with the necessary details.
Submit the form to add the record to the system.
Viewing Records:

* Open admin.html in a web browser.
The table will automatically populate with existing records fetched from the server.
Searching Records:

* Use the search input field at the top of the table on the admin page.
* Enter a keyword to filter records based on matching data.
* Updating Records:

* Click the "Update" button next to a record in the table.
* Enter new details in the prompted fields.
* Submit to update the record in the system.
# Deleting Records:

* Click the "Delete" button next to a record in the table.
* Confirm the deletion to remove the record from the system.
# Code Snippets
Fetch Data (admin.js)
javascript
Copy code
async function fetchData() {
    const response = await fetch('https://kps-management-system.onrender.com/data');
    const data = await response.json();
    updateTable(data);
}
Add Row to Table (admin.js)
javascript
Copy code
function addRowToTable(item, serialNo) {
    const tbody = document.querySelector('#dataTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.invoiceNo}</td>
        <td>${item.unitSerialNo}</td>
        <td>${item.batterySerialNo}</td>
        <td>${item.oldBatterySerialNo}</td>
        <td>${item.model}</td>
        <td>${item.capacity}</td>
        <td>${item.deliveryDate}</td>
        <td>${item.consumerName}</td>
        <td>${item.address}</td>
        <td>${item.contactNo}</td>
        <td>${item.warranty}</td>
        <td>${item.totalAmount}</td>
        <td>${item.amountPaid}</td>
        <td>${item.balanceAmount}</td>
        <td>
            <button onclick="deleteData('${item._id}')">Delete</button>
            <button onclick="updateData('${item._id}')">Update</button>
        </td>
    `;
    tbody.appendChild(row);
}
# Contributing
Contributions are welcome! Please fork this repository and submit pull requests for any improvements or bug fixes.

# License
This project is licensed under the MIT License.

# This README file provides a comprehensive overview of the KPS Management System, including installation, usage instructions, and code snippets for key functionalities.

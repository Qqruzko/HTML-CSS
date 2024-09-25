"use strict"

if (typeof window.localStorage !== "undefined" || typeof window.sessionStorage !== "undefined") (function () {
document.addEventListener("DOMContentLoaded", function() {
   const nameInput = document.getElementById("name");
   const phoneInput = document.getElementById("phone");
   const ageInput = document.getElementById("age");
   const mailInput = document.getElementById("email");
   const addButton = document.getElementById("addButton");
   const contactList = document.getElementById("contactList");

   
   function updateContactList() {
       contactList.innerHTML = '';
       const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

       contacts.forEach((contact, index) => {
           const row = document.createElement("tr");
           const nameCell = document.createElement("td");
           const phoneCell = document.createElement("td");
           const ageCell = document.createElement("td");
           const mailCell = document.createElement("td");
           const actionCell = document.createElement("td");

           nameCell.textContent = contact.name;
           phoneCell.textContent = contact.phone;
           ageCell.textContent = contact.age;
           mailCell.textContent = contact.email;

           const deleteButton = document.createElement("button");
           deleteButton.textContent = "Удалить";
           deleteButton.onclick = () => {
               removeContact(index);
           };

           actionCell.appendChild(deleteButton);
           row.appendChild(nameCell);
           row.appendChild(phoneCell);
           row.appendChild(ageCell);
           row.appendChild(mailCell);
           row.appendChild(actionCell);
           contactList.appendChild(row);
       });
   }

   
   function addContact() {
       const name = nameInput.value.trim();
       const phone = phoneInput.value.trim();
       const age = ageInput.value.trim();
       const mail = mailInput.value.trim();

       if (name && phone && age && mail) {
           const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
           contacts.push({ name, phone, age, mail });
           localStorage.setItem("contacts", JSON.stringify(contacts));
           nameInput.value = "";
           phoneInput.value = "";
           ageInput.value = "";
           mailInput.value = "";
           updateContactList();
       } else {
           alert("Не все поля заполнены");
       }
   }

   
   function removeContact(index) {
       const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
       contacts.splice(index, 1);
       localStorage.setItem("contacts", JSON.stringify(contacts));
       updateContactList();
   }

   
   addButton.onclick = addContact;

   updateContactList();
});
}());
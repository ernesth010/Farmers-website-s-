// function storeData() {
//     const name = document.getElementById('name').value;
//     const idnumber = document.getElementById('idnumber');
//     const phonenumber = document.getElementById('phonenumber');
//     const  gender = document.getElementById('gender').value;
//     const  image = document.getElementById('image').value;
//     const farmingType = document.getElementById('farmingType').value;
//     const region = document.getElementById('region').value;
//     const language = document.getElementById('language').value;
//     console.log("captured Data:",{name, idnumber, phonenumber, gender, image, farmingType, region, language});
    
    

//     if (name && idnumber && phonenumber && gender && image &&farmingType && region && language) {
//         const farmerData = {
//             name: name,
//             Idnumber: idnumber,
//             phonenumber: phonenumber,
//             gender: gender,
//             image: image,
//             farmingType: farmingType,
//             region: region,
//             language: language
//         };

//         // Store data in local storage
//         let farmers = JSON.parse(localStorage.getItem('farmers')) || [];
//         farmers.push(farmerData);
//         localStorage.setItem('farmers', JSON.stringify(farmers));

//         // Display confirmation
//         document.getElementById('output').innerHTML = <p style="color: green;">Farmer registered successfully!</p>;

//         // Clear the form
//         document.getElementById('registrationForm').reset();
//     } else {
//         document.getElementById('output').innerHTML = <p style="color: red;">Please fill in all fields.</p>;
//     }
// }

const register = document.getElementById("Register");

register.addEventListener("click", () => {
    alert("registered successfully");
});
// /*document.getElementById('myButton').addEventListener('click', function() {
//   alert('Button was clicked!');
// });*/


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDY32CjxqTnsUlmLSg_JDoYKaO5nSqMcKY",
//   authDomain: "mockup-3b1d2.firebaseapp.com",
//   projectId: "mockup-3b1d2",
//   storageBucket: "mockup-3b1d2.appspot.com",
//   messagingSenderId: "1000372772813",
//   appId: "1:1000372772813:web:4ef25d6ad044c954e06e84",
//   measurementId: "G-2Y830SVFWB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const submit = document.getElementById('myButton');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    alert(5)
})
document.addEventListener('DOMContentLoaded', function() {
   const loginForm = document.getElementById('loginform');
 
   if (loginForm) {
     loginForm.addEventListener('submit', function(event) {
       event.preventDefault();
       
       const Loginemail = document.getElementById('Loginemail').value;
       const Loginpassword = document.getElementById('Loginpassword').value;

       axios.post('http://localhost:5000/login',{Loginpassword,Loginemail},{withCredentials:true})
       .then((res)=>{console.log("collected")
     
  
     })
       .catch((err)=>{console.log(" login mein gadavbad hein bhai ")})
   
 });
 

    
     
   } else {
     console.error('Login form not found in the DOM.');
   }
 });
 
  
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
  
    // Make a POST request to the signup API endpoint using Axios
        console.log("registration started")
        axios.post('http://localhost:5000/signup',{username,password, email},{withCredentials:true})
        .then((res)=>{console.log("collected")
      
   
      })
        .catch((err)=>{console.log("GADBAD HO GYA BHAIII ")})
    
  });
  
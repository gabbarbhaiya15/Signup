document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');
  
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:5000/protected", { withCredentials: true });
        const username = response.data.username;
        console.log(response.data);
  
        // Creating an element and appending it to the container
        const userElement = document.createElement('h1');
        userElement.textContent = username;
        postsContainer.appendChild(userElement);
      } catch (error) {
        console.log("Error in checking:", error);
      }
    };
  
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/userpost", { withCredentials: true });
        console.log(response.data)
        const myPic = response.data.map(post => post);
  
        myPic.forEach(item => {
          const postElement = document.createElement('div');
          postElement.className = 'd-flex';
          postElement.innerHTML = `
          <h2 class="post-username"></h2>
            <div class="m-3" id="post-box">
              <div class="d-flex">
                
                
               
              </div>
              <img src="${item.image}" alt="" id="post" />
             
          `;
          postsContainer.appendChild(postElement);
        });
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };
  
    // Call the fetchPosts function when the page loads
    fetchdata();
    fetchPosts();
  });
  
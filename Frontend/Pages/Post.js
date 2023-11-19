document.getElementById('postButton').addEventListener('click', function() {
    const title = document.getElementById('titleInput').value;
    
    const image = document.getElementById('images');

    if (!title || !image.files[0]) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('file', image.files[0]);
    formData.append('upload_preset', 'insta-clone');

    fetch('https://api.cloudinary.com/v1_1/da8gsmpzs/image/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      const url = data.url;

      fetch('http://localhost:5000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true
        },
        body: JSON.stringify({
          title,
        
          image: url
        }),
        credentials: 'include',
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          console.log('Error in uploading image');
        } else {
          console.log('File uploaded successfully');
        }
      })
      .catch(error => {
        console.log(error);
      });
    })
    .catch(error => {
      console.log(error);
    });
  });
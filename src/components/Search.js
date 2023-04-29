function searchMusic (query){
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.music.com/search?q=${query}&apiKey=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Do something with the data returned from the API
      })
      .catch(error => {
        console.error(error);
      });
}

export default searchMusic;
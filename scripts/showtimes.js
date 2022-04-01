window.onload = function() {

    // this is my api key. you only need to do this if you push your apiKey to a public repository or if you just want to keep it a secret
    let apiKey = os.environ['apiKey'];

    // gets json data from local directory, by using fetch from the server
    let showtimes = document.getElementById('showtimes')
    fetch(`http://localhost:8000/showtimes.json?`)
      .then(response => response.json())
      .then(json => {
          console.log(json)
          console.log(json[0]);
          console.log(json[0].title);

        let title = document.createTextNode(json[0].id)
        let a = document.createElement('a');
        a.appendChild(title);

        showtimes.append(a)
      });
    
      // using the apiKey, 
      // simulate data being selected from the webpage
      let movieID = "tt0059742"

      // use fetch to get json data from the api
      fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(json => {
        console.log("Made api call, json is here: ", json);
        console.log("rating:", json.imdbRating);
        console.log("runtime: ", json.Runtime);
      });
    }
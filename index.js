function search() {
    let inputTag = document.getElementById("input");
    let movieName = inputTag.value.trim();
  
    if (!movieName) {
      alert("Please enter a movie name.");
      return;
    }
  
    console.log(movieName);
  
    let htmlRequest = new XMLHttpRequest();
    let url = "http://www.omdbapi.com/?apikey=f61442c3&t=" + movieName;
  
    htmlRequest.open("GET", url);
    htmlRequest.send();
    htmlRequest.responseType = "json";
  
    htmlRequest.onload = () => {
      let response = htmlRequest.response;
  
      if (response.Response === "False") {
        document.getElementById("movie-details").classList.add("hidden");
        document.getElementById("error-message").classList.remove("hidden");
        return;
      }
  
      document.getElementById("movie-details").classList.remove("hidden");
      document.getElementById("error-message").classList.add("hidden");
  
      let imgTag = document.getElementById("poster");
      imgTag.src = response.Poster || "placeholder.png"; // Add a placeholder image if Poster is missing
  
      // Function to wrap text in a styled <span>
      const formatContent = (label, value) => 
        `<b>${label}:</b> <span class="response-content">${value || "N/A"}</span>`;
  
      document.getElementById("Title").innerHTML = formatContent("Title", response.Title);
      document.getElementById("Plot").innerHTML = formatContent("Plot", response.Plot);
      document.getElementById("Year").innerHTML = formatContent("Year", response.Year);
      document.getElementById("Genre").innerHTML = formatContent("Genre", response.Genre);
      document.getElementById("Director").innerHTML = formatContent("Director", response.Director);
      document.getElementById("Actors").innerHTML = formatContent("Actors", response.Actors);
      document.getElementById("Rated").innerHTML = formatContent("Rated", response.Rated);
      document.getElementById("Runtime").innerHTML = formatContent("Runtime", response.Runtime);
      document.getElementById("Language").innerHTML = formatContent("Language", response.Language);
      document.getElementById("Country").innerHTML = formatContent("Country", response.Country);
      document.getElementById("Awards").innerHTML = formatContent("Awards", response.Awards);
      document.getElementById("imdbRating").innerHTML = formatContent("IMDb Rating", response.imdbRating);
      document.getElementById("imdbVotes").innerHTML = formatContent("IMDb Votes", response.imdbVotes);
    };
  }
  
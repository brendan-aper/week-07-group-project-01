var searchBtn = document.querySelector(".search-button");
var searchInput = document.querySelector('.searchInput');
var searchArea = document.querySelector("#search-area");

function getMovieData() {
    // clear the input search value
    // searchInput.value = "";
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=' + searchInput.value, {
    "method": 'GET',
    "headers": {
        'X-RapidAPI-Key': 'b40b73504dmshc6c0b9e39414d14p104dcejsn2a4e4edabb6f',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
})
.then(response => response.json())
.then(showData => {
    if (showData.length === 0) {
        // if entry does not load
        alert("Please re-enter search")
        // reload main page
        location.reload
    }
    
    // clear search area upon search
    searchArea.innerHTML = "";
    console.log(showData);
    for (var m = 0; m < showData.d.length; m++) {
        var displayCard = document.createElement("div");
        searchArea.appendChild(displayCard).classList.add("search-card");

        // creating the title of the movie
        var movieTitle = document.createElement("p");
        movieTitle.innerHTML = showData['d'][m]['l'];
        movieTitle.classList.add("movieName");
        displayCard.appendChild(movieTitle);

        //creating the year it was released
        var movieDate = document.createElement("p");
        movieDate.innerHTML = showData['d'][m]['y'] || showData['d'][m]['yr'] || null;
        movieDate.classList.add("movieDate");
        displayCard.appendChild(movieDate);

        //Creating an image of the movie
        var movieImg = document.createElement('img');
        movieImg.classList.add("movieImg");
        if (showData['d'][m]['i'] && showData['d'][m]['i']['imageUrl']) {
            movieImg.src = showData['d'][m]['i']['imageUrl'];
        } else {
            movieImg.src = 'https://images.unsplash.com/photo-1493664543243-589b576c5bcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmhzJTIwdGFwZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'; // Provide a fallback image URL or set it to a placeholder image
        }
        displayCard.appendChild(movieImg);
        
        // creating a save button
        var saveBtn = document.createElement('button');
        saveBtn.innerHTML = "Save Movie"
        saveBtn.classList.add('saveBtn')
        displayCard.appendChild(saveBtn);

        // creating a get snacks button
        var getSnacksLink = document.createElement("a");
        getSnacksLink.href = ".../map.html";
        var getSnacksBtn = document.createElement("button");
        getSnacksBtn.textContent = "Get Snacks";
        getSnacksLink.appendChild(getSnacksBtn);
        displayCard.appendChild(getSnacksLink);


        (function(title, date, image) {
            saveBtn.addEventListener('click', function() {
              // Retrieve existing saved data from local storage
              var existingData = JSON.parse(localStorage.getItem('savedMovie')) || [];
    
              var savedData = {
                title: title.innerHTML,
                date: date.innerHTML,
                image: image.src
              };
              existingData.push(savedData);
    
              //Store the updated data back into local storage
              localStorage.setItem('savedMovie', JSON.stringify(existingData));
            });
          })(movieTitle, movieDate, movieImg);
        }
    })
//     .catch(err => {
//         console.error(err);
//         })
}
    
searchBtn.addEventListener('click', function() {
    getMovieData()
})

var seeSaved = document.querySelector(".see-saved");
seeSaved.addEventListener("click", function() {
    wiindow.location.href = "./assets/html/saved.html";
    console.log("hi")})


    var link = document.getElementById('saved-link');
    link.addEventListener('click', function(event) {
      event.preventDefault();
      // create data value of local storage from other HTML file
      var data = localStorage.getItem('savedShows');
      // create link 
      window.location.href = link.href + '?data=' + encodeURIComponent(data);
      console.log("worked")
    });
// event listenr to save to local storage
    // local storage is an object array 
// display saved data 
    // call local storage object and print in cards

// maps submit button calls API function 

// API fucntion for maps (limit = 5)
    // name 
    // distance from current location
    // operating hours

// dynamic styling for start watching button
    // show enjoy section
    // hide search section 
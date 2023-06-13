

var movieSearchBar = document.getElementById("search-button");
var searchList = document.getElementById("search-card");

// search a movie

// API search movies
// define search button
var searchBtn = document.querySelector('input[name="search-button"]');
var searchInput = document.querySelector('input[type="text"]')

searchBtn.addEventListener("click", function() {
    // create value to be added to end of query string in movie API 
    var searchKey = searchInput.value;
    console.log(searchKey)
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=' + searchKey, {
	"method": 'GET',
	"headers": {
		'X-RapidAPI-Key': 'b40b73504dmshc6c0b9e39414d14p104dcejsn2a4e4edabb6f',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
    console.error(err);
})
})


// print results to the page ()
    // movie title
    var nameOfMovie;
    // where to stream 
    // year released
    // length 
    // actors (limit=3) maybeeeee
    // rated
            // to print to page 
            var searchCard = document.querySelector("#search-card");
            // searchCard.innerHTML += `<p>${nameOfMovie}</p<`

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
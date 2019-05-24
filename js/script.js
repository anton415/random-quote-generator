/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Coder: Anton Serdyuchenko anton415@gmail.com
******************************************/

// Init data.
var quotes = [
	{
		quote : 'I\'m going to make him an offer he can\'t refuse.',
		source : 'The Godfather',
		citation : 'Movie',
		year : '1972'
	},
	{
    quote : 'May the Force be with you.',
    source : 'Star Wars',
    citation : 'Movie',
    year : '1977'

	},
  {
    quote : 'I love the smell of napalm in the morning.',
    source : 'Apocalypse Now',
    citation : 'Movie',
    year : '1979'

  },
  {
    quote : 'Bond. James Bond.',
    source : 'Dr. No',
    citation : 'Movie',
    year : '1962'

  },
  {
    quote : 'I\'ll be back',
    source : 'The Terminator',
    citation : 'Movie',
    year : '1984'

  }

];

console.log(quotes);

// Get random quote object from 'quotes' array.
function getRandomQuote() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	return quotes[randomNumber];
}

console.log(getRandomQuote());

// Print quote.
var printQuote = function() {
	var randomQuote = getRandomQuote();
	var htmlString = '';
	htmlString = htmlString + '<p class="quote">' + randomQuote.quote + '</p>';
	htmlString = htmlString + '<p class="source">' + randomQuote.source;
	htmlString = htmlString + '<span class="citation">' + randomQuote.citation + '</span>';
	htmlString = htmlString + '<span class="year">' + randomQuote.year + '</span>';
	htmlString = htmlString + '</p>';
	
	document.getElementById('quote-box').innerHTML = htmlString;
}

console.log(printQuote());

// Add EventListener to button.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

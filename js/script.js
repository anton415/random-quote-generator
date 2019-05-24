/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Coder: Anton Serdyuchenko anton415@gmail.com
******************************************/

// Init data.
var quotes = [
	{
		quote = 'I\'m going to make him an offer he can\'t refuse.',
		source = 'The Godfather',
		citation = 'Movie',
		year = '1972'
	},
	{
    quote = 'May the Force be with you.',
    source = 'Star Wars',
    citation = 'Movie',
    year = '1977'

	},
  {
    quote = 'I love the smell of napalm in the morning.',
    source = 'Apocalypse Now',
    citation = 'Movie',
    year = '1979'

  },
  {
    quote = 'Bond. James Bond.',
    source = 'Dr. No',
    citation = 'Movie',
    year = '1962'

  },
  {
    quote = 'I\'ll be back',
    source = 'The Terminator',
    citation = 'Movie',
    year = '1984'

  }

]

// Get random quote object from 'quotes' array.
function getRandomQuote() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	return quotes[randomNumber];
}

// Print quote.
function printQuote() {
	var randomQuote = getRandomQuote();
	var htmlString = '';
	htmlString += '<p class="quote">' + randomQuote.quote + '</p>';
	htmlString += '<p class="source">' + randomQuote.source;
	htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
	htmlString += '<span class="year">' + randomQuote.year + '</span>';
	htmlString += '</p>';	
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

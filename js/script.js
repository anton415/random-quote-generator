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


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

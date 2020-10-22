/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

Author: Joe Bertino
******************************************/

// Array of quotes
const quotes = [
  {source: 'Sean Roach', quote: `We're going to give you a little lizard kiss here.`, citation: 'Check It Out!', year: 2014, format: 'TV'},
  {source: 'Dr. Steve Brule', quote: `Life is about having a good time and having candy, not putting roaches in your hair!`, citation: 'Check It Out!', year: 2013, format: 'TV'},
  {source: 'Noam Chomsky', quote: `The general population doesn't know what's happening and it doesn't even know that it doesn't know.`, citation: `Grating the Cheese`, year: 1977},
  {source: 'Uncle Iroh', quote: `Don’t let the plans get in the way of the Journey.`, citation: 'Wikipedia', year: 2000},
  {source: 'Donald Knuth', quote: `Computers are good at following instructions, but not at reading your mind.`, citation: 'The Brothers Karamzov', year: 1492, format: 'Movie'},
  {source: 'Chuck D', quote: `If you don't stand for something, you'll fall for anything.`, citation: 'Believe The Hype', year: 1992, format: 'Song'},
  {source: 'Anatole France', quote: `If fifty million people say a foolish thing, it is still a foolish thing.`, citation: 'A Book', year: 1840},
  {source: 'Carl Jung', quote: `The first half of life is devoted to forming a healthy ego, the second half is going inward and letting go of it.`, citation: 'Dreams', year: 1937, format: 'Book'},
  {source: 'Albert Einstein', quote: `If you want to live a happy life, tie it to a goal, not to people or objects.`, citation: 'Mad Magazine', year: 2000},
  {source: 'J.K. Rowling', quote: `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`, citation: "Larry Potter", year: 2011, format: 'Book'}
]

function getRandomQuote(array) {
  /**
  * Return a randomly selected quote object from the parameter `array`.
  *
  * @param {array} array Array of quote objects.
  *
  * @return {Object} The randomly select quote object from `array`.
  */
  
  // Generate random integer from 0 to (array.length - 1)
  let rando = Math.floor(Math.random() * array.length);
  
  // Return the randomly selected quote object 
  return array[rando];
}

function printQuote() {
  /**
  * Gets a random quote object from the quotes array and formats it to display.
  * Also change the background color of the page. 
  */
    
  // Get the random quote object
  let randQuote = getRandomQuote(quotes);
  
  // Generate the html to display on the page
  let html = `
    <p class="quote">${randQuote.quote}</p>
    <p class="source">${randQuote.source}`;
  
  if ( randQuote.hasOwnProperty('citation') ) {
    html += `<span class="citation">${randQuote.citation}`;
    if (randQuote.hasOwnProperty('format') ) {
        html += ` (${randQuote.format})`;
    }
    html += `</span>`;
  }
  if ( randQuote.hasOwnProperty('year') ) {
    html += `<span class="year">${randQuote.year}</span>`;
  }
  
  html += `</p>`;
  
  // Display the html on the page
  document.getElementById('quote-box').innerHTML = html;
  changeBGColor();
}

// function getRandomColor() sourced from user @Anatoliy on stackoverflow
// https://stackoverflow.com/a/1484514
function getRandomColor() {
    /**
    * Generate a random 6-character Hex string, to be interpretted by the caller as a color code.
    */
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBGColor() {
    /**
    * Change the background color of the page.
    */
    
    const color = getRandomColor();
    
    document.body.style.background = color;
}

// Map the "load quote" button to the function printQuote()
document.getElementById('load-quote').addEventListener("click", printQuote, false);

setInterval(function() {printQuote();}, 10000);
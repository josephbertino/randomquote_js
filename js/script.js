/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

Author: Joe Bertino
******************************************/

// Array of quotes
const quotes = [
  {source: 'David Puddy', quote: `Hey, how come people don’t have dip for dinner? Why is it only a snack, why can’t it be a meal, you know? I don’t understand stuff like that.`, citation: 'Seinfeld', year: 1995, format: 'TV'},
  {source: 'Timmy', quote: `You dipped the chip. You took a bite. And you dipped again. That’s like putting your whole mouth right in the dip! From now on, when you take a chip — just take one dip and end it!`, citation: 'Seinfeld', year: 1994, format: 'TV'},
  {source: 'Jerry Seinfeld', quote: `Breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.`, citation: `Seinfeld`, year: 1996, format: 'TV'},
  {source: 'Cosmo Kramer', quote: `My face is my livelihood, my allure… my twinkle! Everything I have I owe to this face.`, citation: 'Seinfeld', year: 1997, format: 'TV'},
  {source: 'George Costanza', quote: `When you look annoyed all the time, people think that you’re busy.`, citation: 'Seinfeld', year: 1996, format: 'TV'},
  {source: 'Elaine Benes', quote: `I don’t know how you guys walk around with those things.`, citation: 'Seinfeld', year: 1993, format: 'TV'},
  {source: 'J. Peterman', quote: `My mind is as barren as the surface of the moon.`, citation: 'Seinfeld', year: 1998, format:'TV'},
  {source: 'Frank Costanza', quote: `I’m like a phoenix, rising from Arizona!`, citation: 'Seinfeld', year: 1996, format: 'TV'},
  {source: 'Newman', quote: `When you control the mail you control... information.`, citation: "Seinfeld", year: 1993, format: 'TV'}
]

function getRandomQuote(array) {
  /**
  * Return a randomly selected quote object from the parameter `array`.
  *
  * @param {array} array Array of quote objects.
  *
  * @return {Object} The randomly selected quote object from `array`.
  */

  // Generate a random integer from 0 to (array.length - 1)
  let rando = Math.floor(Math.random() * array.length);

  // Return the randomly selected quote object
  return array[rando];
}

function printQuote() {
  /**
  * Gets a random quote object from the quotes array and formats it to display.
  * Also changes the background color of the page.
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
    * Generate a random 6-character Hex string, to be interpreted by the caller as a color code.
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

// setInterval(function() {printQuote();}, 10000);

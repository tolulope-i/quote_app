// my quote array
const motivationalQuotes = [
    {
        id: 1,
        quotes:  "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        id: 2,
        quotes: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        author: "Samuel Beckett"
    },
    {
        id: 3,
        quotes: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        id: 4,
        quotes: "Quality is not an act, it is a habit.",
        author: "Aristotle"
    },
    {
        id: 5,
        quotes: "If you're going through hell, keep going.",
        author: "Winston Churchill"
    }
]


const inspirationalQuotes = [
    {
        id: 1,
        quotes:  "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        author: "Vince Lombardi"
    },
    {
        id: 2,
        quotes: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        id: 3,
        quotes: "Keep your face always toward the sunshine - and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        id: 4,
        quotes: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
        author: "Edith Wharton"
    },
    {
        id: 5,
        quotes: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: "Jimmy Dean"
    }
]


const lifeQuotes = [
    {
        id: 1,
        quotes:  "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        id: 2,
        quotes: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        author: "Marie Curie"
    },
    {
        id: 3,
        quotes: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha"
    },
    {
        id: 4,
        quotes: "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
        author: "Dalai Lama"
    },
    {
        id: 5,
        quotes: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
        author: "Eminem"
    }
]


const smileQuotes = [
    {
        id: 1,
        quotes:  "The real man smiles in trouble, gathers strength from distress, and grows brave by reflection.",
        author: "Thomas Paine"
    },
    {
        id: 2,
        quotes: "Be thou the rainbow in the storms of life. The evening beam that smiles the clouds away, and tints tomorrow with prophetic ray.",
        author: "Lord Byron"
    },
    {
        id: 3,
        quotes: "We shall never know all the good that a simple smile can do.",
        author: "Mother Teresa"
    },
    {
        id: 4,
        quotes: "Let my soul smile through my heart and my heart smile through my eyes, that I may scatter rich smiles in sad hearts.",
        author: "Paramahansa Yogananda"
    },
    {
        id: 5,
        quotes: "A gentle word, a kind look, a good-natured smile can work wonders and accomplish miracles.",
        author: "William Hazlitt"
    }
]


const natureQuotes = [
    {
        id: 1,
        quotes:  "Wherever you go, no matter what the weather, always bring your own sunshine.",
        author: "Anthony J. D'Angelo"
    },
    {
        id: 2,
        quotes: "The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep.",
        author: "Robert Frost"
    },
    {
        id: 3,
        quotes: "Just living is not enough... one must have sunshine, freedom, and a little flower.",
        author: "Hans Christian Andersen"
    },
    {
        id: 4,
        quotes: "He is richest who is content with the least, for content is the wealth of nature.",
        author: "Socrates"
    },
    {
        id: 5,
        quotes: "Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby.",
        author: "Langston Hughes"
    }
]

// GETTING MY HTML TAGS TO DISPLAY
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const type = document.querySelector(".type");
const quoteResult = document.querySelector(".quote-result")

// GETTING MY BUTTONS
const randomBtn = document.querySelector(".random-btn");
const motivationalBtn = document.querySelector(".motivational-btn");
const inspirationalBtn = document.querySelector(".inspirational-btn");
const lifeBtn = document.querySelector(".life-btn");
const smileBtn = document.querySelector(".smile-btn");
const natureBtn = document.querySelector(".nature-btn");



// Function to save the quote to local storage
function saveQuoteToLocalStorage(quoteContent) {
    localStorage.setItem('savedQuote', JSON.stringify(quoteContent));
}

// Function to retrieve the saved quote from local storage
function getQuoteFromLocalStorage() {
    const savedQuote = localStorage.getItem('savedQuote');
    return savedQuote ? JSON.parse(savedQuote) : null;
}

// Function to display the saved quote from local storage
function displaySavedQuote() {
    const savedQuote = getQuoteFromLocalStorage();
    if (savedQuote) {
        displayQuote(savedQuote);
    }
}

// Function to generate a random quote
function generateRandomQuote(quotesArray) {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const randomQuote = quotesArray[randomIndex];
    return randomQuote;
}

// Function to display the quote
function displayQuote(quoteContent) {
    quote.textContent = quoteContent.quotes;
    author.textContent = quoteContent.author;
    type.textContent = quoteContent.type;
    quoteResult.classList.add("change-color");

    // to save n´quote to local storage
    saveQuoteToLocalStorage(quoteContent);

}



// Event listeners for each button
motivationalBtn.addEventListener("click", function() {
    const randomQuote = generateRandomQuote(motivationalQuotes);
    randomQuote.type = "Motivational Quote";
    displayQuote(randomQuote);
});

inspirationalBtn.addEventListener("click", function() {
    const randomQuote = generateRandomQuote(inspirationalQuotes);
    randomQuote.type = "Inspirational Quote";
    displayQuote(randomQuote);
});

lifeBtn.addEventListener("click", function() {
    const randomQuote = generateRandomQuote(lifeQuotes);
    randomQuote.type = "Life Quote";
    displayQuote(randomQuote);
});

smileBtn.addEventListener("click", function() {
    const randomQuote = generateRandomQuote(smileQuotes);
    randomQuote.type = "Smile Quote";
    displayQuote(randomQuote);
});

natureBtn.addEventListener("click", function() {
    const randomQuote = generateRandomQuote(natureQuotes);
    randomQuote.type = "Nature Quote";
    displayQuote(randomQuote);
});




// To make the random button generate quotes from any category
function generateAnyQuote() {
    // Array containing all quote categories
    const allQuotes = [
        { type: "Motivational Quote", quotes: motivationalQuotes },
        { type: "Inspirational Quote", quotes: inspirationalQuotes },
        { type: "Life Quote", quotes: lifeQuotes },
        { type: "Smile Quote", quotes: smileQuotes },
        { type: "Nature Quote", quotes: natureQuotes }
    ];

    // Select any category
    const anyCategoryIndex = Math.floor(Math.random() * allQuotes.length);
    const anyCategory = allQuotes[anyCategoryIndex];

    // Select random quote from the any category
    const anyQuoteIndex = Math.floor(Math.random() * anyCategory.quotes.length);
    const anyQuote = anyCategory.quotes[anyQuoteIndex];
    anyQuote.type = anyCategory.type; // Add type property to the quote object

    return anyQuote;
}

// Event listener for the random button
randomBtn.addEventListener("click", function() {
    const anyQuote = generateAnyQuote();
    displayQuote(anyQuote);
});




// Display the saved quote on page load
document.addEventListener('DOMContentLoaded', function() {
    displaySavedQuote();
});

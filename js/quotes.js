const quotes = [
    {
        quote: "It always seems impossible until its done.",
        author: "-Nelson Mandela-",
    },
    {
        quote: "To truly laugh, you must be able to take your pain, and play with it!",
        author: "-Charlie Chaplin-",
    },
    {
        quote: "While there's life, there's hope.",
        author: "-Cicero-",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "-Winston Churchill-",
    },
    {
        quote: "Energy and persistence conquer all things.",
        author: "-Benjamin Franklin-",
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
        author: "-Aristoteles-",
    },
    {
        quote: "True knowledge exists in knowing that you know nothing.",
        author: "-Socrates-",
    },
    {
        quote: "Life is like riding bicycle. To keep your balance you must keep moving.",
        author: "-Albert Einstein-",
    },
    {
        quote: "We should all start to live before we get too old. Fear is stupid. So are regrets",
        author: "-Marlyn Monroe-",
    },
    {
        quote: "Anything is possible, if you have got enough nerve.",
        author: "-Joan K. Rowling-",
    },

]

const quote = document.querySelector("#text3");
const author = document.querySelector("#text4");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
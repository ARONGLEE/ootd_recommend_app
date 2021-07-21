const quotes = [
    {
        quote: "It always seems impossible until its done.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is not fair, get used to it.",
        author: "",
    },
    {
        quote: "Life is a tragedy when seen in close-up, but a comedy in long shot.",
        author: "",
    },
    {
        quote: "Slow and steady win the race.",
        author: "",
    },
    {
        quote: "It ain't over till it's over.",
        author: "",
    },
    {
        quote: "no one is you and that is your power",
        author: "",
    },
    {
        quote: "Better the last smile than the first laughter.",
        author: "",
    },
    {
        quote: "Miracles happen to only those who believe in them.",
        author: "",
    },
    {
        quote: "Love your neighbor as yourself.",
        author: "",
    },
    {
        quote: "This too shall pass.",
        author: "",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
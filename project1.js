const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const nameofper = document.querySelector('.person');

const quotes = [
    {
        quote: `"revenge is the best revenge"`,
        person: "aditya sharma "
    },
    {
        quote: `“Sometimes I'm real cool, but sometimes I could be a real asshole. I think everyone is like that.”`,
        person: "eminem "
    },
    {
        quote: `"Yes, you may love them to death, but are they willing to love you to life?"`,
        person: "kierra"
    },
    {
        quote: `“Rise up & attack the day with Passion. The struggle you're in today is developing the strength you need for tomorrow.”`,
        person: "Napz cherub Pellazo"
    },
    {
        quote: `"If you don't have haters in your way of success, It means you are on wrong way!"`,
        person: "hassanwanx"
    },
    {
        quote: `"Pazite sa kakvim ljudima delite energiju. Neki ljudi imaju toksicnu auru"`,
        person: "tamara Stamenkovic"
    },
    {
        quote: `"revenge is the best revenge"`,
        person: "aditya sharma "
    },
    {
        quote: `"revenge is the best revenge"`,
        person: "aditya sharma "
    },
    {
        quote: `"revenge is the best revenge"`,
        person: "aditya sharma "
    },
    {
        quote: `"revenge is the best revenge"`,
        person: "aditya sharma "
    },
];

// console.log(btn);
// console.log(quote);
// console.log(nameofper);

console.log(quotes[0].quote);
console.log(quotes[0].person);

btn.addEventListener('click', function(){
        const random = Math.floor(Math.random() * quotes.length);
        quote.innerText = quotes[random].quote;
        nameofper.innerText = quotes[random].person;
    })
const simpleQuotes = [
{
    name: "Stephen King",
    quote: "Get busy living or get busy dying."
},
{
    name: "John F. Kennedy",
    quote: "Those who dare to fail miserably can achieve greatly."
},
{
    name: "Abraham Lincoln",
    quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
},
{
    name: "Leonardo Da Vinci",
    quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
},
{
    name: "Leo Tolstoy",
    quote: "If you want to be happy, be."
},
{
    name: "Albert, Einstein - German theoretical physicist (1879-1955)",
    quote: "Imagination is more important than knowledge."
},
{
    name: "Confucius - Chinese philosopher, politician and statesman (551 BC l-479 BC)",
    quote: "It does not matter how slowly you go as long as you do not stop."
},
{
    name: "Walt Disney - American filmmaker (1901-1966)",
    quote: "All our dreams can come true, if we have the courage to pursue them."
},
{
    name: "Estée Lauder - American founder of the cosmetic company (1908-2004)",
    quote: "I never dreamed about success, I worked for it."
},
{
    name: "Avul Pacir Zainulabidin Abdul Kalam - Atomic Scientist and President of India (1931-2015)",
    quote: "Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult."
},
{
    name: "Victor Hugo - French poet, prose writer, dramatist, essayist and politician (1802-1855)",
    quote: "There is nothing more powerful in the world than the idea that came in time."
},
{
    name: "Aristotle - Greek philosopher (384 BC-322 BC)",
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
}
]

const button = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const author = document.querySelector("#quoteAuthor");

button.addEventListener("click", execute);

let i = 0;

function execute() {
    
    if (i < simpleQuotes.length) {
        quote.innerHTML = simpleQuotes[i]["quote"];
        author.innerHTML= simpleQuotes[i]["name"];
        i++;
    } else {
        i -= simpleQuotes.length;
        quote.innerHTML = simpleQuotes[i]["quote"];
        author.innerHTML= simpleQuotes[i]["name"];
        i++;
    }
}
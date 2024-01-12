let btn = document.querySelector('#btn');
let quote=document.querySelector('#quote');
let person=document.querySelector('#person');

const quotes = [
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "Be yourself; everyone else is already taken.", person: "Oscar Wilde" },
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", person: "Albert Einstein" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", person: "Robert Frost" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
    { quote: "The purpose of our lives is to be happy.", person: "Dalai Lama" },
    { quote: "The best way to predict the future is to create it.", person: "Peter Drucker" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", person: "Martin Luther King Jr." },
    { quote: "The only thing we have to fear is fear itself.", person: "Franklin D. Roosevelt" },
    { quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", person: "Ralph Waldo Emerson" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", person: "Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing.", person: "Walt Disney" },
    { quote: "Strive not to be a success, but rather to be of value.", person: "Albert Einstein" },
    { quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.", person: "J.K. Rowling" },
    { quote: "Don't cry because it's over, smile because it happened.", person: "Dr. Seuss" },
    { quote: "The only person you are destined to become is the person you decide to be.", person: "Ralph Waldo Emerson" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "The only impossible journey is the one you never begin.", person: "Tony Robbins" },
    { quote: "I am not a product of my circumstances. I am a product of my decisions.", person: "Stephen R. Covey" },
    { quote: "Whatever you do, do it well.", person: "Walt Disney" },
    { quote: "If you want to lift yourself up, lift up someone else.", person: "Booker T. Washington" },
    { quote: "It always seems impossible until it's done.", person: "Nelson Mandela" },
    { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
    { quote: "The secret of getting ahead is getting started.", person: "Mark Twain" },
    { quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", person: "Maya Angelou" },
    { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", person: "Brian Tracy" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" }
  ];
  
btn.addEventListener('click',function(){
let random=Math.floor(Math.random()*quotes.length);
quote.innerText=quotes[random].quote;
person.innerText=quotes[random].person;
});

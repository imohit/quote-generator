document.getElementById('quoteButton').addEventListener('click', function() {
    const quotes = [
        "The best way to predict the future is to invent it. – Alan Kay",
        "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. – Thomas A. Edison",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "To succeed in life, you need two things: ignorance and confidence. – Mark Twain"
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = quote;
});

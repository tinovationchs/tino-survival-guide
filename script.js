/*
  ========================================================================================
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  TO ADD YOUR ADVICE: 
  Copy one of the blocks below, paste it at the end of the list (right before the closing `]`), 
  and change the text to your own! Don't forget to add a comma `,` after the previous block.
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  ========================================================================================
*/

const studentAdvice = [
    {
        name: "Prakruti S.",
        gradYear: 2028,
        category: "Extracurriculars",
        tip: "JOIN TINOVATION!!"
    },
    {
        name: "Bernard F.",
        gradYear: 2027,
        category: "Extracurriculars",
        tip: "JOIN TINOVATION!!"
    }
];


/* 
  ========================================================================================
  HOW THIS WORKS (DOM MANIPULATION)
  ========================================================================================
  1. We grab the empty <div id="advice-container"> from our HTML file.
  2. We loop through the `studentAdvice` array above.
  3. For each piece of advice, we create a new HTML "card" (a piece of HTML text).
  4. We inject that card inside our empty container!
*/

// Grab the container from index.html using its ID
const container = document.getElementById("advice-container");

// Loop through each item in our array
for (let i = 0; i < studentAdvice.length; i++) {
    
    // Store the current advice object in a variable called 'item'
    const item = studentAdvice[i];

    // Create a new div element for the card
    const card = document.createElement("div");
    
    // Add a CSS class to the card so it gets styled by style.css
    card.classList.add("advice-card");

    // Inject the inner HTML structure for the card, plugging in our variables using ${}
    card.innerHTML = `
        <span class="category">${item.category}</span>
        <h3>${item.name} (Class of ${item.gradYear})</h3>
        <p>"${item.tip}"</p>
    `;

    // Append (attach) this new card inside the container on the webpage
    container.appendChild(card);
}

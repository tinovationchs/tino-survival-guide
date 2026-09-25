document.addEventListener('DOMContentLoaded', async () => {
    const loreGrid = document.getElementById('lore-grid');

    try {
        const response = await fetch('data/lore.json');
        const loreData = await response.json();
        
        loreData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'flip-card';
            
            card.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>${item.rule}</h3>
                    </div>
                    <div class="flip-card-back">
                        <p>${item.explanation}</p>
                    </div>
                </div>
            `;
            
            loreGrid.appendChild(card);
        });
        
    } catch (e) {
        loreGrid.innerHTML = "<p>Could not load lore data. Check data/lore.json!</p>";
    }
});

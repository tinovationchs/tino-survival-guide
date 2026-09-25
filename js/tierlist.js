document.addEventListener('DOMContentLoaded', async () => {
    const unrankedPool = document.getElementById('unranked-pool');

    try {
        const response = await fetch('data/food.json');
        const foods = await response.json();
        
        foods.forEach((food, index) => {
            const el = document.createElement('div');
            el.className = 'food-item';
            el.draggable = true;
            el.id = `food-${index}`;
            el.innerHTML = `
                ${food.name}
                <span>${food.price} | ${food.walkTimeMins}m walk</span>
            `;
            
            // Drag Start
            el.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.id);
                setTimeout(() => e.target.style.opacity = '0.5', 0);
            });
            
            // Drag End
            el.addEventListener('dragend', (e) => {
                e.target.style.opacity = '1';
            });
            
            unrankedPool.appendChild(el);
        });
        
    } catch (e) {
        unrankedPool.innerHTML = "<p>Could not load food data. Check data/food.json!</p>";
    }

    // Advanced Task: Setup Dropzones
    const dropzones = document.querySelectorAll('.tier-dropzone');
    
    dropzones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // allow dropping
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', (e) => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const id = e.dataTransfer.getData('text/plain');
            const draggableElement = document.getElementById(id);
            if (draggableElement) {
                zone.appendChild(draggableElement);
            }
        });
    });
});

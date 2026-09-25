// Advanced Task: Real-time schedule highlighting using JS Date()
// Note: This uses a hardcoded example schedule (Regular Monday) for demonstration!

const schedule = [
    { period: "Period 1", start: "08:00", end: "08:50" },
    { period: "Period 2", start: "08:55", end: "09:45" },
    { period: "Tutorial", start: "09:45", end: "10:25" },
    { period: "Brunch", start: "10:25", end: "10:40" },
    { period: "Period 3", start: "10:45", end: "11:35" },
    { period: "Period 4", start: "11:40", end: "12:30" },
    { period: "Lunch", start: "12:30", end: "13:10" },
    { period: "Period 5", start: "13:15", end: "14:05" },
    { period: "Period 6", start: "14:10", end: "15:00" },
    { period: "Period 7", start: "15:05", end: "15:55" }
];

const tutorialOptions = [
    "Catch up on math homework in the library.",
    "Go to your science teacher to ask questions about the lab.",
    "Club meeting in Room 612!",
    "Chill in the quad with friends.",
    "Make up that quiz you missed yesterday."
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('schedule-blocks');
    const statusText = document.getElementById('current-status-text');
    
    // 1. Render Schedule HTML
    schedule.forEach((block, idx) => {
        const row = document.createElement('div');
        row.className = 'block-row';
        row.id = `block-${idx}`;
        row.innerHTML = `
            <span>${block.period}</span>
            <span>${block.start} - ${block.end}</span>
        `;
        container.appendChild(row);
    });

    // 2. Setup Tutorial Randomizer
    document.getElementById('randomize-btn').addEventListener('click', () => {
        const result = document.getElementById('tutorial-result');
        const randomChoice = tutorialOptions[Math.floor(Math.random() * tutorialOptions.length)];
        result.textContent = randomChoice;
    });

    // 3. Real-Time Highlighting (Runs every minute)
    function updateSchedule() {
        const now = new Date();
        const currentMins = now.getHours() * 60 + now.getMinutes();
        
        let foundActive = false;
        
        schedule.forEach((block, idx) => {
            const row = document.getElementById(`block-${idx}`);
            row.classList.remove('active-block');
            
            const [startH, startM] = block.start.split(':').map(Number);
            const [endH, endM] = block.end.split(':').map(Number);
            
            const startMins = startH * 60 + startM;
            const endMins = endH * 60 + endM;
            
            if (currentMins >= startMins && currentMins < endMins) {
                row.classList.add('active-block');
                statusText.textContent = block.period;
                foundActive = true;
                
                const minsLeft = endMins - currentMins;
                document.getElementById('countdown-text').textContent = `${minsLeft} minutes until bell rings!`;
            }
        });
        
        if (!foundActive) {
            statusText.textContent = "Outside School Hours";
            document.getElementById('countdown-text').textContent = "";
        }
    }

    updateSchedule();
    setInterval(updateSchedule, 60000); // Check every 60 seconds
});

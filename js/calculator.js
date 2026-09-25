document.addEventListener('DOMContentLoaded', async () => {
    const courseListDiv = document.getElementById('course-list');
    const sleepDisplay = document.getElementById('hours-sleep');
    const tipDisplay = document.getElementById('survival-tip-display');
    const body = document.getElementById('calc-body');

    try {
        const response = await fetch('data/courses.json');
        const courses = await response.json();
        
        // Render checkboxes
        courses.forEach((course, index) => {
            const label = document.createElement('label');
            label.className = 'course-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = index;
            checkbox.addEventListener('change', () => calculateSleep(courses));
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${course.className} (~${course.hoursPerWeek} hrs/wk)`));
            
            courseListDiv.appendChild(label);
        });
        
    } catch (e) {
        courseListDiv.innerHTML = "<p>Could not load courses data. Did you set up data/courses.json?</p>";
    }

    function calculateSleep(courses) {
        const checkboxes = document.querySelectorAll('#course-list input:checked');
        let totalHwHoursPerWeek = 0;
        let lastTip = "You have a balanced schedule!";
        
        checkboxes.forEach(cb => {
            const course = courses[cb.value];
            totalHwHoursPerWeek += course.hoursPerWeek;
            lastTip = course.survivalTip;
        });
        
        // Math: 24 hours - 7 hours (school) - hw (daily avg) - 2 hours (eating/life)
        const hwPerDay = totalHwHoursPerWeek / 5; // assuming 5 days of intense work
        let sleep = 24 - 7 - hwPerDay - 2; 
        
        // Cap sleep visually
        if (sleep > 9) sleep = 9;
        
        sleepDisplay.textContent = sleep.toFixed(1);
        tipDisplay.textContent = lastTip;

        // Visual feedback based on sleep
        body.classList.remove('danger-zone', 'safe-zone');
        if (sleep <= 5) {
            body.classList.add('danger-zone');
            sleepDisplay.style.color = 'red';
        } else if (sleep >= 8) {
            body.classList.add('safe-zone');
            sleepDisplay.style.color = 'green';
        } else {
            body.style.backgroundColor = 'var(--bg-color)';
            sleepDisplay.style.color = 'var(--tino-black)';
        }
    }
});

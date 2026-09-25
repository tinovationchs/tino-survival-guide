# 🎒 Tino Survival Guide

Welcome to the **Tino Survival Guide**! This is an open-source, beginner-friendly web development project built by and for the students of Cupertino High School. 

The goal of this repository is twofold:
1. Provide a central hub for advice, tips, and unwritten rules to help freshmen (and everyone else) survive high school.
2. Teach members how to read code, use Git, and make their very first GitHub contribution!

---

## 🛠️ Contribution Tiers

We have split this project into different contribution tracks so that **anyone of any skill level** can contribute without stepping on each other's toes!

### 🟢 Beginner Tier (First-Time Coders & Git Learners)
**Focus:** Learning the pure Git workflow (fork, branch, pull request) and simple data entry.
- **Your Task:** Open a PR to add your own advice, lore, or food spots! 
- **Where to go:** 
  - Edit `script.js` to add your personal advice to the `studentAdvice` array.
  - Edit `data/courses.json` to add survival tips for your classes.
  - Edit `data/lore.json` to add an unwritten rule of the school.
  - Edit `data/food.json` to add your favorite off-campus food spots.

### 🟡 Intermediate Tier (HTML/CSS & DOM Practice)
**Focus:** Component styling, responsive layouts, and small JavaScript interactions.
- **Your Task:** Build or refine the UI!
- **Where to go:** 
  - Edit `style.css`, `css/lore.css`, or `css/schedule.css` to add animations or refine the grid layouts.
  - Work on the "Tutorial Optimizer" in `schedule.html`.
  - Design your own custom buttons and styling components.

### 🔴 Advanced Tier (Architecture & Interactive Features)
**Focus:** Dynamic data rendering, asynchronous JavaScript, and complex features.
- **Your Task:** Build the engines that power the site.
- **Where to go:** 
  - Manage the drag-and-drop logic in `js/tierlist.js`.
  - Build out the real-time `Date()` highlighting in `js/schedule.js`.
  - Act as a maintainer: Review and approve Pull Requests submitted by the beginners!

---

## 🚀 How to Contribute

If you've never used GitHub before, don't worry! Follow these steps:

1. **Fork this repository** (Click the "Fork" button at the top right of this page). This creates your own personal copy of the code.
2. **Clone your fork** to your local computer:
   ```bash
   git clone https://github.com/YOUR-USERNAME/tino-survival-guide.git
   ```
3. **Create a new branch** for your feature or advice:
   ```bash
   git checkout -b add-my-advice
   ```
4. **Make your changes** in your favorite text editor (like VS Code).
5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Added my survival advice"
   ```
6. **Push to your fork**:
   ```bash
   git push origin add-my-advice
   ```
7. **Open a Pull Request!** Go back to the main `tinovationchs/tino-survival-guide` repository on GitHub and click "Compare & pull request".

---

## 💻 Running the Project Locally

Because this project uses vanilla HTML, CSS, and JS, you don't need any complex build tools to run it! 
However, to ensure the data fetching works properly, you should run it using a local server.

If you have Python installed, open your terminal in the project folder and run:
```bash
python3 -m http.server
```
Then open your browser and go to `http://localhost:8000`.

---

**Built with ❤️ by Prakruti.** JOIN TINOVATION!!

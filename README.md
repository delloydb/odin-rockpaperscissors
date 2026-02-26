# ✊📄✂️ Rock Paper Scissors – Console Game

![Game Screenshot](./screenshot.png)  
*Replace with an actual screenshot of the console output or the simple HTML page.*

This is a solution to the **Rock Paper Scissors** project from [The Odin Project](https://www.theodinproject.com/) Foundations course. The game is played entirely in the browser console – the player enters their choice via prompts and the computer randomly picks, with scores tracked over five rounds.

## 🎮 How to Play

1. Open the `index.html` file in any modern web browser.
2. Press **F12** to open Developer Tools and go to the **Console** tab.
3. The game will automatically start and prompt you for your choice (`rock`, `paper`, or `scissors`) for each of the five rounds.
4. After each round, the result and current scores are displayed in the console.
5. At the end, an overall winner is announced.

## ✨ Features

- ✅ **Fully console‑based** – simple and distraction‑free.
- ✅ **Random computer choice** – uses `Math.random()` for fair play.
- ✅ **Case‑insensitive input** – accepts `RoCK`, `PAPER`, `Scissors`, etc.
- ✅ **Five rounds** – plays exactly as specified in the project brief.
- ✅ **Score tracking** – human and computer scores update after each round.
- ✅ **Clear winner announcement** – after five rounds, the final result is shown.

## 🛠 Built With

- **HTML5** – minimal structure to load the script.
- **CSS3** – basic styling for the landing message (optional).
- **JavaScript (ES6)** – all game logic, prompts, and console output.

## 📚 What I Learned

- Breaking down a problem into functions (`getComputerChoice`, `getHumanChoice`, `playRound`, `playGame`).
- Using `Math.random()` to generate pseudo‑random choices.
- Handling user input with `prompt()` and making it case‑insensitive.
- Managing global vs. local scope by moving score variables inside the main function.
- Implementing a game loop (using a `for` loop) to play multiple rounds without repeating code.
- Debugging with `console.log` and testing in the browser console.

## 🌐 Live Demo

This project runs locally – no live deployment needed.  
To play, simply clone the repository and open `index.html` in your browser.

## 📁 Installation

1. Clone the repository:  
   `git clone https://github.com/your-username/odin-rock-paper-scissors.git`
2. Navigate into the folder:  
   `cd odin-rock-paper-scissors`
3. Open `index.html` in your favorite browser.

## 🙏 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for providing an excellent curriculum and this fun project.
- The clean design and clear instructions made implementing this game a great learning experience.

---

**This project is part of my journey through The Odin Project – building real things, one commit at a time.**  

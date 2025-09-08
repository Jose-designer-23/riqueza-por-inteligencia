# 💰 Wealth by Brains 🧠

Welcome to **Wealth by Brains**, a captivating trivia game inspired by the popular TV show **Who Wants to Be a Millionaire?**!

This project showcases web development centered on **React**, combining visual effects, interactivity, and clear game logic to deliver a fun and challenging experience.

---

## ✨ Key Features

### 🎮 Gameplay and Navigation Experience

* **Intuitive Navigation:**
* **Home Screen:** Explains the game rules and wildcards for a clear understanding before starting.
* **Start Button:** Starts the game and takes you to the question screen.
* **High-Stakes Mechanics:**
* Answer 15 questions correctly to win a million euros.
* Failing to answer a single question means losing all your money and ending the game.
* **Strategic Wildcards:**
* **50%:** Eliminates two of the four incorrect answers, increasing your chances.
* **Random:** Eliminates a random number of incorrect answers (between 1 and 3).
* *Note: Each wildcard can only be used once per game.*
* **Visual and Audio Feedback:**
* Answer buttons change color: turning **green** for correct answers and **red** for incorrect answers.
* Using wildcards disables and darkens the button for the wildcard used and randomly selected incorrect answers, displaying a "forbidden" icon.
* Enjoy immersive background music, sound effects for correct and incorrect answers, and an exciting celebration song upon winning the grand prize.
* **Dynamic Endings:** After finishing the game, a custom modal is displayed congratulating you on your victory or encouraging you to try again.

---

## 🛠️ Features and Technologies Used

This project was developed with **React**, showcasing advanced handling of its **hooks** for efficient state and effects management.

### React Hooks:

* [**`useState`**](https://es.react.dev/reference/react/useState): Used to manage the state of key components such as the current question, game progress, accumulated money, and wildcard usage.
* [**`useEffect`**](https://es.react.dev/reference/react/useEffect): Used to manage the game's "side effects." This includes playing music and sound effects at specific times, and shuffling the order of questions at the start of each game.
* [**`useRef`**](https://es.react.dev/reference/react/useRef): Used to reference DOM elements, such as audio files, without causing unnecessary re-rendering, which optimizes performance.
* [**`useNavigate`**](https://reactrouter.com/en/main/hooks/use-navigate): Facilitates seamless navigation between the home page and the game screen.

---

## 🚀 How to Run the Project

To get the game up and running in your local environment, follow these simple steps:

### Prerequisites

* Node.js (LTS version recommended)
* npm or Yarn

### Steps

1. **Clone the repository:**
```bash
git clone [https://github.com/Jose-designer-23/riqueza-por-inteligencia.git](https://github.com/Jose-designer-23/riqueza-por-inteligencia.git)
```
2. **Navigate to the project directory:**
```bash
cd riqueza-por-inteligencia
```
3. **Install the dependencies:**
```bash
npm install
```
4. **Start the development server:**
```bash
npm start
```
Once started, open your browser and visit `http://localhost:3000` to start playing.

---

## 🤝 Contributions

Contributions are welcome! If you have ideas to improve the game, feel free to open an issue or submit a pull request.

---

## ✍️ Author

* [Jose-designer-23](https://github.com/Jose-designer-23)

---

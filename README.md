## Tech Quiz App

This is a simple tech quiz app built with the MERN stack. The goal of this application is to allow users to take a tech-related quiz and receive a score at the end.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <https://github.com/Carlosdpastrana/quiz-test-module19.git>
   ```

2. Navigate to the project folder:
   ```bash
   cd quiz-test
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Rename `.env.example` to `.env` inside the `server` folder and make sure it has the following:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/techquiz
   PORT=3001
   ```

5. Seed the database:
   ```bash
   npm run seed
   ```

6. Start the application:
   ```bash
   npm run start:dev
   ```

The application will be available at `http://127.0.0.1:3000/`.

---

## Running Cypress Tests

### Open Cypress Test Runner
1. Open a new terminal window.
2. Run:
   ```bash
   npm run test
   ```

### Run Component Test
- Select **Component Testing**.
- Run `quiz.cy.jsx`.

### Run End-to-End Test
- Select **E2E Testing**.
- Run `quiz.cy.js`.

---

## Walkthrough Video
Watch the walkthrough video showcasing the tests running successfully:

[Watch Video Here](https://drive.google.com/file/d/1mV38hBlo-TvEnN9wwnSu8RunqYks7o5F/view?usp=drive_link)

---

## Acknowledgment
This project is part of a coding bootcamp assignment, and the starter code was provided by the course.

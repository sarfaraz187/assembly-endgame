# Assembly: Endgame

Assembly: Endgame is a word-guessing game where you try to guess the word in under 8 attempts to keep the programming world safe from Assembly!

## Table of Contents

- [Assembly: Endgame](#assembly-endgame)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Scripts](#scripts)
  - [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/assembly-endgame.git
   cd assembly-endgame
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm run dev
```

Open your browser and navigate to http://localhost:3000 to play the game.

Game Rules

- You have to guess the word in under 8 attempts.
- Each incorrect guess will eliminate one programming language.
- If you guess the word correctly, you win!
- If you fail to guess the word within 8 attempts, you lose and Assembly takes over!

## Project Structure

```sh
.gitignore
eslint.config.js
index.html
package.json
public/
README.md
src/
    App.css
    App.tsx
    assets/
    Header.tsx
    index.css
    languages.tsx
    main.tsx
    utils.ts
    vite-env.d.ts
    words.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

- App.tsx: Main component of the game.
- Header.tsx: Header component.
- languages.tsx: Contains the list of programming languages.
- utils.ts: Utility functions for the game.
- words.ts: List of words used in the game.
- main.tsx: Entry point of the application.
- index.css: Global styles.
- App.css: Styles for the App component.

## Scripts

- yarn run dev: Start the development server.
- yarn run build: Build the project for production.
- yarn run lint: Run ESLint to lint the code.
- yarn run preview: Preview the production build.
- yarn run predeploy: Prepare the project for deployment.
- yarn run deploy: Deploy the project to GitHub Pages.

## License

- This project is licensed under the MIT License.

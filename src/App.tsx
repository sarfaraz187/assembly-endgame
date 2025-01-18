import "./App.css";
import Header from "./Header";
import { languages } from "./languages";
import { useState } from "react";
import clsx from "clsx";
import { getFarewellText, getRandomWord } from "./utils";
import Confetti from "react-confetti";

function App() {
  console.clear();
  const [currentWord, setCurrentWord] = useState<string>(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  // Derived Values
  const currentWordArr: string[] = currentWord.split("");
  const wrongGuessCount = guessedLetters.filter((letter) => !currentWordArr.includes(letter)).length;
  const isGameWon = currentWord.split("").every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetters = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect = lastGuessedLetters && !currentWordArr.includes(lastGuessedLetters);

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const letter = e.currentTarget.textContent?.toLowerCase();
    /**
     * Alternative method using Set which will remove duplicates
     * const letterSet = new Set(guessedLetters);
     * letterSet.add(letter);
     * setGuessedLetters(Array.from(letterSet));
     * */
    if (letter) setGuessedLetters(guessedLetters.includes(letter) ? guessedLetters : [...guessedLetters, letter]);
  };

  // I need the count of wrong guesses to be less than 8
  const languageElements = languages.map((lang, index) => (
    <span key={lang.name} className={clsx({ chip: true, lost: index < wrongGuessCount })} style={{ backgroundColor: lang.backgroundColor, color: lang.color }}>
      {lang.name}
    </span>
  ));

  const currentElements = currentWordArr.map((letter, index) => {
    return (
      <span key={index} className="word-display">
        {isGameOver || guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const keyboardElements = alphabets.split("").map((letter, index) => (
    <button
      key={index}
      onClick={handleBtnClick}
      disabled={isGameOver}
      aria-label={`Letter ${letter}`}
      aria-disabled={guessedLetters.includes(letter)}
      className={clsx({
        correct: currentWordArr.includes(letter) && guessedLetters.includes(letter),
        wrong: !currentWordArr.includes(letter) && guessedLetters.includes(letter),
      })}
    >
      {letter.toUpperCase()}
    </button>
  ));

  const notificationElement = () => {
    if (!isGameOver && isLastGuessIncorrect) {
      return <p>{getFarewellText(languages[wrongGuessCount - 1].name)}</p>;
    }

    if (isGameWon)
      return (
        <>
          <h2>You Win!</h2>
          <p>Well done! 🎉</p>
        </>
      );

    if (isGameLost)
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
  };

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header />

      <section aria-live="polite" role="status" className={gameStatusClass}>
        {notificationElement()}
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word-display-container">{currentElements}</section>
      <section className="alphabet-container">{keyboardElements}</section>

      {isGameOver && (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </main>
  );
}

export default App;

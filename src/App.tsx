import "./App.css";
import Header from "./Header";
import { languages } from "./languages";
import { useState } from "react";
import clsx from "clsx";

function App() {
  const [currentWord, setCurrentWord] = useState<string>("react");
  const [guessedWord, setGuessedWord] = useState<string[]>([]);
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const currentWordArr: string[] = currentWord.split("");

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const letter = e.currentTarget.textContent?.toLowerCase();
    /**
     * Alternative method using Set which will remove duplicates
     * const letterSet = new Set(guessedWord);
     * letterSet.add(letter);
     * setGuessedWord(Array.from(letterSet));
     * */
    if (letter) setGuessedWord(guessedWord.includes(letter) ? guessedWord : [...guessedWord, letter]);
  };

  const handleNewGameClick = () => {
    setCurrentWord("react");
  };

  const currentElements = currentWordArr.map((letter, index) => {
    return (
      <span key={index} className="word-display">
        {guessedWord.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const keyboardElements = alphabets.split("").map((letter, index) => (
    <button
      key={index}
      onClick={handleBtnClick}
      className={clsx({
        correct: currentWordArr.includes(letter) && guessedWord.includes(letter),
        wrong: !currentWordArr.includes(letter) && guessedWord.includes(letter),
      })}
    >
      {letter.toUpperCase()}
    </button>
  ));

  return (
    <main>
      <Header />
      <section className="status-bar">
        <h2>You Win</h2>
        <p>Well Done!</p>
      </section>
      <section className="language-chips">
        {languages.map((lang) => (
          <span className="chips" key={lang.name} style={{ backgroundColor: lang.backgroundColor, color: lang.color }}>
            {lang.name}
          </span>
        ))}
      </section>
      <section className="word-display-container">{currentElements}</section>
      <section className="alphabet-container">{keyboardElements}</section>

      <button className="new-game" onClick={handleNewGameClick}>
        New Game
      </button>
    </main>
  );
}

export default App;

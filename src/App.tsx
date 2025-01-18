import "./App.css";
import Header from "./Header";
import { languages } from "./languages";
import { useState } from "react";

function App() {
  const [currentWord, setCurrentWord] = useState<string>("Hello");

  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  return (
    <main>
      <Header />
      <section>
        <div className="status-bar">
          <h2>You Win</h2>
          <p>Well Done!</p>
        </div>
        <div className="language-chips">
          {languages.map((lang) => (
            <span className="chips" key={lang.name} style={{ backgroundColor: lang.backgroundColor, color: lang.color }}>
              {lang.name}
            </span>
          ))}
        </div>
        <div className="word-display-container">
          {currentWord.split("").map((letter, index) => (
            <span key={index} className="word-display">
              {letter}
            </span>
          ))}
        </div>

        <div className="alphabet-container">
          {alphabets.split("").map((letter, index) => (
            <button key={index} style={{ background: "#FCBA29" }}>
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;

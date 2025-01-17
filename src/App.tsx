import "./App.css";
import Header from "./Header";
import { languages } from "./languages";

function App() {
  return (
    <div>
      <Header />
        <div className="language-chips">
          {languages.map((lang) => (
            <span className="chips" key={lang.name} style={{ backgroundColor: lang.backgroundColor, color: lang.color }}>
              {lang.name}
            </span>
          ))}
      </div>
    </div>
  );
}

export default App;

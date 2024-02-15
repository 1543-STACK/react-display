import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <body>
      <div className="App">
        <div className="container">
          <Weather defaultCity="Durban" />
          <footer>
            This project was coded by
            <a
              href="https://github.com/1543-STACK/react-display"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Anu Govender{" "}
            </a>{" "}
            and is open-sourced
            <a
              href="https://gthub.com/1543-STACK/rect-display/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              on GitHub
            </a>{" "}
            and
            <a
              href="https://shimmering-selkie-6de184.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </body>
  );
}

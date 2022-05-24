import "./Weather.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="London" />
        <footer>
          This project is created by Jinal Patel. Open Source Code:
          <a
            href="https://github.com/patel1078/second-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub Repository
          </a>{" "}
          And
          <a
            href="https://jinalpatel2424.wixsite.com/portfolio
"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

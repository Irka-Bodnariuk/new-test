import "./App.css";
import Card from "./components/Card";

import List from "./components/List";

import sprite from "./images/sprites.svg";

function App() {
  return (
    <main className="container">
      <h1>Explore Our Property Portfolio</h1>
      <ul>
        <li>
          <button>Apartments</button>
        </li>
        <li>
          <button>Villas</button>
        </li>
        <li>
          <button>For Rent</button>
        </li>
      </ul>
      <Card />
      {/* <List /> */}
      <button>All Properties</button>
      <p>Don't Miss Out on Hot Deals! Follow Us on Social Media</p>
      <button>
        <svg width={30} height={30}>
          <use href={`${sprite}#icon-youtube`}></use>
        </svg>
      </button>
      <button>
        <svg width={30} height={30}>
          <use href={`${sprite}#icon-instagram`}></use>
        </svg>
      </button>
      <button>
        <svg width={30} height={30}>
          <use href={`${sprite}#icon-tiktok`}></use>
        </svg>
      </button>
    </main>
  );
}

export default App;

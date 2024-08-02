import { useState } from "react";
import "./styles.css";

const content = [
  ["JavaScript", "Node.js", "Deluge", "React", "Postman"],
  [
    "I specialize in building robust REST APIs",
    "As a lead developer, I've successfully navigated through multi-year projects, honing my skills in project management and team leadership.",
    "I believe in the power of clean code, meticulous validations, and thoughtful flow design.",
  ],
  [
    "I'm a passionate software developer with over 4 years of experience in the field. ",
    "I specialize in building robust REST APIs and integration between third party systems.",
    "Every day is an opportunity to learn something new and improve.",
  ],
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="me.png" alt="React logo" />
        <div>
          <h1>Athanasios Oikonomou</h1>
          <p>
            This if my first Reach Project. Used the React library for rendering
            the UI
          </p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Languages & Technologies
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Expertise
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            About me
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

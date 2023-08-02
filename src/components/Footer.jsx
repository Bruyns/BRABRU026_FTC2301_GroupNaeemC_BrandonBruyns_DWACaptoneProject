import React from "react";

/**
 * Footer component that displays columns with information.
 * @returns {JSX.Element} The JSX element representing the Footer.
 */
export default function Footer() {
    return (
        <footer className="footer">
  <div className="footer--column">
    <h3>Column 1</h3>
    <ul>
      <li>Info 1</li>
      <li>Info 2</li>
      <li>Info 3</li>
    </ul>
  </div>
  <div className="footer--column">
    <h3>Column 2</h3>
    <ul>
      <li>Info 4</li>
      <li>Info 5</li>
      <li>Info 6</li>
    </ul>
  </div>
  <div className="footer--column">
    <h3>Column 3</h3>
    <ul>
      <li>Info 7</li>
      <li>Info 8</li>
      <li>Info 9</li>
    </ul>
  </div>
</footer>

    )
}
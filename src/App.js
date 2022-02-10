import logo from './logo.svg';
import './App.css';

let gameMode = "pairing";
let topCount = 8;
let bottomCount = 8;
export default function App() {
  return (
    <div class="container">
      <div class="top-container">
        {
          new Array(topCount).fill(0).map((item, i) => {
            return <div class="top-item">{i}</div>
          })
        }
      </div>
      <div class="bottom-container">
        {
          new Array(bottomCount).fill(0).map((item, i) => {
            return <div class="bottom-item">
              <div class="turkish">turkish {i}</div>
              <div class="drax">drax {i}</div>
            </div>
          })
        }
      </div>
    </div>
  );
}

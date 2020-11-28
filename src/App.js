import { useState } from 'react';
import { PuffLoader } from 'react-spinners';
import './App.css';

function App() {
  const [selectedMonth, setSelectedMonth] = useState('')
  const [isSelecting, setIsSelecting] = useState(false);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]
  const range = months.length;

  const selectMonthClick = () => {
    setIsSelecting(true)
    setSelectedMonth('')
    setTimeout(() => {
      const randomMonth = getRandomMonth();
      setSelectedMonth(randomMonth);
      setIsSelecting(false);
    }, 1500);
  }

  const getRandomMonth = () => {
    const index = Math.floor(Math.random() * (range - 1))
    return months[index];
  }

  return (
    <div className="App">
      <div className="top-message">
        <p>Pick a month and remember what you're grateful for.</p>
      </div>
      <header className="App-header">
        <div className="selected-month">
          {isSelecting ?
            <PuffLoader color="#d029d2" /> :
            <p>
              {selectedMonth}
            </p>
          }
        </div>
        <button type="button" onClick={selectMonthClick}><span>Choose your month</span></button>
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './app.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <button
          type="button"
          onClick={() => setCount(() => count + 1)}
        >
          count is
          {' '}
          {count}
        </button>
      </div>
    </div>
  );
}

export default App;

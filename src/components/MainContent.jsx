import { useState } from 'react';

export function MainContent() {

  const [count, setCount] = useState(0);
  
  return (
    <>
      <main>
        <div className="card card__background">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>
    </>
  )

}
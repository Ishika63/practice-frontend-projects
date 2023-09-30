import { useState } from 'react';
import './App.css';

function App() {

  let [isDark, setDark] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.  </p>
        <br />
        <div className="change-theme">
          <button onClick={() => {
            if(isDark){
              document.body.setAttribute("data-theme","light-theme");
              setDark(isDark=false);
            }else{
              document.body.setAttribute("data-theme","dark-theme");
              setDark(isDark=true);
            }
          }}>Change Theme</button>
        </div>
      </header>
    </div>
  );
}

export default App;

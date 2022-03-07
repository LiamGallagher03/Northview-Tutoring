import './App.css';
//imports App.css
import React from 'react';
//imports React
import TabManager from './Components/TabManager.js';
//imports TabMananger from the Components folder

function App() {
  return (
    <div>     
      <header>
        <h1 id="title">Northview Tutoring</h1>
      </header>
      <body>
          <TabManager />
          {/*Tab Manager component*/}
          
      </body>
    </div>
  )
}
export default App;
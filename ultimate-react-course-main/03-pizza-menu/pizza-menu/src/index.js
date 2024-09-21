import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello React!</h1>;
}

// React version 18 - how React is rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before version 18
// React.render(<App />);
// and import ReactDOM from 'react-dom/client'; becomes
// import ReactDOM from 'react-dom';

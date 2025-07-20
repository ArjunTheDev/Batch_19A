import { useContext, useState, useEffect } from 'react'
import './App.css'
import NewPage from './components/NewPage'
import { ThemeContext, ThemeContextProvider } from './context/ThemeContext';

function App() {
  const [switchTab, setSwitchTab] = useState(false);
  const {theme} = useContext(ThemeContext);
  const [RemoteWidget, setRemoteWidget] = useState(null);

  useEffect(() => {
    import('mf_app/Widget').then((mod) => {
      setRemoteWidget(() => mod.default);
    });
  }, []);

  const boxStyle = {
    padding: "20px",
    marginTop: "10px",
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    border: "1px solid #ccc",
  };

  return (
    <div style={boxStyle}>
      <h1>Welcome to Great Kirikalan Magic Show..</h1>
        {!switchTab ? <div>
          <h3>Home Page</h3>
          {RemoteWidget ? <RemoteWidget /> : "Loading Remote Widget..."}
        </div>: <NewPage />}
        <button onClick={() => setSwitchTab(!switchTab)}>Switch Tab</button>
    </div>
  )
}

export default App

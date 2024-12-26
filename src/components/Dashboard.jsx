import { useContext } from "react";
import { ThemeContext } from "../App";

const Dashboard = () => {
    const { toggleTheme } = useContext(ThemeContext);
  
    return (
      <div className="dashboard">
        <header className="header">
          <h1>Dashboard</h1>
          <button className="theme-toggler" onClick={toggleTheme}>
            Toggle
          </button>
        </header>
        <main className="main">
          <div className="card">Component Content</div>
        </main>
      </div>
    );
  };
  
export default Dashboard;
import "./App.css";
import MyProfile from "./components/MyProfile";
import Navbar from "./components/Navbar";
import RetirementIncome from "./components/RetirementIncome";
import RetirementStrategy from "./components/RetirementStrategy";

function App() {
  return (
    <div className="App">
      
      <MyProfile />
      <RetirementIncome />
      <RetirementStrategy />
      <Navbar />
    </div>
  );
}

export default App;

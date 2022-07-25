import "./App.css";
import MyProfile from "./components/MyProfile";
import Navbar from "./components/Navbar";
import RetirementIncome from "./components/RetirementIncome";
import RetirementStrategy from "./components/RetirementStrategy";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyProfile />
      <RetirementIncome />
      <RetirementStrategy />
    </div>
  );
}

export default App;

import { useState } from "react";
import ContributionsChart from "./ContributionsChart";
import "./styles.css";

const RetirementIncome = () => {
  return (
    <div className="retirement-income-section">
      <h4>Retirement Income</h4>
      <h2>Starting Year 2056</h2>

      <div className="retirement-stats">
        <div className="retire-stat-card">
          <h1>$300,000</h1>
          <p className="subtle-black">My Goal</p>
        </div>
        <div className="retire-stat-card">
          <h1>59%</h1>
          <p className="subtle-black">Goal Achieved</p>
        </div>
        <div className="retire-stat-card">
          <h1>$300</h1>
          <p className="subtle-black">Est. Monthly Income</p>
        </div>
      </div>

      <h2>Contributions Overtime</h2>
    </div>
  );
};

export default RetirementIncome;

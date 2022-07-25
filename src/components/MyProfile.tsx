import { Button, Divider } from "@mui/material";
import "./styles.css";

const MyProfile = () => {
  return (
    <div className="profile-section">
      <div className="d-flex-row">
        <img
          alt="profile-pic"
          src="https://st.depositphotos.com/2101611/3925/v/950/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
          className="profile-pic"
        />
        <div>
          <h1>Hi Mike,</h1>
          <p className="subtle-black">Welcome back</p>
        </div>
      </div>
      <div className="today-stats mt-3">
        <h2>Today</h2>
        <h1 className="mt-1">$19, 892</h1>
        <span className="subtle-black">Account Balance</span>
        <h3 className="mt-1">$4,000</h3>
        <span className="subtle-black">Year-to-Date Contributions</span>
        <h3 className="mt-1">$1,892</h3>
        <span className="subtle-black">Total Interest</span>
        <Button
          style={{
            backgroundColor: "#4935ff",
            color: "white",
            textTransform: "none",
            fontFamily: "Bree serif",
            marginTop: 16,
            padding: "8px 24px",
          }}
          size="large"
        >
          I want to...
        </Button>
      </div>
      <div className="recent-transactions mt-3">
        <h2 className="mt-1">Recent Transactions</h2>
        <p className="subtle-black mt-2">2020-08-07</p>
        <p>Withdrawal Transfer to Bank-XXX11</p>
        <Divider style={{ margin: "12px 0" }} />
        <p className="subtle-black">2020-07-21</p>
        <p>Withdrawal Transfer to Bank-XXX11</p>
        <Divider style={{ margin: "16px 0 10px 0" }} />
        <p className="subtle-black">2020-07-16</p>
        <p>Withdrawal Transfer to Bank-XXX11</p>
        <Divider style={{ margin: "12px 0" }} />
      </div>
    </div>
  );
};

export default MyProfile;

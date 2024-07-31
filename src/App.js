// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Overview from "./Pages/Overview";
import Users from "./Pages/Users";
import Transactions from "./Pages/Transactions";
import ChargeRules from "./Pages/ChargeRules";
import Withdrawals from "./Pages/Withdrawals";
import Dispute from "./Pages/Dispute";
import Settings from "./Pages/Settings";
import Logout from "./Pages/Logout.js";
import KYC from "./Pages/kyc.js";
import Nav from "./Components/Nav.js";
import Message from "./Pages/Message.js";
import Logs from "./Pages/Logs.js";
import UserDetail from "./Pages/UserDetail.js";

function App() {
  return (
    <div className="bg-gray-100">
      <Sidebar />
      <Nav />
      <div className="flex-grow ml-64 p-6">
        <div className="bg-white p-4 h-[85vh] rounded-lg">
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/users" element={<Users />}
            
            />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/charge-rules" element={<ChargeRules />} />
            <Route path="/withdrawals" element={<Withdrawals />} />
            <Route path="/dispute" element={<Dispute />} />
            <Route path="/message" element={<Message />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/kyc" element={<KYC />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

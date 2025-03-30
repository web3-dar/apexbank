// import React from "react";

// import { Link } from "react-router-dom";
import BottomNav from "../pages/stickyNav";

const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  
  const DepositsPage = () => {
    const currentDate = formatDate(new Date()); // Get today's date

    

  return (
    <>
    
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold mb-4">Deposits</h1>

      {/* Current Deposits Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Account Overview
        </h2>
        {/* Deposit Cards */}
        <div className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="material-icons text-blue-500">check_circle</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">1,712,789.78 USD</p>
                <p className="text-sm text-gray-500">Jan 1 2020 - {currentDate}</p>
              </div>
            </div>
            <button className="text-red-500 font-medium">Withdrawal →</button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="material-icons text-red-500">pie_chart</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">3,648.37 USD</p>
                <p className="text-sm text-gray-500">Jan 1 2025- {currentDate}</p>
              </div>
            </div>
            <button className="text-orange-500 font-medium">Top-up →</button>
          </div>
        </div>
      </div>

      {/* Savings Goals Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Savings goals
        </h2>
        {/* Savings Goal Card */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="material-icons text-red-500">savings</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">40,050.00 USD</p>
                <p className="text-sm text-gray-500">
                   110,200.00 USD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="material-icons text-red-500">savings</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">200,000.37 USD</p>
                <p className="text-sm text-gray-500">
                   110,200.00 USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="flex-1 bg-orange-100 text-orange-500 py-2 px-4 rounded-lg font-medium mr-2">
          + Moneybox
        </button>
        <button className="flex-1 bg-purple-900 text-white py-2 px-4 rounded-lg font-medium">
          + Deposit
        </button>
      </div>
    </div>
   
   <BottomNav/>
    
    </>
  );
};

export default DepositsPage;

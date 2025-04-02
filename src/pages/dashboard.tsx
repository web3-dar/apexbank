import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSyncAlt,
  FaEye,
  FaEyeSlash,
  FaBell,
  FaArrowUp,
} from "react-icons/fa";
import StatComponent from "../components/stats";
import BottomNav from "./stickyNav";
// import BottomNav from "./stickyNav";

const Dashboard = () => {
  const navigate = useNavigate();

  const [visibleTransactions, setVisibleTransactions] = useState(4);
  const [userAmount, setUserAmount] = useState<number>(0);
  const [userImage, setUserImage] = useState<string>("");
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [accountType, setAccountType] = useState<string>("");
  const [subType, setSubType] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userLastName, setLastName] = useState<string>("");
  const [useMidname, setMiddleName] = useState<string>("");
  const [AcctNum, setAcctNumber] = useState<string>("");

  // Fetch logged-in user data from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserAmount(user.amount || 0);
      setUserImage(user.profilePicture || "default-avatar.jpg");
      setUserName(user.firstName || "User");
      setLastName(user.lastName || "User");
      setMiddleName(user.middleName || "User");
      setAccountType(user.accountType || "Nll");
      setSubType(user.accountSubType || "");
      setUserEmail(user.email || "");
      setAcctNumber(user.accountNumber || "");
    }
  }, []);

  const allTransactions = [
    { type: "Credit", amount: userAmount, date: "2025-02-07 09:00:00" },
    // { type: "Credit", amount: 75000.0, date: "2025-01-02 16:00:00" },
    // { type: "Debit", amount: -1200.0, date: "2025-02-07 14:30:00" },
    // { type: "Credit", amount: 2000.0, date: "2025-01-01 10:00:00" },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const loadMoreTransactions = () => {
    setVisibleTransactions((prev) =>
      Math.min(prev + 4, allTransactions.length)
    );
  };

  const maskBalance = (amount: number) => {
    return amount.toLocaleString().replace(/\d/g, "*");
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const toggleBalanceVisibility = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <>
      <div className=" bg-gray-100 flex flex-col">
        <div className="flex justify-between px-4">
          <div className="bg-transparent text-[#000] p-4 flex gap-3 items-center z-10">
            <img
              src={userImage}
              alt="Profile"
              className="h-16 w-16 border-4 border-purple-600 rounded-full"
            />
            <div>
              <h1 className="text-sm font-semibold">
                Hello{" "}
                <span className="uppercase">{userName.split(" ")[0]}!!</span>,
              </h1>
              <span className="text-lg font-semibold">Welcome Back</span>
              <p className="text-[10px]">{userEmail}</p>
              <p className="text-[13px] font-semibold ">
                Account Number: {AcctNum}
              </p>
            </div>
          </div>

          <div className="cursor-pointer flex gap-3 text-2xl text-gray-500 pt-8">
            <div className="hover:text-black" onClick={refreshPage}>
              <FaSyncAlt />
            </div>
            <div className="hover:text-black">
              <FaBell />
            </div>
          </div>
        </div>

        <hr />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 lg:px-6 mt-5">
          {/* Left Section */}
          <div className="lg:w-1/3 space-y-6">
            {/* Total Balance Section */}
            <div className="p-2  mx-4 ">
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-blue-800 font-medium uppercase">
                    available Balance
                  </h2>
                  <button onClick={toggleBalanceVisibility} className="p-1">
                    {showBalance ? (
                      <FaEyeSlash className="text-[#fff] text-xl" />
                    ) : (
                      <FaEye className="text-[#fff] text-xl" />
                    )}
                  </button>
                </div>

                <h1 className="text-3xl font-bold mt-1 text-blue-800">
                  {showBalance
                    ? `€${userAmount.toLocaleString()}.00`
                    : `€${maskBalance(userAmount)}`}
                </h1>
              </div>

              <div>
                <div className="flex justify-between">
                  <p className="text-blue-800 font-light">Income</p>
                  <p className="flex text-green-500">
                    0%
                    <FaArrowUp className="mt-1" />
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-blue-800 font-light">Debits</p>
                  <p className="flex text-red-500">
                    0%
                    <FaArrowUp className="mt-1" />
                  </p>
                </div>
              </div>

              {/* Actions Section */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 p-2">
                <button
                  className="flex items-center text-white p-2 bg-blue-800 rounded-lg shadow"
                  onClick={() => navigate("/send")}
                >
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <span className="material-icons">send</span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">TRANSFER</p>
                </button>

                {/* <button
                  className="flex items-center text-pink-600 p-2 bg-pink-50 rounded-lg shadow"
                  onClick={() => navigate("/deposit")}
                >
                  <div className="bg-red-500 p-2 rounded-lg">
                    <span className="material-icons text-white">add</span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">Add Money</p>
                </button> */}

                <button
                  className="flex items-center text-white p-2 bg-red-500 rounded-lg shadow"
                  onClick={() => navigate("/loan")}
                >
                  <div className="bg-red-500 p-2 rounded-lg">
                    <span className="material-icons">
                      account_balance_wallet
                    </span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">PAY BILLS</p>
                </button>

                {/* <button
                  className="flex items-center text-green-600 p-2 bg-green-50 rounded-lg shadow"
                  onClick={() => navigate("/overview")}
                >
                  <div className="bg-green-100 p-2 rounded-lg">
                    <span className="material-icons">help</span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">Need Help?</p>
                </button> */}
              </div>
            </div>

            <hr />
          </div>

          <div className="flex justify-evenly">
            <div className="bg-gray-100 h-[80px]  text-blue-800  px-4 py-2 rounded-lg mt-2 w-[200px]   text-center  pointer">
              <span className="text-[10px]">Account type</span> <br />
              <span className="uppercase font-semibold">{accountType}</span>
            </div>

            <div className="bg-gray-100 h-[80px]  text-blue-800  px-4 py-2 rounded-lg mt-2 w-[200px]   text-center  pointer">
              <span className="text-[10px]">Account type</span> <br />
              <span className="uppercase font-semibold">{subType}</span>
            </div>
          </div>

          <div className="bg-gray-100 mt-7 m-auto  text-[#000] shadow-lg px-4 py-2 rounded-lg mt-2 w-[200px]   text-center  pointer">
            <span className="text-[10px]">Limits</span> <br />
            <span className="uppercase font-semibold">€500,000</span>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3 mt-6 lg:mt-0">
            <h2 className="text-gray-700 text-2xl font-medium mb-4 px-4 lg:px-0">
              Recent Transactions
            </h2>
            <div className="space-y-4 px-4 lg:px-0">
              {allTransactions
                .slice(0, visibleTransactions)
                .map((transaction, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg p-4 rounded-lg"
                  >
                    <div className="flex justify-between">
                      <p className="font-bold text-xl">{transaction.type}</p>
                      <p
                        className={`font-bold ${
                          transaction.amount < 0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {transaction.amount < 0
                          ? `-$${Math.abs(
                              transaction.amount
                            ).toLocaleString()}.00`
                          : `+€${transaction.amount.toLocaleString()}.00`}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                ))}
              <button
                onClick={loadMoreTransactions}
                className="mt-4 bg-purple-600 w-full text-white px-4 py-2 rounded-lg"
                disabled={visibleTransactions >= allTransactions.length}
              >
                {visibleTransactions >= allTransactions.length
                  ? "No More Transactions"
                  : "Load More"}
              </button>
            </div>
          </div>
        </div>
      </div>
<div className="flex justify-between p-8 flex-wrap">
  <div >
        {" "}
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          {getGreeting()} {userName + " " + useMidname + " " + userLastName}!
        </h2>{" "}
        <p className="text-center">At a glance summary of your account</p>
      </div>

      <div> <div className="flex gap-2 p-2">
                <button
                  className="flex  w-[200px] items-center text-white p-2 bg-blue-800 rounded-lg shadow"
                  onClick={() => navigate("/add")}
                >
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <span className="material-icons">send</span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">Deposit</p>
                </button>

              

                <button
                  className="flex  w-[200px] items-center text-white p-2 bg-red-500 rounded-lg shadow"
                  onClick={() => navigate("/send")}
                >
                  <div className="bg-red-500 p-2 rounded-lg">
                    <span className="material-icons">
                      account_balance_wallet
                    </span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">Transfer Fund</p>
                </button>

                
              </div> </div>
</div>
      

<StatComponent />
<BottomNav/>
    </>
  );
};

export default Dashboard;

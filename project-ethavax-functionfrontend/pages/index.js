import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";


export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async () => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }

    
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  const getBalance = async () => {
    if (atm) {
      const balanceInWei = await atm.getBalance();
      const balanceInEth = ethers.utils.formatEther(balanceInWei);
      setBalance(balanceInEth);
    }
  };

  const deposit = async (amount) => {
    if (atm) {
      let tx = await atm.deposit(amount);
      await tx.wait();
      getBalance();
    }
  };

  const handleCustomDeposit = () => {
    const customAmount = prompt("Enter the amount of Ether to deposit:");
    if (customAmount !== null && customAmount !== "") {
      const parsedAmount = ethers.utils.parseEther(customAmount);
      deposit(parsedAmount);
    }
  };
  
  const handleCustomWithdraw = () => {
    const customAmount = prompt("Enter the amount of Ether to withdraw:");
    if (customAmount !== null && customAmount !== "") {
      const parsedAmount = parseFloat(customAmount);
      if (!isNaN(parsedAmount)) {
        withdraw(parsedAmount);
      } else {
        alert("Invalid input. Please enter a valid number.");
      }
    }
  };

  const withdraw = async (amount) => {
    if (atm) {
      // Convert the withdrawal amount in Ether to Wei
      const amountInWei = ethers.utils.parseEther(amount.toString()); // Convert to string

      // Call the contract's withdraw function with the amount in Wei
      let tx = await atm.withdraw(amountInWei);
      await tx.wait();
      getBalance();
    }
  };

     const logout = () => {
       if (ethWallet && ethWallet.selectedAddress) {
         ethWallet
           .request({
             method: "wallet_requestPermissions",
             params: [{ eth_accounts: {} }],
           })
           .then(() => {
             setAccount(undefined);
             setATM(undefined);
             setBalance(undefined);
           });
       }
     };
  
  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }
    return (
      <main className="container">
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance}</p>
        <div className="yellow-background">
          <div className="white-card deposit-card">
            <h2>Deposit Ether</h2>
            <button onClick={() => deposit(1)}>Deposit 1 ETH</button>
            <button onClick={() => deposit(2)}>Deposit 2 ETH</button>
            <button onClick={() => deposit(3)}>Deposit 3 ETH</button>
            <button onClick={() => deposit(4)}>Deposit 4 ETH</button>
            <button onClick={handleCustomDeposit}>Custom Deposit</button>
          </div>
        </div>
        <div className="yellow-background">
          <div className="white-card withdraw-card">
            <h2>Withdraw Ether</h2>
            <button onClick={() => withdraw(1)}>Withdraw 1 ETH</button>
            <button onClick={() => withdraw(2)}>Withdraw 2 ETH</button>
            <button onClick={() => withdraw(3)}>Withdraw 3 ETH</button>
            <button onClick={() => withdraw(4)}>Withdraw 4 ETH</button>
            <button onClick={handleCustomWithdraw}>Custom Withdraw</button>
          </div>
        </div>
        <button onClick={logout}>Add multiple account</button>
        <style jsx>
          {`
            .container {
              background-image: url("images/bg-course-overview.svg");
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .yellow-background {
              background-color: #f9c72a;
              width: 45%;
              margin: 10px;
              padding: 20px;
            }
            .white-card {
              background-color: white;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }
            .deposit-card {
              margin-top: 10px;
            }
          `}
        </style>
      </main>
    );
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header>
        <h1>Welcome to the Metacrafters ATM!</h1>
      </header>
      {initUser()}
      <style jsx>
        {`

          .container {
            text-align: center;
          }
        `}
      </style>
    </main>
  );
}

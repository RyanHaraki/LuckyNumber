import React, { useState, useEffect } from "react";
import Web3 from "web3";
import LuckyNumber from "./contracts/LuckyNumber.json";
import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import { ABI, contractAddress } from "./ContractInfo";

const App = () => {
  // setNum
  const [number, setNumber] = useState(null);
  // GetNum
  const [wallet, setWallet] = useState("");
  const [searchWalletNumber, setSearchWalletNumber] = useState(null);
  // Current Account
  const [account, setAccount] = useState("");

  useEffect(() => {
    loadBlockChainData();
  }, []);

  const loadBlockChainData = async () => {
    const web3 = new Web3(Web3.currentProvider || "ws://localhost:8545");
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = LuckyNumber.networks[networkId];
    const accounts = await web3.eth.getAccounts();
    window.contract = await loadContract();
    setAccount(accounts[0]);
  };

  const loadContract = async () => {
    const web3 = new Web3(Web3.currentProvider || "ws://localhost:8545");
    return await new web3.eth.Contract(ABI, contractAddress);
  };

  const getNum = async (wallet) => {
    const num = await window.contract.methods.getNum(wallet).call();
    setSearchWalletNumber(num);
    console.log(searchWalletNumber);
  };

  const setWalletNum = async (wallet, number) => {
    const newNum = await window.contract.methods.setNum(number).call();
    setNumber(newNum);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <Container>
            <About />
          </Container>
        </Route>
        <Route path="/">
          <Body
            searchWalletNumber={searchWalletNumber}
            account={account}
            setWalletNum={setWalletNum}
            getNum={getNum}
            setNumber={setNumber}
            setWallet={setWallet}
            wallet={wallet}
            number={number}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

const Container = styled.div`
  padding: 0 20px;
`;

import React from "react";
import styled from "styled-components";

const Body = ({
  setNumber,
  setWallet,
  account,
  getNum,
  wallet,
  number,
  setWalletNum,
  searchWalletNumber,
}) => {
  // Deal with setting a number for user
  const handleNumberChange = (e) => {
    // handle change here
    setNumber(e.target.value);
  };

  const handleNumberClick = (e) => {
    e.preventDefault();
    //handle click here
    setWalletNum(account, number);
  };

  // deal with getting a wallets number
  const handleWalletChange = (e) => {
    setWallet(e.target.value);
  };

  const handleWalletClick = (e) => {
    e.preventDefault();
    getNum(wallet);
  };

  return (
    <Container>
      <h2 className="wallet-address">
        Your Wallet Address: <br />
        <span> {account}</span>
      </h2>
      <form>
        <input
          required
          type="number"
          placeholder="Pick a number from 1-10,000"
          onChange={handleNumberChange}
        />
        <button onClick={handleNumberClick} className="btn-black">
          Choose Number
        </button>
        {number}
      </form>
      <form className="getNum-container">
        <h2>Check a wallet's number</h2>
        <input
          required
          type="text"
          placeholder="Wallet Address"
          onChange={handleWalletChange}
        />
      </form>
      <button onClick={handleWalletClick} className="btn-black">
        Get Number
      </button>
      {"Number: " + searchWalletNumber}
    </Container>
  );
};

export default Body;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .wallet-address {
    text-align: center;
  }

  span {
    color: #00aeff;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    input {
      margin-bottom: 20px;
      border: none;
      background: #CAD7DD;
      border-radius: 3px;
      width: 20rem;
      padding: 0.5em;
  }
  }

  .getNum-container {
    margin-top: 20px;
  }

  @media only screen and (max-width: 768px) {
    span {
      font-size: 1.1rem;
    }

    @media only screen and (max-width: 420px) {
        span {
          font-size: 0.8rem;
        }
  }
`;

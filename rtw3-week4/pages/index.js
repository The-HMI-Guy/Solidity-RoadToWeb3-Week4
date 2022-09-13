import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [wallet, setWalletAddress] = useState("")
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div>
        <input onChange={(e =>{setWalletAddress(e.target.value)})} value={wallet}type={"text"} placeholder="Add Your Wallet Address"></input>
        <input type={"text"} placeholder="Add The Collection Address"></input>
        <label>
          <input type={"checkbox"}></input>
        </label>
        <button>Let's go</button>
      </div>
    </div>
  );
};

export default Home;

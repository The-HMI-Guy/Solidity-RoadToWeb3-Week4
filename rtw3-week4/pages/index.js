import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetchying nfts");
    if (!collection.length) {
      // Setup request options:
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      // Replace with your Alchemy API key:
      const apiKey = "demo";
      const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTs/`;
      // Replace with the wallet address you want to query:
      const ownerAddr = "0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c";
      const fetchURL = `${baseURL}?owner=${ownerAddr}`;
      nfts = fetchy();
    } else {
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div>
        <input
          onChange={(e) => {
            setWalletAddress(e.target.value);
          }}
          value={wallet}
          type={"text"}
          placeholder="Add Your Wallet Address"
        ></input>
        <input
          onChange={(e) => {
            setCollectionAddress(e.target.value);
          }}
          value={collection}
          type={"text"}
          placeholder="Add The Collection Address"
        ></input>
        <label>
          <input type={"checkbox"}></input>
        </label>
        <button>
          onClick=
          {() => {
            fetchNFTs;
          }}
          Let's go
        </button>
      </div>
    </div>
  );
};

export default Home;

import Head from "next/head";
import Image from "next/image";
import { NFTCard } from "components/nftCard";
import { useState } from "react";

const Home = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection] = useState(false);

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetching nfts");
    const apiKey = "6xkPfdAvIZ-1xZt3YSLG4OS6iEIAU9Ls";
    const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTs/`;
    if (!collection.length) {
      // Setup request options:
      var requestOptions = {
        method: "GET",
      };

      const fetchURL = `${baseURL}?owner=${wallet}`;

      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    } else {
      console.log("Fetching nfts for collection owned by address");
      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    }
    if (nfts) {
      console.log("nfts:", nfts);
      setNFTs(nfts.ownedNfts);
    }
  };
  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      var requestOptions = {
        method: "GET",
      };
      const apiKey = "6xkPfdAvIZ-1xZt3YSLG4OS6iEIAU9Ls";
      const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      const nfts = await fetch(fetchURL, requestOptions).then((data) =>
        data.json()
      );
      if (nfts) {
        console.log("NFTs in collection:", nfts);
        setNFTs(nfts.nfts);
      }
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
          <input
            onChange={(e) => setFetchForCollection(e.target.checked)}
            type={"checkbox"}
          ></input>
          Fetch for collection
        </label>
        <button
          onClick={() => {
            if (fetchForCollection) {
              fetchNFTsForCollection();
            } else fetchNFTs();
          }}
        >
          Let's go
        </button>
      </div>
      <div>
        {NFTs.length &&
          NFTs.map((nft) => {
            return <NFTCard nft={nft}></NFTCard>;
          })}
      </div>
    </div>
  );
};

export default Home;

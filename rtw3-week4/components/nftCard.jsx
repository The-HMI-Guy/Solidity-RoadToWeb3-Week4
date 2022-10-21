export const NFTCard = ({ nft }) => {
  return (
    <div>
      <div>
        <img src={nft.media[0].gateway} alt="nft-image" />
      </div>
      <div>
        <h2>{nft.title}</h2>
        <p>{nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
        <p>{`${nft.contract.address.substr(
          0,
          6
        )}...${nft.contract.address.substr(
          nft.contract.address.length - 4
        )}`}</p>
      </div>
      <div>
        <p>{nft.description?.substr(0, 150)}</p>
      </div>
      <div>
        <a
          target={"_blank"}
          href={`https://etherscan.io/address/${nft.contract.address}`}
        >
          View On Etherscan
        </a>
      </div>
    </div>
  );
};

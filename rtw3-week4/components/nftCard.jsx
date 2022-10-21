export const NFTCard = ({ nft }) => {
  return (
    <div>
      <div>
        <img src={nft.media[0].gateway} alt="nft-image" />
      </div>
      <div>
        <h2>{nft.title}</h2>
        <p>{nft.tokenId}</p>
      </div>
    </div>
  );
};

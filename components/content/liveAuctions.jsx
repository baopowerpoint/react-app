import React from "react";
import AuctionCard from "../cards/auctionCard";

const LiveAuctions = (props) => {
  return <AuctionCard cardUrl={props.cardUrl} cardTitle={props.cardTitle} />;
};

export default LiveAuctions;

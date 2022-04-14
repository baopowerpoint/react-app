import React from "react";

const AuctionCard = (props) => {
  console.log(props.cardUrl);
  return (
    <div className="max-w-[17rem] py-2 px-1 mt-3 flex flex-wrap-reverse  bg-bid-2 text-tid-2 rounded-lg">
      <div className="block mx-auto">
        <img
          src={require("./png/img3.png")}
          className="rounded-lg w-60 card-img"
          alt="nft"
        />
        <div className="flex mt-4 justify-between items-center">
          <p className="text-tid align-middle text-[12px] ">
            {props.cardTitle}
          </p>
          <button className="bg-primary text-tid text-[12px] px-3 py-0 rounded-full">
            bcs
          </button>
        </div>
        <div className="person-identify justify-between mb-4 flex mt-5">
          <div className="flex">
            <img src={require("./png/img.png")} className="w-12  rounded-xl" />
            <div className="ml-2">
              <p className="font-300 text-tid-3">creator</p>
              <p className="font-700 text-tid">Tran bao</p>
            </div>
          </div>
          <div className="ml-2">
            <p className="font-300 text-right text-tid-3">Current Bid</p>
            <p className="font-700 text-right text-tid">3 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;

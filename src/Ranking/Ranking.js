import React, { Component } from "react";
import MasterRanking from "./MasterRanking.js";
import NormalRanking from "./NormalRanking.js";

const Ranking = () => {

    return(
      <div>
        <h1>Master</h1>
        <MasterRanking></MasterRanking>
        <h1>Normal</h1>
        <NormalRanking></NormalRanking>
      </div>
      
    );
}

export default Ranking;
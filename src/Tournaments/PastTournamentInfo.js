import React, { Component } from "react";
import { useState } from "react";

import CarouselJ from "../Utils/CarouselJ.js";
import NormalRanking from "../Ranking/NormalRanking.js";

const PastTournamentsInfo = () => {
  const lipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  /*Este sistema necesitará ser pasado a DB*/
  const [info, setInfo] = useState([
    { title: "Winter Cup 2020", body: lipsum },
    { title: "Summer Cup 2020", body: lipsum },
    { title: "Spring Cup 2020", body: lipsum },
    { title: "TIE 2020", body: lipsum },
  ]);
  return (
    <div>
      <br></br>
      <h1>{info[0].title}</h1>
      <p>{info[0].body}</p>
      <br></br>
      <h2>Resultados del torneo</h2>
      <NormalRanking />
      <br></br>
      <h2>Fotos del torneo</h2>
      <CarouselJ />
    </div>
  );
};
export default PastTournamentsInfo;

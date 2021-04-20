import MasterRanking from "./MasterRanking";
import NormalRanking from "./NormalRanking";

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
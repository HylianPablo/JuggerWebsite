
import CarouseShopKits from "./CarouseShopKits";
import JuggerKits from "./JuggerKits";
import CarouseWeapons from "./CarouseWeapons";
import JuggerWeapons from "./JuggerWeapons";
import JuggerMerchandising from "./JuggerMerchandising";
import CarouseMerchandising from "./CarouseMerchandising";
import Seeker from "./Seeker.js";
import {useParams} from "react-router-dom";

const KitsShop = () => {

  function CarouseSelection(props){
    if (props.id==1){
      return <CarouseWeapons/>;
    }
    if (props.id==2){
      return <CarouseShopKits/>;
    }
    if(props.id==3){
      return <CarouseMerchandising/>;
    }

  }
  function Selection(props){
    if(props.id==1){
      return <JuggerWeapons/>;
    }
    
    if (props.id==2){
      return <JuggerKits/>;
    }
    if (props.id==3){
      return <JuggerMerchandising/>;
    }
  }
  const {id}=useParams();

  return (
    <div className="main">
      <Seeker></Seeker>
      {//<h1>El id es:{id}</h1>//
}
      <CarouseSelection id={id}/>
      <br></br>
      <Selection id={id}/>
      
    </div>
    
  );
};

export default KitsShop;

import CarouseShopKits from "./CarouseShopKits";
import JuggerKits from "./JuggerKits";
import Seeker from "./Seeker.js";


const KitsShop = () => {
  return (
    <div className="main">
      <Seeker></Seeker>
      <CarouseShopKits/>
      <br></br>
      <JuggerKits/>
    </div>
    
  );
};

export default KitsShop;
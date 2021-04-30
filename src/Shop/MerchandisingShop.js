import JuggerMerchandising from "./JuggerMerchandising";
import CarouseMerchandising from "./CarouseMerchandising";
import Seeker from "./Seeker";


const MerchandisingShop = () => {
    return (
        <div className="main">
          <Seeker></Seeker>
          <CarouseMerchandising/>
          <br></br>
          <JuggerMerchandising/>
        </div>
        
      );
    };
export default MerchandisingShop;
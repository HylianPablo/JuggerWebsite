import CarouseWeapons from "./CarouseWeapons";
import JuggerWeapons from "./JuggerWeapons";
import Seeker from "./Seeker";


const WeaponShop = () => {
  return (
    <div className="main">
      
        <Seeker></Seeker>
      <CarouseWeapons/>
      <br></br>
      <JuggerWeapons/>
    </div>
    
  );
};

export default WeaponShop;
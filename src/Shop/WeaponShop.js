import CarouseWeapons from "./CarouseWeapons";
import JuggerKits from "./JuggerKits";
import JuggerWeapons from "./JuggerWeapons";


const WeaponShop = () => {
  return (
    <div className="main">
        <p> Aqui ira un buscador (aun no decidido) a la derecha que es lo tipico para buscar un tipo de arma vendedor etc</p>
      <CarouseWeapons/>
      <br></br>
      <JuggerWeapons/>
    </div>
    
  );
};

export default WeaponShop;
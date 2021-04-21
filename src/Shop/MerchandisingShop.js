import JuggerMerchandising from "./JuggerMerchandising";
import CarouseMerchandising from "./CarouseMerchandising";


const MerchandisingShop = () => {
    return (
        <div className="main">
            <p> Aqui ira un buscador (aun no decidido) a la derecha que es lo tipico para buscar un tipo de arma vendedor etc</p>
          <CarouseMerchandising/>
          <br></br>
          <JuggerMerchandising/>
        </div>
        
      );
    };
export default MerchandisingShop;
import Image1 from "./assets/qtip1.jpg";
import Image2 from "./assets/qtip2.jpg";
import Image3 from "./assets/qtip3.jpg";
import Image4 from "./assets/qtip4.jpg";
import Image5 from "./assets/stab1.png";


const JuggerWeapons = () => {
    return ( 
        <div><h1 style={{color:"black", lineHeight: "100px"}}>Q-Tips</h1>
            <div className="fila">
                <div className="columna">
                    <img src={Image1}></img>
                </div>
                <div className="columna">
                    <img src={Image2}></img>
                </div>
                <div className="columna">
                    <img src={Image3}></img>
                </div>
                <div className="columna">
                    <img src={Image4}></img>
                </div>
            </div>
            <h1 style={{color:"black", lineHeight: "100px"}}>Stabs</h1>
            <div className="fila">
                <div className="columna">
                    <img src={Image5}></img>
                </div>
                <div className="columna">
                    <img src={Image5}></img>
                </div>
                <div className="columna">
                    <img src={Image5}></img>
                </div>
                <div className="columna">
                    <img src={Image5}></img>
                </div>
            </div>
            </div>
    
     );
}
 
export default JuggerWeapons;
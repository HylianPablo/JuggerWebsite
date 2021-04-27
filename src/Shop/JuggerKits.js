import Image1 from "/src/assets/BushidoShirt.jpg";
import Image2 from "/src/assets/LOTShirt.jpg";
import Image3 from "/src/assets/GuldenShirt.jpg";
import Image4 from "/src/assets/SkollShirt.jpg";



const JuggerKits = () => {
    return (  
        <div><h1 style={{color:"black", lineHeight: "100px"}}>Camisetas</h1>
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
        <h1 style={{color:"black", lineHeight: "100px"}}>Pantalones (Ejemplo no tengo pantalones asi que son las mismas)</h1>
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
        </div>

    );
}
 
export default JuggerKits;
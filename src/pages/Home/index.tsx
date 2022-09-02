import Navbar from "components/Navbar";
import carHome from 'assets/images/carHome.png';
import './styles.css';
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home-container">

            <div className="home-card">
                <div className="img-card">
                  <img src={carHome} alt="imagem de carro" />
                </div>

                <div className="card-text">
                    <h2>O carro perfeito para você</h2>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                </div>
            </div>

            <div className="button-card">
                <Link to="/cars"><button><h3>Ver catálogo</h3></button></Link>
                <h2>Comece agora a navegar</h2>

            </div>
        </div>
    );
}

export default Home;
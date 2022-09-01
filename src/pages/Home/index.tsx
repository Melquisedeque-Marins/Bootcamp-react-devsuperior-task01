import Navbar from "components/Navbar";
import carHome from 'assets/images/carHome.png';
import './styles.css';

const Home = () => {

    return (
        <>
        <Navbar />
        <div className="home-container">

            <div className="home-card">
                <div className="img-card">
                  <img src={carHome} alt="imagem de carro" />
                </div>

                <div className="card-text">
                    <h3>O carro perfeito para você</h3>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                </div>
            </div>

            <div className="button-card">
                <button>Ver catálogo</button>
                <h3>Comece agora a navegar</h3>

            </div>
        </div>
        
        </>
    );
}

export default Home;
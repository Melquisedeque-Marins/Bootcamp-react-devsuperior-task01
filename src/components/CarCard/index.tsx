import './styles.css';
import carCard from 'assets/images/carCard.png';
const CarCard = () => {

    return (
        <div className="card-container">
            <div className="card-img">
                <img src={carCard} alt="imagem carro" />
                <div className="title">
                    <h3>Audi Supra TT</h3>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="button">
                    <button>comprar</button>
                </div>
            </div>
        </div>

    );
}

export default CarCard;
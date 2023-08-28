import keys from "../../media/vdr/keys.png";
import helmet from "../../media/vdr/helmet.png";
import fire from "../../media/vdr/fire.png";
import chain from "../../media/vdr/chain.png";

function VdrSecondBody() {
    return (
        <div className="cards-stripe">
            <div className='card-group'>
                <div className="card-about">
                    <div className="card-img">
                        <img src={helmet} alt="helmet"/>
                    </div>
                    <div className="card-title">
                        Каждый день как праздник
                    </div>
                    <div className="card-text">
                        Идеальное место для праздника
                    </div>
                </div>
                <div className="card-about">
                    <div className="card-img">
                        <img src={chain} alt="chain"/>
                    </div>
                    <div className="card-title">
                        Командная игра
                    </div>
                    <div className="card-text">
                        Игра проводится от 8 человек
                    </div>
                </div>
            </div>
            <div className='card-group'>
                <div className="card-about">
                    <div className="card-img">
                        <img src={fire} alt="fire"/>
                    </div>
                    <div className="card-title">
                        Веселая игра
                    </div>
                    <div className="card-text">
                        Вы получите море позитивных эмоции
                    </div>
                </div>
                <div className="card-about">
                    <div className="card-img">
                        <img src={keys} alt="keys"/>
                    </div>
                    <div className="card-title">
                        Для всех возрастов
                    </div>
                    <div className="card-text">
                        Есть игры для детей от 6 лет и для взрослых
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VdrSecondBody
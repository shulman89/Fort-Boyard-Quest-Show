import "../../css/bodyFifth.scss"
import land from "../../media/landing/land_FB.png"

function BodyFifth() {
    return (
        <div style={{display:"flex"}}>
            <div className="BodyFifth-container">
                <div className="BodyFifth-left">
                    <h2>Вас ждут невероятные испытания</h2>
                    <h3>Увлекательная история и шквал спецэффектов</h3>
                    <p>
                        Интригующая музыка, уникальные декорации, легенда про килограммы золота — и это только самое
                        начало
                    </p>
                    <h3>Равнодушных не останется</h3>
                    <p>Ведущие следят, чтобы все игроки принимали участие в шоу и оставались довольными</p>
                    <h3>У нас нет ограничений, будет интересно всем!</h3>
                    <p>Подбираем уровень сложности именно для вашей команды. Интересно играть как детям, так и
                        взрослым</p>
                </div>
                <div className="BodyFifth-midle">
                    <img src={land} alt="land"/>
                </div>
                <div className="BodyFifth-right">
                    <h3>Борьба за золото Форт Боярд</h3>
                    <p>10 кг золотых монет,
                    которые нужно успеть собрать за минуту. Победит только сильнейшая команда!</p>
                    <h3>От 10 заданий в замке с лабиринтами</h3>
                    <p>Здесь игроков ждут задания на ловкость, логику, скорость и
                    множество других испытаний вместе с тайнами Форта</p>
                    <h3>Память на всю жизнь</h3>
                    <p>После программы есть возможность получить тематические сувениры: магниты, сертификаты, медали,
                    футболки</p>
                    <h3>Безопасная территория</h3>
                    <p>Оборудование проходит контроль качества в нашем
                    цеху. Игровое поле ограждено по международным стандартам, обработано от клещей и других
                    вредоносных насекомых</p>
                </div>
            </div>
        </div>
    )
}

export default BodyFifth
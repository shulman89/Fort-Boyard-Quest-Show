import '../../css/bodyFourth.scss'
import React, {useState} from "react";
import balloongirl from '../../media/landing/ballon_girl.png'
import play from "../../media/landing/play-video2.png";
import YoutubeApi from "../YoutubeApi";

function BodyFourth() {
    const [youtubeActive, setYoutubeActive] = useState(false)
     const[videoPlay,setVideoPlay]=useState(false)
    return (
        <div className="bodyFourth-container">
            <div className="bodyFourth-banner__left">
                <div className="bodyFourth-title">
                    <p>Мы обеспечим
                        высокий уровень торжества и
                        <span> позитивные эмоции</span> каждому
                    </p>
                </div>
                <div className="list">
                    <p>Вас ждут:</p>
                    <ul>
                        <li>- самые интересные сценарии;</li>
                        <li>- профессиональный ведущий;</li>
                        <li>- элементы контактного зоопарка;</li>
                        <li>- фото/видеосъемка;</li>
                        <li>- костюмы для каждого игрока;</li>
                        <li>- украшение зоны отдыха;</li>
                        <li>- увлекательная история и шквал спецэффектов;</li>
                        <li>- сюрпризы для именинника и многое другое!</li>
                    </ul>
                </div>
                <div className="body-fourth-subtitle">
                    <p>При подготовке праздничной программы учитываются интересы ребенка и гостей,
                        индивидуальные и возрастные особенности, увлечения, количество приглашенных.
                        А красочный декор, воздушные шары и баннеры создадут атмосферу торжества.</p>
                </div>
            </div>
            <div className="bodyFourth-banner__right">
                <img className="girlpic" src={balloongirl} alt="ballongirl"/>
                <div className="play" onClick={() => {setYoutubeActive(true);setVideoPlay(true)}}>
                    <img className="playpic" src={play} alt="play"/>
                </div>
                <YoutubeApi
                    youtubeActive={youtubeActive}
                    setYoutubeActive={setYoutubeActive}
                    videoPlay={videoPlay}
                    setVideoPlay={setVideoPlay}
                />
            </div>
        </div>
    )
}

export default BodyFourth
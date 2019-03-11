import React, { Component } from 'react';
import _ from "lodash";
import './Home.css';
import avatar from './assets/avatar.png';
import InfoBlock from "../InfoBlock/InfoBlock";
import Contacts from "../Contacts/Contacts";


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            information: [
                {
                    id: 1,
                    title: '',
                    text: ['Профессия изначально должна быть актом любви. И никак не браком по расчету. И пока не поздно, не забывайте о том, что дело всей жизни — это не дело, а жизнь.']
                },
                {
                    id: 2,
                    title: 'Немного о скилах',
                    text: ['Верстаю адаптивно, семантично, кроссбраузерно. Знаю HTML5, CSS3, Jquery, JavaScript(junior), Pug, Gulp, а так же Adobe Photoshop и Figma на уровне нарезки макетов.', 'Работаю по методологии БЭМ. Из препроцессоров использую Sass. По возможностям препроцессора использую переменные, вложенность, миксины.', 'Использую гит']
                },
                {
                    id: 3,
                    title: 'Где я набираю опыт',
                    text: [ 'В настоящее время работаю младшим фронтенд разработчиком в агенстве Traffic Isobar Digital Agency.']
                }
            ]
        };
    }



    render() {
        let infoBlocks = [];
        let stateInfo = this.state.information;

        _.each(stateInfo, (item, index) => {
            infoBlocks.push(
                <InfoBlock
                    key={item.id}
                    title={item.title}
                    text={item.text}
                />
            );
        });


        return (
            <div className="Home">
                <div className="title_box">
                    <img src={avatar} alt="avatar"/>
                    <h1 className="home_title">Рафаэль Гулиев</h1>
                </div>
                <div className="info_box">
                    <h2 className="info_box_title">
                        <span className="span_1">J</span>
                        <span className="span_2">u</span>
                        <span className="span_3">n</span>
                        <span className="span_4">i</span>
                        <span className="span_5">o</span>
                        <span className="span_6">r</span> Frontend разработчик</h2>
                </div>
                <div className="about">
                    {infoBlocks}
                </div>
                <div className="works">
                    <h2 className="works_title">Примеры работ</h2>
                    <a className="works_link" rel="noopener noreferrer" target="_blank" href="https://likeavenus.github.io/Leto/">Пример работы с анимациями</a>
                    <a className="works_link" rel="noopener noreferrer" target="_blank" href="https://likeavenus.github.io/Building/">Страница строительной фирмы (пример, без адаптивности)</a>
                    <a className="works_link" rel="noopener noreferrer" target="_blank" href="https://likeavenus.github.io/first-p/">Школа сноуборда и горных лыж</a>
                </div>
                <Contacts/>
            </div>
        );
    }
}

export default Home;
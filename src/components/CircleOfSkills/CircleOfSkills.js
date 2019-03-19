import React, {Component} from "react";
import "./CircleOfSkills.css";
import htmlLogo from "./assets/HTML_Logo.png";
import cssLogo from "./assets/css3.svg";
import jsLogo from "./assets/js.svg";
import reactLogo from "./assets/react.svg";
import _ from "lodash";

class CircleOfSkills extends Component {
    constructor(props) {
        super(props);
        this.htmlRef = React.createRef();
        this.cssRef = React.createRef();
        this.jsRef = React.createRef();
        this.reactRef = React.createRef();

        this.state = {
            circles: [
                {
                    id: 1,
                    ref: this.htmlRef,
                    logo: htmlLogo,
                    percent: 'percent1',
                    logoAlt: 'html-logo',
                    skill: 79
                },
                {
                    id: 2,
                    ref: this.cssRef,
                    logo: cssLogo,
                    percent: 'percent2',
                    logoAlt: 'css-logo',
                    skill: 75
                },
                {
                    id: 3,
                    ref: this.jsRef,
                    logo: jsLogo,
                    percent: 'percent3',
                    logoAlt: 'js-logo',
                    skill: 28
                },
                {
                    id: 4,
                    ref: this.reactRef,
                    logo: reactLogo,
                    percent: 'percent4',
                    logoImg: 'react-logo',
                    skill: 15
                },
            ]
        }
    }

    drawCircle = (context, level, currentCanvas, percent) => {
        let canvas = currentCanvas;
        context = currentCanvas.getContext('2d');
        let levelOfKnowledge = document.querySelector(percent);
        let pi = Math.PI;
        let coefficient = pi * 2 / 100;
        let min = 0; //точка старта анимации
        let maxPercent = level; //процент знаний
        let circleStyle = 100;


        let draw = () => {

            if (canvas) {
                context.clearRect(0, 0, canvas.width, canvas.height);

                context.beginPath();
                context.strokeStyle = `hsl(190, 100%, ${circleStyle}%)`;
                context.lineWidth = "30";
                // context.arc(150, 150, 100, 0, min * coefficient, false);
                context.arc(150, 150, 100, 0, min * coefficient * (1 + Math.pow(1 - min/maxPercent, 2)), false);
                context.stroke();
                levelOfKnowledge.innerHTML = `${Math.round(min)} %`;
                min++;
                circleStyle--;


                if (min <= maxPercent) {
                    requestAnimationFrame(draw);
                }
            }
        };

        draw();
    };

    componentDidMount() {
        for (let i = 0; i < this.state.circles.length; i++) {
            let {skill, ref, percent} = this.state.circles[i];
            this.drawCircle(this.context, skill, ref.current, `.${percent}`);
        }
    }

    render() {

        let circlesArray = [];
        _.each(this.state.circles, (item) => {
            circlesArray.push(
                <div className="canvas_wrap" key={item.id}>
                    <canvas width="300" height="350" ref={item.ref}>Your browser does'nt support canvas</canvas>
                    <img className="skill_img" src={item.logo} alt={item.logoAlt}/>
                    <p className={`percent${item.id} percent_item`}>0</p>
                </div>
            );
        });

        return(
            <div className="circle_of_skills">
                {circlesArray}
            </div>
        );
    }
}

export default CircleOfSkills;
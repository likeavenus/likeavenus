import React, {Component} from "react";
import "./CircleOfSkills.css";
import htmlLogo from "./assets/HTML_Logo.png";

class CircleOfSkills extends Component {
    constructor(props) {
        super(props);
        this.canvasCircle = React.createRef();
    }

    drawCircle = () => {
        let canvas = this.canvasCircle.current;
        this.context = this.canvasCircle.current.getContext('2d');
        let levelOfKnowledge = document.querySelector('#percent');
        let pi = Math.PI;
        let coefficient = pi * 2 / 100;
        let min = 0; //точка старта анимации
        let maxPercent = 80; //процент знаний
        let circleStyle = 100;


        let draw = () => {
            this.context.clearRect(0, 0, canvas.width, canvas.height);

            this.context.beginPath();
            this.context.strokeStyle = `hsl(190, 100%, ${circleStyle}%)`;
            this.context.lineWidth = "30";
            this.context.arc(150, 150, 100, 0, min * coefficient, false);
            this.context.stroke();
            levelOfKnowledge.innerHTML = `${Math.round(min)} %`;
            min++;
            circleStyle--;


            if (min <= maxPercent) {
                requestAnimationFrame(draw);
            }
        };

        draw();
    };

    componentDidMount() {
        this.drawCircle();
    }

    render() {

        return(
            <div className="circle_of_skills">
                <div className="canvas_wrap">
                    <canvas id="cvs" width="350" height="350" ref={this.canvasCircle}>Your browser does'nt support canvas</canvas>
                        <img className="skill_img" src={htmlLogo} alt="html"/>
                    <p id="percent"></p>
                </div>

            </div>
        );
    }
}

export default CircleOfSkills;
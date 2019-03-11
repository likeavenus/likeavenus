import React, {Component} from "react";
import "./CircleOfSkills.css";
import htmlLogo from "./assets/HTML_Logo.png";
import cssLogo from "./assets/css3.svg";
import jsLogo from "./assets/js.svg";
import reactLogo from "./assets/react.svg";

class CircleOfSkills extends Component {
    constructor(props) {
        super(props);
        this.canvasCircle = React.createRef();
        this.canvasCircle2 = React.createRef();
        this.canvasCircle3 = React.createRef();
        this.canvasCircle4 = React.createRef();
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
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.beginPath();
            context.strokeStyle = `hsl(190, 100%, ${circleStyle}%)`;
            context.lineWidth = "30";
            context.arc(150, 150, 100, 0, min * coefficient, false);
            context.stroke();
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
        this.drawCircle(this.context, 91, this.canvasCircle.current, ".percent");
        this.drawCircle(this.context, 80, this.canvasCircle2.current, ".percent2");
        this.drawCircle(this.context, 33, this.canvasCircle3.current, ".percent3");
        this.drawCircle(this.context, 15, this.canvasCircle4.current, ".percent4");
    }

    render() {

        return(
            <div className="circle_of_skills">
                <div className="canvas_wrap">
                    <canvas width="300" height="350" ref={this.canvasCircle}>Your browser does'nt support canvas</canvas>
                        <img className="skill_img" src={htmlLogo} alt="html"/>
                    <p className="percent percent_item"></p>
                </div>
                <div className="canvas_wrap">
                    <canvas width="300" height="350" ref={this.canvasCircle2}>Your browser does'nt support canvas</canvas>
                        <img className="skill_img" src={cssLogo} alt="css"/>
                    <p className="percent2 percent_item"></p>
                </div>
                <div className="canvas_wrap">
                    <canvas width="300" height="350" ref={this.canvasCircle3}>Your browser does'nt support canvas</canvas>
                    <img className="skill_img" src={jsLogo} alt="js"/>
                    <p className="percent3 percent_item"></p>
                </div>
                <div className="canvas_wrap">
                    <canvas width="300" height="350" ref={this.canvasCircle4}>Your browser does'nt support canvas</canvas>
                    <img className="skill_img" src={reactLogo} alt="react"/>
                    <p className="percent4 percent_item"></p>
                </div>
            </div>
        );
    }
}

export default CircleOfSkills;
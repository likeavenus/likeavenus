import React, { Component } from 'react';
// import _ from "lodash";
import './Home.css';


class Home extends Component {
    constructor(props) {
        super(props);

        this.particles = React.createRef();

    }

    createAnimation = () => {
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        const colors = [
            '#00bdff',
            '#4d39ce',
            '#088eff',
            'brown',
            'orange',
            'lightgreen'
        ];

        const mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };

        document.addEventListener('mousemove', event => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        document.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        })

        function randomColor(colors) {
            return colors[Math.floor(Math.random() * colors.length)];
        }


        function Particle(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.radians = Math.random() * Math.PI * 2;;
            this.velocity = 0.05;
            this.distanceFromCenter = randomIntFromRange(50, 120);


            this.update = () => {
                const lastPoint = {
                    x: this.x,
                    y: this.y
                }
                this.radians += this.velocity;
                this.x = mouse.x + Math.cos(this.radians) * this.distanceFromCenter;
                this.y = mouse.y + Math.sin(this.radians) * this.distanceFromCenter;
                this.draw(lastPoint);
            }

            this.draw = (lastPoint) => {
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.radius;
                ctx.moveTo(lastPoint.x, lastPoint.y);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();
                ctx.closePath();
            }
        }

        let particles;

        const init = () => {
            particles = [];
            for (let i = 0; i < 60; i++) {
                const radius = Math.random() * 2 + 2;
                particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
            }

            // console.log(particles)
        }



        const animate = () => {
            requestAnimationFrame(animate);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
            })
        };



        init();
        animate();



    };

    componentDidMount() {
        this.createAnimation();
    }

    render() {


        return (
            <div className={"Home_animation"}>
                <div className={'message'}>Эта страница в стадии разработки...</div>
                <canvas id={"canvas"} ref={this.particles}></canvas>
            </div>
        );
    }
}

export default Home;
import html from "../assets/img/html5.svg";
import css from "../assets/img/css3.svg";
import javascript from "../assets/img/javascript.svg";
import react from "../assets/img/reacticon.svg";
import nodejss from "../assets/img/nodejss.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import mysql from "../assets/img/mysql.svg";
import rt from "../assets/img/redux.svg";
import as from "../assets/img/androidstudio.svg";
import github from "../assets/img/github2.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Tecnologias con las que he trabajado:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <div className="itemimg">
                                <img src={html} alt="Image" />
                                </div>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <div className="itemimg">
                                <img src={css} alt="Image" />
                                </div>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <div className="itemimg">
                                <img src={javascript} alt="Image" />
                                </div>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <div className="itemimg">
                                <img src={rt} alt="Image" />
                                </div>
                                <h5>Redux Toolkit</h5>
                            </div>
                            <div className="item">
                                <div className="itemimg">
                                <img src={react} alt="Image" />
                                </div>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <div className="itemimg">
                                <img src={nodejss} alt="Image" />
                                </div>
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <div className="itemimg">
                                <img src={bootstrap} alt="Image" />
                                </div>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <div className="itemimg">
                                <img src={mysql} alt="Image" />
                                </div>
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <div className="itemimg">
                                <img src={as} alt="Image" />
                                </div>
                                <h5>Android Studio</h5>
                            </div>
                            <div className="item">
                                <div className="itemimg">
                                <img src={github} alt="Image" />
                                </div>
                                <h5>GitHub</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

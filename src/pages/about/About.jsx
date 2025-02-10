import "./About.css"
import Logo from "../../assets/Logo.png";
import Aboutbg from "../../assets/About-bg.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import LinkedIn from "../../assets/linkedIn.png";
import Angel from "../../assets/angel-pic.png";
import Consortium from "../../assets/consortium.png";
import Carousel from "../../assets/Carousel.png";

const About = () => {
  return (
    <section className="about-page-wrapper">
      <div className="about-intro">
        <img src={Logo} alt="logo" />
        <p>
            A publishing company that focuses on the essentials.
        </p>
      </div>

      <div className="about-desc" >
        <img src={Aboutbg} alt="" />
        <div className="stories">
          <div className="stories-desc">
            <h1>We tell stories that drives the heart.</h1>
            <p>
              Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.
            </p>
          </div>
          <img src={Angel} alt="angel thumbnail" />
          
        </div>

        <div className="consortium">
          <div className="consortium-desc">
          <img src={Consortium} alt="consortium thumbnail" />
            <h1>We tell the news that makes the most impact.</h1>
            <p>
              Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.
            </p>
          </div>
        </div>

        <div className="moments">
          <div className="moments-desc">
          <h1>
          We share the little moments that shows we&apos;re alive.
          </h1>
          <p>
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.
          </p>
            
          </div>
        </div>

        <div className="carousel">
          <img src={Carousel} alt="" />
        </div>

      </div>

      <div className="about-desc-more">
        <h1>Because we are you. Humans.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur     adipisicing elit. sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="about-footer">
          <div className="about-footer-desc">
            <h1>want to connect?</h1>
            <p>
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..
            </p>

            <div className="socials">
              <img src={Instagram} alt="instagram" />
              <img src={Twitter} alt="twitter" />
              <img src={LinkedIn} alt="linkedin" />
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
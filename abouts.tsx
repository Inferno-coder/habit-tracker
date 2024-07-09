import logo  from "../../assets/habitImg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './about.css'
const About = () => {
    return (
        <div className="about">
            <div className="about-container flex  items-center">
                <div className="w-1/2">
                <div className="font-mono about-habit text-xs lg:text-xl">A habit is a regular practice or routine that is performed automatically, often without conscious thought. These behaviors can be beneficial, such as exercising daily or reading regularly, or detrimental, like smoking or procrastinating.  Understanding and shaping habits can lead to improved productivity, health, and overall well-being.</div>
                    <div className="about-quote-container">
                    <p>
                    <span className="quote-right-icon" ><FontAwesomeIcon icon={faQuoteLeft} />
                    </span>  We are what we repeatedly do. Excellence, then, is not an act, but a habit. 
                    <span className="quote-right-icon" ><FontAwesomeIcon icon={faQuoteRight} />
                    </span>
                    </p>
                    <div className="quote-author">- Aristotle </div>
                    </div>
                </div>
                <div className="about-img w-1/2">
                <img src={logo} alt="temp" />
                </div>
            </div>
        </div>
    )
}

export default About

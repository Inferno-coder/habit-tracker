import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './card.css'
interface CardProps{
   cardIcon:string,
   cardContent:string,
   cardHeading:string 
}

const Card = (props:CardProps) => {
  return (
        <div className="card flex">
            <div className="card-left">
            <FontAwesomeIcon icon={faCheckCircle} style={{color:'green'}}/>
            </div>
            <div className="card-right">
                <div className='card-head'>{props.cardHeading}</div>
                <div className="content">{props.cardContent}</div>
            </div>
        </div>
  )
}

export default Card

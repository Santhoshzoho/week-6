import ReactDOM from 'react-dom/client';
import './style.css';  


import one from "./one.jpg"
import two from "./two.jpg"
import three from "./three.jpg"
import four from "./four.jpg"
import five from "./five.jpg"
import six from "./six.jpg"
import seven from "./seven.jpg"
import eight from "./eight.jpg"


function Gallery(props) {


  
  return (
      <div className='imgdiv'>
      <img src={props.url} alt="" style={{ height: "100px", width: "100px "}} />
        <p>{props.description}</p>
      </div>

  )
}

const images = [
  {
    src: one,
    description: "Very cute"
  },
  {
    src: two,
    description: "Very cute"
  },
  {
    src: three,
    description: "Very cute"
  },
  {
    src: four,
    description: "Very cute"
  },
  {
    src: five,
    description: "Very cute"
  },
  {
    src: six,
    description: "Very cute"
  },
  {
    src: seven,
    description: "Very cute"
  },
  {
    src: eight,
    description: "Very cute"
  },

];


root.render(
  <div className='cmddiv'>
  {
    images.map(function (item){
      return <Gallery url={item.src} description={item.description}></Gallery>
    })
  }
  </div>
 
);
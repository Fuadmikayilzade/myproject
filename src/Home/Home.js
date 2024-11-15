import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import coder from './coder3.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/About'); // About səhifəsinə yönləndirmə
  };
  return (
    <div className="mainpage">
      <div className="point1">
        <div className="alloftexts">
          <h1 className="text2">FRONT END DEVELOPER</h1>
          <h1 className="text3">
            I'm Fuad <span className="text4">Mikayilzade</span>
          </h1>
          <div className="buttons">
            <button className="btn1" onClick={handleButtonClick}>
              MORE ABOUT ME <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className="btn2">
              HIRE ME <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>

      <div className="point2">
        <img className="coder" src={coder} alt="Coder" />
      </div>

      <div className="point3">
        <img className="coder1" src={coder} alt="Coder" />
      </div>
    </div>
  );
};

export default Portfolio;

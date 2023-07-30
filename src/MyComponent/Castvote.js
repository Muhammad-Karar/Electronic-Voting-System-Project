import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/castvote.css';
import ptibat from '../ptibat.png';

export default function Castvote() {
  const location = useLocation();
  const { title, party, image1 } = location.state;

  return (
    <div>
      <div className="cv-main-div">
        <div className="cv-div">
          <div className="cv-write-div">
            <h3>
              {title} <img style={{ width: '80px', height: '80px', marginLeft: '250px' }} className="bd-placeholder-img rounded-circle" src={image1} alt="" />
            </h3>
            <h5>{party}</h5> <br />
            <input type="checkbox" value="" id="check" /> Are you agree to cast vote for this party? <br /><br /> <br />
            <button type="submit" id="cvbtn1" name="cv1" value="">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

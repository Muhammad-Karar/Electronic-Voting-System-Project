import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Castvote from './Castvote';
import cpic1 from '../cpic1.jpeg';
import cpic2 from '../cpic2.jpg';
import cpic3 from '../cpic3.jpg';
import cpic4 from '../cpic4.jpg';
import cpic5 from '../cpic5.jpeg';
import cpic6 from '../cpic6.jpg';
import ptibat from '../ptibat.png';
import pmlsher from '../pmlsher.jpeg';
import ppparrow from '../ppparrow.png';
import anplaltain from '../anplaltain.jpeg';
import juibook from '../juibook.jpg';
import pmlqtracter from '../pmlqtracter.jpg';
import ptiflag from '../ptiflag.png';

const candidatesData = [
  {
    title: 'Imran khan',
    party: 'Pakistan Tehrek-e-Insaf',
    image: cpic1,
    image1: ptibat
  },
  {
    title: 'Shahbaz sharif',
    party: 'Pakistan Muslim League-N',
    image: cpic2,
    image1: pmlsher
  },
  {
    title: 'Bilawal bhutto',
    party: 'Pakistan Peoples party',
    image: cpic3,
    image1: ppparrow
  },
  {
    title: 'Aimal wali khan',
    party: 'Awami National Party',
    image: cpic4,
    image1: anplaltain
  },
  {
    title: 'Siraj ul Haq',
    party: 'Jamaat-e-Islami ',
    image: cpic5,
    image1: juibook
  },
  {
    title: 'Shujaat Hussain',
    party: 'Pakistan Muslim League-Q',
    image: cpic6,
    image1: pmlqtracter
  },
];

export default function Candidates() {
  const [selectedCandidate, setSelectedCandidate] = useState(candidatesData[0]);
  const navigate = useNavigate();

  const OnClickPti = (candidate) => {
    setSelectedCandidate(candidate);
    navigate('/castvote', { state: { title: candidate.title, party: candidate.party, image1: candidate.image1 } });
  };

  return (
    <div style={{ backgroundColor: 'rgb(74, 75, 75)', display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <div style={{ marginLeft: '200px', paddingTop: '30px', color: 'white' }} className="container">
        <div className="row">
          {candidatesData.map((candidate, index) => (
            <div style={{ paddingTop: '30px' }} className="col-lg-4" key={index}>
              <img style={{ width: '140px', height: '140px' }} className="bd-placeholder-img rounded-circle" src={candidate.image} alt="" />
              <h2 className="fw-normal">{candidate.title}</h2>
              <p>{`Chaiman (${candidate.party}).`}</p>
              <button type="button" className="btn btn-outline-light" onClick={() => {
                setSelectedCandidate(candidate);
                navigate('/castvote', { state: { title: candidate.title, party: candidate.party, image1: candidate.image1 } });
              }}>
                Cast vote »
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

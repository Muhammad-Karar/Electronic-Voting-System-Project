import React from 'react';
import '../style/castvote.css';
import ptibat from '../ptibat.png'
export default function Castvote() {
  return (
    <div>
      <div className="cv-main-div">
        <div className="cv-div">
            <div className="cv-write-div">
                <h3>Name <img style={{width: "80px",height: "80px",marginLeft: "270px" }} class="bd-placeholder-img rounded-circle " src={ptibat} alt="" /></h3>

                <h5>Pakistan Tehrek-e-Insaf</h5>  <br />

                <input type="checkbox" value="" id='check' />  Are you agree to cast vote for this party? <br /><br /> <br />
                <button type="submit" id='cvbtn1' name='cv1' value="">submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

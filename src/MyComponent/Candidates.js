import React from 'react'
import cpic1 from '../cpic1.jpeg';
import cpic2 from '../cpic2.jpg';
import cpic3 from '../cpic3.jpg';
import cpic4 from '../cpic4.jpg';
import cpic5 from '../cpic5.jpeg';
import cpic6 from '../cpic6.jpg';
import ptiflag from '../ptiflag.png';
export default function Candidates() {
    return (
        <div style={{ backgroundColor: "rgb(74, 75, 75)",display: "flex", justifyContent: "center", height: "90vh" }}>
            <div  style={{marginLeft: "200px",paddingTop: "50px",color: "white" }} Class="container">


                    <div class="row">
                        <div class="col-lg-4">
                            {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns={cpic1} role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <img style={{width: "140px",height: "140px" }} class="bd-placeholder-img rounded-circle " src={cpic1} alt="" />
                            <h2 class="fw-normal">Imran Khan</h2>
                            <p>Chaiman (Pakistan Tehrek-e-Insaf).</p>
                            <p><a class="btn btn-outline-light" href="#">Cast vote »</a></p>
                        </div>
                        <div class="col-lg-4">
                            {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <img style={{width: "140px",height: "140px" }} class="bd-placeholder-img rounded-circle " src={cpic2} alt="" />
                            <h2 class="fw-normal">shahbaz sharif</h2>
                            <p>Chaiman (Pakistan Muslim League-N).</p>
                            <p><a class="btn btn-outline-light" href="#">Cast vote »</a></p>
                        </div>
                        <div class="col-lg-4">
                            {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <img style={{width: "140px",height: "140px" }} class="bd-placeholder-img rounded-circle " src={cpic3} alt="" />
                            <h2 class="fw-normal">Bilawal Bhutto</h2>
                            <p>Chaiman (Pakistan Peoples Party).</p>
                            <p><a class="btn btn-outline-light" href="#">Cast vote »</a></p>
                        </div>
                        <div class="col-lg-4">
                            {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <img style={{width: "140px",height: "140px" }} class="bd-placeholder-img rounded-circle " src={cpic4} alt="" />
                            <h2 class="fw-normal">Aimal wali khan</h2>
                            <p>Chaiman (Awami National Party).</p>
                            <p><a class="btn btn-outline-light" href="#">Cast vote »</a></p>
                        </div>
                        <div class="col-lg-4">
                            {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <img style={{width: "140px",height: "140px" }} class="bd-placeholder-img rounded-circle " src={cpic5} alt="" />
                            <h2 class="fw-normal">Siraj ul Haq</h2>
                            <p>Chaiman (Jamiat Ulema-e-Islam).</p>
                            <p><a class="btn btn-outline-light" href="#">Cast vote »</a></p>
                        </div>
                        <div class="col-lg-4">
                            {/* <svg class="bd-placeh/older-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <img style={{width: "140px",height: "140px" }} class="bd-placeholder-img rounded-circle " src={cpic6} alt="" />
                            <h2 class="fw-normal">shujaat hussain</h2>
                            <p>Chaiman (Pakistan Muslim League-Q).</p>
                            <p><a class="btn btn-outline-light" href="#">Cast vote »</a></p>
                        </div>
                    </div>
                </div>
            </div>
            )
}

import React from 'react'
import cpic1 from '../cpic1.jpeg'
export default function Candidates() {
    return (
        <div style={{ backgroundColor: "rgb(74, 75, 75)",display: "flex", justifyContent: "center" }}>
            <div  style={{marginLeft: "200px",paddingTop: "30px",color: "white" }} Class="container">


                    <div class="row">
                        <div class="col-lg-4">
                            {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <img class="bd-placeholder-img rounded-circle w-10px" src={cpic1} alt="" />
                            <h2 class="fw-normal">Heading</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <p><a class="btn btn-outline-light" href="#">View details »</a></p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                            <h2 class="fw-normal">Heading</h2>
                            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                            <p><a class="btn btn-outline-light" href="#">View details »</a></p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                            <h2 class="fw-normal">Heading</h2>
                            <p>And lastly this, the third column of representative placeholder content.</p>
                            <p><a class="btn btn-outline-light" href="#">View details »</a></p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                            <h2 class="fw-normal">Heading</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <p><a class="btn btn-outline-light" href="#">View details »</a></p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                            <h2 class="fw-normal">Heading</h2>
                            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                            <p><a class="btn btn-outline-light" href="#">View details »</a></p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                            <h2 class="fw-normal">Heading</h2>
                            <p>And lastly this, the third column of representative placeholder content.</p>
                            <p><a class="btn btn-outline-light" href="#">View details »</a></p>
                        </div>
                    </div>
                </div>
            </div>
            )
}

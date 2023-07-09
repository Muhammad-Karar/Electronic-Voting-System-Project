import React,{ useState }  from 'react'
import pic2 from '../pic2.jpg'
import pic3 from '../pic3.jpg'
import pic4 from '../pic4.jpeg'

export default function Home() {
  const [images, setImages] = useState([pic2, pic3, pic4]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  return (

    
    <div>
      <div style={{zIndex: "1" }} id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {images.map((image, index) => (
            <button 
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? 'active' : ''}
              aria-current={index === activeIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button style={{backgroundColor:"transparent"}}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() =>
            handleSlideChange((activeIndex - 1 + images.length) % images.length)
          }
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button style={{backgroundColor:"transparent"}}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => handleSlideChange((activeIndex + 1) % images.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    // <div>
    //    <section id="home-section">
    //     <div class="home-section-container">
            
    //     </div>
    // </section>
    // </div>
    // <div>

    // <div className="container">
    //   <div id="carouselExample" class="carousel slide">
    //     <div class="carousel-inner">
    //       <div class="carousel-item active">
    //         <img src="..." class="d-block w-100" alt="..." />
    //       </div>
    //       <div class="carousel-item">
    //         <img src="..." class="d-block w-100" alt="..." />
    //       </div>
    //       <div class="carousel-item">
    //         <img src="..." class="d-block w-100" alt="..." />
    //       </div>
    //     </div>
    //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Next</span>
    //     </button>
    //   </div>
    //   </div>
    // </div>

    // <div>
    //   <div class="container">
    //     <div class="card shadow-sm">
    //       {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={pic2.jpg} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
    //       <img src={pic2.jpg} class="card-img-top w-25 h-25" alt="image" />
    //       <div class="card-body">
    //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //         <div class="d-flex justify-content-between align-items-center">
    //           <div class="btn-group">
    //             <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
    //             <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
    //           </div>
    //           <small class="text-body-secondary">9 mins</small>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="card shadow-sm ">
    //       {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
    //       {/* <img src={pic3.jpg} class="card-img-top" alt="image" /> */}
    //       <img class="bd-placeholder-img"  src={pic3.jpg} alt=""></img>
    //       <div class="card-body">
    //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //         <div class="d-flex justify-content-between align-items-center">
    //           <div class="btn-group">
    //             <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
    //             <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
    //           </div>
    //           <small class="text-body-secondary">9 mins</small>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </div>
  )
}

import React from 'react'
import image1 from"../assets/images.avif"
import image2 from"../assets/872571.jpg"
import image3 from"../assets/image2.jpg"
import "../App.css"
 function Carouser() {
  return (
    <>

        <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={image1} className=" corouser d-block w-100 " alt="..." style={{ height: "650px", objectFit: "cover" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Anime Collection</h5>
        <p className='text-black font-family font-size'>You want a t-shirt with a design that says "About Me" or some kind of bio or intro?</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image3} className=" corouser d-block w-100 " style={{ height: "650px", objectFit: "cover" }} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Gaming Collection</h5>
        <p className='text-black font-family font-size'>You want a t-shirt with a design that says "About Me" or some kind of bio or intro?</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image2} className=" corouser d-block w-100 " style={{ height: "650px", objectFit: "cover" }} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Fitness Collection</h5>
        <p className='text-black font-family font-size'>You want a t-shirt with a design that says "About Me" or some kind of bio or intro?</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
export default Carouser
import React from 'react'

const Carousel = () => {
    return (
        <section class="row " >
            <style>
                {`
          /* ========== FADE EFFECT (instead of slide) ========== */
          .carousel-fade .carousel-item {
            transition: opacity 1s ease-in-out !important;
          }
          
          /* Fade effect - hide inactive slides */
          .carousel-fade .carousel-item:not(.active) {
            opacity: 0 !important;
            display: block !important;
          }
          
          /* Fade effect - show active slide */
          .carousel-fade .carousel-item.active {
            opacity: 1 !important;
          }
          
          /* Fix for carousel controls with fade effect */
          .carousel-fade .carousel-item-next,
          .carousel-fade .carousel-item-prev,
          .carousel-fade .carousel-item.active {
            transform: none !important;
          }
          
          /* ========== CONTROL DISPLAY DURATION ========== */
          /* Change the number after 'data-bs-interval' for timing */
        `}
            </style>
            <div class="col-md-12">
                {/* 
          data-bs-interval controls how long each slide stays visible (in milliseconds)
          2000 = 2 seconds
          3000 = 3 seconds  
          5000 = 5 seconds (Bootstrap default)
          8000 = 8 seconds
          
          Add 'carousel-fade' class for fade effect instead of slide
        */}
                {/* <!-- a division with carousel content  --> */}
                <div class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="1000" id="mycarousel">
                    {/* <!-- inner division  --> */}
                    <div class="carousel-inner">
                        {/* <!-- division with image 1 --> */}
                        <div class="carousel-item active">
                            <img src="images/anime3.jpg" alt="" height={"500px"} />
                            <h1 className='text-info'>Anime</h1>
                        </div>
                        {/* <!-- division with image 2 --> */}

                        <div class="carousel-item">
                            <img src="images/horror.jpg" alt="" height={"500px"} />
                            <h1 className='text-info'>Horror Films</h1>
                        </div>
                        {/* <!-- division with image 3 --> */}
                        <div class="carousel-item">
                            <img src="images/historical.webp" alt="" height={"500px"} />
                            <h1 className='text-info'>Historical Films</h1>

                        </div>
                        {/* <!-- division with image 4 --> */}
                        <div class="carousel-item">
                            <img src="images/kr.jpg" alt="" height={"500px"} />
                            <h1 className='text-info'>Asian Films </h1>

                        </div>

                        {/* <!-- division with image 5 --> */}
                        <div class="carousel-item">
                            <img src="images/action.webp" alt="" height={"500px"} />
                            <h1 className='text-info'>Action  Films</h1>

                        </div>
                    </div>
                    {/* <!-- previous control  --> */}
                    <a href="#mycarousel" data-bs-slide="prev" class="carousel-control-prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    {/* <!-- next control  --> */}
                    <a href="#mycarousel" data-bs-slide="next" class="carousel-control-next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </section >
    )
}
<hr />
export default Carousel
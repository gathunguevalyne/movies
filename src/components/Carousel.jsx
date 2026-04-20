import React from 'react'

const Carousel = () => {
    return (
        <section class="row bg-dark" >
            <div class="col-md-12">
                {/* <!-- a division with carousel content  --> */}
                <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    {/* <!-- inner division  --> */}
                    <div class="carousel-inner">
                        {/* <!-- division with image 1 --> */}
                        <div class="carousel-item active">
                            <img src="images/caro1.png" alt="" height={"500px"} />
                            <h1 className='text-white'>Beauty In Black</h1>
                        </div>
                        {/* <!-- division with image 2 --> */}

                        <div class="carousel-item">
                            <img src="images/caro2.png" alt=""  height={"500px"}/>
                            <h1 className='text-white'>War Machine</h1>
                        </div>
                        {/* <!-- division with image 3 --> */}
                        <div class="carousel-item">
                            <img src="images/caro3.jpg" alt="" height={"500px"}/>
                            <h1 className='text-white'>Young Sherlock</h1>
                        
                        </div>
                        {/* <!-- division with image 4 --> */}
                        <div class="carousel-item">
                            <img src="images/caro4.png" alt="" height={"500px"}/>
                            <h1 className='text-white'>One Piece</h1>

                        </div>
                    </div>
                    {/* <!-- previous control  --> */}
                    <a href="#mycarousel" data-bs-slide="prev" class="carousel-control-prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    {/* <!-- next control  --> */}
                    <a href="#mycarousel" data-bs-slide="next" class="carousel-control-next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>
            </div>
        </section>
    )
}
<hr />
export default Carousel
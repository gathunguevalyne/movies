import React from 'react'

const footer = () => {
    return (
        <div>
            <section class="row bg-warning p-3">
                {/* <!-- child 1 --> */}
                <div class="col-md-4 text-dark">
                    <h2 class="text-center">About Us</h2>
                    <p>We offer great services whereby one can buy our products at the store or online and the goods bought delivered</p>
                </div>
                {/* <!-- child 2 --> */}
                <div class="col-md-4 text-dark">
                    <h2 class="text-center">Contact Us</h2>
                    <form action="">
                        <input type="email" placeholder="Enter your email" class="form-control" /><br /><br />
                        <textarea name="" id="" class="form-control" placeholder="Leave a comment"></textarea><br />
                        <input type="submit" value="Send message" class="btn btn-outline-danger" />
                    </form>
                </div>
                {/* <!-- child 3 --> */}
                <div class="col-md-4">
                    <h2 class="text-center text-dark">Stay connected</h2>
                    <a href="https://www.facebook.com">
                        <img src="images/fb.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com">
                        <img src="images/in.png" alt="instagram" />
                    </a>
                    <a href="https://www.x.com">
                        <img src="images/x.png" alt="twitter" />
                    </a>
                    <p>You can check out more of our products on our social media handles as shown above.</p>
                </div>
            </section>
        </div>
    )
}

export default footer
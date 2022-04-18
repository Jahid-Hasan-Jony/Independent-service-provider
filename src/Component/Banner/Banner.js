import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='BannerSection'>
                <div className='container py-5'>
                    <h3 className='pt-5'>Hello Everyone</h3>
                    <h1 className='fw-bold'>JN's Photography</h1>
                    <h4 className='pb-5'>Capture Your Best Moment</h4>
                    <button type="button" class="btn btn-outline-light btn-lg">Photo Gallery</button>

                </div>
            </div>
        </div>
    );
};

export default Banner;
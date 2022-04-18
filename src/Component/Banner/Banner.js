import React from 'react';
import './Banner.css'
import Banner2 from '../../Image/banner2.jpg'

const Banner = () => {
    return (
        <div>
            <div className='BannerSection container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6 py-5'>
                        <h3>Hello Everyone</h3>
                        <h1 className='fw-bold'>JN's Photography</h1>
                        <h4 className='pb-5'>Capture Your Best Moment</h4>
                        <button type="button" className="btn btn-outline-dark btn-lg">Photo Gallery</button>
                    </div>
                    <div className='col-md-6'>
                        <img src={Banner2} alt='Banner' className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
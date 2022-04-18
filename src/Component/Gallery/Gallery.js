import React from 'react';
import pic1 from '../../Image/pic1.jpg';
import pic2 from '../../Image/pic2.jpg';
import pic3 from '../../Image/pic3.jpg';
import pic4 from '../../Image/pic4.jpg';
import pic5 from '../../Image/pic5.jpg';

const Gallery = () => {
    return (
        <div className='container py-5'>
            <h1 className='text-center py-5'>Gallery Views</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={pic1} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={pic2} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={pic3} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={pic4} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={pic5} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
import React from 'react';
import photo1 from '../../Image/img1.jpg'
import photo2 from '../../Image/img2.jpg'
import photo3 from '../../Image/img3.jpg'

const Services = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center py-5'>My Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={photo2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Basic photo shoot</h4>
                            <h5>Prince : $350</h5>
                            <p className="card-text">Full-day or half-day photo shoots with all necessary equipment</p>
                            <p className="card-text">Professional camera and lens kits</p>
                            <p className="card-text">Single-shooter and multi-shooter options</p>
                        </div>
                        <button className='btn btn-primary btn-lg m-3'>Add to Card</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={photo3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Studio photo shoot</h4>
                            <h5>Prince : $500</h5>
                            <p className="card-text">Full-day or half-day photo shoots with all necessary equipment</p>
                            <p className="card-text">Professional lighting setup</p>
                            <p className="card-text">Professional camera and lens kits</p>
                        </div>
                        <button className='btn btn-primary btn-lg m-3'>Add to Card</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={photo1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Photo editing</h4>
                            <h5>Prince : $200</h5>
                            <p className="card-text">Photo editing, color correction and retouching</p>
                            <p className="card-text">Photo metadata to SEO best practices</p>
                            <p className="card-text">Photo library hosting</p>
                        </div>
                        <button className='btn btn-primary btn-lg m-3'>Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
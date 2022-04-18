import React from 'react';

const Services = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Basic photo shoot</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Studio photo shoot</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Photo editing</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
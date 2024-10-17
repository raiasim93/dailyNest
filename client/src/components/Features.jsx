import React from 'react';
import CardFeature from './CardFeature';

const Features = ({feature}) => {
  return (
    <div className='features-container'>
        <div className="row p-5">
            <div className="col-10 mx-auto">
                <div>
                    <h2 className= 'feature-wrapper-title text-center fw-bold fs-1 p-4'> What we offer </h2>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="row w-100">
                        {
                            feature.map((item,index)=> {
                                return(
                                    <CardFeature
                                    key={index}
                                    title = {item.title}
                                    desc = {item.desc}
                                    icon = {item.icon}
                                />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Features;

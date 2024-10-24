import React from 'react';
import CardFeature from './CardFeature';

const Features = ({feature}) => {
  return (
    <div className="features-container">
      <div className="row p-5">
        <div className="col-10 mx-auto">
          <div>
            <h2 className="feature-wrapper-title position-relative text-center fw-bold mb-5 py-5">
              Why DailyNest?
            </h2>
          </div>
          <div className="row gx-3 gy-5 ">
            {feature.map((feature, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                <CardFeature
                  title={feature.title}
                  desc={feature.desc}
                  icon={feature.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

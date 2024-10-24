import React from 'react';
import SendSharpIcon from '@mui/icons-material/SendSharp';

const CardFeature = (props) => {
  return (
    <div className="feature-box border rounded d-flex flex-column justify-content-center align-items-center p-3 mb-4 mx-auto pointer" style={{ maxWidth: '400px' }}>
      {/* Icon and Title Row */}
      <div className="d-flex align-items-center w-100 mb-3">
        {/* Icon */}
        <span className="icon-style" style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center' }}>
          {props.icon}
        </span>
        {/* Title */}
        <h3 className="features-title fs-3 fw-bold text-start ms-3" style={{ flex: 1 }}>
          {props.title}
        </h3>
      </div>
      
      {/* Description */}
      
        <p className=" text-secondary text-start d-flex align-items-center">
          <SendSharpIcon style={{ fontSize: '1.25rem', marginRight: '6px' }} />
          {props.desc}
        </p>
     
    </div>
  );
}

export default CardFeature;

import React from 'react';
import SendSharpIcon from '@mui/icons-material/SendSharp';

const CardFeature = (props) => {
  return (
    <div className='feature-box border col-sm-8 col-md-8 col-lg-4 mb-3 p-3 text-center mx-auto'>
      <div className="d-flex justify-content-center align-items-center mb-sm-2 mb-md-4"> 
        <span className="me-3 icon-style">
          {props.icon}
        </span>
        <span className="features-title fs-3">
          {props.title} 
        </span>
      </div>
      <div>
        <p className='fs-6'> <SendSharpIcon style={{fontSize: 'small'}} /> {props.desc} </p>
      </div>
    </div>
  );
}

export default CardFeature;

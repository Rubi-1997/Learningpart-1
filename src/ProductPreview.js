import React from 'react';
import './ProductPreview.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeartbeat} from '@fortawesome/free-solid-svg-icons'


const ProductPreview = (props) => {

  const currentHour=new Date().getHours()>9? new Date().getHours():0 + new Date().getHours();
  const currentMinutes=new Date().getMinutes()>9? new Date().getMinutes():0 + new Date().getMinutes();
  return (
    <div className='ProductPreview'>
      <img src={props.currentPreviewImage} alt="prevImage"/>
      {
        props.showHeartbeatSection?
        <div className='HeartbeatSection'>
        <FontAwesomeIcon  className='Fonticon' icon={faHeartbeat} />
         <p>78</p>
        </div>
        :
        <div className='Timesection'>
        <p>{`${currentHour}:${currentMinutes}`}</p>
       </div>
       

      }
       
    </div>
  
  );
}

export default ProductPreview
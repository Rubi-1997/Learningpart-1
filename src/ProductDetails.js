import React from 'react';
import classes from './ProductDetails.module.css';
// import ProductData from './ProductData';


 const ProductDetails = (props) => {

   const colorOptions=props.data.colorOptions.map((item,pos)=>{
    const classArr=[classes.ProductImage]
    if(pos===props.currentPreviewImagePos){
        classArr.push(classes.SelectProductImage);
    }
    return(
        <img src={item.imageUrl} key={pos} className={classArr.join(' ')} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)} />
    );
   })

   const featureList=props.data.featureList.map((item,pos)=>{
    // console.log(pos)
    const classArr=[classes.FeatureItem]
    if(pos===1 && props.showHeartbeatSection){
        classArr.push(classes.SelectedFeatureItem);
    }
    else if(pos===0 && !props.showHeartbeatSection){
        classArr.push(classes.SelectedFeatureItem);
    }
    return(
        <button onClick={()=>props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
    )
   })
    return (
        <div className={classes.ProductData}>
            <h1 className={classes.Producttitle}>{props.data.title}</h1>
            <p className={classes.ProductDesc}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
                {/* <img src="https://imgur.com/iOeUBV7.png" className='ProductImage  SelectProductImage' alt="Black color" />

                <img src="https://imgur.com/Mplj1YR.png" className='ProductImage' alt="Blue color" />
                <img src="https://imgur.com/xSIK4M8.png" className='ProductImage' alt="Purple color" />
                <img src="https://imgur.com/PTgQlim.png" className='ProductImage' alt="red color" /> */}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
                {featureList}
                {/* <button className={[classes.FeatureItem ,classes.SelectedFeatureItem].join(' ')}>Time</button>
                <button className={classes.FeatureItem}>Heart Rate</button> */}
            </div>
            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    )
}
export default ProductDetails
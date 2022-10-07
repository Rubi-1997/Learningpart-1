// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
// import ProductData from './ProductData';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeartbeat} from '@fortawesome/free-solid-svg-icons'
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';
import ProductData from './ProductData';


class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    showHeartbeatSection: true,
  }
  onColorOptionClick = (pos) => {

    this.setState({
      currentPreviewImagePos: pos
    });
  }

  onFeatureItemClick = (pos) => {
    let updatedState = false
    if (pos === 1) {
      updatedState = true;
    }
    this.setState({
      showHeartbeatSection: updatedState
    });
  }
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="Maincontainer">
          <div className='ProductPreview'>
            <ProductPreview showHeartbeatSection={this.state.showHeartbeatSection} currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} />
          </div>

          <div className="ProductData">
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} showHeartbeatSection={this.state.showHeartbeatSection} onFeatureItemClick={this.onFeatureItemClick} />
          </div>
        </div>

      </div>
    );


  }


}

export default App;

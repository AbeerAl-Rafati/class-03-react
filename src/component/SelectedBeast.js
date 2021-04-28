import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


class SelectedBeast extends React.Component {

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         show: false,
    //     }
    // }


    // showPopUp =()=>{
    //    this.setState ({
    //        show: true
    //    });
    // }

    // stopPopUp =()=>{
    //     this.setState ({
    //         show: false
    //     });
    //  }

    render() {
        return (
        
            <>
            {/* <Button variant="primary" onClick={this.props.popUp}>
              Enlarge the pic ...
            </Button> */}
      
            <Modal show={this.props.popUp}  onHide={this.props.hidePopUp} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Image src={this.props.imageUrl} fluid />
                 {this.props.description}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={this.props.hidePopUp}>
                  Close
                </Button>
                
              </Modal.Footer>
            </Modal>
          </>
               
        )


           
    }
}

export default SelectedBeast;
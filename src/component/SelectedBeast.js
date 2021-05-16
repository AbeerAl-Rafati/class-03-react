import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


class SelectedBeast extends React.Component {



  render() {
    return (

      <>


        <Modal show={this.props.popUp} onHide={this.props.hidePopUp} animation={true}>
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

    );



  }
}

export default SelectedBeast;

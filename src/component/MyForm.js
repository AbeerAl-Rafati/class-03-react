import React from 'react';
import Form from 'react-bootstrap/Form';
import HornedBeasts from './render';

class MyForm extends React.Component {

  updateFun = (horn) => this.props.update(horn);

  submitFun = (event) => {
    this.props.filterData(event);
    return (
      <div>
        <HornedBeasts
          title={this.props.title}
          image_url={this.props.image_url}
          description={this.props.description}
          show={this.props.show} />
      </div>
    );
  }



  render() {
    return (

      <div style={{ margin: '2rem 5rem' }}>
        <Form onSubmit={this.submitFun}>
          <Form.Group>
            <Form.Label>CHOOSE THE BEAST ACCORDING HORNS NUMBER IT HAS 🦄</Form.Label>
            <Form.Control as="select" onChange={this.updateFun} name="hornsnum" size="lg">
              <option value=''>CHOOSE HORN NUM</option>
              <option value='1' >HAS ONE HORN - 1 🦄</option>
              <option value='2'>HAS TWO HORNS - 2 🦄🦄</option>
              <option value='3'> HAS THREE HORNS - 3 🦄🦄🦄</option>
              <option value='100'>HAS HUNDRED HORNS - 100 (🦄🦄🦄.....100🦄)</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>

    );
  }

}

export default MyForm;


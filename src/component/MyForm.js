import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class MyForm extends React.Component {

  render() {
    return (

      <div style={{ margin: '2rem 5rem' }}>
        <Form onSubmit={this.props.chosenHornNum}>
          <Form.Group>
            <Form.Label>CHOOSE THE BEAST ACCORDING HORNS NUMBER IT HAS 🦄</Form.Label>
            <Form.Control as="select" name="hornsnum" size="lg" custom defaultValue='All' >
              <option value='All'>CHOOSE HORN NUM</option>
              <option value='1' > ONE HORN - 1 🦄</option>
              <option value='2'> TWO HORNS - 2 🦄🦄</option>
              <option value='3'> THREE HORNS - 3 🦄🦄🦄</option>
              <option value='100'> HUNDRED HORNS - 100 (🦄🦄🦄.....100🦄)</option>
            </Form.Control>
            <Button variant="primary" type="submit">
              Submit
          </Button>
          </Form.Group>
        </Form>
      </div>

    );
  }

}

export default MyForm;


import React from 'react';
import HornedBeast from './render';
import jsonData from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: jsonData,
      hornNum: ''
    };
  }

  submitsForm = (event) => {
    event.preventDefault();
  };

  update = (event) => {
    this.setState({ hornNum: event.target.value });
    console.log(this.state.hornNum);
  };

  fileringfunction = () => {
    let one = this.state.data.filtes(num => {
      return (num.horns === 1)
    })
    return one;
  }

  render() {

    return (
      <>
        <div style={{ margin: '2rem 5rem' }}>
          <Form onSubmit={this.submitsForm}>
            <Form.Group>
              <Form.Label>CHOOSE THE BEAST ACCORDING HORNS NUMBER IT HAS 🦄</Form.Label>
              <Form.Control as="select" onChange={this.update} name="hornsnum" size="lg">
                <option>CHOOSE HORN NUM</option>
                <option >HAS ONE HORN - 1 🦄</option>
                <option>HAS TWO HORNS - 2 🦄🦄</option>
                <option>HAS THREE HORNS - 3 🦄🦄🦄</option>
                <option>HAS HUNDRED HORNS - 100 (🦄🦄🦄.....100🦄)</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>

        <div >
          <Container fluid>
            <Row className='justify-content-md-center'>

              {this.state.data.map(horn => {
                return (

                  <HornedBeast
                    image_url={horn.image_url}
                    title={horn.title}
                    description={horn.description} />

                );
              })
              }

            </Row>
          </Container>

        </div>

      </>
    );
  }

}

export default Main;

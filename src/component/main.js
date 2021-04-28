import React from 'react';
import HornedBeast from './render';
import jsonData from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: jsonData
    };
  }

  render() {
    // <Form >
    //     <Form.Group>
    //         <Form.Control as="select" size="lg">
    //             <option>Large select</option>
    //             <option>Large select</option>
    //             <option>Large select</option>
    //             <option>Large select</option>
    //         </Form.Control>
    // </Form>
    return (
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


    )
  }

}

export default Main;
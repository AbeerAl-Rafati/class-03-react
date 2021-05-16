import React from 'react';
import HornedBeast from './render';
import jsonData from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MyForm from './MyForm';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: jsonData,
      hornNum: null

    };
  }

  chosenHornNum = (e) => {
    e.preventDefault();
    this.setState({
      hornNum: e.target.hornsnum.value
    });
    console.log(e.target.hornsnum.value);
  }



  allBeast = () => this.state.data.map((animal, i) => {
    return (
      <div key={i} >
        <HornedBeast image_url={animal.image_url} title={animal.title} description={animal.description} />
      </div>
    );
  });



  filterdBeast = () => this.state.data.filter(Beast => {
    return Beast.horns === parseInt(this.state.hornNum);
  }).map((a, i) => {
    return (
      <div key={i} >
        <HornedBeast image_url={a.image_url} title={a.title} description={a.description} />
      </div>
    );
  });



  render() {
    console.log(this.allBeast());
    return (

      <>

        <div>
          <MyForm

            chosenHornNum={this.chosenHornNum}
            data={this.state.data} />
        </div>


        <div >
          <Container fluid>
            <Row className='justify-content-md-center'>
              {this.state.hornNum ? this.filterdBeast() : this.allBeast()}
            </Row>
          </Container>
        </div>


      </>
    );
  }



}

export default Main;

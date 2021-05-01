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
      hornNum: ''

    };
  }



  // filterData = (event) => {
  //   if (this.state.hornNum !== 'All') {
  //     this.setState({
  //       data: jsonData.filter(item => item.horns === Number(this.state.hornNum))
  //     });
  // //   }
  // else
  //     this.setState({ data: jsonData });
  // }
  ///////////////////////////
  filterData = () => {
    return this.state.data.filter(item => item.horns === Number(this.state.hornNum)) ? this.update() : this.pageRender();
  }

  update = (event) => {

    console.log(event.target.value);
  }


  render() {
    console.log(this.update());
    return (

      <>

        <div>
          <MyForm filterData={this.filterData}
            hornNum={this.state.hornNum}
            update={this.update}
            data={this.state.data} />
        </div>


        <div> {this.pageRender()}</div>



      </>
    );
  }


  pageRender = () => {
    return (
      <div >
        <Container fluid>
          <Row className='justify-content-md-center'>

            {this.state.data.map(horn => {
              return (
                <HornedBeast
                  image_url={horn.image_url}
                  title={horn.title}
                  description={horn.description}
                />

              );
            })
            }

          </Row>
        </Container>

      </div>
    );
  }
}

export default Main;

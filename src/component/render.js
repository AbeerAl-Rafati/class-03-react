import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likes: 0,
            show: false,


        }
    }

    incereseLikes = () => {
        this.setState({ likes: this.state.likes + 1 });


    }




    showPopUp = () => {
        this.setState({ show: true });
        this.setState({ likes: this.state.likes + 1 });
    }
    stopPopUp = () => {
        this.setState({ show: false });
    }




    render() {
        return (


            <div >
                <Card style={{ width: '14rem', margin: '0.5rem' }}>
                    <Card.Img onClick={this.showPopUp} variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>{this.state.likes} 👍</Card.Text>
                        <Button onClick={this.incereseLikes} variant="primary">Like</Button>
                    </Card.Body>
                </Card>

                <SelectedBeast popUp={this.state.show} hidePopUp={this.stopPopUp} title={this.props.title} description={this.props.description} imageUrl={this.props.image_url} />
                {/* <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <p>  {this.state.likes} 👍</p>
                <img onClick={this.incereseLikes} src={this.props.image_url} alt={this.props.title} title={this.props.title} /> */}
            </div >
        )
    };

}

export default HornedBeast;
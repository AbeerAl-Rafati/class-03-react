import React from 'react';
import HornedBeast from './render';
import jsonData from '../data.json';

class Main extends React.Component {
constructor (props){
    super(props);
    this.state = {
        data : jsonData
    };
}

render() {

return this.state.data.map(horn => {
    return(
        <div>
            <HornedBeast
             image_url={horn.image_url}
             title={horn.title} 
             description={horn.description}/>
        </div>
     
    );
});




    // const looper = this.state.data.map(horn)=>{
    //      return (

    //            <div >
    //              <HornedBeast image_url={horn.image_url} title={horn.title} description={horn.description}/>
        


    //           </div>
    //         )
    // }
    // return (looper);
};

}

export default Main;
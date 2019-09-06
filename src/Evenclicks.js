import React, {Component} from "react";


class Evenclicks extends Component {

    constructor(props){
        super(props);

        this.state = {
           clicks: 0,
        };

        // force this to always be *this* in handleClick
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

        let current = this.state.clicks;

        this.setState ({ clicks: current += 1 });
    }

    render(){
        return(
        <p  onClick={ this.handleClick }>
                { this.state.clicks % 2 === 0 ? "even" : "odd" }
            </p>
        )}


}




export default Evenclicks;
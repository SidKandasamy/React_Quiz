import React, {Component} from "react";


class Count extends Component {

    constructor(props){
        super(props);

        this.state ={
            clicks: 0
        };

        this.handleClickIncrement = this.handleClickIncrement.bind(this);

    }


    handleClickIncrement() {
        let { clicks } = this.state; //store state
        let { step } = this.props; // store props
        this.setState({ clicks: clicks + step });
    }
    

    
    render() {

        let { clicks } = this.state;
        return <p onClick={ this.handleClickIncrement }>{ clicks }</p>;
    }


}
export default Count;
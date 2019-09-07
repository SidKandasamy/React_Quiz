import React, {Component} from "react";

class Hideme extends Component {

    constructor(props){
        super(props);


        this.state={
            clicks: false
        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
       
        this.setState ({ clicks: true });

    }

        render() {

            let { clicks } = this.state;
            let { children } = this.props;
           
            return (
             <button onClick={ this.handleClick }>{ clicks ? null : children }</button> 
            )
        };

    
}

    
export default Hideme

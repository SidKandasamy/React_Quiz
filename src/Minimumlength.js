import React, {Component} from "react";


class MinimumLength extends Component {

    constructor(props){
        super(props);

        this.state={input:"test value"};

        this.handleChange=this.handleChange.bind(this);

    }


    render(){
        return(

        
            <input 
                onChange={this.handleChange}
                className="form-control" 
                name={this.props.name} 
                value={this.state.input}
                />

        )}
    
}

export default MinimumLength;

import React, {Component} from "react";


class MinimumLength extends Component {

    constructor(props){
        super(props);

        this.state={
            input:"",
            
        };

        

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

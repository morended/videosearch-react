import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component{
    constructor(props){
        super(props);


    }
    render(){
        return(
           <input type="text" className="searchbox" onChange={(event)=>{return this.props.changeSearchTerm(event.target.value)}}></input>
        );
    }
}

export default SearchBar;
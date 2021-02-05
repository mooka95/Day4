import { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';



class MovieDetails extends  Component{
 
    render() {
        return <div>HIII</div>
    }
    

    componentDidMount(){
        this.props.getMoviesById(2);
        console.log(this.props)
    }

}

const mapReduxStateToComponentProps = (state)=>{
    console.log(state)
    return {
        movie:state.movie
    }
}
export default connect(mapReduxStateToComponentProps,actions)( MovieDetails)
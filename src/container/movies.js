import { Component } from "react";

import { connect } from 'react-redux';
import * as actions from '../actions';
class Movies extends Component {
    render(){
        return <div>
            <h2 className="text-center">God Father triology</h2>
            <button  onClick={()=>{
                this.props.getMovies();


            }}> GetMovies </button>
            {this.renderMovies(this.props)}
        </div>
    }

    renderMovies({mList}){
        if(mList){
            return mList.map((movie)=>{
                return(<div key={movie.id} className="alert alert-dark">
                    <p>Title:{movie.title}</p>
                    <p>Year:{movie.year}</p>
                </div>)
            })
        }
        return <p>
            No Movies Available
        </p>
    }
    componentDidMount(){
 
        console.log(this.props)

        
      
    }
    componentDidUpdate(){
        console.log('5- component updated with new state')
        console.log(this.props)
    }

}

const mapReduxStateToComponentProps = (state)=>{
    console.log(state)
    return {
        mList : state.moviesList
    }
}
export default connect(mapReduxStateToComponentProps,actions)(Movies)
import {movies} from './movies'
import {movieDetail} from './movieDetail'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    moviesList:movies,
    movie:movieDetail

})

export default rootReducer
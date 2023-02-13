import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

// const App = () => {
//     const [inputValue, setInputValue] = useState("");
//     const [results, setResult] = useState(null);

//     function handleClick(e) {}

//     function handleChange(e) {}

//     return (
//         <div id="main">
//             <form id="form">
//                 <input
//                     type="text"
//                     onChange={handleChange}
//                     value={inputValue}
//                     id="movie-input"
//                 ></input>
//                 <button id="button" onClick={handleClick}>
//                     Search
//                 </button>
//             </form>
//             <div id="result">
//                 {results &&
//                     results.map((movie) => (
//                         <div className="movie">{movie}</div>
//                     ))}
//             </div>
//         </div>
//     );
// };
class App extends React.Component{
    constructor(){
        super()
        this.state={
            inputValue: "",
            results: null
        }
    }
    handleClick=(e)=>{
        e.preventDefault()
        let matchedMovies = []
        movies.map(movie=>{
            if(movie.title.toLowerCase() === this.state.inputValue.toLowerCase())
                matchedMovies.push(movie.title)
        })
        this.setState({results: matchedMovies})
    }
    handleChange=(e)=>{
        this.setState({inputValue:e.target.value})
    }
    render(){
        return <div id="main">
        <form id="form">
            <input
                type="text"
                onChange={this.handleChange}
                value={this.state.inputValue}
                id="movie-input"
            ></input>
            <button id="button" onClick={this.handleClick}>
                Search
            </button>
        </form>
        <div id="result">
            {this.state.results &&
                this.state.results.map((movie) => (
                    <div className="movie">{movie}</div>
                ))}
        </div>
    </div>
    }
}

export default App;

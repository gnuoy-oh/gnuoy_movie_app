import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

// state를 사용하기 위해, class componenet를 사용하는데, 현재는 react hook를 사용하면서 class component가 필요하지 않다.
class App extends React.Component{

  state = {
    isLoading : true,
    movies : []
  }; 
  //async => 비동기? == JS 너는 axios를 시간이 필요해, 그래서 기다려야만 해 라는 명령 () ==> + await을 같이 써야 한다.
  getMovies = async () =>{
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // fetch : data를 fetch하는 방법 => axios : fetch 위에 있는 작은 layer
    // axios 속도가 느려서, componentDidMount를 기다리도록 명령을 해야 한다.

    // console.log(movies);
    // console 내에 data > data > movies를 확인할 수 있다.

    // console.log(movies.data.data.movies)
    // 를 하면 movies 리스트를 확인할 수 있다.df
    //이거를 ES6형태로 만들면 아래와 같다.
    // movies > data > data > movies 를 정의한다.
    const {
      data : {
        data : { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );

    this.setState({ movies , isLoading: false });
    // setState의 movies + axios에서 온 movies를 일컫는 말, movies가 실행되고 나면, isLoading:false 실행
  };

  // componentDidMount : component가 처음 render 됐다고 알려주는 것 , render가 실행되면서 getMovies 실행
  componentDidMount(){
    this.getMovies();
  }


  render(){
    const { isLoading, movies } = this.state;

    return ( 
    <section className="container"> 
    {/* JS 안에서는 class => className으로 작성해야 한다. */}
    { isLoading ? (
      <div className ="loader">
        <span className="loader_text">Loading...</span>
      </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )
    }
    </section>
   ) 
  }
}

export default App;


// Hellop

import React from 'react';
import PropTypes from 'prop-types';



const foodILike=[
  {
    id:1,
    name : "kimchi",
    image: "https://images.unsplash.com/photo-1550389636-ad25afa7ab44?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    rating : 2.5
  },
  {
    id:2,
    name : "Ramen",
    image: "https://images.unsplash.com/photo-1567328407940-e1fda962fa82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    rating : 5
  },
  {
    id:3,
    name : "strawberry",
    image: "https://images.unsplash.com/photo-1550389636-ad25afa7ab44?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    rating : 4.6
  },
  {
    id:4,
    name : "chocolate",
    image: "https://images.unsplash.com/photo-1567328407940-e1fda962fa82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    rating : 3.6
  }  
]

function Food({name, picture, rating}){
  return (<div>
    <h1>I Like {name}!</h1>
    <h4>{rating} /5.0</h4>
    <img src={picture} alt={name} />
  </div>
  )
}
// 작성이 잘 되고 있는지 확인, number , string, boolean, array, instanceOf,oneOf,oneOfType,arrayOf,objectOf.... 등 많음
// prop react type 검색하면 많다. aaa.propTypes 으로 타이핑해야 한다.

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
}

function App() {
  return (
  // {/* dish === Object */}
  <div>
      {foodILike.map(dish => (
        <Food
        key={dish.id} 
        name={dish.name}
        picture={dish.image}
        rating={dish.rating} />
        
      ))}
      {/* // 명시적으로 react에 key값을 줘야지 console에 에러가 나지 않는다. -> react 내부에서 사용하기 위한 목적  */}
      {/* <Food fav="Kimchi"/> */}
      {/* HTML 의 class=""와 비슷하다. JSX로 작성된 것으로*/}
      {/* food Component에 Kimchi라는 value로 prop(property) fav을 줬다. */}
      {/* food Component에 Kimchi라는 true(boolean)으로 prop(property) something을 줬다. */}
      {/* 어떻게 props = property 를 사용할까?*/}
      {/* 우선 누군가가 food component로 정보를 보내려고 하면, react는 이 모든 속성을 가져온다. */}
      {/* 그리고 food component의 argument(인자)로 속성을 넣을거다. */}
      {/* function Food(props)에서 props object 내부에는 fav가 있다. 때문에 function Food(props.fav) 로 Kimchi 출력을 할 수 있다. */}
      {/* 그치만, ES6 에서는 더 간결하게 작성할 수 있다. */}
      {/* function Food({fav}) === function Food(props.fav) */}
      {/*  */}
       {/* <Food fav="ramen" />
       <Food fav="STRAWBERRY" />
       <Food fav="kiwi" /> */}
    </div>
  );
}


export default App;


// Component 에서 Component로, children Component로 정보를 보내는 방법
//데이터가 있다고 (API) 가정을 해서 다시 작업을 하자
// map - array의 각 item에서 function 을 실행하는 array를 가지는 javascript function이며 그 function의 result 를 갖는 array 값을 가져온다.

// npm i prop-types 설치 : 내가 picture를 불러와야 하는데, 실수로 image로 입력하는 경우, 등 사람이 실수할 수 있는 부분에 대해서 바로잡아 주는 기능
// 내가 전달받은 props가, 내가 원하는 props인지를 확인해 주는 것 
// node.js에 무언가를 설치하는 방법 : npm install ~~~
// 모든 node.js를 설치하면 package.json에서 확인할 수 있다.
// 최상단에 import PropTypes from 'prop-types';
// state 

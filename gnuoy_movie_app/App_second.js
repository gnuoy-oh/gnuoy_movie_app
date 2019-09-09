import React from 'react';
import PropTypes from 'prop-types';





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


// 상단 내용을 class component으로 변경하기
// function 이 아니므로, return을 하지 않고, render를 한다. 
// React.Component 으로부터 확장된 App Component를 사용한다 는 선언
// react는 자동적으로 class Component 의 render method를 실행한다. 
class App extends React.Component{
  //  state 는 Object이고, Component의 data를 넣을 공간이 있고, 이 데이터는 변한다. 
  //  react는 render function 을 refresh 하지 않는다. 
  // 즉, 매번 state 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원한다는 말이다. === setState
  state = {
    count : 0
  }
  
  // JS
  // setState function -> react는 언제 setState를 호출할 지를 알고, 또한 내가 view를 refresh 하길 원하는 걸 알고 render function refresh 해준다.
  // setState를 호출하면 react는 state를 refresh하고, 또한 render function을 호출한다. 
  // html 개발자 도구를 확인하면, virtuslDOM을 가지고 있기 때문에, 빠르게 변경할 수 잇고, 깜박거리지도 않는다. 
  // setState 를 사용하지 않으면, 새 state와 함께 render function이 호출되지 않을 것이다.
  add = () => {
    // this.setState({count : this.state.count + 1});
     this.setState(current => ({count : current.count + 1}));
  }
  // JS
  minus = () =>{
    this.setState(current => ({count : current.count -1}));
  }
  // class Component
  render(){
    return <div>
      <h1>The Number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
  }
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

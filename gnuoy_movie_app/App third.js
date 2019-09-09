import React from 'react';
import PropTypes from 'prop-types';


function Food({name, picture, rating}){
  return (
  <div>
    <h1>I Like {name}!</h1>
    <h4>{rating} /5.0</h4>
    <img src={picture} alt={name} />
  </div>
  )
}

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
  //  react는 render function 을 refresh 하지 않는다. 즉, 매번 state 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원한다는 말이다.
  state = {
    count : 0
  }

  // JS
  // setState function -> react는 언제 setState를 호출할 지를 알고, 또한 내가 view를 refresh 하길 원하는걸 할고 render function refresh 해준다.
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

  //console로 확인하면, render된 후에, 보인다.
  // componentDidMount : component가 처음 render 됐다고 알려주는 것 
  componentDidMount(){
    console.log("componentDidMount");
  }
  // 즉, setState를 호출하면, component가 호출하고, 먼저 render를 호출한 다음에, 업데이트가 완료되었다고 말하면, componentDidUpdate가 실행된다!!
  // 버튼을 클릭하거나, 어떠한 동작을 발생하면 console 에서 나타난다.
  componentDidUpdate(){
    console.log("I Just Updated")
  }


  // class Component
  render(){
    console.log("I'm rendering");
    return <div>
      <h1>The Number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
  }
}

export default App;

// constructor() : JS에서 나오는 것 
// component가 mounting 될 때, component가 screen에 표시될 때, component가 website에 들어갈 때, constructor를 호출한다.
// 그 다음 render가 호출된다. 그 다음, componentDidMount()
// componentDidMount : component가 처음 render 됐다고 알려주는 것 
// componentDidUpdate : 버튼을 클릭하거나, 어떠한 동작을 발생하면 console 에서 나타난다.
// componentWillUnmount : component가 떠날 때 호출된다.다른 페이지로 가거나, 할 경우 

// mounting : 태어나는 것 
// updating : 업데이트 => add 혹은 minus를 클릭해서 state를 변경할 때, 그게 업데이트. 
// unmounting : component 죽는 거 ( 페이지를 바꿀 때, 교체할 경우 )


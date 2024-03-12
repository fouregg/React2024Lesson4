import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { Component } from 'react';

/* structures */

const user = {
    username: 'Testovichok',
    imageUrl: 'https://img.mobiuspace.com/image/aigc/3fcfc0bb01cbbdb5d39ade3ef35b8018_512_512.webp',
    imageSize: 250,
    name: 'Тест',
    last_name: 'Тестовый',
    gender: 1,
    city:'Москва',
    adress: 'Ул. Пушкина',
    build: 'дом Колотушкина'
}

const number = [1,2,3,4];
const list = [
  {
    title:'React',
    url:"https://react.org",
    author: "Test Testovich",
    count_like: 5,
    count_comments: 3,
    id: 1,
  },
  {
    title:'Redux',
    url:"https://redux.js.org",
    author: "Dan Abamov",
    count_like: 5,
    count_comments: 3,
    id: 1,
  },
];

const exponent = number.map(function (number) {
  return number * number;
});



function App(){
    return(
            <div className="App">
                <Search/>
            </div>
        );
}

class CountButton extends Component{
    constructor(props)
    {
        super(props);
        this.state = {count: this.props.count};
        console.log(this.props.count);
    };
   
    resetCount = () =>{
        this.setState({count:0});
    };

    addCount = () =>{
        this.setState({count: this.state.count + 1});
    };

    remCount = () =>{
        this.setState({count: this.state.count - 1});
    };

    render(){
        return(
            <>
                Count:{this.state.count}
                <button onClick={this.resetCount}>Reset</button>
                <button onClick={this.addCount}>+</button>
                <button onClick={this.remCount}>-</button>
            </>
        );
    };
}

function Profile()
{
    return(
        <div className="profile">
            <h1>{user.name}</h1>
            <img
                src={user.imageUrl}
                alt={'Photo by ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        <div class="col px-4 pb-4 pt-5">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {user.name + " " + user.last_name}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Пол</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {user.gender == 0 ? "Мужской" : "Женский"}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {user.city + ", " + user.adress + ", " + user.build }
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <CountButton count={10} />
                    </div>
                  </div>
                </div>
              </div>
             </div>
            
        </div>
    );
}
function Search(){
  const[searchTerm, setSearchTerm] = useState('');
  
  
  const searchCards = list.filter(function (item){
    return item.title.includes(searchTerm);
  });
  
  
  const handleChange = (event) =>
  {
    setSearchTerm(event.target.value);
  }
  return(
    <div>
      <h1>What I know</h1>
      <label htmlFor='search'>Search:</label>
      <input id="search" type='text' onChange={handleChange} style={{marginTop:"40px", marginBottom:"40px"}}></input>
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      <ListTechnologies list={searchCards}/>
    </div>
  )
}

const ListTechnologies = (props) =>{
  return(
    <div>


      <Row>
        {props.list.map(function(item)
        {
          return <Col key={item.id} style={{alignItems:'center'}}>
            <Card style={{ width: '18rem', background: '#332D2D'}}>
              <Card.Body>
                <Card.Title style={{color:'#FBFBFB'}}><a href={item.url}>{item.title}</a></Card.Title>
                <ListGroup variant="flush">
                <ListGroup.Item style={{background: '#332D2D', color:'#FBFBFB'}}>Author:{item.author}</ListGroup.Item>
                <ListGroup.Item style={{background: '#332D2D', color:'#FBFBFB'}}>Likes:{item.count_like}</ListGroup.Item>
                <ListGroup.Item style={{background: '#332D2D', color:'#FBFBFB'}}>Comments:{item.count_comments}</ListGroup.Item>
              </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        })}
      </Row>
    </div>
  );
}

export default App;
import React from 'react'
import axios from 'axios'
import User from './User'
import './App.css'
import { v4 as uuid } from 'uuid';


class App extends React.Component {
  
  state = {
    gitHubData: [], //initial states are empty
    gitHubFollowers: [],
    username: ''
  }

  

  componentDidMount(){
    console.log('App: Mount')
    axios
    .get('https://api.github.com/users/wberman27') //get intial user from github endpoint
    .then((res)=>{
      this.setState({gitHubData: res.data})
    })
    .catch((err)=>{
      console.log(err)
    })
    axios
    .get(`https://api.github.com/users/${this.state.gitHubData.username}/followers`)
    .then((res)=>{
    this.setState({gitHubFollowers: res.data})
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  
  handleChange = (e) =>{
    this.setState({username: e.target.value}) //set username state to value of input text
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.username}`)
    .then((res)=>{
      this.setState({gitHubData: res.data})
    })
    .catch((err)=>{
      console.log(err)
    })
    this.setState({username: ''}) //resets input field
  }

  render(){
    console.log('App: Render')
    return(
      <>
      <div className ='header'>
        <img className = 'headerImg' src='screenshot-images-pexels-com-photos-4584830-pexels-photo-4584830-jpeg-1615346076837.png' alt='code'/>
        <h1>GitHub Profiles</h1>
        <form onSubmit = {this.handleSubmit}>
          <input value = {this.state.username} onChange={this.handleChange} placeholder='enter username'></input>
          <button>Search</button>
        </form>
      </div>
      <div className = 'userContainer'>
        <User key = {uuid()} gitHubData = {this.state.gitHubData} gitHubFollowers = {this.state.gitHubFollowers}/>
      </div>
      </>
    )
  }
}



export default App;
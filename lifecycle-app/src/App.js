import React from 'react'
import axios from 'axios'
import User from './User'
import './App.css'


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
  }

  // componentDidUpdate(prevState){
  //   if(prevState.gitHubData !== this.state.gitHubData){
  //       axios
  //       .get(`https://api.github.com/users/${this.state.gitHubData.username}/followers`)
  //       .then((res)=>{
  //       console.log(res)
  //       this.setState({gitHubFollowers: res.data})
  //       })
  //       .catch((err)=>{
  //       console.log(err)
  //       })
  //   }
  // }
  
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
      <h1>GitHub Profiles</h1>
      <form onSubmit = {this.handleSubmit}>
        <input value = {this.state.username} onChange={this.handleChange} placeholder='enter username'></input>
        <button>Search</button>
      </form>
      <div className = 'userContainer'>
        <User gitHubData = {this.state.gitHubData} gitHubFollowers = {this.state.gitHubFollowers}/>
      </div>
      </>
    )
  }
}


export default App;
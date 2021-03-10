import React from 'react'
import axios from 'axios'
import User from './User'
import Followers from './Followers'

class App extends React.Component {

  state = {
    gitHubData: [],
    gitHubFollowers: [],
    username: ''
  }

  componentDidMount(){
    console.log('App: Mount')
    axios
    .get('https://api.github.com/users/wberman27')
    .then((res)=>{
      console.log(res)
      this.setState({gitHubData: res.data})
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  handleChange = (e) =>{
    this.setState({username: e.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.username}`)
    .then((res)=>{
      console.log(res)
      this.setState({gitHubData: res.data})
    })
    .catch((err)=>{
      console.log(err)
    })
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
      <User gitHubData = {this.state.gitHubData}/>
      </div>
      <div className = 'followersContainer'>
      <Followers gitHubFollowers = {this.state.gitHubFollowers}/>
      </div>
      </>
    )
  }
}


export default App;
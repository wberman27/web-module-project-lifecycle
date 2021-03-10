import React from 'react'
import Followers from './Followers'
import './App.css'

export default function User(props) {

    return(
        <>
        <div className = 'userCard'>
            <img width='200px' src={props.gitHubData.avatar_url} alt='github user profile avatar'/>
            <h2>{props.gitHubData.name}</h2>
            <p>{props.gitHubData.bio}</p>
            <p>Location: {props.gitHubData.location}</p>
            <a href={props.gitHubData.html_url} target='_blank'>Go to {props.gitHubData.name}'s GitHub Page</a>

        </div>
        <div className = 'followersContainer'>
            <h3>Followers: </h3>
            {props.gitHubFollowers.map(follower => (
                <Followers follower = {follower}/>
            ))}   
        </div>
        </>
    )
}
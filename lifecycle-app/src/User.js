import React from 'react'
import Followers from './Followers'
import './App.css'
import { v4 as uuid } from 'uuid';

export default function User(props) {

    return(
        <>
        <div className = 'userCard'>
            <img className = 'profileImg' width='200px' src={props.gitHubData.avatar_url} alt='github user profile avatar'/>
            <h2>{props.gitHubData.name}</h2>
            <p>{props.gitHubData.bio}</p>
            <p>Location: {props.gitHubData.location}</p>
            <a href={props.gitHubData.html_url} target='_blank'>Go to {props.gitHubData.login}'s GitHub Page</a>

        </div>
        <h3>Followers :</h3>
        <div className = 'followersContainer'>
            {props.gitHubFollowers.map(follower => (
                <Followers key = {uuid()} follower = {follower}/>
            ))}   
        </div>
        </>
    )
}
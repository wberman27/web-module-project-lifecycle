import React from 'react'
import './App.css'

export default function Followers(props) {
    console.log(props)
    return(
        <>
        <div className = 'followersCard'>
            <h3>Followers: </h3>
            <img width='200px' src={props.follower.avatar_url} alt='github Followers profile avatar'/>
            {/* <h2>{props.follower.name}</h2>
            <p>{props.follower.bio}</p>
            <p>Location: {props.follower.location}</p>
            <a href={props.follower.html_url} target='_blank'>Go to {props.follower.name}'s GitHub Page</a> */}

        </div>
        </>
    )
}
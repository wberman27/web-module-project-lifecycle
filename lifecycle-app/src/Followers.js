import React from 'react'
import './App.css'

export default function Followers(props) {
    console.log(props)
    return(
        <>
        <div className = 'followersCard'>
            <h2>{props.follower.login}</h2>
            <img className = 'followerImg' width='200px' src={props.follower.avatar_url} alt='github Followers profile avatar'/>
            <a href={props.follower.html_url} target='_blank'>{props.follower.login}'s GitHub Page</a>

        </div>
        </>
    )
}
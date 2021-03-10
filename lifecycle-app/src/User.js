import React from 'react'

export default function User(props) {
    console.log(props)
    return(
        <>
        <div className = 'userCard'>
            <img width='200px' src={props.gitHubData.avatar_url} alt='github user profile avatar'/>
            <h2>{props.gitHubData.name}</h2>
            <p>{props.gitHubData.bio}</p>
            <p>Location: {props.gitHubData.location}</p>
            <a href={props.gitHubData.html_url} target='_blank'>Take me to {props.gitHubData.name}'s github</a>

        </div>
        </>
    )
}
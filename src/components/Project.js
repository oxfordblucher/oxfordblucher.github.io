import React from 'react';

const Project = (props) => {
    const deployed = props.deployed;

    return (
        <div className='card col-6 mx-auto' key={props.key}>
            <h1 className='card-title'>{props.name}</h1>
            <p className='card-body'>
                Github: <a href={props.repoUrl}>{props.repoUrl}</a>
                <br />
                Deployed: {deployed
                    ? <a href={`https://oxfordblucher.github.io/${props.name}`}>Yes</a>
                    : 'No'
                }
            </p>
        </div>
    )
}

export default Project;
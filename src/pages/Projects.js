import React, { Component } from 'react';
import github from '../utils/github';
import Project from '../components/Project';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        github.getProjects().then(res => {
            console.log(res.data);
            this.setState({
                projects: res.data
            })
        })
            .catch(err => console.log(err));
    }

    render() {
        const projects = this.state.projects.map((project, i) => {
            return (
                <Project
                    key={i}
                    name={project.name}
                    repoUrl={project.html_url}
                    deployed={project.has_pages}
                />
            )
        })

        return (
            <div className='d-flex align-content-stretch flex-wrap'>
                {projects}
            </div>
        )
    }
}

export default Projects;
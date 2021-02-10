import { Octokit } from '@octokit/core';

const {REACT_APP_githubPAT} = process.env

const octokit = new Octokit({auth:REACT_APP_githubPAT});

export default {
    getProjects: () => {
        return octokit.request('GET /user/repos?sort=created&direction=desc')
    }
};
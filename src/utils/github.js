import { Octokit } from '@octokit/core';

const octokit = new Octokit({auth:'e4d8d73a501c4dd29cf8e8dc432f10a764885920'});

export default {
    getProjects: () => {
        return octokit.request('GET /user/repos?sort=created&direction=desc')
    }
};
import { Octokit } from '@octokit/core';

const octokit = new Octokit({auth:'54b06da3d5973a44d2dd8734122df8af4be16383'});

export default {
    getProjects: () => {
        return octokit.request('GET /user/repos?sort=created&direction=desc')
    }
};
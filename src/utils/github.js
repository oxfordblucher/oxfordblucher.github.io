import { Octokit } from '@octokit/core';

const octokit = new Octokit({auth:'685c01d24c82827f9d8799254a499a68ff327955'});

export default {
    getProjects: () => {
        return octokit.request('GET /user/repos?sort=created&direction=desc')
    }
};
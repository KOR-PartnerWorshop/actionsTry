const { Octokit } = require("@octokit/rest");
const core = require('@actions/core');

const octokit = new Octokit({
    auth: core.getInput('github_token'),
    userAgent: 'myApp v0.0.1',
    baseUrl: 'https://api.github.com'
    });

// GitHub 컨텍스트에서 현재 저장소 정보 가져오기
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/labels', {
    owner: owner,
    repo: repo,
    issue_number: core.getInput('issue_number'),
    labels: [
      'bug'
    ]
  });
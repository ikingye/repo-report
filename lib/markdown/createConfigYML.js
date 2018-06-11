var putCreateFile = require('./../bin/putCreateFile')
module.exports = (context, {owner, repo}) => {
  console.log('In createConfigYML')
  var content = Buffer.from(
    `# Configuration for weekly-digest - https://github.com/apps/weekly-digest \n
    publishDay: 1 \n
    canPublishIssues: true \n
    canPublishPullRequests: true \n
    canPublishContributors: true \n
  `).toString('base64')
  putCreateFile(context, {
    owner: owner,
    repo: repo,
    path: '.github/weekly-digest.yml',
    message: 'Added .github/weekly-digest.yml',
    content: content
  })
}
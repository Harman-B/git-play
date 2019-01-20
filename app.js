const repoURL = 'https://cc6116f4-cd7f-414f-bd3e-d5c1eac51148.mock.pstmn.io/repository';

var getCommits = () => {
  const commitsURL = 'https://cc6116f4-cd7f-414f-bd3e-d5c1eac51148.mock.pstmn.io/replay/1';
  let commits;

  fetch(commitsURL)
    .then(result => {
      //result is a prototype of response
      //result.json() is a promise
      //this is done to convet readable stream into an object
      return result.json();
    })
    .then(data => {
      //data is a prototype of object

      console.log(data);
      commits = data.commits;
      // console.log(commits);
      displayCommit(commits);
      // document.getElementById('commits').innerText = JSON.stringify(commits);
    })
    .catch(error => console.log(error));
}

getCommits();

var displayCommit = (commits) => {
  let html, newHtml;

  document.getElementById('numberOfCommits').innerText = commits.length;
  for (var i = 0; i < commits.length; i++) {

    html = '<p class="commitID"><strong>Commit ID:</strong> %id% </p><p class="commitMsg"><strong>Message:</strong> %message% </p><br>'
    newHtml = html.replace('%id', commits[i].id);
    newHtml = newHtml.replace('%message%', commits[i].message);

    document.querySelector('.commitDisplay').insertAdjacentHTML('beforeend', newHtml);
  }
};

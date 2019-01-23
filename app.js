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
      commits = data.commits;
      // console.log(commits);
      listCommits(commits);
      // document.getElementById('commits').innerText = JSON.stringify(commits);
    })
    .catch(error => console.log(error));
}

// var commits = getCommits();

var listCommits = (commits) => {
  console.log(commits);
  let html, newHtml;
  document.getElementById('numberOfCommits').innerText = commits.length;
  for (var i = 0; i < commits.length; i++) {
    html = '<p><button class="btn btn-info" onclick=commitDetails("%id%")><div>Commit:%sno%</div><div>%id%</div></button></p>';
    newHtml = html.replace('%sno%', i);
    newHtml = newHtml.replace('%id%', commits[i].id.slice(0,5));
    newHtml = newHtml.replace('%id%', commits[i].id.slice(0,5));
    document.querySelector('#commitDisplay').insertAdjacentHTML('beforeend', newHtml);
  }
};

var commitDetails = (id) => {
  console.log(id);
  console.log();
  // let html, newHtml;
  // document.getElementById('numberOfCommits').innerText = commits.length;
  // for (var i = 0; i < commits.length; i++) {
  //
  //   html = '<div class="commit"><p class="commitID"><strong>Commit ID:</strong> %id% </p><p class="commitMsg"><strong>Message:</strong> %message% </p><br></div>'
  //   newHtml = html.replace('%id', commits[i].id);
  //   newHtml = newHtml.replace('%message%', commits[i].message);
  //   commitBtn = ''
  //   document.querySelector('#commitDetails').insertAdjacentHTML('beforeend', newHtml);
  // }
};

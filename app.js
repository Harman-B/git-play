var username, repoList, commitList;

var getRepos = () => {
  username = document.getElementById('username').value;
  const url = `https://api.github.com/users/${username}/repos`;
  console.log(url);
  loadRepositories(url);
}

var getCommits = (number) => {
  const repoName = repoList[number].name;
  const urlRepo = `https://api.github.com/repos/${username}/${repoName}/commits`;
  console.log(urlRepo);
  fetch(urlRepo)
    .then(result => result.json())
    .then((data) => {
      commitList = data;
      let el = document.getElementById('commitCount');
      init(el);
      let list = document.getElementById("commitList");
      init(list);
      el.innerText = data.length;
      for (let i = 0; i < data.length; i++) {
        let sha = data[i].sha.slice(0, 5);
        let btn = document.createElement("BUTTON");
        btn.setAttribute("class", "btn btn-info btn-sm");
        btn.setAttribute("onClick", `getCommitDetails("${repoName}","${sha}")`);
        let content = document.createTextNode(`commit: ${i} #:${sha}`);
        btn.appendChild(content);
        list.appendChild(btn);
      }
    })
}

var getCommitDetails = (repo, sha) => {
  console.log(repo, sha);
  const urlCommit = `https://api.github.com/repos/${username}/${repo}/commits/${sha}`;
  console.log(urlCommit);
  fetch(urlCommit)
    .then(result => result.json())
    .then((data) => {
      commitDetails = data;
      let el = document.getElementById('commitDetails');
      init(el);
      let message = data.commit.message;
      let author = data.commit.author.name;
      let email = data.commit.author.email;
      let date = data.commit.author.date;
      let filesModified = data.files.length;
      let fileList = data.files;

      let html = `<div class="commit">Commit: <span class="data">%sha%</span>
                  </div><div>Commit Message: <span class="data">%message%</span>
                  </div><div class="">Date: <span class="data">%date%</span></div>
                  <div class="">Files modified: <span class="data">%filesModified%</span>
                  </div>`

      let newHtml = html.replace('%sha%', sha);
      newHtml = newHtml.replace('%message%', message);
      newHtml = newHtml.replace('%date%', date);
      newHtml = newHtml.replace('%filesModified%', filesModified);
      newHtml = newHtml.replace('%filesModified%', filesModified);

      el.insertAdjacentHTML('beforeend', newHtml);
    })
}

var loadRepositories = (url) => {
  fetch(url)
    .then(result => {
      console.log(result.headers.get('Link'));
      if (result.headers.get('Link')) {
        let linkHeader = result.headers.get('Link');
        if (linkHeader.includes('next')) {
          console.log('there is a next page');
          let url = getPageUrl(linkHeader, 'next');
          let btn = document.getElementById('next-repoList');
          btn.disabled = false;
          btn.setAttribute("onClick", `loadData('${url}')`);
        }
      }
      return result.json();
    })
    .then((data) => {

      repoList = data;
      let el = document.getElementById('repoCount');
      init(el);
      let list = document.getElementById("repoList");
      init(list);
      el.innerText = data.length;
      for (let i = 0; i < data.length; i++) {
        let repo = data[i].name;
        let btn = document.createElement("BUTTON");
        btn.setAttribute("class", "btn btn-info btn-sm");
        btn.setAttribute("onClick", `getCommits(${i})`);
        let content = document.createTextNode(repo);
        btn.appendChild(content);
        list.appendChild(btn);
      }
    })
    .catch(error => console.log(error))
}

var init = (el) => {
  el.innerText = '';
}

var getPageUrl = (header, nav) => {
  let links = header.split(', ');
  for (var i = 0; i < links.length; i++) {
    if (links[i].includes(nav)) {
      end = links[i].indexOf('>');
      var url = links[i].substring(1,end);
    }
  }
  return url;
}

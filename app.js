var username, repoList, commitList;

var getRepos = () => {
  username = document.getElementById('username').value;
  const url = `https://api.github.com/users/${username}/repos`;
  console.log(url);
  fetch(url)
    .then(result => result.json())
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

var getCommits = (number) => {
  const repoName = repoList[number].name;
  const urlRepo = `https://api.github.com/repos/${username}/${repoName}/commits`;
  console.log(number);
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
      console.log("Message:", data.commit.message);
      console.log("Author:", data.commit.author.name);
      console.log("Author email:", data.commit.author.email);
      console.log("Date:", data.commit.author.date);
      console.log("Files modified", data.files.length);
      let message = data.commit.message;
      let author = data.commit.author.name;
      let email = data.commit.author.email;
      let date = data.commit.author.date;
      let filesModified = data.files.length;
      let fileList = data.files;

      let html = `<div class="commit">Commit: <span class="data">%sha%</span>
                  </div><div>Commit Message: <br><span class="data">%message%</span>
                  </div><div class="">Date:<br><span class="data">%date%</span></div>
                  <div class="">Files modified:<br><span class="data">%filesModified%</span>
                  </div>`

      let newHtml = html.replace('%sha%', sha);
      newHtml = newHtml.replace('%message%', message);
      newHtml = newHtml.replace('%date%', date);
      newHtml = newHtml.replace('%filesModified%', filesModified);
      newHtml = newHtml.replace('%filesModified%', filesModified);

      el.insertAdjacentHTML('beforeend', newHtml);
    })
}

var init = (el) => {
  el.innerText = '';
}
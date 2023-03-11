_.hide("#buttons")
_.hide("#game")
games.forEach(data => {
  const params = new URLSearchParams(window.location.search)
  var paramgame = params.get("game")
  var cnsl = params.get("console")

  if (paramgame == data.id && cnsl == data.type) {
    if (data.type == "swf") {
      alert("this is a flash game")
      alert(data.title)
      _.hide("#homepage")
      _.show("#buttons")
      window.RufflePlayer = window.RufflePlayer || {};
      window.addEventListener("load", (event) => {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById("game");
        container.appendChild(player);
        player.load(data.file)
        _.show("#game")
      });
    } else {
      _.hide("#homepage")
      _.show("#buttons")
      EJS_player = '#game';
      EJS_core = params.get("console");
      EJS_biosUrl = "";
      EJS_gameUrl = data.file;
      EJS_pathtodata = 'ejs_data/';
      EJS_startOnLoaded = true
      _.show("#game")
    }
  }

})

games.forEach(data => {
  const container = _.get("#games");

  const div = document.createElement("div");
  const header = document.createElement("h1");
  const consolename = document.createElement("h1");
  consolename.classList = `caption`
  header.innerHTML = data.title;
  consolename.innerHTML = data.console;
  div.appendChild(header)
  div.appendChild(consolename)
  div.classList.add("card");
  
  div.dataset["type"] = data.type
  div.dataset["name"] = data.title
  div.dataset["id"] = data.id
  
  _.on(div, "click", () => {
    window.location.href = `/?console=${data.type}&game=${data.id}`
  })
  container.appendChild(div)
  
});
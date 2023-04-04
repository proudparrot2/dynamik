
_.hide("#game")
games.forEach(data => {
  const params = new URLSearchParams(window.location.search)
  var paramgame = params.get("game")
  var cnsl = params.get("console")
  if (cnsl == "swf") {
    if (paramgame == data.id) {
      _.hide("#homepage")
      window.RufflePlayer = window.RufflePlayer || {};
      window.addEventListener("load", (event) => {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById("game");
        container.appendChild(player);
        player.load(data.file)
        _.show("#game")
      });
    }
    
  } else {
    if (paramgame == data.id && cnsl == data.type) {
      alert("this is fun game")
      _.hide("#homepage")
      EJS_player = '#game';
      EJS_core = data.type;
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
  const fav = document.createElement("button")
  const play = document.createElement("button")
  
  div.classList.add("card");
  consolename.classList = `caption`
  play.classList.add("menubtn")
  fav.classList.add("menubtn")
  
  play.innerHTML = "Play"
  fav.innerHTML = "Favorite"
  header.innerHTML = data.title;
  consolename.innerHTML = data.console;
  
  div.appendChild(header)
  div.appendChild(consolename)
  /*div.appendChild(fav)
  div.appendChild(play)*/
  


  _.on(fav, "click", (event) => {
    alert("This is under construction")
  })

  _.on(div, "click", (event) => {
    window.location.href = `/?console=${data.type}&game=${data.id}`
  })
  
  div.dataset["type"] = data.type
  div.dataset["name"] = data.title
  div.dataset["id"] = data.id
  
  container.appendChild(div)
  
});
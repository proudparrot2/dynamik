togglebtns()

function help() {
  var repeat = true
  while (repeat == true) {
    var select = prompt("Welcome to the Dynamik help menu!\nWhat do you need help with?\n\n[1] Controls\n[2] Playing a game\n[3] Exit")
    if (select == "1") {
      alert("haha controls")
    } else if (select == "3") {
      repeat = false
    } else {
      alert("Invalid selection!")
    }
  }
}

function togglebtns() {
  var buttons = document.querySelectorAll(".button")
  buttons.forEach(btn => {
    if (btn.style.display == "block") {
      btn.style.display = "none"
    } else {
      btn.style.display = "block"
    }
  })

  _.show("#navbuttons")
  
}

var buttons = document.querySelectorAll(".navbutton")
var containers = document.querySelectorAll(".gamecategory")
/*containers.forEach(x => {
  x.style.display = "none"
})
_.get("#home").style.display = "block"
buttons.forEach(btn => btn.addEventListener("click", () => {
  
  buttons.forEach(btn => {
    btn.classList.remove("active")
  })
  
  btn.classList.add("active")
  containers.forEach(div => {
    div.style.display = "none"
  })
  _.get(`#${btn.dataset.page}`).style.display = "flex";
  
}))*/
buttons.forEach(btn => btn.addEventListener("click", function() {
  buttons.forEach(btn => btn.classList.remove("active"))
  btn.classList.add("active")
  if (btn.id == "home") {
    document.querySelectorAll(".card").forEach(function(card) { card.style.removeProperty("display") });
    return
  }
  
  document.querySelectorAll(".card").forEach(function(card) {
    
    card.style.display = "none"
    if (card.dataset.type == btn.dataset.page) {
      card.style.removeProperty("display")
    }
    if (btn.dataset.page == "home") {
      card.style.removeProperty("display")
    }
  })
}));


const searchInput = document.querySelector('#search');
const items = document.querySelectorAll('.card');

searchInput.addEventListener('input', function(event) {
  const query = searchInput.value.toLowerCase();
  
  items.forEach(function(item) {
    const title = item.querySelector('.card h1').textContent.toLowerCase();
    
    if (title.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
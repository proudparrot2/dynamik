var buttons = document.querySelectorAll(".navbutton")

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
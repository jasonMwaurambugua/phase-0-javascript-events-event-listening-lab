// Event listening lab
// Jason



function addingEventListener() {
}


return "clicked";

function preventingDefault() {
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented')
    return e.preventDefault()
  } else {
    console.log('Sinon')
  }
})
}

function stoppingPropagation(){
const divs = document.querySelectorAll('div');
function bubble(e) {
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
}



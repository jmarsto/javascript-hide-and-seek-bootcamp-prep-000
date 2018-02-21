function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(".target")
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + parseInt(`${n}`)).toString()
  }
}

function deepestChild() {
  const divs = document.getElementById('grnad-node').querySelectorAll('div')
  return divs[4].innerHTML
}
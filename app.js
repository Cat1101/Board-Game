const board = document.querySelector('#board')
const colors = ['#426bad', '#001f52', '#0e6343', '#005922', '#ab5b00', '#7a6c1c', '#690a00']
const SQUARES_NUMBER = 400
var squares;
var interval;
var isActivate = false

document.addEventListener('keydown', (e)=>{
  if(e.code === 'KeyE' && !isActivate){
    isActivate = true
    squares = document.querySelectorAll('.square')
    interval = setInterval(() => {
      const index = Math.floor(Math.random() * SQUARES_NUMBER)
      setColor(squares[index])

      clearSquares(index)
    }, 10);
  }else if(e.code === 'KeyE' && isActivate){
    clearInterval(interval)
    isActivate = false
  }
})

for(let i = 0; i<SQUARES_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    clearColor(square)
  })

  board.append(square)
}

function setColor(square){
  const color = getRandomColor()
  square.style.backgroundColor = color
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function clearColor(square){
  square.style.backgroundColor = '#1d1d1d'
  square.style.boxShadow = `0 0 2px #000000`
}

function getRandomColor(){
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

async function clearSquares(index){
  setTimeout(()=>{
    clearColor(squares[index])
  }, 700)
}
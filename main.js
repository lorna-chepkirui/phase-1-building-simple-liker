// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector( '#modal' )
       modal.className = 'hidden'
  
  let allHearts = document.querySelectorAll( '.like-glyph' )
  for(const eachHeart of allHearts){
    eachHeart.addEventListener('click', ()=>{
      mimicServerCall()
        .then((res)=>{
          if(eachHeart.innerText === EMPTY_HEART){
            eachHeart.className = 'activated-heart'
            eachHeart.innerText= FULL_HEART
          }
          else{
            eachHeart.className = ''
            eachHeart.innerText= EMPTY_HEART
          }
        } )
      .catch(()=>{setTimeout(()=> modal.className= '', 3000)
      
      } )
    })
  }




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

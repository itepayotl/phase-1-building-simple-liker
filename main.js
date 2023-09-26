// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll('li.like')
const errorModal = document.querySelector('#modal')
const likeHearts = document.querySelectorAll('.like-glyph')
for(const likeHeart of likeHearts){
  likeHeart.addEventListener('click', () => {
    if(likeHeart.textContent === FULL_HEART){
      likeHeart.textContent = EMPTY_HEART
      likeHeart.classList.remove('activated-heart')
    }
  })
}

likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', () => {
    mimicServerCall().then(() => {
      const likeHearts = likeButton.querySelector('.like-glyph')
      likeHearts.textContent = FULL_HEART
      likeHearts.classList.add('activated-heart')

    }).catch((error) => {
      errorModal.classList.remove('hidden')
      errorModal.querySelector('p#modal-message').textContent = error
      setTimeout(() => {
        errorModal.classList.add('hidden')
      }, 3000)
    })
  })
})

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

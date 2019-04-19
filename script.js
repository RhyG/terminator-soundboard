function removeTransition(e) {
    if (e.propertyName != 'transform') return; // if the key pressed hasn't been animated then return
    e.target.classList.remove('playing'); // remove the playing class from the element, reversing the transition
  }

  function playSound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) return; // if the key doesn't have a attributed audio sound exit the function

    key.classList.add('playing'); // add the class of playing to the key pressed, invoking the animations defined in the playing class in the CSS file
    audio.currentTime = 0; // set the time in the audio to zero so that it won't wait for the audio to stop playing before playing again allowing constant key pressing
    audio.play(); // plays the sound
  }

  const keys = Array.from(document.querySelectorAll('.key')); // create an array of all the elements with the key class
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // loop through the array and listen for the transition end event, callig the remove transition function
  window.addEventListener('keydown', playSound); // listen for any key press and call the playSound function on it
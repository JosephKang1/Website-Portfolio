document.addEventListener('DOMContentLoaded', function() {
    // Fade-in Effect
    let fadeElements = document.querySelectorAll('.fade-in-text');
  
    function fadeInElement(element) {
      element.classList.add('fade-in');
    }
  
    function isInViewport(element) {
      let rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function checkFadeElements() {
      fadeElements.forEach(function(element) {
        if (isInViewport(element)) {
          fadeInElement(element);
        }
      });
    }
  
    window.addEventListener('scroll', checkFadeElements);
    window.addEventListener('resize', checkFadeElements);
  
    // Typing Animation
    const text = "Hi My name is Joseph Kang";
    const delay = 150; // Milliseconds between each character
  
    let index = 0;
    let typingTimer; // Variable to hold the typing timer
    const typingElement = document.querySelector('.typing-text');
  
    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        typingTimer = setTimeout(type, delay);
      }
    }
  
    function checkTypingElementInView() {
      if (isInViewport(typingElement)) {
        type(); // Start typing if element is in view
      } else {
        clearTimeout(typingTimer); // Stop typing if element is out of view
      }
    }
  
    window.addEventListener('scroll', checkTypingElementInView);
    window.addEventListener('resize', checkTypingElementInView);
  
    // Toggle Button
    const toggleButton = document.getElementById("toggleButton");
    const textboxContainer = document.getElementById("textboxContainer");
    
    toggleButton.addEventListener("click", function() {
      textboxContainer.classList.toggle("hidden");
    });
});

  
// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  renderThanksMarquee(); // Render thanks immediately
  startMarqueeAnimation(); // Start animation immediately
});

// Render the thank you list in marquee
function renderThanksMarquee() {
  const marqueeContent = document.getElementById('marquee-content');
  
  thanksData.forEach(person => {
    const thanksItem = document.createElement('div');
    thanksItem.className = 'thanks-item';
    
    thanksItem.innerHTML = `
      <div class="thanks-name">${person.name}</div>
      <div class="thanks-role">${person.role}</div>
    `;
    
    marqueeContent.appendChild(thanksItem);
  });
  
  // Clone the items to ensure continuous scrolling
  const itemsClone = marqueeContent.innerHTML;
  marqueeContent.innerHTML += itemsClone;
}

// Start the marquee animation with a smoother effect
function startMarqueeAnimation() {
  const marqueeContent = document.getElementById('marquee-content');
  let position = 10; // Start at the bottom (100%)
  
  // Calculate total height for loop checking
  const contentHeight = marqueeContent.offsetHeight / 2;
  const containerHeight = document.querySelector('.marquee-container').offsetHeight;
  
  // Animation function
  function animate() {
    position -= 0.4; // Speed of the marquee
    
    // Reset position when all items have scrolled through
    if (position <= -100) {
      position = 100;
    }
    
    marqueeContent.style.transform = `translateY(${position}%)`;
    requestAnimationFrame(animate);
  }
  
  // Start animation immediately
  animate();
  
  // Pause animation on hover
  const marqueeContainer = document.querySelector('.marquee-container');
  marqueeContainer.addEventListener('mouseenter', () => {
    marqueeContent.style.animationPlayState = 'paused';
  });
  
  marqueeContainer.addEventListener('mouseleave', () => {
    marqueeContent.style.animationPlayState = 'running';
  });
}

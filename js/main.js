// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  renderDepartmentsGrid();
  renderPointsChart();
  renderRecentMatches();
  renderCeremonyDetails();
  renderDjPartyDetails();
});

// Render departments grid
function renderDepartmentsGrid() {
  const departmentsGrid = document.getElementById('departments-grid');
  
  // Sort departments by points (highest first)
  const sortedDepartments = [...departments].sort((a, b) => b.points - a.points);
  
  sortedDepartments.forEach((dept, index) => {
    const rank = index + 1;
    let rankLabel = '';
    
    // Assign medal emoji based on rank
    if (rank === 1) rankLabel = '🥇';
    else if (rank === 2) rankLabel = '🥈';
    else if (rank === 3) rankLabel = '🥉';
    
    const departmentCard = document.createElement('div');
    departmentCard.className = 'department-card';
    departmentCard.style.borderTop = `4px solid ${dept.color}`;
    
    departmentCard.innerHTML = `
      <div class="department-header" style="background-color: rgba(0,0,0,0.2)">
        <div class="department-name">${rankLabel} ${dept.name}</div>
        <div class="department-points" style="color: ${dept.color}">${dept.points}</div>
      </div>
      <div class="department-stats">
        <div class="stat-item">
          <span class="stat-label">Wins</span>
          <span class="stat-value">${dept.wins}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Losses</span>
          <span class="stat-value">${dept.losses}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Win Rate</span>
          <span class="stat-value">${Math.round((dept.wins / (dept.wins + dept.losses)) * 100)}%</span>
        </div>
      </div>
    `;
    
    departmentsGrid.appendChild(departmentCard);
  });
}

// Render points chart
function renderPointsChart() {
  const ctx = document.getElementById('pointsChart').getContext('2d');
  
  // Create labels and data from departments
  const labels = departments.map(dept => dept.name);
  const data = departments.map(dept => dept.points);
  const backgroundColor = departments.map(dept => dept.color);
  
  // Create gradient for the bars
  const gradients = departments.map((dept, index) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, dept.color);
    gradient.addColorStop(1, adjustColor(dept.color, -30));
    return gradient;
  });
  
  // Create the chart
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Points',
        data: data,
        backgroundColor: gradients,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#000',
          titleColor: '#fff',
          bodyColor: '#fff',
          titleFont: {
            size: 16,
            weight: 'bold'
          },
          bodyFont: {
            size: 14
          },
          padding: 15,
          cornerRadius: 8,
          displayColors: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)'
          },
          ticks: {
            color: '#b3b3b3'
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#b3b3b3'
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeOutQuart'
      }
    }
  });
  
  // Add animation to the chart
  animateChart(chart);
}

// Animate the chart
function animateChart(chart) {
  const data = chart.data.datasets[0].data;
  const originalData = [...data];
  
  // Reset data to 0
  chart.data.datasets[0].data = data.map(() => 0);
  chart.update('none');
  
  // Animate to the original values
  setTimeout(() => {
    const fps = 30;
    const duration = 1500;
    const frames = duration / 1000 * fps;
    let frame = 0;
    
    const animate = () => {
      if (frame < frames) {
        const progress = frame / frames;
        const easeProgress = easeOutCubic(progress);
        
        chart.data.datasets[0].data = originalData.map(value => Math.round(value * easeProgress));
        chart.update('none');
        
        frame++;
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, 500);
}

// Easing function for animations
function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

// Adjust color brightness
function adjustColor(color, amount) {
  // Convert hex to RGB
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);
  
  // Adjust brightness
  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));
  
  // Convert back to hex
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Render recent matches
function renderRecentMatches() {
  const recentMatchesGrid = document.getElementById('recent-matches-grid');
  
  // Display only the most recent 6 matches
  const displayMatches = recentMatches.slice(0, 6);
  
  displayMatches.forEach(match => {
    const matchCard = document.createElement('div');
    matchCard.className = 'match-card';
    
    // Get the winner department details
    const winner = departments.find(dept => dept.id === match.winner);
    
    matchCard.innerHTML = `
      <div class="match-header">
        <div class="match-sport">${match.sport}</div>
        <div class="match-date">${formatDate(match.date)}</div>
      </div>
      <div class="match-content">
        <div class="match-result">
          <div class="winner-label">Winner</div>
          <div class="winner-name" style="color: ${winner.color}">${winner.name}</div>
        </div>
        <div class="match-score">${match.score}</div>
      </div>
    `;
    
    recentMatchesGrid.appendChild(matchCard);
  });
}

// Render ceremony details
function renderCeremonyDetails() {
  const ceremonyDetailsElement = document.getElementById('ceremony-details');
  
  ceremonyDetailsElement.innerHTML = `
    <div class="ceremony-info">
      <div class="ceremony-header">
        <div class="ceremony-datetime">
          <div class="label">Date & Time</div>
          <div class="value">${ceremonyDetails.date}, ${ceremonyDetails.time}</div>
        </div>
        <div class="ceremony-venue">
          <div class="label">Venue</div>
          <div class="value">${ceremonyDetails.venue}</div>
        </div>
      </div>
      <div class="chief-guest">
        <div class="label">Chief Guest</div>
        <div class="value">${ceremonyDetails.chiefGuest}</div>
      </div>
    </div>
    <div class="agenda">
      <h3 class="agenda-title">Event Schedule</h3>
      <ul class="agenda-list">
        ${ceremonyDetails.agenda.map(item => `
          <li class="agenda-item">
            <div class="agenda-time">${item.time}</div>
            <div class="agenda-event">${item.event}</div>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

// Render DJ party details
function renderDjPartyDetails() {
  const djDetailsElement = document.getElementById('dj-details');
  
  djDetailsElement.innerHTML = `
    <div class="dj-content">
      <div class="dj-header">
        <div>
          <div class="label">Date & Time</div>
          <div class="value">${djPartyDetails.date}, ${djPartyDetails.time}</div>
        </div>
        <div>
          <div class="label">Venue</div>
          <div class="value">${djPartyDetails.venue}</div>
        </div>
      </div>
      <div class="dj-name">${djPartyDetails.dj}</div>
      <div class="dj-theme">${djPartyDetails.theme}</div>
      
      <div class="effects-list">
        <h3 class="effects-title">Special Effects</h3>
        <div class="effects-items">
          ${djPartyDetails.specialEffects.map(effect => `
            <div class="effect-item">${effect}</div>
          `).join('')}
        </div>
      </div>
      
      <div class="restrictions">
        <strong>Note:</strong> ${djPartyDetails.restrictions}
      </div>
    </div>
  `;
}

// Format date to a more readable format
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}
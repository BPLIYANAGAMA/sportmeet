// DOM Elements
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const standingsBody = document.getElementById('standings-body');
const recentMatchesContainer = document.getElementById('recent-matches');
const upcomingScheduleContainer = document.getElementById('upcoming-schedule');
let departmentChartInstance = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  renderStandings();
  renderChart();
  renderRecentMatches();
  renderSchedule();
});

// Tab Navigation
function setupTabs() {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and content sections
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content section
      button.classList.add('active');
      const tabId = button.dataset.tab;
      document.getElementById(tabId).classList.add('active');
      
      // If switching to chart tab, re-render chart (fixes sizing issues)
      if (tabId === 'chart') {
        setTimeout(() => {
          renderChart();
        }, 100);
      }
    });
  });
}

// Sort departments by points in descending order
function getSortedDepartments() {
  return [...departments].sort((a, b) => b.points - a.points);
}

// Render the standings table
function renderStandings() {
  const sortedDepartments = getSortedDepartments();
  
  standingsBody.innerHTML = '';
  
  sortedDepartments.forEach((dept, index) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>
        <div class="department-cell">
          <div class="dept-color" style="background-color: ${dept.color}"></div>
          ${dept.name}
        </div>
      </td>
      <td>${dept.points}</td>
      <td>${dept.wins}</td>
      <td>${dept.losses}</td>
    `;
    
    standingsBody.appendChild(row);
  });
}

// Render the chart using Chart.js
function renderChart() {
  const chartCanvas = document.getElementById('departmentChart');
  const ctx = chartCanvas.getContext('2d');
  
  // Destroy previous chart instance if it exists
  if (departmentChartInstance) {
    departmentChartInstance.destroy();
  }
  
  // Prepare data for the chart
  const deptNames = departments.map(dept => dept.name);
  const deptPoints = departments.map(dept => dept.points);
  const deptColors = departments.map(dept => dept.color);
  
  // Create new chart
  departmentChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: deptNames,
      datasets: [{
        label: 'Total Points',
        data: deptPoints,
        backgroundColor: deptColors,
        borderColor: deptColors.map(color => color),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Department Total Points',
          font: {
            size: 18
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          }
        }
      },
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      }
    }
  });
}

// Find department by ID
function findDepartment(id) {
  return departments.find(dept => dept.id === id);
}

// Format date to readable format
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

// Render recent matches
function renderRecentMatches() {
  recentMatchesContainer.innerHTML = '';
  
  recentMatches.forEach(match => {
    const departments = match.departments.map(deptId => findDepartment(deptId));
    
    const matchCard = document.createElement('div');
    matchCard.className = 'match-card';
    
    matchCard.innerHTML = `
      <div class="match-header">
        <span>${match.sport}</span>
        <span>${formatDate(match.date)}</span>
      </div>
      <div class="match-vs">
        ${departments.map((dept, index) => `
          <div class="department-badge" style="background-color: ${dept.color}20;">
            <div class="dept-color" style="background-color: ${dept.color}"></div>
            <span>${dept.name}</span>
            ${match.winner === dept.id ? '<span class="winner-badge">WINNER</span>' : ''}
          </div>
          ${index < departments.length - 1 ? '<span class="vs-text">VS</span>' : ''} <!-- Add VS text -->
        `).join('')}
      </div>
      <div class="match-score">${match.score}</div>
    `;
    
    recentMatchesContainer.appendChild(matchCard);
  });
}

// Render upcoming schedule
function renderSchedule() {
  upcomingScheduleContainer.innerHTML = '';
  
  upcomingSchedule.forEach(event => {
    const departments = event.departments.map(deptId => findDepartment(deptId));
    
    const scheduleCard = document.createElement('div');
    scheduleCard.className = 'schedule-card';
    
    scheduleCard.innerHTML = `
      <div class="schedule-header">
        <span>${event.sport}</span>
        <span>${formatDate(event.date)} - ${event.time}</span>
      </div>
      <div class="schedule-vs">
        ${departments.map((dept, index) => `
          <div class="department-badge" style="background-color: ${dept.color}20;">
            <div class="dept-color" style="background-color: ${dept.color}"></div>
            <span>${dept.name}</span>
          </div>
          ${index < departments.length - 1 ? '<span class="vs-text">VS</span>' : ''} <!-- Add VS text -->
        `).join('')}
      </div>
      <div class="venue">
        <strong>Venue:</strong> ${event.venue}
      </div>
    `;
    
    upcomingScheduleContainer.appendChild(scheduleCard);
  });
}

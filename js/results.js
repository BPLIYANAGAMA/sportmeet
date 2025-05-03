// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  renderAllMatches();
  setupEventListeners();
});

// Global variables to track filtering state
let currentDepartment = 'all';
let currentMatchup = 'all';
let searchTerm = '';

// Render all matches
function renderAllMatches() {
  const resultsGrid = document.getElementById('results-grid');
  resultsGrid.innerHTML = '';
  
  // Filter matches based on current filters
  const filteredMatches = filterMatches(recentMatches);
  
  if (filteredMatches.length === 0) {
    resultsGrid.innerHTML = `
      <div class="no-results">
        <p>No matches found for the selected filters.</p>
      </div>
    `;
    return;
  }
  
  // Render each match
  filteredMatches.forEach(match => {
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
    
    resultsGrid.appendChild(matchCard);
  });
}

// Filter matches based on department, matchup, and search term
function filterMatches(matches) {
  return matches.filter(match => {
    // Filter by search term
    if (searchTerm && !match.sport.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by department
    if (currentDepartment !== 'all' && !match.departments.includes(currentDepartment)) {
      return false;
    }
    
    // Filter by matchup
    if (currentMatchup !== 'all') {
      const matchupDepts = currentMatchup.split('-');
      
      // Check if all departments in the matchup are in the match
      const allDepartmentsMatch = matchupDepts.every(dept => match.departments.includes(dept));
      
      // Check if the match only contains the departments in the matchup
      const onlyMatchupDepartments = match.departments.length === matchupDepts.length && 
        match.departments.every(dept => matchupDepts.includes(dept));
      
      if (!(allDepartmentsMatch && onlyMatchupDepartments)) {
        return false;
      }
    }
    
    return true;
  });
}

// Setup event listeners for filters
function setupEventListeners() {
  // Department filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Update current department
      currentDepartment = this.dataset.department;
      
      // Re-render matches
      renderAllMatches();
    });
  });
  
  // Matchup select
  const matchupSelect = document.getElementById('matchup-select');
  matchupSelect.addEventListener('change', function() {
    currentMatchup = this.value;
    renderAllMatches();
  });
  
  // Search input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function() {
    searchTerm = this.value;
    renderAllMatches();
  });
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
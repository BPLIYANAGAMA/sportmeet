// ===== SPORTS DATA =====
// This file contains all the data for the sports meet
// You can manually modify this file to update scores, matches, etc.

// Department data with colors, points, and statistics
 const departments = [
  {
    id: 'civil',
    name: 'Civil',
    color: '#e53e3e', // Red
    points: 230,
    wins: 0,
    losses: 0
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    color: '#3b82f6', // Light blue
    points: 200,
    wins: 0,
    losses: 0
  },
  {
    id: 'electrical',
    name: 'Electrical',
    color: '#10b981', // Light green
    points: 230,
    wins: 0,
    losses: 0
  }
];

// Recent matches data
const recentMatches = [
   {
    id: 1,
    date: '2025-04-30',
    sport: 'Womens Table Tennis',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'electrical',
    score: 'Electrical 50 - Civil 20 - Mechanical 30' // Score format for three departments
  },
   {
    id: 2,
    date: '2025-04-30',
    sport: 'Womens Chess',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'civil',
    score: 'Electrical 30 - Civil 50 - Mechanical 20' // Score format for three departments
  },
   {
    id: 3,
    date: '2025-04-30',
    sport: 'Womens Carrom',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'electrical',
    score: 'Electrical 100 - Civil 80 - Mechanical 50' // Score format for three departments
  },
   {
    id: 4,
    date: '2025-04-29',
    sport: 'Male Carrom',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'mechanical',
    score: 'Electrical 50 - Civil 80 - Mechanical 100' // Score format for three departments
  },
];

// Upcoming schedule data
const upcomingSchedule = [
  {
    id: 1,
    date: '2025-05-02',
    time: '13:00-18:00',
    sport: 'Cricket',
    departments: ['civil', 'electrical', 'mechanical'], // Supports three departments
    venue: 'Ground'
  },
  {
    id: 2,
    date: '2025-05-02',
    time: '13:00-22:00',
    sport: 'Badmintton Finals',
    departments: ['civil', 'electrical', 'mechanical'], // Supports three departments
    venue: 'Ground'
  },
  
];

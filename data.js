// ===== SPORTS DATA =====
// This file contains all the data for the sports meet
// You can manually modify this file to update scores, matches, etc.

// Department data with colors, points, and statistics
 const departments = [
  {
    id: 'civil',
    name: 'Civil',
    color: '#e53e3e', // Red
    points: 80,
    wins: 0,
    losses: 0
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    color: '#3b82f6', // Light blue
    points: 100,
    wins: 0,
    losses: 0
  },
  {
    id: 'electrical',
    name: 'Electrical',
    color: '#10b981', // Light green
    points: 50,
    wins: 0,
    losses: 0
  }
];

// Recent matches data
const recentMatches = [
  {
    id: 1,
    date: '2025-05-15',
    sport: 'Football',
    department1: 'electrical',
    department2: 'civil',
    winner: 'civil',
    score: 'Mechanical 35 Points'
  },
];

// Upcoming schedule data
const upcomingSchedule = [
  {
    id: 1,
    date: '2025-04-29',
    time: '14:00-22:00',
    sport: 'Chess',
    department1: 'civil',
    department2: 'civil',
    venue: '107'
  },
  {
    id: 2,
    date: '2025-04-29',
    time: '14:00-22:00',
    sport: 'Chess',
    department1: 'mechanical',
    department2: 'mechanical',
    venue: '107'
  },
  {
    id: 3,
    date: '2025-04-29',
    time: '14:00-22:00',
    sport: 'Chess',
    department1: 'electrical',
    department2: 'electrical',
    venue: '107'
  },
];

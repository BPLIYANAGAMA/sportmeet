// ===== SPORTS DATA =====
// This file contains all the data for the sports meet
// You can manually modify this file to update scores, matches, etc.

// Department data with colors, points, and statistics
const departments = [
  {
    id: 'civil',
    name: 'Civil',
    color: '#e53e3e', // Red
    points: 900,
    wins: 6,
    losses: 10
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    color: '#3b82f6', // Light blue
    points: 960,
    wins: 7,
    losses: 9
  },
  {
    id: 'electrical',
    name: 'Electrical',
    color: '#10b981', // Light green
    points: 780,
    wins: 3,
    losses: 13
  }
];

// Recent matches data
const recentMatches = [
{
    id: 1,
    date: '2025-05-02',
    sport: 'Male Badminton duo',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'mechanical',
    score: 'Electrical 50 - Civil 80 - Mechanical 100' // Score format for three departments
  },
{
    id: 1,
    date: '2025-05-02',
    sport: 'Male Badminton',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'mechanical',
    score: 'Electrical 30 - Civil 20 - Mechanical 50' // Score format for three departments
  },
{
    id: 1,
    date: '2025-05-02',
    sport: 'Male TT duo',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'mechanical',
    score: 'Electrical 80 - Civil 50 - Mechanical 100' // Score format for three departments
  },
{
    id: 1,
    date: '2025-05-02',
    sport: 'Female Cricket',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'mechanical',
    score: 'Electrical 50 - Civil 80 - Mechanical 100' // Score format for three departments
  },
{
    id: 1,
    date: '2025-05-02',
    sport: 'Female Badminton duo',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'mechanical',
    score: 'Electrical 80 - Civil 50 - Mechanical 100' // Score format for three departments
  },
{
    id: 1,
    date: '2025-05-01',
    sport: 'Female Badminton',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'mechanical',
    score: 'Electrical 30 - Civil 20 - Mechanical 50' // Score format for three departments
  },
{
    id: 2,
    date: '2025-05-01',
    sport: 'Male Volleyball',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'civil',
    score: 'Electrical 80 - Civil 100 - Mechanical 50' // Score format for three departments
  },
{
    id: 3,
    date: '2025-05-01',
    sport: 'Female Volleyball',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'civil',
    score: 'Electrical 50 - Civil 100 - Mechanical 80' // Score format for three departments
  },
{
    id: 4,
    date: '2025-05-01',
    sport: 'Shot Put Male',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'civil',
    score: 'Electrical 30 - Civil 70 - Mechanical 00' // Score format for three departments
  },
{
    id: 5,
    date: '2025-05-01',
    sport: 'Shot Put Female',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'mechanical',
    score: 'Electrical 00 - Civil 30 - Mechanical 70' // Score format for three departments
  },
{
    id: 6,
    date: '2025-05-01',
    sport: 'TT Single Male',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'electrical',
    score: 'Electrical 50 - Civil 20 - Mechanical 30' // Score format for three departments
  },
{
    id: 7,
    date: '2025-05-01',
    sport: 'Chess Male',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'civil',
    score: 'Electrical 20 - Civil 50 - Mechanical 30' // Score format for three departments
  },
   {
    id: 8,
    date: '2025-04-30',
    sport: 'Womens Table Tennis',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'electrical',
    score: 'Electrical 50 - Civil 20 - Mechanical 30' // Score format for three departments
  },
   {
    id: 9,
    date: '2025-04-30',
    sport: 'Womens Chess',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'civil',
    score: 'Electrical 30 - Civil 50 - Mechanical 20' // Score format for three departments
  },
   {
    id: 10,
    date: '2025-04-30',
    sport: 'Womens Carrom',
    departments: ['electrical', 'civil', 'mechanical'], // Supports three departments
    winner: 'electrical',
    score: 'Electrical 100 - Civil 80 - Mechanical 50' // Score format for three departments
  },
   {
    id: 11,
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

// Thanks data for the thank you page
const thanksData = [
  { name: "President", role: "HNDE Student Associaton" },
  { name: "Coordinator", role: "Sports Committee" },
  { name: "Coordinator", role: "Media Committee" },
  { name: "Members", role: "Sports Committee" },
  { name: "Members", role: "Media Committee" },
  { name: "Students of All Batches", role: "All Batches" },
  { name: "Bimsara Liyanagama(34th Batch)", role: "Web Developer" },
];

// Ceremony Details
const ceremonyDetails = {
  date: "May 3th, 2025",
  time: "2:00 PM",
  venue: "HNDE Play Ground",
  chiefGuest: "Director General of SLIATE",
  agenda: [
    { time: "2:00 PM-2:10 PM", event: "Lighting the Oil Lamp" },
    { time: "2:10 PM-2:12 PM", event: "2 Minutes Silence" },
    { time: "2:12 PM-2:15 PM", event: "Siging the Anthem of the Student Heroes" },
    { time: "2:10 PM-2:15 PM", event: "Sub Secretary's Speach" },
    { time: "2:15 PM-2:20 PM", event: "Speach of the Director General" },
    { time: "2:20 PM-2:25 PM", event: "Speach of the Director" },
    { time: "2:25 PM-2:30 PM", event: "Speach of the President of HNDESA" },
    { time: "2:25 PM-2:30 PM", event: "Speach of the Demonstrator" },
    { time: "2:30 PM-3:10 PM", event: "Certificate Awarding" },
    { time: "3:10 PM-3:15 PM", event: "Thank you Speach by the Coordinator of Sport Committee" },
    { time: "3:15 PM-3:15 PM", event: "End of the Ceremony" },
  ]
};

// DJ Party Details
const djPartyDetails = {
  date: "May 3th, 2025",
  time: "7:30 PM",
  venue: "HNDE Play Ground",
  dj: "DJ Rhythm Master",
  theme: "Neon Glow",
  specialEffects: [
    "Laser Light Show",
    "Smoke Machines",
    "LED Dance Floor"
  ],
  restrictions: "Everyone must Participate at 7:30"
};

export interface Challenge {
  id: string;
  title: string;
  department: string;
  location: string;
  category: string;
  status: 'Open for Solutions' | 'Under Evaluation' | 'Pilot in Progress';
  description: string;
}

export const mockChallenges: Challenge[] = [
  {
    id: 'c1',
    title: 'Smart Water Leakage Detection',
    department: 'Chennai Metropolitan Water Supply',
    location: 'Tamil Nadu',
    category: 'Water Management',
    status: 'Open for Solutions',
    description: 'Develop an affordable solution to detect and reduce water loss in municipal pipelines.'
  },
  {
    id: 'c2',
    title: 'Intelligent Waste Segregation',
    department: 'Urban Local Body',
    location: 'Tamil Nadu',
    category: 'Waste Management',
    status: 'Open for Solutions',
    description: 'Improve source-level waste segregation using an efficient and scalable technology solution.'
  },
  {
    id: 'c3',
    title: 'Remote Public Health Monitoring',
    department: 'Public Health Department',
    location: 'India',
    category: 'Healthcare',
    status: 'Open for Solutions',
    description: 'Enable efficient monitoring of selected public-health indicators through an accessible digital solution.'
  },
  {
    id: 'c4',
    title: 'AI-Driven Urban Traffic Flow Optimization',
    department: 'Directorate of Urban Land Transport',
    location: 'Karnataka',
    category: 'Smart Cities',
    status: 'Open for Solutions',
    description: 'Seeking computer vision and AI algorithms to dynamically adapt traffic signal timers and alleviate peak congestion.'
  },
  {
    id: 'c5',
    title: 'Automated Crop Pest & Disease Early Warning',
    department: 'Department of Agriculture & Farmers Welfare',
    location: 'Gujarat',
    category: 'Agriculture',
    status: 'Under Evaluation',
    description: 'Deploying drone imagery and mobile edge AI to diagnose crop infestations before wide regional spread.'
  },
  {
    id: 'c6',
    title: 'Emergency Response & Incident Dispatch Platform',
    department: 'State Disaster Management Authority',
    location: 'Delhi',
    category: 'Public Safety',
    status: 'Open for Solutions',
    description: 'Integrating multi-agency emergency communications into a unified real-time dashboard for rapid first responder dispatch.'
  },
  {
    id: 'c7',
    title: 'Decentralized Solar Cold Storage for Perishables',
    department: 'State Agricultural Marketing Board',
    location: 'Maharashtra',
    category: 'Agriculture',
    status: 'Pilot in Progress',
    description: 'Low-cost, solar-powered modular micro-cold storage solutions for smallholder farmers to curb post-harvest losses.'
  },
  {
    id: 'c8',
    title: 'Rural Telemedicine Connectivity Suite',
    department: 'Ministry of Health & Family Welfare',
    location: 'Madhya Pradesh',
    category: 'Healthcare',
    status: 'Under Evaluation',
    description: 'Developing low-bandwidth diagnostic and video consultation tools tailored for Primary Health Centres.'
  },
  {
    id: 'c9',
    title: 'Smart Municipal Drainage & Flood Detection',
    department: 'Municipal Corporation',
    location: 'Maharashtra',
    category: 'Water Management',
    status: 'Open for Solutions',
    description: 'IoT sensor grid to monitor stormwater drainage capacity and provide automated alerts during severe monsoon surges.'
  }
];

export interface Startup {
  id: string;
  name: string;
  industry: string;
  location: string;
  description: string;
  solutionAreas: string[];
  isVerified: boolean;
}

export const mockStartups: Startup[] = [
  {
    id: 's1',
    name: 'AquaSmart Systems',
    industry: 'Cleantech',
    location: 'Chennai, Tamil Nadu',
    description: 'Developing acoustic sensors and AI models for identifying pipe anomalies and preventing non-revenue water loss.',
    solutionAreas: ['Water Management', 'IoT', 'AI'],
    isVerified: true
  },
  {
    id: 's2',
    name: 'CureConnect',
    industry: 'Healthtech',
    location: 'Hyderabad, Telangana',
    description: 'Building offline-first diagnostic interfaces that sync over 2G/3G networks, tailored for rural environments.',
    solutionAreas: ['Public Healthcare', 'Mobile Apps', 'Data Sync'],
    isVerified: true
  },
  {
    id: 's3',
    name: 'UrbanFlow AI',
    industry: 'Mobility',
    location: 'Mumbai, Maharashtra',
    description: 'Real-time computer vision analytics for traffic light optimization and emergency vehicle prioritization.',
    solutionAreas: ['Smart Cities', 'Computer Vision', 'Mobility'],
    isVerified: false
  },
  {
    id: 's4',
    name: 'EcoSort Robotics',
    industry: 'Waste Management',
    location: 'Ahmedabad, Gujarat',
    description: 'Modular conveyor-belt robots that use spectroscopy and computer vision to segregate dry waste with 95% accuracy.',
    solutionAreas: ['Waste Management', 'Robotics', 'Hardware'],
    isVerified: true
  }
];

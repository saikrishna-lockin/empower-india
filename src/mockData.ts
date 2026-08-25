export interface Challenge {
  id: string;
  title: string;
  department: string;
  location: string;
  category: string;
  status: 'Open' | 'Evaluating' | 'Closed';
  description: string;
}

export const mockChallenges: Challenge[] = [
  {
    id: 'c1',
    title: 'AI for Traffic Optimization',
    department: 'Ministry of Road Transport and Highways',
    location: 'New Delhi, Delhi',
    category: 'Smart Cities',
    status: 'Open',
    description: 'Seeking innovative AI-driven solutions to predict and optimize traffic flow at major intersections in metropolitan areas during peak hours.'
  },
  {
    id: 'c2',
    title: 'Smart Leakage Detection',
    department: 'Ministry of Jal Shakti',
    location: 'Bengaluru, Karnataka',
    category: 'Water Management',
    status: 'Open',
    description: 'Looking for cost-effective IoT sensors and predictive analytics to detect and prevent leakages in urban water distribution networks.'
  },
  {
    id: 'c3',
    title: 'Telemedicine Rural Outreach',
    department: 'Ministry of Health and Family Welfare',
    location: 'Bhopal, Madhya Pradesh',
    category: 'Public Healthcare',
    status: 'Evaluating',
    description: 'A challenge to develop low-bandwidth telemedicine platforms capable of connecting rural primary health centers with specialized urban hospitals.'
  },
  {
    id: 'c4',
    title: 'Automated Solid Waste Sorting',
    department: 'Ministry of Housing and Urban Affairs',
    location: 'Pune, Maharashtra',
    category: 'Waste Management',
    status: 'Open',
    description: 'Deploying robotics and machine vision to automatically sort municipal solid waste at scale in decentralized processing facilities.'
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

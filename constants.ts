
import React from 'react';
import type { NavigationStructure, PhaseKey } from './types';

export const PHASES: PhaseKey[] = ['Diagnose', 'Design', 'Pilot', 'Scale'];

export const NAVIGATION_MAP: NavigationStructure = {
  Diagnose: ['Overview', 'Data', 'Surveys', 'Interviews', 'Studies', 'Model'],
  Design: ['Workshops', 'Prototypes', 'Roadmap', 'Blueprints', 'Testing'],
  Pilot: ['Planning', 'Execution', 'Monitoring', 'Feedback', 'Reporting'],
  Scale: ['Deployment', 'Training', 'Adoption', 'Metrics', 'Optimization'],
};

export const TILE_DATA = [
  {
    title: 'Org Chart',
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    title: 'Employees',
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2m-8-2a3 3 0 005.356-1.857M17 20H5m12 0v-2m0 2h-5m-7 0H5v-2a3 3 0 015.356-1.857M5 20v-2m7-10a3 3 0 01-6 0 3 3 0 016 0z"
  },
  {
    title: 'Policies',
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    title: 'Board Setup',
    iconPath: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
  },
  {
    title: 'Business Mission',
    iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z||M12 21a9 9 0 100-18 9 9 0 000 18z" // Changed to string representation for simplicity in constants, specific rendering logic needed for multi-path
  }
];

export const PROJECT_DATA = [
  { title: 'Q3 Financial Review Automation', progress: 40 },
  { title: 'New CRM Platform Integration', progress: 85 },
  { title: 'Employee Wellness Program Launch', progress: 25 },
  { title: '2025 Strategic Planning', progress: 60 },
];

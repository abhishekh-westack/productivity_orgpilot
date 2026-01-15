
import type { NavigationStructure, PhaseKey } from './types';

export const PHASES: PhaseKey[] = ['Diagnose', 'Design', 'Pilot', 'Scale'];

export const NAVIGATION_MAP: NavigationStructure = {
  Diagnose: ['Overview', 'Data', 'Surveys', 'Interviews', 'Studies', 'Model'],
  Design: ['Workshops', 'Prototypes', 'Roadmap', 'Blueprints', 'Testing'],
  Pilot: ['Planning', 'Execution', 'Monitoring', 'Feedback', 'Reporting'],
  Scale: ['Deployment', 'Training', 'Adoption', 'Metrics', 'Optimization'],
};

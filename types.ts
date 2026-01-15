
export type PhaseKey = 'Diagnose' | 'Design' | 'Pilot' | 'Scale';

export interface NavigationStructure {
  Diagnose: string[];
  Design: string[];
  Pilot: string[];
  Scale: string[];
}

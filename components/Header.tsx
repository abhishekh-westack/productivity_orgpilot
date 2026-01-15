
import React from 'react';
import type { PhaseKey } from '../types';

interface HeaderProps {
  phases: PhaseKey[];
  activePhase: PhaseKey;
  onPhaseChange: (phase: PhaseKey) => void;
}

export const Header: React.FC<HeaderProps> = ({ phases, activePhase, onPhaseChange }) => {
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
           <span className="text-xl font-bold ml-2 text-brand-text">Productivity</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {phases.map((phase) => (
              <button
                key={phase}
                onClick={() => onPhaseChange(phase)}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                  activePhase === phase
                    ? 'text-brand-primary'
                    : 'text-brand-text-secondary hover:text-brand-text'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

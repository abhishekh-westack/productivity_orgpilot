
import React from 'react';
import type { PhaseKey } from '../types';

interface HeaderProps {
  phases: PhaseKey[];
  activePhase: PhaseKey;
  onPhaseChange: (phase: PhaseKey) => void;
}

export const Header: React.FC<HeaderProps> = ({ phases, activePhase, onPhaseChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {phases.map((phase) => (
              <button
                key={phase}
                onClick={() => {
                  onPhaseChange(phase);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activePhase === phase
                    ? 'text-brand-primary bg-brand-secondary'
                    : 'text-brand-text-secondary hover:text-brand-text hover:bg-gray-50'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

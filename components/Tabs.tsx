
import React from 'react';

interface TabsProps {
  submodules: string[];
  activeSubmodule: string;
  onSubmoduleChange: (submodule: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ submodules, activeSubmodule, onSubmoduleChange }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 md:border-t-0">
      <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto py-2">
        {submodules.map((submodule) => (
          <button
            key={submodule}
            onClick={() => onSubmoduleChange(submodule)}
            className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-all duration-200 relative ${
              activeSubmodule === submodule
                ? 'text-brand-primary'
                : 'text-brand-text-secondary hover:text-brand-text'
            }`}
          >
            {submodule}
            {activeSubmodule === submodule && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

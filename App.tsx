
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { Content } from './components/Content';
import { NAVIGATION_MAP, PHASES } from './constants';
import type { PhaseKey } from './types';

const App: React.FC = () => {
  const [activePhase, setActivePhase] = useState<PhaseKey>(PHASES[0]);
  const [activeSubmodule, setActiveSubmodule] = useState<string>(NAVIGATION_MAP[activePhase][0]);

  // When the primary phase changes, reset the secondary tab to the first item of the new phase.
  useEffect(() => {
    setActiveSubmodule(NAVIGATION_MAP[activePhase][0]);
  }, [activePhase]);

  return (
    <div className="min-h-screen flex flex-col text-brand-text">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <Header
          phases={PHASES}
          activePhase={activePhase}
          onPhaseChange={setActivePhase}
        />
        <Tabs
          submodules={NAVIGATION_MAP[activePhase]}
          activeSubmodule={activeSubmodule}
          onSubmoduleChange={setActiveSubmodule}
        />
      </header>
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Content key={`${activePhase}-${activeSubmodule}`} phase={activePhase} submodule={activeSubmodule} />
      </main>
    </div>
  );
};

export default App;

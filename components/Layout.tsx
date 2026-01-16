
import React, { useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Tabs } from './Tabs';
import { PHASES, NAVIGATION_MAP } from '../constants';
import type { PhaseKey } from '../types';

export const Layout: React.FC = () => {
    const { phase, submodule } = useParams<{ phase: string; submodule: string }>();
    const navigate = useNavigate();

    // Validate phase and submodule, default to first phase if invalid
    const activePhase = (PHASES.includes(phase as PhaseKey) ? phase : PHASES[0]) as PhaseKey;
    const activeSubmodule = submodule || NAVIGATION_MAP[activePhase][0];

    // Effect to handle navigation or validation if needed
    useEffect(() => {
        if (!phase || !submodule) {
            navigate(`/app/${activePhase}/${activeSubmodule}`, { replace: true });
        }
    }, [phase, submodule, activePhase, activeSubmodule, navigate]);


    const handlePhaseChange = (newPhase: PhaseKey) => {
        const defaultSubmodule = NAVIGATION_MAP[newPhase][0];
        navigate(`/app/${newPhase}/${defaultSubmodule}`);
    };

    const handleSubmoduleChange = (newSubmodule: string) => {
        navigate(`/app/${activePhase}/${newSubmodule}`);
    };

    return (
        <div className="min-h-screen flex flex-col text-brand-text">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <Header
                    phases={PHASES}
                    activePhase={activePhase}
                    onPhaseChange={handlePhaseChange}
                />
                <Tabs
                    submodules={NAVIGATION_MAP[activePhase]}
                    activeSubmodule={activeSubmodule}
                    onSubmoduleChange={handleSubmoduleChange}
                />
            </header>
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet context={{ phase: activePhase, submodule: activeSubmodule }} />
            </main>
        </div>
    );
};

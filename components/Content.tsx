
import React from 'react';
import type { PhaseKey } from '../types';

interface ContentProps {
  phase: PhaseKey;
  submodule: string;
}

// Data for the large tiles
const TILE_DATA = [
  { 
    title: 'Org Chart', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  },
  { 
    title: 'Employees', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2m-8-2a3 3 0 005.356-1.857M17 20H5m12 0v-2m0 2h-5m-7 0H5v-2a3 3 0 015.356-1.857M5 20v-2m7-10a3 3 0 01-6 0 3 3 0 016 0z" />
  },
  { 
    title: 'Policies', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  },
  { 
    title: 'Board Setup', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  },
  { 
    title: 'Business Mission',
    icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></>
  }
];

// Data for the project list
const PROJECT_DATA = [
  { title: 'Q3 Financial Review Automation', progress: 40 },
  { title: 'New CRM Platform Integration', progress: 85 },
  { title: 'Employee Wellness Program Launch', progress: 25 },
  { title: '2025 Strategic Planning', progress: 60 },
];

const OverviewContent: React.FC = () => (
  <div className="animate-fade-in space-y-12">
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-4">Company Foundations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {TILE_DATA.map(tile => (
          <a href="#" key={tile.title} className="group bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-brand-secondary p-4 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {tile.icon}
               </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-text group-hover:text-brand-primary transition-colors duration-300">{tile.title}</h3>
          </a>
        ))}
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-4">Active Projects</h2>
      <div className="bg-white rounded-lg shadow">
        <ul className="divide-y divide-gray-200">
          {PROJECT_DATA.map(project => (
            <li key={project.title} className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-md font-medium text-brand-text">{project.title}</span>
                <span className="text-sm font-semibold text-brand-primary">{project.progress}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2.5" role="progressbar" aria-valuenow={project.progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${project.title} progress`}>
                 <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);


const PlaceholderCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-brand-text mb-3">{title}</h3>
        <div className="text-brand-text-secondary space-y-2">{children}</div>
    </div>
);

export const Content: React.FC<ContentProps> = ({ phase, submodule }) => {
  if (phase === 'Diagnose' && submodule === 'Overview') {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-text">Overview</h1>
          <p className="text-lg text-brand-text-secondary mt-1">
            A high-level view of company structure and ongoing projects.
          </p>
        </div>
        <OverviewContent />
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-text">{submodule}</h1>
        <p className="text-lg text-brand-text-secondary mt-1">
          Current Phase: <span className="font-medium text-brand-text">{phase}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 lg:col-span-3">
             <PlaceholderCard title={`Focus Area: ${submodule}`}>
                <p>This is the primary workspace for the '{submodule}' task. All relevant tools, data, and actions will be presented here to maintain focus and efficiency.</p>
                <p>The interface is designed to be minimal and intuitive, removing distractions so you can concentrate on the task at hand.</p>
             </PlaceholderCard>
        </div>
        <PlaceholderCard title="Key Objectives">
          <ul className="list-disc list-inside space-y-1">
            <li>Define clear success metrics.</li>
            <li>Gather actionable insights.</li>
            <li>Collaborate with stakeholders.</li>
          </ul>
        </PlaceholderCard>
        <PlaceholderCard title="Recent Activity">
           <p>No recent activity. Start by uploading a document or creating a new entry.</p>
            <button className="mt-4 text-sm font-semibold text-brand-primary hover:underline">
                View Activity Log
            </button>
        </PlaceholderCard>
        <PlaceholderCard title="Resources">
            <ul className="list-none space-y-1">
                <li><a href="#" className="text-brand-primary hover:underline">Guideline Document for {phase} Phase</a></li>
                <li><a href="#" className="text-brand-primary hover:underline">Best Practices for {submodule}</a></li>
            </ul>
        </PlaceholderCard>
      </div>
    </div>
  );
};

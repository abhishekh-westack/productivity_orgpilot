
import React from 'react';
import type { PhaseKey } from '../types';

interface ContentProps {
  phase: PhaseKey;
  submodule: string;
}

const PlaceholderCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-brand-text mb-3">{title}</h3>
    <div className="text-brand-text-secondary space-y-2">{children}</div>
  </div>
);

export const Content: React.FC<ContentProps> = ({ phase, submodule }) => {
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

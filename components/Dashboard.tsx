
import React from 'react';
import { Link } from 'react-router-dom';
import { TILE_DATA, PROJECT_DATA } from '../constants';

interface DashboardProps { }

export const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <div className="animate-fade-in space-y-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div>
                <h2 className="text-2xl font-bold text-brand-text mb-4">Company Foundations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {TILE_DATA.map(tile => (
                        <div key={tile.title} className="group bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center cursor-default">
                            <div className="bg-brand-secondary p-4 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {tile.iconPath.split('||').map((d, i) => (
                                        <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
                                    ))}
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-brand-text group-hover:text-brand-primary transition-colors duration-300">{tile.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-brand-text mb-4">Active Projects</h2>
                <div className="bg-white rounded-lg shadow">
                    <ul className="divide-y divide-gray-200">
                        {PROJECT_DATA.map(project => (
                            <li
                                key={project.title}
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <Link to="/app/Diagnose/Overview" className="block p-4 sm:p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-md font-medium text-brand-text">{project.title}</span>
                                        <span className="text-sm font-semibold text-brand-primary">{project.progress}%</span>
                                    </div>
                                    <div className="bg-gray-200 rounded-full h-2.5" role="progressbar" aria-valuenow={project.progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${project.title} progress`}>
                                        <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import Sidebar from './Sidebar';
import PinnedProjects from './PinnedProjects';
import Heatmap from './Heatmap';
import TechStack from './TechStack';
import ReadmeCard from './ReadmeCard';

export default function GitHubPortfolio() {
  return (
    <div className="portfolio-layout">
      <Sidebar />
      <main className="main-content">
        <PinnedProjects />
        <Heatmap />
        <TechStack />
        <ReadmeCard />
      </main>
    </div>
  );
}

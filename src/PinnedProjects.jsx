import React from 'react';
import { RepoIcon, StarIcon, ForkIcon } from './Icons';

const pins = [
  {
    name: 'GenAI_Capstone2',
    url: 'https://github.com/Aman739-code/GenAI_Capstone2',
    desc: 'Intelligent agentic system combining solar energy forecasting with a LangGraph multi-node workflow and RAG-based decision-making to optimize grid operations. Deployed on Streamlit.',
    lang: 'Python', langColor: '#3572A5',
    stars: 0,
    demo: { label: 'Live Demo', url: 'https://genaicapstone2.streamlit.app' },
  },
  {
    name: 'CapstoneDVA-E13',
    url: 'https://github.com/ratinto/CapstoneDVA-E13',
    desc: 'Data-driven crime analysis of LAPD records (2020-2024) — hotspot zone identification, peak crime windows, case closure performance analysis, and an interactive decision-support dashboard for public safety planning.',
    lang: 'Jupyter Notebook', langColor: '#DA5B0B',
    stars: 0, forks: 0,
  },
  {
    name: 'E_G1_DVACapstone2',
    url: 'https://github.com/Aman739-code/E_G1_DVACapstone2',
    desc: 'End-to-end Data Analytics Capstone on Amazon Electronics — Python ETL pipelines, EDA, statistical analysis in Jupyter Notebooks, and an interactive Tableau dashboard with KPIs, univariate and bivariate analysis.',
    lang: 'Jupyter Notebook', langColor: '#DA5B0B',
    stars: 2, forks: 2,
    demo: { label: 'Tableau', url: 'https://public.tableau.com/views/AmazonElectronicsMarketIntelligenceDashboard/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' },
  },
];

export default function PinnedProjects() {
  return (
    <div className="section">
      <h2 className="section-title">📌 Pinned</h2>
      <div className="pinned-grid">
        {pins.map((p) => (
          <div className="pin-card" key={p.name}>
            <div className="pin-card-header">
              <RepoIcon />
              <a className="pin-card-name" href={p.url} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            </div>
            <p className="pin-card-desc">{p.desc}</p>
            <div className="pin-card-footer">
              <span>
                <span className="lang-dot" style={{ backgroundColor: p.langColor }} />
                {p.lang}
              </span>
              {p.stars > 0 && (
                <span><StarIcon /> {p.stars}</span>
              )}
              {p.forks > 0 && (
                <span><ForkIcon /> {p.forks}</span>
              )}
              {p.demo && (
                <a className="live-badge" href={p.demo.url} target="_blank" rel="noopener noreferrer">
                  🚀 {p.demo.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

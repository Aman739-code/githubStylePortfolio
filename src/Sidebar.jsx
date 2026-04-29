import React from 'react';
import { LocationIcon, LinkIcon, GHIcon, LCIcon, LinkedInIcon, StarIcon, ForkIcon, RepoIcon } from './Icons';

const skills = ['Python','SQL','Tableau','Power BI','Jupyter','Pandas','NumPy','Scikit-learn','Excel','Google Sheets','LangGraph','FAISS','Streamlit','Data Visualization','Statistical Analysis'];

const links = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aman-bhatnagar-150077325' },
  { icon: <GHIcon />, label: 'Aman739-code', href: 'https://github.com/Aman739-code' },
  { icon: <LCIcon />, label: 'LeetCode', href: 'https://leetcode.com/u/Aman___Bhatnagar' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar-container">
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/188833117?v=4"
          alt="Aman Bhatnagar"
        />
      </div>
      <div className="name">Aman Bhatnagar</div>
      <div className="username">@Aman739-code</div>
      <p className="bio">
        CS &amp; AI Major @ Newton School of Technology | Data &amp; Visual Analytics Enthusiast | Turning raw data into visual stories and actionable insights
      </p>

      <ul className="sidebar-links">
        <li><LocationIcon /> Sonipat, Haryana, India</li>
        {links.map((l, i) => (
          <li key={i}>
            {l.icon}
            <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="stats-row">
        <StarIcon /> <strong>3</strong> stars &nbsp;·&nbsp;
        <RepoIcon /> <strong>19</strong> repos &nbsp;·&nbsp;
        <ForkIcon /> <strong>2</strong> forks
      </div>

      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skill-tags">
          {skills.map(sk => <span className="skill-tag" key={sk}>{sk}</span>)}
        </div>
      </div>
    </aside>
  );
}

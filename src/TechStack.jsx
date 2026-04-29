import React, { useEffect, useState } from 'react';

const techData = [
  { label: 'Python', pct: 95 },
  { label: 'Jupyter & EDA', pct: 92 },
  { label: 'SQL & Data Wrangling', pct: 90 },
  { label: 'Tableau & Power BI', pct: 88 },
  { label: 'Excel & Google Sheets', pct: 85 },
  { label: 'Statistical Analysis', pct: 82 },
  { label: 'Data Visualization', pct: 80 },
  { label: 'Machine Learning', pct: 78 },
  { label: 'LangGraph, RAG & GenAI', pct: 75 },
];

export default function TechStack() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="section">
      <h2 className="section-title">🛠️ Tech Stack</h2>
      <div className="techstack-wrapper">
        {techData.map((t) => (
          <div className="bar-row" key={t.label}>
            <span className="bar-label">{t.label}</span>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: animate ? `${t.pct}%` : '0%' }}
              />
            </div>
            <span className="bar-pct">{t.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

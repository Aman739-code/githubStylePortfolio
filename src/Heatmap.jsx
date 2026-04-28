import React, { useMemo } from 'react';
import { generateHeatmap, MONTHS, COLORS } from './heatmapData';

const CELL = 11;
const GAP = 3;

export default function Heatmap() {
  const data = useMemo(() => generateHeatmap(), []);
  const totalW = 52 * (CELL + GAP) + 30;
  const totalH = 7 * (CELL + GAP) + 28;

  return (
    <div className="section">
      <h2 className="section-title">📊 Contributions</h2>
      <div className="heatmap-wrapper">
        <svg width={totalW} height={totalH} viewBox={`0 0 ${totalW} ${totalH}`}>
          {/* Month labels */}
          {MONTHS.map((m, i) => {
            const x = 30 + i * ((52 * (CELL + GAP)) / 12);
            return <text key={m + i} x={x} y={10} fontSize="10" fill="#8b949e">{m}</text>;
          })}
          {/* Day labels */}
          {['Mon','Wed','Fri'].map((d, i) => (
            <text key={d} x={0} y={24 + (i * 2 + 1) * (CELL + GAP) + 9} fontSize="10" fill="#8b949e">{d}</text>
          ))}
          {/* Grid cells */}
          {data.map((week, w) =>
            week.map((level, d) => (
              <rect
                key={`${w}-${d}`}
                x={30 + w * (CELL + GAP)}
                y={18 + d * (CELL + GAP)}
                width={CELL}
                height={CELL}
                rx={2}
                ry={2}
                fill={COLORS[level]}
              >
                <title>{`Week ${w + 1}, Day ${d + 1}: Level ${level}`}</title>
              </rect>
            ))
          )}
        </svg>
      </div>
    </div>
  );
}

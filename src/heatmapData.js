// Generate realistic contribution heatmap data
// 52 weeks x 7 days, heavier activity in last ~6 months

export function generateHeatmap() {
  const weeks = 52;
  const days = 7;
  const data = [];

  for (let w = 0; w < weeks; w++) {
    const row = [];
    // Older weeks (0-25): sparse activity
    // Recent weeks (26-51): heavier activity
    const isRecent = w >= 26;
    for (let d = 0; d < days; d++) {
      let level = 0;
      if (isRecent) {
        const r = Math.random();
        if (r < 0.15) level = 0;
        else if (r < 0.35) level = 1;
        else if (r < 0.58) level = 2;
        else if (r < 0.80) level = 3;
        else level = 4;
      } else {
        const r = Math.random();
        if (r < 0.55) level = 0;
        else if (r < 0.75) level = 1;
        else if (r < 0.88) level = 2;
        else if (r < 0.96) level = 3;
        else level = 4;
      }
      // Weekends slightly less active
      if ((d === 0 || d === 6) && Math.random() < 0.3) level = 0;
      row.push(level);
    }
    data.push(row);
  }
  return data;
}

export const MONTHS = ['May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr'];

export const COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

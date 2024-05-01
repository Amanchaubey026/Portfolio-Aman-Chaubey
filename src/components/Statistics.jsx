// import React from 'react'
import '../styles/statistics.css'
const Statistics = () => {
  return (
    <div id="statistics" className="git-content">
        <h1>Statistics</h1>
      <div className="git-stats">
        <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=amanchaubey026&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true" />

        <div className="git-streaks">
          <img src="https://streak-stats.demolab.com/?user=amanchaubey026&_border=true&theme=dark&hide_border=true&theme=react" />
        </div>

        <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=amanchaubey026&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true" />
      </div>
    </div>
  );
};

export default Statistics;

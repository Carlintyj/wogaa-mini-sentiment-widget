import type { SummaryData } from "../../types";
import "./SummaryPanel.css";

interface SummaryPanelProps {
  summary: SummaryData;
}

const SummaryPanel = ({ summary }: SummaryPanelProps) => {
  const { totalSubmissions, averageRating, recentComments } = summary;

  if (totalSubmissions === 0) {
    return (
      <div className="summary-panel">
        <h2 className="summary-title">Summary</h2>
        <p className="no-data">
          No submissions yet. Be the first to share your feedback!
        </p>
      </div>
    );
  }

  return (
    <div className="summary-panel">
      <h2 className="summary-title">Summary</h2>

      <div className="summary-stats">
        <div className="stat-item">
          <span className="stat-label">Total submissions:</span>
          <span className="stat-value">{totalSubmissions}</span>
        </div>

        <div className="stat-item">
          <span className="stat-label">Average rating:</span>
          <span className="stat-value">{averageRating.toFixed(1)}</span>
        </div>
      </div>

      {recentComments.length > 0 && (
        <div className="recent-comments">
          <h3 className="recent-comments-title">Recent Comments:</h3>
          <ul className="comments-list">
            {recentComments.map((comment, index) => (
              <li key={index} className="comment-item">
                "{comment}"
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SummaryPanel;

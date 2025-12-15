import { useState } from "react";
import RatingChips from "./components/RatingChips/RatingChips";
import CommentBox from "./components/CommentBox/CommentBox";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import SummaryPanel from "./components/SummaryPanel/SummaryPanel";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import type { Submission, SummaryData } from "./types";
import "./App.css";

function App() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const summaryData: SummaryData = (() => {
    if (submissions.length === 0) {
      return {
        totalSubmissions: 0,
        averageRating: 0,
        recentComments: [],
      };
    }

    const totalSubmissions = submissions.length;
    const totalRating = submissions.reduce((sum, sub) => sum + sub.rating, 0);
    const averageRating = totalRating / totalSubmissions;

    // Get top 3 recent comments excluding empty comments
    const recentComments = submissions
      .filter((sub) => sub.comment.trim() !== "")
      .slice(-3)
      .reverse()
      .map((sub) => sub.comment);

    return {
      totalSubmissions,
      averageRating,
      recentComments,
    };
  })();

  const handleSubmit = () => {
    if (selectedRating === null) {
      alert("Please select a rating before submitting.");
      return;
    }

    const newSubmission: Submission = {
      id: `${Date.now()}-${Math.random()}`,
      rating: selectedRating,
      comment: comment.trim(),
      timestamp: new Date(),
    };

    setSubmissions((prev) => [...prev, newSubmission]);
    setShowConfirmation(true);
    setIsDisabled(true);

    setSelectedRating(null);
    setComment("");

    setTimeout(() => {
      setIsDisabled(false);
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div className="app-container">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <div className="widget-card">
        <h1 className="widget-title">Mini Sentiment Widget</h1>

        {showConfirmation && (
          <div className="confirmation-message">
            Thank you for your feedback!
          </div>
        )}

        <div className="widget-form">
          <RatingChips
            selectedRating={selectedRating}
            onRatingSelect={setSelectedRating}
            disabled={isDisabled}
          />

          <CommentBox
            value={comment}
            onChange={setComment}
            disabled={isDisabled}
            placeholder="Enter your comment (optional)"
          />

          <SubmitButton onClick={handleSubmit} disabled={isDisabled} />
        </div>

        <SummaryPanel summary={summaryData} />
      </div>
    </div>
  );
}

export default App;

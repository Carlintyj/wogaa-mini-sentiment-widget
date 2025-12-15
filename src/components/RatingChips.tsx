import type { FC } from "react";
import "./RatingChips.css";

interface RatingChipsProps {
  selectedRating: number | null;
  onRatingSelect: (rating: number) => void;
  disabled?: boolean;
}

const RatingChips: FC<RatingChipsProps> = ({
  selectedRating,
  onRatingSelect,
  disabled = false,
}) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="rating-chips">
      {ratings.map((rating) => (
        <button
          key={rating}
          className={`rating-chip ${selectedRating === rating ? "active" : ""}`}
          onClick={() => onRatingSelect(rating)}
          disabled={disabled}
          aria-label={`Rating ${rating}`}
          aria-pressed={selectedRating === rating}
        >
          {rating}
        </button>
      ))}
    </div>
  );
};

export default RatingChips;

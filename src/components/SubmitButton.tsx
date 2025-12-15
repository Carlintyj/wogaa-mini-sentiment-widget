import type { FC } from "react";
import "./SubmitButton.css";

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ onClick, disabled = false }) => {
  return (
    <button
      className="submit-button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Submit feedback"
    >
      Submit
    </button>
  );
};

export default SubmitButton;

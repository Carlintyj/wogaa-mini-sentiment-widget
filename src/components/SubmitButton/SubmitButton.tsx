import "./SubmitButton.css";

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SubmitButton = ({ onClick, disabled = false }: SubmitButtonProps) => {
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

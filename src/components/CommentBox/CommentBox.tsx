import type { ChangeEvent } from "react";
import "./CommentBox.css";

interface CommentBoxProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

const CommentBox = ({
  value,
  onChange,
  disabled = false,
  placeholder = "Enter your comment (optional)",
}: CommentBoxProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="comment-box">
      <textarea
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        className="comment-textarea"
        rows={4}
        aria-label="Comment input"
      />
    </div>
  );
};

export default CommentBox;

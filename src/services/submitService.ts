import type { Submission } from "../types";
async function submitFeedback(data: Submission): Promise<void> {
  // TODO: When doing fetch, do a try and catch
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit feedback");
  }

  await response.json();
  return;
}

export default submitFeedback;

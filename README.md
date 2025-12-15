# WOGAA Mini Sentiment Widget

A simple feedback widget built with React and TypeScript for the WOGAA Engineering assessment.

## Running Locally

You'll need Node.js 22.12+ or 20.19+ installed. If you have nvm, just run `nvm use`.

```bash
# Clone and install
git clone https://github.com/Carlintyj/wogaa-mini-sentiment-widget.git
cd wogaa-mini-sentiment-widget
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The site will now be honsted on http://localhost:5173

## How It Works

The widget lets users rate something from 1-5, leave an optional comment and see a summary of all feedback. After submitting, there's a 3-second cooldown to prevent spam.

## Design Decisions

### Component Structure

I split everything into four components - `RatingChips`, `CommentBox`, `SubmitButton` and `SummaryPanel`. Each does one thing, which makes testing and changes easier down the line.

### State Management

Everything lives in `App.tsx` using basic React hooks.

### TypeScript

Defined interfaces in `types.ts` for the submission data and summary stats.

### Styling

Each component has its own CSS file.

### Data Storage

All feedback is stored in React state. It's lost on refresh since there's no backend. If this were real, I'd either add localStorage for persistence or connect it to an API.

## Project Structure

```
src/
├── components/
│   ├── RatingChips.tsx + .css
│   ├── CommentBox.tsx + .css
│   ├── SubmitButton.tsx + .css
│   └── SummaryPanel.tsx + .css
├── types.ts
├── App.tsx
└── main.tsx
```

## What's Built

- Rating chips (1-5) with visual feedback
- Optional comment input
- Form validation (can't submit without a rating)
- 3-second spam prevention
- Summary showing total submissions, average rating and last 3 comments

Built with React 19, TypeScript and Vite.

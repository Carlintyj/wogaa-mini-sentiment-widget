export interface Submission {
  id: string;
  rating: number;
  comment: string;
  timestamp: Date;
}

export interface SummaryData {
  totalSubmissions: number;
  averageRating: number;
  recentComments: string[];
}

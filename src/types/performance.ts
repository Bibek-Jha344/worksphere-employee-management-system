export type PerformanceRating =
  | "POOR"
  | "BELOW_EXPECTED"
  | "MEETS_EXPECTATIONS"
  | "EXCEEDS_EXPECTATIONS"
  | "OUTSTANDING";

export type PerformanceReview = {
  id: string;
  employeeId: string;
  rating: PerformanceRating;
  reviewDate: string;
  comments?: string;
};

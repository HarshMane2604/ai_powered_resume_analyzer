import { LandingPlugin } from "../interface";
import ReviewsSection from "./ReviewsSection";

export const reviewsSectionPlugin: LandingPlugin = {
    id: "reviewsSection",
    
    enabled: true,
    order: 4,
    component: ReviewsSection
}

export default reviewsSectionPlugin;

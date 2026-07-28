import { LandingPlugin } from "../interface";
import ResultsSection from "./ResultsSection";

export const resultsSectionPlugin: LandingPlugin = {
    id: "resultsSection",
    enabled: true,
    order: 3, // Header is likely 1, Feature is 2
    component: ResultsSection
}

export default resultsSectionPlugin;

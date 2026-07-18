import { LandingPlugin } from "../interface";
import ResultsSection from "./ResultsSection";

export const resultsSectionPlugin: LandingPlugin = {
    id: "resultsSection",
    name: "Results Section",
    enabled: true,
    order: 3, // Header is likely 1, Feature is 2
    component: ResultsSection
}

export default resultsSectionPlugin;

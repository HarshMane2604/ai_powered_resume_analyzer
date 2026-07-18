import headerPlugin from "./HeaderSection/plugin";
import featurePlugin from "./featureSection/plugin";
import { ctaSectionPlugin } from "./ctaSection/plugin";
import { resultsSectionPlugin } from "./resultsSection/plugin";
import { reviewsSectionPlugin } from "./reviewsSection/plugin";
import { LandingPlugin } from "./interface";

export const LandingPlugins: LandingPlugin[] = [
    headerPlugin,
    featurePlugin,
    resultsSectionPlugin,
    reviewsSectionPlugin,
    ctaSectionPlugin,
]
import FeatureSection from "./FeatureSection";
import { LandingPlugin } from "../interface";

const featurePlugin: LandingPlugin = {
    id: 'feature',
    order: 2,
    enabled: true,
    component: FeatureSection
}
export default featurePlugin;
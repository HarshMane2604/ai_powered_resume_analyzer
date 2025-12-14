import ctaSection from "./ctaSection";
import { LandingPlugin } from "../interface";

export const ctaSectionPlugin: LandingPlugin = {
    id: 'cta',
    order: 2,
    enabled: true,
    component: ctaSection
}
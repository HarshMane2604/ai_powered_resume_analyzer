import React from "react";
import HeaderSection from "./HeaderSection";
import { LandingPlugin } from "../interface";

const headerPlugin: LandingPlugin = {
    id: 'header',
    order: 1,
    enabled: true,
    component: HeaderSection
}

export default headerPlugin;
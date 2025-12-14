import React from "react";
import { ComponentType } from "react";
export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'indigo';
}

export interface LandingPlugin {
    id: string;
    order: number;
    enabled: boolean;
    component: ComponentType;
}


import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <b>DFDS Logistics Monorepo Docs</b>,
  project: {
    link: "https://github.com/dfds-frontend/logistics",
  },
  footer: {
    text: "Logistics Monorepo Documentation",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
};

export default config;

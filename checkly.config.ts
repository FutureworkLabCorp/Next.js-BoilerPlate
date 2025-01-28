import { defineConfig } from "checkly";
import { EmailAlertChannel, Frequency } from "checkly/constructs";

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: true,
};

const productionURL = "https://example.com";

const emailChannel = new EmailAlertChannel("email-channel-1", {
  address: "dlehddnr0713@gmail.com",
  ...sendDefaults,
});

export const config = defineConfig({
  projectName: "Next.js BoilerPlate",
  logicalId: "nextjs-boilerplate",
  repoUrl: "https://github.com/Lee-Dongwook/Next.js-BoilerPlate",
  checks: {
    locations: ["us-east-1", "ap-southeast-3"],
    tags: ["website"],
    runtimeId: "2025.01",
    browserChecks: {
      frequency: Frequency.EVERY_24H,
      testMatch: "**/tests/e2e/**/*.check.e2e.ts",
      alertChannels: [emailChannel],
    },
    playwrightConfig: {
      use: {
        baseURL: process.env.ENVIRONMENT_URL || productionURL,
        extraHTTPHeaders: {
          "x-vercel-protection-bypass": process.env.VERCEL_BYPASS_TOKEN,
        },
      },
    },
  },
  cli: {
    runLocation: "eu-west-1",
    reporters: ["list"],
  },
});

export default config;

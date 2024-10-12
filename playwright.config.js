const { devices } = require('@playwright/test');

module.exports = {
  // Define test directory
  testDir: './tests',

  // Maximum time one test can run for.
  timeout: 30 * 1000,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Run tests in files in parallel
  fullyParallel: true,

  // Reporter options
  reporter: 'list',

  // Shared settings for all the projects below
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: 'http://localhost:3000',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};

// playwright.config.js
module.exports = {
  testDir: './Tests', // Tell Playwright to look for tests in the "Tests" folder
};



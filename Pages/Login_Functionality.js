// Import necessary functions from Playwright
const { expect } = require('@playwright/test');

class Login_Functionality {
  constructor(page) {
    this.page = page;
    this.customerSuccess = page.locator('//*[@id="page-title"]/h2');
    this.reloadBanner = page.locator('//*[@id="app"]/div[2]/div/span');
    this.reloadButton = page.locator('//*[@id="app"]/div[2]/button');
    this.userMenu = page.locator('//*[@id="nav-user-menu"]/span');
  }

  async login(email, password) {
    // Navigate to the login page
    await this.page.goto('https://ngtest.nevvon.com');

    // Fill in email and password
    await this.page.fill('//*[@id="login-email"]', email);
    console.log("Entered email");
    await this.page.fill('//*[@id="login-password"]', password);
    console.log("Entered password");

    // Click on the login button
    await this.page.click('//*[@id="login"]');
    console.log("Clicked on login button");

    // Wait for the page to load after login
    await this.page.waitForLoadState('networkidle'); // Wait for network activity to finish

    // Add a screenshot after login to debug
    await this.page.screenshot({ path: 'post-login.png' });

    // Verify the Customer Success element is visible
    await expect(this.customerSuccess).toBeVisible({ timeout: 10000 }); // Increase timeout to 10 seconds

    // Check if the reload banner is visible
    const isReloadBannerVisible = await this.reloadBanner.isVisible();
    if (isReloadBannerVisible) {
      await expect(this.reloadButton).toBeVisible();
      await this.reloadButton.click();
      console.log('Clicked on Reload button');
    } else {
      await expect(this.userMenu).toBeVisible();
      console.log('Logged in successfully');
    }
  }
}

module.exports = Login_Functionality;

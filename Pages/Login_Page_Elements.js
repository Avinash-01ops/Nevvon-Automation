const { expect } = require('@playwright/test');

// Function to verify all elements on the login page
class LoginPageElements {
  constructor(page) {
    this.page = page;
  }

  async verifyElements() {
    // Verify Nevvon logo is visible
    const nevvonLogo = this.page.locator('xpath=//*[@id="app"]/div/div/img');
    await expect(nevvonLogo).toBeVisible();
    console.log('Nevvon logo is visible');

    // Verify Email input field is visible
    const emailInput = this.page.locator('xpath=//*[@id="login-email"]');
    await expect(emailInput).toBeVisible();
    console.log('Email input field is visible');

    // Verify Password input field is visible
    const passwordInput = this.page.locator('xpath=//*[@id="login-password"]');
    await expect(passwordInput).toBeVisible();
    console.log('Password input field is visible');

    // Verify Remember Me checkbox is visible
    const rememberMeCheckbox = this.page.locator('xpath=//*[@id="app"]/div/div/form/div[3]/div/div/input');
    await expect(rememberMeCheckbox).toBeVisible();
    console.log('Remember Me checkbox is visible');


    // Verify Remember Me label is visible
    const rememberMeLabel = this.page.locator('xpath=//*[@id="app"]/div/div/form/div[3]/div/span');
    await expect(rememberMeLabel).toBeVisible();
    console.log('Remember Me label is visible');

    // Verify Forgot Password link is visible
    const forgotPasswordLink = this.page.locator('xpath=//*[@id="forgot-password"]');
    await expect(forgotPasswordLink).toBeVisible();
    console.log('Forgot Password link is visible');

    // Verify Login button is visible
    const loginButton = this.page.locator('xpath=//*[@id="login"]');
    await expect(loginButton).toBeVisible();
    console.log('Login button is visible');
  }
}

// Export the class to make it reusable in tests
module.exports = LoginPageElements;

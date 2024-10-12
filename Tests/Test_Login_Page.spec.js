const { test } = require('@playwright/test');
const Login_Page_Elements = require('../Pages/Login_Page_Elements');

test('Verify all elements on Nevvon Login page', async ({ page }) => {
  // Navigate to the Nevvon login page
  await page.goto('https://ngtest.nevvon.com/');

  // Create an instance of the LoginPageElements class
  const loginPage = new Login_Page_Elements(page);

  // Call the method to verify all elements
  await loginPage.verifyElements();

  console.log("All elements on the login page are verified successfully!");
});

const { test } = require('@playwright/test');
const LoginFunctionality = require('../Pages/Login_Functionality'); 

test('Login to Nevvon and verify elements', async ({ page }) => {
  // Create an instance of LoginFunctionality
  const loginPage = new LoginFunctionality(page);

  // Call the login function with valid credentials
  await loginPage.login('customer_success@nevvon.com', 'busyseed62');
});


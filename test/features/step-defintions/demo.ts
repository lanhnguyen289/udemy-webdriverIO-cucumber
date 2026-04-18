import { Given, When, Then } from "@wdio/cucumber-framework";

/**
 * Selectors
 * Title:
 * CURA Healthcare Service
 *
 * Make Appointment
 * Link text: Make Appointment
 *
 * Login page url:
 * https://katalon-demo-cura.herokuapp.com/profile.php#login
 */

Given("the user go to the inventory web", async () => {
  await browser.url("https://www.saucedemo.com/");
  await browser.waitUntil(async () => {
    return (await browser.getTitle()) === "Swag Labs";
  });
  await browser.maximizeWindow();
});

When("the user login with a valid account", async () => {
  let usernameInput = await $("#user-name");
  let passwordInput = await $("#password");
  let loginButton = await $("#login-button");

  await usernameInput.setValue("standard_user");
  await passwordInput.setValue("secret_sauce");
  // await browser.refresh();
  await browser.pause(5000);
  await loginButton.click();
  await browser.pause(2000);

  await browser.deleteCookies();
  await browser.url("https://www.saucedemo.com/");
  await browser.waitUntil(async () => {
    return (await browser.getTitle()) === "Swag Labs";
  });
  await browser.maximizeWindow();

  await usernameInput.setValue("problem_user");
  await passwordInput.setValue("secret_sauce");
  await loginButton.click();

  await browser.back();
  await browser.pause(5000);
  await browser.forward();

  await browser.debug();
});

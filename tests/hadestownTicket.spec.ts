import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://saltlakecity.broadway.com/shows/hadestown/");

  await expect(page.getByRole("main")).toContainText(
    "Register Early - Presale Access"
  );
});

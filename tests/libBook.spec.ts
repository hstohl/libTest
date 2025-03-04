import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto(
    "https://provo.ent.sirsi.net/client/en_US/pl/search/results?qu=sunrise+on+the+reaping&te="
  );

  // Expect a title "to contain" a substring.
  await expect(page.locator("#searchResultText")).toContainText(
    "No results found in Search Results - Provo City Library."
  );
});

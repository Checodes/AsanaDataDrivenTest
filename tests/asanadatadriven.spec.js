const { test, expect } = require('@playwright/test');

// Test data in JSON format
const testCases = [
  {
    id: 1,
    name: 'Test Case 1',
    leftNav: 'Cross-functional project plan, Project',
    column: 'To Do',
    card_title: 'Draft project brief',
    tags: ['Low', 'On track'],
  },
  {
    id: 2,
    name: 'Test Case 2',
    leftNav: 'Cross-functional project plan, Project',
    column: 'To Do',
    card_title: 'Schedule kickoff meeting',
    tags: ['Medium', 'At risk'],
  },
  {
    id: 3,
    name: 'Test Case 3',
    leftNav: 'Cross-functional project plan, Project',
    column: 'To Do',
    card_title: 'Share timeline with teammates',
    tags: ['High', 'Off track'],
  },
  {
    id: 4,
    name: 'Test Case 4',
    leftNav: 'Work Requests',
    column: 'New Requests',
    card_title: '[Example] Laptop setup for new hire',
    tags: ['Medium priority', 'Low effort', 'New hardware', 'Not Started'],
  },
  {
    id: 5,
    name: 'Test Case 5',
    leftNav: 'Work Requests',
    column: 'In Progress',
    card_title: '[Example] Password not working',
    tags: ['Low priority', 'Low effort', 'Password reset', 'Waiting'],
  },
  {
    id: 6,
    name: 'Test Case 6',
    leftNav: 'Work Requests',
    column: 'Completed',
    card_title: '[Example] New keycard for Daniela V',
    tags: ['High priority', 'Low effort', 'New hardware', 'Done'],
  },
];

test("Asana Login Test",async function({page})

{
// Go to login page
    await page.goto ("https://app.asana.com/-/login")
// Enter email address
    await page.getByLabel ('Email address').fill ('ben+pose@workwithloop.com');
// Find continue then click
    await page.getByRole ("button", {name: "Continue", exact: true}).click()
// Enter password
    await page.locator ('#lui_4').fill ('Password123');
// Click Log in 
    await page.locator("Log in") // (Used page.locator since getByRole, getByLabel, and getById not available)
// Validate login you are on log in oage by fining by finding the Home button
    await page.getByLabel ("Home")
})

 // Loop through testCases and create a test for each case
 testCases.forEach((testCase) => {
  test(`Test Case ${testCase.id}: ${testCase.name}`, async ({ page }) => {
   // Navigate to the specified leftNav
    const leftNavItems = testCase.leftNav.split(', ');
    for (const item of leftNavItems) {
      await page.getByText(item);
    }

    // Verify card_title in the specified column
    await page.getByRole('heading', { name: testCase.column });
    await page.getByText(testCase.card_title);

    // Verify tags
     const tagsText = testCase.tags.join('');
     await page.getByText(tagsText);
  });
});

// This test is a basic happy path created to understand the functionality of Asana
// since it's an unfamilar site to me. It aids in my understanding of how I will 
// develop a readable and maintainable test for you. 


const { test, expect } =require('@playwright/test')

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


test('testCase1', async ({ page }) => {
    await page.getByLabel('Cross-functional project plan, Project');
    await page.getByRole('heading', { name: 'To do' });
    await page.getByText('Draft project brief');
    await page.getByText('LowOn track');
  });

test('testCase2', async ({ page }) => {
    await page.getByLabel('Cross-functional project plan, Project');
    await page.getByRole('heading', { name: 'To do' });
    await page.getByText('Schedule kickoff meeting');
    await page.getByText('MediumAt risk');
 });


test('testCase3', async ({ page }) => {
    await page.getByLabel('Cross-functional project plan, Project');
    await page.getByRole('heading', { name: 'To do' });
    await page.getByText('Share timeline with teammates');
    await page.getByText('HighOff track');
  });

  test('testCase4', async ({ page }) => {
    await page.getByLabel('Work Requests, Project');
    await page.getByRole('heading', { name: 'New Requests' })
    await page.getByText('[Example] Laptop setup for new hire');
    await page.getByText('Medium priorityLow effortNew hardwareNot Started');
});
  
test('testCase5', async ({ page }) => {
    await page.getByLabel('Work Requests, Project');
    await page.getByRole('heading', { name: 'In Progress' })
    await page.getByText('[Example] Password not working')
    await page.getByText('Low priorityLow effortPassword resetWaiting');
});

test('testCase6', async ({ page }) => {
    await page.getByLabel('Work Requests, Project');
    await page.getByRole('heading', { name: 'Completed' })
    await page.getByText('[Example] New keycard for Daniela V')
    await page.getByText('High priorityLow effortNew hardwareDone');
});


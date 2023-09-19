# AsanaDataDrivenTest
Data-driven test to validate Asana functionality


1. Introduction: The purpose of this project was to develop test cases driven by JSON data, validate specific elements on the specific project folders and perform specific tasks on Asana’s login page.
  
    
(My thought process: When creating tests for unfamiliar websites, I start  out with the simplest, most descriptive way to test the page. This allows me to understand basic functionality and interactions of the page. You will notice that I created three separate tests and with each test, it becomes more concise. Tests from longest to shortest are asanatest.spec.js , asanadatadriven.spec.js, asanadatadriven2.spec.js)


2. Implementation Details: How you tackled the task and the main components of your
implementation.

  - Systematic Approach
          - Test Preparation: Defined test cases in JSON format.Each test case included                 unique identifiers and data for test execution (left navigation items, card                 titles, associated tags, and target columns). 
          - Test Framework: Used Playwright testing framework
          - Test Suite: Structured the suite to include a login test and individual data-                driven test cases.
          - Test Automation: For each data-driven test case we navigated to the specified               left navigation items; Validated the presence of card titles in their                        designated columns; and verified the display of associated tags for each card. 


3. Challenges and Solutions: Mention any obstacles encountered and your solutions.
    - Challenge #1: Little experience creating data-driven automation tests i
    Solution#1: I utilized youtube and LinkedIn learning for some guidance.
  
- Challenge #2: Verifying tags. Verifying tags was challenging because they're displayed in     a concatenated format
    Solution #2: Joined tags into a single string to match displayed content, allowing 
    confirmation of their presence.

    - Challenge #3: Complex left navigation paths with multiple items
    Solution #3: split and iterated through these items clicking on each on to ensure            accurate navigation.


4. Results: Conclude with the outcomes of the test runs, detailing any failures.
    -  All test cases passed (finally)
    -  Initially, I had issues with the login tests because getByRole, getByLabel, and             getById were not available contrary to what the record and playback displayed. Once
       I used locator(), I had no further issues. (Line 68 in asanadatadriven2.spec.js)


5. Recommendations: 
    -  Expand test coverage for different environments
    -  Continuous testing: implement CI/CD pipelines to automation execution on a regular          basis to ensure new code changes does not introduce regressions



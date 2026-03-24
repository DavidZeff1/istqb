export const content = {
  title: "Chapter 2 Exam Questions",
  content: `
<style>
  .question-block {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px 24px;
    margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  }
  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .question-source {
    font-size: 0.75rem;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .lo-badge {
    font-size: 0.7rem;
    background: #eff6ff;
    color: #2563eb;
    border: 1px solid #bfdbfe;
    border-radius: 4px;
    padding: 2px 8px;
    font-family: monospace;
  }
  .question-text {
    font-size: 0.95rem;
    color: #1e293b;
    line-height: 1.6;
    margin-bottom: 14px;
    font-weight: 500;
  }
  .options-list {
    list-style: none;
    padding: 0;
    margin: 0 0 14px 0;
  }
  .option-item {
    padding: 8px 12px;
    margin-bottom: 6px;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #334155;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.5;
  }
  .option-correct {
    background: #f0fdf4;
    border-color: #86efac;
    color: #166534;
    font-weight: 500;
  }
  .option-letter {
    font-weight: 700;
    min-width: 22px;
    color: #475569;
    flex-shrink: 0;
  }
  .option-correct .option-letter {
    color: #16a34a;
  }
  .correct-mark {
    color: #16a34a;
    font-weight: 700;
    margin-left: auto;
    flex-shrink: 0;
  }
  .answer-reveal {
    font-size: 0.82rem;
    color: #64748b;
    padding-top: 10px;
    border-top: 1px solid #f1f5f9;
  }
  .answer-reveal strong {
    color: #16a34a;
  }
</style>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q9</span>
    <span class="lo-badge">FL-2.1.2</span>
  </div>
  <div class="question-text">Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which SDLC models does this rule hold?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Only in sequential development models</li>
        <li class="option-item"><span class="option-letter">b)</span> Only in iterative development models</li>
        <li class="option-item"><span class="option-letter">c)</span> Only in iterative and incremental development models</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> In sequential, incremental, and iterative development models <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q10</span>
    <span class="lo-badge">FL-2.1.3</span>
  </div>
  <div class="question-text">Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> In ATDD, acceptance criteria are typically created based on the given/when/then format</li>
        <li class="option-item"><span class="option-letter">b)</span> In ATDD, test cases are mainly created at component testing and are code-oriented</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> In ATDD, tests are created, based on acceptance criteria to drive the development of the related software <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q11</span>
    <span class="lo-badge">FL-2.1.5</span>
  </div>
  <div class="question-text">Which of the following is NOT an example of the shift-left approach?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Reviewing the user requirements before they are formally accepted by the stakeholders</li>
        <li class="option-item"><span class="option-letter">b)</span> Writing a component test before the corresponding code is written</li>
        <li class="option-item"><span class="option-letter">c)</span> Executing a performance efficiency test for a component during component testing</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Writing a test script before setting up the configuration management process <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q12</span>
    <span class="lo-badge">FL-2.1.6</span>
  </div>
  <div class="question-text">Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Retrospectives are very popular these days and clients would appreciate it if we added them to our processes</li>
        <li class="option-item"><span class="option-letter">b)</span> Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q13</span>
    <span class="lo-badge">FL-2.2.1</span>
  </div>
  <div class="question-text">Which types of failures (1-4) fit which test levels (A-D) BEST? 1. 2. 3. 4. Failures in system behavior as it deviates from the user’s business needs Failures in communication between components Failures in logic in the code Failures in not correctly implemented business rules A. Component testing B. Component integration testing C. System testing D. Acceptance testing</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> 1D, 2B, 3A, 4C <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> 1D, 2B, 3C, 4A</li>
        <li class="option-item"><span class="option-letter">c)</span> 1B, 2A, 3D, 4C</li>
        <li class="option-item"><span class="option-letter">d)</span> 1C, 2B, 3A, 4D</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q14</span>
    <span class="lo-badge">FL-2.2.3</span>
  </div>
  <div class="question-text">You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows: TC1 TC2 TC3 Execution 1 (1) Failed (2) Passed (3) Failed Execution 2 (4) Passed (5) Failed (6) Failed Execution 3 (7) Passed (8) Passed (9) Passed Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Only 4, 7, 8, 9</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Only 5, 7 <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Only 4, 6, 8, 9</li>
        <li class="option-item"><span class="option-letter">d)</span> Only 5, 6</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA7</span>
    <span class="lo-badge">FL-2.1.1</span>
  </div>
  <div class="question-text">You are working as a tester in the team that follows the V-model. Which of the following activities CAN be performed in the initial phases of the SDLC?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Dynamic test execution</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Static testing <span class="correct-mark">&#10003;</span></li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Test planning <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Acceptance test execution</li>
        <li class="option-item"><span class="option-letter">e)</span> Maintenance testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B, C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA8</span>
    <span class="lo-badge">FL-2.1.4</span>
  </div>
  <div class="question-text">Which of the following are advantages of DevOps? i. ii. iii. iv. v.</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Faster product release and faster time to market</li>
        <li class="option-item"><span class="option-letter">b)</span> Increases the need for repetitive manual testing</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Constant availability of executable software <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Reduction in the number of regression tests associated with code refactoring</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA9</span>
    <span class="lo-badge">FL-2.2.2</span>
  </div>
  <div class="question-text">You work as a tester on a project on a mobile application for food ordering for one of your clients. The client sent you a list of requirements. One of them, with high priority, says “The order must be processed in less than 10 seconds in 95% of the cases”. You created a set of test cases in which a number of random orders were made, the processing time measured, and the test results were checked against the requirements. What test type did you perform?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Functional, because the test cases cover the user’s business requirement for the system</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Non-functional, because they measure the system’s performance <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Functional, because the test cases interact with the user interface</li>
        <li class="option-item"><span class="option-letter">d)</span> White-box, because we need to know the internal structure of the program to measure the</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA10</span>
    <span class="lo-badge">FL-2.3.1</span>
  </div>
  <div class="question-text">Your organization’s test strategy suggests that once a system is going to be retired, data migration shall be tested. As part of what test type is this testing MOST likely to be performed?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Maintenance testing <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Regression testing</li>
        <li class="option-item"><span class="option-letter">c)</span> Reliability testing</li>
        <li class="option-item"><span class="option-letter">d)</span> Integration testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q9</span>
    <span class="lo-badge">FL-2.1.1</span>
  </div>
  <div class="question-text">Which of the following statements about the chosen software development lifecycle is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> If agile software development is used, automation of system tests replaces the need for regression testing</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> If an iterative development model is used, then component testing is typically performed manually by developers</li>
        <li class="option-item"><span class="option-letter">d)</span> If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q10</span>
    <span class="lo-badge">FL-2.1.2</span>
  </div>
  <div class="question-text">Which of the following is a good testing practice that applies to all software development lifecycles?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Testers should review work products as part of the next development phase</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Testers should review work products as soon as drafts are available <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Testers should review work products before test analysis and test design begin</li>
        <li class="option-item"><span class="option-letter">d)</span> Testers should review work products immediately after they are published</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q11</span>
    <span class="lo-badge">FL-2.1.3</span>
  </div>
  <div class="question-text">Which of the following is an example of a test-first approach to development?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Test-Driven Development <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Coverage-Driven Development</li>
        <li class="option-item"><span class="option-letter">c)</span> Quality-Driven Development</li>
        <li class="option-item"><span class="option-letter">d)</span> Feature-Driven Development</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q12</span>
    <span class="lo-badge">FL-2.1.4</span>
  </div>
  <div class="question-text">Which of the following statements about DevOps is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach</li>
        <li class="option-item"><span class="option-letter">d)</span> To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q13</span>
    <span class="lo-badge">FL-2.2.1</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to be performed as part of system testing?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Security testing of a credit management system by an independent test team <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Testing the interface of a currency exchange system with an external banking system</li>
        <li class="option-item"><span class="option-letter">c)</span> Beta testing of a remote learning system by courseware developers</li>
        <li class="option-item"><span class="option-letter">d)</span> Testing interactions between the user interface and database of a human resources system</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q14</span>
    <span class="lo-badge">FL-2.2.3</span>
  </div>
  <div class="question-text">Which of the following statements is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses</li>
        <li class="option-item"><span class="option-letter">b)</span> Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced</li>
        <li class="option-item"><span class="option-letter">c)</span> Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q9</span>
    <span class="lo-badge">FL-2.1.2</span>
  </div>
  <div class="question-text">Which of the following is a good testing practice that applies to all software development lifecycles?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> For each test level, there is a corresponding development level</li>
        <li class="option-item"><span class="option-letter">b)</span> For each test objective, there is a corresponding development objective</li>
        <li class="option-item"><span class="option-letter">c)</span> For every test activity, there is a corresponding user activity</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> For every development activity, there is a corresponding test activity <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q10</span>
    <span class="lo-badge">FL-2.1.3</span>
  </div>
  <div class="question-text">Which of the following is an example of a test-first approach to development?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Component Test-Driven Development</li>
        <li class="option-item"><span class="option-letter">b)</span> Integration Test-Driven Development</li>
        <li class="option-item"><span class="option-letter">c)</span> System Test-Driven Development</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Acceptance Test-Driven Development <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q11</span>
    <span class="lo-badge">FL-2.1.5</span>
  </div>
  <div class="question-text">Which of the following provides the BEST description of shift-left?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of ‘early testing saves time and money’</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests</li>
        <li class="option-item"><span class="option-letter">d)</span> When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q12</span>
    <span class="lo-badge">FL-2.1.6</span>
  </div>
  <div class="question-text">Which of the following is LEAST likely to occur as a result of a retrospective?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The quality of future test objects improves by identifying improvements in development practices</li>
        <li class="option-item"><span class="option-letter">b)</span> Test efficiency improves by speeding up the configuration of test environments through automation</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> End users’ understanding of the development and test processes is improved <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Automated test scripts are enhanced through feedback from developers</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q13</span>
    <span class="lo-badge">FL-2.2.1</span>
  </div>
  <div class="question-text">Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Component testing</li>
        <li class="option-item"><span class="option-letter">b)</span> Component integration testing</li>
        <li class="option-item"><span class="option-letter">c)</span> System integration testing</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Acceptance testing <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q14</span>
    <span class="lo-badge">FL-2.2.3</span>
  </div>
  <div class="question-text">The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Only confirmation testing</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Confirmation testing then regression testing <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Only regression testing</li>
        <li class="option-item"><span class="option-letter">d)</span> Regression testing then confirmation testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q9</span>
    <span class="lo-badge">FL-2.1.2</span>
  </div>
  <div class="question-text">Which of the following is a good testing practice that applies to all software development lifecycles?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Each test level has specific and distinct test objectives <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Test implementation and execution for a given test level should start during the corresponding development phase</li>
        <li class="option-item"><span class="option-letter">c)</span> Testers should start test design as soon as drafts of the relevant work products become available</li>
        <li class="option-item"><span class="option-letter">d)</span> Every dynamic testing activity has a corresponding static testing activity</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q10</span>
    <span class="lo-badge">FL-2.1.3</span>
  </div>
  <div class="question-text">Which of the following is an example of a test-first approach to development?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Behavior-Driven Development <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Test Level Driven Development</li>
        <li class="option-item"><span class="option-letter">c)</span> Function-Driven Development</li>
        <li class="option-item"><span class="option-letter">d)</span> Performance-Driven Development</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q11</span>
    <span class="lo-badge">FL-2.1.4</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to be a challenge encountered when implementing DevOps?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Making sure that non-functional quality characteristics are not overlooked</li>
        <li class="option-item"><span class="option-letter">b)</span> Managing continuously changing test environments</li>
        <li class="option-item"><span class="option-letter">c)</span> The need for more manual testers with suitable experience</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Setting up the test automation as part of the delivery pipeline <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q12</span>
    <span class="lo-badge">FL-2.1.6</span>
  </div>
  <div class="question-text">Which of the following BEST describes retrospectives?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment</li>
        <li class="option-item"><span class="option-letter">d)</span> Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q13</span>
    <span class="lo-badge">FL-2.2.2</span>
  </div>
  <div class="question-text">Which of the following tests is MOST likely to be performed as part of functional testing?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> The test checks that the sort function puts the elements of the list or array in ascending order <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> The test checks whether the sort function completes sorting within one second of starting</li>
        <li class="option-item"><span class="option-letter">c)</span> The test checks how easily the sort function can be changed from sorting ascending to sorting descending</li>
        <li class="option-item"><span class="option-letter">d)</span> The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q14</span>
    <span class="lo-badge">FL-2.3.1</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system</li>
        <li class="option-item"><span class="option-letter">d)</span> The language support option of the currency exchange system was used to enable both English and local language currency transactions</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>
`
};

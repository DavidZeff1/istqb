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
        <li class="option-item"><span class="option-letter">d)</span> In sequential, incremental, and iterative development models</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. The ISTQB syllabus states that "for every SDLC activity there is a corresponding test activity" is a universal good testing practice that applies to ALL development models — sequential, incremental, and iterative alike. Option A is wrong because this rule is not limited to sequential models only. Option B is wrong because it is not restricted to iterative models. Option C is wrong because it excludes sequential models. The principle is model-agnostic and applies universally.</div>
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
        <li class="option-item"><span class="option-letter">c)</span> In ATDD, tests are created, based on acceptance criteria to drive the development of the related software</li>
        <li class="option-item"><span class="option-letter">d)</span> in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. ATDD (Acceptance Test-Driven Development) creates tests based on acceptance criteria to drive the development of the related software. Option A is wrong because the given/when/then format is characteristic of BDD (Behavior-Driven Development), not specifically ATDD. Option B is wrong because ATDD operates at the acceptance level, not at the component testing level. Option D is wrong because describing tests based on desired behavior of software is a description of BDD, not ATDD.</div>
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
        <li class="option-item"><span class="option-letter">d)</span> Writing a test script before setting up the configuration management process</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Writing a test script before configuration management is set up is NOT shift-left — it is performing a testing task out of proper sequence, not earlier in the lifecycle. Option A is shift-left (reviewing requirements before formal acceptance is testing earlier). Option B is shift-left (writing component tests before code is TDD, a classic shift-left practice). Option C is shift-left (performing non-functional testing at the component level moves it earlier than usual).</div>
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
        <li class="option-item"><span class="option-letter">c)</span> Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program</li>
        <li class="option-item"><span class="option-letter">d)</span> Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Retrospectives identify process weaknesses that can be analyzed and used as input for the organization's continuous process improvement program. Option A is wrong because popularity is not a valid business argument for adopting retrospectives. Option B is wrong because retrospectives focus on internal team process improvement, not on collecting product feedback from end users. Option D is wrong because courage and respect are Scrum values, not the primary purpose or justification for holding retrospectives.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q13</span>
    <span class="lo-badge">FL-2.2.1</span>
  </div>
  <div class="question-text">Which types of failures (1-4) fit which test levels (A-D) BEST? 1. 2. 3. 4. Failures in system behavior as it deviates from the user’s business needs Failures in communication between components Failures in logic in the code Failures in not correctly implemented business rules A. Component testing B. Component integration testing C. System testing D. Acceptance testing</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 1D, 2B, 3A, 4C</li>
        <li class="option-item"><span class="option-letter">b)</span> 1D, 2B, 3C, 4A</li>
        <li class="option-item"><span class="option-letter">c)</span> 1B, 2A, 3D, 4C</li>
        <li class="option-item"><span class="option-letter">d)</span> 1C, 2B, 3A, 4D</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. The correct mapping is: 1D — failures in system behavior deviating from business needs map to acceptance testing (validates business requirements); 2B — failures in communication between components map to component integration testing (tests interfaces between components); 3A — failures in logic in the code map to component testing (tests individual code units); 4C — failures in incorrectly implemented business rules map to system testing (tests the whole system against specifications). The other options incorrectly assign failure types to wrong test levels.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q14</span>
    <span class="lo-badge">FL-2.2.3</span>
  </div>
  <div class="question-text">You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows: TC1 TC2 TC3 Execution 1 (1) Failed (2) Passed (3) Failed Execution 2 (4) Passed (5) Failed (6) Failed Execution 3 (7) Passed (8) Passed (9) Passed Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Only 4, 7, 8, 9</li>
        <li class="option-item"><span class="option-letter">b)</span> Only 5, 7</li>
        <li class="option-item"><span class="option-letter">c)</span> Only 4, 6, 8, 9</li>
        <li class="option-item"><span class="option-letter">d)</span> Only 5, 6</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Regression tests re-run previously passing tests to check nothing broke. Test 5 (TC2 in Execution 2) is regression because TC2 passed in Execution 1 but failed in Execution 2 — a previously passing test now fails. Test 7 (TC1 in Execution 3) is regression because TC1 passed in Execution 2 and is re-run to ensure it still passes. Option A is wrong because tests 4, 8, 9 include confirmation tests (re-testing previously failed tests after fixes). Option C is wrong because it mixes confirmation and regression tests. Option D is wrong because test 6 (TC3 in Execution 2) is a confirmation test — TC3 failed in Execution 1 and is re-tested after a fix.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA7</span>
    <span class="lo-badge">FL-2.1.1</span>
  </div>
  <div class="question-text">You are working as a tester in the team that follows the V-model. Which of the following activities CAN be performed in the initial phases of the SDLC?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Dynamic test execution</li>
        <li class="option-item"><span class="option-letter">b)</span> Static testing</li>
        <li class="option-item"><span class="option-letter">c)</span> Test planning</li>
        <li class="option-item"><span class="option-letter">d)</span> Acceptance test execution</li>
        <li class="option-item"><span class="option-letter">e)</span> Maintenance testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B, C</strong>. In the V-model, static testing (e.g., reviews of requirements and design documents) and test planning can be performed in the initial phases before any code is written. Option A is wrong because dynamic test execution requires working software, which is not available in initial phases. Option D is wrong because acceptance test execution occurs in later phases when the complete system is available. Option E is wrong because maintenance testing happens after the system has been deployed, not during initial development phases.</div>
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
        <li class="option-item"><span class="option-letter">c)</span> Constant availability of executable software</li>
        <li class="option-item"><span class="option-letter">d)</span> Reduction in the number of regression tests associated with code refactoring</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Constant availability of executable software through CI/CD pipelines is a key DevOps advantage — the delivery pipeline always has working, deployable software ready. Option A is wrong because while faster delivery is a benefit, option C more precisely matches the ISTQB syllabus wording about DevOps advantages. Option B is wrong because DevOps reduces (not increases) the need for manual testing through automation. Option D is wrong because DevOps typically increases the number of regression tests needed, not reduces them, since frequent code changes require extensive regression testing.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA9</span>
    <span class="lo-badge">FL-2.2.2</span>
  </div>
  <div class="question-text">You work as a tester on a project on a mobile application for food ordering for one of your clients. The client sent you a list of requirements. One of them, with high priority, says “The order must be processed in less than 10 seconds in 95% of the cases”. You created a set of test cases in which a number of random orders were made, the processing time measured, and the test results were checked against the requirements. What test type did you perform?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Functional, because the test cases cover the user’s business requirement for the system</li>
        <li class="option-item"><span class="option-letter">b)</span> Non-functional, because they measure the system’s performance</li>
        <li class="option-item"><span class="option-letter">c)</span> Functional, because the test cases interact with the user interface</li>
        <li class="option-item"><span class="option-letter">d)</span> White-box, because we need to know the internal structure of the program to measure the</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Testing processing time against a performance requirement ("less than 10 seconds in 95% of cases") is non-functional performance testing — it tests "how well" the system performs, not "what" it does. Option A is wrong because the test measures performance characteristics, not functional behavior. Option C is wrong because interacting with the UI doesn't make a test functional — the focus here is on timing/performance. Option D is wrong because no knowledge of internal structure is needed to measure processing time; this is a black-box approach.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA10</span>
    <span class="lo-badge">FL-2.3.1</span>
  </div>
  <div class="question-text">Your organization’s test strategy suggests that once a system is going to be retired, data migration shall be tested. As part of what test type is this testing MOST likely to be performed?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Maintenance testing</li>
        <li class="option-item"><span class="option-letter">b)</span> Regression testing</li>
        <li class="option-item"><span class="option-letter">c)</span> Reliability testing</li>
        <li class="option-item"><span class="option-letter">d)</span> Integration testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Testing data migration when a system is being retired is maintenance testing — it is triggered by system retirement, which is one of the recognized triggers for maintenance testing in the ISTQB syllabus. Option B is wrong because regression testing checks that unchanged areas still work after changes, which is not what's being described. Option C is wrong because reliability testing checks failure rates and stability. Option D is wrong because integration testing checks interfaces between components, not data migration during retirement.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q9</span>
    <span class="lo-badge">FL-2.1.1</span>
  </div>
  <div class="question-text">Which of the following statements about the chosen software development lifecycle is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> If agile software development is used, automation of system tests replaces the need for regression testing</li>
        <li class="option-item"><span class="option-letter">b)</span> If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle</li>
        <li class="option-item"><span class="option-letter">c)</span> If an iterative development model is used, then component testing is typically performed manually by developers</li>
        <li class="option-item"><span class="option-letter">d)</span> If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. In sequential development models, dynamic testing is typically restricted to later phases because working software is needed to execute tests — code isn't available until later stages. Option A is wrong because automation does not replace the need for regression testing; it supports it. Option C is wrong because in iterative models, component testing is often automated by developers, not performed manually. Option D is wrong because both static and dynamic testing can occur throughout incremental development, not separated into early and late increments.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q10</span>
    <span class="lo-badge">FL-2.1.2</span>
  </div>
  <div class="question-text">Which of the following is a good testing practice that applies to all software development lifecycles?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Testers should review work products as part of the next development phase</li>
        <li class="option-item"><span class="option-letter">b)</span> Testers should review work products as soon as drafts are available</li>
        <li class="option-item"><span class="option-letter">c)</span> Testers should review work products before test analysis and test design begin</li>
        <li class="option-item"><span class="option-letter">d)</span> Testers should review work products immediately after they are published</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Reviewing work products as soon as drafts are available is a universal good testing practice — it aligns with the early testing principle and enables early defect detection. Option A is wrong because waiting until the next development phase is too late and misses the benefit of early feedback. Option C is wrong because delaying reviews until before test analysis unnecessarily postpones the review activity. Option D is wrong because "immediately after published" may still be too late if earlier drafts were available for review.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q11</span>
    <span class="lo-badge">FL-2.1.3</span>
  </div>
  <div class="question-text">Which of the following is an example of a test-first approach to development?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test-Driven Development</li>
        <li class="option-item"><span class="option-letter">b)</span> Coverage-Driven Development</li>
        <li class="option-item"><span class="option-letter">c)</span> Quality-Driven Development</li>
        <li class="option-item"><span class="option-letter">d)</span> Feature-Driven Development</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Test-Driven Development (TDD) is a recognized test-first approach where tests are written before the code that makes them pass. Option B (Coverage-Driven Development), Option C (Quality-Driven Development), and Option D (Feature-Driven Development — while a real methodology, it is not a test-first approach) are either made-up terms or not test-first approaches as defined in the ISTQB syllabus.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q12</span>
    <span class="lo-badge">FL-2.1.4</span>
  </div>
  <div class="question-text">Which of the following statements about DevOps is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing</li>
        <li class="option-item"><span class="option-letter">b)</span> To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression</li>
        <li class="option-item"><span class="option-letter">c)</span> To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach</li>
        <li class="option-item"><span class="option-letter">d)</span> To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. DevOps requires extensive automated regression testing to support frequent releases with confidence — many automated regression tests reduce risk when releasing often. Option A is wrong because developers still need to complete component testing; CI doesn't eliminate that need. Option C is wrong because shift-right is about testing in production environments, not about treating developers and operations equally. Option D is wrong because some manual testing (e.g., exploratory testing) is still needed in DevOps; full automation is not realistic or required.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q13</span>
    <span class="lo-badge">FL-2.2.1</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to be performed as part of system testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Security testing of a credit management system by an independent test team</li>
        <li class="option-item"><span class="option-letter">b)</span> Testing the interface of a currency exchange system with an external banking system</li>
        <li class="option-item"><span class="option-letter">c)</span> Beta testing of a remote learning system by courseware developers</li>
        <li class="option-item"><span class="option-letter">d)</span> Testing interactions between the user interface and database of a human resources system</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Security testing of a credit management system by an independent test team is system-level testing — it tests the complete integrated system for a non-functional quality characteristic. Option B is wrong because testing external interfaces with a banking system is system integration testing (testing between systems). Option C is wrong because beta testing by courseware developers is a form of acceptance testing. Option D is wrong because testing interactions between UI and database is component integration testing (testing interfaces between internal components).</div>
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
        <li class="option-item"><span class="option-letter">d)</span> Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Regression testing checks unchanged code for unintended adverse effects after changes, while confirmation testing (re-testing) verifies that the specific fix works correctly. Option A is wrong because the number of regression tests doesn't necessarily decrease — they typically grow. Option B is wrong because regression tests aren't specifically created when objects are fixed; they are existing tests that are re-run. Option C is wrong because regression testing doesn't check the operational environment; it checks that unchanged software still functions correctly.</div>
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
        <li class="option-item"><span class="option-letter">d)</span> For every development activity, there is a corresponding test activity</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. "For every development activity, there is a corresponding test activity" is a fundamental good testing practice stated in the ISTQB syllabus. Option A is wrong because test levels don't always map one-to-one to development levels. Option B is wrong because test objectives don't necessarily correspond to development objectives — they have distinct purposes. Option C is wrong because test activities don't correspond to user activities; testing aligns with development, not user activities.</div>
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
        <li class="option-item"><span class="option-letter">d)</span> Acceptance Test-Driven Development</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Acceptance Test-Driven Development (ATDD) is a recognized test-first approach in the ISTQB syllabus where acceptance tests are defined before development begins. Option A (Component Test-Driven Development), Option B (Integration Test-Driven Development), and Option C (System Test-Driven Development) are invented terms not found in the ISTQB syllabus.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q11</span>
    <span class="lo-badge">FL-2.1.5</span>
  </div>
  <div class="question-text">Which of the following provides the BEST description of shift-left?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of ‘early testing saves time and money’</li>
        <li class="option-item"><span class="option-letter">b)</span> Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC</li>
        <li class="option-item"><span class="option-letter">c)</span> When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests</li>
        <li class="option-item"><span class="option-letter">d)</span> When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Shift-left means moving test activities earlier in the SDLC to reduce the total cost of quality by finding and fixing defects sooner when they are cheaper to resolve. Option A is wrong because it focuses on automation rather than moving activities earlier in time. Option C is wrong because it focuses on spare time and automation, not the core concept of earlier testing. Option D is wrong because it focuses on training testers, not the fundamental shift-left principle of performing test activities earlier.</div>
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
        <li class="option-item"><span class="option-letter">c)</span> End users’ understanding of the development and test processes is improved</li>
        <li class="option-item"><span class="option-letter">d)</span> Automated test scripts are enhanced through feedback from developers</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Improving end users' understanding of development and test processes is LEAST likely to result from a retrospective — retrospectives are internal team activities focused on team process improvement, not on educating end users. Option A is plausible because retrospectives can identify development practice improvements. Option B is plausible because retrospectives can lead to environment setup improvements. Option D is plausible because developer feedback during retrospectives can enhance test scripts.</div>
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
        <li class="option-item"><span class="option-letter">d)</span> Acceptance testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Acceptance testing is focused on validation (building the right product) and is typically performed by users or business representatives, not by professional testers. Option A (component testing) is performed by developers and focuses on verification. Option B (component integration testing) is performed by developers and tests interfaces between components. Option C (system integration testing) tests interfaces between systems and is typically done by testers, not users.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q14</span>
    <span class="lo-badge">FL-2.2.3</span>
  </div>
  <div class="question-text">The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Only confirmation testing</li>
        <li class="option-item"><span class="option-letter">b)</span> Confirmation testing then regression testing</li>
        <li class="option-item"><span class="option-letter">c)</span> Only regression testing</li>
        <li class="option-item"><span class="option-letter">d)</span> Regression testing then confirmation testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. After fixing a defect, you first perform confirmation testing (to verify the fix resolves the original defect), then regression testing (to check that the fix hasn't broken anything else). Option A is wrong because you need both types of testing, not just confirmation. Option C is wrong because regression testing alone would miss verifying whether the actual fix works. Option D is wrong because confirmation testing must come first — you need to verify the fix before checking for side effects.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q9</span>
    <span class="lo-badge">FL-2.1.2</span>
  </div>
  <div class="question-text">Which of the following is a good testing practice that applies to all software development lifecycles?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Each test level has specific and distinct test objectives</li>
        <li class="option-item"><span class="option-letter">b)</span> Test implementation and execution for a given test level should start during the corresponding development phase</li>
        <li class="option-item"><span class="option-letter">c)</span> Testers should start test design as soon as drafts of the relevant work products become available</li>
        <li class="option-item"><span class="option-letter">d)</span> Every dynamic testing activity has a corresponding static testing activity</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Each test level having specific and distinct test objectives is a universal good testing practice per the ISTQB syllabus. Option B is wrong because test implementation and execution don't start during the corresponding development phase in all models. Option C is wrong because starting test design as soon as drafts are available describes when to start reviews, not test design. Option D is wrong because there is no such one-to-one mapping between dynamic and static testing activities.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q10</span>
    <span class="lo-badge">FL-2.1.3</span>
  </div>
  <div class="question-text">Which of the following is an example of a test-first approach to development?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Behavior-Driven Development</li>
        <li class="option-item"><span class="option-letter">b)</span> Test Level Driven Development</li>
        <li class="option-item"><span class="option-letter">c)</span> Function-Driven Development</li>
        <li class="option-item"><span class="option-letter">d)</span> Performance-Driven Development</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Behavior-Driven Development (BDD) is a recognized test-first approach in the ISTQB syllabus where tests are based on desired system behavior using formats like given/when/then. Option B (Test Level Driven Development), Option C (Function-Driven Development), and Option D (Performance-Driven Development) are invented terms not defined as test-first approaches in the ISTQB syllabus.</div>
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
        <li class="option-item"><span class="option-letter">d)</span> Setting up the test automation as part of the delivery pipeline</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Setting up test automation in the delivery pipeline is a key DevOps challenge — establishing and maintaining the CI/CD pipeline with proper automated testing requires significant effort. Option A is wrong because ensuring non-functional quality is a general testing challenge, not specific to DevOps implementation. Option B is wrong because it is vague and not the most specific DevOps challenge. Option C is wrong because DevOps needs automation skills, not more manual testers — the trend is toward automation, not manual testing.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q12</span>
    <span class="lo-badge">FL-2.1.6</span>
  </div>
  <div class="question-text">Which of the following BEST describes retrospectives?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach</li>
        <li class="option-item"><span class="option-letter">b)</span> Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future</li>
        <li class="option-item"><span class="option-letter">c)</span> Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment</li>
        <li class="option-item"><span class="option-letter">d)</span> Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Retrospectives give testers and team members an opportunity to identify successful activities that should be retained while making improvements for the future. Option A is wrong because assigning blame to team members is contrary to the blameless spirit of retrospectives. Option C is wrong because retrospectives are not a forum for voicing concerns about management and customers — they focus on team process improvement. Option D is wrong because iteration planning is a separate activity from retrospectives; retrospectives look backward, not forward at plans.</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q13</span>
    <span class="lo-badge">FL-2.2.2</span>
  </div>
  <div class="question-text">Which of the following tests is MOST likely to be performed as part of functional testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The test checks that the sort function puts the elements of the list or array in ascending order</li>
        <li class="option-item"><span class="option-letter">b)</span> The test checks whether the sort function completes sorting within one second of starting</li>
        <li class="option-item"><span class="option-letter">c)</span> The test checks how easily the sort function can be changed from sorting ascending to sorting descending</li>
        <li class="option-item"><span class="option-letter">d)</span> The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Checking that the sort function produces correct ascending order is functional testing — it tests what the system does (its function/behavior). Option B is wrong because measuring completion time is performance testing (non-functional). Option C is wrong because checking ease of change is maintainability testing (non-functional). Option D is wrong because checking correct function across architectures is portability testing (non-functional).</div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q14</span>
    <span class="lo-badge">FL-2.3.1</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true</li>
        <li class="option-item"><span class="option-letter">b)</span> The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers</li>
        <li class="option-item"><span class="option-letter">c)</span> The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system</li>
        <li class="option-item"><span class="option-letter">d)</span> The language support option of the currency exchange system was used to enable both English and local language currency transactions</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Removing a feature (the refund option) from the system is a modification that triggers maintenance testing — the syllabus identifies retirement and modification of existing software as maintenance testing triggers. Option A is wrong because developers finding difficulty changing the system is not a recognized trigger for maintenance testing. Option C is wrong because developing a new user story is regular development work, not maintenance. Option D is wrong because using existing features for normal operations does not trigger maintenance testing.</div>
</div>
`,
};

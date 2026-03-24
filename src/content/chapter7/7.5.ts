export const content = {
  title: "Chapter 5 Exam Questions",
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
    <span class="question-source">Exam A - Q30</span>
    <span class="lo-badge">FL-5.1.2</span>
  </div>
  <div class="question-text">How do testers add value to iteration and release planning?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Testers determine the priority of the user stories to be developed</li>
        <li class="option-item"><span class="option-letter">b)</span> Testers focus only on the functional aspects of the system to be tested</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Testers participate in the detailed risk identification and risk assessment of user stories <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Testers guarantee the release of high-quality software through early test design during the</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q31</span>
    <span class="lo-badge">FL-5.1.3</span>
  </div>
  <div class="question-text">Which TWO of the following options are the exit criteria for testing a system?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test environment readiness</li>
        <li class="option-item"><span class="option-letter">b)</span> The ability to log in to the test object by the tester</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Estimated defect density is reached <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Requirements are translated into given/when/then format</li>
        <li class="option-item option-correct"><span class="option-letter">e)</span> Regression tests are automated <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C, E</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q32</span>
    <span class="lo-badge">FL-5.1.4</span>
  </div>
  <div class="question-text">Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made: • • • Most optimistic estimation: 2 person-hours Most likely estimation: 11 person-hours Most pessimistic estimation: 14 person-hours What is the final estimate?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 9 person-hours</li>
        <li class="option-item"><span class="option-letter">b)</span> 14 person-hours</li>
        <li class="option-item"><span class="option-letter">c)</span> 11 person-hours</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> 10 person-hours <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q33</span>
    <span class="lo-badge">FL-5.1.5</span>
  </div>
  <div class="question-text">You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies: Test case number TC 001 TC 002 TC 003 TC 004 TC 005 Test condition covered Priority Select type of food Select restaurant Get direction Call restaurant Make reservation 3 2 1 2 3 Logical dependency none TC 001 TC 002 TC 002 TC 002 Which of the following test cases should be executed as the third one?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> TC 003 <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> TC 005</li>
        <li class="option-item"><span class="option-letter">c)</span> TC 002</li>
        <li class="option-item"><span class="option-letter">d)</span> TC 001</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q34</span>
    <span class="lo-badge">FL-5.1.7</span>
  </div>
  <div class="question-text">Consider the following test categories (1-4) and agile testing quadrants (A-D): 1. 2. 3. 4. Usability testing Component testing Functional testing Reliability testing A. Agile testing quadrant Q1: technology facing, supporting the development team B. Agile testing quadrant Q2: business facing, supporting the development team C. Agile testing quadrant Q3: business facing, critique the product D. Agile testing quadrant Q4: technology facing, critique the product How do the following test categories map onto the agile testing quadrants?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> 1C, 2A, 3B, 4D <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> 1D, 2A, 3C, 4B</li>
        <li class="option-item"><span class="option-letter">c)</span> 1C, 2B, 3D, 4A</li>
        <li class="option-item"><span class="option-letter">d)</span> 1D, 2B, 3C, 4A</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q35</span>
    <span class="lo-badge">FL-5.2.4</span>
  </div>
  <div class="question-text">During a risk analysis the following risk was identified and assessed: • • • Risk: Response time is too long to generate a report Risk likelihood: medium; risk impact: high Response to risk: o An independent test team performs performance efficiency testing during system testing o A selected sample of end users performs alpha testing and beta testing before the release What measure is proposed to be taken in response to this analyzed risk?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Risk acceptance</li>
        <li class="option-item"><span class="option-letter">b)</span> Contingency plan</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Risk mitigation <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Risk transfer</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q36</span>
    <span class="lo-badge">FL-5.3.3</span>
  </div>
  <div class="question-text">Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Acceptance criteria</li>
        <li class="option-item"><span class="option-letter">b)</span> Defect report</li>
        <li class="option-item"><span class="option-letter">c)</span> Test completion report</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Burndown chart <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q37</span>
    <span class="lo-badge">FL-5.4.1</span>
  </div>
  <div class="question-text">You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Traceability management</li>
        <li class="option-item"><span class="option-letter">b)</span> Maintenance testing</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Configuration management <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Requirements engineering</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q38</span>
    <span class="lo-badge">FL-5.5.1</span>
  </div>
  <div class="question-text">You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible. Application hangs up 2022-May-03 – John Doe – Rejected The application hangs up after entering “Test input: $ä” in the Name field on the new user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried with other test admin accounts, same issue. No error message received; log (see attached) contains fatal error notification. Based on the test case TC-1305, the application should accept the provided input and create the user. Please fix with high priority, this feature is related to REQ-0012, which is a critical new business requirement. What critical information is MISSING from this test report that would have been useful for the developers?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Expected result and actual result</li>
        <li class="option-item"><span class="option-letter">b)</span> References and defect status</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Test environment and test item <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Priority and severity</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA19</span>
    <span class="lo-badge">FL-5.1.1</span>
  </div>
  <div class="question-text">Consider the following part of a test plan. Testing will be performed using component testing and component integration testing. The regulations require to demonstrate that 100% branch coverage is achieved for each component classified as critical. Which part of the test plan does this part belong to?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Communication</li>
        <li class="option-item"><span class="option-letter">b)</span> Risk register</li>
        <li class="option-item"><span class="option-letter">c)</span> Context of testing</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Test approach <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA20</span>
    <span class="lo-badge">FL-5.1.4</span>
  </div>
  <div class="question-text">Your team uses planning poker to estimate the test effort for a newly required feature. There is a rule in your team that if there is no time to reach full agreement and the variation in the results is small, rules like “accept the number with the most votes” can be applied. After two rounds, the consensus was not reached, so the third round was initiated. You can see the test estimation results in the table below. Round 1 Round 2 Round 3 21 13 13 Team members' estimations 2 5 34 13 8 8 8 34 13 8 8 13 13 13 13 2 5 8 Which of the following is the BEST example of the next step?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The product owner has to step in and make a final decision</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Accept 13 as the final test estimate as this has most of the votes <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> No further action is needed. Consensus has been reached</li>
        <li class="option-item"><span class="option-letter">d)</span> Remove the new feature from the current release because consensus has not been</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA21</span>
    <span class="lo-badge">FL-5.1.6</span>
  </div>
  <div class="question-text">Which of the following is TRUE regarding the test pyramid?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> It emphasizes having far more tests at the lower test levels <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> It suggests that each low-level test checks a large part of the functionality</li>
        <li class="option-item"><span class="option-letter">c)</span> It describes distribution of test types across the SDLC</li>
        <li class="option-item"><span class="option-letter">d)</span> It has no impact on the construction of automated tests</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA22</span>
    <span class="lo-badge">FL-5.2.1</span>
  </div>
  <div class="question-text">During risk analysis the team considered the following risk: “The system allows too high a discount for a customer”. The team estimated the risk impact to be very high. What can one say about the risk likelihood?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> It is also very high. High risk impact always implies high risk likelihood</li>
        <li class="option-item"><span class="option-letter">b)</span> It is very low. High risk impact always implies low risk likelihood</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent. <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Risk likelihood is not important with such a high-risk impact. One does not need to define it.</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA23</span>
    <span class="lo-badge">FL-5.2.2</span>
  </div>
  <div class="question-text">The following list contains risks that have been identified for a new software product to be developed: i. ii. iii. iv. v. Management moves two experienced testers to another project The system does not comply with security standards System response time exceeds user requirements Stakeholders have inaccurate expectations Disabled people have problems when using the system Which of them are project risks?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> i, iv are project risks <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> iv, v are project risks</li>
        <li class="option-item"><span class="option-letter">c)</span> i, iii are project risks</li>
        <li class="option-item"><span class="option-letter">d)</span> ii, v are project risks</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA24</span>
    <span class="lo-badge">FL-5.2.3</span>
  </div>
  <div class="question-text">Which of the following is an example of how product risk analysis influences thoroughness and scope of testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date</li>
        <li class="option-item"><span class="option-letter">b)</span> One of the identified risks was &quot;Lack of support of open-source databases&quot;, so the team decided to integrate the system with an open-source database</li>
        <li class="option-item"><span class="option-letter">c)</span> During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA25</span>
    <span class="lo-badge">FL-5.3.1</span>
  </div>
  <div class="question-text">Which TWO of the following options are common metrics used for reporting on the quality level of the test object?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Number of defects found during system testing <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Total effort on test design divided by the number of designed test cases</li>
        <li class="option-item"><span class="option-letter">c)</span> Number of executed test procedures</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Number of defects found divided by the size of a work product <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">e)</span> Time needed to repair a defect</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A, D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA26</span>
    <span class="lo-badge">FL-5.3.2</span>
  </div>
  <div class="question-text">Which of the following pieces of information contained in a test progress report is the LEAST useful for business representatives?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Impediments to testing</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Branch coverage achieved <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Test progress</li>
        <li class="option-item"><span class="option-letter">d)</span> New risks within the test cycle</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q30</span>
    <span class="lo-badge">FL-5.1.3</span>
  </div>
  <div class="question-text">Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are: (1) Code development (2) Submit code into a version control system and merge it into the “test” branch (3) Perform component testing for the submitted code Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Static analysis returns no high severity warnings for the submitted code <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> System version control reports no conflicts when merging code into the “test” branch</li>
        <li class="option-item"><span class="option-letter">c)</span> Component tests are compiled and ready to be executed</li>
        <li class="option-item"><span class="option-letter">d)</span> Statement coverage is at least 80%</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q31</span>
    <span class="lo-badge">FL-5.1.4</span>
  </div>
  <div class="question-text">You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data. Project Development effort ($) Test effort ($) P1 800,000 40,000 P2 1,200,000 130,000 P3 600,000 70,000 P4 1,000,000 120,000 The estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> $40,000</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> $80,000 <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> $81,250</li>
        <li class="option-item"><span class="option-letter">d)</span> $82,500</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q32</span>
    <span class="lo-badge">FL-5.1.5</span>
  </div>
  <div class="question-text">You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER. You have prepared the following seven test cases, all of which you want to execute. The tests should be executed in the best order, based on test priority. TC1 TC2 TC3 TC4 TC5 TC6 TC7 Test SEARCH for product A SEARCH for product B VIEW product A details VIEW product B details ADD product A to a shopping cart ADD product B to a shopping cart place an ORDER Priority (1 = higher priority) 4 4 3 2 3 1 5 You also identified the following logical dependencies between test cases: • SEARCH functionality must be tested before VIEW functionality can be tested. • VIEW functionality must be tested before ADD functionality. • ADD functionality must be tested before ORDER functionality. Which test case should be executed as the fourth one?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> TC3</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> TC1 <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> TC7</li>
        <li class="option-item"><span class="option-letter">d)</span> TC2</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q33</span>
    <span class="lo-badge">FL-5.1.7</span>
  </div>
  <div class="question-text">According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology facing” and “support the team”)?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Usability testing</li>
        <li class="option-item"><span class="option-letter">b)</span> Functional testing</li>
        <li class="option-item"><span class="option-letter">c)</span> User acceptance testing</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Component integration testing <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q34</span>
    <span class="lo-badge">FL-5.2.4</span>
  </div>
  <div class="question-text">Given the following risks: 1. Ineffective loop implementation causes long system responses 2. Consumers change their preferences 3. Flooding of the server room 4. Patients above a certain age receive inaccurate reports And the following mitigation activities: A. Risk acceptance B. Testing for performance efficiency C. Using boundary value analysis as the test technique D. Risk transfer Which of the following BEST matches the risks with the mitigation activities?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 1C,</li>
        <li class="option-item"><span class="option-letter">b)</span> 1B,</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> 1B, <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> 1C,</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q35</span>
    <span class="lo-badge">FL-5.3.1</span>
  </div>
  <div class="question-text">Which of the following is a product quality metric?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Mean time to failure <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Number of defects found</li>
        <li class="option-item"><span class="option-letter">c)</span> Requirements coverage</li>
        <li class="option-item"><span class="option-letter">d)</span> Defect detection percentage</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q36</span>
    <span class="lo-badge">FL-5.3.3</span>
  </div>
  <div class="question-text">You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline. Which of the following is the LEAST effective way to communicate test progress to the customer?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Face-to-face <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Dashboards</li>
        <li class="option-item"><span class="option-letter">c)</span> Email</li>
        <li class="option-item"><span class="option-letter">d)</span> Video conferencing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q37</span>
    <span class="lo-badge">FL-5.4.1</span>
  </div>
  <div class="question-text">Which of the following BEST describes an example of how configuration management (CM) supports testing?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage</li>
        <li class="option-item"><span class="option-letter">c)</span> Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end</li>
        <li class="option-item"><span class="option-letter">d)</span> Having the version number of the test case, the CM tool can automatically generate test data for this test case</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q38</span>
    <span class="lo-badge">FL-5.5.1</span>
  </div>
  <div class="question-text">You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows. Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5 Test run ID: 736 Start 12:43:21.003 12:43:21.003 Execution of TC1. Input: 3. Output: 3. Result: passed 12:43:21.003 Execution of TC2. Input: 3 11 6 5. Output: 3 5 6 11. Result: passed 12:43:21.004 Execution of TC3. Input: 8 7 3 7 1. Output: 1 3 7 8. Result: failed 12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3 -2. Result: failed 12:43:21.005 Execution of TC5. Input: 0 -2 0 3 4 4. Output: -2 0 3 4. Result: failed End 12:43:21.005 Total time of test cycle: 0:00:00.002 Which of the following provides the BEST description of the failure that can be used in a defect report?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5. <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> The system fails to sort negative numbers. Reference: TC4, TC5.</li>
        <li class="option-item"><span class="option-letter">d)</span> TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected.</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q30</span>
    <span class="lo-badge">FL-5.1.1</span>
  </div>
  <div class="question-text">Which of the following is NOT a purpose of a test plan?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> To define test data and expected results for component tests and component integration tests <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> To define as exit criteria from the component test level that “100% statement coverage and 100% branch coverage must be achieved”</li>
        <li class="option-item"><span class="option-letter">c)</span> To describe what fields the test progress report shall contain and what should be the form of this report</li>
        <li class="option-item"><span class="option-letter">d)</span> To explain why system integration testing will be excluded from testing, although the test strategy requires this test level</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q31</span>
    <span class="lo-badge">FL-5.1.4</span>
  </div>
  <div class="question-text">At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the following estimation model based on extrapolation: 𝐸(𝑛) = 3 ∗ 𝐴(𝑛 − 1) + 𝐴(𝑛 − 2) 4 The graph shows the estimated and actual amount of work for the first four iterations. Estimated and actual effort (in person-days) 13 12 11 10 9 8 7 6 5 4 3 2 1 0 Iteration #1 Iteration #2 Estimated Iteration #3 Iteration #4 Actual What is the estimated amount of work for iteration #5?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 10.5 person-days</li>
        <li class="option-item"><span class="option-letter">b)</span> 8.25 person-days</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> 6.5 person-days <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> 9.4 person-days</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q32</span>
    <span class="lo-badge">FL-5.1.5</span>
  </div>
  <div class="question-text">You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7. The following figure includes the priorities of these test cases (1=highest priority, 3 = lowest priority). The figure also shows the dependencies between test cases using arrows. For instance, the arrow from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed. Which test case should be executed sixth?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> TC 3 <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> TC 5</li>
        <li class="option-item"><span class="option-letter">c)</span> TC 6</li>
        <li class="option-item"><span class="option-letter">d)</span> TC 2</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q33</span>
    <span class="lo-badge">FL-5.1.6</span>
  </div>
  <div class="question-text">What does the test pyramid model show?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> That tests may have different priorities</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> That tests may have different granularity <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> That tests may require different coverage criteria</li>
        <li class="option-item"><span class="option-letter">d)</span> That tests may depend on other tests</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q34</span>
    <span class="lo-badge">FL-5.1.7</span>
  </div>
  <div class="question-text">What is the relationship between the testing quadrants, test levels and test types?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle</li>
        <li class="option-item"><span class="option-letter">b)</span> Testing quadrants describe the degree of granularity of individual test types performed at each test level</li>
        <li class="option-item"><span class="option-letter">c)</span> Testing quadrants assign the test types that can be performed to the test levels</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q35</span>
    <span class="lo-badge">FL-5.2.3</span>
  </div>
  <div class="question-text">Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Continuous risk monitoring allows us to identify an emerging risk as soon as possible</li>
        <li class="option-item"><span class="option-letter">b)</span> Risk identification allows us to implement risk mitigation activities and reduce the risk level</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> The assessed risk level helps us to select the rigor of testing <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Risk analysis allows us to derive coverage items</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q36</span>
    <span class="lo-badge">FL-5.3.2</span>
  </div>
  <div class="question-text">Which of the following activities in the test process makes the MOST use of test progress reports?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test design</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Test completion <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Test analysis</li>
        <li class="option-item"><span class="option-letter">d)</span> Test planning</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q37</span>
    <span class="lo-badge">FL-5.4.1</span>
  </div>
  <div class="question-text">Which of the following is NOT an example of how configuration management supports testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> All commits to the repository are uniquely identified and version controlled</li>
        <li class="option-item"><span class="option-letter">b)</span> All changes in the test environment elements are tracked</li>
        <li class="option-item"><span class="option-letter">c)</span> All requirement specifications are referenced unambiguously in test plans</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> All identified defects have an assigned status <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q38</span>
    <span class="lo-badge">FL-5.5.1</span>
  </div>
  <div class="question-text">Consider the following defect report for a web-based shopping application: Application: WebShop v0.99 Defect: Login button not working Steps to Reproduce: Launch the website Click on the login button Expected result: The user should be redirected to the login page. Actual result: The login button does not respond when clicked. Severity: High Priority: Urgent What is the MOST important information that is missing from this defect report?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Name of the tester and date</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Test environment elements and their version numbers <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Identification of the test object</li>
        <li class="option-item"><span class="option-letter">d)</span> Impact on the interests of stakeholders</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q30</span>
    <span class="lo-badge">FL-5.1.3</span>
  </div>
  <div class="question-text">Which of the following BEST define EXIT criteria in a testing project?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Budget is approved</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Budget runs out <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Test basis is available</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Test cases achieved at least 80% statement coverage <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">e)</span> All test analysts are ISTQB certified at the Foundation Level</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B, D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q31</span>
    <span class="lo-badge">FL-5.1.4</span>
  </div>
  <div class="question-text">The team wants to estimate the time needed for one tester to execute four test cases for a software component. The team has gathered the following measures of the effort used to execute a single test case: • Best-case scenario: 1 hour • Worst-case scenario: 8 hours • Most likely scenario: 3 hours Given that the three-point estimation technique is being used, what is the final estimate of the time needed to execute all four test cases?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> 14 hours <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> 3.5 hours</li>
        <li class="option-item"><span class="option-letter">c)</span> 16 hours</li>
        <li class="option-item"><span class="option-letter">d)</span> 12 hours</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q32</span>
    <span class="lo-badge">FL-5.1.5</span>
  </div>
  <div class="question-text">The table shows the traceability matrix from test cases to requirements. “X” means that a given test case covers the corresponding requirement. Req1 TC1 X TC2 X Req2 Req3 Req4 X X Req6 Req7 X X TC3 TC4 Req5 X X X X You want to prioritize the test cases following the additional coverage prioritization technique. You execute all four test cases. Which test case should be executed as the LAST one?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> TC1</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> TC2 <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> TC3</li>
        <li class="option-item"><span class="option-letter">d)</span> TC4</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q33</span>
    <span class="lo-badge">FL-5.1.7</span>
  </div>
  <div class="question-text">How can the testing quadrants be beneficial for testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing</li>
        <li class="option-item"><span class="option-letter">b)</span> They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q34</span>
    <span class="lo-badge">FL-5.2.1</span>
  </div>
  <div class="question-text">For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%. What is the risk impact?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> $500</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> $2,000 <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> $50,000</li>
        <li class="option-item"><span class="option-letter">d)</span> $200</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q35</span>
    <span class="lo-badge">FL-5.2.2</span>
  </div>
  <div class="question-text">Which of the following are product risks?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Scope creep</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Poor architecture <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Cost-cutting</li>
        <li class="option-item"><span class="option-letter">d)</span> Poor tool support</li>
        <li class="option-item option-correct"><span class="option-letter">e)</span> Too long response time <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B, E</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q36</span>
    <span class="lo-badge">FL-5.3.2</span>
  </div>
  <div class="question-text">Which of the following is NOT a valid purpose for a test report?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Tracking test progress and identifying areas that require further attention</li>
        <li class="option-item"><span class="option-letter">b)</span> Providing information on the tests executed, their results, and defects found</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Providing information about each defect, such as the steps to reproduce it <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Providing information on testing planned for the next period</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q37</span>
    <span class="lo-badge">FL-5.4.1</span>
  </div>
  <div class="question-text">The user reported a software failure. An engineer from the support team asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that made up the release. This later allowed a developer to perform analysis, find the defect, and fix it. Which of the following enabled the above activity to be performed by the team?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Risk management</li>
        <li class="option-item"><span class="option-letter">b)</span> Test monitoring and control</li>
        <li class="option-item"><span class="option-letter">c)</span> Whole team approach</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Configuration management <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q38</span>
    <span class="lo-badge">FL-5.5.1</span>
  </div>
  <div class="question-text">Consider the following defect report for a Book Lending System. Defect ID: 001 | Title: Unable to Return a Book Severity: High | Priority: Environment: Windows 10, Google Chrome | | Description: When attempting to return a book using the Book Return feature, the system does not register the return and the book remains checked out to the user. Steps to Reproduce: Login to the Book Lending System as a user who has checked out a book. Click on the &quot;Book Return&quot; button for the book that has been checked out. System does not register the return and the book remains checked out. Expected Result: The book should be returned and no longer appear as checked out to the user. Actual Result: The book remains checked out to the user and is not registered as returned in the system. Attachments: [empty list] Which of the following is MOST likely to help the developer reproduce the failure quickly?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Adding information about which users and which books the failure affects to the “Description” section <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Filling in the missing value for the “Priority” field</li>
        <li class="option-item"><span class="option-letter">c)</span> Adding memory dumps and database snapshots taken after each step described in the “Steps to Reproduce” section to the “Attachments” section.</li>
        <li class="option-item"><span class="option-letter">d)</span> Repeating the same test case for different environments and writing defect reports for each of them separately</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>
`
};

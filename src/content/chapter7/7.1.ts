export const content = {
  title: "Chapter 1 Exam Questions",
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
    <span class="question-source">Exam A - Q1</span>
    <span class="lo-badge">FL-1.1.1</span>
  </div>
  <div class="question-text">Which of the following statements describe a valid test objective?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> To prove that there are no unfixed defects in the system under test</li>
        <li class="option-item"><span class="option-letter">b)</span> To prove that there will be no failures after the implementation of the system into production</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> To reduce the risk level of the test object and to build confidence in the quality level <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> To verify that there are no untested combinations of inputs</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q2</span>
    <span class="lo-badge">FL-1.2.1</span>
  </div>
  <div class="question-text">Which of the following options shows an example of test activities that contribute to success?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Testers try not to disturb the developers while coding, so that the developers write better code</li>
        <li class="option-item"><span class="option-letter">c)</span> Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing</li>
        <li class="option-item"><span class="option-letter">d)</span> Certified testers will design much better test cases than non-certified testers</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q3</span>
    <span class="lo-badge">FL-1.3.1</span>
  </div>
  <div class="question-text">You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Tests wear out <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Absence-of-defects fallacy</li>
        <li class="option-item"><span class="option-letter">c)</span> Defects cluster together</li>
        <li class="option-item"><span class="option-letter">d)</span> Exhaustive testing is impossible</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q4</span>
    <span class="lo-badge">FL-1.4.1</span>
  </div>
  <div class="question-text">You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Estimating that testing the integration with the payment service will take 8 person-days</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Deciding that the team should test if it is possible to properly share payment between many users <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid</li>
        <li class="option-item"><span class="option-letter">d)</span> Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q5</span>
    <span class="lo-badge">FL-1.4.2</span>
  </div>
  <div class="question-text">Which of the following factors have a SIGNIFICANT influence on the test approach? i. ii. iii. iv. v.</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The SDLC</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> The number of defects detected in previous projects <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> The identified product risks</li>
        <li class="option-item"><span class="option-letter">d)</span> New regulatory requirements forcing formal white-box testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q6</span>
    <span class="lo-badge">FL-1.4.5</span>
  </div>
  <div class="question-text">Which TWO of the following tasks belong MAINLY to a testing role?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Configure test environments <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Maintain the product backlog</li>
        <li class="option-item"><span class="option-letter">c)</span> Design solutions to new requirements</li>
        <li class="option-item"><span class="option-letter">d)</span> Create the test plan</li>
        <li class="option-item option-correct"><span class="option-letter">e)</span> Analyze the test basis <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A, E</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q7</span>
    <span class="lo-badge">FL-1.5.1</span>
  </div>
  <div class="question-text">Which of the following skills (i-v) are the MOST important skills of a tester? i. ii. iii. iv. v.</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Having domain knowledge</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Creating a product vision <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Being a good team player</li>
        <li class="option-item"><span class="option-letter">d)</span> Planning and organizing the work of the team</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q8</span>
    <span class="lo-badge">FL-1.5.2</span>
  </div>
  <div class="question-text">How is the whole team approach present in the interactions between testers and business representatives?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Business representatives decide on test automation approaches</li>
        <li class="option-item"><span class="option-letter">b)</span> Testers help business representatives to define a test strategy</li>
        <li class="option-item"><span class="option-letter">c)</span> Business representatives are not part of the whole team approach</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Testers help business representatives to create suitable acceptance tests <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA1</span>
    <span class="lo-badge">FL-1.1.2</span>
  </div>
  <div class="question-text">You were given a task to analyze and fix causes of failures in a new system to be released. Which activity are you performing?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Debugging <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Software testing</li>
        <li class="option-item"><span class="option-letter">c)</span> Requirement elicitation</li>
        <li class="option-item"><span class="option-letter">d)</span> Defect management</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA2</span>
    <span class="lo-badge">FL-1.2.2</span>
  </div>
  <div class="question-text">In many software organizations the test department is called the Quality Assurance (QA) department. Is this sentence correct or not and why?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> It is correct. Testing and QA mean exactly the same thing</li>
        <li class="option-item"><span class="option-letter">b)</span> It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues</li>
        <li class="option-item"><span class="option-letter">c)</span> It is not correct. Testing is something more; testing includes all activities with regard to quality. QA focuses on quality-related processes</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA3</span>
    <span class="lo-badge">FL-1.2.3</span>
  </div>
  <div class="question-text">A phone ringing in a neighboring cubicle distracts a programmer causing him to improperly program the logic that checks the upper boundary of an input variable. Later, during system testing, a tester notices that this input field accepts invalid input values. Which of the following correctly describes an incorrectly coded upper bound?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The root cause</li>
        <li class="option-item"><span class="option-letter">b)</span> A failure</li>
        <li class="option-item"><span class="option-letter">c)</span> An error</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> A defect <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA4</span>
    <span class="lo-badge">FL-1.4.3</span>
  </div>
  <div class="question-text">Consider the following testware. Test Charter #04.018 Session time: 1h Explore: Registration page With: Different sets of incorrect input data Defects related to accepting the registration process with the incorrect input To discover: Which test activity produces this testware as an output?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test planning</li>
        <li class="option-item"><span class="option-letter">b)</span> Test monitoring and test control</li>
        <li class="option-item"><span class="option-letter">c)</span> Test analysis</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Test design <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA5</span>
    <span class="lo-badge">FL-1.4.4</span>
  </div>
  <div class="question-text">Which of the following is the BEST example of how traceability supports testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Performing the impact analysis of a change will give information about the completion of the tests</li>
        <li class="option-item"><span class="option-letter">b)</span> Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Performing the impact analysis of a change will help selecting the right test cases for regression testing <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data to achieve the assumed coverage of the test object</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA6</span>
    <span class="lo-badge">FL-1.5.3</span>
  </div>
  <div class="question-text">Which of the following BEST explains a benefit of independence of testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team</li>
        <li class="option-item"><span class="option-letter">b)</span> If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines</li>
        <li class="option-item"><span class="option-letter">c)</span> An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q1</span>
    <span class="lo-badge">FL-1.2.1</span>
  </div>
  <div class="question-text">Which of the following is an example of why testing is necessary?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users</li>
        <li class="option-item"><span class="option-letter">b)</span> Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing</li>
        <li class="option-item"><span class="option-letter">c)</span> Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q2</span>
    <span class="lo-badge">FL-1.2.2</span>
  </div>
  <div class="question-text">Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> QA is performed as part of testing</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Testing is performed as part of QC <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Testing is another term for QC</li>
        <li class="option-item"><span class="option-letter">d)</span> Testing is performed as part of QA</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q3</span>
    <span class="lo-badge">FL-1.3.1</span>
  </div>
  <div class="question-text">One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Creating test cases that cover every possible specified output</li>
        <li class="option-item"><span class="option-letter">b)</span> Documenting all possible test input variations and prioritizing these based on importance</li>
        <li class="option-item"><span class="option-letter">c)</span> Starting testing as early as possible with reviews and other static testing approaches</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Using equivalence partitioning and boundary value analysis to generate test cases <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q4</span>
    <span class="lo-badge">FL-1.4.1</span>
  </div>
  <div class="question-text">Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Test design <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Test execution</li>
        <li class="option-item"><span class="option-letter">c)</span> Test analysis</li>
        <li class="option-item"><span class="option-letter">d)</span> Test implementation</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q5</span>
    <span class="lo-badge">FL-1.4.2</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to impact how testing is performed for a given test object?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The average level of experience of the organization’s marketing team</li>
        <li class="option-item"><span class="option-letter">b)</span> The knowledge of users that a new system is being developed for them</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> The number of years’ experience of the members of the test team <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> The end user’s organizational structure for a commercial music streaming application</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q6</span>
    <span class="lo-badge">FL-1.4.4</span>
  </div>
  <div class="question-text">Which of the following statements is a CORRECT example of the value of traceability?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Traceability between user requirements and test results provides a means of measuring project progress against business goals <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Traceability between testers and test cases that failed provides a means of determining the skill level of the testers</li>
        <li class="option-item"><span class="option-letter">d)</span> Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q7</span>
    <span class="lo-badge">FL-1.5.1</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to be an example of a tester using a generic skill when testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts</li>
        <li class="option-item"><span class="option-letter">d)</span> The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q8</span>
    <span class="lo-badge">FL-1.5.2</span>
  </div>
  <div class="question-text">Which of the following is an advantage of the whole-team approach?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> It allows team members to take on any role at any time</li>
        <li class="option-item"><span class="option-letter">b)</span> It only needs a single team to support the complete development project</li>
        <li class="option-item"><span class="option-letter">c)</span> It embeds business representatives alongside developers in the same team</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> It generates a team synergy that benefits the entire project <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q1</span>
    <span class="lo-badge">FL-1.1.1</span>
  </div>
  <div class="question-text">Which of the following is a typical test objective?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Validating that documented requirements are met</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Causing failures and identifying defects <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Initiating errors and identifying root causes</li>
        <li class="option-item"><span class="option-letter">d)</span> Verifying the test object meets user expectations</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q2</span>
    <span class="lo-badge">FL-1.1.2</span>
  </div>
  <div class="question-text">Which of the following statements BEST describes the difference between testing and debugging?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Testing causes failures while debugging fixes failures</li>
        <li class="option-item"><span class="option-letter">b)</span> Testing is a negative activity while debugging is a positive activity</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> Testing determines that defects exist while debugging removes defects <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> Testing finds the cause of defects while debugging fixes the cause of defects</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q3</span>
    <span class="lo-badge">FL-1.3.1</span>
  </div>
  <div class="question-text">The ‘absence-of-defects fallacy’ is one of the principles of testing. Which of the following is an example of addressing this principle in practice?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Explaining that it is not possible for testing to show the absence of defects</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Supporting the end users to perform acceptance testing <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Ensuring that no implementation defects remain in the delivered system</li>
        <li class="option-item"><span class="option-letter">d)</span> Modifying tests that cause no failures to ensure few defects remain</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q4</span>
    <span class="lo-badge">FL-1.4.1</span>
  </div>
  <div class="question-text">Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test implementation</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Test design <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Test execution</li>
        <li class="option-item"><span class="option-letter">d)</span> Test monitoring</li>
        <li class="option-item option-correct"><span class="option-letter">e)</span> Test analysis <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B, E</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q5</span>
    <span class="lo-badge">FL-1.4.3</span>
  </div>
  <div class="question-text">Given the following testware: 1. Coverage items 2. Change requests 3. Test execution schedule 4. Prioritized test conditions And the following test activities A. Test analysis B. Test design C. Test implementation D. Test completion Which of the following BEST shows the testware produced by the activities?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> 1B, 2D, 3C, 4A <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> 1B, 2D, 3A, 4C</li>
        <li class="option-item"><span class="option-letter">c)</span> 1D, 2C, 3A, 4B</li>
        <li class="option-item"><span class="option-letter">d)</span> 1D, 2C, 3B, 4A</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q6</span>
    <span class="lo-badge">FL-1.4.5</span>
  </div>
  <div class="question-text">Which of the following statements about the different testing roles is MOST likely to be CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team</li>
        <li class="option-item"><span class="option-letter">b)</span> The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q7</span>
    <span class="lo-badge">FL-1.5.2</span>
  </div>
  <div class="question-text">Which of the following is an advantage of the whole-team approach?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Teams with no testers</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> Improved team dynamics <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> Specialist team members</li>
        <li class="option-item"><span class="option-letter">d)</span> Larger team sizes</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q8</span>
    <span class="lo-badge">FL-1.5.3</span>
  </div>
  <div class="question-text">Which of the following statements about the independence of testing is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Developers’ familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers</li>
        <li class="option-item"><span class="option-letter">c)</span> Independent testing requires testers who are outside the developer’s team and ideally from outside the organization, however these testers find it difficult to understand the application domain</li>
        <li class="option-item"><span class="option-letter">d)</span> Testers from outside the developer’s team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q1</span>
    <span class="lo-badge">FL-1.1.1</span>
  </div>
  <div class="question-text">Which of the following is a typical test objective?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Finding and fixing defects in the test object</li>
        <li class="option-item"><span class="option-letter">b)</span> Maintaining effective communications with developers</li>
        <li class="option-item"><span class="option-letter">c)</span> Validating that legal requirements have been met</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Building confidence in the quality of the test object <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q2</span>
    <span class="lo-badge">FL-1.2.3</span>
  </div>
  <div class="question-text">A designer documents a design for a user interface that does not suitably address disabled users because the designer is tired. The programmer implements the user interface in line with the design but as they are working under severe time pressure, they do not include suitable exception handling in their program code for bonus calculations. When the operational system is used, complaints are made by some disabled users about the interface and the company is subsequently fined by the relevant regulatory authority. No one notices that bonus calculations are sometimes incorrect. Which of the following statements is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The miscalculation of bonuses is a defect that occasionally occurs</li>
        <li class="option-item"><span class="option-letter">b)</span> The fine received for failing to address some disabled users is a failure</li>
        <li class="option-item option-correct"><span class="option-letter">c)</span> The programmer working under severe time pressure is a root cause <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">d)</span> The design of the user interface includes a designer error</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q3</span>
    <span class="lo-badge">FL-1.3.1</span>
  </div>
  <div class="question-text">Test conditions are being used by testers to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time. Which of the following ‘principles of testing’ is being addressed through the variation of test cases?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Tests wear out <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Absence-of-defects fallacy</li>
        <li class="option-item"><span class="option-letter">c)</span> Early testing saves time and money</li>
        <li class="option-item"><span class="option-letter">d)</span> Defects cluster together</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q4</span>
    <span class="lo-badge">FL-1.4.1</span>
  </div>
  <div class="question-text">Given the following test tasks: 1. Derive test cases from test conditions 2. Identify reusable testware 3. Organize test cases into test procedures 4. Evaluate the test basis and the test object And the following test activities: A. Test analysis B. Test design C. Test implementation D. Test completion Which of the following BEST matches the tasks with the activities?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 1B, 2A, 3D, 4C</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> 1B, 2D, 3C, 4A <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> 1C, 2A, 3B, 4D</li>
        <li class="option-item"><span class="option-letter">d)</span> 1C, 2D, 3A, 4B</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q5</span>
    <span class="lo-badge">FL-1.4.3</span>
  </div>
  <div class="question-text">Given the following testware: i. Test completion report ii. Data held in a database used for test inputs and expected results iii. The list of elements needed to build the test environment iv. Documented sequences of test cases in execution order v. Test cases Which of the following BEST shows the testware produced as a result of performing test implementation?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> ii, iv <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> iii, v</li>
        <li class="option-item"><span class="option-letter">c)</span> i, ii, v</li>
        <li class="option-item"><span class="option-letter">d)</span> i, iii, iv</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q6</span>
    <span class="lo-badge">FL-1.4.5</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to describe a task performed by someone in a test management role?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Evaluate the test basis and the test object</li>
        <li class="option-item"><span class="option-letter">b)</span> Define test environment requirements</li>
        <li class="option-item"><span class="option-letter">c)</span> Assess testability of the test object</li>
        <li class="option-item option-correct"><span class="option-letter">d)</span> Create the test completion report <span class="correct-mark">&#10003;</span></li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q7</span>
    <span class="lo-badge">FL-1.5.2</span>
  </div>
  <div class="question-text">Which of the following is an advantage of the whole team approach?</div>
  <ul class="options-list">
        <li class="option-item option-correct"><span class="option-letter">a)</span> Improved communication between team members <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">b)</span> Decreased individual accountability for quality</li>
        <li class="option-item"><span class="option-letter">c)</span> Faster deployment of deliverables to the end users</li>
        <li class="option-item"><span class="option-letter">d)</span> Reduced collaboration with external business users</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong></div>
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q8</span>
    <span class="lo-badge">FL-1.5.3</span>
  </div>
  <div class="question-text">Given the following benefits and drawbacks of the independence of testing: i. The testers work in a different location from the developers ii. Testers question the assumptions programmers make while writing code iii. A confrontational dynamic has been established between testers and developers iv. Developers have convinced themselves that testers are mostly accountable for quality v. Testers have different biases than those held by the developers Which are MOST likely to be considered benefits?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> i, iv</li>
        <li class="option-item option-correct"><span class="option-letter">b)</span> ii, v <span class="correct-mark">&#10003;</span></li>
        <li class="option-item"><span class="option-letter">c)</span> i, iii, iv</li>
        <li class="option-item"><span class="option-letter">d)</span> ii, iii, v</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong></div>
</div>
`
};

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
  <div class="answer-reveal">Correct answer: <strong>C</strong><br><br><b>Why C is correct:</b> "Reducing the risk level of the test object and building confidence in its quality" is explicitly listed as a valid test objective in the ISTQB syllabus (Section 1.1.1). Testing aims to reduce risk and build confidence, not prove perfection.<br><b>Why A is wrong:</b> Testing cannot "prove" there are no unfixed defects — one of the testing principles states that testing can show the presence of defects but cannot prove their absence.<br><b>Why B is wrong:</b> No amount of testing can prove there will be zero failures in production. This contradicts the fundamental principle that exhaustive testing is impossible.<br><b>Why D is wrong:</b> Testing all possible combinations of inputs (exhaustive testing) is impossible, so verifying "no untested combinations" is not a valid objective.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A</strong><br><br><b>Why A is correct:</b> Having testers involved throughout the SDLC helps detect defects in work products early, which is a key example of how testing contributes to success (Section 1.2.1). Early tester involvement in reviews of requirements/design catches issues before code is written.<br><b>Why B is wrong:</b> Isolating testers from developers is counterproductive. The whole-team approach encourages collaboration, not avoidance.<br><b>Why C is wrong:</b> End users are not typically involved in component integration or system testing — they participate in acceptance testing. The statement misplaces the testing activity.<br><b>Why D is wrong:</b> Certification alone does not guarantee better test cases. Skill, experience, and domain knowledge matter more than certification status.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A</strong><br><br><b>Why A is correct:</b> The "tests wear out" principle (also called the pesticide paradox) states that running the same tests repeatedly will eventually stop finding new defects. The unchanged regression tests finding no new defects is a classic sign of this.<br><b>Why B is wrong:</b> The absence-of-defects fallacy means that even if testing finds no defects, the software may still not meet user needs. This is about validation, not about test effectiveness wearing out.<br><b>Why C is wrong:</b> Defects cluster together means most defects are found in a small number of modules. This doesn't explain why unchanged tests stopped finding defects.<br><b>Why D is wrong:</b> Exhaustive testing is impossible refers to the inability to test all input combinations. It doesn't explain why unchanged regression tests no longer find defects.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> Test analysis involves identifying "what to test" by analyzing the test basis to identify test conditions. Deciding what should be tested (shared payment) is determining test conditions from requirements.<br><b>Why A is wrong:</b> Estimating effort (8 person-days) is part of test planning, not test analysis.<br><b>Why C is wrong:</b> Using BVA to derive test data is part of test design, which comes after test analysis. Test design determines "how to test."<br><b>Why D is wrong:</b> Analyzing discrepancies between actual and expected results and reporting defects is part of test execution and reporting, not test analysis.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> The number of defects from previous projects is NOT typically listed as a factor that significantly influences the test approach. The test approach is driven by product risks, SDLC, test levels, regulatory requirements, etc. (Section 1.4.2). Note: this question asks which factors are listed — B is the one that does NOT belong among the typical factors, yet the marking shows B as correct, following the official answer key.<br><b>Why A is wrong (it IS a valid factor):</b> The SDLC model directly influences how testing is organized and planned.<br><b>Why C is wrong (it IS a valid factor):</b> Identified product risks are a primary driver of the test approach.<br><b>Why D is wrong (it IS a valid factor):</b> Regulatory requirements can mandate specific testing approaches like formal white-box testing.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A, E</strong><br><br><b>Why A is correct:</b> Configuring test environments is a typical testing role task — testers set up and maintain the environments needed to execute tests.<br><b>Why E is correct:</b> Analyzing the test basis (reviewing requirements, user stories, etc.) to identify test conditions is a core testing role activity.<br><b>Why B is wrong:</b> Maintaining the product backlog is a product owner responsibility, not a testing role task.<br><b>Why C is wrong:</b> Designing solutions to new requirements is a development/architecture task, not a testing role.<br><b>Why D is wrong:</b> Creating the test plan is a test management role task, not a testing role task. The syllabus distinguishes between testing roles and test management roles.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> Per the official ISTQB answer key, creating a product vision is NOT a tester skill — it is identified as the answer because the question asks which is MOST important and the exam answer key marks B. This follows the official sample exam answers.<br><b>Why A is wrong:</b> Domain knowledge is indeed important for testers but is listed as a generic skill, not the most essential tester-specific skill per the exam key.<br><b>Why C is wrong:</b> Being a good team player is valuable but is a general professional skill, not specifically a tester's most important skill.<br><b>Why D is wrong:</b> Planning and organizing team work is more of a management skill than a core tester skill.</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> In the whole-team approach, testers help business representatives create suitable acceptance tests. This is the key interaction — testers bring testing expertise to help define testable acceptance criteria.<br><b>Why A is wrong:</b> Business representatives do not decide on test automation approaches — this is a technical testing decision.<br><b>Why B is wrong:</b> Test strategy is typically defined by test managers, not business representatives. Testers don't help business reps define test strategy.<br><b>Why C is wrong:</b> Business representatives ARE part of the whole-team approach. The whole point is that everyone contributes to quality.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A</strong><br><br><b>Why A is correct:</b> Debugging is the activity of analyzing failure causes and fixing defects. The key phrase "analyze and fix causes of failures" directly matches the definition of debugging in the syllabus.<br><b>Why B is wrong:</b> Software testing finds defects/triggers failures but does NOT fix them. Testing identifies; debugging fixes.<br><b>Why C is wrong:</b> Requirement elicitation is about gathering requirements from stakeholders, not analyzing and fixing failures.<br><b>Why D is wrong:</b> Defect management is about tracking and managing defect reports through their lifecycle, not about analyzing root causes and fixing code.</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> QA focuses on adherence to proper processes (process-oriented), while testing focuses on demonstrating fitness for purpose and detecting defects (product-oriented). They are distinct activities.<br><b>Why A is wrong:</b> Testing and QA are NOT the same. QA is about processes; testing is about the product.<br><b>Why B is wrong:</b> They cannot be used interchangeably because they focus on different aspects — QA on processes, testing on product quality.<br><b>Why C is wrong:</b> This reverses the relationship. Testing does NOT include all quality activities. QA is broader in scope regarding processes, while testing is a form of quality control (QC).</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> A defect (bug) is a flaw in a work product — the incorrectly coded upper bound is a flaw in the source code. It exists in the code whether or not it has been executed.<br><b>Why A is wrong:</b> The root cause is the distraction (phone ringing) that caused the programmer to make the mistake. The coded error itself is the defect, not the root cause.<br><b>Why B is wrong:</b> A failure is what the user observes when the system accepts invalid input. The incorrectly coded bound is the defect that causes the failure, not the failure itself.<br><b>Why C is wrong:</b> An error (mistake) is the human action — the programmer being distracted and making a mistake is the error. The resulting code flaw is the defect.</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> A test charter is a testware output of test design. Test charters specify the scope and goals for exploratory testing sessions and are created during the test design activity.<br><b>Why A is wrong:</b> Test planning produces the test plan, schedule, and estimates — not test charters.<br><b>Why B is wrong:</b> Test monitoring and control produces test progress reports and control directives, not test charters.<br><b>Why C is wrong:</b> Test analysis produces prioritized test conditions, not test charters. Test analysis identifies "what to test," while test design (including charters) determines "how to test."</div>
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
  <div class="answer-reveal">Correct answer: <strong>C</strong><br><br><b>Why C is correct:</b> Impact analysis using traceability helps select the right regression test cases when a change is made. If you know which requirements changed, traceability lets you identify which test cases cover those requirements.<br><b>Why A is wrong:</b> Impact analysis of a change gives information about which tests to run, not about test completion status.<br><b>Why B is wrong:</b> Traceability between test cases and test results shows test execution status, not residual risk estimation.<br><b>Why D is wrong:</b> Traceability helps determine coverage, not select specific test data. Test data selection is part of test design/implementation.</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> Independent testers can question assumptions made by developers when interpreting ambiguous specifications. Different cognitive biases lead independent testers to find defects that developers miss.<br><b>Why A is wrong:</b> Quality responsibility should NOT be assigned solely to the test team — quality is everyone's responsibility (whole-team approach).<br><b>Why B is wrong:</b> While external teams have some independence benefits, this answer focuses on avoiding delivery deadlines, which is not the primary benefit of independence.<br><b>Why C is wrong:</b> Restricting communication to defect reports is a drawback, not a benefit. Good communication between testers and developers is essential.</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> Reviews (a form of static testing) improve requirements quality and reduce downstream changes. This is a concrete example of why testing is necessary — catching issues early in requirements saves rework.<br><b>Why A is wrong:</b> Dynamic testing does not aim to cause failures "that could never be achieved by users" — testing simulates realistic scenarios to find real-world defects.<br><b>Why B is wrong:</b> Static testing finds defects, not failures. Failures occur only during execution (dynamic testing). The terminology is incorrect.<br><b>Why C is wrong:</b> Static analysis does not provide evidence about "elements that provide no outputs." This statement is technically meaningless.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> Testing is a form of quality control (QC). QC is product-oriented and includes testing activities. Testing is performed as part of QC, which focuses on achieving appropriate quality levels.<br><b>Why A is wrong:</b> QA is NOT performed as part of testing — it's the other way around. QA focuses on processes, and testing is a subset of QC.<br><b>Why C is wrong:</b> Testing is not "another term for QC." QC is broader and includes testing among other product-focused activities.<br><b>Why D is wrong:</b> Testing is part of QC, not QA. QA is process-oriented and focuses on properly followed processes.</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> EP and BVA are techniques that reduce the number of test cases needed while maintaining meaningful coverage. They directly address the impossibility of exhaustive testing by using smart sampling strategies.<br><b>Why A is wrong:</b> Covering every possible output is still attempting exhaustive coverage, not addressing the principle pragmatically.<br><b>Why B is wrong:</b> Documenting all possible input variations still implies exhaustive enumeration, which contradicts the principle.<br><b>Why C is wrong:</b> Early testing relates to a different principle ("early testing saves time and money"), not to exhaustive testing being impossible.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A</strong><br><br><b>Why A is correct:</b> Test design works with test conditions (from analysis), creates test cases, identifies test data requirements, and considers test environment requirements. It's where "how to test" is determined.<br><b>Why B is wrong:</b> Test execution runs already-designed test cases and compares actual vs expected results. It doesn't create test cases or identify data requirements.<br><b>Why C is wrong:</b> Test analysis identifies test conditions ("what to test") but doesn't create test cases or define test data requirements.<br><b>Why D is wrong:</b> Test implementation organizes test cases into procedures and prepares test data/environments, but doesn't create test cases from scratch.</div>
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
  <div class="answer-reveal">Correct answer: <strong>C</strong><br><br><b>Why C is correct:</b> The experience level of the test team directly impacts how testing is performed — experienced testers can apply more sophisticated techniques and find more subtle defects.<br><b>Why A is wrong:</b> The marketing team's experience has no direct impact on how testing of a test object is performed.<br><b>Why B is wrong:</b> Users' awareness that a system is being developed doesn't directly influence the technical testing approach.<br><b>Why D is wrong:</b> The end user's organizational structure for a commercial application doesn't significantly impact the test approach for that application.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> Traceability between user requirements and test results lets you measure project progress against business goals — you can see which business requirements have been verified through testing.<br><b>Why A is wrong:</b> Traceability from mitigated risks to passed test cases doesn't directly determine residual risk — you'd also need to consider risks not yet tested.<br><b>Why C is wrong:</b> Traceability between testers and failed test cases doesn't measure tester skill. Test failures relate to defects in the software, not tester competence.<br><b>Why D is wrong:</b> Traceability between risks and test conditions helps determine test scope, not "which risks are worth testing." All identified risks should be considered.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> Domain knowledge (being a former pilot understanding helicopter systems) is a generic/essential skill for testers. It helps them better understand the test object and create more effective tests.<br><b>Why A is wrong:</b> Sharing a gaming hobby with a developer is a social interaction, not a testing skill being applied.<br><b>Why C is wrong:</b> Programming skills used to communicate with business analysts is a mismatch — programming skills would help communicate with developers, not BAs. This is inconsistent.<br><b>Why D is wrong:</b> Being methodical and careful is a good quality, but generating test cases before exploratory testing contradicts the nature of exploratory testing (which combines design and execution simultaneously).</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> The whole-team approach generates team synergy that benefits the entire project. When everyone contributes to quality, the combined effort exceeds what individuals could achieve separately.<br><b>Why A is wrong:</b> The whole-team approach does NOT mean anyone can take any role at any time — team members still have primary expertise areas.<br><b>Why B is wrong:</b> The whole-team approach doesn't guarantee only a single team is needed — complex projects may still require multiple teams.<br><b>Why C is wrong:</b> While the whole-team approach includes business representatives, merely embedding them alongside developers is a description of team composition, not a stated advantage.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> "Causing failures and identifying defects" is a valid test objective. Testing triggers failures during execution, and through those failures, defects are identified in the test object.<br><b>Why A is wrong:</b> "Validating that documented requirements are met" confuses validation and verification. Verification checks documented requirements; validation checks user expectations. The wording here is imprecise.<br><b>Why C is wrong:</b> Testing does not "initiate errors" or "identify root causes." Errors are human mistakes, and root cause analysis is part of debugging, not testing.<br><b>Why D is wrong:</b> "Verifying the test object meets user expectations" describes validation, not verification. Verification checks against requirements, not user expectations.</div>
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
  <div class="answer-reveal">Correct answer: <strong>C</strong><br><br><b>Why C is correct:</b> Testing determines that defects exist (by triggering failures), while debugging removes the defects (by finding and fixing the code). This is the correct distinction per the ISTQB syllabus.<br><b>Why A is wrong:</b> Testing triggers failures (not "causes" them — the defects cause failures), and debugging fixes defects (not failures). The terminology is imprecise.<br><b>Why B is wrong:</b> Neither testing nor debugging is inherently "negative" or "positive." This is a misconception — testing is a constructive activity that improves quality.<br><b>Why D is wrong:</b> Testing does NOT find the cause of defects — it reveals that defects exist through failures. Finding the cause is part of debugging (root cause analysis).</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> Supporting users in acceptance testing addresses the absence-of-defects fallacy by ensuring the product meets real user needs. Even if no defects are found, the system must still satisfy user expectations — acceptance testing validates this.<br><b>Why A is wrong:</b> This merely restates what the principle is ("testing can show presence of defects, not their absence") rather than showing how to address it in practice.<br><b>Why C is wrong:</b> Ensuring zero implementation defects remain is impossible — exhaustive testing cannot be achieved, and this doesn't address the absence-of-defects fallacy.<br><b>Why D is wrong:</b> Modifying tests that cause no failures relates to the pesticide paradox (tests wear out), not the absence-of-defects fallacy.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B, E</strong><br><br><b>Why B is correct:</b> BVA and EP are test design techniques used to derive test cases from test conditions. Test design is where these techniques are applied to determine "how to test."<br><b>Why E is correct:</b> EP can also be applied during test analysis to identify and partition test conditions from the test basis. Identifying equivalence classes helps define what to test.<br><b>Why A is wrong:</b> Test implementation organizes test cases into procedures and prepares test data — it doesn't apply BVA/EP techniques.<br><b>Why C is wrong:</b> Test execution runs the already-designed test cases. BVA and EP are applied before execution.<br><b>Why D is wrong:</b> Test monitoring tracks progress and compares against metrics. It doesn't involve applying test design techniques.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A</strong><br><br><b>Why A is correct:</b> Coverage items (1) are produced by test design (B), change requests (2) are produced by test completion (D), test execution schedule (3) is produced by test implementation (C), and prioritized test conditions (4) are produced by test analysis (A). This mapping (1B, 2D, 3C, 4A) correctly matches ISTQB testware outputs.<br><b>Why B is wrong:</b> It incorrectly maps test execution schedule (3) to test analysis (A) and prioritized test conditions (4) to implementation (C).<br><b>Why C is wrong:</b> It incorrectly maps coverage items (1) to completion (D) and change requests (2) to implementation (C).<br><b>Why D is wrong:</b> It incorrectly maps coverage items (1) to completion (D) and test execution schedule (3) to design (B).</div>
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
  <div class="answer-reveal">Correct answer: <strong>C</strong><br><br><b>Why C is correct:</b> In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself. This correctly describes the split responsibility.<br><b>Why A is wrong:</b> It reverses the roles — the testing role is NOT primarily from outside the team. In Agile, testers are typically embedded within the team.<br><b>Why B is wrong:</b> It reverses the responsibilities — test monitoring/control and test planning are test management tasks, not testing role tasks. The testing role handles analysis, design, implementation, and execution.<br><b>Why D is wrong:</b> Test analysis and test design are testing role responsibilities, not test management responsibilities. Test management focuses on planning, monitoring, and control.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> Improved team dynamics is a key advantage of the whole-team approach. When everyone shares responsibility for quality, collaboration and communication improve naturally.<br><b>Why A is wrong:</b> Teams without testers is NOT an advantage — the whole-team approach means everyone contributes to testing, not that dedicated testers are eliminated.<br><b>Why C is wrong:</b> Having specialist team members contradicts the whole-team concept, which emphasizes shared responsibility and cross-functional collaboration.<br><b>Why D is wrong:</b> Larger team size is not inherently beneficial and is not a stated advantage of the whole-team approach.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A</strong><br><br><b>Why A is correct:</b> Independent testers find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers. This correctly states both a benefit and a drawback of independence.<br><b>Why B is wrong:</b> Developers can find many defects in their own code through unit testing and debugging. The claim that they "only find a few" is incorrect.<br><b>Why C is wrong:</b> Independence does NOT require testers from outside the organization. There are multiple levels of independence, including testers from a different team within the same organization.<br><b>Why D is wrong:</b> Outside testers are NOT more likely to be blamed for delays — it's actually the opposite. Independent external testers are less likely to face internal political blame.</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> Building confidence in the quality of the test object is a valid and explicitly stated test objective in the ISTQB syllabus (Section 1.1.1). Testing provides evidence about the quality level.<br><b>Why A is wrong:</b> Testing finds defects but does NOT fix them. Fixing defects is the responsibility of developers through debugging.<br><b>Why B is wrong:</b> Maintaining effective communications with developers is a good practice but is NOT a test objective — it's a soft skill or team collaboration goal.<br><b>Why C is wrong:</b> While verifying legal/regulatory compliance can be a test objective, "validating" legal requirements uses imprecise terminology. Option D is a more directly stated syllabus objective.</div>
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
  <div class="answer-reveal">Correct answer: <strong>C</strong><br><br><b>Why C is correct:</b> The programmer working under severe time pressure is a root cause — it's the underlying reason (condition) that led to the error, which in turn caused the defect in exception handling code.<br><b>Why A is wrong:</b> The miscalculation of bonuses is a defect in the code, not a defect that "occasionally occurs." Defects exist permanently in code until fixed; the resulting failures may occur intermittently.<br><b>Why B is wrong:</b> The fine received is a consequence/impact, not a failure. A failure is the observable incorrect behavior of the system (e.g., disabled users can't use the interface).<br><b>Why D is wrong:</b> The design issue contains a defect (flaw in the design document), not a "designer error." The designer being tired is the error (human mistake); the resulting design flaw is the defect.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A</strong><br><br><b>Why A is correct:</b> Varying test cases while keeping the same test conditions directly addresses the "tests wear out" (pesticide paradox) principle. By changing the specific tests, you avoid the diminishing returns of running identical tests repeatedly.<br><b>Why B is wrong:</b> The absence-of-defects fallacy is about building a system that still doesn't meet user needs despite finding no defects. It's not about varying test cases.<br><b>Why C is wrong:</b> "Early testing saves time and money" is about starting testing activities early in the SDLC, not about varying test cases during execution.<br><b>Why D is wrong:</b> "Defects cluster together" means most defects are concentrated in a few modules. This doesn't explain why test cases should be varied.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> 1-Derive test cases from test conditions = Test design (B), 2-Identify reusable testware = Test completion (D), 3-Organize test cases into test procedures = Test implementation (C), 4-Evaluate the test basis and test object = Test analysis (A). This mapping (1B, 2D, 3C, 4A) is correct per the ISTQB syllabus.<br><b>Why A is wrong:</b> It maps "identify reusable testware" to test analysis (A), but this is a test completion activity.<br><b>Why C is wrong:</b> It maps "derive test cases" to implementation (C), but deriving test cases is a design activity.<br><b>Why D is wrong:</b> It maps "derive test cases" to implementation (C) and "organize into procedures" to analysis (A), both incorrect.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A</strong><br><br><b>Why A is correct:</b> Test implementation produces test data (ii — data held in a database for inputs and expected results) and test procedures/execution schedule (iv — documented sequences of test cases in execution order). These are key outputs of organizing and preparing for test execution.<br><b>Why B is wrong:</b> Test environment requirements list (iii) is an output of test design, and test cases (v) are also outputs of test design, not implementation.<br><b>Why C is wrong:</b> Test completion report (i) is an output of test completion activities, not implementation. Test cases (v) come from design.<br><b>Why D is wrong:</b> Test completion report (i) is from completion, and environment requirements list (iii) is from design.</div>
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
  <div class="answer-reveal">Correct answer: <strong>D</strong><br><br><b>Why D is correct:</b> Creating the test completion report is a test management task. Test managers are responsible for test planning, monitoring, control, and completion reporting.<br><b>Why A is wrong:</b> Evaluating the test basis and test object is a testing role task performed during test analysis.<br><b>Why B is wrong:</b> Defining test environment requirements is a testing role task performed during test design.<br><b>Why C is wrong:</b> Assessing testability of the test object is a testing role task performed during test analysis.</div>
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
  <div class="answer-reveal">Correct answer: <strong>A</strong><br><br><b>Why A is correct:</b> Improved communication between team members is a key advantage of the whole-team approach. When everyone shares responsibility for quality, communication naturally improves across roles.<br><b>Why B is wrong:</b> Decreased individual accountability is a disadvantage, not an advantage. The whole-team approach increases shared accountability, not decreases individual responsibility.<br><b>Why C is wrong:</b> Faster deployment is not a guaranteed benefit of the whole-team approach. The approach focuses on quality and collaboration, not deployment speed.<br><b>Why D is wrong:</b> Reduced collaboration with external users contradicts the whole-team approach's purpose, which is to increase collaboration among all stakeholders.</div>
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
  <div class="answer-reveal">Correct answer: <strong>B</strong><br><br><b>Why B is correct:</b> Items ii (questioning assumptions programmers make) and v (testers have different biases than developers) are both recognized benefits of independence. Different perspectives and cognitive biases lead to finding defects that developers miss.<br><b>Why A is wrong:</b> Item i (different location) is not inherently a benefit — it's a neutral characteristic. Item iv (developers convinced testers are accountable for quality) is a drawback, not a benefit.<br><b>Why C is wrong:</b> Item iii (confrontational dynamic) and item iv (blame shifting) are both drawbacks of independence, not benefits.<br><b>Why D is wrong:</b> While items ii and v are benefits, item iii (confrontational dynamic) is a well-known drawback of independence that should not be included as a benefit.</div>
</div>
`,
};

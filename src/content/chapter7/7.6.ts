export const content = {
  title: "Chapter 6 Exam Questions",
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
    <span class="question-source">Exam A - Q39</span>
    <span class="lo-badge">FL-6.1.1</span>
  </div>
  <div class="question-text">Which test activity does a data preparation tool support?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test monitoring and test control</li>
        <li class="option-item"><span class="option-letter">b)</span> Test analysis</li>
        <li class="option-item"><span class="option-letter">c)</span> Test design and test implementation</li>
        <li class="option-item"><span class="option-letter">d)</span> Test completion</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Data preparation tools help generate, manipulate, and manage the test data needed when designing and implementing tests, which is why they support the test design and test implementation activity. (A) is wrong because test monitoring and control deals with tracking test progress and metrics, not preparing data. (B) is wrong because test analysis focuses on identifying what to test by analyzing the test basis, not on creating test data. (D) is wrong because test completion involves archiving testware and summarizing results after testing is done, not preparing data.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q40</span>
    <span class="lo-badge">FL-6.2.1</span>
  </div>
  <div class="question-text">Which item correctly identifies a potential risk of performing test automation?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> It may introduce unknown regressions in production</li>
        <li class="option-item"><span class="option-letter">b)</span> Sufficient efforts to maintain testware may not be properly allocated</li>
        <li class="option-item"><span class="option-letter">c)</span> Testing tools and associated testware may not be sufficiently relied upon</li>
        <li class="option-item"><span class="option-letter">d)</span> It may reduce the time allocated for manual testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: The ISTQB syllabus explicitly identifies underestimating the effort needed to maintain automated testware (test scripts, data, frameworks) as a key risk of test automation. (A) is wrong because introducing unknown regressions in production is a software development risk, not a specific risk of test automation itself; automation is actually intended to catch regressions. (C) is wrong because the recognized risk is over-reliance on tools, not under-reliance; the syllabus warns about depending too much on tools, not too little. (D) is wrong because reducing repetitive manual testing effort is actually listed as a benefit of automation, not a risk.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q39</span>
    <span class="lo-badge">FL-6.1.1</span>
  </div>
  <div class="question-text">Given the following descriptions: 1. Support workflow tracking 2. Facilitate communication 3. Virtual machines 4. Support reviews And the following test tool categories: A. Static testing tools B. Tools supporting scalability and deployment standardization C. DevOps tools D. Collaboration tools Which of the following BEST matches the descriptions and categories?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 1A, 2B, 3C, 4D</li>
        <li class="option-item"><span class="option-letter">b)</span> 1B, 2D, 3C, 4A</li>
        <li class="option-item"><span class="option-letter">c)</span> 1C, 2D, 3B, 4A</li>
        <li class="option-item"><span class="option-letter">d)</span> 1D, 2C, 3A, 4B</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: The correct mapping is 1C, 2D, 3B, 4A. "Support workflow tracking" maps to DevOps tools (C) because CI/CD and DevOps tools manage build-test-deploy workflows. "Facilitate communication" maps to Collaboration tools (D) because collaboration tools enable team communication and information sharing. "Virtual machines" maps to Tools supporting scalability and deployment standardization (B) because VMs and containers are used to standardize and scale test environments. "Support reviews" maps to Static testing tools (A) because static testing tools support review processes like code reviews and walkthroughs. (A) 1A is wrong because static testing tools support reviews, not workflow tracking. (B) 1B is wrong because scalability tools provide VMs/containers, not workflow tracking. (D) 1D is wrong because collaboration tools facilitate communication, not workflow tracking.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q40</span>
    <span class="lo-badge">FL-6.2.1</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to be a benefit of test automation?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> It provides coverage measures that are too complicated for humans to derive</li>
        <li class="option-item"><span class="option-letter">b)</span> It shares responsibility for the testing with the tool vendor</li>
        <li class="option-item"><span class="option-letter">c)</span> It removes the need for critical thinking when analyzing test results</li>
        <li class="option-item"><span class="option-letter">d)</span> It generates test cases from an analysis of the program code</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: The ISTQB syllabus lists "easier access to information about testing" and providing coverage measures as benefits of test automation. Coverage tools can automatically compute complex coverage metrics (e.g., MC/DC, condition coverage) that would be impractical for humans to derive manually. (B) is wrong because sharing responsibility with the tool vendor is not a benefit—vendor dependency is actually listed as a risk of test automation. (C) is wrong because automation does not remove the need for critical thinking; testers must still analyze and interpret test results using human judgment. (D) is wrong because generating test cases from code analysis describes a capability of specific test design tools or static analysis, not a general benefit of test automation.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q39</span>
    <span class="lo-badge">FL-6.1.1</span>
  </div>
  <div class="question-text">Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test execution and coverage tools</li>
        <li class="option-item"><span class="option-letter">b)</span> Test design and implementation tools</li>
        <li class="option-item"><span class="option-letter">c)</span> Defect management tools</li>
        <li class="option-item"><span class="option-letter">d)</span> Test management tools</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Per the ISTQB syllabus, test management tools provide comprehensive support for organizing test cases, tracking detected defects, and managing configuration items all in one integrated platform. They cover the full scope described in the question. (A) is wrong because test execution and coverage tools focus on running tests and measuring code coverage, not on organizing test cases or managing configurations. (B) is wrong because test design and implementation tools help create test cases and test data, but do not handle defect tracking or configuration management. (C) is wrong because defect management tools only track defects—they do not organize test cases or handle configuration management, so they cover only part of what the question describes.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q40</span>
    <span class="lo-badge">FL-6.2.1</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to be a benefit of test automation?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The capability of generating test cases without access to the test basis</li>
        <li class="option-item"><span class="option-letter">b)</span> The achievement of increased coverage through more objective assessment</li>
        <li class="option-item"><span class="option-letter">c)</span> The increase in test execution times available with higher processing power</li>
        <li class="option-item"><span class="option-letter">d)</span> The prevention of human errors through greater consistency and repeatability</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: The ISTQB syllabus explicitly lists "greater consistency and repeatability" as a key benefit of test automation. Automated tests execute the same steps identically every time, eliminating human errors caused by fatigue, inattention, or inconsistency in manual execution. (A) is wrong because generating test cases without a test basis is not a capability of automation; valid tests still require a test basis such as requirements or specifications. (B) is wrong because increased coverage through "more objective assessment" conflates two concepts—automation can increase coverage by running more tests faster, but objectivity in assessment is a characteristic of good test design, not automation itself. (C) is wrong because automation reduces test execution time, not increases it; the phrase "increase in test execution times" implies tests take longer, which contradicts a core benefit of automation.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q39</span>
    <span class="lo-badge">FL-6.1.1</span>
  </div>
  <div class="question-text">Given the following test tool categories: i. Collaboration tools ii. DevOps tools iii. Management tools iv. Non-functional testing tools v. Test design and implementation tools Tools from which of the categories are MOST likely to facilitate test execution?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> i, v</li>
        <li class="option-item"><span class="option-letter">b)</span> ii, iv</li>
        <li class="option-item"><span class="option-letter">c)</span> i, iii, v</li>
        <li class="option-item"><span class="option-letter">d)</span> ii, iii, iv</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: DevOps tools (ii) facilitate test execution through CI/CD pipelines that automatically trigger and run tests as part of the build and delivery process. Non-functional testing tools (iv) such as performance and load testing tools directly execute tests against the system. Together, these two categories most directly facilitate test execution. (A) is wrong because collaboration tools (i) support team communication and test design tools (v) help create tests, but neither directly executes tests. (C) is wrong because it includes collaboration tools (i), management tools (iii), and design tools (v)—management tools track and organize test information but do not execute tests, and the other two also do not execute tests. (D) is wrong because management tools (iii) support planning, tracking, and reporting of tests but do not directly facilitate test execution.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q40</span>
    <span class="lo-badge">FL-6.2.1</span>
  </div>
  <div class="question-text">Which of the following is MOST likely to be a risk of test automation?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The detection of additional high-severity defects</li>
        <li class="option-item"><span class="option-letter">b)</span> Providing measures that are too complicated for humans to derive</li>
        <li class="option-item"><span class="option-letter">c)</span> Incompatibility with the development platform</li>
        <li class="option-item"><span class="option-letter">d)</span> Substantially reduced test execution times</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: The ISTQB syllabus explicitly lists incompatibility between the test tool and the development platform as a recognized risk of test automation. A tool that cannot integrate with the existing development environment, programming language, or infrastructure creates significant obstacles. (A) is wrong because detecting additional high-severity defects is a positive outcome and a benefit of testing, not a risk of automation. (B) is wrong because providing coverage measures too complicated for humans to derive is actually listed as a benefit of test automation, not a risk. (D) is wrong because substantially reduced test execution times is one of the primary benefits of test automation, not a risk.
</div>
`,
};

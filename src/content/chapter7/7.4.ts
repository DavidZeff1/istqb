export const content = {
  title: "Chapter 4 Exam Questions",
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
    <span class="question-source">Exam A - Q19</span>
    <span class="lo-badge">FL-4.1.1</span>
  </div>
  <div class="question-text">Which of the following is a characteristic of experience-based test techniques?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test cases are created based on detailed design information</li>
        <li class="option-item"><span class="option-letter">b)</span> Items tested within the interface code section are used to measure coverage</li>
        <li class="option-item"><span class="option-letter">c)</span> The test techniques heavily rely on the tester’s knowledge of the software and the business domain</li>
        <li class="option-item"><span class="option-letter">d)</span> The test cases are used to identify deviations from the requirements</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q20</span>
    <span class="lo-badge">FL-4.2.1</span>
  </div>
  <div class="question-text">You are testing a simplified apartment search form which has only two search criteria: • • floor (with three possible options: ground floor; first floor; second or higher floor) garden type (with three possible options: no garden; small garden; large garden) Each of the apartment on the ground floor has a garden, apartments on higher floors don’t. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule. Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests. What is the minimal number of test cases to achieve 100% EP coverage for valid partitions?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 3</li>
        <li class="option-item"><span class="option-letter">b)</span> 4</li>
        <li class="option-item"><span class="option-letter">c)</span> 5</li>
        <li class="option-item"><span class="option-letter">d)</span> 6</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q21</span>
    <span class="lo-badge">FL-4.2.2</span>
  </div>
  <div class="question-text">You are testing a system that calculates the final course grade for a given student. The final grade is assigned based on the final result, according to the following rules: • • • • • • 0 – 50 points: failed 51 – 60 points: fair 61 – 70 points: satisfactory 71 – 80 points: good 81 – 90 points: very good 91 – 100 points: excellent You have prepared the following set of test cases: TC1 TC2 TC3 TC4 TC5 TC6 Final result 91 50 81 60 70 80 Final grade excellent failed very good fair satisfactory good What is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with the existing test cases?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 50%</li>
        <li class="option-item"><span class="option-letter">b)</span> 60%</li>
        <li class="option-item"><span class="option-letter">c)</span> 33.3%</li>
        <li class="option-item"><span class="option-letter">d)</span> 100%</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q22</span>
    <span class="lo-badge">FL-4.2.3</span>
  </div>
  <div class="question-text">Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it. The implemented features are as follows: • • • Anyone can rent a bicycle, but members receive a 20% discount However, if the return deadline is missed, the discount is no longer available After 15 rentals, members get a gift: a T-Shirt Decision table describing the implemented features looks as follows: Conditions Being a member Missed deadline 15th rental Actions 20% discount Gift T-Shirt R1 T T F R2 T F F R3 T T T R4 T F T X X X X R5 F T F R6 F F F R7 F F T R8 F T T X Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> R4</li>
        <li class="option-item"><span class="option-letter">b)</span> R2</li>
        <li class="option-item"><span class="option-letter">c)</span> R6</li>
        <li class="option-item"><span class="option-letter">d)</span> R8</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q23</span>
    <span class="lo-badge">FL-4.2.4</span>
  </div>
  <div class="question-text">You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state. What is the MINIMAL number of test cases to achieve valid transitions coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 4</li>
        <li class="option-item"><span class="option-letter">b)</span> 2</li>
        <li class="option-item"><span class="option-letter">c)</span> 7</li>
        <li class="option-item"><span class="option-letter">d)</span> 3</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q24</span>
    <span class="lo-badge">FL-4.3.1</span>
  </div>
  <div class="question-text">Your test suite achieved 100% statement coverage. What is the consequence of this fact?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Each instruction in the code that contains a defect has been executed at least once</li>
        <li class="option-item"><span class="option-letter">b)</span> Any test suite containing more test cases than your test suite will also achieve 100% statement coverage</li>
        <li class="option-item"><span class="option-letter">c)</span> Each path in the code has been executed at least once</li>
        <li class="option-item"><span class="option-letter">d)</span> Every combination of input values has been tested at least once</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q25</span>
    <span class="lo-badge">FL-4.3.3</span>
  </div>
  <div class="question-text">Which of the following is NOT true for white-box testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> During white-box testing the entire software implementation is considered</li>
        <li class="option-item"><span class="option-letter">b)</span> White-box coverage metrics can help identify additional tests to increase code coverage</li>
        <li class="option-item"><span class="option-letter">c)</span> White-box test techniques can be used in static testing</li>
        <li class="option-item"><span class="option-letter">d)</span> White-box testing can help identify gaps in requirements implementation</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q26</span>
    <span class="lo-badge">FL-4.4.1</span>
  </div>
  <div class="question-text">Which of the following BEST describes the concept behind error guessing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers</li>
        <li class="option-item"><span class="option-letter">b)</span> Error guessing involves using your personal experience of development and the errors you made as a developer</li>
        <li class="option-item"><span class="option-letter">c)</span> Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it</li>
        <li class="option-item"><span class="option-letter">d)</span> Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q27</span>
    <span class="lo-badge">FL-4.4.2</span>
  </div>
  <div class="question-text">In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented. Which test technique fits BEST in this situation?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Checklist-based testing</li>
        <li class="option-item"><span class="option-letter">b)</span> Error guessing</li>
        <li class="option-item"><span class="option-letter">c)</span> Exploratory testing</li>
        <li class="option-item"><span class="option-letter">d)</span> Branch testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q28</span>
    <span class="lo-badge">FL-4.5.2</span>
  </div>
  <div class="question-text">Which of the following BEST describes the way acceptance criteria can be documented?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story</li>
        <li class="option-item"><span class="option-letter">b)</span> Using the given/when/then format to describe an example test condition related to a given user story</li>
        <li class="option-item"><span class="option-letter">c)</span> Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others</li>
        <li class="option-item"><span class="option-letter">d)</span> Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q29</span>
    <span class="lo-badge">FL-4.5.3</span>
  </div>
  <div class="question-text">Consider the following user story: As an Editor I want to review content before it is published so that I can ensure the grammar is correct and its acceptance criteria: • • • • • • The user can log in to the content management system with &quot;Editor&quot; role The editor can view existing content pages The editor can edit the page content The editor can add markup comments The editor can save changes The editor can reassign to the &quot;content owner&quot; role to make updates Which of the following is the BEST example of an ATDD test for this user story?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test if the editor can save the document after edit the page content</li>
        <li class="option-item"><span class="option-letter">b)</span> Test if the content owner can log in and make updates to the content</li>
        <li class="option-item"><span class="option-letter">c)</span> Test if the editor can schedule the edited content for publication</li>
        <li class="option-item"><span class="option-letter">d)</span> Test if the editor can reassign to another editor to make updates</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA15</span>
    <span class="lo-badge">FL-4.2.2</span>
  </div>
  <div class="question-text">A wine storage system uses a control device that measures the wine cell temperature T (measured in °C, rounded to the nearest degree) and alarms the user if it deviates from the optimal value of 12, according to the following rules: • • • if T = 12, the system says, “optimal temperature” if T &lt; 12, the system says, “temperature is too low!” if T &gt; 12, the system says, “temperature is too high!” You want to use the 3-point boundary value analysis (BVA) to verify the behavior of the control device. A test input is a temperature in °C provided by the device. What is the MINIMAL set of test inputs that achieves 100% of the desired coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 11, 12, 13</li>
        <li class="option-item"><span class="option-letter">b)</span> 10, 12, 14</li>
        <li class="option-item"><span class="option-letter">c)</span> 10, 11, 12, 13, 14</li>
        <li class="option-item"><span class="option-letter">d)</span> 10, 11, 13, 14</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA16</span>
    <span class="lo-badge">FL-4.3.2</span>
  </div>
  <div class="question-text">Which of the following statements about branch testing is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases</li>
        <li class="option-item"><span class="option-letter">b)</span> If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved</li>
        <li class="option-item"><span class="option-letter">c)</span> If 100% statement coverage is achieved, then 100% branch coverage is also achieved</li>
        <li class="option-item"><span class="option-letter">d)</span> If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA17</span>
    <span class="lo-badge">FL-4.4.3</span>
  </div>
  <div class="question-text">You are testing a mobile application that allows customers to access and manage their bank accounts. You are running a test suite that involves evaluating each screen, and each field on each screen, against a general list of user interface best practices derived from a popular book on the topic that maximizes usability for such applications. Which of the following options BEST categorizes the test technique you are using?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Black-box</li>
        <li class="option-item"><span class="option-letter">b)</span> Exploratory</li>
        <li class="option-item"><span class="option-letter">c)</span> Checklist-based</li>
        <li class="option-item"><span class="option-letter">d)</span> Error guessing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA18</span>
    <span class="lo-badge">FL-4.5.1</span>
  </div>
  <div class="question-text">Which of the following BEST describe the collaborative approach to user story writing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> User stories are created by testers and developers and then accepted by business representatives</li>
        <li class="option-item"><span class="option-letter">b)</span> User stories are created by business representatives, developers, and testers together</li>
        <li class="option-item"><span class="option-letter">c)</span> User stories are created by business representatives and verified by developers and testers</li>
        <li class="option-item"><span class="option-letter">d)</span> User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q19</span>
    <span class="lo-badge">FL-4.1.1</span>
  </div>
  <div class="question-text">Which of the following statements BEST describes the difference between decision table testing and branch testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object.</li>
        <li class="option-item"><span class="option-letter">b)</span> In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.</li>
        <li class="option-item"><span class="option-letter">c)</span> In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.</li>
        <li class="option-item"><span class="option-letter">d)</span> In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code.</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q20</span>
    <span class="lo-badge">FL-4.2.1</span>
  </div>
  <div class="question-text">Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to. For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total). Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 19, 20, 30</li>
        <li class="option-item"><span class="option-letter">b)</span> 11, 12, 20</li>
        <li class="option-item"><span class="option-letter">c)</span> 1, 10, 50</li>
        <li class="option-item"><span class="option-letter">d)</span> 10, 29, 30, 31</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q21</span>
    <span class="lo-badge">FL-4.2.2</span>
  </div>
  <div class="question-text">You are testing a form that verifies the correctness of the length of the password given as input. The form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect. At first, the form is empty (password length = 0). You apply boundary value analysis to the “password length” variable. Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage. Which additional password lengths should be tested to achieve this?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 4, 5, 13, 14</li>
        <li class="option-item"><span class="option-letter">b)</span> 7, 11</li>
        <li class="option-item"><span class="option-letter">c)</span> 1, 5, 13</li>
        <li class="option-item"><span class="option-letter">d)</span> 1, 4, 7, 11, 14</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q22</span>
    <span class="lo-badge">FL-4.2.3</span>
  </div>
  <div class="question-text">The following decision table contains the rules for determining the risk of atherosclerosis. Rule 1 Rule 2 Rule 3 Rule 4 Rule 5 Cholesterol (mg/dl) ≤124 ≤ 124 125 – 200 125 – 200 ≥ 201 Blood pressure (mm Hg) ≤ 140 &gt; 140 ≤ 140 &gt; 140 – very low low medium high very high Conditions Action Risk level You designed the test cases with the following input data: TC1: Cholesterol = 125 mg/dl Blood pressure = 141 mm Hg TC2: Cholesterol = 200 mg/dl Blood pressure = 201 mm Hg TC3: Cholesterol = 124 mg/dl Blood pressure = 201 mm Hg TC4: Cholesterol = 109 mg/dl Blood pressure = 200 mm Hg TC5: Cholesterol = 201 mg/dl Blood pressure = 140 mm Hg What is the decision table coverage achieved by these test cases?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 40%</li>
        <li class="option-item"><span class="option-letter">b)</span> 60%</li>
        <li class="option-item"><span class="option-letter">c)</span> 80%</li>
        <li class="option-item"><span class="option-letter">d)</span> 100%</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q23</span>
    <span class="lo-badge">FL-4.2.4</span>
  </div>
  <div class="question-text">A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements. Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Add, Remove, Add, Add, Add</li>
        <li class="option-item"><span class="option-letter">b)</span> Add, Add, Add, Add, Remove, Remove</li>
        <li class="option-item"><span class="option-letter">c)</span> Add, Add, Add, Remove, Remove</li>
        <li class="option-item"><span class="option-letter">d)</span> Add, Add, Add, Remove, Add</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q24</span>
    <span class="lo-badge">FL-4.3.1</span>
  </div>
  <div class="question-text">You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage. Which of the following sentences must be necessarily true?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The test suite composed of tests T1 and T2 achieves 105% statement coverage</li>
        <li class="option-item"><span class="option-letter">b)</span> There exists at least one statement that must have been executed by both T1 and T2</li>
        <li class="option-item"><span class="option-letter">c)</span> At least 5% of the statements in the code that was tested are non-executable</li>
        <li class="option-item"><span class="option-letter">d)</span> The test suite composed of tests T1 and T2 achieves full branch coverage</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q25</span>
    <span class="lo-badge">FL-4.3.2</span>
  </div>
  <div class="question-text">Let the branch coverage metric be defined as BCov = (X / Y) * 100%. What do X and Y represent in this formula?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> X = number of decision outcomes exercised by the test cases Y = total number of decision outcomes in the code</li>
        <li class="option-item"><span class="option-letter">b)</span> X = number of conditional branches exercised by the test cases Y = total number of branches in the code</li>
        <li class="option-item"><span class="option-letter">c)</span> X = number of branches exercised by the test cases Y = total number of branches in the code</li>
        <li class="option-item"><span class="option-letter">d)</span> X = number of conditional branches exercised by the test cases Y = total number of decision outcomes in the code</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q26</span>
    <span class="lo-badge">FL-4.4.2</span>
  </div>
  <div class="question-text">Which TWO of the following statements provide the BEST rationale for using exploratory testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Testers have not been allocated enough time for test design and test execution</li>
        <li class="option-item"><span class="option-letter">b)</span> The existing test strategy requires that testers use formal, black-box test techniques</li>
        <li class="option-item"><span class="option-letter">c)</span> The specification is written in a formal language that can be processed by a tool</li>
        <li class="option-item"><span class="option-letter">d)</span> Testers are the members of an agile team and have good programming skills</li>
        <li class="option-item"><span class="option-letter">e)</span> Testers are experienced in the business domain and have good analytical skills</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A, E</strong>. Explanation: Option A, E is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q27</span>
    <span class="lo-badge">FL-4.4.3</span>
  </div>
  <div class="question-text">Which of the following BEST fits as an element of the checklist used in checklist-based testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> “The developer made an error when implementing the code”</li>
        <li class="option-item"><span class="option-letter">b)</span> “The achieved statement coverage exceeds 85%”</li>
        <li class="option-item"><span class="option-letter">c)</span> “The program works correctly regarding functional and non-functional requirements”</li>
        <li class="option-item"><span class="option-letter">d)</span> “The error messages are written in language that the user can understand”</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q28</span>
    <span class="lo-badge">FL-4.5.2</span>
  </div>
  <div class="question-text">Consider the following acceptance criteria for a user story written from the perspective of an online store owner. Given that the user is logged in and on the homepage, When the user clicks on the &quot;Add Item&quot; button, Then the &quot;Create Item&quot; form should appear, And the user should be able to input a name and price for the new item. In what format is this acceptance criteria written?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Rule-oriented</li>
        <li class="option-item"><span class="option-letter">b)</span> Scenario-oriented</li>
        <li class="option-item"><span class="option-letter">c)</span> Product-oriented</li>
        <li class="option-item"><span class="option-letter">d)</span> Process-oriented</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q29</span>
    <span class="lo-badge">FL-4.5.3</span>
  </div>
  <div class="question-text">Your team analyzes the following user story in order to define the acceptance criteria: As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases. Which of the following test cases will NOT be relevant for this user story?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Input: the customer logs into their account on the website and clicks the “see order history” button Expected result: the system shows a list of all the customer’s previous orders, including the date, order number, and total cost</li>
        <li class="option-item"><span class="option-letter">b)</span> Input: the customer clicks on an order from the order list Expected result: the system displays the individual items purchased, along with their prices and quantities</li>
        <li class="option-item"><span class="option-letter">c)</span> Input: the customer clicks “Sort ascending” button on the order history screen Expected result: the system shows the order history sorted by order number in ascending order</li>
        <li class="option-item"><span class="option-letter">d)</span> Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database Expected result: the system accepts the registration and creates the account</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q19</span>
    <span class="lo-badge">FL-4.1.1</span>
  </div>
  <div class="question-text">What is the MAIN difference between black-box test techniques and experience-based test techniques?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The test object</li>
        <li class="option-item"><span class="option-letter">b)</span> The test level at which the test technique is used</li>
        <li class="option-item"><span class="option-letter">c)</span> The test basis</li>
        <li class="option-item"><span class="option-letter">d)</span> The software development lifecycle (SDLC) in which the test technique can be used</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q20</span>
    <span class="lo-badge">FL-4.2.1</span>
  </div>
  <div class="question-text">You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You have identified the following valid equivalence partitions: Variable: PIN code length • The partition “length correct” • The partition “length incorrect” - four-digit PINs - PINs with length other than 4 Variable: Number of different digits • The partition “number of different digits correct” - PINs with at least two different digits • The partition “number of different digits incorrect” - PINs with all digits being the same Which of the following is the BEST set of input test data to cover the identified equivalence partitions?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 12, 1111, 1234, 12345</li>
        <li class="option-item"><span class="option-letter">b)</span> 1, 123, 1111, 1234</li>
        <li class="option-item"><span class="option-letter">c)</span> 11, 12, 1111, 12345</li>
        <li class="option-item"><span class="option-letter">d)</span> 123, 1222, 12345</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q21</span>
    <span class="lo-badge">FL-4.2.2</span>
  </div>
  <div class="question-text">A developer was asked to implement the following business rule: INPUT: value (integer number) IF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect” ELSE write “value OK” You design the test cases using 2-value boundary value analysis. Which of the following sets of test inputs achieves the greatest coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 100,</li>
        <li class="option-item"><span class="option-letter">b)</span> 99,</li>
        <li class="option-item"><span class="option-letter">c)</span> 98,</li>
        <li class="option-item"><span class="option-letter">d)</span> 101,</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q22</span>
    <span class="lo-badge">FL-4.2.3</span>
  </div>
  <div class="question-text">You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table. R1 R2 R3 C1: First attempt at the exam? - - F C2: Theoretical exam passed? T F - C3: Practical exam passed? T - F Issue a driving license? X Request additional driving lessons? Request to take the exam again? X X What test data will show that there are contradictory rules in the decision table?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> C1 = T, C2 = T, C3 = F</li>
        <li class="option-item"><span class="option-letter">b)</span> C1 = T, C2 = F, C3 = T</li>
        <li class="option-item"><span class="option-letter">c)</span> C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T</li>
        <li class="option-item"><span class="option-letter">d)</span> C1 = F, C2 = F, C3 = F</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q23</span>
    <span class="lo-badge">FL-4.2.4</span>
  </div>
  <div class="question-text">You are designing test cases based on the following state transition diagram: What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 3</li>
        <li class="option-item"><span class="option-letter">b)</span> 2</li>
        <li class="option-item"><span class="option-letter">c)</span> 5</li>
        <li class="option-item"><span class="option-letter">d)</span> 6</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q24</span>
    <span class="lo-badge">FL-4.3.2</span>
  </div>
  <div class="question-text">You want to apply branch testing to the code represented by the following control flow graph. How many coverage items do you need to test?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 2</li>
        <li class="option-item"><span class="option-letter">b)</span> 4</li>
        <li class="option-item"><span class="option-letter">c)</span> 8</li>
        <li class="option-item"><span class="option-letter">d)</span> 7</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q25</span>
    <span class="lo-badge">FL-4.3.3</span>
  </div>
  <div class="question-text">How can white-box testing be useful in support of black-box testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests</li>
        <li class="option-item"><span class="option-letter">b)</span> White-box coverage analysis can help testers identify unreachable fragments of the source code</li>
        <li class="option-item"><span class="option-letter">c)</span> Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique</li>
        <li class="option-item"><span class="option-letter">d)</span> White-box test techniques can provide coverage items for black-box techniques</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q26</span>
    <span class="lo-badge">FL-4.4.1</span>
  </div>
  <div class="question-text">Consider the following list: • Correct input not accepted • Incorrect input accepted • Wrong output format • Division by zero What test technique is MOST PROBABLY used by the tester who uses this list when performing testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Exploratory testing</li>
        <li class="option-item"><span class="option-letter">b)</span> Fault attack</li>
        <li class="option-item"><span class="option-letter">c)</span> Checklist-based testing</li>
        <li class="option-item"><span class="option-letter">d)</span> Boundary value analysis</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q27</span>
    <span class="lo-badge">FL-4.4.3</span>
  </div>
  <div class="question-text">Which of the following BEST describes how using checklist-based testing can result in increased coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items</li>
        <li class="option-item"><span class="option-letter">b)</span> Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage</li>
        <li class="option-item"><span class="option-letter">c)</span> Each checklist item should be tested separately and independently, so the elements cover different areas of the software</li>
        <li class="option-item"><span class="option-letter">d)</span> Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q28</span>
    <span class="lo-badge">FL-4.5.2</span>
  </div>
  <div class="question-text">Which of the following provides the BEST example of a scenario-oriented acceptance criterion?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The application must allow users to delete their account and all associated data upon request</li>
        <li class="option-item"><span class="option-letter">b)</span> When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven’t already done so</li>
        <li class="option-item"><span class="option-letter">c)</span> IF (contain(product(23).Name, cart.products())) THEN return FALSE</li>
        <li class="option-item"><span class="option-letter">d)</span> The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q29</span>
    <span class="lo-badge">FL-4.5.3</span>
  </div>
  <div class="question-text">You are using acceptance test-driven development and designing test cases based on the following user story: As a Regular or Special user, I want to be able to use my electronic floor card, to access specific floors. Acceptance Criteria: AC1: Regular users have access to floors 1 to 3 AC2: Floor 4 is only accessible to Special users AC3: Special users have all the access rights of Regular users Which test case is the MOST reasonable one to test AC3?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Check that a Regular user can access floors 1 and 3</li>
        <li class="option-item"><span class="option-letter">b)</span> Check that a Regular user cannot access floor 4</li>
        <li class="option-item"><span class="option-letter">c)</span> Check that a Special user can access floor 5</li>
        <li class="option-item"><span class="option-letter">d)</span> Check that a Special user can access floors 1, 2 and 3</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q19</span>
    <span class="lo-badge">FL-4.1.1</span>
  </div>
  <div class="question-text">You perform system testing of an e-commerce web application and are provided with the following requirement: REQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount. Which test techniques will be MOST helpful in designing test cases based on this requirement?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> White-box test techniques</li>
        <li class="option-item"><span class="option-letter">b)</span> Black-box test techniques</li>
        <li class="option-item"><span class="option-letter">c)</span> Experience-based test techniques</li>
        <li class="option-item"><span class="option-letter">d)</span> Risk-based test techniques</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q20</span>
    <span class="lo-badge">FL-4.2.1</span>
  </div>
  <div class="question-text">The system for selling cinema tickets calculates the discount type based on the client’s birth year (BY) and on the current year (CY) as follows: Let D be the difference between CY and BY, that is, D = CY – BY • If D &lt; 0 then print the error message “birth year cannot be greater than current year” • If 0 ≤ D &lt; 18 then apply the student discount • If 18 ≤ D &lt; 65 then apply no discount • If D ≥ 65 then apply the pensioner discount Your test suite already contains two test cases: • BY = 1990, CY = 2020, expected result: no discount • BY = 2030, CY = 2029, expected result: print the error message Which of the following test data sets should be added to achieve full valid equivalence partitioning coverage for the discount type?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> BY = 2001,</li>
        <li class="option-item"><span class="option-letter">b)</span> BY = 1900,</li>
        <li class="option-item"><span class="option-letter">c)</span> BY = 1965,</li>
        <li class="option-item"><span class="option-letter">d)</span> BY = 2011,</li>
        <li class="option-item"><span class="option-letter">e)</span> BY = 2000,</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B, E</strong>. Explanation: Option B, E is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q21</span>
    <span class="lo-badge">FL-4.2.2</span>
  </div>
  <div class="question-text">You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message “temperature OK”. For lower temperatures, the system displays the message &quot;temperature too low&quot; and for higher temperatures it displays the message “temperature too high”. Using two-value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> –1, 3</li>
        <li class="option-item"><span class="option-letter">b)</span> 0, 2</li>
        <li class="option-item"><span class="option-letter">c)</span> –1, 0, 2, 3</li>
        <li class="option-item"><span class="option-letter">d)</span> –2, 0, 2, 4</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q22</span>
    <span class="lo-badge">FL-4.2.3</span>
  </div>
  <div class="question-text">You are designing test cases based on the following decision table. R1 R2 R3 R4 R5 R6 R7 0-18 19-65 19-65 &gt;65 0-18 19-65 &gt;65 C2: Experience - 0-4 &gt;4 - - - - C3: Registered? NO NO NO NO YES YES YES Category A A B B B D C C1: Age So far you have designed the following test cases: • TC1: 19-year-old, unregistered man with no experience; expected result: category A • TC2: 65-year-old, unregistered woman with 5 years of experience; expected result: category B • TC3: 66-year-old, registered man with no experience; expected result: category C • TC4: 65-year-old, registered woman with 4 years of experience; expected result: category D Which of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 66-year-old, unregistered man with no experience;</li>
        <li class="option-item"><span class="option-letter">b)</span> expected result: category B</li>
        <li class="option-item"><span class="option-letter">c)</span> 55-year-old, unregistered woman with 2 years of experience; expected result: category A</li>
        <li class="option-item"><span class="option-letter">d)</span> 19-year-old, registered woman with 5 years of experience;</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q23</span>
    <span class="lo-badge">FL-4.2.4</span>
  </div>
  <div class="question-text">You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events: Events State Available NotAvailable S1: Requesting S2 S3 ChangeRoom Cancel Pay S1 S4 S4 S2: Confirmed S3: Waiting list S2 S4 S4: End Assuming all test cases start in the ‘Requesting’ state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> NotAvailable, Available,</li>
        <li class="option-item"><span class="option-letter">b)</span> ChangeRoom, NotAvailable, Cancel</li>
        <li class="option-item"><span class="option-letter">c)</span> Available,</li>
        <li class="option-item"><span class="option-letter">d)</span> ChangeRoom, NotAvailable, Available,</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Option B is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q24</span>
    <span class="lo-badge">FL-4.3.1</span>
  </div>
  <div class="question-text">Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage. Which of the following statements is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Executing S will cause all possible failures in P</li>
        <li class="option-item"><span class="option-letter">b)</span> S achieves 100% branch coverage for P</li>
        <li class="option-item"><span class="option-letter">c)</span> Every executable statement in P containing a defect has been run at least once during the execution of S</li>
        <li class="option-item"><span class="option-letter">d)</span> After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q25</span>
    <span class="lo-badge">FL-4.3.3</span>
  </div>
  <div class="question-text">Why does white-box testing facilitate defect detection even when the software specification is vague, outdated or incomplete?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test cases are designed based on the structure of the test object rather than the specification</li>
        <li class="option-item"><span class="option-letter">b)</span> For each white-box test technique the coverage can be well-defined and easily measured</li>
        <li class="option-item"><span class="option-letter">c)</span> White-box test techniques are very well designed to detect omissions in the requirements</li>
        <li class="option-item"><span class="option-letter">d)</span> White-box test techniques can be used in both static testing and dynamic testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q26</span>
    <span class="lo-badge">FL-4.4.1</span>
  </div>
  <div class="question-text">Which of the following is NOT anticipated by the tester while applying error guessing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The developer misunderstood the formula in the user story for calculating the interest</li>
        <li class="option-item"><span class="option-letter">b)</span> The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code</li>
        <li class="option-item"><span class="option-letter">c)</span> The developer missed the seminar on new compound interest rate legislation</li>
        <li class="option-item"><span class="option-letter">d)</span> The accuracy of the interest calculated by the system is not precise enough</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Option C is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q27</span>
    <span class="lo-badge">FL-4.4.2</span>
  </div>
  <div class="question-text">Which of the following is true about exploratory testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Test cases are designed before the exploratory testing session starts</li>
        <li class="option-item"><span class="option-letter">b)</span> The tester can perform test execution, but cannot perform test design</li>
        <li class="option-item"><span class="option-letter">c)</span> Exploratory testing results are good predictors of the number of remaining defects</li>
        <li class="option-item"><span class="option-letter">d)</span> During exploratory testing the tester may use black-box test techniques</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q28</span>
    <span class="lo-badge">FL-4.5.1</span>
  </div>
  <div class="question-text">Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Planning poker, so that a team can achieve consensus on the effort needed to implement a user story</li>
        <li class="option-item"><span class="option-letter">b)</span> Reviews, so that a team can detect inconsistencies and contradictions in a user story</li>
        <li class="option-item"><span class="option-letter">c)</span> Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation</li>
        <li class="option-item"><span class="option-letter">d)</span> Conversation, so that team members can understand how the software will be used</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Option D is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q29</span>
    <span class="lo-badge">FL-4.5.3</span>
  </div>
  <div class="question-text">You have just started designing test cases for the following user story. As a customer, I want to be able to filter search results by price range, so that I can find products within my budget more easily. Acceptance criteria: 1. The filter should work for all versions of the application from version 3.0 upwards 2. The filter should allow the customer to set a price range with a minimum and a maximum price 3. The search results should update dynamically as the customer adjusts the price range filter In all test cases the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110. Which of the following is the BEST example of a test case for this user story?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B</li>
        <li class="option-item"><span class="option-letter">b)</span> Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the default maximum price changes to $120</li>
        <li class="option-item"><span class="option-letter">c)</span> Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate</li>
        <li class="option-item"><span class="option-letter">d)</span> Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Option A is correct because it best satisfies the exam objective and stems from the official syllabus definition. Other options are incorrect because they either omit key requirements, overstate the scope, or describe related but not correct concepts.
</div>
`
};

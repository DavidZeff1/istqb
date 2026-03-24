export const content = {
  title: "Chapter 1 Exam Questions & Patterns",
  content: `
    <div class="test-content">
      <div class="concept-block intro-box">
        <h3>Exam Strategy & Patterns — Chapter 1</h3>
        <p>Chapter 1 questions test your ability to distinguish between very similar-sounding concepts. Watch for absolute terms like "always," "guarantees," or "proves" — these are almost always wrong. Testing reduces risk and builds confidence; it does <strong>not</strong> prove correctness. All 8 questions below are taken directly from ISTQB Sample Exam Set D.</p>
      </div>

      <!-- SECTION 1.1 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #3b82f6;">
        <h3 style="color: #3b82f6;">1.1 What is Testing? — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Objective vs. Action:</strong> Test <em>objectives</em> are goals like "building confidence," "triggering failures," or "evaluating quality." Answers describing an <em>activity</em> (e.g., "running scripts") are wrong for an objective question.</li>
          <li><strong>Verification vs. Validation:</strong> Verification = did we meet the specification? Validation = does it meet real-world user needs?</li>
          <li><strong>Testing vs. Debugging:</strong> Testers trigger failures; developers diagnose root causes and fix them. Fixing a defect is <em>not</em> a test objective.</li>
          <li><strong>Trap — "Validating legal requirements":</strong> This sounds correct but is actually <em>verification</em> (checking against a specification), not validation (checking against user needs).</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>1.1 — Sample Exam D, Question #1 <span style="font-weight:normal; font-size:0.85em;">(FL-1.1.1, K1)</span></h3>
        <ol>
          <li>
            <strong>Which of the following is a typical test objective?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Finding and fixing defects in the test object</div>
              <div>B) Maintaining effective communications with developers</div>
              <div>C) Validating that legal requirements have been met</div>
              <div>D) Building confidence in the quality of the test object</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: D</strong></p>
                  <p><em>Why A is wrong:</em> Fixing defects is debugging, not testing. Identifying defects is a test objective, but fixing them is not.</p>
                  <p><em>Why B is wrong:</em> Communication is useful but is not a primary test objective in itself.</p>
                  <p><em>Why C is wrong:</em> Checking legal requirements is <strong>verification</strong>, not validation. Validation is about whether the system meets users' needs in the real world.</p>
                  <p><em>Why D is correct:</em> Building confidence in quality by executing tests that pass is a core, recognized test objective.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 1.2 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #8b5cf6; margin-top: 2.5rem;">
        <h3 style="color: #8b5cf6;">1.2 Why is Testing Necessary? — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Error → Defect → Failure chain:</strong> A human makes an <em>Error</em> (a mistake). The error causes a <em>Defect</em> (fault) in the work product. When the defect is executed, it may produce a <em>Failure</em> (observable incorrect behavior).</li>
          <li><strong>Root Cause vs. Defect:</strong> The root cause is the <em>underlying reason</em> the mistake was made (e.g., time pressure, ambiguous requirements, lack of training) — NOT the defect itself.</li>
          <li><strong>Common trap:</strong> "A miscalculation occurred" = Failure (observable bad output). "An incorrect variable was used" = Defect. "Time pressure caused the error" = Root Cause.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>1.2 — Sample Exam D, Question #2 <span style="font-weight:normal; font-size:0.85em;">(FL-1.2.3, K2)</span></h3>
        <ol>
          <li>
            <strong>A designer documents a UI that doesn't address disabled users because they are tired. A programmer implements the UI correctly but, under time pressure, omits exception handling for bonus calculations. Disabled users complain and the company is fined. Bonus miscalculations go unnoticed. Which statement is CORRECT?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) The miscalculation of bonuses is a defect that occasionally occurs</div>
              <div>B) The fine received for failing to address disabled users is a failure</div>
              <div>C) The programmer working under severe time pressure is a root cause</div>
              <div>D) The design of the user interface includes a designer error</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Why A is wrong:</em> The miscalculation is a <strong>Failure</strong> (observable incorrect behavior at runtime), not a defect.</p>
                  <p><em>Why B is wrong:</em> The fine is the regulatory system working correctly, not a software failure.</p>
                  <p><em>Why C is correct:</em> Time pressure is the underlying human/process condition that caused the programmer's mistake — this is the <strong>root cause</strong>.</p>
                  <p><em>Why D is wrong:</em> The poor UI design is a <strong>Defect</strong> (caused by the designer's Error). The design document itself contains a defect, not an error — the error was the designer's action.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 1.3 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #10b981; margin-top: 2.5rem;">
        <h3 style="color: #10b981;">1.3 Testing Principles — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Tests Wear Out (Pesticide Paradox):</strong> Repeating the same tests on unchanged code stops finding new bugs. Vary your tests to keep finding defects.</li>
          <li><strong>Absence-of-Errors Fallacy:</strong> Zero bugs ≠ good product. The system could be perfectly bug-free yet useless if built to the wrong requirements.</li>
          <li><strong>Early Testing:</strong> Finding defects in requirements/design is far cheaper than finding them in production (Shift-Left).</li>
          <li><strong>Defects Cluster Together:</strong> Most defects concentrate in a small number of modules — target high-risk areas first (Pareto distribution).</li>
          <li><strong>Exhaustive Testing is Impossible:</strong> You cannot test every combination of inputs; use risk and prioritization instead.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>1.3 — Sample Exam D, Question #3 <span style="font-weight:normal; font-size:0.85em;">(FL-1.3.1, K2)</span></h3>
        <ol>
          <li>
            <strong>Test conditions are used to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time. Which testing principle is being addressed?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Tests wear out</div>
              <div>B) Absence-of-defects fallacy</div>
              <div>C) Early testing saves time and money</div>
              <div>D) Defects cluster together</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>Why A is correct:</em> By varying the test cases derived from the same conditions, the team ensures tests don't become identical repetitions — directly addressing the "Tests Wear Out" principle.</p>
                  <p><em>Why B is wrong:</em> Absence-of-errors fallacy is about whether a bug-free system still meets user needs — not addressed by varying test cases.</p>
                  <p><em>Why C is wrong:</em> Early testing is addressed by starting testing activities during planning/requirements — not by varying test cases.</p>
                  <p><em>Why D is wrong:</em> Defects clustering is addressed by risk-based testing — targeting high-defect modules.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 1.4 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #f59e0b; margin-top: 2.5rem;">
        <h3 style="color: #f59e0b;">1.4 Test Activities, Testware &amp; Roles — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Activity sequence:</strong> Analysis → Design → Implementation → Execution → Completion.</li>
          <li><strong>Test Analysis:</strong> <em>What</em> to test — identifies test conditions from the test basis. Also evaluates testability.</li>
          <li><strong>Test Design:</strong> <em>How</em> to test — creates test cases and test charters from conditions. Outputs: test cases, test data requirements.</li>
          <li><strong>Test Implementation:</strong> Creates test procedures (scripts), assembles suites, schedules execution. Outputs: test procedures, test data, test execution schedule.</li>
          <li><strong>Test Completion:</strong> End-of-milestone activity. Archives testware, produces test completion report, captures lessons learned.</li>
          <li><strong>Roles — Testing vs. Test Management:</strong> The <strong>testing role</strong> handles technical activities (analysis, design, implementation, execution). The <strong>test management role</strong> handles planning, monitoring, control, and completion (including the test completion report).</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>1.4 — Sample Exam D, Questions #4, #5, #6 <span style="font-weight:normal; font-size:0.85em;">(FL-1.4.1/3/5, K2)</span></h3>
        <ol>
          <li>
            <strong>Q#4: Given tasks: (1) Derive test cases from test conditions, (2) Identify reusable testware, (3) Organize test cases into test procedures, (4) Evaluate the test basis and the test object — and activities: A=Test Analysis, B=Test Design, C=Test Implementation, D=Test Completion. Which BEST matches tasks to activities?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) 1B, 2A, 3D, 4C</div>
              <div>B) 1B, 2D, 3C, 4A</div>
              <div>C) 1C, 2A, 3B, 4D</div>
              <div>D) 1C, 2D, 3A, 4B</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p><em>Breakdown:</em></p>
                  <ul>
                    <li>Task 1 (Derive test cases from conditions) → <strong>B: Test Design</strong></li>
                    <li>Task 2 (Identify reusable testware) → <strong>D: Test Completion</strong> (archiving reusable testware is a completion activity)</li>
                    <li>Task 3 (Organize test cases into test procedures) → <strong>C: Test Implementation</strong></li>
                    <li>Task 4 (Evaluate the test basis and test object) → <strong>A: Test Analysis</strong></li>
                  </ul>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#5: From the testware list — (i) Test completion report, (ii) Test data in a database, (iii) List of elements to build the test environment, (iv) Documented sequences of test cases in execution order, (v) Test cases — which items are produced by Test Implementation?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) ii, iv</div>
              <div>B) iii, v</div>
              <div>C) i, ii, v</div>
              <div>D) i, iii, iv</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>Breakdown:</em></p>
                  <ul>
                    <li>i (Test completion report) → Test <strong>Completion</strong></li>
                    <li>ii (Test data in a database) → Test <strong>Implementation</strong> ✓</li>
                    <li>iii (Environment element list) → Test <strong>Design</strong></li>
                    <li>iv (Documented sequences = test procedures) → Test <strong>Implementation</strong> ✓</li>
                    <li>v (Test cases) → Test <strong>Design</strong></li>
                  </ul>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#6: Which task is MOST likely performed by someone in a Test Management role?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Evaluate the test basis and the test object</div>
              <div>B) Define test environment requirements</div>
              <div>C) Assess testability of the test object</div>
              <div>D) Create the test completion report</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: D</strong></p>
                  <p><em>Why A, B, C are wrong:</em> All three are technical testing activities (test analysis and design) performed by the <strong>testing role</strong>.</p>
                  <p><em>Why D is correct:</em> The test management role handles planning, monitoring, control, and completion. The test completion report is the primary output of Test Completion — a management-level activity.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 1.5 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #ef4444; margin-top: 2.5rem;">
        <h3 style="color: #ef4444;">1.5 Essential Skills &amp; Team Approaches — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Whole Team Approach:</strong> Everyone on the team is responsible for quality. Key benefit = improved communication and collaboration. It does NOT mean no individual accountability, faster deployment, or less collaboration with business users.</li>
          <li><strong>Independence of Testing:</strong>
            <ul>
              <li><em>Benefits:</em> Testers have different viewpoints/biases → find different defects. Testers challenge assumptions made by developers.</li>
              <li><em>Drawbacks:</em> Isolation from dev team → communication problems, adversarial relationship, developers feel less accountable for quality.</li>
            </ul>
          </li>
          <li><strong>Trap — Working in a different location:</strong> Physical separation is NOT inherently an advantage; it's a potential source of isolation (a drawback).</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>1.5 — Sample Exam D, Questions #7, #8 <span style="font-weight:normal; font-size:0.85em;">(FL-1.5.2/3, K1/K2)</span></h3>
        <ol>
          <li>
            <strong>Q#7: Which of the following is an advantage of the whole team approach?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Improved communication between team members</div>
              <div>B) Decreased individual accountability for quality</div>
              <div>C) Faster deployment of deliverables to end users</div>
              <div>D) Reduced collaboration with external business users</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>Why B is wrong:</em> Individual accountability is still maintained — the whole team approach adds collective responsibility but doesn't remove individual accountability.</p>
                  <p><em>Why C is wrong:</em> The approach focuses on quality, not deployment speed.</p>
                  <p><em>Why D is wrong:</em> Testers work WITH business representatives — collaboration increases, not decreases.</p>
                  <p><em>Why A is correct:</em> The primary benefit is robust communication and collaboration within the team.</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#8: Given these independence of testing characteristics — (i) Testers work in different location, (ii) Testers question programmer assumptions, (iii) Confrontational dynamic established, (iv) Developers convinced testers are mostly accountable, (v) Testers have different biases — which are MOST likely BENEFITS?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) i, iv</div>
              <div>B) ii, v</div>
              <div>C) i, iii, iv</div>
              <div>D) ii, iii, v</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p><em>Benefits:</em></p>
                  <ul>
                    <li>ii ✓ — Testers questioning assumptions is a core benefit: they catch things developers' cognitive bias misses.</li>
                    <li>v ✓ — Different biases mean testers look at the system differently and find different defect types.</li>
                  </ul>
                  <p><em>Drawbacks:</em></p>
                  <ul>
                    <li>i — Different location = potential isolation (drawback).</li>
                    <li>iii — Confrontational dynamic = communication breakdown (drawback).</li>
                    <li>iv — Developers feeling less accountable = loss of quality ownership (drawback).</li>
                  </ul>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

    </div>
  `
};

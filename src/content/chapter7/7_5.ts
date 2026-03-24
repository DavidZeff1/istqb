export const content = {
  title: "Chapter 5 Exam Questions & Patterns",
  content: `
    <div class="test-content">
      <div class="concept-block intro-box">
        <h3>Exam Strategy &amp; Patterns — Chapter 5</h3>
        <p>Chapter 5 covers test management — planning, estimation, prioritization, monitoring, risk, defect reporting, and configuration management. Expect calculation questions (3-point estimation, risk impact), classification questions (entry vs. exit criteria, product vs. project risk), and scenario questions. All 9 questions are from ISTQB Sample Exam Set D.</p>
      </div>

      <!-- SECTION 5.1 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #dc2626;">
        <h3 style="color: #dc2626;">5.1 Test Planning — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Entry criteria</strong> = conditions that must be true BEFORE an activity starts (budget approved, resources available, test basis ready).</li>
          <li><strong>Exit criteria</strong> = conditions that signal an activity is done (coverage achieved, budget exhausted, all planned tests run).</li>
          <li><strong>Three-point estimation:</strong> E = (a + 4m + b) / 6, where a = optimistic, m = most likely, b = pessimistic.</li>
          <li><strong>Additional coverage prioritization:</strong> Run the test case that covers the most NEW (uncovered) requirements first, then the next that adds the most new coverage, etc.</li>
          <li><strong>Testing quadrants:</strong> A framework helping stakeholders understand the relationship between test types, whether they support the team or critique the product, and whether they're business-facing or technology-facing. NOT related to test levels, coverage measurement, or psychology.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>5.1 — Sample Exam D, Questions #30–#33 <span style="font-weight:normal; font-size:0.85em;">(FL-5.1.3/4/5/7, K2/K3)</span></h3>
        <ol>
          <li>
            <strong>Q#30: Which TWO BEST define EXIT criteria in a testing project?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Budget is approved</div>
              <div>B) Budget runs out</div>
              <div>C) Test basis is available</div>
              <div>D) Test cases achieved at least 80% statement coverage</div>
              <div>E) All test analysts are ISTQB certified at Foundation Level</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B and D</strong></p>
                  <ul>
                    <li>A = Entry criterion — budget must be approved before testing starts.</li>
                    <li>B ✓ = Exit criterion — running out of budget is a valid signal to stop testing.</li>
                    <li>C = Entry criterion — the test basis must exist before testing can begin.</li>
                    <li>D ✓ = Exit criterion — achieving a coverage target is a classic thoroughness-based exit criterion.</li>
                    <li>E = Entry criterion — certifications are a prerequisite for the team, not a completion signal.</li>
                  </ul>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#31: A team uses three-point estimation for one tester executing 4 test cases. Single test case estimates: best=1h, worst=8h, most likely=3h. What is the total estimate for all 4 test cases?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) 14 hours</div>
              <div>B) 3.5 hours</div>
              <div>C) 16 hours</div>
              <div>D) 12 hours</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>Formula:</em> E = (a + 4m + b) / 6</p>
                  <p>E per test case = (1 + 4×3 + 8) / 6 = (1 + 12 + 8) / 6 = 21 / 6 = <strong>3.5 hours</strong></p>
                  <p>Total for 4 test cases = 3.5 × 4 = <strong>14 hours</strong></p>
                  <p><em>Note:</em> Option B (3.5 hours) is the per-test-case estimate — don't stop there!</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#32: Traceability matrix below. Using additional coverage prioritization, which test case should be executed LAST?</strong>
            <div style="margin-top: 0.75rem; overflow-x: auto;">
              <table style="border-collapse: collapse; font-size: 0.85em; width: 100%;">
                <thead>
                  <tr style="background: #f3f4f6;">
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;"></th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Req1</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Req2</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Req3</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Req4</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Req5</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Req6</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Req7</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>TC1</strong></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td></tr>
                  <tr><td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>TC2</strong></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td></tr>
                  <tr><td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>TC3</strong></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td></tr>
                  <tr><td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>TC4</strong></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;">X</td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td><td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td></tr>
                </tbody>
              </table>
            </div>
            <div style="margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) TC1</div>
              <div>B) TC2</div>
              <div>C) TC3</div>
              <div>D) TC4</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B — TC2 runs last</strong></p>
                  <p><em>Apply additional coverage prioritization iteratively:</em></p>
                  <ol>
                    <li><strong>Round 1:</strong> TC1 covers 4 requirements (Req1,3,4,7) — most of any single TC → run TC1 first.</li>
                    <li><strong>Round 2:</strong> Remaining uncovered: Req2, Req5, Req6. TC3 covers 2 of these (Req5,6). TC2 covers 1 (Req5). TC4 covers 1 (Req2). → run TC3 second.</li>
                    <li><strong>Round 3:</strong> Still uncovered: Req2. TC4 covers Req2 → run TC4 third.</li>
                    <li><strong>Round 4:</strong> All requirements now covered. TC2 adds no new coverage → run TC2 last.</li>
                  </ol>
                  <p>Execution order: TC1 → TC3 → TC4 → <strong>TC2</strong></p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#33: How can testing quadrants be beneficial for testing?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) They help in test planning by dividing the process into four phases corresponding to component, integration, system, and acceptance testing</div>
              <div>B) They help assess high-level coverage (e.g., requirements) based on low-level coverage (e.g., code)</div>
              <div>C) They help non-technical stakeholders understand the different test types and how some are more relevant to certain levels</div>
              <div>D) They help agile teams develop a communication strategy by classifying people into four psychological types</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Why A is wrong:</em> Testing quadrants don't correspond to test levels.</p>
                  <p><em>Why B is wrong:</em> They don't relate different levels of coverage to each other.</p>
                  <p><em>Why C is correct:</em> The quadrants classify test types by (a) whether they support the team or critique the product, and (b) whether they're business-facing or technology-facing. This helps non-technical stakeholders understand what testing is being done and why.</p>
                  <p><em>Why D is wrong:</em> Testing quadrants are not a psychological model — they're about test types and their purpose.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 5.2 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #b91c1c; margin-top: 2.5rem;">
        <h3 style="color: #b91c1c;">5.2 Risk Management — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Risk level formula:</strong> Risk Level = Likelihood × Impact. Rearranged: Impact = Risk Level / Likelihood.</li>
          <li><strong>Product risks</strong> = risks related to a product characteristic (what the product does/is). Examples: poor architecture, slow response time, security vulnerabilities, data loss.</li>
          <li><strong>Project risks</strong> = risks related to managing the project (organizational, technical, people issues). Examples: scope creep, cost-cutting, poor tool support, staff turnover.</li>
          <li><strong>Trap:</strong> "Scope creep" and "cost-cutting" are project management problems → project risks. "Response time too slow" and "poor architecture" are things wrong with the product itself → product risks.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>5.2 — Sample Exam D, Questions #34, #35 <span style="font-weight:normal; font-size:0.85em;">(FL-5.2.1/2, K1/K2)</span></h3>
        <ol>
          <li>
            <strong>Q#34: For a given risk, the risk level is $1,000 and the risk likelihood is 50%. What is the risk impact?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) $500</div>
              <div>B) $2,000</div>
              <div>C) $50,000</div>
              <div>D) $200</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p>Risk Level = Likelihood × Impact</p>
                  <p>Impact = Risk Level / Likelihood = $1,000 / 0.50 = <strong>$2,000</strong></p>
                  <p><em>Trap for A:</em> $500 = $1,000 × 0.5 (multiplying instead of dividing).</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#35: Which TWO are product risks?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Scope creep</div>
              <div>B) Poor architecture</div>
              <div>C) Cost-cutting</div>
              <div>D) Poor tool support</div>
              <div>E) Too long response time</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B and E</strong></p>
                  <ul>
                    <li>A = Project risk (technical issue — requirements growing out of control)</li>
                    <li>B ✓ = Product risk — poor architecture is a characteristic of the product itself</li>
                    <li>C = Project risk (organizational issue — budget management)</li>
                    <li>D = Project risk (technical issue — tooling problems)</li>
                    <li>E ✓ = Product risk — response time is a performance characteristic of the product</li>
                  </ul>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 5.3 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #991b1b; margin-top: 2.5rem;">
        <h3 style="color: #991b1b;">5.3 Test Monitoring, Reporting &amp; Control — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Test reports</strong> include: test progress tracking, summary of tests executed and results, defects found (aggregated counts), planned testing for the next period, coverage metrics.</li>
          <li><strong>Defect reports</strong> are separate documents that describe individual defects in detail — steps to reproduce, environment, severity, expected vs. actual results.</li>
          <li><strong>Key distinction:</strong> "Providing information about each specific defect, such as steps to reproduce it" = purpose of a <em>defect report</em>, NOT a test report.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>5.3 — Sample Exam D, Question #36 <span style="font-weight:normal; font-size:0.85em;">(FL-5.3.2, K2)</span></h3>
        <ol>
          <li>
            <strong>Q#36: Which is NOT a valid purpose for a test report?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Tracking test progress and identifying areas needing further attention</div>
              <div>B) Providing information on tests executed, their results, and defects found</div>
              <div>C) Providing information about each defect, such as the steps to reproduce it</div>
              <div>D) Providing information on testing planned for the next period</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p>A, B, and D are all valid test report purposes. C describes the purpose of a <strong>defect report</strong> — individual defect details like reproduction steps belong in defect reports, not test reports. Test reports aggregate defect information at a summary level.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 5.4 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #7f1d1d; margin-top: 2.5rem;">
        <h3 style="color: #7f1d1d;">5.4 Configuration Management — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Configuration management (CM)</strong> identifies, controls, and tracks all work products (configuration items). Key capability: recreating a previous baseline to reproduce past test results.</li>
          <li><strong>CM vs. Risk Management:</strong> CM tracks what files/components make up a release. Risk management deals with likelihood and impact of risks.</li>
          <li><strong>CM vs. Test Monitoring:</strong> Monitoring tracks test progress. CM tracks versions of work products.</li>
          <li><strong>Classic exam scenario:</strong> "We need the exact set of files from that release to reproduce a bug" = <strong>Configuration Management</strong>.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>5.4 — Sample Exam D, Question #37 <span style="font-weight:normal; font-size:0.85em;">(FL-5.4.1, K2)</span></h3>
        <ol>
          <li>
            <strong>Q#37: A user reported a failure. The support team asked for the software version number, then reassembled all the files that made up that release, allowing the developer to reproduce and fix the defect. What enabled this?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Risk management</div>
              <div>B) Test monitoring and control</div>
              <div>C) Whole team approach</div>
              <div>D) Configuration management</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: D</strong></p>
                  <p>Configuration management records all configuration items at each baseline. Using a version number, the team can revert to that exact baseline and reassemble the exact set of files — precisely what CM is designed for.</p>
                  <p><em>Why A, B, C are wrong:</em> Risk management deals with risks. Test monitoring tracks test progress. The whole team approach is about team collaboration. None of these track file/component versions.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 5.5 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #450a0a; margin-top: 2.5rem;">
        <h3 style="color: #7f1d1d;">5.5 Defect Management — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Good defect reports</strong> include: precise reproduction steps, actual vs. expected results, environment details (OS, browser, version), severity, and — critically — the specific <strong>input data and user context</strong> needed to reproduce the failure.</li>
          <li><strong>Priority vs. Severity:</strong> Severity = how bad the defect is. Priority = how urgently it needs fixing. Adding priority doesn't help reproduce the defect.</li>
          <li><strong>Less is more:</strong> Adding memory dumps and database snapshots after EVERY step overwhelms developers with mostly useless data and slows the fix process.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>5.5 — Sample Exam D, Question #38 <span style="font-weight:normal; font-size:0.85em;">(FL-5.5.1, K3)</span></h3>
        <ol>
          <li>
            <strong>Q#38: Defect report for a Book Lending System — "Unable to Return a Book." The developer cannot reproduce it consistently. Which change is MOST likely to help the developer reproduce the failure quickly?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Adding information about which users and which books the failure affects to the Description section</div>
              <div>B) Filling in the missing Priority field value</div>
              <div>C) Adding memory dumps and database snapshots taken after each step to the Attachments section</div>
              <div>D) Repeating the test case for different environments and writing separate defect reports for each</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>Why A is correct:</em> Specifying which users and which books trigger the failure gives the developer the exact input data needed to reproduce the failure — the most direct aid to reproduction.</p>
                  <p><em>Why B is wrong:</em> Priority tells you how urgently to fix it, not how to reproduce it.</p>
                  <p><em>Why C is wrong:</em> While some attachments are useful, memory dumps after EVERY step create an enormous amount of mostly irrelevant data that actually slows down the diagnosis.</p>
                  <p><em>Why D is wrong:</em> The question is about helping reproduce the failure in the known environment — testing other environments is a separate activity.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

    </div>
  `
};

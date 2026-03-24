export const content = {
  title: "Chapter 2 Exam Questions & Patterns",
  content: `
    <div class="test-content">
      <div class="concept-block intro-box">
        <h3>Exam Strategy &amp; Patterns — Chapter 2</h3>
        <p>Chapter 2 questions test the SDLC, test levels, test types, and when testing applies. Key traps involve confusing test levels with test types, and misidentifying when specific test activities should start. All 6 questions below are from ISTQB Sample Exam Set D.</p>
      </div>

      <!-- SECTION 2.1 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #f97316;">
        <h3 style="color: #f97316;">2.1 Testing in the Context of an SDLC — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Each test level has distinct objectives:</strong> Component, integration, system, and acceptance testing all test different things — overlapping objectives = wasted effort.</li>
          <li><strong>Test-first approaches:</strong> BDD (Behavior-Driven Development), TDD (Test-Driven Development), ATDD (Acceptance Test-Driven Development). These all write tests <em>before</em> code.</li>
          <li><strong>DevOps:</strong> Benefit = stable environments via CI/CD, less manual testing, better visibility of non-functional characteristics. Challenge = setting up and maintaining test automation and CI/CD pipelines.</li>
          <li><strong>Retrospectives:</strong> Held at end of iteration. Purpose = discuss what went well and what to improve. NOT for blaming, NOT for planning the next iteration's technical decisions.</li>
          <li><strong>Timing trap:</strong> Test <em>analysis and design</em> should start during the corresponding development phase. Test <em>implementation</em> starts later. Test <em>execution</em> starts during the test level itself.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>2.1 — Sample Exam D, Questions #9, #10, #11, #12 <span style="font-weight:normal; font-size:0.85em;">(FL-2.1.2/3/4/6, K1/K2)</span></h3>
        <ol>
          <li>
            <strong>Q#9: Which is a good testing practice that applies to ALL software development lifecycles?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Each test level has specific and distinct test objectives</div>
              <div>B) Test implementation and execution for a given test level should start during the corresponding development phase</div>
              <div>C) Testers should start test design as soon as drafts of the relevant work products become available</div>
              <div>D) Every dynamic testing activity has a corresponding static testing activity</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>Why B is wrong:</em> Test analysis and design should start during the development phase — but test <em>implementation</em> starts later (not during), and execution starts during the test level itself.</p>
                  <p><em>Why C is wrong:</em> Test design should be based on an <em>agreed</em> test basis, not early drafts — basing design on drafts wastes effort when requirements change.</p>
                  <p><em>Why D is wrong:</em> Static testing activities (e.g., static analysis) have no obvious dynamic counterpart — the symmetry doesn't hold in the other direction.</p>
                  <p><em>Why A is correct:</em> Distinct test objectives per level is a universal good practice — it avoids duplication and ensures each level tests the right thing.</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#10: Which is an example of a test-first approach to development?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Behavior-Driven Development</div>
              <div>B) Test Level Driven Development</div>
              <div>C) Function-Driven Development</div>
              <div>D) Performance-Driven Development</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p>BDD is a recognized test-first approach where behavior is described in tests before code is written. B, C, and D are not recognized software development approaches.</p>
                  <p><em>Know the set:</em> BDD, TDD, ATDD — all are test-first. Feature-Driven Development (FDD) is NOT test-first.</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#11: Which is MOST likely to be a challenge when implementing DevOps?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Making sure non-functional quality characteristics are not overlooked</div>
              <div>B) Managing continuously changing test environments</div>
              <div>C) The need for more manual testers with suitable experience</div>
              <div>D) Setting up the test automation as part of the delivery pipeline</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: D</strong></p>
                  <p><em>Why A is wrong:</em> DevOps actually <em>increases</em> visibility of non-functional characteristics — it's a benefit, not a challenge.</p>
                  <p><em>Why B is wrong:</em> CI/CD in DevOps creates <em>stable</em> environments — not continuously changing ones.</p>
                  <p><em>Why C is wrong:</em> DevOps reduces the need for manual testing via automation.</p>
                  <p><em>Why D is correct:</em> Establishing, maintaining, and integrating test automation into the delivery pipeline is a real, recognized challenge of DevOps implementation.</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#12: Which BEST describes retrospectives?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) They let team members identify others who didn't fully contribute to quality</div>
              <div>B) They give testers a chance to identify successful activities so these are retained in future improvements</div>
              <div>C) They let agile team members voice concerns about management and customers in a blameless environment</div>
              <div>D) They give agile team members a forum to discuss plans and technical decisions for the next iteration</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p><em>Why A is wrong:</em> Retrospectives promote blameless team bonding — calling out individuals contradicts this.</p>
                  <p><em>Why C is wrong:</em> They're not for complaining about management; they focus on process improvements.</p>
                  <p><em>Why D is wrong:</em> Planning the next iteration's work happens in the iteration <em>planning meeting</em>, not the retrospective.</p>
                  <p><em>Why B is correct:</em> The retrospective reviews what worked (to retain) and what didn't (to improve) — focused on quality and process.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 2.2 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #ea580c; margin-top: 2.5rem;">
        <h3 style="color: #ea580c;">2.2 Test Levels and Types — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Functional testing:</strong> Tests <em>what</em> the system does — correctness, completeness of behavior. Example: "does the sort put items in ascending order?"</li>
          <li><strong>Non-functional testing:</strong> Tests <em>how well</em> the system does it — performance, reliability, maintainability, portability, security.</li>
          <li><strong>Maintainability:</strong> How easily can the system be modified? (modifiability, analyzability, testability)</li>
          <li><strong>Portability:</strong> How easily can the system be moved to a different environment? (adaptability, installability)</li>
          <li><strong>Trap:</strong> "Checking that sorting completes within 1 second" = performance efficiency testing = <strong>non-functional</strong>.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>2.2 — Sample Exam D, Question #13 <span style="font-weight:normal; font-size:0.85em;">(FL-2.2.2, K2)</span></h3>
        <ol>
          <li>
            <strong>Q#13: Which test is MOST likely performed as part of FUNCTIONAL testing?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Checking that the sort function puts elements in ascending order</div>
              <div>B) Checking whether the sort function completes within one second</div>
              <div>C) Checking how easily the sort function can be changed from ascending to descending</div>
              <div>D) Checking that the sort function works correctly after moving from 32-bit to 64-bit architecture</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>A = Functional</em> — "ascending order" is the specified correct behavior (what it does).</p>
                  <p><em>B = Non-functional</em> (performance efficiency — how fast it does it).</p>
                  <p><em>C = Non-functional</em> (maintainability / modifiability — how easily it can be changed).</p>
                  <p><em>D = Non-functional</em> (portability / adaptability — how well it moves between environments).</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 2.3 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #c2410c; margin-top: 2.5rem;">
        <h3 style="color: #c2410c;">2.3 Maintenance Testing — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Three triggers for maintenance testing:</strong>
            <ol>
              <li>System <strong>modification</strong> (fix, enhancement, urgent patch)</li>
              <li>Change to the <strong>operational environment</strong> (new OS, new hardware, new external system)</li>
              <li>System <strong>retirement</strong> (data migration, archiving)</li>
            </ol>
          </li>
          <li><strong>Maintainability testing ≠ Maintenance testing:</strong> Maintainability testing checks how easy the system is to modify. Maintenance testing is triggered when the system IS modified.</li>
          <li><strong>Trap:</strong> Adding a new feature in an Agile sprint → this is normal development + regression testing, NOT maintenance testing.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>2.3 — Sample Exam D, Question #14 <span style="font-weight:normal; font-size:0.85em;">(FL-2.3.1, K2)</span></h3>
        <ol>
          <li>
            <strong>Q#14: Which is MOST likely a trigger for MAINTENANCE TESTING of a currency exchange system?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Developers reported that changing the system was difficult, so testers decided to verify this</div>
              <div>B) The refund option was removed because it didn't always repay the correct amount</div>
              <div>C) The agile team started developing a user story adding a new customer loyalty feature</div>
              <div>D) The language support option was used to enable English and local language currency transactions</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p><em>Why A is wrong:</em> Testing "how easy it is to change the system" is <strong>maintainability testing</strong> (a non-functional test type), not maintenance testing.</p>
                  <p><em>Why B is correct:</em> Removing the refund option is a <strong>system modification</strong> (a fix) — one of the three recognized triggers for maintenance testing.</p>
                  <p><em>Why C is wrong:</em> Developing a new user story is normal iterative development + regression testing — not maintenance testing.</p>
                  <p><em>Why D is wrong:</em> Reconfiguration for language support is not a system modification, an environmental change, or retirement — none of the three triggers apply.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

    </div>
  `
};

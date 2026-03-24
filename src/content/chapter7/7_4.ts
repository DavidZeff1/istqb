export const content = {
  title: "Chapter 4 Exam Questions & Patterns",
  content: `
    <div class="test-content">
      <div class="concept-block intro-box">
        <h3>Exam Strategy &amp; Patterns — Chapter 4</h3>
        <p>Chapter 4 is the heaviest chapter on the exam — 11 questions covering black-box techniques (EP, BVA, Decision Tables, State Transitions), white-box techniques (statement/branch coverage), and experience-based techniques (error guessing, exploratory testing, user stories). Expect scenario-based K3 questions requiring you to apply techniques to real data. All questions are from ISTQB Sample Exam Set D.</p>
      </div>

      <!-- SECTION 4.1 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #7c3aed;">
        <h3 style="color: #7c3aed;">4.1 Test Technique Selection — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Black-box:</strong> Based on the specification/behavior — no internal code knowledge needed. Use when you have requirements, rules, or acceptance criteria.</li>
          <li><strong>White-box:</strong> Based on internal structure/code. Useful when specs are vague or missing — you test what's actually there.</li>
          <li><strong>Experience-based:</strong> Based on tester knowledge and intuition (error guessing, exploratory). Useful as a complement, not the most systematic choice when precise rules exist.</li>
          <li><strong>Risk-based is NOT a test technique</strong> — it's an approach to prioritization, not a test design technique.</li>
          <li><strong>Key rule:</strong> When a question describes specific business rules with thresholds (like "&gt;$100"), this signals EP boundary conditions → <strong>black-box</strong> is most appropriate.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>4.1 — Sample Exam D, Question #19 <span style="font-weight:normal; font-size:0.85em;">(FL-4.1.1, K2)</span></h3>
        <ol>
          <li>
            <strong>Q#19: Given the requirement: "If total purchases exceed $100, the customer gets a 5% discount; otherwise no discount." Which techniques are MOST helpful for designing test cases?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) White-box test techniques</div>
              <div>B) Black-box test techniques</div>
              <div>C) Experience-based test techniques</div>
              <div>D) Risk-based test techniques</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p><em>Why A is wrong:</em> The requirement says nothing about internal code structure — white-box would test the implementation, not the specified behavior.</p>
                  <p><em>Why C is wrong:</em> Experience-based techniques work but are less systematic. The phrase "exceeds $100" explicitly signals equivalence partition boundaries (≤$100 vs. &gt;$100) — BVA and EP are far more suitable.</p>
                  <p><em>Why D is wrong:</em> Risk-based is not a test technique category.</p>
                  <p><em>Why B is correct:</em> The requirement specifies desired behavior from the outside. Techniques like Boundary Value Analysis ($100, $100.01) and Equivalence Partitioning (with/without discount) are ideal.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 4.2 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #6d28d9; margin-top: 2.5rem;">
        <h3 style="color: #6d28d9;">4.2 Black-Box Test Techniques — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Equivalence Partitioning (EP):</strong> Divide inputs into groups where the software behaves the same. One test per partition gives EP coverage. You MUST cover all valid partitions for "full valid EP coverage."</li>
          <li><strong>2-Value BVA:</strong> Test the two values on either side of each boundary. For partition [0,2]: boundaries are the last value of the lower partition (-1) and first valid value (0), and the last valid value (2) and first value of next partition (3).</li>
          <li><strong>Decision Tables:</strong> Each column = one rule. Coverage = (test cases / total columns). Adding a test case only increases coverage if it covers a NEW (uncovered) column/rule.</li>
          <li><strong>State Transition:</strong> Valid transitions coverage = percentage of defined transitions exercised. A test sequence is infeasible if it tries to take a transition that doesn't exist (e.g., triggering an event from a state where it has no defined outcome).</li>
          <li><strong>BVA trap:</strong> Options like {-1, 3} only cover 2 of 4 boundary values — you need ALL boundaries for full coverage.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>4.2 — Sample Exam D, Questions #20–#23 <span style="font-weight:normal; font-size:0.85em;">(FL-4.2.1/2/3/4, K3)</span></h3>
        <ol>
          <li>
            <strong>Q#20: Cinema ticket discount system. D = CY − BY. Rules: D&lt;0 → error; 0≤D&lt;18 → student discount; 18≤D&lt;65 → no discount; D≥65 → pensioner discount. Existing tests: BY=1990/CY=2020 (no discount) and BY=2030/CY=2029 (error). Which TWO test sets achieve full valid EP coverage?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) BY=2001, CY=2065</div>
              <div>B) BY=1900, CY=1965</div>
              <div>C) BY=1965, CY=1900</div>
              <div>D) BY=2011, CY=2029</div>
              <div>E) BY=2000, CY=2000</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B and E</strong></p>
                  <p><em>Four valid partitions:</em> error (D&lt;0), student (0≤D&lt;18), no discount (18≤D&lt;65), pensioner (D≥65).</p>
                  <p>Already covered: no discount (D=30) and error (D=-1).</p>
                  <p>Missing: <strong>student</strong> (0≤D&lt;18) and <strong>pensioner</strong> (D≥65).</p>
                  <ul>
                    <li>A: D=2065−2001=64 → no discount (already covered) ✗</li>
                    <li>B: D=1965−1900=65 → <strong>pensioner</strong> ✓</li>
                    <li>C: D=1900−1965=−65 → error (already covered) ✗</li>
                    <li>D: D=2029−2011=18 → no discount (already covered) ✗</li>
                    <li>E: D=2000−2000=0 → <strong>student</strong> ✓</li>
                  </ul>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#21: Temperature control system. Input in full degrees Celsius. "temperature OK" if 0–2°C inclusive; "temperature too low" below 0; "temperature too high" above 2. Using 2-value BVA, which set provides HIGHEST coverage?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) –1, 3</div>
              <div>B) 0, 2</div>
              <div>C) –1, 0, 2, 3</div>
              <div>D) –2, 0, 2, 4</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Three equivalence partitions:</em> {...,−2,−1} | {0,1,2} | {3,4,...}</p>
                  <p><em>2-value BVA requires the last value of each partition AND the first value of the next partition at EVERY boundary:</em></p>
                  <ul>
                    <li>Boundary between "too low" and "OK": <strong>−1</strong> and <strong>0</strong></li>
                    <li>Boundary between "OK" and "too high": <strong>2</strong> and <strong>3</strong></li>
                  </ul>
                  <p>Full 2-value BVA set = {-1, 0, 2, 3} → option C. Option A only has 2 of the 4 needed values. Option D has the wrong boundary values (−2 and 4 are not the boundary values).</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#22: Decision table below. TC1 covers R2, TC2 covers R3, TC3 covers R7, TC4 covers R6. Which new test case INCREASES decision table coverage?</strong>
            <div style="margin-top: 0.75rem; overflow-x: auto;">
              <table style="border-collapse: collapse; font-size: 0.85em; width: 100%;">
                <thead>
                  <tr style="background: #f3f4f6;">
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;"></th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">R1</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">R2</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">R3</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">R4</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">R5</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">R6</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">R7</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>C1: Age</strong></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">0–18</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">19–65</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">19–65</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">&gt;65</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">0–18</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">19–65</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">&gt;65</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>C2: Experience</strong></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">—</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">0–4</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">&gt;4</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">—</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">—</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">—</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">—</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>C3: Registered?</strong></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">NO</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">NO</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">NO</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">NO</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">YES</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">YES</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">YES</td>
                  </tr>
                  <tr style="background: #f9fafb;">
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>Category</strong></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">A</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">A</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">B</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">B</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">B</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">D</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">C</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) 66-year-old, unregistered, no experience → category B</div>
              <div>B) 55-year-old, unregistered, 2 years experience → category A</div>
              <div>C) 19-year-old, registered, 5 years experience → category D</div>
              <div>D) No additional test case can increase the coverage</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>Currently covered rules:</em> R2 (TC1), R3 (TC2), R7 (TC3), R6 (TC4). <strong>Uncovered: R1, R4, R5.</strong></p>
                  <ul>
                    <li>A: 66-year-old, unregistered, no experience → C1=&gt;65, C2=—, C3=NO → matches <strong>R4</strong> (not yet covered) ✓</li>
                    <li>B: 55-year-old, unregistered, 2 years → C1=19–65, C2=0–4, C3=NO → <strong>R2</strong> (already covered by TC1) ✗</li>
                    <li>C: 19-year-old, registered, 5 years → C1=19–65, C3=YES → <strong>R6</strong> (already covered by TC4) ✗</li>
                    <li>D: Wrong — R1, R4, R5 are still uncovered.</li>
                  </ul>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#23: State transition table — hotel room reservation system. Which event sequence (starting from S1: Requesting) achieves HIGHEST valid transitions coverage?</strong>
            <div style="margin-top: 0.75rem; overflow-x: auto;">
              <table style="border-collapse: collapse; font-size: 0.85em; width: 100%;">
                <thead>
                  <tr style="background: #f3f4f6;">
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">State</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Available</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">NotAvailable</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">ChangeRoom</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Cancel</th>
                    <th style="border: 1px solid #d1d5db; padding: 4px 8px;">Pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>S1: Requesting</strong></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">→S2</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">→S3</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>S2: Confirmed</strong></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">→S1</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">→S4</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">→S4</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>S3: Waiting list</strong></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">→S2</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;">→S4</td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"><strong>S4: End</strong></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                    <td style="border: 1px solid #d1d5db; padding: 4px 8px;"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) NotAvailable, Available, ChangeRoom, NotAvailable, Cancel</div>
              <div>B) Available, ChangeRoom, NotAvailable, Available, Pay</div>
              <div>C) Available, ChangeRoom, Available, ChangeRoom, NotAvailable</div>
              <div>D) NotAvailable, Cancel, ChangeRoom, Available, Pay</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B — covers 5 of 7 valid transitions</strong></p>
                  <p><em>7 valid transitions total:</em> S1→S2, S1→S3, S2→S1, S2→S4(Cancel), S2→S4(Pay), S3→S2, S3→S4</p>
                  <p><em>Tracing B (Available, ChangeRoom, NotAvailable, Available, Pay):</em></p>
                  <ul>
                    <li>Start S1 + Available → S2 (S1→S2 ✓)</li>
                    <li>S2 + ChangeRoom → S1 (S2→S1 ✓)</li>
                    <li>S1 + NotAvailable → S3 (S1→S3 ✓)</li>
                    <li>S3 + Available → S2 (S3→S2 ✓)</li>
                    <li>S2 + Pay → S4 (S2→S4 via Pay ✓)</li>
                  </ul>
                  <p>= 5 unique transitions out of 7. Option A covers 4. Option C covers 3. Option D is infeasible (after Cancel, ends in S4 — no further transitions possible).</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 4.3 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #5b21b6; margin-top: 2.5rem;">
        <h3 style="color: #5b21b6;">4.3 White-Box Test Techniques — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Statement Coverage:</strong> Each executable statement runs at least once. 100% statement coverage does NOT guarantee finding all bugs or 100% branch coverage.</li>
          <li><strong>Branch Coverage:</strong> Each decision outcome (true/false) is tested. 100% branch coverage implies 100% statement coverage — but NOT vice versa.</li>
          <li><strong>Key insight on white-box:</strong> White-box tests the actual implementation, so it can find extra features accidentally coded that aren't in the spec — something black-box testing can't do since black-box only tests what the spec says should exist.</li>
          <li><strong>White-box weakness:</strong> If a requirement was forgotten and never coded, white-box won't detect it (there's no code to execute for it).</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>4.3 — Sample Exam D, Questions #24, #25 <span style="font-weight:normal; font-size:0.85em;">(FL-4.3.1/3, K2)</span></h3>
        <ol>
          <li>
            <strong>Q#24: Test suite S achieves 100% statement coverage for program P. It has 3 test cases, each achieving 50% coverage. Which statement is CORRECT?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Executing S will cause all possible failures in P</div>
              <div>B) S achieves 100% branch coverage for P</div>
              <div>C) Every executable statement in P containing a defect has been run at least once</div>
              <div>D) After removing one test case, the remaining two will still achieve 100% statement coverage</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Why A is wrong:</em> Running a defective statement doesn't always produce a failure (e.g., x=y/z only fails when z=0).</p>
                  <p><em>Why B is wrong:</em> Statement coverage does not guarantee branch coverage. Example: <code>IF (x=0) THEN A; ENDIF</code> — testing x=0 hits all statements (100%) but misses the false branch.</p>
                  <p><em>Why C is correct:</em> By definition, 100% statement coverage means every executable statement executed at least once — including any defective ones.</p>
                  <p><em>Why D is wrong:</em> The removed test case may cover statements not covered by the other two — you can't assume this without checking the overlap.</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#25: Why does white-box testing facilitate defect detection even when the software specification is vague, outdated, or incomplete?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Test cases are designed based on the structure of the test object rather than the specification</div>
              <div>B) Coverage can be well-defined and easily measured for each white-box technique</div>
              <div>C) White-box techniques are very well designed to detect omissions in requirements</div>
              <div>D) White-box techniques can be used in both static and dynamic testing</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>The core reason:</em> White-box ignores the spec entirely — it tests what the <em>code actually does</em>. So even if the spec is missing, outdated, or wrong, white-box can still find accidental extra features coded into the system that shouldn't be there.</p>
                  <p><em>Why B is wrong:</em> Measurable coverage is a benefit, but it doesn't explain why specs being vague doesn't matter.</p>
                  <p><em>Why C is wrong:</em> This is actually a white-box <em>weakness</em> — it cannot find defects of omission (things not coded at all).</p>
                  <p><em>Why D is wrong:</em> Being usable for both static and dynamic testing is true but unrelated to the question about spec quality.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 4.4 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #4c1d95; margin-top: 2.5rem;">
        <h3 style="color: #4c1d95;">4.4 Experience-Based Techniques — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Error Guessing:</strong> Testers anticipate errors (human mistakes), defects (code faults), and failures (bad outputs) based on experience. They CANNOT anticipate root causes — root causes are process/organizational issues outside the tester's view.</li>
          <li><strong>Exploratory Testing:</strong> Test design, execution, and evaluation happen simultaneously. The tester learns about the system while testing. Test cases can be created DURING the session — not all pre-designed. Any test technique can be used during exploratory testing.</li>
          <li><strong>Exploratory testing myth:</strong> Results are NOT reliable defect prediction models — they depend heavily on tester experience and cannot reliably predict how many defects remain.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>4.4 — Sample Exam D, Questions #26, #27 <span style="font-weight:normal; font-size:0.85em;">(FL-4.4.1/2, K2)</span></h3>
        <ol>
          <li>
            <strong>Q#26: Which of the following is NOT anticipated by the tester when applying error guessing?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) The developer misunderstood the formula in the user story for calculating interest</div>
              <div>B) The developer wrote "FA = A*(1+IR^N)" instead of "FA = A*(1+IR)^N" in the source code</div>
              <div>C) The developer missed the seminar on new compound interest rate legislation</div>
              <div>D) The accuracy of the interest calculated by the system is not precise enough</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Error guessing anticipates:</em></p>
                  <ul>
                    <li>A = an Error (developer misunderstood) ✓ anticipatable</li>
                    <li>B = a Defect (wrong formula in code) ✓ anticipatable</li>
                    <li>D = a Failure (inaccurate output) ✓ anticipatable</li>
                  </ul>
                  <p><em>C = a Root Cause</em> — "missed a seminar" is an organizational/process issue that led to knowledge gaps. This is not something a tester can anticipate because it's outside their view of the system.</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#27: Which statement about exploratory testing is TRUE?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Test cases are designed before the exploratory testing session starts</div>
              <div>B) The tester can perform test execution, but cannot perform test design</div>
              <div>C) Exploratory testing results are good predictors of the number of remaining defects</div>
              <div>D) During exploratory testing the tester may use black-box test techniques</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: D</strong></p>
                  <p><em>Why A is wrong:</em> Test cases are created <em>during</em> the session — that's a core characteristic of exploratory testing.</p>
                  <p><em>Why B is wrong:</em> Design, execution, and evaluation happen simultaneously — the tester DOES perform design.</p>
                  <p><em>Why C is wrong:</em> Results are highly experience-dependent and are NOT reliable quantitative defect prediction models.</p>
                  <p><em>Why D is correct:</em> During exploratory testing, the tester can apply ANY techniques they find useful — including black-box, white-box, or experience-based.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 4.5 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #7e22ce; margin-top: 2.5rem;">
        <h3 style="color: #7e22ce;">4.5 Collaboration-Based Test Approaches — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>The 3 Cs of User Stories:</strong> Card (the written story), Conversation (discussion of how it will be used → shared understanding), Confirmation (acceptance criteria).</li>
          <li><strong>Conversation</strong> is what gives the team a shared vision of what to deliver — NOT planning poker (effort estimation), NOT reviews (defect detection), NOT iteration planning (work scheduling).</li>
          <li><strong>Acceptance criteria → test cases:</strong> A good test case for a user story should directly trace to one or more acceptance criteria. Beware of test cases that test things not mentioned in the story's acceptance criteria.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>4.5 — Sample Exam D, Questions #28, #29 <span style="font-weight:normal; font-size:0.85em;">(FL-4.5.1/3, K2/K3)</span></h3>
        <ol>
          <li>
            <strong>Q#28: Which collaborative user story writing practice enables the team to achieve collective understanding of what needs to be delivered?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Planning poker — consensus on effort for implementing a user story</div>
              <div>B) Reviews — to detect inconsistencies and contradictions</div>
              <div>C) Iteration planning — to prioritize user stories by business value</div>
              <div>D) Conversation — so team members can understand how the software will be used</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: D</strong></p>
                  <p>The "Conversation" in the 3 Cs is specifically the activity through which the team discusses usage, agrees on acceptance criteria, and builds shared understanding of what to deliver. A, B, and C serve other purposes (estimation, defect detection, scheduling respectively).</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#29: User story — "As a customer, I want to filter search results by price range." Acceptance criteria: (1) works for app v3.0+, (2) allows setting min/max price, (3) results update dynamically as filter adjusts. Precondition: Product A = $100, Product B = $110. Which is the BEST test case?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Set filter $90–$100 → expect A only. Then set max to $110 → expect both A and B</div>
              <div>B) Check default min/max are $100 and $110. Add Product C at $120 and refresh → default max changes to $120</div>
              <div>C) Set filter $90–$115 → both products. Then change currency USD→EUR → filter range converts correctly</div>
              <div>D) Open in Edge, Chrome, Opera. Set filter $90–$110. Expect both products and same layout in all browsers</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: A</strong></p>
                  <p><em>Tracing each test to acceptance criteria:</em></p>
                  <ul>
                    <li>A ✓ — Sets price range (AC2) and verifies results update dynamically when range changes (AC3).</li>
                    <li>B ✗ — Tests whether the system auto-detects default prices. This isn't mentioned in any acceptance criterion.</li>
                    <li>C ✗ — Currency exchange feature is not discussed in this user story at all.</li>
                    <li>D ✗ — Browser compatibility is not in any acceptance criterion of this story.</li>
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

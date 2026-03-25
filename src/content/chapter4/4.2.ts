export const content = {
  title: "4.2 Black-Box Test Techniques",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — A Flight Booking System</h3>
        <p>You're testing a <strong>flight booking platform</strong> (think Booking.com / Skyscanner). Users search flights, apply filters, enter passenger details, choose seats, and pay. Each black-box technique shines in a different part of this system:</p>
        <ul>
          <li><strong>Equivalence Partitioning & BVA</strong> → Passenger age field, baggage weight limits</li>
          <li><strong>Decision Table Testing</strong> → Discount/upgrade rules based on loyalty tier + fare class + route</li>
          <li><strong>State Transition Testing</strong> → Booking lifecycle: Searching → Selected → Reserved → Paid → Checked-in → Boarded → Completed (or Cancelled)</li>
        </ul>
      </section>

      <!-- ==================== EP ==================== -->
      <section class="concept-block">
        <h3>4.2.1 Equivalence Partitioning (EP)</h3>
        <p>EP divides data into <strong>partitions</strong> where all values in a partition are expected to be processed <strong>the same way</strong>. If one test per partition finds the bug, any other value in that partition would too — so <strong>one test per partition is sufficient</strong>.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Real Example — Passenger Age Field</h4>
          <p>The booking system classifies passengers by age:</p>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Partition</th>
                <th style="text-align:left; padding:0.4rem;">Type</th>
                <th style="text-align:left; padding:0.4rem;">Values</th>
                <th style="text-align:left; padding:0.4rem;">System Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">P1</td><td><strong>Invalid</strong></td><td>age &lt; 0</td><td>Reject — "Invalid age"</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">P2</td><td>Valid</td><td>0–1</td><td>Infant fare (no seat)</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">P3</td><td>Valid</td><td>2–11</td><td>Child fare (own seat, escort required)</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">P4</td><td>Valid</td><td>12–64</td><td>Adult fare</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">P5</td><td>Valid</td><td>65–120</td><td>Senior discount applied</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;">P6</td><td><strong>Invalid</strong></td><td>age &gt; 120</td><td>Reject — "Invalid age"</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:0.5rem;">6 partitions → minimum <strong>6 test cases</strong> for 100% EP coverage. You'd pick one representative from each: e.g., -5, 1, 7, 30, 70, 150.</p>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Key Rules</h4>
          <ul>
            <li>Partitions must <strong>not overlap</strong> and must be <strong>non-empty sets</strong></li>
            <li>Can be identified for <strong>any data element</strong>: inputs, outputs, config items, internal values, time-related values, interface parameters</li>
            <li>May be continuous or discrete, ordered or unordered, finite or infinite</li>
          </ul>
        </div>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Valid Partitions</h4>
            <p>Values the system <strong>should process</strong> normally. Example: age 30 → Adult fare applied.</p>
          </div>
          <div class="grid-item">
            <h4>Invalid Partitions</h4>
            <p>Values the system should <strong>reject or ignore</strong>. Example: age -5 → "Invalid age" error shown.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Coverage Formula</h4>
          <p><strong>EP Coverage = (Partitions exercised ÷ Total partitions) × 100%</strong></p>
          <p>When you have <strong>multiple input parameters</strong> (age + baggage weight + cabin class), the simplest criterion is <strong>Each Choice coverage</strong> — exercise each partition from each parameter at least once. Each Choice does <strong>NOT</strong> consider combinations.</p>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam trap:</strong> "Each Choice coverage tests all combinations of partitions" — <strong>FALSE</strong>. It only ensures each partition is covered at least once, without regard to how they combine.</p>
        </div>
      </section>

      <!-- ==================== BVA ==================== -->
      <section class="concept-block">
        <h3>4.2.2 Boundary Value Analysis (BVA)</h3>
        <p>BVA exercises the <strong>boundaries of equivalence partitions</strong>. It only works on <strong>ordered partitions</strong>. Why? Because developers make the most mistakes at boundaries — off-by-one errors, using <code>&lt;</code> instead of <code>&lt;=</code>, etc.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Real Example — Checked Baggage Weight (max 23 kg per bag)</h4>
          <p>Spec says: Bags 0–23 kg = standard fee. Over 23 kg = overweight surcharge.</p>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Boundary</th>
                <th style="text-align:left; padding:0.4rem;">2-Value BVA Tests</th>
                <th style="text-align:left; padding:0.4rem;">3-Value BVA Tests</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">Lower boundary (0 kg)</td>
                <td>0, -1</td>
                <td>-1, 0, 1</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;">Upper boundary (23 kg)</td>
                <td>23, 24</td>
                <td>22, 23, 24</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:0.5rem;"><strong>2-value BVA:</strong> 4 tests total. <strong>3-value BVA:</strong> 6 tests total.</p>
        </div>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>2-Value BVA</h4>
            <p>For each boundary → <strong>2 coverage items</strong>:</p>
            <ul>
              <li>The boundary value itself</li>
              <li>Its closest neighbor in the <strong>adjacent partition</strong></li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>3-Value BVA (More Rigorous)</h4>
            <p>For each boundary → <strong>3 coverage items</strong>:</p>
            <ul>
              <li>The boundary value itself</li>
              <li><strong>Both</strong> neighbors (one from each side)</li>
            </ul>
          </div>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Why 3-Value BVA Catches More Bugs</h4>
          <p><strong>Scenario:</strong> A developer codes <code>if (weight == 23)</code> instead of <code>if (weight &lt;= 23)</code>.</p>
          <ul>
            <li><strong>2-Value BVA</strong> tests 23 and 24 → 23 passes (matches ==), 24 fails as expected → <strong>bug NOT detected</strong></li>
            <li><strong>3-Value BVA</strong> also tests 22 → 22 should get standard fee but now triggers overweight branch → <strong>bug DETECTED</strong></li>
          </ul>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam trap:</strong> "BVA can be applied to any partition" — <strong>FALSE</strong>. BVA only works on <strong>ordered</strong> partitions. You can't do BVA on a partition like {red, green, blue} because there's no ordering.</p>
        </div>
      </section>

      <!-- ==================== DECISION TABLE ==================== -->
      <section class="concept-block">
        <h3>4.2.3 Decision Table Testing</h3>
        <p>Decision tables handle <strong>complex business rules</strong> where combinations of conditions produce different outcomes. Perfect for the booking platform's <strong>discount engine</strong>.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Real Example — Upgrade/Discount Rules</h4>
          <p>Business rules: "Gold members get free upgrade on domestic flights. Silver members get 10% discount on international flights. All members booking round-trip get 5% off."</p>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem; font-size:0.9em;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;"></th>
                <th style="padding:0.4rem;">R1</th><th style="padding:0.4rem;">R2</th><th style="padding:0.4rem;">R3</th><th style="padding:0.4rem;">R4</th><th style="padding:0.4rem;">R5</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Gold member?</strong></td>
                <td style="text-align:center;">T</td><td style="text-align:center;">T</td><td style="text-align:center;">F</td><td style="text-align:center;">F</td><td style="text-align:center;">F</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Domestic flight?</strong></td>
                <td style="text-align:center;">T</td><td style="text-align:center;">F</td><td style="text-align:center;">–</td><td style="text-align:center;">–</td><td style="text-align:center;">–</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Silver member?</strong></td>
                <td style="text-align:center;">N/A</td><td style="text-align:center;">N/A</td><td style="text-align:center;">T</td><td style="text-align:center;">T</td><td style="text-align:center;">F</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Round-trip?</strong></td>
                <td style="text-align:center;">–</td><td style="text-align:center;">–</td><td style="text-align:center;">T</td><td style="text-align:center;">F</td><td style="text-align:center;">T</td>
              </tr>
              <tr style="border-top: 2px solid rgba(255,255,255,0.2);">
                <td style="padding:0.4rem;"><strong>Free upgrade</strong></td>
                <td style="text-align:center;">X</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>10% discount</strong></td>
                <td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;"></td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>5% round-trip discount</strong></td>
                <td style="text-align:center;">X</td><td style="text-align:center;"></td><td style="text-align:center;">X</td><td style="text-align:center;"></td><td style="text-align:center;">X</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Notation Cheat Sheet — "TF–NAX"</h4>
          <table style="width:100%; border-collapse:collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem; width:60px;"><strong>T</strong></td><td>Condition is true (satisfied)</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>F</strong></td><td>Condition is false (not satisfied)</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>–</strong></td><td>Condition <strong>irrelevant</strong> to the outcome</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>N/A</strong></td><td>Condition is <strong>infeasible</strong> for this rule (e.g., can't be both Gold AND Silver)</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>X</strong></td><td>Action <strong>should occur</strong></td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>blank</strong></td><td>Action should <strong>not</strong> occur</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Limited-Entry Tables</h4>
            <p>All values are <strong>Boolean</strong> (T/F). Simple but can grow large.</p>
          </div>
          <div class="grid-item">
            <h4>Extended-Entry Tables</h4>
            <p>Conditions can have <strong>multiple values</strong> (ranges, partitions). More compact.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Coverage & Table Management</h4>
          <p><strong>Coverage = (Exercised feasible columns ÷ Total feasible columns) × 100%</strong></p>
          <ul>
            <li><strong>Full table:</strong> Every combination → grows <strong>exponentially</strong> (n conditions = 2ⁿ rules)</li>
            <li><strong>Simplified:</strong> Remove infeasible combinations (e.g., can't be Gold AND Silver)</li>
            <li><strong>Minimized:</strong> Merge columns where a condition doesn't affect the outcome (the "–" entries)</li>
          </ul>
          <p><strong>Strength:</strong> Systematically finds gaps & contradictions in business rules.</p>
        </div>
      </section>

      <!-- ==================== STATE TRANSITION ==================== -->
      <section class="concept-block">
        <h3>4.2.4 State Transition Testing</h3>
        <p>Models the system's <strong>states</strong> and the <strong>transitions</strong> between them, triggered by events. Perfect for the booking lifecycle.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Real Example — Booking Lifecycle</h4>
          <p>States: <strong>Searching → Selected → Reserved → Paid → Checked-in → Boarded → Completed</strong> (or <strong>Cancelled</strong> from several states).</p>
          <p>Transition syntax: <strong>"event [guard condition] / action"</strong></p>
          <ul>
            <li><code>select flight [seats available] / hold seat for 15 min</code></li>
            <li><code>payment received [amount correct] / issue e-ticket</code></li>
            <li><code>cancel [> 24h before departure] / refund 100%</code></li>
            <li><code>cancel [≤ 24h before departure] / refund 50%</code></li>
          </ul>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>State Table</h4>
          <p>A state table is equivalent to a state diagram but reveals <strong>invalid transitions</strong> explicitly (empty cells).</p>
          <table style="width:100%; border-collapse:collapse; font-size:0.9em;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Current State</th>
                <th style="padding:0.4rem;">Select Flight</th>
                <th style="padding:0.4rem;">Pay</th>
                <th style="padding:0.4rem;">Check-in</th>
                <th style="padding:0.4rem;">Cancel</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">Searching</td><td style="text-align:center;">→ Selected</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">Selected</td><td style="text-align:center;">—</td><td style="text-align:center;">→ Paid</td><td style="text-align:center;">—</td><td style="text-align:center;">→ Cancelled</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">Paid</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">→ Checked-in</td><td style="text-align:center;">→ Cancelled</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;">Checked-in</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">→ Cancelled</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top: 0.5rem;">The "—" cells are <strong>invalid transitions</strong> — you should test that the system properly <strong>rejects</strong> them (e.g., can't check-in from "Searching").</p>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Three Coverage Criteria (weakest → strongest)</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Criterion</th>
                <th style="text-align:left; padding:0.4rem;">Coverage Items</th>
                <th style="text-align:left; padding:0.4rem;">Booking Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>1. All States</strong> (weakest)</td>
                <td>Every state is visited</td>
                <td>Visit Searching, Selected, Paid, Checked-in, Cancelled</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>2. Valid Transitions</strong> (0-switch, most used)</td>
                <td>Every valid transition is exercised</td>
                <td>Searching→Selected, Selected→Paid, Paid→Checked-in, Paid→Cancelled, etc.</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>3. All Transitions</strong> (strongest)</td>
                <td>Every valid AND invalid transition</td>
                <td>Also attempt: Searching→Cancel (should fail), Checked-in→Pay (should fail)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <h4>Key Relationships</h4>
          <ul>
            <li>100% All Transitions → <strong>guarantees</strong> 100% Valid Transitions → <strong>guarantees</strong> 100% All States</li>
            <li>All Transitions coverage should be the <strong>minimum for safety-critical software</strong></li>
            <li>Test only <strong>one invalid transition per test case</strong> to avoid <strong>defect masking</strong></li>
          </ul>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the core principle of Equivalence Partitioning?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> EP divides data into partitions where all elements are expected to be processed the same way. If one test case from a partition detects a defect, any other value from that partition should also detect it — so <strong>one test per partition</strong> is sufficient.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the rules for equivalence partitions?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Partitions must <strong>not overlap</strong> and must be <strong>non-empty sets</strong>. They may be continuous or discrete, ordered or unordered, finite or infinite. They can be identified for any data element: inputs, outputs, configuration items, internal values, time-related values, and interface parameters.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A flight booking site has a passenger age field. Ages 0–1 = infant, 2–11 = child, 12–64 = adult, 65–120 = senior. Negative numbers and ages >120 are invalid. How many EP partitions exist, and what's the minimum number of test cases for 100% EP coverage?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 6 partitions: {<0} invalid, {0–1} infant, {2–11} child, {12–64} adult, {65–120} senior, {>120} invalid. Minimum 6 test cases — one value from each partition.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between 2-value and 3-value BVA?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 2-value BVA: for each boundary → test the boundary value + its closest neighbor in the adjacent partition (2 tests). 3-value BVA: test the boundary value + both neighbors from each side (3 tests). 3-value is more rigorous and catches bugs like <code>==</code> instead of <code>&lt;=</code>.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> BVA can only be applied to which type of partitions, and why?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Ordered partitions only</strong>. BVA tests values at the edges of partitions, which requires a meaningful ordering. You can't find "boundaries" in an unordered set like {red, green, blue}.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> In a decision table, what do "T", "F", "–", "N/A", "X", and blank mean?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> T = condition true. F = condition false. – = condition irrelevant to outcome. N/A = condition infeasible for the rule. X = action should occur. Blank = action should not occur.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A discount engine has 4 conditions (each T/F). A full decision table has 2⁴ = 16 rules. After analysis, 3 rules are infeasible and 4 pairs can be merged. How many feasible columns remain in the simplified table? What is coverage if you test 8 of them?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 16 - 3 infeasible = 13 feasible. After merging 4 pairs (reducing 8 columns to 4), that's 13 - 4 = 9 columns. Coverage = 8/9 × 100% = 88.9%. (Note: the exact merged count depends on specifics, but the formula is: exercised feasible columns ÷ total feasible columns.)</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> List the three state transition coverage criteria from weakest to strongest, and state their relationships.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) All States (weakest). 2) Valid Transitions / 0-switch (most common). 3) All Transitions (strongest). Each stronger level guarantees the weaker — 100% All Transitions guarantees 100% Valid Transitions guarantees 100% All States. All Transitions should be the minimum for mission/safety-critical software.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why should only one invalid transition be tested per test case?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> To avoid <strong>defect masking</strong> — where one defect's behavior hides another defect. Testing one invalid transition per test case ensures each failure can be independently observed and attributed.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A tester has a booking system that rejects baggage over 23 kg. They test with 23 kg and 24 kg — both behave correctly. A colleague tests with 22 kg and discovers it's wrongly rejected. Which BVA approach would have caught this, and why did the first tester's approach miss it?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The first tester used <strong>2-value BVA</strong> (boundary value 23 + neighbor 24). The colleague's test of 22 is part of <strong>3-value BVA</strong> (22, 23, 24). The bug is likely <code>if (weight == 23)</code> instead of <code>if (weight &lt;= 23)</code>, which only fails for values below the boundary — caught by 3-value BVA's additional neighbor check.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

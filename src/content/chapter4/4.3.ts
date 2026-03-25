export const content = {
  title: "4.3 White-Box Test Techniques",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Looking Inside the Code</h3>
        <p>You're a developer on an <strong>online payment gateway</strong>. You've written a <code>processPayment()</code> function with multiple <code>if/else</code> branches for card validation, fraud checks, currency conversion, and retry logic. Black-box tests only check "does the payment succeed?" — white-box tests open the code and ask "did we exercise <em>every path</em> through this logic?"</p>
        <p>This section covers two foundational white-box techniques:</p>
        <ol>
          <li><strong>Statement Testing</strong> — did every line execute?</li>
          <li><strong>Branch Testing</strong> — did every decision go both TRUE and FALSE?</li>
        </ol>
      </section>

      <!-- ==================== STATEMENT TESTING ==================== -->
      <section class="concept-block">
        <h3>4.3.1 Statement Testing and Statement Coverage</h3>
        <p>Coverage items = <strong>executable statements</strong>. Design test cases to hit every line of code at least once.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Real Example — Payment Processing</h4>
<pre style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 6px; overflow-x: auto; font-size: 0.85em;">
function processPayment(amount, card) {
  let fee = 0;                         // Line 1
  if (card.type === "credit") {        // Line 2
    fee = amount * 0.029;              // Line 3  ← only runs for credit
  }
  if (amount > 10000) {                // Line 4
    requireManualReview(amount);       // Line 5  ← only runs for large amounts
  }
  return chargeCard(amount + fee);     // Line 6
}
</pre>
          <p><strong>Test Case 1:</strong> credit card, $15,000 → executes lines 1, 2, 3, 4, 5, 6 → <strong>100% statement coverage in 1 test</strong></p>
          <p>But wait — we never tested what happens when card is NOT credit, or amount ≤ 10,000. Statement coverage doesn't catch that.</p>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Coverage Formula</h4>
          <p><strong>Statement Coverage = (Statements exercised ÷ Total executable statements) × 100%</strong></p>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <h4>⚠️ Limitations</h4>
          <ul>
            <li>Exercising a statement won't detect <strong>data-dependent defects</strong> (e.g. division by zero only when denominator = 0)</li>
            <li>100% statement coverage does <strong>NOT</strong> mean all decision outcomes are tested — it may skip the false branches entirely</li>
          </ul>
        </div>
      </section>

      <!-- ==================== BRANCH TESTING ==================== -->
      <section class="concept-block">
        <h3>4.3.2 Branch Testing and Branch Coverage</h3>
        <p>A <strong>branch</strong> = a transfer of control between two nodes in the control flow graph. Branches can be <strong>unconditional</strong> (straight-line) or <strong>conditional</strong> (decision outcomes: if/else, switch/case, loop exit/continue).</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Same Example — Now Testing ALL Branches</h4>
<pre style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 6px; overflow-x: auto; font-size: 0.85em;">
function processPayment(amount, card) {
  let fee = 0;
  if (card.type === "credit") {          // Branch A (true) / Branch B (false)
    fee = amount * 0.029;
  }
  if (amount > 10000) {                  // Branch C (true) / Branch D (false)
    requireManualReview(amount);
  }
  return chargeCard(amount + fee);
}
</pre>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Test Case</th>
                <th style="text-align:left; padding:0.4rem;">Inputs</th>
                <th style="text-align:left; padding:0.4rem;">Branches Hit</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">TC1</td><td>credit, $15,000</td><td>A (true), C (true)</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;">TC2</td><td>debit, $50</td><td>B (false), D (false)</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:0.5rem;"><strong>2 test cases → 100% branch coverage → automatically gives 100% statement coverage too!</strong></p>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Coverage Formula</h4>
          <p><strong>Branch Coverage = (Branches exercised ÷ Total branches) × 100%</strong></p>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <h4>⚠️ Limitation</h4>
          <p>Branch coverage may still miss defects requiring a <strong>specific path</strong> — e.g., a bug that only triggers when Branch A (true) AND Branch D (false) happen together. You'd need path coverage for that (not in the ISTQB Foundation syllabus).</p>
        </div>
      </section>

      <!-- ==================== KEY RELATIONSHIP ==================== -->
      <section class="concept-block">
        <h3>The Golden Rule: Branch Subsumes Statement</h3>
        <div class="comparison-grid">
          <div class="grid-item">
            <h4>100% Branch Coverage</h4>
            <p>→ <strong>automatically guarantees</strong> 100% Statement Coverage</p>
            <p>Because exercising both TRUE and FALSE of every decision necessarily hits all reachable statements.</p>
          </div>
          <div class="grid-item">
            <h4>100% Statement Coverage</h4>
            <p>→ does <strong>NOT</strong> guarantee 100% Branch Coverage</p>
            <p>You can hit every line without taking both paths of every decision (e.g., always going through the TRUE branch).</p>
          </div>
        </div>
        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam favorite:</strong> "Branch coverage subsumes statement coverage" — this is <strong>TRUE</strong> and appears on nearly every practice exam. The reverse is false.</p>
        </div>
      </section>

      <!-- ==================== VALUE OF WHITE-BOX ==================== -->
      <section class="concept-block">
        <h3>4.3.3 The Value of White-Box Testing</h3>
        <div class="comparison-grid">
          <div class="grid-item">
            <h4>Strengths</h4>
            <ul>
              <li>Tests the <strong>entire implementation</strong>, not just the spec</li>
              <li>Finds defects even when specs are <strong>vague, outdated, or incomplete</strong> — e.g., an undocumented fraud check path in the payment gateway</li>
              <li>Provides <strong>objective coverage metrics</strong> — "we've tested 87% of branches" gives real confidence data</li>
              <li>Works in <strong>static testing</strong> too — dry runs of pseudocode, code reviews, control flow analysis</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Weakness</h4>
            <ul>
              <li><strong>Cannot detect defects of omission</strong> — if the payment gateway is missing a required currency conversion feature, white-box tests won't reveal it because there's no code to test</li>
              <li>Only tests what IS implemented, not what SHOULD BE implemented</li>
            </ul>
          </div>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Memory Trick</h4>
          <p><strong>White-box tests what's THERE. Black-box tests what SHOULD be there.</strong> You need both to be thorough.</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the coverage item in statement testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Executable statements. Coverage = statements exercised ÷ total executable statements × 100%.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Does 100% statement coverage guarantee all decision logic has been tested?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No. 100% statement coverage can be achieved by only exercising one outcome (e.g., TRUE) of each decision. You need branch coverage to ensure both TRUE and FALSE paths are tested.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the relationship between branch coverage and statement coverage?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Branch coverage <strong>subsumes</strong> statement coverage. 100% branch coverage guarantees 100% statement coverage, but NOT vice versa.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A payment function has 10 executable statements and 2 if-else decisions (4 branches total). A tester writes one test that executes 10/10 statements but only hits the TRUE branch of both decisions. What are the statement and branch coverage percentages?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Statement coverage = 10/10 = <strong>100%</strong>. Branch coverage = 2/4 = <strong>50%</strong>. This demonstrates that 100% statement coverage does NOT guarantee 100% branch coverage.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is a key strength of white-box testing when specifications are incomplete?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> White-box testing tests the actual implementation, so it can find defects even when specs are vague, outdated, or incomplete. It doesn't rely on external documentation to determine what to test.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What type of defect might white-box testing fail to detect?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Defects of omission</strong> — missing features. If a required feature was never coded (e.g., a missing currency conversion), there's no code to test, so white-box techniques won't detect the gap.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> Your team achieves 100% branch coverage on a payment gateway. The product owner then discovers the system doesn't handle cryptocurrency payments at all — a requirement from the spec. Why didn't white-box testing catch this?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Because white-box testing only tests <strong>what is implemented</strong>, not what's missing. Since cryptocurrency handling was never coded, there were no statements or branches to test. This is a <strong>defect of omission</strong> — only black-box testing (comparing behavior against requirements) would have caught it.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

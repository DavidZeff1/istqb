export const content = {
  title: "4.1 Test Techniques Overview",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Your Testing Toolbox</h3>
        <p>You're testing an <strong>online banking transfer feature</strong>. You could randomly type amounts and hope to find bugs — or you could use <strong>test techniques</strong> to systematically figure out <em>what to test</em> (test analysis) and <em>how to test</em> (test design).</p>
        <p>Test techniques help you create a <strong>small but sufficient</strong> set of test cases that covers the right things. They also help identify test conditions, coverage items, and test data.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Memory Trick — "BWE" → "Black, White, Experience"</h4>
          <p>The three categories of test techniques:</p>
        </div>
      </section>

      <!-- ==================== THREE CATEGORIES ==================== -->
      <section class="concept-block">
        <h3>The Three Families of Test Techniques</h3>

        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Category</th>
                <th style="text-align:left; padding:0.5rem;">Also Called</th>
                <th style="text-align:left; padding:0.5rem;">Based On</th>
                <th style="text-align:left; padding:0.5rem;">Banking Transfer Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Black-Box</strong></td>
                <td>Specification-based</td>
                <td>Specified <strong>behavior</strong> — no knowledge of internal code</td>
                <td>Spec says: "Transfer $1–$10,000." Test with $0, $5,000, $10,001 based on the spec alone.</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>White-Box</strong></td>
                <td>Structure-based</td>
                <td><strong>Internal structure</strong> and processing of the code</td>
                <td>Open <code>transfer.ts</code> and ensure every <code>if/else</code> branch is exercised — including the "insufficient funds" path.</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Experience-Based</strong></td>
                <td>—</td>
                <td>Tester's <strong>knowledge and experience</strong></td>
                <td>A senior tester thinks: "I bet transfers of exactly $0.01 or with special characters in the memo field will break something."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Black-Box — Key Facts</h4>
            <ul>
              <li>Test cases are <strong>independent of implementation</strong></li>
              <li>If the code changes but the spec stays the same → tests <strong>still valid</strong></li>
              <li>Can be designed <strong>before code exists</strong> (based on requirements)</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>White-Box — Key Facts</h4>
            <ul>
              <li>Test cases are <strong>dependent on how code is written</strong></li>
              <li>Can only be created <strong>after implementation</strong></li>
              <li>Code changes → tests may need <strong>updating</strong></li>
            </ul>
          </div>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Experience-Based — The Secret Weapon</h4>
          <ul>
            <li>Effectiveness depends heavily on <strong>tester's skills</strong></li>
            <li>Can find defects that black-box and white-box <strong>miss</strong></li>
            <li><strong>Complementary</strong> to the other two — NOT a replacement</li>
          </ul>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam trap:</strong> Experience-based techniques are <strong>complementary</strong>, not a substitute. The exam loves to trick you with "experience-based can replace systematic techniques" — that's <strong>false</strong>.</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What are the three categories of test techniques?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Black-box (specification-based) — based on specified behavior without reference to internal structure. 2) White-box (structure-based) — based on internal structure and processing. 3) Experience-based — using the tester's knowledge and experience.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A banking app's transfer feature is refactored — the internal code is completely rewritten, but the requirements remain the same. Which technique category's test cases would still be valid without changes?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Black-box test cases. Since they are based on <strong>specified behavior</strong> (not internal structure), they remain valid as long as requirements don't change. White-box tests would likely need updating since they depend on the code structure that was rewritten.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why are experience-based techniques considered complementary rather than a replacement?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Because they can detect defects that systematic techniques (black-box and white-box) might miss, leveraging the tester's intuition and past experience. But they depend heavily on tester skill and aren't systematic — so they supplement, not replace, formal techniques.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> When can white-box test cases be created, and why?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Only after design or implementation, because they require knowledge of the internal structure. You can't test code paths you haven't seen yet. Black-box tests, by contrast, can be designed as soon as requirements or specifications exist.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A tester writes test cases based only on the user manual without looking at any code. Another tester opens the source code and ensures every function is called at least once. Which technique category does each tester use?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The first tester uses <strong>black-box</strong> (specification-based) — testing against the documented behavior in the user manual. The second uses <strong>white-box</strong> (structure-based) — testing based on the internal code structure.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

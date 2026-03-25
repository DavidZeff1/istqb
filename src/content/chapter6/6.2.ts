export const content = {
  title: "6.2 Benefits and Risks of Test Automation",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — A Cautionary Tale</h3>
        <p>Your <strong>e-commerce company</strong> just spent $50,000 on a shiny new test automation framework. Management expects "zero manual testing" within 3 months. Six months later, half the automated scripts are broken, nobody maintains them, and manual testers were let go. Sound familiar?</p>
        <p>The ISTQB message is clear: <strong>simply acquiring a tool does NOT guarantee success</strong>. Every tool requires effort for <strong>introduction, maintenance, and training</strong>. There are real benefits — but also real risks that need analysis and mitigation.</p>
      </section>

      <!-- ==================== BENEFITS ==================== -->
      <section class="concept-block">
        <h3>6 Potential Benefits of Test Automation</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Benefit</th>
                <th style="text-align:left; padding:0.5rem;">What It Means</th>
                <th style="text-align:left; padding:0.5rem;">E-Commerce Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>1. Time Saved</strong></td>
                <td>Reduces repetitive manual work — regression tests, re-entering data, comparing results, checking standards</td>
                <td>500 regression tests run in 20 minutes instead of 3 days of manual clicking</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>2. Consistency & Repeatability</strong></td>
                <td>Prevents simple human errors — tests derived consistently, data created systematically, same order/frequency</td>
                <td>Checkout flow tested identically across Chrome, Safari, Firefox every night — no "I forgot to test Safari"</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>3. Objective Assessment</strong></td>
                <td>Provides measures too complex for humans (e.g., code coverage percentages)</td>
                <td>Istanbul reports 82% branch coverage, highlighting that error-handling paths in payment processing are untested</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>4. Easier Reporting</strong></td>
                <td>Statistics, graphs, aggregated data on progress, failure rates, execution duration</td>
                <td>Dashboard shows pass/fail trend over last 30 sprints — stakeholders see quality improving</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>5. Faster Execution</strong></td>
                <td>Earlier defect detection, faster feedback, faster time to market</td>
                <td>CI catches a broken add-to-cart API within 8 minutes of a developer's push — not 2 days later</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>6. More Time for Design</strong></td>
                <td>Frees testers to design new, deeper, more effective tests instead of running repetitive ones</td>
                <td>QA now spends time on exploratory testing of the new recommendation engine instead of re-running checkout regression</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <h4>🧠 Memory Trick — "SCORER"</h4>
          <p><strong>S</strong>aved time · <strong>C</strong>onsistency · <strong>O</strong>bjective measures · <strong>R</strong>eporting · <strong>E</strong>xecution speed · <strong>R</strong>edirect time to design</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== RISKS ==================== -->
      <section class="concept-block">
        <h3>8 Potential Risks of Test Automation</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Risk</th>
                <th style="text-align:left; padding:0.5rem;">What Goes Wrong</th>
                <th style="text-align:left; padding:0.5rem;">E-Commerce Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>1. Unrealistic Expectations</strong></td>
                <td>Overestimating functionality or ease of use</td>
                <td>CEO expects "100% automated testing in 2 weeks" — reality: 6 months for 60% coverage</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>2. Inaccurate Estimates</strong></td>
                <td>Underestimating time, cost, effort for introduction + maintenance</td>
                <td>Budget was $50K for tool purchase — actual cost was $200K including training, scripting, and ongoing maintenance</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>3. Automating When Manual Is Better</strong></td>
                <td>Some tests are better done manually (exploratory, UX)</td>
                <td>Team automates visual layout checks — scripts can't tell the "Add to Cart" button overlaps the product image on mobile</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>4. Over-Reliance on Tools</strong></td>
                <td>Ignoring need for human critical thinking</td>
                <td>"All 500 automated tests pass!" — but nobody noticed the search bar returns results in random order</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>5. Vendor Dependency</strong></td>
                <td>Vendor goes out of business, retires tool, provides poor support</td>
                <td>Tool vendor acquired by competitor → tool discontinued → 2,000 test scripts become worthless</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>6. Open-Source Abandonment</strong></td>
                <td>OSS may be abandoned or require frequent component updates</td>
                <td>Team builds framework on Protractor → Angular team announces Protractor is deprecated and EOL</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>7. Platform Incompatibility</strong></td>
                <td>Tool doesn't work with the development platform</td>
                <td>Purchased tool only supports Windows desktop apps — your app is a React Native mobile app</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>8. Regulatory Non-Compliance</strong></td>
                <td>Tool doesn't meet regulatory or safety standards</td>
                <td>Medical device app requires FDA-compliant audit trail — chosen tool has no audit logging capability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <h4>⚠️ Exam Trap</h4>
          <p>The exam loves to test: <strong>"Using a test tool when manual testing is more appropriate"</strong> — this IS a risk, not a benefit. Automation isn't always the answer. Also watch for: <strong>over-reliance ≠ over-automation</strong>. Over-reliance means ignoring human critical thinking, not simply having too many automated tests.</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== COMPARISON ==================== -->
      <section class="concept-block">
        <h3>Benefits vs. Risks — Side by Side</h3>
        <div class="comparison-grid">
          <div class="grid-item">
            <h4>✅ Benefits (SCORER)</h4>
            <ul>
              <li><strong>S</strong>aved time — less repetitive manual work</li>
              <li><strong>C</strong>onsistency — no human errors in repetition</li>
              <li><strong>O</strong>bjective assessment — coverage, metrics</li>
              <li><strong>R</strong>eporting — dashboards, statistics, graphs</li>
              <li><strong>E</strong>xecution speed — fast feedback, earlier defect detection</li>
              <li><strong>R</strong>edirect time — testers design deeper tests</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>⚠️ Risks (8 items)</h4>
            <ul>
              <li>Unrealistic expectations</li>
              <li>Inaccurate estimates</li>
              <li>Automating when manual is better</li>
              <li>Over-reliance (ignoring human thinking)</li>
              <li>Vendor dependency</li>
              <li>Open-source abandonment</li>
              <li>Platform incompatibility</li>
              <li>Regulatory non-compliance</li>
            </ul>
          </div>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> Does simply acquiring a test automation tool guarantee success?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No. Each new tool requires effort for <strong>introduction, maintenance, and training</strong>. There are also risks that need analysis and mitigation. Buying the tool is just the beginning.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name all 6 potential benefits of test automation.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer (SCORER):</strong> <strong>S</strong>aved time (less repetitive work), <strong>C</strong>onsistency & repeatability (no human error), <strong>O</strong>bjective assessment (coverage metrics), <strong>R</strong>eporting (statistics, graphs), <strong>E</strong>xecution speed (faster feedback, faster time to market), <strong>R</strong>edirect time (testers design deeper tests).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 5 potential risks of test automation.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any five of: unrealistic expectations, inaccurate estimates, automating when manual is better, over-reliance on tools, vendor dependency, open-source abandonment, platform incompatibility, regulatory non-compliance.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is over-reliance on a test automation tool a risk?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> It leads to ignoring the need for <strong>human critical thinking</strong>. Automated tools execute predefined checks but cannot think creatively, explore edge cases, or apply judgment in ambiguous situations. A balance between automation and manual testing is essential.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A startup adopts Selenium for their React e-commerce site. After 3 months, tests break every sprint because the UI changes frequently. Management blames automation. What risk was underestimated?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Inaccurate estimation</strong> of the effort required to <strong>maintain test scripts</strong>. Frequent UI changes require regular script updates. The team underestimated ongoing maintenance costs and should have invested in more resilient locators or a page-object model.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A QA lead says: "We automated 800 tests and they all pass — we don't need manual testing anymore." Why is this dangerous?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> This reflects <strong>over-reliance on tools</strong>. Automated tests only check what they were programmed to check. They miss usability issues, visual glitches, unexpected workflows, and edge cases that require human critical thinking and exploratory testing. Eliminating manual testing entirely is a recognized risk.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

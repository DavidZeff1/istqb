export const content = {
  title: "5.4 Configuration Management",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Keeping Your Testware Under Control</h3>
        <p>Imagine your <strong>autonomous vehicle testing team</strong> runs 10,000 test cases across 8 software versions, 3 sensor firmware variants, and 4 regional road-law configurations. Without <strong>configuration management (CM)</strong>, how would you know which tests were run against which version? How would you reproduce last Tuesday's test results? How would you revert when a new firmware update breaks everything?</p>
        <p>CM provides the discipline to <strong>identify, control, and track</strong> all these work products.</p>
      </section>

      <!-- ==================== WHAT CM TRACKS ==================== -->
      <section class="concept-block">
        <h3>What CM Tracks — Configuration Items</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Configuration Item</th>
                <th style="text-align:left; padding:0.4rem;">Autonomous Vehicle Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">Test plans & strategies</td><td>Highway driving test strategy v2.3</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">Test conditions & cases</td><td>TC-4521: "Pedestrian crossing at night, rain"</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">Test scripts</td><td>Automated simulation script for highway merge</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;">Test results & logs</td><td>Sensor log from Feb 12 road test, build #847</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;">Test reports</td><td>Safety certification test report v1.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ==================== BASELINES ==================== -->
      <section class="concept-block">
        <h3>Baselines and Change Control</h3>
        <p>A <strong>baseline</strong> = a configuration item that's been <strong>approved for testing</strong>. Once baselined, it can ONLY change through a <strong>formal change control process</strong>.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Real Scenario</h4>
          <p>Your team baselines the <strong>sensor firmware v3.1</strong> for system testing. Mid-testing, a developer wants to "quickly patch" a LiDAR calibration bug.</p>
          <ul>
            <li>Without CM: Developer patches directly → test results become unreliable → nobody knows which firmware was actually tested</li>
            <li><strong>With CM:</strong> Developer submits a change request → it goes through formal review → new baseline v3.1.1 is created → all affected tests are re-run → CM records both baselines → you can still reproduce v3.1 results for the safety audit</li>
          </ul>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <h4>Key Points for the Exam</h4>
          <ul>
            <li>CM records <strong>relationships and versions</strong> of configuration items</li>
            <li>You can <strong>revert to a previous baseline</strong> to reproduce earlier test results</li>
            <li>New baselines are created when changes are formally approved</li>
          </ul>
        </div>
      </section>

      <!-- ==================== CM'S SUPPORT ==================== -->
      <section class="concept-block">
        <h3>CM's Support for Testing</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <p>CM ensures:</p>
          <ol>
            <li>All configuration items (including <strong>test items</strong>) are <strong>uniquely identified</strong>, <strong>version controlled</strong>, <strong>tracked for changes</strong>, and <strong>related to other items</strong> → maintaining <strong>traceability</strong> throughout testing</li>
            <li>All documentation and software items are <strong>referenced unambiguously</strong> in testware</li>
          </ol>
          <p style="margin-top: 0.5rem;"><em>In modern DevOps, automated CM is built into the <strong>CI/CD pipeline</strong> — every commit is tagged, every build is versioned, every test run is linked to a specific artifact.</em></p>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam trap:</strong> CM is NOT just "version control for code." In testing, it covers <strong>all testware</strong>: plans, cases, scripts, results, reports — not just source code.</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the purpose of configuration management in testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> CM provides a discipline for <strong>identifying, controlling, and tracking</strong> work products (test plans, strategies, conditions, cases, scripts, results, logs, reports) as configuration items — ensuring traceability and version control throughout the test process.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is a baseline, and how can it be changed?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A baseline is a configuration item approved for testing. It can only be changed through a <strong>formal change control process</strong>. CM records changes when a new baseline is created, and it's possible to revert to a previous baseline to reproduce earlier test results.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What two things does CM ensure to properly support testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) All configuration items are uniquely identified, version controlled, tracked for changes, and related to other items for traceability. 2) All documentation and software items are referenced unambiguously in testware.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> During system testing of an autonomous vehicle, a safety auditor asks you to reproduce exactly the same test environment and results from 3 weeks ago. How does CM make this possible?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> CM tracks all configuration items with <strong>versions and relationships</strong>. Since the test environment from 3 weeks ago was a <strong>baseline</strong>, CM recorded exactly which software version, firmware, test scripts, and data were used. You can <strong>revert to that previous baseline</strong> and re-run the tests to reproduce the results — essential for safety certification audits.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

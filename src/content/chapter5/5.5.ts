export const content = {
  title: "5.5 Defect Management",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Tracking Every Bug in a Ride-Hailing App</h3>
        <p>You're QA lead on a <strong>ride-hailing app</strong> (think Uber / Lyft). Last week your team found 47 anomalies — some turned out to be real bugs, some were configuration issues, one was a change request. Without a solid <strong>defect management process</strong>, how do you decide what gets fixed, track fixes through to closure, and use the data to improve?</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Key Insight</h4>
          <p>Not every reported anomaly is a real defect. Anomalies may be <strong>real defects</strong>, <strong>false positives</strong>, <strong>change requests</strong>, or <strong>environment issues</strong>. The defect management process sorts this out.</p>
          <p>Anomalies can be reported during <strong>any SDLC phase</strong>, including from static testing (code reviews, static analysis).</p>
        </div>
      </section>

      <!-- ==================== WORKFLOW ==================== -->
      <section class="concept-block">
        <h3>The Defect Management Workflow</h3>
        <p>At minimum, a defect management process needs: a <strong>workflow</strong> (discovery → closure) and <strong>classification rules</strong>.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Memory Trick — "LADC" → Log, Analyze, Decide, Close</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Step</th>
                <th style="text-align:left; padding:0.4rem;">Action</th>
                <th style="text-align:left; padding:0.4rem;">Ride-Hailing Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>1. Log</strong></td>
                <td>Record the anomaly</td>
                <td>Tester logs: "Driver location jumps 500m after tunnel exit on iOS 17"</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>2. Analyze & Classify</strong></td>
                <td>Is it a defect, false positive, or change request?</td>
                <td>Dev investigates: confirmed — GPS reconnection logic doesn't interpolate after signal loss</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>3. Decide</strong></td>
                <td>Fix, defer, or reject</td>
                <td>Product owner: "Fix for v4.2 — high severity, affects estimated arrival times"</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>4. Close</strong></td>
                <td>Verify fix, close the report</td>
                <td>Tester confirms fix in v4.2 beta, closes defect report</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:0.5rem;"><em>All involved stakeholders must follow this process.</em></p>
        </div>
      </section>

      <!-- ==================== OBJECTIVES ==================== -->
      <section class="concept-block">
        <h3>Three Objectives of Defect Reports</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <ol>
            <li><strong>Resolve:</strong> Give those responsible enough information to fix the issue</li>
            <li><strong>Track:</strong> Provide a means of tracking work product quality over time</li>
            <li><strong>Improve:</strong> Provide ideas for improving the development and test process</li>
          </ol>
          <p><em>Example: After analyzing 6 months of defect data, the team discovers 35% of bugs originate in the payment module → they add more unit tests and a dedicated reviewer for payment PRs.</em></p>
        </div>
      </section>

      <!-- ==================== DEFECT REPORT FIELDS ==================== -->
      <section class="concept-block">
        <h3>Content of a Defect Report</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Field</th>
                <th style="text-align:left; padding:0.4rem;">Ride-Hailing Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Unique ID</strong></td><td>BUG-2847</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Title</strong></td><td>"Driver pin jumps 500m after tunnel exit on iOS"</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Date, author, role</strong></td><td>Mar 15, 2026 — Sarah Chen (QA Engineer)</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Test object & environment</strong></td><td>v4.1.3, iOS 17.2, iPhone 15 Pro, staging server</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Context</strong></td><td>TC-1203 "GPS accuracy after signal loss", system testing, exploratory session</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Description (steps to reproduce)</strong></td><td>1. Start ride 2. Enter tunnel (simulate GPS loss) 3. Exit tunnel → observe pin location. Attached: screen recording, GPS log</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Expected result</strong></td><td>Pin smoothly transitions to current location within 3 seconds</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Actual result</strong></td><td>Pin jumps 500m north, stays there for 8 seconds, then snaps to correct location</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Severity</strong></td><td>High — affects ETA calculation and fare accuracy</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Priority</strong></td><td>High — fix for v4.2 release</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Status</strong></td><td>Open → In Progress → Fixed → Verified → Closed</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>References</strong></td><td>Linked to TC-1203, requirement REQ-GPS-014</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:0.5rem;"><em>Some fields (ID, date, initial status) may be <strong>auto-populated</strong> by defect management tools like Jira, Azure DevOps, or Bugzilla.</em></p>
        </div>
      </section>

      <!-- ==================== SEVERITY VS PRIORITY ==================== -->
      <section class="concept-block">
        <h3>Severity vs Priority — The Classic Distinction</h3>
        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Severity</h4>
            <p><strong>How bad is it?</strong> Impact on stakeholders/requirements.</p>
            <ul>
              <li>High: GPS jump causes wrong fare charges</li>
              <li>Low: App icon has 1px misalignment on Android</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Priority</h4>
            <p><strong>How urgently must it be fixed?</strong></p>
            <ul>
              <li>High: Login page typo (low severity but visible to ALL users)</li>
              <li>Low: Crash in admin-only debug mode (high severity but rarely triggered)</li>
            </ul>
          </div>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam favorite:</strong> Severity and priority are <strong>independent</strong>. A defect can be <strong>high severity / low priority</strong> (serious bug in a rarely used feature) or <strong>low severity / high priority</strong> (typo on the homepage seen by millions of users).</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the minimum a defect management process should include?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A <strong>workflow</strong> for handling defects from discovery to closure (Log → Analyze/Classify → Decide → Close) and <strong>rules for classification</strong>. All involved stakeholders must follow the process.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Are all reported anomalies necessarily defects?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No. Anomalies may be real defects, false positives, change requests, or environment issues. This is resolved during the analyze/classify step of the workflow.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the three objectives of a defect report?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Provide enough information to <strong>resolve</strong> the issue. 2) Provide a means of <strong>tracking</strong> work product quality. 3) Provide ideas for <strong>improving</strong> the development and test process.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between severity and priority?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Severity</strong> = degree of impact on stakeholders/requirements (how bad). <strong>Priority</strong> = how urgently it needs fixing. They're independent — a defect can be high severity/low priority (serious but in a rarely used feature) or low severity/high priority (cosmetic but on a high-visibility page).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A tester finds that the ride-hailing app's "Cancel Ride" button doesn't work, but only when the driver is less than 30 seconds away. What severity and priority would you assign, and why?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>High severity</strong> — a core feature (cancellation) is broken in a specific scenario. <strong>High priority</strong> — this directly impacts paying customers who may be charged for rides they tried to cancel. Both severity and priority are high because the feature is critical and the scenario occurs frequently.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 6 fields typically included in a defect report.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any six of: unique ID, title, date/author/role, test object & environment, context, description/steps to reproduce, expected result, actual result, severity, priority, status, and references.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

import audio23 from "./audio/23audio.m4a";

export const content = {
  title: "2.3 Maintenance Testing",
  audioSrc: audio23,
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Software Doesn't Retire After Launch</h3>
        <p>Your company's <strong>e-commerce platform</strong> has been live for 3 years, processing millions of orders. But "live" doesn't mean "done" — the system needs constant care. Bugs surface. Regulations change. Servers get upgraded. Eventually, the old system gets replaced entirely.</p>
        <p>Each of these situations requires <strong>maintenance testing</strong> — testing that focuses on changes to an <strong>operational system</strong>. It includes verifying the change works AND making sure the rest of the system (which is usually most of it) still works too.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Memory Trick — The Three M's of Maintenance</h4>
          <ul>
            <li><strong>M</strong>odifications — fixing bugs, adding features</li>
            <li><strong>M</strong>igrations — moving to new platforms/environments</li>
            <li><strong>M</strong>orgue (Retirement) — shutting down and archiving</li>
          </ul>
        </div>

        <p>Before any change is made, an <strong>impact analysis</strong> should be done — evaluating the potential ripple effects in other parts of the system. This helps decide whether the change is worth the risk.</p>
      </section>

      <!-- ==================== CATEGORIES ==================== -->
      <section class="concept-block">
        <h3>Three Categories of Maintenance</h3>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Corrective</h4>
            <p><strong>Real scenario:</strong> Users report that applying a discount code over $100 crashes the checkout page. The team deploys a <strong>hot fix</strong> to patch the crash.</p>
          </div>
          <div class="grid-item">
            <h4>Adaptive</h4>
            <p><strong>Real scenario:</strong> Apple releases iOS 18 and the app's push notifications stop working. The team updates the notification module to use the <strong>new iOS APIs</strong>.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Improving Performance / Maintainability</h4>
          <p><strong>Real scenario:</strong> The product search takes 4 seconds. The team rewrites the search query logic and adds caching to bring it <strong>under 1 second</strong>. Nothing is "broken" — it's a planned improvement.</p>
        </div>

        <p style="margin-top: 1rem;">Maintenance can be <strong>planned</strong> (scheduled releases) or <strong>unplanned</strong> (emergency hot fixes for production-down scenarios).</p>
      </section>

      <!-- ==================== SCOPE ==================== -->
      <section class="concept-block">
        <h3>What Determines the Scope of Maintenance Testing?</h3>
        <p>How much testing you need depends on three factors:</p>
        <div class="highlight-box">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Factor</th>
                <th style="text-align:left; padding:0.5rem;">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Degree of risk</strong> of the change</td><td>Changing the payment processing logic = HIGH risk → extensive regression. Fixing a typo on the About page = LOW risk → minimal testing.</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Size of the existing system</strong></td><td>A 2-million-line platform with 500 microservices has more potential ripple effects than a 5-page brochure site.</td></tr>
              <tr><td style="padding:0.4rem;"><strong>Size of the change</strong></td><td>Changing one CSS color = tiny. Replacing the entire database layer from MySQL to PostgreSQL = massive.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ==================== TRIGGERS ==================== -->
      <section class="concept-block">
        <h3>The Three Triggers for Maintenance Testing</h3>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>1. Modifications</h4>
          <p>Planned enhancements (release-based), corrective bug fixes, or emergency hot fixes.</p>
          <p><strong>Real scenario:</strong> Sprint 42 adds a "Save for Later" feature to the shopping cart. Maintenance testing: test the new feature (confirmation) + test the existing checkout flow still works (regression).</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>2. Upgrades or Migrations</h4>
          <p>Moving from one platform/environment to another. Requires testing both the <strong>new environment</strong> and the <strong>changed software</strong>, including <strong>data conversion/migration</strong> when importing data from another system.</p>
          <p><strong>Real scenario:</strong> The company migrates from on-premise servers to AWS cloud. Testing includes: do all APIs respond correctly in the new environment? Did the database migration preserve all 10 million user records accurately? Does the connection pooling work the same way?</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>3. Retirement</h4>
          <p>When an application reaches end-of-life and is being shut down. Requires testing of <strong>data archiving</strong> (if long retention periods are required) and <strong>restore/retrieval procedures</strong> (can you get the data back if needed?).</p>
          <p><strong>Real scenario:</strong> The company retires its legacy CRM and migrates to Salesforce. Before shutting down the old system: archive 7 years of customer data (legal requirement), verify it can be retrieved from the archive, test that the new Salesforce system has all the migrated data, then decommission the old servers.</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What are the three categories of maintenance?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Corrective — fixing defects. 2) Adaptive — adapting to environment changes (new OS, new hardware, new regulations). 3) Improving performance or maintainability — planned optimizations.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What three factors determine the scope of maintenance testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The degree of risk of the change, the size of the existing system, and the size of the change.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the three triggers for maintenance testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Modifications — planned enhancements, corrective changes, hot fixes. 2) Upgrades or migrations — moving to a new platform, including new environment testing and data conversion testing. 3) Retirement — end-of-life, requiring data archiving and restore/retrieval procedure testing.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A company is migrating its e-commerce platform from Azure to AWS. What kinds of testing should the maintenance testing include?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Tests associated with the new AWS environment (do all services work?), tests of the changed software (any code adapted for AWS-specific services), and tests of data conversion/migration (did all product catalogs, user accounts, and order history migrate correctly and completely?).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> When a system is being retired, what types of testing might be needed?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Testing of data archiving (if long data retention periods are required by law or regulation) and testing of restore and retrieval procedures (can the archived data be successfully retrieved if needed during the retention period?).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is impact analysis important before making a change to an operational system?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Impact analysis evaluates the potential consequences of the change in other areas of the system. It helps decide whether to proceed with the change and determines the scope of regression testing needed. Without it, teams risk making changes that cause unexpected failures in seemingly unrelated parts of the system.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A production hot fix changed one line in the payment processing module. The team only tested the payment flow and declared it done. Two days later, order confirmation emails stopped working. What went wrong?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The team skipped impact analysis and insufficient regression testing. Even a one-line change can have ripple effects. The scope of maintenance testing should have considered the degree of risk (payment module is high-risk), the size of the system (many interconnected modules), and tested beyond just the changed component.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

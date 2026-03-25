export const content = {
  title: "5.2 Risk Management",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — A Ride-Hailing App Launch</h3>
        <p>You're the test manager for a <strong>ride-hailing app launching in a new country</strong>. What could go wrong? The payment gateway might not support local banks (product risk). Your QA team might not get test devices on time (project risk). Risk management helps you identify these threats <em>before</em> they become real problems.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Risk Management = Two Activities</h4>
          <ul>
            <li><strong>Risk Analysis</strong> = Risk Identification + Risk Assessment ("What could go wrong? How bad is it?")</li>
            <li><strong>Risk Control</strong> = Risk Mitigation + Risk Monitoring ("How do we reduce it? Is it getting worse?")</li>
          </ul>
          <p>When test activities are selected and prioritized based on these → it's called <strong>risk-based testing</strong>.</p>
        </div>
      </section>

      <!-- ==================== RISK DEFINITION ==================== -->
      <section class="concept-block">
        <h3>5.2.1 Risk Definition and Risk Attributes</h3>
        <p><strong>Risk</strong> = a potential event whose occurrence causes an adverse effect. Defined by two factors:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Factor</th>
                <th style="text-align:left; padding:0.4rem;">Definition</th>
                <th style="text-align:left; padding:0.4rem;">Ride-Hailing Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Likelihood</strong></td>
                <td>Probability of occurrence (0 to 1)</td>
                <td>"Payment gateway fails during peak hours" — likelihood: 0.3 (30%)</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Impact (harm)</strong></td>
                <td>Consequences if it occurs</td>
                <td>"Users can't pay → abandon the app" — impact: HIGH (revenue + reputation loss)</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:0.5rem;"><strong>Risk Level = Likelihood × Impact</strong> → the higher the level, the more important its treatment.</p>
        </div>
      </section>

      <!-- ==================== PROJECT VS PRODUCT RISKS ==================== -->
      <section class="concept-block">
        <h3>5.2.2 Project Risks vs. Product Risks</h3>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Project Risks (affect the PROJECT)</h4>
            <p>Impact <strong>schedule, budget, or scope</strong>:</p>
            <table style="width:100%; border-collapse:collapse; font-size:0.9em;">
              <tbody>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                  <td style="padding:0.3rem;"><strong>Organizational</strong></td><td>Launch delayed because legal approval for the new country takes 3 months</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                  <td style="padding:0.3rem;"><strong>People</strong></td><td>Two senior testers quit mid-project; no replacements available</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                  <td style="padding:0.3rem;"><strong>Technical</strong></td><td>Scope creep — PM adds "food delivery" feature mid-sprint</td>
                </tr>
                <tr>
                  <td style="padding:0.3rem;"><strong>Supplier</strong></td><td>Map provider's API has a 2-week outage; no SLA protection</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="grid-item">
            <h4>Product Risks (affect the PRODUCT)</h4>
            <p>Impact <strong>product quality</strong> (ISO 25010):</p>
            <ul>
              <li>Missing functionality — no fare splitting for shared rides</li>
              <li>Incorrect calculation — surge pricing formula wrong</li>
              <li>Poor performance — app crashes with 10K concurrent users</li>
              <li>Security vulnerability — driver location data exposed via API</li>
              <li>Poor UX — confusing pickup location selector</li>
            </ul>
            <p><em>Consequences: user dissatisfaction, revenue loss, legal penalties, or in extreme cases (medical/automotive) — injury or death.</em></p>
          </div>
        </div>
      </section>

      <!-- ==================== PRODUCT RISK ANALYSIS ==================== -->
      <section class="concept-block">
        <h3>5.2.3 Product Risk Analysis</h3>
        <p>Goal: Focus test effort where it matters most. Should begin <strong>early in the SDLC</strong>.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Two Steps</h4>
          <table style="width:100%; border-collapse:collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem; width:140px;"><strong>1. Identification</strong></td>
                <td>Generate comprehensive risk list via brainstorming, workshops, interviews, cause-effect diagrams. E.g.: "What if payment fails for international cards?"</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>2. Assessment</strong></td>
                <td>Categorize, determine likelihood/impact/level, prioritize, propose handling. Quantitative (L × I), qualitative (risk matrix), or mixed.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Risk Analysis Results Are Used To:</h4>
          <ul>
            <li>Determine <strong>test scope</strong> — only test what matters</li>
            <li>Determine test <strong>levels and types</strong> — e.g., security testing for payment risks</li>
            <li>Determine <strong>techniques and coverage</strong> — high-risk = higher coverage</li>
            <li>Estimate <strong>test effort</strong></li>
            <li><strong>Prioritize testing</strong> — critical defects found ASAP</li>
            <li>Decide if <strong>non-testing activities</strong> (training, reviews) can also reduce risk</li>
          </ul>
        </div>
      </section>

      <!-- ==================== PRODUCT RISK CONTROL ==================== -->
      <section class="concept-block">
        <h3>5.2.4 Product Risk Control</h3>
        <p>What do you DO about identified risks?</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Response Options</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Option</th>
                <th style="text-align:left; padding:0.4rem;">Ride-Hailing Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Mitigate (by testing)</strong></td><td>Run 200+ payment test cases with all local bank cards</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Accept</strong></td><td>Accept that 0.1% of users on old Android 8 may have UI glitches</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Transfer</strong></td><td>Payment processing liability transferred to Stripe (third-party)</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Contingency plan</strong></td><td>If maps API goes down → fallback to cached routes + SMS directions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>6 Testing-Specific Mitigation Actions</h4>
          <ol>
            <li>Select testers with the <strong>right experience/skills</strong> for the risk area</li>
            <li>Apply appropriate <strong>independence of testing</strong></li>
            <li>Perform <strong>reviews and static analysis</strong></li>
            <li>Apply appropriate <strong>test techniques and coverage levels</strong></li>
            <li>Apply appropriate <strong>test types</strong> for affected quality characteristics</li>
            <li>Perform <strong>dynamic testing</strong> including regression testing</li>
          </ol>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What two factors characterize a risk, and how do they combine?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Risk likelihood (probability, 0 to 1) and risk impact (consequences). Risk Level = Likelihood × Impact. Higher level → more important treatment.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between project risks and product risks?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Project risks affect schedule/budget/scope (organizational, people, technical, supplier issues). Product risks affect product quality and can cause user dissatisfaction, revenue loss, legal penalties, or worse.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> Your ride-hailing app's senior QA lead quits 2 weeks before launch. Is this a project risk or product risk?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Project risk</strong> (people issue — staff shortage). It impacts the project's ability to complete testing on schedule. It may indirectly become a product risk if insufficient testing leads to quality issues, but the root cause is project-related.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is risk-based testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A test approach where test activities are selected, prioritized, and managed based on risk analysis (identification + assessment) and risk control (mitigation + monitoring).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the four response options for product risk control?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Mitigate by testing. 2) Accept the risk. 3) Transfer the risk (e.g., to a third party). 4) Contingency plan.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> The surge pricing feature has a risk level of 0.4 (likelihood) × 9 (impact) = 3.6, while the "driver profile photo" feature has 0.1 × 2 = 0.2. How should you prioritize testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Surge pricing (risk level 3.6) should be tested with <strong>much higher priority</strong> — more test cases, deeper coverage, appropriate techniques (e.g., decision tables for pricing rules). The driver photo feature (0.2) gets basic functional testing. This is risk-based testing in action.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

export const content = {
  title: "4.5 Collaboration-Based Test Approaches",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — From Detecting Bugs to Preventing Them</h3>
        <p>You're on an <strong>Agile team building a food delivery app</strong> (think Wolt / DoorDash). Other techniques (EP, BVA, exploratory) help you <em>find</em> bugs after code is written. Collaboration-based approaches prevent bugs from being written in the first place — by getting the <strong>product owner, developers, and testers</strong> to agree on exactly what "done" means <em>before</em> anyone writes code.</p>
      </section>

      <!-- ==================== USER STORIES ==================== -->
      <section class="concept-block">
        <h3>4.5.1 Collaborative User Story Writing</h3>
        <p>A <strong>user story</strong> describes a feature valuable to a user. The whole team writes it together using the <strong>3 C's</strong>:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 The 3 C's</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">C</th>
                <th style="text-align:left; padding:0.4rem;">Meaning</th>
                <th style="text-align:left; padding:0.4rem;">Food Delivery Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Card</strong></td>
                <td>The medium describing the story</td>
                <td>Jira ticket: "As a customer, I want to track my delivery in real-time, so that I know when my food will arrive."</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Conversation</strong></td>
                <td>Discussion about how the software will be used</td>
                <td>"Should we show driver location on a map? What if GPS is unavailable? What about ETA recalculation?"</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Confirmation</strong></td>
                <td>Acceptance criteria</td>
                <td>"Given an active order, When the driver moves, Then the map pin updates within 5 seconds."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>User Story Format</h4>
          <p><strong>"As a [role], I want [goal], so that [business value]"</strong></p>
          <p>Example: <em>"As a <strong>hungry customer</strong>, I want to <strong>reorder my last meal</strong>, so that I can <strong>order faster during my lunch break</strong>."</em></p>
        </div>

        <p>The team writes stories <strong>collaboratively</strong> (brainstorming, mind mapping) from three perspectives: <strong>Business + Development + Testing</strong>.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 INVEST — 6 Qualities of a Good User Story</h4>
          <table style="width:100%; border-collapse:collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem; width:40px;"><strong>I</strong></td><td><strong>Independent</strong> — "Track delivery" doesn't depend on "Rate restaurant"</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>N</strong></td><td><strong>Negotiable</strong> — Map pin update frequency can be discussed (5s vs 10s)</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>V</strong></td><td><strong>Valuable</strong> — Customers clearly want to know where their food is</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>E</strong></td><td><strong>Estimable</strong> — Dev team can estimate: "~5 story points using Google Maps API"</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>S</strong></td><td><strong>Small</strong> — Fits in one sprint</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>T</strong></td><td><strong>Testable</strong> — "Map pin updates within 5 seconds" is verifiable</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:0.5rem;">If a stakeholder can't figure out how to test a story → the story is probably <strong>not clear enough</strong> or needs help from testing.</p>
        </div>
      </section>

      <!-- ==================== ACCEPTANCE CRITERIA ==================== -->
      <section class="concept-block">
        <h3>4.5.2 Acceptance Criteria</h3>
        <p>Conditions an implementation must meet to be accepted by stakeholders. They function as <strong>test conditions</strong> and emerge from the <strong>Conversation</strong> (2nd C).</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Acceptance Criteria Are Used To:</h4>
          <ul>
            <li><strong>Define scope</strong> — "Tracking works for active orders only, not past orders"</li>
            <li><strong>Reach consensus</strong> — PO, dev, and tester agree on what "done" means</li>
            <li>Describe <strong>positive AND negative</strong> scenarios</li>
            <li>Serve as basis for <strong>acceptance testing</strong></li>
            <li>Allow accurate <strong>planning and estimation</strong></li>
          </ul>
        </div>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Scenario-Oriented (Given/When/Then)</h4>
            <p><strong>Given</strong> the driver is en route,<br>
            <strong>When</strong> the driver moves 100m,<br>
            <strong>Then</strong> the map updates within 5 seconds AND the ETA recalculates.</p>
            <p style="margin-top:0.5rem;"><strong>Given</strong> GPS is unavailable,<br>
            <strong>When</strong> the driver can't be located,<br>
            <strong>Then</strong> show "Location temporarily unavailable" with last known position.</p>
          </div>
          <div class="grid-item">
            <h4>Rule-Oriented (Checklist / Table)</h4>
            <ul>
              <li>Map shows driver location with ≤ 50m accuracy</li>
              <li>ETA recalculates every 30 seconds</li>
              <li>Notification sent when driver is 2 min away</li>
              <li>Map works on iOS 16+ and Android 13+</li>
              <li>Offline mode shows cached last-known position</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ==================== ATDD ==================== -->
      <section class="concept-block">
        <h3>4.5.3 Acceptance Test-Driven Development (ATDD)</h3>
        <p>A <strong>test-first approach</strong>: write acceptance tests BEFORE implementation. The whole team participates — PO, devs, testers.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>The 3-Step ATDD Process</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Step</th>
                <th style="text-align:left; padding:0.4rem;">What Happens</th>
                <th style="text-align:left; padding:0.4rem;">Delivery Tracking Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>1. Specification Workshop</strong></td>
                <td>Team analyzes, discusses, and writes the user story + acceptance criteria. Ambiguities resolved.</td>
                <td>"Does 'real-time' mean 1s or 10s? What happens when driver enters a tunnel?" — all resolved in workshop.</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>2. Create Test Cases</strong></td>
                <td>Team or tester creates tests based on acceptance criteria. Tests = examples of how software works.</td>
                <td>Test: "Simulate driver moving 500m → verify map pin moves within 5s." Written in Cucumber/Gherkin.</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>3. Implement</strong></td>
                <td>Developers code the feature, guided by tests. When automated, tests become <strong>executable requirements</strong>.</td>
                <td>Dev implements WebSocket for live GPS. CI runs Cucumber tests automatically — green = story done.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Test Case Order in ATDD</h4>
          <ol>
            <li><strong>Positive first</strong> (happy path) — "Driver moves → map updates correctly"</li>
            <li><strong>Negative next</strong> (exceptions/errors) — "GPS lost → graceful fallback message"</li>
            <li><strong>Non-functional last</strong> — "Map renders in &lt;200ms on 4G connection"</li>
          </ol>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <h4>ATDD Rules to Remember</h4>
          <ul>
            <li>Test cases must cover <strong>all</strong> characteristics of the user story and <strong>not go beyond</strong> the story</li>
            <li><strong>No duplicate</strong> test cases for the same characteristic</li>
            <li>Tests should be in <strong>natural language</strong> understandable by all stakeholders</li>
            <li>In ATDD, <strong>examples = tests</strong> (the terms are interchangeable)</li>
          </ul>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam trap:</strong> "Collaboration-based approaches focus ONLY on defect detection" — <strong>FALSE</strong>. They focus on <strong>defect avoidance</strong> (through shared understanding) AND defect detection (through the resulting tests).</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What are the "3 C's" of a user story?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Card (the medium), Conversation (discussion of how software will be used), Confirmation (acceptance criteria).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What does INVEST stand for?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Independent, Negotiable, Valuable, Estimable, Small, Testable. If a story can't be tested, it's not clear enough.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the two common formats for acceptance criteria?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) <strong>Scenario-oriented</strong> — Given/When/Then (BDD style). 2) <strong>Rule-oriented</strong> — bullet-point checklist or input-output table. Custom formats are fine if criteria are well-defined and unambiguous.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the 3 steps of the ATDD process?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Specification workshop — team discusses/resolves the story. 2) Create test cases — based on acceptance criteria. 3) Implement — devs build the feature guided by the tests; automated tests become executable requirements.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> In what order should ATDD test cases be written?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Positive (happy path). 2) Negative (exceptions/errors). 3) Non-functional (performance, usability, etc.).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> Your team writes a user story: "As a customer, I want to reorder my last meal." The PO can't think of how to test it. Using INVEST, what does this indicate?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The story violates the <strong>T (Testable)</strong> criterion. This may mean the story isn't clear enough, doesn't reflect something valuable, or the stakeholder needs help from the testing perspective. The team should refine it in a specification workshop.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> During a specification workshop for "delivery tracking," a tester asks: "What if the driver's phone dies mid-delivery?" This question was never in the original story. Does this violate ATDD rules?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No — the spec workshop is exactly where such ambiguities should be raised and resolved. The question helps <strong>avoid defects</strong> by clarifying edge cases before implementation. The acceptance criteria would then be updated to cover this scenario. This is the strength of collaboration-based approaches.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> How do collaboration-based approaches differ from other test techniques?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Other techniques (black-box, white-box, experience-based) focus primarily on <strong>defect detection</strong>. Collaboration-based approaches also focus on <strong>defect avoidance</strong> through communication and shared understanding among business, development, and testing perspectives.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

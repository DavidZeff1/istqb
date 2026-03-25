import audio22 from "./audio/22audio.m4a";

export const content = {
  title: "2.2 Test Levels and Test Types",
  audioSrc: audio22,
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Testing Is Like a Security Checkpoint System</h3>
        <p>Imagine you're building an <strong>online ride-sharing app</strong> (think Uber/Gett). Before a single rider hops in a car, your code has to pass through multiple layers of quality gates — each one looking for different kinds of problems.</p>
        <p><strong>Test levels</strong> are those gates — organized groups of test activities, each aimed at software at a specific stage of development. <strong>Test types</strong> are the <em>kinds of checks</em> performed at each gate (functional, performance, security, etc.).</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Memory Trick — "CCSSA" (Think: Cars Can't Skip Safety Audits)</h4>
          <p>The 5 test levels from lowest to highest:</p>
          <ol>
            <li><strong>C</strong>omponent → <strong>C</strong>omponent Integration → <strong>S</strong>ystem → <strong>S</strong>ystem Integration → <strong>A</strong>cceptance</li>
          </ol>
        </div>

        <p>In <strong>sequential models</strong> (Waterfall), the exit criteria of one level become the entry criteria for the next — like needing to clear airport security before you can board. In <strong>iterative models</strong> (Scrum), levels may overlap in time.</p>
      </section>

      <!-- ==================== 2.2.1 TEST LEVELS ==================== -->
      <section class="concept-block">
        <h3>2.2.1 The Five Test Levels — A Ride-Sharing App Example</h3>
        <p>Let's trace a single feature — <strong>"Calculate fare based on distance and surge pricing"</strong> — through every test level:</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>1. Component Testing (Unit Testing)</h4>
          <p>A developer writes a <code>calculateFare(distance, surgeMultiplier)</code> function, then tests it <strong>in isolation</strong> with a unit test framework (Jest, JUnit). Does <code>calculateFare(5, 1.5)</code> return the correct amount?</p>
          <p><strong>Who:</strong> Developers. <strong>Environment:</strong> Dev machine. <strong>Tools:</strong> Test harnesses, unit test frameworks.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>2. Component Integration Testing</h4>
          <p>The fare calculator now needs to talk to the <strong>GPS distance service</strong> and the <strong>surge pricing engine</strong>. Does the fare calculator correctly receive the distance from the GPS module? Does it correctly read the current surge multiplier? This level tests the <strong>interfaces and interactions between components</strong>.</p>
          <p><strong>Strategy matters:</strong> Bottom-up (test GPS first, then plug in fare calculator), top-down (test fare calculator with stubbed GPS), or big-bang (connect everything at once — risky).</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>3. System Testing</h4>
          <p>Now test the <strong>entire ride-sharing app</strong> end-to-end: a rider opens the app → requests a ride → driver accepts → ride completes → fare is calculated and charged. Does the whole flow work? Is the <strong>response time acceptable</strong> under normal load? Is the UI <strong>usable</strong>?</p>
          <p><strong>Who:</strong> Often an independent test team. <strong>Environment:</strong> Representative of production. Covers both <strong>functional</strong> (end-to-end tasks) and <strong>non-functional</strong> (usability, performance) testing.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>4. System Integration Testing</h4>
          <p>The ride-sharing app connects to <strong>external systems</strong>: payment gateway (Stripe), mapping API (Google Maps), SMS notification service (Twilio). Does the payment go through? Does the map render the correct route? Does the rider get an SMS confirmation?</p>
          <p><strong>Environment:</strong> Should be as close to production as possible — staging environment with real API keys or sandbox accounts.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>5. Acceptance Testing</h4>
          <p>The product owner and a group of real riders and drivers try the app. <strong>Does it meet business needs?</strong> Can a rider in Tel Aviv order a ride and arrive at their destination with a correct fare? This is <strong>validation</strong> — confirming readiness for deployment.</p>
          <p><strong>Forms of acceptance testing:</strong></p>
          <ul>
            <li><strong>UAT:</strong> Real users test real workflows ("Can I book, ride, and pay?")</li>
            <li><strong>Operational:</strong> Ops team tests backup, recovery, monitoring ("Can we handle a server crash?")</li>
            <li><strong>Contractual:</strong> Does the delivered software meet the contract's specifications?</li>
            <li><strong>Regulatory:</strong> Does it comply with local transportation laws and data privacy regulations?</li>
            <li><strong>Alpha/Beta:</strong> Alpha = internal users at dev site. Beta = external users in real conditions.</li>
          </ul>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam key — test levels are distinguished by 5 attributes:</strong></p>
          <ol style="margin: 0.5rem 0 0 1.5rem;">
            <li><strong>Test object</strong> — what's being tested (function, module, system, interface)</li>
            <li><strong>Test objectives</strong> — what you're trying to find</li>
            <li><strong>Test basis</strong> — what you base tests on (specs, code, requirements)</li>
            <li><strong>Defects and failures</strong> — typical problems found at this level</li>
            <li><strong>Approach and responsibilities</strong> — who does it and how</li>
          </ol>
        </div>
      </section>

      <!-- ==================== 2.2.2 TEST TYPES ==================== -->
      <section class="concept-block">
        <h3>2.2.2 The Four Test Types — Same Feature, Different Questions</h3>
        <p>Using our ride-sharing app's "ride booking" feature, each test type asks a different question:</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Functional Testing — "WHAT does it do?"</h4>
            <p>Does the booking actually create a ride request? Does the fare calculate correctly? Does the driver get notified?</p>
            <p>Checks: <strong>functional completeness, correctness, appropriateness</strong>.</p>
          </div>
          <div class="grid-item">
            <h4>Non-Functional Testing — "HOW WELL does it do it?"</h4>
            <p>Can the app handle 50,000 simultaneous ride requests? Does the ride request screen load in under 2 seconds? Can a visually impaired user complete a booking?</p>
            <p>Checks: quality characteristics like <strong>performance, usability, reliability, security</strong>.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>ISO/IEC 25010 — The 8 Non-Functional Quality Characteristics</h4>
          <p>🧠 <strong>Memory trick — "PCURSM-PS" → "PC Users Must Pay Securely"</strong></p>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Characteristic</th>
                <th style="text-align:left; padding:0.5rem;">Ride-Sharing Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Performance efficiency</strong></td><td>Fare calculation completes in < 200ms</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Compatibility</strong></td><td>App works on iOS 16 and Android 14 simultaneously</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Usability</strong> (interaction capability)</td><td>New rider can book a ride without any tutorial</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Reliability</strong></td><td>App stays connected during a 30-minute ride with no drops</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Security</strong></td><td>Payment card data is encrypted, never stored in plain text</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Maintainability</strong></td><td>Adding a new vehicle type requires changing only 1 config file</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Portability</strong> (flexibility)</td><td>Ride-matching algorithm can be extracted and reused for a food delivery app</td></tr>
              <tr><td style="padding:0.4rem;"><strong>Safety</strong></td><td>System refuses to dispatch a driver whose license is expired</td></tr>
            </tbody>
          </table>
          <p style="margin-top: 0.5rem;"><em>⚠️ Many non-functional tests are <strong>derived from functional tests</strong> — same actions, but you're measuring a constraint (e.g., login works AND completes in < 1 second). Late discovery of non-functional defects is a <strong>serious threat</strong> to project success.</em></p>
        </div>

        <div class="comparison-grid">
          <div class="grid-item">
            <h4>Black-Box Testing (Specification-based)</h4>
            <p>Tester reads: <em>"Fare = base rate + (distance × per-km rate × surge)"</em>. Tests inputs/outputs <strong>without looking at code</strong>.</p>
            <p>Checks behavior against <strong>specifications</strong>.</p>
          </div>
          <div class="grid-item">
            <h4>White-Box Testing (Structure-based)</h4>
            <p>Tester opens <code>fareCalculator.ts</code> and ensures every <code>if/else</code> branch is exercised (e.g., what if surge = 0? what if distance = 0?).</p>
            <p>Aims to <strong>cover internal structure</strong> (code, architecture, data flows).</p>
          </div>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam trap:</strong> All four test types can be applied at <strong>ALL test levels</strong>. You can do non-functional testing at the component level (e.g., measuring a function's execution time) — it's not limited to system testing!</p>
        </div>
      </section>

      <!-- ==================== 2.2.3 CONFIRMATION & REGRESSION ==================== -->
      <section class="concept-block">
        <h3>2.2.3 Confirmation Testing vs. Regression Testing</h3>
        <p><strong>Real scenario:</strong> A bug is reported: <em>"When surge pricing is exactly 1.0×, the fare shows $0.00."</em> A developer fixes the conditional logic. Now what?</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Step 1: Confirmation Testing ✅</h4>
            <p><em>"Did the fix actually work?"</em></p>
            <ul>
              <li>Re-run the exact test: surge = 1.0× → does the fare now show correctly?</li>
              <li>Add a new test: surge = 1.0× with various distances, to cover the code change more thoroughly</li>
              <li><strong>Minimum:</strong> reproduce the original failure and confirm it no longer occurs</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Step 2: Regression Testing 🔍</h4>
            <p><em>"Did the fix break anything else?"</em></p>
            <ul>
              <li>Did changing the surge logic accidentally break the <strong>fare calculator</strong> for surge > 1.0×?</li>
              <li>Did it affect the <strong>driver payout calculation</strong> (different component, same system)?</li>
              <li>Did it break the <strong>payment gateway integration</strong> (connected system)?</li>
              <li>Did it cause issues in the <strong>test environment</strong> itself?</li>
            </ul>
          </div>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Why Regression Testing Is the #1 Automation Candidate</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Fact</th>
                <th style="text-align:left; padding:0.5rem;">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">Suites run <strong>many times</strong></td><td>Manual re-execution is expensive and slow</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">Suites <strong>grow</strong> with each iteration</td><td>Sprint 20 has 10× more regression tests than Sprint 1</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">CI/DevOps needs <strong>fast feedback</strong></td><td>Automated regression in the pipeline catches breaks within minutes</td></tr>
              <tr><td style="padding:0.4rem;">Start automation <strong>early</strong></td><td>Waiting until late means a huge backlog of tests to automate</td></tr>
            </tbody>
          </table>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam key:</strong> Always do an <strong>impact analysis</strong> before regression testing to understand how far the change rippled. Both confirmation and regression testing are needed at <strong>all test levels</strong>.</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> List the five test levels from lowest to highest.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Component testing (unit testing), 2) Component integration testing, 3) System testing, 4) System integration testing, 5) Acceptance testing. <em>Mnemonic: "Cars Can't Skip Safety Audits" — CCSSA.</em></p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> A ride-sharing team's GPS module passes all unit tests, but when connected to the fare calculator, the distance value is returned in miles instead of kilometers. At which test level would this defect most likely be found?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Component integration testing. This level focuses on interfaces and interactions between components. The individual components work correctly in isolation, but the integration between them reveals a unit mismatch at their interface.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the key difference between functional and non-functional testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Functional testing evaluates <strong>what</strong> the system does — checking completeness, correctness, and appropriateness of functions. Non-functional testing evaluates <strong>how well</strong> the system does it — checking quality characteristics like performance, usability, reliability, security, etc.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> A tester tests the login feature by reading the specification and designing inputs without looking at the code. Which test type is this?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Black-box (specification-based) testing. Tests are derived from documentation without reference to internal structure.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between confirmation testing and regression testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Confirmation testing verifies that a <strong>specific defect fix worked</strong> (the original failure no longer occurs). Regression testing verifies that the fix (or any change) <strong>didn't break anything else</strong> — in the same component, other components, connected systems, or the environment.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 5 non-functional quality characteristics from ISO/IEC 25010.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any 5 of: Performance efficiency, Compatibility, Usability (interaction capability), Reliability, Security, Maintainability, Portability (flexibility), Safety.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Who typically performs acceptance testing, and what is its main focus?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Ideally performed by the <strong>intended users</strong>. Main focus is <strong>validation</strong> — demonstrating readiness for deployment and confirming the system fulfills business needs. Forms include UAT, operational, contractual, regulatory, and alpha/beta testing.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is regression testing a strong candidate for automation?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Regression suites are run repeatedly and grow with each iteration/release. Manual execution becomes increasingly expensive. In CI/DevOps environments, automated regression in the pipeline provides fast feedback. Automation should start early in the project to avoid a growing backlog.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A team releases a new "ride scheduling" feature. They test the feature itself (functional & non-functional), but don't run any other tests. Two days later, users report that the existing "ride now" feature is broken. What type of testing was missing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Regression testing. The team only did confirmation/new-feature testing but failed to check whether the new feature caused adverse effects on existing functionality. An impact analysis should have been done first, followed by regression tests on affected areas.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Can you do non-functional testing at the component level? Give an example.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Yes! All four test types can be applied at all test levels. Example: A unit test that measures the <code>calculateFare()</code> function's execution time to ensure it completes within 50ms — this is non-functional (performance) testing at the component level.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

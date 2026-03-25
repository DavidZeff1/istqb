export const content = {
  title: "5.1 Test Planning",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Building a GPS Navigation App</h3>
        <p>You're the test lead for a <strong>GPS navigation app</strong> (think Waze / Google Maps). Before your 8-person QA team touches any test case, you need a <strong>test plan</strong> — who tests what, when, with what tools, and how much it'll cost. This section covers everything that goes into that plan.</p>
      </section>

      <!-- ==================== TEST PLAN ==================== -->
      <section class="concept-block">
        <h3>5.1.1 Purpose and Content of a Test Plan</h3>
        <p>A test plan documents <strong>objectives, resources, and processes</strong>. It forces you to think about risks, schedules, people, tools, and costs <em>before</em> testing starts.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>What a Test Plan Does</h4>
          <ul>
            <li>Documents <strong>how</strong> and <strong>when</strong> test objectives will be achieved</li>
            <li>Ensures activities meet <strong>established criteria</strong></li>
            <li>Serves as a <strong>communication tool</strong> with stakeholders</li>
            <li>Shows adherence to <strong>test policy and strategy</strong> (or explains deviations)</li>
          </ul>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Test Plan Content — "CARS CALM BS"</h4>
          <table style="width:100%; border-collapse:collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem; width:30px;"><strong>C</strong></td><td><strong>Context</strong> — scope, objectives, test basis</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>A</strong></td><td><strong>Assumptions & constraints</strong></td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>R</strong></td><td><strong>Risk register</strong> — product + project risks</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>S</strong></td><td><strong>Stakeholders</strong> — roles, responsibilities, hiring/training</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>C</strong></td><td><strong>Communication</strong> — forms, frequency, templates</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>A</strong></td><td><strong>Approach</strong> — levels, types, techniques, entry/exit criteria, metrics, environment</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>L</strong></td><td><strong>(De)Liverables</strong> — test deliverables, test data requirements</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>M</strong></td><td><strong>Metrics</strong> — what to measure</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>B</strong></td><td><strong>Budget</strong></td></tr>
              <tr><td style="padding:0.4rem;"><strong>S</strong></td><td><strong>Schedule</strong></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ==================== RELEASE VS ITERATION PLANNING ==================== -->
      <section class="concept-block">
        <h3>5.1.2 Tester's Contribution to Iteration and Release Planning</h3>
        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Release Planning (big picture)</h4>
            <p>Looks ahead to the <strong>product release</strong> — e.g., "Navigation App v3.0 launching in 3 months."</p>
            <p><strong>Tester contributes:</strong></p>
            <ul>
              <li>Writing <strong>testable user stories</strong> + acceptance criteria</li>
              <li>Project & quality <strong>risk analyses</strong></li>
              <li>Estimating <strong>test effort</strong> for stories</li>
              <li>Determining the <strong>test approach</strong></li>
              <li>Planning testing <strong>for the whole release</strong></li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Iteration Planning (this sprint)</h4>
            <p>Looks ahead to <strong>one sprint</strong> — e.g., "Sprint 7: Offline maps + voice guidance."</p>
            <p><strong>Tester contributes:</strong></p>
            <ul>
              <li><strong>Detailed risk analysis</strong> of sprint user stories</li>
              <li>Assessing <strong>testability</strong> of each story</li>
              <li><strong>Breaking down</strong> stories into testing tasks</li>
              <li>Estimating effort for <strong>all testing tasks</strong></li>
              <li>Identifying <strong>functional + non-functional</strong> test needs</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ==================== ENTRY / EXIT CRITERIA ==================== -->
      <section class="concept-block">
        <h3>5.1.3 Entry Criteria and Exit Criteria</h3>
        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Entry Criteria ("Are we ready to START?")</h4>
            <ul>
              <li><strong>Resources available:</strong> testers, devices, test environment, GPS simulators</li>
              <li><strong>Testware ready:</strong> test basis, requirements, user stories, test cases</li>
              <li><strong>Quality gate passed:</strong> e.g., all smoke tests green before system testing begins</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Exit Criteria ("Are we done ENOUGH?")</h4>
            <ul>
              <li><strong>Thoroughness measures:</strong> coverage levels, unresolved defects, defect density, failed test cases</li>
              <li><strong>Binary checks:</strong> all planned tests executed? All defects reported? Regressions automated?</li>
            </ul>
          </div>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Key Exam Points</h4>
          <ul>
            <li><strong>Running out of time/budget</strong> CAN be a valid exit criterion — if stakeholders accept the risk</li>
            <li>In <strong>Agile:</strong> Entry criteria = <strong>Definition of Ready (DoR)</strong>. Exit criteria = <strong>Definition of Done (DoD)</strong></li>
          </ul>
        </div>
      </section>

      <!-- ==================== ESTIMATION TECHNIQUES ==================== -->
      <section class="concept-block">
        <h3>5.1.4 Estimation Techniques</h3>
        <p>How long will testing take? Four techniques, two categories:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Metrics-Based Techniques</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Technique</th>
                <th style="text-align:left; padding:0.4rem;">How It Works</th>
                <th style="text-align:left; padding:0.4rem;">Navigation App Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>1. Ratios</strong></td>
                <td>Use historical data ratios from past projects</td>
                <td>Last project: dev:test = 3:2. This project: 600 dev-days → <strong>400 test-days</strong></td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>2. Extrapolation</strong></td>
                <td>Measure early, project forward using a math model</td>
                <td>Sprints 1-3 averaged 45 test-hours each → estimate remaining 7 sprints at ~45 hrs = <strong>315 hours</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Expert-Based Techniques</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Technique</th>
                <th style="text-align:left; padding:0.4rem;">How It Works</th>
                <th style="text-align:left; padding:0.4rem;">Navigation App Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>3. Wideband Delphi</strong></td>
                <td>Experts estimate <strong>in isolation</strong>, discuss, re-estimate until <strong>consensus</strong>. Planning Poker is the Agile variant.</td>
                <td>3 senior QAs independently estimate "offline maps testing" → one says 5 days, one says 12, one says 8 → discuss → converge on 9</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>4. Three-Point</strong></td>
                <td><strong>E = (a + 4m + b) / 6</strong><br>a = optimistic, m = most likely, b = pessimistic<br>SD = (b - a) / 6</td>
                <td>Route calculation tests: a=6h, m=9h, b=18h → E = (6+36+18)/6 = <strong>10h ± 2h</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ==================== PRIORITIZATION ==================== -->
      <section class="concept-block">
        <h3>5.1.5 Test Case Prioritization</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Three Prioritization Strategies</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Strategy</th>
                <th style="text-align:left; padding:0.4rem;">Navigation App Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Risk-based</strong></td>
                <td>Route calculation in tunnels (high risk of GPS loss) tested first</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Coverage-based</strong></td>
                <td>Test "search destination + route + navigate + arrive" first — covers most code paths</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Requirements-based</strong></td>
                <td>Turn-by-turn voice guidance is the #1 user requirement → test it first</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:0.5rem;"><strong>Note:</strong> If test B depends on test A, run A first regardless of priority. Also consider resource availability (devices, simulators).</p>
        </div>
      </section>

      <!-- ==================== TEST PYRAMID ==================== -->
      <section class="concept-block">
        <h3>5.1.6 Test Pyramid</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Three Layers (bottom to top)</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Layer</th>
                <th style="text-align:left; padding:0.4rem;">Characteristics</th>
                <th style="text-align:left; padding:0.4rem;">Navigation Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Bottom</strong> (widest)</td>
                <td>Small, fast, isolated unit tests. <strong>Many</strong> needed.</td>
                <td>500 unit tests for route algorithm, coordinate parsing, distance calc</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Middle</strong></td>
                <td>Integration/service tests. Moderate speed.</td>
                <td>50 API tests: Maps API + traffic service + geocoding service integration</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Top</strong> (narrowest)</td>
                <td>End-to-end, UI tests. Slow, complex. <strong>Few</strong> needed.</td>
                <td>10 E2E tests: open app → search "Tel Aviv Airport" → navigate → arrive</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:0.5rem;">Higher layer = <strong>lower granularity</strong>, <strong>more dependencies</strong>, <strong>slower execution</strong>.</p>
        </div>
      </section>

      <!-- ==================== TESTING QUADRANTS ==================== -->
      <section class="concept-block">
        <h3>5.1.7 Testing Quadrants (Brian Marick)</h3>
        <p>Tests organized on two axes: <strong>business vs technology facing</strong> and <strong>support the team vs critique the product</strong>.</p>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Q1 — Tech Facing + Support Team</h4>
            <p>Unit tests, component integration tests.</p>
            <p><em>Navigation:</em> Unit tests for Dijkstra's routing algorithm. <strong>Automated in CI.</strong></p>
          </div>
          <div class="grid-item">
            <h4>Q2 — Business Facing + Support Team</h4>
            <p>Functional tests, user story tests, API tests, simulations.</p>
            <p><em>Navigation:</em> "Search Tel Aviv → get route within 3s" acceptance test. <strong>Manual or automated.</strong></p>
          </div>
          <div class="grid-item">
            <h4>Q3 — Business Facing + Critique Product</h4>
            <p>Exploratory, usability, user acceptance testing.</p>
            <p><em>Navigation:</em> Real users test "Is the voice guidance clear in Hebrew?" <strong>Usually manual.</strong></p>
          </div>
          <div class="grid-item">
            <h4>Q4 — Tech Facing + Critique Product</h4>
            <p>Smoke tests, performance, security, reliability tests.</p>
            <p><em>Navigation:</em> Load test: 100K concurrent route requests. <strong>Often automated.</strong></p>
          </div>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the purpose of a test plan?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Documents objectives, resources, and processes. Ensures activities meet criteria, communicates with stakeholders, and demonstrates adherence to test policy/strategy.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between release planning and iteration planning from a testing perspective?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Release planning = big picture (whole release) — testable stories, risk analysis, test approach, effort estimates. Iteration planning = one sprint — detailed risk analysis, testability assessment, task breakdown, effort per task.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are entry/exit criteria called in Agile?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Entry criteria = <strong>Definition of Ready (DoR)</strong>. Exit criteria = <strong>Definition of Done (DoD)</strong>. Running out of time/budget can also be a valid exit criterion if stakeholders accept the risk.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name and classify all four estimation techniques.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Metrics-based:</strong> 1) Ratios (historical data), 2) Extrapolation (early measurements projected forward). <strong>Expert-based:</strong> 3) Wideband Delphi / Planning Poker (iterative consensus), 4) Three-point estimation (E = (a + 4m + b) / 6).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> Your team estimates testing "offline maps" feature. Optimistic = 4 days, most likely = 7 days, pessimistic = 16 days. What's the three-point estimate and standard deviation?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> E = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48/6 = <strong>8 days</strong>. SD = (16 - 4) / 6 = <strong>2 days</strong>. Estimate = 8 ± 2 days (6–10 days).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the three test case prioritization strategies?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Risk-based — highest risks first. 2) Coverage-based — highest coverage first (or additional coverage variant). 3) Requirements-based — most important requirements first. Dependencies and resource availability override priority.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Describe the test pyramid layers and their characteristics.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Bottom: many small, fast, isolated unit tests. Middle: integration/service tests, moderate count. Top: few complex, slow end-to-end tests. Higher = less granularity, more dependencies, slower.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> Your navigation app has 4 types of tests: unit tests for routing algorithms, acceptance tests against user stories, exploratory testing by real drivers, and load testing of the server. Which testing quadrant does each belong to?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Unit tests for routing → <strong>Q1</strong> (tech facing, support team). Acceptance tests → <strong>Q2</strong> (business facing, support team). Exploratory by drivers → <strong>Q3</strong> (business facing, critique product). Load testing → <strong>Q4</strong> (tech facing, critique product).</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

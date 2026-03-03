const e={title:"5.1 Test Planning",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>5.1.1 Purpose and Content of a Test Plan</h3>
        <p>A <strong>test plan</strong> describes the test objectives, resources, and processes for a test project. It:</p>
        <ul>
          <li>Documents the means and schedule for achieving <strong>test objectives</strong></li>
          <li>Helps ensure performed test activities will meet <strong>established criteria</strong></li>
          <li>Serves as a means of <strong>communication</strong> with team members and stakeholders</li>
          <li>Demonstrates testing will adhere to the existing <strong>test policy and test strategy</strong> (or explains deviations)</li>
        </ul>
        <p>Test planning forces testers to confront future challenges related to <strong>risks, schedules, people, tools, costs, effort</strong>, etc.</p>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Typical Test Plan Content</h4>
          <ul>
            <li><strong>Context of testing:</strong> Test scope, test objectives, test basis</li>
            <li><strong>Assumptions and constraints</strong> of the test project</li>
            <li><strong>Stakeholders:</strong> Roles, responsibilities, relevance to testing, hiring and training needs</li>
            <li><strong>Communication:</strong> Forms, frequency, documentation templates</li>
            <li><strong>Risk register:</strong> Product risks, project risks</li>
            <li><strong>Test approach:</strong> Test levels, test types, test techniques, test deliverables, entry/exit criteria, independence of testing, metrics, test data requirements, test environment requirements, deviations from test policy/strategy</li>
            <li><strong>Budget and schedule</strong></li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>5.1.2 Tester's Contribution to Iteration and Release Planning</h3>
        <p>In iterative SDLCs, typically <strong>two kinds of planning</strong> occur:</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Release Planning</h4>
            <p>Looks ahead to the <strong>release of a product</strong>. Defines and re-defines the product backlog, may refine larger user stories into smaller ones.</p>
            <p><strong>Tester contributions:</strong></p>
            <ul>
              <li>Writing testable user stories and acceptance criteria</li>
              <li>Project and quality risk analyses</li>
              <li>Estimating test effort for user stories</li>
              <li>Determining the test approach</li>
              <li>Planning testing for the release</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Iteration Planning</h4>
            <p>Looks ahead to the end of a <strong>single iteration</strong>. Concerned with the iteration backlog.</p>
            <p><strong>Tester contributions:</strong></p>
            <ul>
              <li>Detailed risk analysis of user stories</li>
              <li>Determining testability of user stories</li>
              <li>Breaking down user stories into tasks (especially testing tasks)</li>
              <li>Estimating test effort for all testing tasks</li>
              <li>Identifying and refining functional and non-functional aspects</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="concept-block">
        <h3>5.1.3 Entry Criteria and Exit Criteria</h3>
        <p><strong>Entry criteria</strong> define the preconditions for undertaking a given activity. If not met, the activity will likely be more difficult, time-consuming, costly, and riskier.</p>
        <p><strong>Exit criteria</strong> define what must be achieved to declare an activity completed.</p>
        <p><em>Both should be defined for each test level and will differ based on the test objectives.</em></p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Typical Entry Criteria</h4>
            <ul>
              <li>Availability of <strong>resources</strong> (people, tools, environments, test data, budget, time)</li>
              <li>Availability of <strong>testware</strong> (test basis, testable requirements, user stories, test cases)</li>
              <li>Initial <strong>quality level</strong> of a test object (e.g., all smoke tests have passed)</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Typical Exit Criteria</h4>
            <ul>
              <li>Measures of <strong>thoroughness</strong> (coverage levels, unresolved defects, defect density, failed test cases)</li>
              <li>Binary <strong>"yes/no" criteria</strong> (planned tests executed, static testing performed, all defects reported, regression tests automated)</li>
            </ul>
          </div>
        </div>

        <div class="concept-block" style="background: rgba(255,200,50,0.08); padding: 1rem; border-radius: 8px; border-left: 4px solid rgba(255,200,50,0.5); margin-top: 1rem;">
          <h4>⚠️ Important Notes</h4>
          <p><strong>Running out of time or budget</strong> can also be valid exit criteria. It can be acceptable to end testing under such circumstances if stakeholders have reviewed and accepted the risk.</p>
          <p>In <strong>Agile</strong>: Exit criteria = <strong>Definition of Done</strong>. Entry criteria = <strong>Definition of Ready</strong>.</p>
        </div>
      </div>

      <div class="concept-block">
        <h3>5.1.4 Estimation Techniques</h3>
        <p>Test effort estimation involves predicting the amount of work needed to meet test objectives. Estimates are based on <strong>assumptions</strong> and are always subject to <strong>estimation error</strong>. Estimating small tasks is usually more accurate than large ones — so large tasks can be <strong>decomposed</strong> into smaller ones.</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>1. Estimation Based on Ratios (Metrics-Based)</h4>
          <p>Figures are collected from <strong>previous projects</strong> to derive "standard" ratios. An organization's own historical data is the best source.</p>
          <p><strong>Example:</strong> If the previous project had a dev-to-test effort ratio of 3:2, and the current project expects 600 person-days of development effort, then test effort ≈ <strong>400 person-days</strong>.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>2. Extrapolation (Metrics-Based)</h4>
          <p>Measurements are made <strong>as early as possible</strong> in the current project. With enough observations, remaining work is approximated by extrapolating the data (using a mathematical model).</p>
          <p><em>Very suitable for iterative SDLCs — e.g., averaging test effort from the last three iterations.</em></p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>3. Wideband Delphi (Expert-Based)</h4>
          <p>An <strong>iterative</strong> technique where experts estimate effort <strong>in isolation</strong>. If estimates deviate beyond agreed boundaries, experts discuss and re-estimate. Process repeats until <strong>consensus is reached</strong>.</p>
          <p><strong>Planning Poker</strong> is a variant commonly used in Agile — estimates are made using cards with numbers representing effort size.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>4. Three-Point Estimation (Expert-Based)</h4>
          <p>Three estimates are made:</p>
          <ul>
            <li><strong>a</strong> = most optimistic</li>
            <li><strong>m</strong> = most likely</li>
            <li><strong>b</strong> = most pessimistic</li>
          </ul>
          <p><strong>Formula:</strong> E = (a + 4*m + b) / 6</p>
          <p><strong>Measurement error:</strong> SD = (b – a) / 6</p>
          <p><strong>Example:</strong> a=6, m=9, b=18 → E = (6 + 36 + 18) / 6 = <strong>10</strong>, SD = (18 – 6) / 6 = <strong>2</strong> → Final estimate: <strong>10 ± 2 person-hours</strong> (between 8 and 12).</p>
        </div>
      </div>

      <div class="concept-block">
        <h3>5.1.5 Test Case Prioritization</h3>
        <p>Test suites can be arranged in a <strong>test execution schedule</strong> defining the order in which they run. The most commonly used prioritization strategies:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <ul>
            <li><strong>Risk-based prioritization:</strong> Based on results of risk analysis. Test cases covering the <strong>most important risks</strong> are executed first.</li>
            <li><strong>Coverage-based prioritization:</strong> Based on coverage (e.g., statement coverage). Test cases achieving the <strong>highest coverage</strong> are executed first. Variant: <strong>additional coverage prioritization</strong> — each subsequent test case achieves the highest <em>additional</em> coverage.</li>
            <li><strong>Requirements-based prioritization:</strong> Based on priorities of requirements traced to test cases. Test cases related to the <strong>most important requirements</strong> are executed first.</li>
          </ul>
        </div>

        <p><strong>Practical considerations:</strong></p>
        <ul>
          <li>If test cases have <strong>dependencies</strong>, a lower-priority test case that is a dependency must be executed first.</li>
          <li>Test execution order must also consider <strong>availability of resources</strong> (tools, environments, people).</li>
        </ul>
      </div>

      <div class="concept-block">
        <h3>5.1.6 Test Pyramid</h3>
        <p>The <strong>test pyramid</strong> is a model showing that different tests have different <strong>granularity</strong>. It supports the team in test automation and test effort allocation.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Pyramid Characteristics (Bottom to Top)</h4>
          <ul>
            <li><strong>Bottom layer:</strong> Small, isolated, fast tests checking small pieces of functionality. <strong>Many</strong> are needed for reasonable coverage. (e.g., unit/component tests)</li>
            <li><strong>Middle layer:</strong> Integration-level tests. (e.g., service/component integration tests)</li>
            <li><strong>Top layer:</strong> Complex, high-level, end-to-end tests. <strong>Slower</strong> and check large pieces of functionality. <strong>Few</strong> are needed. (e.g., UI/end-to-end tests)</li>
          </ul>
          <p><em>The higher the layer: lower granularity, lower test isolation (more dependencies), higher execution time.</em></p>
        </div>
      </div>

      <div class="concept-block highlight-box">
        <h3>5.1.7 Testing Quadrants</h3>
        <p>The <strong>testing quadrants</strong> (Brian Marick) group test levels with appropriate test types, activities, techniques, and work products in Agile development. Tests can be <strong>business facing</strong> or <strong>technology facing</strong>, and they can <strong>support the team</strong> (guide development) or <strong>critique the product</strong> (measure behavior against expectations).</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Q1 — Technology Facing, Support the Team</h4>
            <p>Component tests, component integration tests.<br><em>Should be automated and included in CI.</em></p>
          </div>
          <div class="grid-item">
            <h4>Q2 — Business Facing, Support the Team</h4>
            <p>Functional tests, examples, user story tests, UX prototypes, API testing, simulations.<br><em>Check acceptance criteria. Manual or automated.</em></p>
          </div>
          <div class="grid-item">
            <h4>Q3 — Business Facing, Critique the Product</h4>
            <p>Exploratory testing, usability testing, user acceptance testing.<br><em>User-oriented and often manual.</em></p>
          </div>
          <div class="grid-item">
            <h4>Q4 — Technology Facing, Critique the Product</h4>
            <p>Smoke tests, non-functional tests (except usability).<br><em>Often automated.</em></p>
          </div>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the purpose of a test plan?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A test plan describes the test objectives, resources, and processes for a test project. It documents the means and schedule for achieving test objectives, helps ensure test activities meet established criteria, serves as communication with stakeholders, and demonstrates adherence to test policy and strategy.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between release planning and iteration planning from a testing perspective?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Release planning looks ahead to the product release — testers participate in writing testable user stories, risk analyses, estimating test effort, determining the test approach, and planning testing for the release. Iteration planning looks ahead to the end of a single iteration — testers perform detailed risk analysis, determine testability, break down user stories into testing tasks, and estimate effort for all testing tasks.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between entry criteria and exit criteria? What are they called in Agile?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Entry criteria define the preconditions for undertaking an activity. Exit criteria define what must be achieved to declare an activity completed. In Agile, exit criteria are called Definition of Done, and entry criteria are called Definition of Ready.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name the four estimation techniques and classify them as metrics-based or expert-based.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Metrics-based: 1) Estimation based on ratios (using historical data and standard ratios), 2) Extrapolation (using early measurements and mathematical models). Expert-based: 3) Wideband Delphi (iterative expert estimation until consensus, Planning Poker variant), 4) Three-point estimation (optimistic/likely/pessimistic with formula E = (a + 4m + b) / 6).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the three most common test case prioritization strategies?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Risk-based prioritization — test cases covering the most important risks first. 2) Coverage-based prioritization — test cases achieving the highest coverage first. 3) Requirements-based prioritization — test cases related to the most important requirements first.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> How does the test pyramid model relate to test granularity and test execution time?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The higher the layer in the pyramid, the lower the test granularity, the lower the test isolation (more dependencies), and the higher the execution time. Bottom-layer tests are small, fast, and isolated (many needed). Top-layer tests are complex, slow, end-to-end (few needed).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Describe the four testing quadrants and what each contains.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Q1 (technology facing, support team): component and integration tests, automated in CI. Q2 (business facing, support team): functional tests, user story tests, API testing, manual or automated. Q3 (business facing, critique product): exploratory, usability, and acceptance testing, often manual. Q4 (technology facing, critique product): smoke tests and non-functional tests (except usability), often automated.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

import audio14 from './audio/14audio.m4a';

export const content = {
  title: "1.4 Test Activities, Testware and Test Roles",
  audioSrc: audio14,
  content: `
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>Testing is context dependent, but at a high level, there are <strong>common sets of test activities</strong> without which testing is less likely to achieve its objectives. These activities form a <strong>test process</strong>.</p>
        <p>The test process can be tailored to a given situation based on various factors. Which test activities are included, how they are implemented, and when they occur is normally decided as part of <strong>test planning</strong> (see Section 5.1).</p>
      </div>

      <div class="concept-block">
        <h3>1.4.1 Test Activities and Tasks</h3>
        <p>A test process usually consists of the main groups of activities described below. Although many appear to follow a logical sequence, they are often implemented <strong>iteratively or in parallel</strong>. These activities usually need to be tailored to the system and the project.</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Test Planning</h4>
          <p>Defining the <strong>test objectives</strong> and then selecting an approach that best achieves those objectives within the constraints imposed by the overall context.</p>
          <p><em>See Section 5.1 for more details.</em></p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Test Monitoring and Test Control</h4>
          <ul>
            <li><strong>Test Monitoring:</strong> Ongoing checking of all test activities and comparing actual progress against the plan.</li>
            <li><strong>Test Control:</strong> Taking the actions necessary to meet the test objectives.</li>
          </ul>
          <p><em>See Section 5.3 for more details.</em></p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Test Analysis</h4>
          <p>Analyzing the <strong>test basis</strong> to identify testable features and define/prioritize associated <strong>test conditions</strong>, taking related risks and risk levels into account. The test basis and test object are also evaluated for defects and testability.</p>
          <p>Test analysis is often supported by <strong>test techniques</strong> (see Chapter 4).</p>
          <p><strong>Key question answered:</strong> <em>"What to test?"</em> — in terms of measurable coverage criteria.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Test Design</h4>
          <p>Elaborating test conditions into <strong>test cases</strong> and other testware (e.g., test charters). This often involves identifying <strong>coverage items</strong> to guide test case inputs. It also includes defining test data requirements, designing the test environment, and identifying necessary infrastructure and tools.</p>
          <p><strong>Key question answered:</strong> <em>"How to test?"</em></p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Test Implementation</h4>
          <p>Creating or acquiring the testware necessary for test execution (e.g., test data). Activities include:</p>
          <ul>
            <li>Organizing test cases into <strong>test procedures</strong>, often assembled into <strong>test suites</strong>.</li>
            <li>Creating manual and automated <strong>test scripts</strong>.</li>
            <li>Prioritizing and arranging test procedures within a <strong>test execution schedule</strong>.</li>
            <li>Building and verifying the <strong>test environment</strong> is set up correctly.</li>
          </ul>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Test Execution</h4>
          <p>Running the tests in accordance with the test execution schedule (<strong>test runs</strong>). This may be manual or automated, and can take many forms including continuous testing or pair testing sessions.</p>
          <ul>
            <li>Actual test results are compared with <strong>expected results</strong>.</li>
            <li>Test results are <strong>logged</strong>.</li>
            <li>Anomalies are <strong>analyzed</strong> to identify their likely causes.</li>
            <li>Anomalies are <strong>reported</strong> based on the failures observed (see Section 5.5).</li>
          </ul>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Test Completion</h4>
          <p>Usually occurs at <strong>project milestones</strong> (e.g., release, end of iteration, test level completion). Activities include:</p>
          <ul>
            <li>Creating <strong>change requests</strong> or product backlog items for unresolved defects.</li>
            <li>Identifying and archiving useful testware for future use.</li>
            <li>Shutting down the test environment to an agreed state.</li>
            <li>Analyzing test activities to identify <strong>lessons learned</strong> and improvements.</li>
            <li>Creating and communicating a <strong>test completion report</strong> to stakeholders.</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>1.4.2 Test Process in Context</h3>
        <p>Testing is <strong>not performed in isolation</strong>. Test activities are an integral part of the development processes and are funded by stakeholders. The way testing is carried out depends on a number of <strong>contextual factors</strong>, including:</p>
        <ul>
          <li><strong>Stakeholders:</strong> Needs, expectations, requirements, willingness to cooperate.</li>
          <li><strong>Team members:</strong> Skills, knowledge, level of experience, availability, training needs.</li>
          <li><strong>Business domain:</strong> Criticality of the test object, identified risks, market needs, specific legal regulations.</li>
          <li><strong>Technical factors:</strong> Type of software, product architecture, technology used.</li>
          <li><strong>Project constraints:</strong> Scope, time, budget, resources.</li>
          <li><strong>Organizational factors:</strong> Organizational structure, existing policies, practices used.</li>
          <li><strong>Software development lifecycle:</strong> Engineering practices, development methods.</li>
          <li><strong>Tools:</strong> Availability, usability, compliance.</li>
        </ul>
        <p>These factors impact many test-related issues, including: test strategy, test techniques used, degree of test automation, required level of coverage, level of detail of testware, test reporting, etc.</p>
      </div>

      <div class="concept-block">
        <h3>1.4.3 Testware</h3>
        <p><strong>Testware</strong> is created as output work products from the test activities. There is significant variation in how organizations produce, shape, name, organize, and manage these work products. Proper <strong>configuration management</strong> (see Section 5.4) ensures consistency and integrity.</p>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Testware by Activity</h4>
          <ul>
            <li><strong>Test Planning:</strong> Test plan, test schedule, risk register, entry criteria, and exit criteria.</li>
            <li><strong>Test Monitoring & Control:</strong> Test progress reports, documentation of control directives, risk information.</li>
            <li><strong>Test Analysis:</strong> (Prioritized) test conditions (e.g., acceptance criteria), defect reports regarding defects in the test basis.</li>
            <li><strong>Test Design:</strong> (Prioritized) test cases, test charters, coverage items, test data requirements, and test environment requirements.</li>
            <li><strong>Test Implementation:</strong> Test procedures, manual and automated test scripts, test suites, test data, test execution schedule, and test environment items (stubs, drivers, simulators, service virtualizations).</li>
            <li><strong>Test Execution:</strong> Test logs and defect reports.</li>
            <li><strong>Test Completion:</strong> Test completion report, action items for improvement, documented lessons learned, and change requests.</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>1.4.4 Traceability between the Test Basis and Testware</h3>
        <p>To implement effective test monitoring and control, it is important to establish and maintain <strong>traceability</strong> throughout the test process between:</p>
        <ul>
          <li>Test basis elements</li>
          <li>Testware associated with those elements (test conditions, risks, test cases)</li>
          <li>Test results</li>
          <li>Defects</li>
        </ul>
        <p>Accurate traceability supports <strong>coverage evaluation</strong>. Coverage criteria can function as <strong>key performance indicators (KPIs)</strong> that show to what extent test objectives have been achieved. For example:</p>
        <ul>
          <li>Traceability of test cases to requirements can verify that requirements are <strong>covered</strong> by test cases.</li>
          <li>Traceability of test results to risks can evaluate the level of <strong>residual risk</strong> in a test object.</li>
        </ul>
        <p>Good traceability also:</p>
        <ul>
          <li>Determines the <strong>impact of changes</strong>.</li>
          <li>Facilitates <strong>audits</strong>.</li>
          <li>Helps meet <strong>IT governance criteria</strong>.</li>
          <li>Makes test progress and completion reports more <strong>easily understandable</strong>.</li>
          <li>Assists in communicating technical aspects of testing to stakeholders.</li>
          <li>Provides information to assess <strong>product quality, process capability, and project progress</strong> against business goals.</li>
        </ul>
      </div>

      <div class="concept-block highlight-box">
        <h3>1.4.5 Roles in Testing</h3>
        <p>Two principal roles in testing are covered in this syllabus. The activities and tasks assigned depend on the project/product context, the skills of the people, and the organization.</p>

        <div class="comparison-grid">
          <div class="grid-item">
            <h4>Test Management Role</h4>
            <p><strong>Responsibility:</strong> Overall responsibility for the test process, test team, and leadership of testing activities.<br>
            <strong>Main activities:</strong> Test planning, test monitoring, test control, and test completion.<br>
            <strong>Who:</strong> Can be a team leader, test manager, development manager, or in Agile — shared among the team. Tasks spanning multiple teams may be performed by test managers outside the development team.</p>
          </div>
          <div class="grid-item">
            <h4>Testing Role</h4>
            <p><strong>Responsibility:</strong> Overall responsibility for the engineering (technical) aspect of testing.<br>
            <strong>Main activities:</strong> Test analysis, test design, test implementation, and test execution.<br>
            <strong>Who:</strong> Different people may take on this role at different times. One person can also take on <em>both</em> the testing and test management roles simultaneously.</p>
          </div>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> Which test activity answers the question "What to test?" and which answers "How to test?"
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Test Analysis answers "What to test?" — it identifies testable features and defines/prioritizes test conditions in terms of measurable coverage criteria. Test Design answers "How to test?" — it elaborates test conditions into test cases, defines test data requirements, and designs the test environment.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between test monitoring and test control?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Test monitoring involves the ongoing checking of all test activities and comparing actual progress against the plan. Test control involves taking the actions necessary to meet the test objectives. Monitoring is observation; control is action.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> During which test activity are test cases organized into test suites and a test execution schedule is created?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Test Implementation. This is where test cases are organized into test procedures (often assembled into test suites), manual and automated test scripts are created, and test procedures are prioritized and arranged within a test execution schedule.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 4 contextual factors that affect how testing is carried out.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any four of the following: Stakeholders (needs, expectations), Team members (skills, experience), Business domain (criticality, risks, regulations), Technical factors (software type, architecture), Project constraints (scope, time, budget), Organizational factors (policies, structure), Software development lifecycle (methods, practices), and Tools (availability, usability, compliance).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is testware, and can you give examples from at least 3 different test activities?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Testware is the output work products created from test activities. Examples: Test Planning produces the test plan, test schedule, and risk register. Test Design produces test cases, test charters, and coverage items. Test Execution produces test logs and defect reports. Test Completion produces the test completion report and documented lessons learned.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is traceability between the test basis and testware important?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Traceability supports coverage evaluation, determines the impact of changes, facilitates audits, helps meet IT governance criteria, makes reports more understandable, helps communicate technical aspects to stakeholders, and provides information to assess product quality, process capability, and project progress against business goals.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the two principal roles in testing, and what activities does each focus on?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The Test Management Role focuses on test planning, test monitoring, test control, and test completion — it's about leadership and oversight. The Testing Role focuses on test analysis, test design, test implementation, and test execution — it's about the engineering (technical) side. One person can perform both roles simultaneously.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> During test completion, what happens to unresolved defects?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> For any unresolved defects, change requests or product backlog items are created. This ensures they are tracked and addressed in future iterations or releases rather than being lost or forgotten.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};


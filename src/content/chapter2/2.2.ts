export const content = {
  title: "2.2 Test Levels and Test Types",
  content: `
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p><strong>Test levels</strong> are groups of test activities that are organized and managed together. Each test level is an instance of the test process, performed in relation to software at a given phase of development — from individual components to complete systems or systems of systems.</p>
        <p><strong>Test types</strong> are groups of test activities related to specific quality characteristics, and most of those activities can be performed at every test level.</p>
        <p>In sequential SDLC models, test levels are often defined such that the <strong>exit criteria</strong> of one level are part of the <strong>entry criteria</strong> for the next. In iterative models, this may not apply. Test levels may overlap in time.</p>
      </div>

      <div class="concept-block">
        <h3>2.2.1 Test Levels</h3>
        <p>The following <strong>five test levels</strong> are described in this syllabus:</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>1. Component Testing (Unit Testing)</h4>
          <p>Focuses on testing components <strong>in isolation</strong>. It often requires specific support, such as test harnesses or unit test frameworks. Normally performed by <strong>developers</strong> in their development environments.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>2. Component Integration Testing (Unit Integration Testing)</h4>
          <p>Focuses on testing the <strong>interfaces and interactions between components</strong>. Heavily dependent on the integration strategy (e.g., bottom-up, top-down, or big-bang).</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>3. System Testing</h4>
          <p>Focuses on the <strong>overall behavior and capabilities</strong> of an entire system or product, including functional testing of end-to-end tasks and non-functional testing of quality characteristics. For some non-functional characteristics (e.g., usability), it is preferable to test on a complete system in a <strong>representative test environment</strong>. May be performed by an <strong>independent test team</strong> and is related to system specifications.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>4. System Integration Testing</h4>
          <p>Focuses on testing the <strong>interfaces of the system under test</strong> with other systems and external services. Requires suitable test environments, preferably <strong>similar to the operational environment</strong>.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>5. Acceptance Testing</h4>
          <p>Focuses on <strong>validation</strong> and demonstrating <strong>readiness for deployment</strong> — meaning the system fulfills the user's business needs. Ideally performed by <strong>the intended users</strong>.</p>
          <p><strong>Main forms:</strong></p>
          <ul>
            <li>User Acceptance Testing (UAT)</li>
            <li>Operational Acceptance Testing</li>
            <li>Contractual Acceptance Testing</li>
            <li>Regulatory Acceptance Testing</li>
            <li>Alpha Testing and Beta Testing</li>
          </ul>
        </div>

        <div class="concept-block" style="margin-top: 1rem; background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px;">
          <h4>Distinguishing Attributes Between Test Levels</h4>
          <p>Test levels are distinguished by (non-exhaustive):</p>
          <ul>
            <li>Test object</li>
            <li>Test objectives</li>
            <li>Test basis</li>
            <li>Defects and failures</li>
            <li>Approach and responsibilities</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>2.2.2 Test Types</h3>
        <p>The following <strong>four test types</strong> are addressed in this syllabus:</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Functional Testing</h4>
            <p>Evaluates the <strong>functions</strong> a component or system should perform — the <strong>"what"</strong> the test object should do.<br>
            <strong>Objective:</strong> Checking functional completeness, functional correctness, and functional appropriateness.</p>
          </div>
          <div class="grid-item">
            <h4>Non-Functional Testing</h4>
            <p>Evaluates attributes <strong>other than functional characteristics</strong> — <strong>"how well"</strong> the system behaves.<br>
            <strong>Objective:</strong> Checking non-functional quality characteristics.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>ISO/IEC 25010 Non-Functional Quality Characteristics</h4>
          <ul>
            <li><strong>Performance efficiency</strong></li>
            <li><strong>Compatibility</strong></li>
            <li><strong>Usability</strong> (also known as interaction capability)</li>
            <li><strong>Reliability</strong></li>
            <li><strong>Security</strong></li>
            <li><strong>Maintainability</strong></li>
            <li><strong>Portability</strong> (also known as flexibility)</li>
            <li><strong>Safety</strong></li>
          </ul>
          <p><em>Many non-functional tests are derived from functional tests — they use the same functional tests but check that a non-functional constraint is satisfied (e.g., a function performs within a specified time). Late discovery of non-functional defects can pose a <strong>serious threat</strong> to project success.</em></p>
        </div>

        <div class="comparison-grid">
          <div class="grid-item">
            <h4>Black-Box Testing</h4>
            <p><strong>Basis:</strong> Specification-based.<br>
            Derives tests from documentation <strong>not related to internal structure</strong>.<br>
            <strong>Objective:</strong> Checking the system's behavior against its specifications.</p>
          </div>
          <div class="grid-item">
            <h4>White-Box Testing</h4>
            <p><strong>Basis:</strong> Structure-based.<br>
            Derives tests from the system's <strong>implementation or internal structure</strong> (code, architecture, workflows, data flows).<br>
            <strong>Objective:</strong> Covering the underlying structure to an acceptable level.</p>
          </div>
        </div>

        <p style="margin-top: 1rem;"><em>All four test types can be applied to <strong>all test levels</strong>, although the focus will be different at each level.</em></p>
      </div>

      <div class="concept-block highlight-box">
        <h3>2.2.3 Confirmation Testing and Regression Testing</h3>
        <p>Changes are typically made to enhance (new feature) or fix (remove a defect) software. Testing should then include both:</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Confirmation Testing</h4>
            <p>Confirms that an original <strong>defect has been successfully fixed</strong>. Ways to confirm:</p>
            <ul>
              <li>Execute all tests that previously <strong>failed due to the defect</strong>.</li>
              <li>Add <strong>new tests</strong> to cover changes needed to fix the defect.</li>
              <li>At minimum: exercise the test steps that should reproduce the failure and check that it <strong>no longer occurs</strong>.</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Regression Testing</h4>
            <p>Confirms that no <strong>adverse consequences</strong> have been caused by a change (including a fix already confirmation tested). Adverse effects could affect:</p>
            <ul>
              <li>The <strong>same component</strong> where the change was made.</li>
              <li><strong>Other components</strong> in the same system.</li>
              <li>Other <strong>connected systems</strong>.</li>
              <li>The <strong>environment</strong> itself.</li>
            </ul>
          </div>
        </div>

        <p style="margin-top: 1rem;"><strong>Key points about regression testing:</strong></p>
        <ul>
          <li>It is advisable to first perform an <strong>impact analysis</strong> to recognize the extent of regression testing needed.</li>
          <li>Regression test suites are run many times and generally <strong>increase with each iteration/release</strong>, making it a <strong>strong candidate for automation</strong>.</li>
          <li>Test automation should start <strong>early in the project</strong>.</li>
          <li>Where <strong>CI</strong> is used (e.g., DevOps), it is good practice to include automated regression tests.</li>
          <li>Both confirmation and regression testing are needed on <strong>all test levels</strong> if defects are fixed or changes are made.</li>
        </ul>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> List the five test levels from lowest to highest.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Component testing (unit testing), 2) Component integration testing (unit integration testing), 3) System testing, 4) System integration testing, 5) Acceptance testing.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the key difference between functional and non-functional testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Functional testing evaluates what the test object should do (its functions) — checking functional completeness, correctness, and appropriateness. Non-functional testing evaluates how well the system behaves — checking quality characteristics like performance, usability, reliability, security, etc.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between black-box testing and white-box testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Black-box testing is specification-based — it derives tests from documentation without considering internal structure, checking behavior against specifications. White-box testing is structure-based — it derives tests from the system's implementation or internal structure (code, architecture, workflows), aiming to cover the underlying structure to an acceptable level.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between confirmation testing and regression testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Confirmation testing confirms that a specific defect has been successfully fixed (the original failure no longer occurs). Regression testing confirms that a change (including a confirmed fix) has not caused adverse consequences elsewhere — in the same component, other components, connected systems, or the environment.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is regression testing considered a strong candidate for automation?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Regression test suites are run many times and generally the number of regression test cases increases with each iteration or release. Automating these tests saves time and effort. In CI/DevOps environments, automated regression tests provide fast feedback on whether changes adversely affect existing code.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 5 non-functional quality characteristics from ISO/IEC 25010.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any five of: Performance efficiency, Compatibility, Usability (interaction capability), Reliability, Security, Maintainability, Portability (flexibility), Safety.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Who typically performs acceptance testing, and what is its main focus?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Acceptance testing should ideally be performed by the intended users. Its main focus is on validation and demonstrating readiness for deployment — confirming that the system fulfills the user's business needs. Main forms include UAT, operational acceptance testing, contractual and regulatory acceptance testing, and alpha/beta testing.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What attributes are used to distinguish between different test levels?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Test levels are distinguished by: test object, test objectives, test basis, defects and failures, and approach and responsibilities. These help avoid overlapping of test activities between levels.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};


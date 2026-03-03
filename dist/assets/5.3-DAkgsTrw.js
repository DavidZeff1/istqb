const e={title:"5.3 Test Monitoring, Test Control and Test Completion",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>Three related activities work together to manage testing effectively:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <ul>
            <li><strong>Test monitoring:</strong> Gathering information about testing to assess progress and measure whether exit criteria or associated test tasks are satisfied (e.g., coverage of product risks, requirements, acceptance criteria).</li>
            <li><strong>Test control:</strong> Using monitoring information to provide guidance and <strong>corrective actions</strong> for effective and efficient testing.</li>
            <li><strong>Test completion:</strong> Collecting data from completed test activities to consolidate experience, testware, and relevant information.</li>
          </ul>
        </div>

        <p><strong>Examples of control directives:</strong></p>
        <ul>
          <li><strong>Reprioritizing tests</strong> when an identified risk becomes an issue</li>
          <li><strong>Re-evaluating</strong> whether a test item meets entry/exit criteria due to rework</li>
          <li><strong>Adjusting the test schedule</strong> to address a delay in test environment delivery</li>
          <li><strong>Adding new resources</strong> when and where needed</li>
        </ul>

        <p><strong>Test completion</strong> occurs at project milestones: when a test level is completed, an agile iteration finishes, a test project is completed (or cancelled), a software system is released, or a maintenance release is completed.</p>
      </div>

      <div class="concept-block">
        <h3>5.3.1 Metrics Used in Testing</h3>
        <p>Test metrics show progress against the planned schedule and budget, the current quality of the test object, and the effectiveness of test activities. Common test metrics include:</p>

        <div class="highlight-box">
          <ul>
            <li><strong>Project progress metrics:</strong> Task completion, resource usage, test effort</li>
            <li><strong>Test progress metrics:</strong> Test case implementation progress, test environment preparation progress, number of test cases run/not run, passed/failed, test execution time</li>
            <li><strong>Product quality metrics:</strong> Availability, response time, mean time to failure</li>
            <li><strong>Defect metrics:</strong> Number and priorities of defects found/fixed, defect density, defect detection percentage</li>
            <li><strong>Risk metrics:</strong> Residual risk level</li>
            <li><strong>Coverage metrics:</strong> Requirements coverage, code coverage</li>
            <li><strong>Cost metrics:</strong> Cost of testing, organizational cost of quality</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>5.3.2 Purpose, Content and Audience for Test Reports</h3>
        <p>Test reporting summarizes and communicates test information during and after testing. There are two main types:</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Test Progress Reports</h4>
            <p>Support <strong>ongoing test control</strong>. Generated regularly (e.g., daily, weekly). Include:</p>
            <ul>
              <li>Testing period</li>
              <li>Test progress (ahead/behind schedule), notable deviations</li>
              <li>Impediments for testing and workarounds</li>
              <li>Test metrics</li>
              <li>New and changed risks</li>
              <li>Testing planned for the next period</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Test Completion Reports</h4>
            <p>Prepared when a project, test level, or test type is complete. Include:</p>
            <ul>
              <li>Test summary</li>
              <li>Testing and product quality evaluation (against original test plan)</li>
              <li>Deviations from the test plan</li>
              <li>Testing impediments and workarounds</li>
              <li>Test metrics based on progress reports</li>
              <li>Unmitigated risks, unfixed defects</li>
              <li>Lessons learned</li>
            </ul>
          </div>
        </div>

        <p style="margin-top: 1rem;"><em>Different audiences require different information — <strong>reporting to the same team</strong> is frequent and informal, while <strong>completion reporting</strong> follows a set template and occurs once. Communication should be <strong>tailored</strong> to the audience.</em></p>
      </div>

      <div class="concept-block highlight-box">
        <h3>5.3.3 Communicating the Status of Testing</h3>
        <p>The best means of communicating test status varies. Options include:</p>
        <ul>
          <li><strong>Verbal communication</strong> with team members and stakeholders</li>
          <li><strong>Dashboards</strong> (CI/CD dashboards, task boards, burn-down charts)</li>
          <li><strong>Electronic communication channels</strong> (email, chat)</li>
          <li><strong>Online documentation</strong></li>
          <li><strong>Formal test reports</strong></li>
        </ul>
        <p><em>More formal communication is appropriate for <strong>distributed teams</strong> where direct face-to-face interaction is not always possible. Different stakeholders are interested in different types of information, so communication should be <strong>tailored accordingly</strong>.</em></p>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the difference between test monitoring, test control, and test completion?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Test monitoring gathers information about testing to assess progress and measure whether exit criteria are satisfied. Test control uses that information to provide corrective actions for effective testing. Test completion collects data from completed test activities to consolidate experience, testware, and relevant information at project milestones.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 5 categories of common test metrics.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any five of: Project progress metrics, test progress metrics, product quality metrics, defect metrics, risk metrics, coverage metrics, and cost metrics.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between a test progress report and a test completion report?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Test progress reports support ongoing test control and are generated regularly (daily, weekly). They include test progress, impediments, metrics, and risks. Test completion reports are prepared when a project, test level, or test type is complete. They include a test summary, quality evaluation against the original test plan, deviations, unmitigated risks, unfixed defects, and lessons learned.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Give examples of control directives in test control.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Reprioritizing tests when an identified risk becomes an issue, re-evaluating whether a test item meets entry/exit criteria due to rework, adjusting the test schedule for delays in test environment delivery, and adding new resources when needed.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What options exist for communicating the status of testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Verbal communication, dashboards (CI/CD, task boards, burn-down charts), electronic communication channels (email, chat), online documentation, and formal test reports. More formal communication is appropriate for distributed teams. Communication should be tailored to the audience.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

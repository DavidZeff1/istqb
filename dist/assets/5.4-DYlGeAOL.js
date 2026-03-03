const e={title:"5.4 Configuration Management",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>In testing, <strong>configuration management (CM)</strong> provides a discipline for identifying, controlling, and tracking work products such as:</p>
        <ul>
          <li>Test plans, test strategies</li>
          <li>Test conditions, test cases, test scripts</li>
          <li>Test results, test logs, and test reports</li>
        </ul>
        <p>These are tracked as <strong>configuration items</strong>.</p>
      </div>

      <div class="concept-block">
        <h3>Baselines and Change Control</h3>
        <p>For a complex configuration item (e.g., a test environment), CM records the items it consists of, their <strong>relationships</strong>, and <strong>versions</strong>.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Key Concept: Baselines</h4>
          <ul>
            <li>If a configuration item is <strong>approved for testing</strong>, it becomes a <strong>baseline</strong>.</li>
            <li>A baseline can only be changed through a <strong>formal change control process</strong>.</li>
            <li>CM keeps a record of changed configuration items when a <strong>new baseline</strong> is created.</li>
            <li>It is possible to <strong>revert to a previous baseline</strong> to reproduce previous test results.</li>
          </ul>
        </div>
      </div>

      <div class="concept-block highlight-box">
        <h3>CM's Support for Testing</h3>
        <p>To properly support testing, CM ensures:</p>
        <ul>
          <li>All configuration items, including <strong>test items</strong> (individual parts of the test object), are <strong>uniquely identified</strong>, <strong>version controlled</strong>, <strong>tracked for changes</strong>, and <strong>related to other configuration items</strong> so that traceability can be maintained throughout the test process.</li>
          <li>All identified documentation and software items are <strong>referenced unambiguously</strong> in testware.</li>
        </ul>
        <p style="margin-top: 1rem;"><em>Continuous integration, continuous delivery, continuous deployment and the associated testing are typically implemented as part of an automated <strong>DevOps pipeline</strong>, in which automated CM is normally included.</em></p>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the purpose of configuration management in testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> CM provides a discipline for identifying, controlling, and tracking work products (test plans, strategies, conditions, cases, scripts, results, logs, and reports) as configuration items. It ensures traceability and version control throughout the test process.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is a baseline in the context of CM, and how can it be changed?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A baseline is a configuration item that has been approved for testing. Once a configuration item becomes a baseline, it can only be changed through a formal change control process. CM keeps a record of changes when a new baseline is created, and it is possible to revert to a previous baseline to reproduce previous test results.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What two things does CM ensure to properly support testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) All configuration items (including test items) are uniquely identified, version controlled, tracked for changes, and related to other configuration items so traceability is maintained. 2) All identified documentation and software items are referenced unambiguously in testware.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

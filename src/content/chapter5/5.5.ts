export const content = {
  title: "5.5 Defect Management",
  content: `
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>Since a major test objective is to <strong>find defects</strong>, an established defect management process is essential. Reported anomalies may turn out to be <strong>real defects</strong> or something else (e.g., false-positive results, change requests) — this is resolved during the process of dealing with defect reports.</p>
        <p>Anomalies may be reported during <strong>any phase of the SDLC</strong>. It is advisable to handle defects from <strong>static testing</strong> (especially static analysis) in a similar way.</p>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Minimum Defect Management Process</h4>
          <ul>
            <li>A <strong>workflow</strong> for handling individual defects/anomalies from discovery to closure</li>
            <li><strong>Rules for classification</strong> of defects</li>
          </ul>
          <p><strong>Typical workflow activities:</strong></p>
          <ol>
            <li><strong>Log</strong> the reported anomaly</li>
            <li><strong>Analyze and classify</strong> it</li>
            <li><strong>Decide on a response</strong> (fix it or keep it as-is)</li>
            <li><strong>Close</strong> the defect report</li>
          </ol>
          <p><em>The process must be followed by <strong>all involved stakeholders</strong>.</em></p>
        </div>
      </div>

      <div class="concept-block">
        <h3>Objectives of Defect Reports</h3>
        <p>Typical defect reports have the following objectives:</p>
        <div class="highlight-box">
          <ul>
            <li>Provide those responsible for handling and resolving reported defects with <strong>sufficient information to resolve the issue</strong></li>
            <li>Provide a means of <strong>tracking the quality</strong> of the work product</li>
            <li>Provide ideas for <strong>improvement</strong> of the development and test process</li>
          </ul>
        </div>
      </div>

      <div class="concept-block highlight-box">
        <h3>Content of a Defect Report (Dynamic Testing)</h3>
        <p>A defect report logged during dynamic testing typically includes:</p>
        <ul>
          <li><strong>Unique identifier</strong></li>
          <li><strong>Title</strong> with a short summary of the anomaly</li>
          <li><strong>Date</strong> when the anomaly was observed, issuing organization, and <strong>author</strong> (including their role)</li>
          <li><strong>Identification</strong> of the test object and test environment</li>
          <li><strong>Context of the defect:</strong> Test case being run, test activity being performed, SDLC phase, and other relevant information (test technique, checklist, or test data being used)</li>
          <li><strong>Description of the failure</strong> to enable reproduction and resolution — including test steps, relevant test logs, database dumps, screenshots, or recordings</li>
          <li><strong>Expected results</strong> and <strong>actual results</strong></li>
          <li><strong>Severity</strong> of the defect (degree of impact on stakeholders' interests or requirements)</li>
          <li><strong>Priority</strong> to fix</li>
          <li><strong>Status</strong> of the defect (e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected)</li>
          <li><strong>References</strong> (e.g., to the test case)</li>
        </ul>
        <p style="margin-top: 1rem;"><em>Some data may be <strong>automatically included</strong> when using defect management tools (e.g., identifier, date, author, initial status).</em></p>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the minimum a defect management process should include?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> At a minimum, a defect management process includes a workflow for handling individual defects or anomalies from their discovery to their closure, and rules for their classification. The workflow typically comprises logging, analyzing and classifying, deciding on a response, and closing the defect report.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Are all reported anomalies necessarily defects?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No. Reported anomalies may turn out to be real defects or something else, such as false-positive results or change requests. This is resolved during the process of dealing with the defect reports.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the three objectives of a defect report?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Provide those responsible for handling defects with sufficient information to resolve the issue. 2) Provide a means of tracking the quality of the work product. 3) Provide ideas for improvement of the development and test process.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between severity and priority in a defect report?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Severity refers to the degree of impact of the defect on the interests of stakeholders or requirements — how serious the defect is. Priority refers to how urgently the defect needs to be fixed. A defect can be high severity but low priority (e.g., a serious defect in a rarely used feature) or low severity but high priority (e.g., a cosmetic issue on the login page).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 6 fields typically included in a defect report.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any six of: Unique identifier, title, date/author, identification of test object and environment, context of the defect, description of the failure (steps to reproduce), expected and actual results, severity, priority, status, and references.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};

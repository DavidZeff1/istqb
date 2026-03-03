export const content = {
  title: "6.2 Benefits and Risks of Test Automation",
  content: `
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>Simply acquiring a tool <strong>does not guarantee success</strong>. Each new tool requires effort for <strong>introduction, maintenance, and training</strong> to achieve real and lasting benefits. There are also risks that need analysis and mitigation.</p>
      </div>

      <div class="concept-block">
        <h3>Potential Benefits of Test Automation</h3>
        <div class="comparison-grid">
          <div class="grid-item">
            <h4>✅ Benefits</h4>
            <ul>
              <li><strong>Time saved</strong> by reducing repetitive manual work (e.g., regression tests, re-entering test data, comparing expected vs actual results, checking coding standards).</li>
              <li><strong>Prevention of simple human errors</strong> through greater consistency and repeatability (e.g., tests consistently derived from requirements, test data created systematically, tests executed in the same order with the same frequency).</li>
              <li><strong>More objective assessment</strong> (e.g., coverage) and providing measures too complicated for humans to determine.</li>
              <li><strong>Easier access to information</strong> about testing to support test management and reporting (e.g., statistics, graphs, aggregated data about progress, failure rates, execution duration).</li>
              <li><strong>Reduced test execution times</strong> providing earlier defect detection, faster feedback, and faster time to market.</li>
              <li><strong>More time for testers</strong> to design new, deeper, and more effective tests.</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>⚠️ Risks</h4>
            <ul>
              <li><strong>Unrealistic expectations</strong> about the benefits of a tool (including functionality and ease of use).</li>
              <li><strong>Inaccurate estimations</strong> of time, costs, and effort required to introduce a tool, maintain test scripts, and change the existing manual test process.</li>
              <li><strong>Using a test tool when manual testing is more appropriate.</strong></li>
              <li><strong>Relying on a tool too much</strong> — e.g., ignoring the need for human critical thinking.</li>
              <li><strong>Dependency on the tool vendor</strong> — vendor may go out of business, retire the tool, sell it, or provide poor support (responses, upgrades, defect fixes).</li>
              <li><strong>Using open-source software</strong> that may be abandoned (no further updates) or require frequent internal component updates.</li>
              <li><strong>Tool incompatibility</strong> with the development platform.</li>
              <li><strong>Choosing an unsuitable tool</strong> that does not comply with regulatory requirements and/or safety standards.</li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> Does simply acquiring a test automation tool guarantee success?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No. Each new tool requires effort to achieve real and lasting benefits, including tool introduction, maintenance, and training. There are also risks that need analysis and mitigation.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 4 potential benefits of test automation.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any four of: Time saved by reducing repetitive manual work, prevention of human errors through consistency and repeatability, more objective assessment and complex measures, easier access to testing information for management/reporting, reduced test execution times for faster feedback, and more time for testers to design deeper tests.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 4 potential risks of test automation.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any four of: Unrealistic expectations about tool benefits, inaccurate estimations of introduction costs/effort, using automation when manual testing is more appropriate, over-reliance on tools (ignoring human critical thinking), dependency on tool vendor, abandoned open-source tools, tool incompatibility with the development platform, and choosing a tool that doesn't comply with regulatory/safety standards.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is over-reliance on a test automation tool a risk?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Because it may lead to ignoring the need for human critical thinking. Automated tools execute predefined checks, but they cannot replace the tester's ability to think creatively, explore edge cases, or apply judgment in ambiguous situations. A balance between automation and manual testing is essential.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the risks associated with relying on a specific tool vendor or open-source software?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The vendor may go out of business, retire the tool, sell it to a different vendor, or provide poor support (slow responses to queries, delayed upgrades, unfixed defects). For open-source software, it may be abandoned with no further updates available, or its internal components may require frequent updates as part of ongoing development.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};


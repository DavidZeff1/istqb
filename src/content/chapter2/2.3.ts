export const content = {
  title: "2.3 Maintenance Testing",
  content: `
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>Once software is in production, it needs to be maintained. Maintenance can be <strong>corrective</strong>, <strong>adaptive</strong> (to changes in the environment), or aimed at <strong>improving performance or maintainability</strong>. It can involve both <strong>planned releases/deployments</strong> and <strong>unplanned releases/deployments</strong> (hot fixes).</p>
        <p><strong>Impact analysis</strong> may be done before a change is made to help decide if the change should proceed, based on the potential consequences in other areas of the system.</p>
        <p>Maintenance testing includes both evaluating the <strong>success of the change implementation</strong> and checking for possible <strong>regressions</strong> in parts of the system that remain unchanged (which is usually most of the system).</p>
      </div>

      <div class="concept-block">
        <h3>Scope of Maintenance Testing</h3>
        <p>The scope of maintenance testing typically depends on:</p>
        <div class="highlight-box">
          <ul>
            <li>The <strong>degree of risk</strong> of the change.</li>
            <li>The <strong>size of the existing system</strong>.</li>
            <li>The <strong>size of the change</strong>.</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>Triggers for Maintenance Testing</h3>
        <p>The triggers for maintenance and maintenance testing can be classified as follows:</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>1. Modifications</h4>
          <p>Planned enhancements (release-based), corrective changes, or hot fixes.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>2. Upgrades or Migrations</h4>
          <p>Moving from one platform to another. This can require:</p>
          <ul>
            <li>Tests associated with the <strong>new environment</strong> as well as the changed software.</li>
            <li>Tests of <strong>data conversion</strong> when data from another application is migrated into the system being maintained.</li>
          </ul>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>3. Retirement</h4>
          <p>When an application reaches the <strong>end of its life</strong>. This can require:</p>
          <ul>
            <li>Testing of <strong>data archiving</strong> if long data retention periods are required.</li>
            <li>Testing of <strong>restore and retrieval procedures</strong> after archiving, in case certain data is needed during the archiving period.</li>
          </ul>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What are the three categories of maintenance?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Maintenance can be corrective (fixing defects), adaptive (adapting to changes in the environment), or aimed at improving performance or maintainability.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What three factors determine the scope of maintenance testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The degree of risk of the change, the size of the existing system, and the size of the change.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the three triggers for maintenance testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Modifications — planned enhancements, corrective changes, or hot fixes. 2) Upgrades or migrations — moving to a new platform, including testing the new environment and data conversion. 3) Retirement — when an application reaches end of life, requiring testing of data archiving and restore/retrieval procedures.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> When a system is being retired, what types of testing might be needed?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Testing of data archiving (if long data retention periods are required) and testing of restore and retrieval procedures after archiving (in case certain data needs to be accessed during the archiving period).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is impact analysis important before making a change to an operational system?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Impact analysis helps decide whether the change should be made by evaluating the potential consequences in other areas of the system. It informs the scope of maintenance testing needed to check for regressions in the unchanged parts of the system.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What does maintenance testing include when testing changes to an operational system?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Maintenance testing includes both evaluating the success of the change implementation and checking for possible regressions in parts of the system that remain unchanged (which is usually most of the system).</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};


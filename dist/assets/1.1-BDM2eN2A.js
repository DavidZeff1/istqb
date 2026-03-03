const e={title:"1.1 What is Testing?",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>Software systems are everywhere. When they fail, it can lead to massive problems: loss of money, wasted time, damaged reputation, or even injury and death. <strong>Software testing</strong> assesses software quality and reduces the risk of these failures happening in the real world.</p>
        <p>Testing is a structured set of activities designed to discover defects and evaluate the quality of software products (known as <strong>test objects</strong>).</p>
      </div>

      <div class="concept-block highlight-box">
        <h3>Common Misconceptions</h3>
        <ul>
          <li><strong>Myth 1: Testing is just running the code.</strong>
            <br><em>Reality:</em> Testing is a whole process aligned with the software development lifecycle (SDLC). It includes planning, managing, and designing tests—not just executing them.</li>
          <li><strong>Myth 2: Testing only checks requirements (Verification).</strong>
            <br><em>Reality:</em> Testing also checks if the system actually meets the user's real-world needs (<strong>Validation</strong>).</li>
        </ul>
      </div>

      <div class="concept-block">
        <h3>Types of Testing</h3>
        <p>Testing broadly falls into two categories:</p>
        <ul>
          <li><strong>Dynamic Testing:</strong> Involves actually executing (running) the software.</li>
          <li><strong>Static Testing:</strong> Examining the test object <em>without</em> running the code (e.g., reviews or static analysis tools).</li>
        </ul>
        <p><em>Note: Testing is largely an intellectual activity requiring specialized knowledge, analytical skills, and critical thinking.</em></p>
      </div>

      <div class="concept-block">
        <h3>1.1.1 Test Objectives</h3>
        <p>Why do we test? The typical objectives include:</p>
        <ul>
          <li>Evaluating work products (requirements, designs, code).</li>
          <li>Causing failures to find hidden defects.</li>
          <li>Ensuring required coverage of a test object.</li>
          <li>Reducing the risk of inadequate software quality.</li>
          <li><strong>Verifying</strong> that requirements are fulfilled.</li>
          <li>Ensuring compliance with legal and regulatory standards.</li>
          <li>Providing information to stakeholders so they can make informed decisions.</li>
          <li>Building confidence in the product's quality.</li>
          <li><strong>Validating</strong> that the product works as expected by the stakeholders in its operational environment.</li>
        </ul>
        <p><em>*Objectives can change depending on the context (e.g., the level of risk, business goals, or time to market).</em></p>
      </div>

      <div class="concept-block">
        <h3>1.1.2 Testing vs. Debugging</h3>
        <p>These are two entirely separate activities:</p>
        
        <div class="comparison-grid">
          <div class="grid-item">
            <h4>Testing</h4>
            <p><strong>Goal:</strong> Find the defect.<br>
            Testing triggers failures (dynamic) or directly finds defects (static).</p>
          </div>
          <div class="grid-item">
            <h4>Debugging</h4>
            <p><strong>Goal:</strong> Fix the defect.<br>
            The typical process is: Reproduce the failure -> Diagnose (find the root cause) -> Fix the defect.</p>
          </div>
        </div>

        <p><strong>After debugging:</strong></p>
        <ul>
          <li><strong>Confirmation Testing:</strong> Checking if the specific fix actually resolved the original problem.</li>
          <li><strong>Regression Testing:</strong> Checking if the fix accidentally broke something else in the software.</li>
        </ul>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> Which of the following is a key difference between Testing and Debugging?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Testing is concerned with finding defects (triggering failures), while debugging is concerned with analyzing the causes of failures and fixing the defects.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between Verification and Validation?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Verification checks whether the system meets specified technical requirements (Did we build the system right?). Validation checks whether the system meets the real-world needs of users and stakeholders (Did we build the right system?).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> If a tester is reviewing a requirements document without executing any code, what type of testing are they performing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Static Testing.</p>
              </details>
            </div>
          </li>
           <li>
            <strong>Question:</strong> After a developer fixes a defect, what type of testing is performed to ensure the specific fix worked?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Confirmation Testing.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

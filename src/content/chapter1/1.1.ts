import audio11 from './audio/11audio.m4a';

export const content = {
  title: "1.1 What is Testing?",
  audioSrc: audio11,
  content: `
    <div class="test-content">
      
      <!-- 1.1 Core Concept -->
      <section class="concept-block">
        <h3>What is Software Testing?</h3>
        <p>Testing is <strong>not</strong> just running the code. It is a comprehensive process encompassing the entire software development lifecycle (SDLC).</p>
        <div class="definition-box highlight-box" style="padding: 1rem; margin-bottom: 1rem; border-radius: 8px;">
          <p style="margin: 0;"><strong>Software Testing:</strong> A structured set of activities (both static and dynamic) designed to discover defects, evaluate the quality of software products (the <strong>test objects</strong>), and reduce the level of risk associated with software failures in operation.</p>
        </div>
      </section>

      <!-- Verification vs Validation -->
      <section class="concept-block">
        <h3>Key Distinction: Verification vs. Validation</h3>
        <p>A fundamental concept in testing is understanding the difference between these two activities:</p>
        <div class="comparison-grid">
          <div class="grid-item">
            <h4>Verification</h4>
            <p><em>"Are we building the product right?"</em></p>
            <p>Checking if the system meets its specified technical and business <strong>requirements</strong>.</p>
          </div>
          <div class="grid-item">
            <h4>Validation</h4>
            <p><em>"Are we building the right product?"</em></p>
            <p>Checking whether the system actually meets the user's real-world needs and is fit for purpose in its <strong>operational environment</strong>.</p>
          </div>
        </div>
      </section>

      <!-- Dynamic vs Static -->
      <section class="concept-block">
        <h3>Types of Testing Activities</h3>
        <ul>
          <li><strong>Dynamic Testing:</strong> Involves actually <strong>executing</strong> (running) the software code.</li>
          <li><strong>Static Testing:</strong> Examining work products (like requirements, design docs, or code) <strong>without executing</strong> the code (e.g., reviews or static analysis).</li>
        </ul>
      </section>

      <!-- 1.1.1 Test Objectives -->
      <section class="concept-block">
        <h3>1.1.1 Test Objectives</h3>
        <p>The objectives of testing can vary depending on the context (e.g., component testing vs. system testing), but typical objectives include:</p>
        <ul>
          <li><strong>Evaluating Work Products:</strong> Reviewing requirements, user stories, designs, and code to prevent defects early.</li>
          <li><strong>Triggering Failures:</strong> Executing the system specifically to find hidden <strong>defects</strong>.</li>
          <li><strong>Required Coverage:</strong> Ensuring all necessary parts of the test object have been adequately tested.</li>
          <li><strong>Measuring Quality & Building Confidence:</strong> Determining if the product's quality meets the required standard.</li>
          <li><strong>Reducing Risk:</strong> Lowering the probability of software failures occurring in the real-world operational environment.</li>
          <li><strong>Providing Information:</strong> Giving stakeholders clear data so they can make informed decisions (e.g., "Is it ready to release?").</li>
          <li><strong>Ensuring Compliance:</strong> Verifying the software meets legal, contractual, or regulatory standards.</li>
        </ul>
      </section>

      <!-- 1.1.2 Testing vs Debugging -->
      <section class="concept-block">
        <h3>1.1.2 Testing vs. Debugging</h3>
        <p>These two activities are often confused but are entirely distinct and usually performed by different roles.</p>
        
        <div class="comparison-grid">
          <div class="grid-item">
            <h4>Testing</h4>
            <p><strong>Primary Goal:</strong> Find defects.</p>
            <p>Testing is responsible for <strong>triggering failures</strong> (dynamic) or directly <strong>finding defects</strong> in documents/code (static) to expose issues.</p>
          </div>
          <div class="grid-item">
            <h4>Debugging</h4>
            <p><strong>Primary Goal:</strong> Fix the defect.</p>
            <p>Debugging involves analyzing the failure, diagnosing the <strong>root cause</strong>, and actively fixing the defect in the code.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>What happens after debugging?</h4>
          <ul>
            <li><strong>Confirmation Testing (Re-testing):</strong> Running tests again to check if the specific fix actually resolved the original defect.</li>
            <li><strong>Regression Testing:</strong> Running tests to confirm the fix didn't accidentally break something else in the software.</li>
          </ul>
        </div>
      </section>

      <hr class="section-divider">

      <section class="concept-block practice-questions">
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
      </section>
    </div>
  `
};


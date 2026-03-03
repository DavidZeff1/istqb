export const content = {
  title: "2.1 Testing in the Context of a Software Development Lifecycle (SDLC)",
  content: `
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>An <strong>SDLC model</strong> is an abstract, high-level representation of the software development process. It defines how different development phases and types of activities relate to each other, both logically and chronologically.</p>
        <p>Examples of SDLC models include:</p>
        <ul>
          <li><strong>Sequential development models:</strong> Waterfall model, V-model.</li>
          <li><strong>Iterative development models:</strong> Spiral model, Prototyping.</li>
          <li><strong>Incremental development models:</strong> Unified Process.</li>
        </ul>
        <p>Some activities can also be described by more detailed methods and Agile practices, such as: <strong>ATDD, BDD, DDD, XP, FDD, Kanban, Lean IT, Scrum,</strong> and <strong>TDD</strong>.</p>
      </div>

      <div class="concept-block">
        <h3>2.1.1 Impact of the SDLC on Testing</h3>
        <p>Testing must be <strong>adapted to the SDLC</strong> to succeed. The choice of SDLC impacts:</p>
        <ul>
          <li>Scope and timing of test activities (e.g., test levels and test types)</li>
          <li>Level of detail of test documentation</li>
          <li>Choice of test techniques and test approach</li>
          <li>Extent of test automation</li>
          <li>Role and responsibilities of a tester</li>
        </ul>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Sequential Models</h4>
            <p>Testers typically participate in requirement reviews, test analysis, and test design in early phases. <strong>Dynamic testing cannot be performed early</strong> because executable code is created in later phases.</p>
          </div>
          <div class="grid-item">
            <h4>Iterative / Incremental Models</h4>
            <p>Each iteration delivers a working prototype or product increment. Both static and dynamic testing may be performed at <strong>all test levels</strong> in each iteration. Requires <strong>fast feedback</strong> and <strong>extensive regression testing</strong>.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Agile Development</h4>
          <p>Agile assumes that <strong>change may occur throughout the project</strong>. Therefore:</p>
          <ul>
            <li><strong>Lightweight documentation</strong> is favored.</li>
            <li><strong>Extensive test automation</strong> makes regression testing easier.</li>
            <li>Most manual testing uses <strong>experience-based test techniques</strong> (see Section 4.4) that don't require extensive prior test analysis and design.</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>2.1.2 SDLC and Good Testing Practices</h3>
        <p>Good testing practices, <strong>independent of the chosen SDLC model</strong>, include:</p>
        <div class="highlight-box">
          <ul>
            <li>For <strong>every software development activity</strong>, there is a corresponding test activity, so all development activities are subject to quality control.</li>
            <li>Different <strong>test levels</strong> have specific and different test objectives, allowing testing to be comprehensive while avoiding redundancy.</li>
            <li><strong>Test analysis and design</strong> for a given test level begins during the corresponding development phase, adhering to the principle of <strong>early testing</strong>.</li>
            <li>Testers are involved in <strong>reviewing work products</strong> as soon as drafts are available, supporting <strong>shift left</strong> and earlier defect detection.</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>2.1.3 Testing as a Driver for Software Development</h3>
        <p>TDD, ATDD, and BDD are similar development approaches where <strong>tests are defined as a means of directing development</strong>. Each implements the principle of early testing and follows shift left, since tests are defined <em>before</em> the code is written. They support an iterative development model.</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>TDD (Test-Driven Development)</h4>
            <p>Directs coding through <strong>test cases</strong> instead of extensive software design.<br>
            <strong>Process:</strong> Write tests first → Write code to satisfy the tests → Refactor tests and code.</p>
          </div>
          <div class="grid-item">
            <h4>ATDD (Acceptance Test-Driven Development)</h4>
            <p>Derives tests from <strong>acceptance criteria</strong> as part of the system design process.<br>
            Tests are written <strong>before</strong> the part of the application is developed to satisfy them.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>BDD (Behavior-Driven Development)</h4>
          <p>Expresses the desired behavior of an application with test cases written in a <strong>simple form of natural language</strong>, easy to understand by stakeholders — usually using the <strong>Given/When/Then</strong> format.</p>
          <p>Test cases should then automatically be <strong>translated into executable tests</strong>.</p>
        </div>

        <p style="margin-top: 1rem;"><em>For all three approaches, tests may persist as <strong>automated tests</strong> to ensure code quality in future adaptations and refactoring.</em></p>
      </div>

      <div class="concept-block">
        <h3>2.1.4 DevOps and Testing</h3>
        <p><strong>DevOps</strong> is an organizational approach aiming to create synergy by getting development (including testing) and operations to work together toward common goals. It requires a <strong>cultural shift</strong> within an organization and promotes team autonomy, fast feedback, integrated toolchains, and technical practices like <strong>CI</strong> (Continuous Integration) and <strong>CD</strong> (Continuous Delivery).</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>✅ Benefits of DevOps for Testing</h4>
            <ul>
              <li><strong>Fast feedback</strong> on code quality and whether changes adversely affect existing code.</li>
              <li>CI promotes <strong>shift left</strong> by encouraging developers to submit high-quality code with component tests and static analysis.</li>
              <li>Automated processes like CI/CD facilitate establishing <strong>stable test environments</strong>.</li>
              <li>Increased visibility on <strong>non-functional quality characteristics</strong> (e.g., performance, reliability).</li>
              <li>Automation through a delivery pipeline <strong>reduces repetitive manual testing</strong>.</li>
              <li><strong>Regression risk is minimized</strong> due to the scale and range of automated regression tests.</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>⚠️ Risks and Challenges</h4>
            <ul>
              <li>The DevOps <strong>delivery pipeline</strong> must be defined and established.</li>
              <li>CI/CD <strong>tools must be introduced and maintained</strong>.</li>
              <li>Test automation requires <strong>additional resources</strong> and may be difficult to establish and maintain.</li>
            </ul>
            <p><em>Note: Even with high levels of automated testing, <strong>manual testing</strong> — especially from the user's perspective — will still be needed.</em></p>
          </div>
        </div>
      </div>

      <div class="concept-block highlight-box">
        <h3>2.1.5 Shift Left</h3>
        <p>The principle of early testing is sometimes referred to as <strong>shift left</strong> because it is an approach where testing is performed <strong>earlier in the SDLC</strong>. It does <em>not</em> mean that testing later in the SDLC should be neglected.</p>

        <h4>Good Practices for Shift Left</h4>
        <ul>
          <li><strong>Reviewing specifications</strong> from the perspective of testers — review activities often find potential defects such as ambiguities, incompleteness, and inconsistencies.</li>
          <li><strong>Writing test cases before the code</strong> is written and running the code in a test harness during implementation.</li>
          <li>Using <strong>CI and CD</strong> which come with fast feedback and automated component tests when code is submitted.</li>
          <li>Completing <strong>static analysis</strong> of source code prior to dynamic testing, or as part of an automated process.</li>
          <li>Performing <strong>non-functional testing</strong> starting at the component test level, where possible (these tests are typically done later in the SDLC).</li>
        </ul>

        <p><em>Shift left might result in extra training, effort, and/or costs <strong>earlier</strong> in the process, but is expected to <strong>save</strong> effort and costs <strong>later</strong>. It is important that stakeholders are convinced and bought into this concept.</em></p>
      </div>

      <div class="concept-block">
        <h3>2.1.6 Retrospectives and Process Improvement</h3>
        <p><strong>Retrospectives</strong> are often held at the end of a project or iteration, at a release milestone, or when needed. Participants (testers, developers, architects, product owner, business analysts) discuss:</p>
        <ul>
          <li>What was <strong>successful</strong>, and should be retained?</li>
          <li>What was <strong>not successful</strong> and could be improved?</li>
          <li>How to <strong>incorporate the improvements</strong> and retain the successes in the future?</li>
        </ul>
        <p>Results should be recorded and are normally part of the <strong>test completion report</strong> (see Section 5.3.2). It is critical that any recommended improvements are <strong>followed up</strong>.</p>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Typical Benefits for Testing</h4>
          <ul>
            <li>Increased test <strong>effectiveness / efficiency</strong> (process improvement suggestions).</li>
            <li>Increased quality of <strong>testware</strong> (jointly reviewing test processes).</li>
            <li><strong>Team bonding and learning</strong> (opportunity to raise issues and propose improvements).</li>
            <li>Improved quality of the <strong>test basis</strong> (requirements deficiencies can be addressed).</li>
            <li>Better cooperation between <strong>development and testing</strong> (collaboration is reviewed regularly).</li>
          </ul>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> How does the choice of SDLC model impact testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The SDLC model impacts the scope and timing of test activities, the level of detail of test documentation, the choice of test techniques and approach, the extent of test automation, and the role and responsibilities of a tester.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> In sequential development models, why can't dynamic testing be performed early in the SDLC?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Because executable code is usually created in the later phases of sequential models. In the initial phases, testers participate in requirement reviews, test analysis, and test design instead.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the key differences between TDD, ATDD, and BDD?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> TDD directs coding through test cases — write tests first, then code, then refactor. ATDD derives tests from acceptance criteria as part of system design. BDD expresses desired behavior in simple natural language (usually Given/When/Then format) that is easy for stakeholders to understand, and these are automatically translated into executable tests. All three define tests before code is written.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What does "shift left" mean in testing, and does it mean we should stop testing later in the SDLC?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Shift left means performing testing earlier in the SDLC (e.g., not waiting for code to be implemented or components to be integrated). However, it does NOT mean that testing later in the SDLC should be neglected — both early and late testing are needed.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 3 benefits of DevOps from a testing perspective.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any three of: Fast feedback on code quality, CI promotes shift left, automated processes facilitate stable test environments, increased visibility on non-functional quality characteristics, automation reduces repetitive manual testing, regression risk is minimized through automated regression tests.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the three key questions discussed during retrospectives?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) What was successful and should be retained? 2) What was not successful and could be improved? 3) How to incorporate the improvements and retain the successes in the future?</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> List at least 3 good testing practices that are independent of the chosen SDLC model.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any three of: Every development activity has a corresponding test activity; different test levels have specific and different test objectives; test analysis and design begins during the corresponding development phase (early testing); testers review work products as soon as drafts are available (shift left).</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};


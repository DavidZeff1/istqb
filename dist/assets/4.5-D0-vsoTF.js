const e={title:"4.5 Collaboration-Based Test Approaches",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>While other test techniques (black-box, white-box, experience-based) focus on <strong>defect detection</strong>, collaboration-based approaches focus also on <strong>defect avoidance</strong> through collaboration and communication.</p>
      </div>

      <div class="concept-block">
        <h3>4.5.1 Collaborative User Story Writing</h3>
        <p>A <strong>user story</strong> represents a feature that will be valuable to either a user or purchaser of a system or software. User stories have three critical aspects, called the <strong>"3 C's"</strong>:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>The 3 C's</h4>
          <ul>
            <li><strong>Card:</strong> The medium describing a user story (e.g., an index card, an entry in an electronic board).</li>
            <li><strong>Conversation:</strong> Explains how the software will be used (can be documented or verbal).</li>
            <li><strong>Confirmation:</strong> The acceptance criteria (see section 4.5.2).</li>
          </ul>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>User Story Format</h4>
          <p><strong>"As a [role], I want [goal to be accomplished], so that I can [resulting business value for the role]"</strong></p>
          <p><em>Followed by the acceptance criteria.</em></p>
        </div>

        <p><strong>Collaborative authorship</strong> can use techniques such as <strong>brainstorming</strong> and <strong>mind mapping</strong>. Collaboration allows the team to obtain a <strong>shared vision</strong> of what should be delivered, taking into account three perspectives:</p>
        <ul>
          <li><strong>Business</strong></li>
          <li><strong>Development</strong></li>
          <li><strong>Testing</strong></li>
        </ul>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>INVEST Criteria for Good User Stories</h4>
          <p>Good user stories should be:</p>
          <ul>
            <li><strong>I</strong> — Independent</li>
            <li><strong>N</strong> — Negotiable</li>
            <li><strong>V</strong> — Valuable</li>
            <li><strong>E</strong> — Estimable</li>
            <li><strong>S</strong> — Small</li>
            <li><strong>T</strong> — Testable</li>
          </ul>
          <p><em>If a stakeholder doesn't know how to test a user story, this may indicate the story is not clear enough, doesn't reflect something valuable, or the stakeholder needs help in testing.</em></p>
        </div>
      </div>

      <div class="concept-block">
        <h3>4.5.2 Acceptance Criteria</h3>
        <p><strong>Acceptance criteria</strong> for a user story are the conditions that an implementation must meet to be accepted by stakeholders. They may be viewed as <strong>test conditions</strong> that should be exercised by tests. They are usually a result of the <strong>Conversation</strong> (the second C).</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Acceptance Criteria Are Used To:</h4>
          <ul>
            <li><strong>Define the scope</strong> of the user story</li>
            <li><strong>Reach consensus</strong> among the stakeholders</li>
            <li>Describe both <strong>positive and negative</strong> scenarios</li>
            <li>Serve as a basis for <strong>user story acceptance testing</strong></li>
            <li>Allow accurate <strong>planning and estimation</strong></li>
          </ul>
        </div>

        <p><strong>Two most common formats:</strong></p>
        <div class="comparison-grid">
          <div class="grid-item">
            <h4>Scenario-Oriented</h4>
            <p>Uses the <strong>Given/When/Then</strong> format (as in BDD).</p>
            <p><em>Example:<br>
            <strong>Given</strong> a user is logged in,<br>
            <strong>When</strong> they click "Checkout",<br>
            <strong>Then</strong> the order is placed.</em></p>
          </div>
          <div class="grid-item">
            <h4>Rule-Oriented</h4>
            <p>Uses a <strong>bullet point verification list</strong> or <strong>tabulated input-output mapping</strong>.</p>
            <p><em>Example:<br>
            ✓ Order total is calculated correctly<br>
            ✓ Tax is applied based on region<br>
            ✓ Discount codes are validated</em></p>
          </div>
        </div>

        <p style="margin-top: 1rem;"><em>Teams may use custom formats as long as the acceptance criteria are <strong>well-defined and unambiguous</strong>.</em></p>
      </div>

      <div class="concept-block highlight-box">
        <h3>4.5.3 Acceptance Test-Driven Development (ATDD)</h3>
        <p>ATDD is a <strong>test-first approach</strong> — test cases are created <strong>prior to implementing</strong> the user story. Test cases are created by team members with different perspectives (customers, developers, testers).</p>

        <h4>The ATDD Process</h4>
        <div class="highlight-box" style="margin: 1rem 0;">
          <ol>
            <li><strong>Specification Workshop:</strong> The user story and its acceptance criteria are analyzed, discussed, and written by the team. Incompleteness, ambiguities, or defects in the user story are resolved.</li>
            <li><strong>Create Test Cases:</strong> Done by the team as a whole or by the tester individually. Test cases are based on acceptance criteria and serve as <strong>examples of how the software works</strong>.</li>
            <li><strong>Implement:</strong> Developers implement the feature, guided by the test cases. When captured in a format supported by a test automation framework, <strong>acceptance tests become executable requirements</strong>.</li>
          </ol>
        </div>

        <p><em>Since examples and tests are the same, these terms are often used interchangeably.</em></p>

        <h4>Test Case Order</h4>
        <ul>
          <li><strong>First:</strong> Positive test cases — confirming correct behavior without exceptions or error conditions (the "happy path").</li>
          <li><strong>Then:</strong> Negative testing — handling exceptions and error conditions.</li>
          <li><strong>Finally:</strong> Non-functional quality characteristics (e.g., performance efficiency, usability).</li>
        </ul>

        <h4 style="margin-top: 1rem;">Important Rules</h4>
        <ul>
          <li>Test cases must <strong>cover all characteristics</strong> of the user story and should <strong>not go beyond</strong> the story.</li>
          <li>No two test cases should describe the <strong>same characteristics</strong> of the user story.</li>
          <li>Test cases should be expressed in a way that is <strong>understandable for stakeholders</strong> — typically using natural language with preconditions, inputs, and postconditions.</li>
        </ul>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What are the "3 C's" of a user story?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Card (the medium describing the story), Conversation (explains how the software will be used), and Confirmation (the acceptance criteria).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What does the INVEST acronym stand for in user stories?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Independent, Negotiable, Valuable, Estimable, Small, and Testable. These are the qualities of a good user story.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the two most common formats for writing acceptance criteria?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Scenario-oriented — using the Given/When/Then format as in BDD. 2) Rule-oriented — using a bullet point verification list or tabulated input-output mapping. Teams may also use custom formats as long as criteria are well-defined and unambiguous.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> How does ATDD differ from traditional testing approaches?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> ATDD is a test-first approach where test cases are created prior to implementing the user story. Test cases are created by team members with different perspectives (customers, developers, testers) and serve as examples of how the software should work. The acceptance tests can become executable requirements when automated.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the first step in the ATDD process?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A specification workshop where the user story and its acceptance criteria are analyzed, discussed, and written by the team members. During this process, incompleteness, ambiguities, or defects in the user story are resolved.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> In what order should test cases be created in ATDD?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> First, positive test cases (confirming correct behavior — the happy path). Then, negative testing (handling exceptions and errors). Finally, non-functional quality characteristics (e.g., performance, usability).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What does it mean when "examples and tests are the same" in ATDD?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> In ATDD, test cases are based on acceptance criteria and serve as examples of how the software works. Since these examples demonstrate expected behavior and can be verified, they are essentially the same as tests. When captured in an automation-friendly format, they become executable requirements.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> How do collaboration-based approaches differ from other test techniques in their primary objective?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> While other test techniques (black-box, white-box, experience-based) focus primarily on defect detection, collaboration-based approaches focus also on defect avoidance through collaboration and communication among team members with different perspectives.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

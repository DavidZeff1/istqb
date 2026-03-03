const e={title:"4.4 Experience-Based Test Techniques",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>The commonly used experience-based test techniques covered in this syllabus are:</p>
        <ol>
          <li><strong>Error Guessing</strong></li>
          <li><strong>Exploratory Testing</strong></li>
          <li><strong>Checklist-Based Testing</strong></li>
        </ol>
      </div>

      <div class="concept-block">
        <h3>4.4.1 Error Guessing</h3>
        <p>Error guessing is a technique used to <strong>anticipate the occurrence of errors, defects, and failures</strong> based on the tester's knowledge, including:</p>
        <ul>
          <li>How the application has <strong>worked in the past</strong></li>
          <li>The types of <strong>errors developers tend to make</strong> and the defects that result</li>
          <li>The types of <strong>failures that have occurred</strong> in other, similar applications</li>
        </ul>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Common Error Categories</h4>
          <ul>
            <li><strong>Input:</strong> Correct input not accepted, parameters wrong or missing</li>
            <li><strong>Output:</strong> Wrong format, wrong result</li>
            <li><strong>Logic:</strong> Missing cases, wrong operator</li>
            <li><strong>Computation:</strong> Incorrect operand, wrong computation</li>
            <li><strong>Interfaces:</strong> Parameter mismatch, incompatible types</li>
            <li><strong>Data:</strong> Incorrect initialization, wrong type</li>
          </ul>
        </div>

        <div class="highlight-box">
          <h4>Fault Attacks</h4>
          <p><strong>Fault attacks</strong> are a way to implement error guessing. The tester creates or acquires a <strong>list of possible errors, defects, and failures</strong>, then designs tests to identify those defects, expose them, or cause the failures. These lists can be built based on:</p>
          <ul>
            <li>Experience</li>
            <li>Defect and failure data</li>
            <li>Common knowledge about why software fails</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>4.4.2 Exploratory Testing</h3>
        <p>In exploratory testing, tests are simultaneously <strong>designed, executed, and evaluated</strong> while the tester <strong>learns about the test object</strong>. Testing is used to:</p>
        <ul>
          <li>Learn more about the test object</li>
          <li>Explore it more deeply with <strong>focused tests</strong></li>
          <li>Create tests for <strong>untested areas</strong></li>
        </ul>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Session-Based Testing</h4>
          <p>Exploratory testing is sometimes structured using <strong>session-based testing</strong>:</p>
          <ul>
            <li>Performed within a <strong>defined time box</strong>.</li>
            <li>The tester uses a <strong>test charter</strong> containing test objectives to guide the testing.</li>
            <li>Followed by a <strong>debriefing</strong> — a discussion between the tester and stakeholders about the test session results.</li>
            <li>Test objectives may be treated as <strong>high-level test conditions</strong>.</li>
            <li>Coverage items are identified and exercised <strong>during the test session</strong>.</li>
            <li>The tester may use <strong>test session sheets</strong> to document steps and discoveries.</li>
          </ul>
        </div>

        <p><strong>When is exploratory testing most useful?</strong></p>
        <ul>
          <li>When there are <strong>few or inadequate specifications</strong>.</li>
          <li>When there is <strong>significant time pressure</strong>.</li>
          <li>To <strong>complement</strong> other more formal test techniques.</li>
        </ul>

        <p><em>Exploratory testing is more effective when the tester is <strong>experienced</strong>, has <strong>domain knowledge</strong>, and possesses high-level essential skills like analytical skills, curiosity, and creativeness. It can also incorporate other test techniques (e.g., equivalence partitioning).</em></p>
      </div>

      <div class="concept-block">
        <h3>4.4.3 Checklist-Based Testing</h3>
        <p>In checklist-based testing, a tester designs, implements, and executes tests to cover <strong>test conditions from a checklist</strong>.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Building Checklists</h4>
          <p>Checklists can be built based on:</p>
          <ul>
            <li><strong>Experience</strong></li>
            <li>Knowledge about <strong>what is important for the user</strong></li>
            <li>Understanding of <strong>why and how software fails</strong></li>
          </ul>
          <p><strong>Checklists should NOT contain:</strong></p>
          <ul>
            <li>Items that can be <strong>checked automatically</strong></li>
            <li>Items better suited as <strong>entry/exit criteria</strong></li>
            <li>Items that are <strong>too general</strong></li>
          </ul>
        </div>

        <p><strong>Characteristics of checklist items:</strong></p>
        <ul>
          <li>Often phrased as a <strong>question</strong>.</li>
          <li>Should be possible to check each item <strong>separately and directly</strong>.</li>
          <li>May refer to requirements, graphical interface properties, quality characteristics, or other test conditions.</li>
          <li>Can support various test types, including functional and non-functional testing (e.g., 10 heuristics for usability testing).</li>
        </ul>

        <div class="concept-block" style="background: rgba(255,200,50,0.08); padding: 1rem; border-radius: 8px; border-left: 4px solid rgba(255,200,50,0.5); margin-top: 1rem;">
          <h4>⚠️ Maintenance Warning</h4>
          <p>Some checklist entries may gradually become <strong>less effective over time</strong> because developers learn to avoid making the same errors. New entries should be added to reflect newly found high-severity defects. <strong>Checklists should be regularly updated</strong> based on defect analysis — but care should be taken to avoid letting the checklist become too long.</p>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Trade-Off</h4>
          <p>In the absence of detailed test cases, checklist-based testing provides <strong>guidelines and some consistency</strong>. However, if checklists are high-level, some variability in actual testing will occur, resulting in:</p>
          <ul>
            <li><strong>Potentially greater coverage</strong> (testers explore more freely)</li>
            <li><strong>Less repeatability</strong> (different testers may test differently)</li>
          </ul>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is error guessing based on?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Error guessing is based on the tester's knowledge, including how the application worked in the past, the types of errors developers tend to make in the defects that result, and the types of failures that have occurred in other similar applications.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are "fault attacks" and how do they relate to error guessing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Fault attacks are a way to implement error guessing. The tester creates or acquires a list of possible errors, defects, and failures, then designs tests to identify those defects, expose them, or cause the failures. These lists are built based on experience, defect/failure data, or common knowledge about why software fails.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What makes exploratory testing different from other test techniques?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> In exploratory testing, tests are simultaneously designed, executed, and evaluated while the tester learns about the test object. There is no separate upfront test design phase — the tester explores the system in real-time, creating focused tests and discovering untested areas as they go.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is session-based testing and how does it structure exploratory testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Session-based testing structures exploratory testing by performing it within a defined time box. The tester uses a test charter containing test objectives to guide the testing. It is usually followed by a debriefing with stakeholders. The tester may use test session sheets to document steps and discoveries.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> When is exploratory testing most useful?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> When there are few or inadequate specifications, when there is significant time pressure on testing, or to complement other more formal test techniques. It is more effective when the tester is experienced, has domain knowledge, and possesses strong analytical skills, curiosity, and creativity.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What should a checklist NOT contain?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Checklists should not contain items that can be checked automatically, items better suited as entry or exit criteria, or items that are too general. Checklist items should be checkable separately and directly.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why should checklists be regularly updated?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Because some entries may gradually become less effective over time as developers learn to avoid the same errors. New entries should be added to reflect newly found high-severity defects. However, care should be taken to avoid letting the checklist become too long.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the trade-off of using high-level checklists instead of detailed test cases?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> High-level checklists provide guidelines and some degree of consistency, but introduce variability in actual testing. This results in potentially greater coverage (testers explore more freely) but less repeatability (different testers may test differently).</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

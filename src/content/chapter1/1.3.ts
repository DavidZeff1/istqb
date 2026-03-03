import audio13 from './audio/13audio.m4a';

export const content = {
  title: "1.3 Testing Principles",
  audioSrc: audio13,
  content: `
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>Over the years, a number of <strong>testing principles</strong> have been identified that offer general guidelines applicable to all testing. This syllabus describes <strong>seven</strong> such principles. Understanding these principles is fundamental — they shape how testers think and approach their work.</p>
      </div>

      <div class="concept-block">
        <h3>The Seven Testing Principles</h3>

        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>1. Testing Shows the Presence, Not the Absence of Defects</h4>
          <p>Testing can show that defects <strong>are present</strong> in the test object, but it <strong>cannot prove</strong> that there are no defects. Testing reduces the probability of defects remaining undiscovered, but even if no defects are found, testing cannot prove the test object is correct.</p>
          <p><em>Think of it this way: Finding 0 bugs doesn't mean there are 0 bugs — it just means you haven't found any yet.</em></p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>2. Exhaustive Testing is Impossible</h4>
          <p>Testing <strong>everything</strong> (all combinations of inputs, preconditions, and scenarios) is not feasible except in trivial cases. Rather than attempting to test exhaustively, testers should use:</p>
          <ul>
            <li><strong>Test techniques</strong> (see Chapter 4) to design effective tests.</li>
            <li><strong>Test case prioritization</strong> (see Section 5.1.5) to run the most important tests first.</li>
            <li><strong>Risk-based testing</strong> (see Section 5.2) to focus effort where the risk is highest.</li>
          </ul>
        </div>

        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>3. Early Testing Saves Time and Money</h4>
          <p>Defects that are removed early in the process will not cause subsequent defects in derived work products. The <strong>cost of quality</strong> is reduced since fewer failures will occur later in the SDLC.</p>
          <p>To find defects early, both <strong>static testing</strong> (see Chapter 3) and <strong>dynamic testing</strong> (see Chapter 4) should be started as early as possible.</p>
          <p><em>A bug found during requirements review costs pennies to fix. The same bug found in production can cost millions.</em></p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>4. Defects Cluster Together</h4>
          <p>A <strong>small number</strong> of system components usually contain <strong>most of the defects</strong> discovered or are responsible for most of the operational failures. This phenomenon is an illustration of the <strong>Pareto principle</strong> (roughly 80% of defects are found in 20% of components).</p>
          <p>Predicted defect clusters, and actual defect clusters observed during testing or in operation, are an important input for <strong>risk-based testing</strong> (see Section 5.2).</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>5. Tests Wear Out (Pesticide Paradox)</h4>
          <p>If the same tests are repeated many times, they become <strong>increasingly ineffective</strong> in detecting new defects. To overcome this effect:</p>
          <ul>
            <li>Existing tests and test data may need to be <strong>modified</strong>.</li>
            <li>New tests may need to be <strong>written</strong>.</li>
          </ul>
          <p>However, in some cases, repeating the same tests <em>can</em> have a beneficial outcome — for example, in <strong>automated regression testing</strong> (see Section 2.2.3), where the goal is to confirm that previously working functionality hasn't broken.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>6. Testing is Context Dependent</h4>
          <p>There is <strong>no single universally applicable approach</strong> to testing. Testing is done differently in different contexts. For example:</p>
          <ul>
            <li>Testing an e-commerce website is different from testing safety-critical medical software.</li>
            <li>An Agile project tests differently than a Waterfall project.</li>
          </ul>
          <p><em>The approach, techniques, and level of rigor must always match the context.</em></p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>7. Absence-of-Defects Fallacy</h4>
          <p>It is a <strong>fallacy</strong> (a misconception) to expect that software verification alone will ensure the success of a system. Thoroughly testing all the specified requirements and fixing all the defects found could <em>still</em> produce a system that:</p>
          <ul>
            <li>Does <strong>not fulfill</strong> the users' needs and expectations.</li>
            <li>Does <strong>not help</strong> in achieving the customer's business goals.</li>
            <li>Is <strong>inferior</strong> compared to other competing systems.</li>
          </ul>
          <p>In addition to <strong>verification</strong> (did we build the system right?), <strong>validation</strong> (did we build the right system?) should also be carried out.</p>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> A tester runs an extensive test suite and finds zero defects. Can they conclude the software is defect-free?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No. According to Principle 1 (Testing shows the presence, not the absence of defects), finding no defects does not prove the software is correct. It only means no defects were found with those particular tests.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is exhaustive testing considered impossible?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Testing all possible combinations of inputs, preconditions, and scenarios is not feasible except in trivial cases. Instead, testers use test techniques, test case prioritization, and risk-based testing to focus their efforts where it matters most.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> A team notices that Module X consistently has the highest number of reported bugs. Which testing principle does this illustrate?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Principle 4 — Defects Cluster Together. A small number of components usually contain most of the defects, following the Pareto principle. This information should be used as input for risk-based testing.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> A team runs the same regression test suite for 6 months without updating it. They stop finding new bugs. Which principle explains this?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Principle 5 — Tests Wear Out (Pesticide Paradox). Repeating the same tests over and over makes them increasingly ineffective at finding new defects. The tests and test data should be modified, and new tests should be written.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> A software product passes all its specified requirements tests with zero defects. However, after launch, users complain the product doesn't solve their actual problem. Which principle does this illustrate?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Principle 7 — Absence-of-Defects Fallacy. Verifying all requirements and fixing all defects does not guarantee the system meets users' actual needs. Validation (checking the system meets real-world needs) must also be performed, not just verification.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why should testing start as early as possible in the SDLC?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Principle 3 — Early Testing Saves Time and Money. Defects removed early won't cause subsequent defects in derived work products. The cost of quality is reduced since fewer failures will occur later. Both static and dynamic testing should begin as early as possible.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> A tester applies the exact same testing approach to a safety-critical aviation system and a simple mobile game. What principle are they violating?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Principle 6 — Testing is Context Dependent. There is no single universally applicable approach to testing. The approach, techniques, and rigor must be adapted to the specific context of each project.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};


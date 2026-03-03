const e={title:"4.3 White-Box Test Techniques",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>This section focuses on two code-related white-box test techniques due to their popularity and simplicity:</p>
        <ol>
          <li><strong>Statement Testing</strong></li>
          <li><strong>Branch Testing</strong></li>
        </ol>
        <p><em>More rigorous white-box techniques exist for safety-critical, mission-critical, or high-integrity environments. There are also white-box techniques used at higher test levels (e.g., API testing) or using non-code coverage (e.g., neuron coverage in neural network testing). These are not covered in this syllabus.</em></p>
      </div>

      <div class="concept-block">
        <h3>4.3.1 Statement Testing and Statement Coverage</h3>
        <p>In statement testing, the coverage items are <strong>executable statements</strong>. The aim is to design test cases that exercise statements in the code until an acceptable level of coverage is achieved.</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Coverage Formula</h4>
          <p><em>Number of statements exercised by test cases ÷ Total number of executable statements × 100%</em></p>
        </div>

        <p>When <strong>100% statement coverage</strong> is achieved:</p>
        <ul>
          <li>All executable statements in the code have been exercised <strong>at least once</strong>.</li>
          <li>Each statement with a defect will be executed, which <strong>may</strong> cause a failure demonstrating the defect.</li>
        </ul>

        <div class="concept-block" style="background: rgba(255,200,50,0.08); padding: 1rem; border-radius: 8px; border-left: 4px solid rgba(255,200,50,0.5);">
          <h4>⚠️ Limitations</h4>
          <ul>
            <li>Exercising a statement will <strong>not detect defects in all cases</strong> — for example, data-dependent defects (e.g., a division by zero that only fails when the denominator is set to zero).</li>
            <li>100% statement coverage does <strong>not ensure all decision logic</strong> has been tested — it may not exercise all branches in the code.</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>4.3.2 Branch Testing and Branch Coverage</h3>
        <p>A <strong>branch</strong> is a transfer of control between two nodes in the control flow graph, showing the possible sequences in which source code statements are executed. Each transfer of control can be:</p>
        <ul>
          <li><strong>Unconditional</strong> (straight-line code)</li>
          <li><strong>Conditional</strong> (a decision outcome)</li>
        </ul>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Coverage Formula</h4>
          <p><em>Number of branches exercised by test cases ÷ Total number of branches × 100%</em></p>
        </div>

        <p>When <strong>100% branch coverage</strong> is achieved:</p>
        <ul>
          <li>All branches in the code — both unconditional and conditional — are exercised.</li>
          <li>Conditional branches typically correspond to: true/false outcomes from <strong>"if...then"</strong> decisions, outcomes from <strong>switch/case</strong> statements, or decisions to exit or continue in a <strong>loop</strong>.</li>
        </ul>

        <div class="concept-block" style="background: rgba(255,200,50,0.08); padding: 1rem; border-radius: 8px; border-left: 4px solid rgba(255,200,50,0.5); margin-top: 1rem;">
          <h4>⚠️ Limitation</h4>
          <p>Exercising a branch will not detect defects in all cases — for example, it may not detect defects requiring the execution of a <strong>specific path</strong> in the code.</p>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Key Relationship: Branch Coverage Subsumes Statement Coverage</h4>
          <p>Any set of test cases achieving <strong>100% branch coverage</strong> also achieves <strong>100% statement coverage</strong> — but <strong>not vice versa</strong>.</p>
          <p><em>This means branch coverage is the stronger criterion. If you achieve full branch coverage, you automatically have full statement coverage.</em></p>
        </div>
      </div>

      <div class="concept-block highlight-box">
        <h3>4.3.3 The Value of White-Box Testing</h3>

        <div class="comparison-grid">
          <div class="grid-item">
            <h4>✅ Strengths</h4>
            <ul>
              <li>The <strong>entire software implementation</strong> is taken into account during testing.</li>
              <li>Facilitates defect detection even when the software specification is <strong>vague, outdated, or incomplete</strong>.</li>
              <li>Provides an <strong>objective measurement of coverage</strong> and the information needed to generate additional tests to increase coverage and confidence.</li>
              <li>Can be used in <strong>static testing</strong> (e.g., dry runs of code) and is well suited for reviewing code not yet ready for execution, pseudocode, and high-level logic modeled with control flow graphs.</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>⚠️ Weaknesses</h4>
            <ul>
              <li>If the software <strong>does not implement one or more requirements</strong>, white-box testing may <strong>not detect the resulting defects of omission</strong>.</li>
              <li>Only black-box testing does not provide a measure of actual code coverage — but white-box fills this gap.</li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the coverage item in statement testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Executable statements. The aim is to design test cases that exercise statements in the code until an acceptable level of coverage is achieved. Coverage is measured as the number of statements exercised divided by the total number of executable statements.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Does 100% statement coverage guarantee that all decision logic has been tested?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No. 100% statement coverage does not ensure that all decision logic has been tested. For example, it may not exercise all branches in the code. A conditional statement might only be exercised with one outcome (true or false), not both.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the relationship between branch coverage and statement coverage?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Branch coverage subsumes statement coverage. Any set of test cases achieving 100% branch coverage also achieves 100% statement coverage, but not vice versa. This makes branch coverage the stronger criterion.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is a branch in the context of branch testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A branch is a transfer of control between two nodes in the control flow graph. It can be unconditional (straight-line code) or conditional (a decision outcome). Conditional branches typically correspond to true/false outcomes from "if...then" decisions, outcomes from switch/case statements, or decisions to exit or continue in a loop.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is a key strength of white-box testing when specifications are incomplete?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> White-box testing takes the entire software implementation into account, which facilitates defect detection even when the software specification is vague, outdated, or incomplete. This is a fundamental strength shared by all white-box techniques.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What type of defect might white-box testing fail to detect?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Defects of omission — if the software does not implement one or more requirements, white-box testing may not detect the resulting defects because it tests what is implemented, not what is missing.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

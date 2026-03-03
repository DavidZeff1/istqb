const e={title:"4.2 Black-Box Test Techniques",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>The commonly used black-box test techniques covered in this syllabus are:</p>
        <ol>
          <li><strong>Equivalence Partitioning (EP)</strong></li>
          <li><strong>Boundary Value Analysis (BVA)</strong></li>
          <li><strong>Decision Table Testing</strong></li>
          <li><strong>State Transition Testing</strong></li>
        </ol>
      </div>

      <div class="concept-block">
        <h3>4.2.1 Equivalence Partitioning (EP)</h3>
        <p>EP divides data into <strong>partitions</strong> (equivalence partitions) based on the expectation that all elements of a given partition are processed <strong>in the same way</strong> by the test object.</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Core Principle</h4>
          <p>If a test case that tests one value from a partition detects a defect, this defect should also be detected by test cases testing <strong>any other value</strong> from the same partition. Therefore, <strong>one test per partition is sufficient</strong>.</p>
        </div>

        <p><strong>Key characteristics of equivalence partitions:</strong></p>
        <ul>
          <li>Can be identified for <strong>any data element</strong>: inputs, outputs, configuration items, internal values, time-related values, and interface parameters.</li>
          <li>May be continuous or discrete, ordered or unordered, finite or infinite.</li>
          <li>Must <strong>not overlap</strong> and must be <strong>non-empty sets</strong>.</li>
          <li>Partitioning should be done <strong>with care</strong> — understanding how the test object treats different values can be complicated.</li>
        </ul>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Valid Partitions</h4>
            <p>Contain values that <strong>should be processed</strong> by the test object, or values for which the specification defines processing.</p>
          </div>
          <div class="grid-item">
            <h4>Invalid Partitions</h4>
            <p>Contain values that <strong>should be ignored or rejected</strong> by the test object, or values for which no processing is defined in the specification.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Coverage</h4>
          <p>Coverage items = equivalence partitions. To achieve <strong>100% coverage</strong>, test cases must exercise <strong>all identified partitions</strong> (including invalid ones) by covering each partition at least once.</p>
          <p><strong>Formula:</strong> <em>Number of partitions exercised ÷ Total number of identified partitions × 100%</em></p>
          <p>When there are <strong>multiple sets of partitions</strong> (e.g., multiple input parameters), the simplest coverage criterion is <strong>Each Choice coverage</strong> — requiring test cases to exercise each partition from each set at least once. Each Choice coverage does <strong>not</strong> take combinations of partitions into account.</p>
        </div>
      </div>

      <div class="concept-block">
        <h3>4.2.2 Boundary Value Analysis (BVA)</h3>
        <p>BVA is based on exercising the <strong>boundaries of equivalence partitions</strong>. It can only be used for <strong>ordered partitions</strong>. The minimum and maximum values of a partition are its boundary values.</p>

        <div class="concept-block" style="background: rgba(255,200,50,0.08); padding: 1rem; border-radius: 8px; border-left: 4px solid rgba(255,200,50,0.5); margin-bottom: 1rem;">
          <h4>⚠️ Why Boundaries?</h4>
          <p>Developers are <strong>more likely to make errors</strong> with boundary values. Typical defects found by BVA are where implemented boundaries are <strong>misplaced</strong> (above or below their intended positions) or <strong>omitted altogether</strong>.</p>
        </div>

        <div class="comparison-grid">
          <div class="grid-item">
            <h4>2-Value BVA</h4>
            <p>For each boundary: <strong>2 coverage items</strong>:</p>
            <ul>
              <li>The boundary value itself</li>
              <li>Its closest neighbor belonging to the <strong>adjacent partition</strong></li>
            </ul>
            <p><strong>100% coverage:</strong> Exercise all identified boundary values.</p>
          </div>
          <div class="grid-item">
            <h4>3-Value BVA</h4>
            <p>For each boundary: <strong>3 coverage items</strong>:</p>
            <ul>
              <li>The boundary value itself</li>
              <li><strong>Both</strong> its neighbors (one from each side)</li>
            </ul>
            <p><strong>100% coverage:</strong> Exercise all boundary values and their neighbors.</p>
          </div>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>3-Value BVA is More Rigorous</h4>
          <p>3-value BVA may detect defects overlooked by 2-value BVA.</p>
          <p><strong>Example:</strong> If <code>if (x ≤ 10)</code> is incorrectly implemented as <code>if (x = 10)</code>, the 2-value BVA tests (x=10, x=11) would <em>not</em> detect the defect. However, x=9 from 3-value BVA is likely to detect it.</p>
        </div>
      </div>

      <div class="concept-block">
        <h3>4.2.3 Decision Table Testing</h3>
        <p>Decision tables test the implementation of requirements that specify how different <strong>combinations of conditions</strong> result in different <strong>outcomes</strong>. They are an effective way of recording <strong>complex logic</strong> (e.g., business rules).</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Structure of a Decision Table</h4>
          <ul>
            <li><strong>Rows:</strong> Conditions and resulting actions.</li>
            <li><strong>Columns:</strong> Decision rules — each defines a unique combination of conditions with associated actions.</li>
            <li><strong>Limited-entry:</strong> All values shown as Boolean (true/false).</li>
            <li><strong>Extended-entry:</strong> Conditions/actions may take on multiple values (ranges, partitions, discrete values).</li>
          </ul>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Notation</h4>
          <ul>
            <li><strong>"T"</strong> — condition is satisfied (true)</li>
            <li><strong>"F"</strong> — condition is not satisfied (false)</li>
            <li><strong>"–"</strong> — value of the condition is irrelevant for the action outcome</li>
            <li><strong>"N/A"</strong> — condition is infeasible for a given rule</li>
            <li><strong>"X"</strong> — action should occur</li>
            <li><strong>Blank</strong> — action should not occur</li>
          </ul>
        </div>

        <p><strong>Table management:</strong></p>
        <ul>
          <li>A <strong>full decision table</strong> covers every combination of conditions.</li>
          <li>Tables can be <strong>simplified</strong> by deleting columns with infeasible combinations.</li>
          <li>Tables can be <strong>minimized</strong> by merging columns where certain conditions don't affect the outcome.</li>
        </ul>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Coverage</h4>
          <p>Coverage items = columns containing <strong>feasible combinations</strong> of conditions. <strong>100% coverage</strong> means exercising all feasible columns.</p>
          <p><strong>Formula:</strong> <em>Number of exercised columns ÷ Total number of feasible columns × 100%</em></p>
        </div>

        <p style="margin-top: 1rem;"><strong>Strengths & considerations:</strong></p>
        <ul>
          <li><strong>Strength:</strong> Systematic approach to identifying all combinations of conditions — finds gaps and contradictions in requirements.</li>
          <li><strong>Consideration:</strong> The number of rules grows <strong>exponentially</strong> with the number of conditions. Use minimized tables or risk-based approaches to manage this.</li>
        </ul>
      </div>

      <div class="concept-block">
        <h3>4.2.4 State Transition Testing</h3>
        <p>A <strong>state diagram</strong> models the behavior of a system by showing its possible states and valid state transitions. A transition is initiated by an <strong>event</strong>, which may be qualified by a <strong>guard condition</strong>. Transitions may result in the software taking an <strong>action</strong>.</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Transition Labeling Syntax</h4>
          <p><strong>"event [guard condition] / action"</strong></p>
          <p><em>Guard conditions and actions can be omitted if they don't exist or are irrelevant.</em></p>
        </div>

        <p><strong>State Table</strong> — a model equivalent to a state diagram:</p>
        <ul>
          <li><strong>Rows:</strong> States</li>
          <li><strong>Columns:</strong> Events (with guard conditions if they exist)</li>
          <li><strong>Cells:</strong> Target state and resulting actions</li>
          <li><strong>Empty cells:</strong> Represent <strong>invalid transitions</strong> (explicitly shown, unlike in state diagrams)</li>
        </ul>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Three Coverage Criteria</h4>

          <div style="margin-bottom: 1rem; padding: 0.75rem; background: rgba(255,255,255,0.05); border-radius: 8px;">
            <p><strong>1. All States Coverage</strong></p>
            <p>Coverage items = <strong>states</strong>. Test cases must ensure all states are exercised.</p>
            <p><em>Weakest criterion — can typically be achieved without exercising all transitions.</em></p>
          </div>

          <div style="margin-bottom: 1rem; padding: 0.75rem; background: rgba(255,255,255,0.05); border-radius: 8px;">
            <p><strong>2. Valid Transitions Coverage (0-switch)</strong></p>
            <p>Coverage items = <strong>single valid transitions</strong>. Test cases must exercise all valid transitions.</p>
            <p><em>Most widely used criterion. Achieving full valid transitions coverage <strong>guarantees</strong> full all states coverage.</em></p>
          </div>

          <div style="padding: 0.75rem; background: rgba(255,255,255,0.05); border-radius: 8px;">
            <p><strong>3. All Transitions Coverage</strong></p>
            <p>Coverage items = <strong>all transitions</strong> (valid and invalid) shown in a state table. Test cases must exercise all valid transitions and <strong>attempt to execute invalid transitions</strong>.</p>
            <p><em>Strongest criterion. Achieving full all transitions coverage guarantees both full all states and full valid transitions coverage. Should be a <strong>minimum requirement for mission and safety-critical software</strong>.</em></p>
            <p>Testing only <strong>one invalid transition per test case</strong> helps avoid <strong>defect masking</strong> (where one defect prevents the detection of another).</p>
          </div>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the core principle of Equivalence Partitioning?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> EP divides data into partitions where all elements are expected to be processed in the same way. If one test case from a partition detects a defect, any other value from the same partition should also detect it. Therefore, one test per partition is sufficient.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the rules for equivalence partitions?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Equivalence partitions must not overlap and must be non-empty sets. They may be continuous or discrete, ordered or unordered, finite or infinite. They can be identified for any data element: inputs, outputs, configuration items, internal values, time-related values, and interface parameters.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between 2-value BVA and 3-value BVA?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> In 2-value BVA, each boundary has 2 coverage items: the boundary value and its closest neighbor in the adjacent partition. In 3-value BVA, each boundary has 3 coverage items: the boundary value and both its neighbors. 3-value BVA is more rigorous and may detect defects that 2-value BVA overlooks.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> BVA can only be used for which type of partitions?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> BVA can only be used for ordered partitions. If two elements belong to the same partition, all elements between them must also belong to that partition.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> In a decision table, what do "T", "F", "–", and "N/A" represent?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> "T" means the condition is satisfied (true). "F" means the condition is not satisfied (false). "–" means the value of the condition is irrelevant for the action outcome. "N/A" means the condition is infeasible for a given rule. For actions, "X" means the action should occur, and blank means it should not.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the main strength of decision table testing, and what is its main limitation?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Strength: It provides a systematic approach to identify all combinations of conditions, helping find gaps and contradictions in requirements. Limitation: The number of rules grows exponentially with the number of conditions, which can make exercising all rules time-consuming. Minimized tables or risk-based approaches can help manage this.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> List the three coverage criteria for state transition testing, from weakest to strongest.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) All States Coverage (weakest) — exercise all states. 2) Valid Transitions Coverage (0-switch, most widely used) — exercise all valid transitions. 3) All Transitions Coverage (strongest) — exercise all valid and invalid transitions. Each stronger level guarantees the one below it. All transitions coverage should be a minimum for mission and safety-critical software.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why should only one invalid transition be tested per test case in state transition testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> To avoid defect masking — a situation where one defect prevents the detection of another. Testing only one invalid transition per test case ensures that each invalid transition's behavior can be independently observed.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the "Each Choice" coverage criterion in Equivalence Partitioning with multiple sets of partitions?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Each Choice coverage requires test cases to exercise each partition from each set of partitions at least once. It is the simplest coverage criterion for multiple sets of partitions and does not take combinations of partitions into account.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

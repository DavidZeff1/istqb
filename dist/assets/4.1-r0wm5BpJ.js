const e={title:"4.1 Test Techniques Overview",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>Test techniques support the tester in <strong>test analysis</strong> (what to test) and <strong>test design</strong> (how to test). They help develop a relatively small, but sufficient, set of test cases in a <strong>systematic way</strong>.</p>
        <p>Test techniques also help the tester to define test conditions, identify coverage items, and identify test data during test analysis and design.</p>
      </div>

      <div class="concept-block">
        <h3>Three Categories of Test Techniques</h3>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Black-Box Test Techniques</h4>
            <p><em>(Specification-based)</em></p>
            <p>Based on an analysis of the <strong>specified behavior</strong> of the test object <strong>without reference to its internal structure</strong>.</p>
            <ul>
              <li>Test cases are <strong>independent of implementation</strong>.</li>
              <li>If the implementation changes but the required behavior stays the same, test cases are <strong>still useful</strong>.</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>White-Box Test Techniques</h4>
            <p><em>(Structure-based)</em></p>
            <p>Based on an analysis of the test object's <strong>internal structure and processing</strong>.</p>
            <ul>
              <li>Test cases are <strong>dependent on how the software is designed</strong>.</li>
              <li>Can only be created <strong>after the design or implementation</strong> of the test object.</li>
            </ul>
          </div>
        </div>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Experience-Based Test Techniques</h4>
          <p>Effectively use the <strong>knowledge and experience</strong> of testers for the design and implementation of test cases.</p>
          <ul>
            <li>Effectiveness depends heavily on the <strong>tester's skills</strong>.</li>
            <li>Can detect defects that may be <strong>missed</strong> by black-box and white-box techniques.</li>
            <li>Are <strong>complementary</strong> to black-box and white-box techniques — not a replacement.</li>
          </ul>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What are the three categories of test techniques?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Black-box (specification-based) techniques — based on specified behavior without reference to internal structure. White-box (structure-based) techniques — based on analysis of internal structure and processing. Experience-based techniques — using the tester's knowledge and experience.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> If the implementation of a feature changes but its required behavior stays the same, which test technique category's test cases would still be useful?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Black-box test techniques. Since they are based on specified behavior without reference to internal structure, the test cases are independent of implementation and remain useful as long as the required behavior is unchanged.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why are experience-based test techniques considered complementary to black-box and white-box techniques?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Because experience-based techniques can detect defects that may be missed by black-box and white-box techniques. They leverage the tester's knowledge and intuition to find issues that systematic techniques might not cover. They are not a replacement but an addition to the other technique categories.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> When can white-box test cases be created, and why?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> White-box test cases can only be created after the design or implementation of the test object, because they are based on an analysis of the test object's internal structure and processing. Without knowledge of the internal structure, these test cases cannot be designed.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

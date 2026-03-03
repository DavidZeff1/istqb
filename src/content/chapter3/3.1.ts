export const content = {
  title: "3.1 Static Testing Basics",
  content: `
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>In contrast to dynamic testing, in static testing the software under test <strong>does not need to be executed</strong>. Code, process specifications, system architecture specifications, or other work products are evaluated through:</p>
        <ul>
          <li><strong>Manual examination</strong> (e.g., reviews)</li>
          <li><strong>Tool-assisted analysis</strong> (e.g., static analysis)</li>
        </ul>
        <p>Test objectives include improving quality, detecting defects, and assessing characteristics like <strong>readability, completeness, correctness, testability,</strong> and <strong>consistency</strong>. Static testing can be applied for both <strong>verification</strong> and <strong>validation</strong>.</p>
      </div>

      <div class="concept-block">
        <h3>Collaborative Static Testing in Practice</h3>
        <p>Testers, business representatives (Product Owner, business analysts, etc.), and developers work together during:</p>
        <ul>
          <li><strong>Example mappings</strong></li>
          <li><strong>Collaborative user story writing</strong></li>
          <li><strong>Backlog refinement sessions</strong></li>
        </ul>
        <p>The goal is to ensure user stories and related work products meet defined criteria (e.g., the <strong>Definition of Ready</strong>). Review techniques ensure user stories are complete, understandable, and include <strong>testable acceptance criteria</strong>. By asking the right questions, testers explore, challenge, and help improve proposed user stories.</p>
      </div>

      <div class="concept-block highlight-box">
        <h3>Static Analysis</h3>
        <p><strong>Static analysis</strong> can identify problems <em>prior to</em> dynamic testing while often requiring <strong>less effort</strong> (no test cases required — tools are typically used). It is often incorporated into <strong>CI frameworks</strong> (see Section 2.1.4).</p>
        <p>Uses include:</p>
        <ul>
          <li>Detecting specific <strong>code defects</strong></li>
          <li>Evaluating <strong>maintainability</strong> and <strong>security</strong></li>
          <li>Spelling checkers and readability tools are also examples of static analysis tools</li>
        </ul>
      </div>

      <div class="concept-block">
        <h3>3.1.1 Work Products Examinable by Static Testing</h3>
        <p><strong>Almost any work product</strong> can be examined using static testing. Examples include:</p>
        <div class="highlight-box">
          <ul>
            <li>Requirement specification documents</li>
            <li>Source code</li>
            <li>Test plans and test cases</li>
            <li>Product backlog items and test charters</li>
            <li>Project documentation, contracts, and models</li>
          </ul>
        </div>
        <p style="margin-top: 1rem;"><strong>Key distinctions:</strong></p>
        <ul>
          <li>Any work product that can be <strong>read and understood</strong> can be the subject of a <strong>review</strong>.</li>
          <li>For <strong>static analysis</strong>, work products need a <strong>structure</strong> against which they can be checked (e.g., models, code, or text with a formal syntax).</li>
          <li>Work products <strong>not appropriate</strong> for static testing: those difficult to interpret by humans and that should not be analyzed by tools (e.g., 3rd party executable code due to legal reasons).</li>
        </ul>
      </div>

      <div class="concept-block">
        <h3>3.1.2 Value of Static Testing</h3>
        <p>Static testing provides significant value:</p>
        <div class="highlight-box">
          <ul>
            <li><strong>Early defect detection:</strong> Can detect defects in the earliest phases of the SDLC, fulfilling the principle of early testing.</li>
            <li><strong>Finds unique defects:</strong> Can identify defects that dynamic testing <em>cannot</em> detect (e.g., unreachable code, design patterns not implemented as desired, defects in non-executable work products).</li>
            <li><strong>Quality evaluation:</strong> Provides the ability to evaluate quality of, and build confidence in, work products.</li>
            <li><strong>Shared understanding:</strong> Since static testing can be performed early, it creates a shared understanding among involved stakeholders and improves communication.</li>
            <li><strong>Cost savings:</strong> Even though reviews can be costly to implement, overall project costs are usually <em>much lower</em> because less time and effort is spent fixing defects later.</li>
            <li><strong>Efficient code defect detection:</strong> Certain code defects can be detected using static analysis more efficiently than in dynamic testing, resulting in fewer code defects and lower overall development effort.</li>
          </ul>
        </div>
        <p><em>It is recommended to involve a <strong>wide variety of stakeholders</strong> in static testing.</em></p>
      </div>

      <div class="concept-block">
        <h3>3.1.3 Differences between Static Testing and Dynamic Testing</h3>
        <p>Static and dynamic testing <strong>complement each other</strong>. They have similar objectives (supporting defect detection), but also key differences:</p>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Static Testing</h4>
            <ul>
              <li>Finds defects <strong>directly</strong>.</li>
              <li>Can be applied to <strong>non-executable</strong> work products.</li>
              <li>More easily detects defects on <strong>rarely executed</strong> or hard-to-reach code paths.</li>
              <li>Measures quality characteristics <strong>not dependent on executing code</strong> (e.g., maintainability).</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Dynamic Testing</h4>
            <ul>
              <li>Causes <strong>failures</strong>, from which defects are determined through subsequent analysis.</li>
              <li>Can only be applied to <strong>executable</strong> work products.</li>
              <li>Measures quality characteristics <strong>dependent on executing code</strong> (e.g., performance efficiency).</li>
            </ul>
          </div>
        </div>

        <p style="margin-top: 1rem;"><em>Some defect types can only be found by either static <strong>or</strong> dynamic testing — not both.</em></p>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Typical Defects Easier/Cheaper to Find Through Static Testing</h4>
          <ul>
            <li><strong>Requirements defects:</strong> Inconsistencies, ambiguities, contradictions, omissions, inaccuracies, duplications.</li>
            <li><strong>Design defects:</strong> Inefficient database structures, poor modularization.</li>
            <li><strong>Coding defects:</strong> Variables with undefined values, undeclared variables, unreachable or duplicated code, excessive code complexity.</li>
            <li><strong>Deviations from standards:</strong> Lack of adherence to naming conventions in coding standards.</li>
            <li><strong>Incorrect interface specifications:</strong> Mismatched number, type, or order of parameters.</li>
            <li><strong>Security vulnerabilities:</strong> Buffer overflows.</li>
            <li><strong>Test basis coverage gaps:</strong> Missing tests for an acceptance criterion.</li>
          </ul>
        </div>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the key difference between static testing and dynamic testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> In static testing, the software under test does not need to be executed — work products are evaluated through manual examination (reviews) or tools (static analysis). In dynamic testing, the software is executed to find failures. Static testing finds defects directly, while dynamic testing causes failures from which defects are determined through analysis.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Can static testing be applied to non-executable work products? Give examples.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Yes. Static testing can be applied to almost any work product that can be read and understood. Examples include requirement specification documents, test plans, test cases, product backlog items, project documentation, contracts, and models.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between a review and static analysis in terms of what work products they can examine?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any work product that can be read and understood can be the subject of a review. For static analysis, work products need a structure against which they can be checked (e.g., models, code, or text with a formal syntax).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 4 types of defects that are easier or cheaper to find through static testing.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any four of: Requirements defects (inconsistencies, ambiguities, contradictions, omissions), design defects (inefficient database structures, poor modularization), coding defects (undefined variables, unreachable code, excessive complexity), deviations from standards, incorrect interface specifications, security vulnerabilities (buffer overflows), and test basis coverage gaps.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is static testing considered cost-effective even though reviews can be costly to implement?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Because overall project costs are usually much lower when reviews are performed — less time and effort needs to be spent on fixing defects later in the project. Static testing detects defects early, which aligns with the principle of early testing and reduces the cost of quality.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> How does static analysis fit into modern CI frameworks?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Static analysis is often incorporated into CI frameworks, where it automatically analyzes source code as part of the build/integration process. This allows problems to be identified prior to dynamic testing with less effort, since no test cases are required. It is used to detect code defects, evaluate maintainability, and assess security.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};

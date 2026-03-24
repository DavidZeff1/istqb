export const content = {
  title: "Chapter 6 Exam Questions & Patterns",
  content: `
    <div class="test-content">
      <div class="concept-block intro-box">
        <h3>Exam Strategy &amp; Patterns — Chapter 6</h3>
        <p>Chapter 6 covers test tools — tool categories and the benefits and risks of test automation. Only 2 questions on the exam (Q39–Q40), but they require knowing which tool categories do what. Both questions are from ISTQB Sample Exam Set D.</p>
      </div>

      <!-- SECTION 6.1 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #0891b2;">
        <h3 style="color: #0891b2;">6.1 Tool Support for Testing — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Tool categories and what they do:</strong>
            <ul>
              <li><strong>Collaboration tools</strong> — facilitate communication (e.g., Jira, Confluence, Slack). They do NOT execute tests.</li>
              <li><strong>DevOps tools</strong> — support CI/CD pipeline, automated builds, workflow tracking. The pipeline triggers test execution (e.g., running component tests on every commit). ✓ Facilitates test execution.</li>
              <li><strong>Management tools</strong> — manage SDLC, requirements, test cases, defects, configuration. They organize and track — they do NOT execute tests.</li>
              <li><strong>Non-functional testing tools</strong> — load testing, security scanning, accessibility testing. These DO execute tests (dynamically). ✓ Facilitates test execution.</li>
              <li><strong>Test design and implementation tools</strong> — generate test cases, test data, test procedures. They create testware — they do NOT run it.</li>
            </ul>
          </li>
          <li><strong>Memory aid:</strong> "Which tools actually RUN tests?" → DevOps (via CI/CD) and Non-functional testing tools. All others produce artifacts or track information.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>6.1 — Sample Exam D, Question #39 <span style="font-weight:normal; font-size:0.85em;">(FL-6.1.1, K2)</span></h3>
        <ol>
          <li>
            <strong>Q#39: Given tool categories — (i) Collaboration, (ii) DevOps, (iii) Management, (iv) Non-functional testing, (v) Test design and implementation — which categories are MOST likely to facilitate test execution?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) i, v</div>
              <div>B) ii, iv</div>
              <div>C) i, iii, v</div>
              <div>D) ii, iii, iv</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p><em>Breakdown:</em></p>
                  <ul>
                    <li>i (Collaboration) — facilitates communication, NOT execution ✗</li>
                    <li>ii (DevOps) — CI/CD pipeline directly triggers test execution (e.g., running component tests on each build) ✓</li>
                    <li>iii (Management) — manages SDLC artifacts and tests, does NOT run them ✗</li>
                    <li>iv (Non-functional testing) — actively executes tests (load, performance, security tests require dynamic execution) ✓</li>
                    <li>v (Test design/implementation) — generates testware (test cases, procedures) but does NOT execute them ✗</li>
                  </ul>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 6.2 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #0e7490; margin-top: 2.5rem;">
        <h3 style="color: #0e7490;">6.2 Benefits and Risks of Test Automation — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Benefits of automation:</strong> Reduced execution time, more consistent execution, running tests at times humans can't (nights/weekends), ability to run large volumes of tests, measures too complex for humans to derive manually, detection of additional defect types.</li>
          <li><strong>Risks of automation:</strong>
            <ul>
              <li>Incompatibility with the development platform or the SUT (system under test)</li>
              <li>High initial investment in setup and maintenance</li>
              <li>False sense of confidence (automated tests may not catch new defect types)</li>
              <li>Automation debt — scripts become outdated as the product evolves</li>
            </ul>
          </li>
          <li><strong>Key trick:</strong> Any answer that says "detecting more defects" or "faster execution" or "complex measures" is a <strong>benefit</strong>, NOT a risk. The only clear risk in the options is something that prevents automation from working at all (incompatibility) or undermines its value.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>6.2 — Sample Exam D, Question #40 <span style="font-weight:normal; font-size:0.85em;">(FL-6.2.1, K1)</span></h3>
        <ol>
          <li>
            <strong>Q#40: Which is MOST likely to be a RISK of test automation?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) The detection of additional high-severity defects</div>
              <div>B) Providing measures too complicated for humans to derive</div>
              <div>C) Incompatibility with the development platform</div>
              <div>D) Substantially reduced test execution times</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Why A is wrong:</em> Finding additional high-severity defects is a <strong>benefit</strong> of automation.</p>
                  <p><em>Why B is wrong:</em> Providing complex measures that humans can't derive manually is a <strong>benefit</strong> of automation.</p>
                  <p><em>Why C is correct:</em> If the test automation tool is incompatible with the development platform, it cannot integrate with the system under test — it can't send inputs or receive outputs. This is a genuine risk that can make automation fail entirely.</p>
                  <p><em>Why D is wrong:</em> Substantially reduced execution times is a primary <strong>benefit</strong> of automation.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <div class="concept-block highlight-box" style="border-left: 4px solid #155e75; margin-top: 2.5rem; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);">
        <h3 style="color: #155e75;">🎯 Full Exam Summary — All 40 Questions at a Glance</h3>
        <p style="margin-bottom: 0.75rem;">All Sample Exam D questions are now covered across Chapter tabs 7.1 through 7.6:</p>
        <ul>
          <li><strong>7.1 Chapter 1:</strong> Q1–Q8 (FL-1.1 to FL-1.5) — Testing fundamentals, principles, activities, roles</li>
          <li><strong>7.2 Chapter 2:</strong> Q9–Q14 (FL-2.1 to FL-2.3) — SDLC, test levels/types, maintenance testing</li>
          <li><strong>7.3 Chapter 3:</strong> Q15–Q18 (FL-3.1 to FL-3.2) — Static testing, review process and roles</li>
          <li><strong>7.4 Chapter 4:</strong> Q19–Q29 (FL-4.1 to FL-4.5) — All test techniques (EP, BVA, Decision Tables, State Transitions, White-box, Exploratory)</li>
          <li><strong>7.5 Chapter 5:</strong> Q30–Q38 (FL-5.1 to FL-5.5) — Test management, risk, estimation, prioritization, defect reporting</li>
          <li><strong>7.6 Chapter 6:</strong> Q39–Q40 (FL-6.1 to FL-6.2) — Tool categories, automation benefits and risks</li>
        </ul>
        <p style="margin-top: 0.75rem;"><strong>Exam format reminder:</strong> 40 questions, 65 minutes, 65% pass mark (26/40). Questions 20, 30, and 35 require selecting TWO correct answers.</p>
      </div>

    </div>
  `
};

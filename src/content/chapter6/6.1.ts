export const content = {
  title: "6.1 Tool Support for Testing",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Your Testing Toolkit</h3>
        <p>You're part of a QA team at a <strong>fintech startup</strong> building a mobile banking app. Your "toolkit" isn't just Selenium — it's everything from Jira to Docker to a shared Google Sheet tracking edge cases. The ISTQB defines a test tool as <strong>any tool that assists in testing</strong> — yes, even a spreadsheet.</p>
      </section>

      <!-- ==================== CATEGORIES ==================== -->
      <section class="concept-block">
        <h3>9 Categories of Test Tools</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Category</th>
                <th style="text-align:left; padding:0.5rem;">What It Does</th>
                <th style="text-align:left; padding:0.5rem;">Real-World Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>1. Test Management</strong></td>
                <td>Manage SDLC, requirements, tests, defects, configurations</td>
                <td>Jira, TestRail, Azure DevOps, Zephyr</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>2. Static Testing</strong></td>
                <td>Support reviews and static analysis</td>
                <td>SonarQube, ESLint, Crucible, Codacy</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>3. Test Design & Implementation</strong></td>
                <td>Generate test cases, test data, test procedures</td>
                <td>Tricentis Tosca, Combinatorial test generators, Faker.js (test data)</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>4. Test Execution & Coverage</strong></td>
                <td>Automated test execution + coverage measurement</td>
                <td>Selenium, Playwright, Cypress, Istanbul (coverage), JaCoCo</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>5. Non-Functional Testing</strong></td>
                <td>Performance, security, accessibility — hard/impossible manually</td>
                <td>JMeter, k6, OWASP ZAP, Lighthouse, Axe</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>6. DevOps</strong></td>
                <td>CI/CD pipeline, workflow, automated builds</td>
                <td>Jenkins, GitHub Actions, GitLab CI, CircleCI</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>7. Collaboration</strong></td>
                <td>Facilitate team communication</td>
                <td>Slack, Microsoft Teams, Confluence, Miro</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>8. Scalability & Deployment</strong></td>
                <td>VMs, containers, standardized environments</td>
                <td>Docker, Kubernetes, Terraform, Vagrant</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>9. Any Other Tool</strong></td>
                <td>Anything that assists testing in context</td>
                <td>Google Sheets for test tracking, Postman for API exploration, browser DevTools</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <h4>🧠 Memory Trick</h4>
          <p><strong>"MaST DENCo-SS Any"</strong> → Management, Static, Test design, DevOps, Execution, Non-functional, Collaboration, Scalability, Any other</p>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Fintech Example — How These Tools Work Together</h4>
          <p>Building a mobile banking app's "Send Money" feature:</p>
          <ol>
            <li><strong>Management:</strong> Jira tracks user story BANK-1234 "Send Money"</li>
            <li><strong>Static:</strong> SonarQube flags an SQL injection risk in the transfer query</li>
            <li><strong>Design:</strong> Combinatorial tool generates 48 test cases for currency × amount × recipient type</li>
            <li><strong>Execution:</strong> Playwright runs automated E2E tests on 3 browsers</li>
            <li><strong>Coverage:</strong> Istanbul shows 78% branch coverage → team adds tests for error handling paths</li>
            <li><strong>Non-functional:</strong> k6 simulates 10,000 concurrent transfers to test throughput</li>
            <li><strong>DevOps:</strong> GitHub Actions runs all tests on every PR merge</li>
            <li><strong>Collaboration:</strong> Slack #qa-banking channel discusses a flaky test</li>
            <li><strong>Scalability:</strong> Docker ensures identical test environments across all CI runners</li>
          </ol>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> Name at least 6 categories of test tools.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any six of: Test management, static testing, test design & implementation, test execution & coverage, non-functional testing, DevOps, collaboration, scalability & deployment, and any other tool that assists in testing.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Can a spreadsheet be considered a test tool?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Yes. Any tool that assists in testing is a test tool in context. A spreadsheet used for tracking test cases, test data, or results qualifies.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What types of tools support the DevOps pipeline?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> DevOps tools (CI/CD pipeline, workflow tracking, automated builds — e.g., Jenkins, GitHub Actions) and scalability/deployment tools (VMs, containers — e.g., Docker, Kubernetes) both support the DevOps pipeline.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A QA team uses Jira for bug tracking, SonarQube for code analysis, Playwright for E2E tests, k6 for load testing, and Docker for test environments. Which 5 tool categories do these represent?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Jira = <strong>test management</strong>. SonarQube = <strong>static testing</strong>. Playwright = <strong>test execution & coverage</strong>. k6 = <strong>non-functional testing</strong>. Docker = <strong>scalability & deployment standardization</strong>.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why are non-functional testing tools important?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> They allow testers to perform non-functional testing (performance, security, accessibility) that is <strong>difficult or impossible to perform manually</strong>. For example, you can't manually simulate 10,000 concurrent users — you need a tool like JMeter or k6.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

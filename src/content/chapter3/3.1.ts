import audio31 from "./audio/31audio.m4a";

export const content = {
  title: "3.1 Static Testing Basics",
  audioSrc: audio31,
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Finding Bugs Without Running Code</h3>
        <p>Imagine your team is building a <strong>healthcare appointment booking system</strong>. A developer writes a function that lets patients book appointments for "any date including past dates." A tester catches this <strong>during a code review</strong> — before a single patient ever uses the system.</p>
        <p>That's <strong>static testing</strong> — examining work products <strong>without executing the software</strong>. It's like proofreading a blueprint before construction starts. You don't need a running building to spot that the architect forgot a fire exit.</p>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Two Forms of Static Testing</h4>
            <ul>
              <li><strong>Manual examination (Reviews):</strong> Humans read and assess work products — requirements, code, test plans, designs</li>
              <li><strong>Tool-assisted (Static Analysis):</strong> Tools automatically scan code or models — linters, security scanners, complexity analyzers</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>What It Evaluates</h4>
            <ul>
              <li><strong>Readability</strong> — Can others understand this?</li>
              <li><strong>Completeness</strong> — Is anything missing?</li>
              <li><strong>Correctness</strong> — Is this actually right?</li>
              <li><strong>Testability</strong> — Can we test this?</li>
              <li><strong>Consistency</strong> — Does it contradict other docs?</li>
            </ul>
          </div>
        </div>

        <p>Static testing can be used for both <strong>verification</strong> ("did we build it right?") and <strong>validation</strong> ("did we build the right thing?").</p>
      </section>

      <!-- ==================== COLLABORATIVE STATIC TESTING ==================== -->
      <section class="concept-block">
        <h3>Collaborative Static Testing in Practice</h3>
        <p><strong>Real scenario:</strong> During a backlog refinement session for the healthcare booking system, the product owner presents a user story:</p>
        <div class="highlight-box" style="margin: 1rem 0;">
          <p><em>"As a patient, I want to book an appointment so that I can see my doctor."</em></p>
        </div>
        <p>The tester asks: <em>"What happens if the patient tries to book 3 appointments on the same day? What about weekends? What about doctors who are on leave?"</em></p>
        <p>These questions force the team to refine acceptance criteria <strong>before a single line of code is written</strong>. This is collaborative static testing — testers, BAs, developers, and POs working together during:</p>
        <ul>
          <li><strong>Example mappings</strong> — turning rules into concrete examples</li>
          <li><strong>Collaborative user story writing</strong> — creating stories with all perspectives</li>
          <li><strong>Backlog refinement</strong> — ensuring stories meet the <strong>Definition of Ready</strong></li>
        </ul>
      </section>

      <!-- ==================== STATIC ANALYSIS ==================== -->
      <section class="concept-block highlight-box">
        <h3>Static Analysis — Automated Code Inspection</h3>
        <p><strong>Real scenario:</strong> The healthcare system's CI pipeline runs ESLint, SonarQube, and a security scanner on every pull request. Before any human reviews the code, the tools flag:</p>
        <ul>
          <li>🔴 <strong>Security:</strong> SQL injection vulnerability in the patient search query</li>
          <li>🟡 <strong>Maintainability:</strong> Function <code>processAppointment()</code> has a cyclomatic complexity of 47 (way too complex)</li>
          <li>🟡 <strong>Code smell:</strong> Unused variable <code>tempDate</code> assigned but never read</li>
        </ul>
        <p>All found <strong>without executing a single test case</strong>. Static analysis is often incorporated into <strong>CI frameworks</strong>, catching problems before dynamic testing even starts.</p>
      </section>

      <!-- ==================== WORK PRODUCTS ==================== -->
      <section class="concept-block">
        <h3>3.1.1 What Can You Examine with Static Testing?</h3>
        <p><strong>Almost any work product</strong> can be reviewed. The key rules:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Method</th>
                <th style="text-align:left; padding:0.5rem;">What It Can Examine</th>
                <th style="text-align:left; padding:0.5rem;">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Reviews</strong></td><td>Anything that can be <strong>read and understood</strong></td><td>Requirements docs, test plans, contracts, user stories, models, project docs</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Static Analysis</strong></td><td>Work products with <strong>structure</strong> that tools can check</td><td>Source code, models, formal specs, text with defined syntax</td></tr>
              <tr><td style="padding:0.4rem;"><strong>NOT appropriate</strong></td><td>Hard to interpret by humans <strong>or</strong> shouldn't be tool-analyzed</td><td>Third-party compiled code (legal reasons), obfuscated binaries</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ==================== VALUE ==================== -->
      <section class="concept-block">
        <h3>3.1.2 The Value of Static Testing</h3>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Memory Trick — "ESCU-QC" (Early Saves CU Quality & Cash)</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Benefit</th>
                <th style="text-align:left; padding:0.5rem;">Healthcare System Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Early defect detection</strong></td><td>Catching "past date booking" in requirements review — before code is written</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Finds unique defects</strong></td><td>Unreachable code path in appointment scheduler — dynamic tests never even execute it</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Quality evaluation</strong></td><td>Code complexity metrics prove the codebase is maintainable before release</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Shared understanding</strong></td><td>All team members review the appointment flow diagram together — everyone aligned</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Cost savings</strong></td><td>$2,000 for a 2-hour review vs. $200,000 for a HIPAA violation caught post-launch</td></tr>
              <tr><td style="padding:0.4rem;"><strong>Efficient code defect detection</strong></td><td>Static analysis finds buffer overflows faster than writing dynamic test cases for each</td></tr>
            </tbody>
          </table>
        </div>
        <p><em>Involve a <strong>wide variety of stakeholders</strong> — devs, testers, BAs, and security experts each catch different things.</em></p>
      </section>

      <!-- ==================== STATIC VS DYNAMIC ==================== -->
      <section class="concept-block">
        <h3>3.1.3 Static vs. Dynamic Testing — They Complete Each Other</h3>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Static Testing</h4>
            <ul>
              <li>Finds defects <strong>directly</strong> (no need to trigger a failure)</li>
              <li>Works on <strong>non-executable</strong> work products (requirements, designs)</li>
              <li>Catches defects on <strong>rarely executed</strong> code paths that dynamic tests might miss</li>
              <li>Measures <strong>non-execution</strong> quality (maintainability, readability)</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Dynamic Testing</h4>
            <ul>
              <li>Causes <strong>failures</strong> → defects determined through analysis</li>
              <li>Only works on <strong>executable</strong> code</li>
              <li>Measures <strong>execution-dependent</strong> quality (performance, response time)</li>
              <li>Can catch defects that only appear under <strong>specific runtime conditions</strong></li>
            </ul>
          </div>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Defect Types Easier/Cheaper to Find with Static Testing</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Defect Category</th>
                <th style="text-align:left; padding:0.5rem;">Healthcare Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Requirements:</strong> ambiguities, contradictions, omissions</td><td>"Patient can book any time" contradicts "Clinic closes at 5pm"</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Design:</strong> poor modularization</td><td>Appointment CRUD and billing logic crammed into one god-class</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Code:</strong> unreachable code, undefined variables</td><td>Dead <code>else</code> branch in doctor availability check</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Standards violations</strong></td><td>Variable <code>x</code> instead of <code>appointmentDate</code> — violates naming conventions</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Interface spec errors</strong></td><td>API expects <code>patientId: number</code> but caller sends <code>patientId: string</code></td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Security vulnerabilities</strong></td><td>Buffer overflow in the patient record parser</td></tr>
              <tr><td style="padding:0.4rem;"><strong>Test basis gaps</strong></td><td>Acceptance criteria missing for "cancel appointment" scenario</td></tr>
            </tbody>
          </table>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam key:</strong> Static testing finds defects <strong>directly</strong>. Dynamic testing causes <strong>failures</strong>, from which defects are then determined. Some defects can ONLY be found by one or the other — that's why they <strong>complement</strong> each other.</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the fundamental difference between static and dynamic testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Static testing examines work products <strong>without executing</strong> the software (through reviews or static analysis tools). Dynamic testing <strong>executes</strong> the software to find failures. Static testing finds defects directly; dynamic testing causes failures from which defects are determined.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> During a code review of the appointment system, a reviewer notices a function that can never be reached because the conditional above it always evaluates to false. Would dynamic testing have caught this?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Likely not. Dynamic testing would never execute this unreachable code path, so it wouldn't detect the defect. This is exactly the type of defect static testing excels at finding — defects on rarely executed or unreachable code paths.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What's the difference between reviews and static analysis in terms of what they can examine?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Reviews can examine any work product that can be read and understood (requirements, designs, test plans, contracts). Static analysis needs work products with structure that tools can check against (source code, models, text with formal syntax).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 4 types of defects easier or cheaper to find through static testing.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any 4 of: Requirements defects (ambiguities, contradictions, omissions), design defects (poor modularization), coding defects (undefined variables, unreachable code), standards violations, interface spec errors (parameter mismatches), security vulnerabilities (buffer overflows), test basis coverage gaps.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is static testing cost-effective even though reviews can be expensive to run?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Overall project costs are much lower because defects found early through reviews are far cheaper to fix than defects found during dynamic testing or in production. A 2-hour review that catches a requirements contradiction saves weeks of rework and potential compliance violations later.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> How does static analysis fit into modern CI frameworks?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Static analysis tools (linters, security scanners, complexity analyzers) are integrated into CI pipelines and run automatically on every commit or pull request. They identify code defects, security vulnerabilities, and maintainability issues before dynamic testing, without requiring any test cases.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A team skips requirements review and jumps straight to coding. During system testing 3 months later, they discover the system allows double-booking appointments — a requirement was ambiguous. How could static testing have helped?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A requirements review would have caught the ambiguity early — before coding started. The tester would have asked "Can a patient have two appointments at the same time?" and the team would have clarified the requirement. Instead, 3 months of development was done on a flawed requirement, requiring expensive rework. This illustrates static testing's key value: early defect detection and shared understanding.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

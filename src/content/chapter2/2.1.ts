import audio21 from "./audio/21audio.m4a";

export const content = {
  title:
    "2.1 Testing in the Context of a Software Development Lifecycle (SDLC)",
  audioSrc: audio21,
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — How You Build Software Changes How You Test It</h3>
        <p>Before a team writes a single line of code, they choose <strong>how</strong> they're going to build the software. That choice is called an <strong>SDLC model</strong> (Software Development Lifecycle model) — it's the game plan for how the project moves from idea to finished product.</p>
        <p><strong>Why does this matter for testing?</strong> Because the SDLC model dictates <em>when</em> you test, <em>how much</em> you test, <em>what tools</em> you use, and <em>how detailed</em> your documentation needs to be. Testing a banking app built in Waterfall looks completely different from testing one built in Scrum.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>The Three Families of SDLC Models</h4>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Type</th>
                <th style="text-align:left; padding:0.5rem;">How It Works</th>
                <th style="text-align:left; padding:0.5rem;">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Sequential</strong></td><td>One phase finishes completely before the next begins. Like building a house — foundation, walls, roof, in order.</td><td>Waterfall, V-model</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Iterative</strong></td><td>Go through the full cycle multiple times, refining each round. Like sculpting — rough shape first, then detail.</td><td>Spiral, Prototyping</td></tr>
              <tr><td style="padding:0.4rem;"><strong>Incremental</strong></td><td>Build and deliver the product in chunks. Like publishing a book chapter by chapter.</td><td>Unified Process</td></tr>
            </tbody>
          </table>
        </div>
        <p>Agile practices like <strong>Scrum, Kanban, XP, TDD, ATDD, BDD</strong> fit within iterative/incremental models and add specific methods on top.</p>
      </section>

      <!-- ==================== 2.1.1 IMPACT OF SDLC ==================== -->
      <section class="concept-block">
        <h3>2.1.1 Impact of the SDLC on Testing</h3>
        <p><strong>Real scenario — same app, two different SDLCs:</strong></p>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Waterfall: Hospital Records System</h4>
            <p>A government hospital needs a patient records system. Requirements are fixed by regulation — they won't change. The team uses <strong>Waterfall</strong>.</p>
            <ul>
              <li>Testers <strong>review requirements</strong> in month 1 (static testing — no code exists yet)</li>
              <li>Design test cases in month 2-3 while devs are coding</li>
              <li><strong>Can't run any tests</strong> until month 4 when code is finally delivered</li>
              <li>Detailed, heavy documentation (regulators will audit it)</li>
            </ul>
            <p><em>Dynamic testing is <strong>impossible early on</strong> because there's no running code yet.</em></p>
          </div>
          <div class="grid-item">
            <h4>Scrum: Food Delivery App</h4>
            <p>A startup is building a food delivery app. Features change based on user feedback every 2 weeks. They use <strong>Scrum</strong>.</p>
            <ul>
              <li>Every sprint delivers <strong>working features</strong> — testers test them immediately</li>
              <li>Both static and dynamic testing happen <strong>every sprint</strong></li>
              <li>Lightweight docs — user stories, not 100-page specs</li>
              <li><strong>Heavy test automation</strong> for regression (features keep piling up)</li>
              <li>Manual testing uses <strong>experience-based techniques</strong> — quick, exploratory</li>
            </ul>
            <p><em>Fast feedback is critical — a bug found today needs to be fixed today.</em></p>
          </div>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam key — the SDLC model impacts 5 things:</strong></p>
          <ol style="margin: 0.5rem 0 0 1.5rem;">
            <li>Scope and timing of test activities</li>
            <li>Level of detail of test documentation</li>
            <li>Choice of test techniques and approach</li>
            <li>Extent of test automation</li>
            <li>Role and responsibilities of a tester</li>
          </ol>
        </div>
      </section>

      <!-- ==================== 2.1.2 GOOD PRACTICES ==================== -->
      <section class="concept-block">
        <h3>2.1.2 Good Testing Practices (Apply to ANY SDLC)</h3>
        <p>No matter if you're using Waterfall, Scrum, or anything else — these 4 rules always apply:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Rule</th>
                <th style="text-align:left; padding:0.5rem;">What It Means</th>
                <th style="text-align:left; padding:0.5rem;">Real Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Every dev activity has a test activity</strong></td><td>Nothing gets built without being tested</td><td>Devs write login code → testers have login test cases ready</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Different test levels = different objectives</strong></td><td>Unit tests catch different things than system tests</td><td>Unit test checks if password hashing works; system test checks the full login flow</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Test analysis starts during development</strong></td><td>Don't wait until code is done to start thinking about tests</td><td>While devs design the payment module, testers are already identifying test conditions for it</td></tr>
              <tr><td style="padding:0.4rem;"><strong>Testers review work products early</strong></td><td>Look at requirements/designs as soon as drafts exist</td><td>Tester reads the draft requirement: <em>"User can transfer unlimited amounts"</em> → flags: <em>"Shouldn't there be a daily limit?"</em></td></tr>
            </tbody>
          </table>
        </div>

        <div class="definition-box highlight-box" style="padding: 0.8rem; margin-top: 0.5rem; border-radius: 8px;">
          <p style="margin: 0;">⚠️ <strong>Exam tip:</strong> The question might say "which practice is specific to Agile?" — trick answer: these 4 practices apply to <strong>ALL</strong> SDLC models.</p>
        </div>
      </section>

      <!-- ==================== 2.1.3 TDD / ATDD / BDD ==================== -->
      <section class="concept-block">
        <h3>2.1.3 Testing as a Driver for Development — TDD, ATDD, BDD</h3>
        <p>Normally: code first → test later. These 3 approaches <strong>flip it</strong>: <strong>test first → code later</strong>. They're all "shift left" in action — tests are written <em>before</em> the code exists.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>TDD — Test-Driven Development</h4>
          <p><strong>Who uses it?</strong> Developers, at the code level.</p>
          <p><strong>Real scenario:</strong> A developer needs to write a function that calculates shipping costs. Before writing <em>any</em> code, they write a test:</p>
          <pre style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 6px; margin: 0.5rem 0; overflow-x: auto;"><code>test("shipping for order under $50 = $5.99", () => {
  expect(calculateShipping(49.99)).toBe(5.99);
});</code></pre>
          <p>Then they write the code to make that test pass. Then they refactor. <strong>Red → Green → Refactor.</strong></p>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>ATDD — Acceptance Test-Driven Development</h4>
          <p><strong>Who uses it?</strong> The whole team (dev, tester, product owner) — at the feature level.</p>
          <p><strong>Real scenario:</strong> Before building the "checkout" feature, the team writes acceptance criteria together:</p>
          <ul>
            <li><em>"User with items in cart can complete purchase with valid credit card"</em></li>
            <li><em>"User sees error if card is declined"</em></li>
            <li><em>"Order confirmation email is sent within 60 seconds"</em></li>
          </ul>
          <p>These acceptance criteria <strong>become the tests</strong>. The devs then build the feature to pass them. Everyone agrees upfront on what "done" means.</p>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>BDD — Behavior-Driven Development</h4>
          <p><strong>Who uses it?</strong> Everyone — written in plain English so even non-technical stakeholders understand.</p>
          <p><strong>Real scenario:</strong> The product owner writes (or reviews) test scenarios in <strong>Given/When/Then</strong> format:</p>
          <pre style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 6px; margin: 0.5rem 0; overflow-x: auto;"><code>Given the user has items in their cart
When they enter a valid credit card and click "Pay"
Then the order should be confirmed
And a confirmation email should be sent</code></pre>
          <p>This plain-English spec is then <strong>automatically translated into executable tests</strong> (using tools like Cucumber, SpecFlow).</p>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🧠 <strong>Quick comparison:</strong></p>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;"></th>
                <th style="text-align:left; padding:0.4rem;">TDD</th>
                <th style="text-align:left; padding:0.4rem;">ATDD</th>
                <th style="text-align:left; padding:0.4rem;">BDD</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Level</strong></td><td>Code/unit level</td><td>Feature/acceptance level</td><td>Behavior/user level</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Written by</strong></td><td>Developers</td><td>Team (dev + test + PO)</td><td>Everyone (plain language)</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Tests based on</strong></td><td>Test cases (code)</td><td>Acceptance criteria</td><td>Given/When/Then scenarios</td></tr>
              <tr><td style="padding:0.4rem;"><strong>Common in</strong></td><td>Unit testing</td><td>Sprint planning</td><td>User story refinement</td></tr>
            </tbody>
          </table>
          <p style="margin: 0.5rem 0 0;">All three: write tests first → tests become automated → tests persist for regression.</p>
        </div>
      </section>

      <!-- ==================== 2.1.4 DEVOPS ==================== -->
      <section class="concept-block">
        <h3>2.1.4 DevOps and Testing</h3>
        <p><strong>The problem DevOps solves:</strong> Traditionally, developers would "throw code over the wall" to Operations, who would then deploy it. When things broke in production, dev and ops would blame each other. DevOps says: <em>"You build it, you run it — together."</em></p>
        <p><strong>DevOps</strong> is an organizational approach that merges development (including testing) and operations into one team with shared goals. It's a <strong>cultural shift</strong>, not just a set of tools.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Real scenario: E-commerce site with DevOps</h4>
          <p>A developer pushes a fix for the search feature. Here's what happens automatically:</p>
          <ol>
            <li><strong>CI (Continuous Integration):</strong> Code is merged → automated unit tests run → static analysis checks for code smells → results in 3 minutes</li>
            <li><strong>CD (Continuous Delivery):</strong> If all tests pass → code is automatically deployed to a staging environment → integration tests run → if pass, it's ready for production</li>
            <li>The developer gets <strong>feedback within 15 minutes</strong> instead of waiting weeks for a manual test cycle</li>
          </ol>
        </div>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>✅ Benefits for Testing</h4>
            <ul>
              <li><strong>Fast feedback</strong> — know within minutes if your change broke something</li>
              <li><strong>Shift left</strong> — CI forces devs to write tests with their code</li>
              <li><strong>Stable test environments</strong> — automated pipeline sets them up consistently</li>
              <li><strong>Non-functional visibility</strong> — performance/reliability issues caught early</li>
              <li><strong>Less manual repetition</strong> — automated pipeline handles regression</li>
              <li><strong>Lower regression risk</strong> — thousands of automated tests run every commit</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>⚠️ Challenges</h4>
            <ul>
              <li>The <strong>delivery pipeline takes effort</strong> to set up and maintain</li>
              <li>CI/CD <strong>tools need expertise</strong> (Jenkins, GitHub Actions, etc.)</li>
              <li>Test automation is <strong>expensive to build and maintain</strong></li>
            </ul>
            <div class="definition-box highlight-box" style="padding: 0.8rem; margin-top: 0.5rem; border-radius: 8px;">
              <p style="margin: 0;">⚠️ <strong>Exam trap:</strong> Even with full automation, <strong>manual testing is still needed</strong> — especially from the user's perspective (exploratory testing, usability).</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== 2.1.5 SHIFT LEFT ==================== -->
      <section class="concept-block highlight-box">
        <h3>2.1.5 Shift Left — Find Bugs Early, Fix Them Cheap</h3>
        <p><strong>Core idea:</strong> The later you find a bug, the more expensive it is to fix. A requirement error caught in a review costs almost nothing. The same error found after release? Could cost millions.</p>

        <div class="highlight-box" style="margin: 1rem 0; padding: 1rem;">
          <h4>Real scenario: Why shift left matters</h4>
          <p>A requirement says: <em>"The system shall support 1,000 concurrent users."</em></p>
          <ul>
            <li><strong>Without shift left:</strong> Nobody tests performance until the end. After 6 months of development, load testing reveals the system crashes at 200 users. The entire architecture needs to be rewritten. Cost: $500K+ and 3 months delay.</li>
            <li><strong>With shift left:</strong> During requirement review, a tester asks: <em>"How does each component handle load?"</em> The team designs for scale from day 1. Basic performance tests start at the component level. The issue is caught in week 2, not month 6.</li>
          </ul>
        </div>

        <h4>5 Shift Left Practices</h4>
        <table style="width:100%; border-collapse:collapse; margin: 0.5rem 0;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
              <th style="text-align:left; padding:0.5rem;">Practice</th>
              <th style="text-align:left; padding:0.5rem;">Real Example</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Review specs as a tester</strong></td><td>Tester reads requirement: <em>"User can delete their account"</em> → asks: <em>"What about their pending orders? Their stored payment info?"</em> Catches ambiguity before any code.</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Write tests before code</strong></td><td>TDD/ATDD — the test exists before the function. Dev runs code against the test during implementation.</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Use CI/CD</strong></td><td>Every code push triggers automated tests. Dev knows in minutes if they broke something — not weeks later.</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Static analysis early</strong></td><td>Linter + code analysis tools (SonarQube) flag security issues, code smells, and bugs <em>before</em> anyone runs the code.</td></tr>
            <tr><td style="padding:0.4rem;"><strong>Non-functional testing early</strong></td><td>Performance test individual components early, not just the full system at the end.</td></tr>
          </tbody>
        </table>

        <div class="definition-box highlight-box" style="padding: 0.8rem; margin-top: 1rem; border-radius: 8px;">
          <p style="margin: 0;">⚠️ <strong>Exam trap:</strong> Shift left does <strong>NOT</strong> mean stop testing later! It means <em>start</em> testing earlier. You still need system testing, acceptance testing, etc. at the end.</p>
        </div>

        <p style="margin-top: 0.5rem;"><em>Trade-off: Shift left costs more upfront (training, tools, effort) but <strong>saves significantly more</strong> later. Stakeholder buy-in is important.</em></p>
      </section>

      <!-- ==================== 2.1.6 RETROS ==================== -->
      <section class="concept-block">
        <h3>2.1.6 Retrospectives — Learn From What Happened</h3>
        <p><strong>Real scenario:</strong> Your team just finished a 2-week sprint. In the retro meeting, the tester says: <em>"We found 12 bugs, but 8 of them were because the requirements were vague."</em> The product owner commits to writing clearer acceptance criteria next sprint. The dev lead notes: <em>"Our test environment was down for 2 days — let's automate the setup."</em></p>

        <p><strong>Retrospectives</strong> are meetings held at the end of a project, iteration, or release where the team discusses 3 questions:</p>
        <div class="highlight-box" style="margin: 1rem 0;">
          <ol>
            <li>🟢 <strong>What worked well?</strong> — Keep doing this</li>
            <li>🔴 <strong>What didn't work?</strong> — Fix this</li>
            <li>🔧 <strong>How do we improve?</strong> — Concrete action items</li>
          </ol>
        </div>

        <p>Results go into the <strong>test completion report</strong>. The critical part: improvements must actually be <strong>followed up on</strong> — otherwise the retro was a waste of time.</p>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>5 Benefits of Retrospectives for Testing</h4>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Benefit</th>
                <th style="text-align:left; padding:0.5rem;">Real Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Better test effectiveness</strong></td><td><em>"Let's add boundary value tests — we missed edge cases last sprint"</em></td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Better testware quality</strong></td><td><em>"Our test cases were too vague — let's add expected results to each one"</em></td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Team bonding</strong></td><td>Safe space to raise issues without blame</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Better test basis</strong></td><td><em>"Requirements were incomplete — PO will add more detail next sprint"</em></td></tr>
              <tr><td style="padding:0.4rem;"><strong>Better dev-test collaboration</strong></td><td><em>"Devs will tag testers for code review on critical modules"</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== KNOWLEDGE CHECK ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> How does the choice of SDLC model impact testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> It impacts 5 things: (1) scope and timing of test activities, (2) level of detail of test documentation, (3) choice of test techniques and approach, (4) extent of test automation, (5) role and responsibilities of a tester. Example: Waterfall → heavy docs, late dynamic testing. Scrum → lightweight docs, testing every sprint, heavy automation.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> In sequential development models, why can't dynamic testing be performed early?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Because executable code doesn't exist yet! In Waterfall, code is written in later phases. Early on, testers can only do static testing — reviewing requirements and designing test cases. You can't <em>run</em> software that hasn't been built yet.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the key differences between TDD, ATDD, and BDD?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>TDD</strong> = code level, developers write unit tests first → code → refactor. <strong>ATDD</strong> = feature level, the whole team writes acceptance criteria that become tests before the feature is built. <strong>BDD</strong> = behavior level, tests written in plain English Given/When/Then format that anyone can read, automatically translated into executable tests. All three: tests first → code second.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What does "shift left" mean? Does it mean we skip testing at the end?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Shift left = start testing <strong>earlier</strong> in the SDLC (review specs, write tests before code, run static analysis early, test components for performance early). But it does <strong>NOT</strong> mean skip late testing — you still need system testing, acceptance testing, etc. It's about <em>also</em> testing early, not <em>only</em> testing early.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 3 benefits of DevOps from a testing perspective.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any three of: (1) fast feedback on code quality, (2) CI promotes shift left, (3) automated processes create stable test environments, (4) better visibility on performance/reliability, (5) automation reduces repetitive manual testing, (6) regression risk minimized by running thousands of automated tests every commit.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the three questions discussed during retrospectives?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> (1) What worked well and should be kept? (2) What didn't work and needs improvement? (3) How do we actually implement those improvements going forward? Results go into the test completion report and must be followed up — otherwise the retro achieves nothing.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> List at least 3 good testing practices that apply to ALL SDLC models.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> (1) Every dev activity has a corresponding test activity, (2) different test levels have specific objectives to avoid redundancy, (3) test analysis/design starts during the corresponding dev phase (early testing), (4) testers review work products as soon as drafts exist (shift left). These are universal — not specific to Agile or Waterfall.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> A developer pushes code to GitHub. Automated unit tests run, static analysis flags 2 issues, and a build is created. If all pass, it's auto-deployed to staging. What DevOps practices are shown here?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>CI (Continuous Integration)</strong> — code is merged and automatically tested (unit tests + static analysis). <strong>CD (Continuous Delivery)</strong> — the build is automatically deployed to staging. This demonstrates fast feedback, shift left, and automated regression testing — all key DevOps benefits.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> In BDD, a test is written as: "Given the user is logged in, When they click 'Delete Account', Then their account should be deactivated." Who writes this, and what happens to it?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Written collaboratively by the team (dev, tester, product owner) in <strong>plain natural language</strong> so even non-technical stakeholders understand it. The Given/When/Then scenario is then <strong>automatically translated into an executable test</strong> using tools like Cucumber or SpecFlow. It persists as an automated test for future regression.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

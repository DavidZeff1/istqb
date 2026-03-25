import audio14 from "./audio/14audio.m4a";

export const content = {
  title: "1.4 Test Activities, Testware and Test Roles",
  audioSrc: audio14,
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — A Real Scenario</h3>
        <p>Your company is building a <strong>mobile banking app</strong>. Millions of people will use it to transfer money. You can't just write the code, click around a few screens, and ship it. You need to <strong>plan what to test</strong>, <strong>review the requirements for gaps</strong>, <strong>design specific test cases</strong> (what happens if a user transfers $0? $999,999?), <strong>set up test environments</strong>, <strong>run the tests</strong>, and <strong>wrap up with a report</strong> before release. Skip any step and a critical bug could let someone transfer money to the wrong account.</p>
        <p>This structured set of activities is called the <strong>test process</strong>. You can mix, match, and reorder the activities depending on your project, but skipping them? That's how production bugs happen.</p>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam Key:</strong> The test process is <em>tailored</em> to the situation. Which activities happen, when, and how is decided during <strong>test planning</strong>.</p>
        </div>
      </section>

      <!-- ==================== 1.4.1 TEST ACTIVITIES ==================== -->
      <section class="concept-block">
        <h3>1.4.1 Test Activities and Tasks</h3>
        <p>There are <strong>7 main activity groups</strong> in a test process. They look sequential, but in practice they're often done <strong>iteratively or in parallel</strong> — for example, you might be designing tests for the next sprint while still executing tests from the current one.</p>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🧠 <strong>Memory trick — "PMADIEC":</strong> <em><strong>P</strong>lan → <strong>M</strong>onitor → <strong>A</strong>nalyze → <strong>D</strong>esign → <strong>I</strong>mplement → <strong>E</strong>xecute → <strong>C</strong>omplete</em><br>
          Think: <em>"Please May All Developers Improve Every Codebase"</em></p>
        </div>

        <!-- PLANNING -->
        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>1. Test Planning 📋</h4>
          <p><strong>Real scenario:</strong> Your team has 3 weeks to test the banking app before launch. The test manager decides: <em>"We'll focus on payment flows and security first (highest risk), use automated regression tests, and only do manual testing for the new features."</em></p>
          <p>You define the <strong>test objectives</strong> (what are we trying to achieve?) and pick an approach that fits within the project's constraints (time, budget, risk).</p>
          <p style="color: #888; font-style: italic;">Covered in depth in Section 5.1.</p>
        </div>

        <!-- MONITORING & CONTROL -->
        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>2. Test Monitoring and Test Control 📊</h4>
          <p><strong>Real scenario:</strong> It's day 10 of 21. The dashboard shows only 35% of test cases have been executed — you're behind schedule. That's <strong>monitoring</strong>. The test manager decides to reassign 2 developers to help with testing and cut low-priority test cases. That's <strong>control</strong>.</p>
          <div class="comparison-grid">
            <div class="grid-item">
              <h4>Monitoring = Watching 👀</h4>
              <p>Ongoing checking of all test activities. <em>"Are we on track vs. the plan?"</em></p>
            </div>
            <div class="grid-item">
              <h4>Control = Acting 🎬</h4>
              <p>Taking corrective actions to get back on track. <em>"Things are slipping — let's reprioritize."</em></p>
            </div>
          </div>
          <div class="definition-box highlight-box" style="padding: 0.8rem; margin-top: 0.5rem; border-radius: 8px;">
            <p style="margin: 0;">⚠️ <strong>Exam trap:</strong> Don't confuse these two! <strong>Monitoring = passive observation</strong>. <strong>Control = active intervention</strong>. The exam loves asking this distinction.</p>
          </div>
        </div>

        <!-- ANALYSIS -->
        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>3. Test Analysis 🔍</h4>
          <p><strong>Real scenario:</strong> You read the user story: <em>"As a user, I want to transfer money to another account."</em> From this, you identify what needs testing: valid transfers, insufficient funds, wrong account number, transfer limits, concurrent transfers, network timeout during transfer. Those are your <strong>test conditions</strong>. You also spot that the requirement doesn't mention what happens if the recipient's account is closed — that's a defect in the test basis itself!</p>
          <p>You look at the <strong>test basis</strong> (requirements, specs, user stories) and figure out <strong>what needs to be tested</strong>. You identify <strong>test conditions</strong> and prioritize them based on risk. You also check whether the test basis itself has defects — like that missing "closed account" scenario above.</p>
          <div class="definition-box highlight-box" style="padding: 0.8rem; margin-top: 0.5rem; border-radius: 8px;">
            <p style="margin: 0;">🎯 <strong>Key question:</strong> <em>"WHAT to test?"</em> → defined in terms of measurable coverage criteria.</p>
          </div>
        </div>

        <!-- DESIGN -->
        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>4. Test Design ✏️</h4>
          <p><strong>Real scenario:</strong> From the test condition "insufficient funds," you write a concrete test case: <em>"User has $50 balance, attempts to transfer $100 → expected result: error message 'Insufficient funds' and no money deducted."</em> You figure out you need test accounts with specific balances (test data) and a staging server that mimics production (test environment).</p>
          <p>You turn test conditions into <strong>test cases</strong> and other testware (like test charters for exploratory testing). You identify <strong>coverage items</strong>, figure out what <strong>test data</strong> you need, and design the <strong>test environment</strong>.</p>
          <div class="definition-box highlight-box" style="padding: 0.8rem; margin-top: 0.5rem; border-radius: 8px;">
            <p style="margin: 0;">🎯 <strong>Key question:</strong> <em>"HOW to test?"</em></p>
          </div>
        </div>

        <!-- IMPLEMENTATION -->
        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>5. Test Implementation 🔧</h4>
          <p><strong>Real scenario:</strong> You take all those test cases and organize them: "Payment Suite" (15 test cases), "Login Suite" (8 test cases), "Profile Suite" (6 test cases). You write Selenium scripts for the automated ones, create the test accounts in the staging database, schedule payments tests first (highest priority), and verify the staging server is actually running and connected to the test database.</p>
          <p>You take the designs and make them <em>ready to run</em>:</p>
          <ul>
            <li>Organize test cases into <strong>test procedures</strong> → group them into <strong>test suites</strong></li>
            <li>Write manual/automated <strong>test scripts</strong></li>
            <li>Prioritize and schedule everything into a <strong>test execution schedule</strong></li>
            <li>Set up and verify the <strong>test environment</strong> actually works</li>
          </ul>
          <div class="definition-box highlight-box" style="padding: 0.8rem; margin-top: 0.5rem; border-radius: 8px;">
            <p style="margin: 0;">💡 <strong>Think of it this way:</strong> Analysis = "what", Design = "how", Implementation = "get everything ready so we can actually do it".</p>
          </div>
        </div>

        <!-- EXECUTION -->
        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>6. Test Execution 🚀</h4>
          <p><strong>Real scenario:</strong> You run the Payment Suite. Test case #7 ("transfer $100 with insufficient funds") fails — instead of showing an error, the app crashes. You log this in Jira: <em>"BUG-042: App crashes when transferring amount exceeding balance. Severity: High. Steps to reproduce: ..."</em>. You mark the test as failed and move to the next one.</p>
          <p>You <strong>run the tests</strong> according to the schedule. This is where rubber meets road:</p>
          <ul>
            <li>Compare actual results vs. <strong>expected results</strong> — does it match?</li>
            <li><strong>Log</strong> all results (pass, fail, blocked)</li>
            <li><strong>Analyze</strong> anomalies — <em>why</em> did it fail?</li>
            <li><strong>Report</strong> defects based on failures found</li>
          </ul>
          <p>Can be manual, automated, continuous, or pair testing — depends on context.</p>
        </div>

        <!-- COMPLETION -->
        <div class="highlight-box" style="margin-bottom: 1.5rem;">
          <h4>7. Test Completion 🏁</h4>
          <p><strong>Real scenario:</strong> The banking app is released. 3 low-severity bugs are still open — you create backlog items so they get fixed in the next sprint. You archive the Payment Suite tests (you'll reuse them next release). You shut down the staging server. In the retrospective, the team notes: <em>"We should have set up the test environment earlier — we lost 2 days waiting for it."</em> You write the test completion report and share it with stakeholders.</p>
          <p>Happens at <strong>project milestones</strong> (release, end of sprint, test level done). You:</p>
          <ul>
            <li>Create <strong>change requests / backlog items</strong> for bugs that aren't fixed yet</li>
            <li><strong>Archive useful testware</strong> for reuse later</li>
            <li><strong>Shut down</strong> the test environment to a known state</li>
            <li>Hold a <strong>lessons learned</strong> session — what went well, what didn't?</li>
            <li>Write and share the <strong>test completion report</strong></li>
          </ul>
        </div>

        <!-- QUICK REFERENCE TABLE -->
        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Quick Reference — All 7 Activities at a Glance</h4>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Activity</th>
                <th style="text-align:left; padding:0.5rem;">One-Liner</th>
                <th style="text-align:left; padding:0.5rem;">Key Question</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">Planning</td><td>Set objectives & approach</td><td><em>What's our strategy?</em></td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">Monitoring & Control</td><td>Watch progress, fix deviations</td><td><em>Are we on track?</em></td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">Analysis</td><td>Study test basis, find what to test</td><td><em>What to test?</em></td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">Design</td><td>Create test cases & conditions</td><td><em>How to test?</em></td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">Implementation</td><td>Prepare scripts, suites, environments</td><td><em>Is everything ready?</em></td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">Execution</td><td>Run tests, log results, report bugs</td><td><em>Did it pass or fail?</em></td></tr>
              <tr><td style="padding:0.4rem;">Completion</td><td>Archive, learn, report</td><td><em>What did we learn?</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ==================== 1.4.2 CONTEXT ==================== -->
      <section class="concept-block">
        <h3>1.4.2 Test Process in Context</h3>
        <p>Testing doesn't happen in a vacuum. Imagine testing a pacemaker vs. testing a to-do list app — <strong>completely different</strong> levels of rigor, budget, and regulation. The way you test depends on <strong>8 contextual factors</strong>:</p>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🧠 <strong>Memory trick — "STBT POST":</strong><br>
          <strong>S</strong>takeholders · <strong>T</strong>eam · <strong>B</strong>usiness domain · <strong>T</strong>echnical factors · <strong>P</strong>roject constraints · <strong>O</strong>rganizational factors · <strong>S</strong>DLC · <strong>T</strong>ools</p>
        </div>

        <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
              <th style="text-align:left; padding:0.5rem;">Factor</th>
              <th style="text-align:left; padding:0.5rem;">What It Means (Plain English)</th>
              <th style="text-align:left; padding:0.5rem;">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Stakeholders</strong></td><td>Who cares about this? What do they expect?</td><td>A CEO who wants speed vs. a regulator who wants proof</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Team members</strong></td><td>What skills does the team have?</td><td>Junior team → need more guidance and training</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Business domain</strong></td><td>How critical is this software? Any regulations?</td><td>Medical software → strict legal requirements</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Technical factors</strong></td><td>What kind of system is it?</td><td>Microservices vs. monolith → different test approaches</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Project constraints</strong></td><td>Scope, time, budget limitations</td><td>2-week sprint → can't test everything, must prioritize</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Organizational factors</strong></td><td>Company culture, policies, structure</td><td>Startup (flexible) vs. bank (rigid processes)</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>SDLC</strong></td><td>What dev methodology is used?</td><td>Agile → testing in every sprint; Waterfall → testing at the end</td></tr>
            <tr><td style="padding:0.4rem;"><strong>Tools</strong></td><td>What testing tools are available?</td><td>No automation tools → manual testing only</td></tr>
          </tbody>
        </table>

        <p style="margin-top: 1rem;">These factors affect <em>everything</em>: strategy, techniques, automation level, coverage depth, reporting detail, and more.</p>
      </section>

      <!-- ==================== 1.4.3 TESTWARE ==================== -->
      <section class="concept-block">
        <h3>1.4.3 Testware</h3>
        <p><strong>Testware = all the stuff you produce while testing.</strong> Just like coding produces source code, testing produces testware. Every test activity creates specific outputs. Think of it as the paper trail of your testing effort.</p>
        <p>Organizations name and manage these differently, but they should all be under <strong>configuration management</strong> (versioned and controlled — just like code).</p>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>What Each Activity Produces</h4>
          <table style="width:100%; border-collapse:collapse; margin-top:0.5rem;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Activity</th>
                <th style="text-align:left; padding:0.5rem;">Testware Produced</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Planning</strong></td><td>Test plan, test schedule, risk register, entry/exit criteria</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Monitoring & Control</strong></td><td>Progress reports, control directives, risk info</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Analysis</strong></td><td>Prioritized test conditions, defect reports on the test basis itself</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Design</strong></td><td>Test cases, test charters, coverage items, test data & environment requirements</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Implementation</strong></td><td>Test procedures, scripts (manual + automated), test suites, test data, execution schedule, environment items (stubs, drivers, simulators)</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Execution</strong></td><td>Test logs, defect reports</td></tr>
              <tr><td style="padding:0.4rem;"><strong>Completion</strong></td><td>Completion report, action items, lessons learned, change requests</td></tr>
            </tbody>
          </table>
        </div>

        <div class="definition-box highlight-box" style="padding: 0.8rem; margin-top: 1rem; border-radius: 8px;">
          <p style="margin: 0;">⚠️ <strong>Exam tip:</strong> You might be asked "which testware comes from which activity?" The big ones to remember: <strong>test conditions</strong> come from Analysis, <strong>test cases</strong> come from Design, <strong>test scripts & suites</strong> come from Implementation, <strong>defect reports</strong> come from Execution.</p>
        </div>
      </section>

      <!-- ==================== 1.4.4 TRACEABILITY ==================== -->
      <section class="concept-block">
        <h3>1.4.4 Traceability — Connecting the Dots</h3>
        <p><strong>Real-world analogy:</strong> Imagine a crime investigation with evidence scattered everywhere but no case file linking things together. Traceability is the case file — it connects <em>requirements → test conditions → test cases → results → defects</em> so you can always trace back <strong>why</strong> a test exists and <strong>what</strong> it covers.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>The Traceability Chain</h4>
          <p style="text-align: center; font-size: 1.1em; margin: 0.5rem 0;">
            <strong>Test Basis</strong> &rarr; <strong>Test Conditions</strong> &rarr; <strong>Test Cases</strong> &rarr; <strong>Test Results</strong> &rarr; <strong>Defects</strong>
          </p>
          <p style="text-align: center; color: #aaa; margin: 0;">Each link connects back to the one before it.</p>
        </div>

        <p>Traceability enables <strong>coverage evaluation</strong> — meaning you can measure how much of the requirements are actually being tested. Coverage criteria serve as <strong>Key Performance Indicators (KPIs)</strong>:</p>
        <ul>
          <li>📊 Test cases → requirements = <em>"Have we covered all requirements?"</em></li>
          <li>📊 Test results → risks = <em>"What's the residual risk?"</em></li>
        </ul>

        <div class="highlight-box" style="margin-top: 1rem;">
          <h4>Why Traceability Matters (6 Benefits)</h4>
          <ol>
            <li><strong>Impact analysis</strong> — a requirement changed? Instantly see which tests are affected</li>
            <li><strong>Audits</strong> — prove to auditors that every requirement has been tested</li>
            <li><strong>IT governance</strong> — meet compliance and governance criteria</li>
            <li><strong>Better reports</strong> — progress and completion reports become clear and meaningful</li>
            <li><strong>Communication</strong> — explain technical testing status to non-technical stakeholders</li>
            <li><strong>Quality assessment</strong> — assess product quality, process capability, and project progress against business goals</li>
          </ol>
        </div>
      </section>

      <!-- ==================== 1.4.5 ROLES ==================== -->
      <section class="concept-block">
        <h3>1.4.5 Roles in Testing — The Manager vs. The Engineer</h3>
        <p>There are <strong>two principal roles</strong> in testing. Think of it like a construction site — someone manages the project timeline and budget, while others do the actual building:</p>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>🎬 Test Management Role<br><small style="color: #aaa;">(The Project Lead)</small></h4>
            <p><strong>Responsible for:</strong> The overall test process, test team leadership, and strategic decisions.</p>
            <p><strong>Activities:</strong></p>
            <ul>
              <li>Test <strong>Planning</strong></li>
              <li>Test <strong>Monitoring</strong></li>
              <li>Test <strong>Control</strong></li>
              <li>Test <strong>Completion</strong></li>
            </ul>
            <p><strong>Who does it?</strong> Test manager, team lead, dev manager, or in Agile it may be shared across the team.</p>
          </div>
          <div class="grid-item">
            <h4>🔧 Testing Role<br><small style="color: #aaa;">(The Hands-On Tester)</small></h4>
            <p><strong>Responsible for:</strong> The engineering/technical side of testing — the hands-on work.</p>
            <p><strong>Activities:</strong></p>
            <ul>
              <li>Test <strong>Analysis</strong></li>
              <li>Test <strong>Design</strong></li>
              <li>Test <strong>Implementation</strong></li>
              <li>Test <strong>Execution</strong></li>
            </ul>
            <p><strong>Who does it?</strong> Different people at different times. One person can wear <em>both</em> hats.</p>
          </div>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin-top: 0.5rem; border-radius: 8px;">
          <p style="margin: 0;">🧠 <strong>Easy way to remember:</strong><br>
          <strong>Management</strong> = the "bookend" activities → <strong>P</strong>lan (start) + <strong>M</strong>onitor/<strong>C</strong>ontrol (middle) + <strong>C</strong>omplete (end)<br>
          <strong>Testing</strong> = the "core work" activities → <strong>A</strong>nalyze → <strong>D</strong>esign → <strong>I</strong>mplement → <strong>E</strong>xecute</p>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== KNOWLEDGE CHECK ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> Which test activity answers "What to test?" and which answers "How to test?"
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Test Analysis</strong> = "What to test?" — it reads the test basis and identifies testable features, defining test conditions with measurable coverage criteria. <strong>Test Design</strong> = "How to test?" — it turns those conditions into actual test cases, test data, and environment designs.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between test monitoring and test control?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Monitoring = watching.</strong> You continuously check test activities and compare actual progress against the plan. <strong>Control = doing.</strong> You take corrective actions to get back on track. Think: security camera (monitoring) vs. security guard stepping in (control).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> During which test activity are test cases organized into test suites and a test execution schedule is created?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Test Implementation.</strong> This is the setup phase — test cases get organized into procedures and suites, scripts are written, the schedule is built, and the test environment is verified. Everything gets <em>ready to run</em>.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 4 contextual factors that affect how testing is carried out.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer (STBT POST):</strong> <strong>S</strong>takeholders, <strong>T</strong>eam members, <strong>B</strong>usiness domain, <strong>T</strong>echnical factors, <strong>P</strong>roject constraints, <strong>O</strong>rganizational factors, <strong>S</strong>DLC, <strong>T</strong>ools. Any 4 of these is correct.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is testware? Give examples from at least 3 activities.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Testware = all output work products from testing activities. Examples: <strong>Planning</strong> → test plan, risk register. <strong>Analysis</strong> → test conditions. <strong>Design</strong> → test cases, test charters. <strong>Implementation</strong> → test scripts, test suites. <strong>Execution</strong> → test logs, defect reports. <strong>Completion</strong> → completion report, lessons learned.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why is traceability between the test basis and testware important?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Traceability lets you: evaluate coverage (are all requirements tested?), analyze the impact of changes, facilitate audits, meet IT governance criteria, make reports understandable, communicate technical testing to stakeholders, and assess overall product quality and project progress.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the two principal roles in testing, and what activities belong to each?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Test Management Role</strong> (the project lead) handles Planning, Monitoring, Control, and Completion — the strategic/leadership side. <strong>Testing Role</strong> (the hands-on tester) handles Analysis, Design, Implementation, and Execution — the technical side. One person can fill both roles simultaneously.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> During test completion, what happens to unresolved defects?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Unresolved defects get turned into <strong>change requests</strong> or <strong>product backlog items</strong> — ensuring they're tracked and addressed in future iterations or releases, not lost and forgotten.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> A tester reads the requirements document and identifies that "login with expired password" needs to be tested. Which test activity is this?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Test Analysis.</strong> The tester is examining the test basis (requirements) to identify testable features and define test conditions. This is the "what to test?" phase.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> A tester notices that 20% of planned test cases haven't been run yet and the deadline is tomorrow. They decide to add two more testers to the team. Is this monitoring or control?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Both!</strong> Noticing the 20% gap = <strong>monitoring</strong> (comparing actual progress against the plan). Adding testers = <strong>control</strong> (taking corrective action to meet objectives).</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

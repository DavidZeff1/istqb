export const content = {
  title: "4.4 Experience-Based Test Techniques",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — The Tester's Intuition</h3>
        <p>You're testing a <strong>social media messaging app</strong> (think WhatsApp / Telegram). You've applied EP, BVA, and decision tables systematically — but a veteran QA engineer sits down with the app for 20 minutes and immediately finds three bugs you missed: emoji rendering in RTL languages, message delivery when switching from Wi-Fi to cellular mid-send, and a crash when pasting a 50,000-character message. That's the power of <strong>experience-based techniques</strong>.</p>
        <p>Three techniques in this family:</p>
        <ol>
          <li><strong>Error Guessing</strong> — "I bet THIS will break"</li>
          <li><strong>Exploratory Testing</strong> — "Let me learn and test at the same time"</li>
          <li><strong>Checklist-Based Testing</strong> — "Here's our known-issues playbook"</li>
        </ol>
      </section>

      <!-- ==================== ERROR GUESSING ==================== -->
      <section class="concept-block">
        <h3>4.4.1 Error Guessing</h3>
        <p>Anticipate errors, defects, and failures based on <strong>what you know</strong> — past bugs, common developer mistakes, and failures in similar apps.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Real Example — Messaging App Error Guesses</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Error Category</th>
                <th style="text-align:left; padding:0.4rem;">Guess (What might break?)</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Input</strong></td><td>Empty message send button enabled; 10,000+ emoji in one message</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Output</strong></td><td>Timestamps display in wrong timezone after daylight saving change</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Logic</strong></td><td>"Read receipt" shown before message actually renders on recipient's screen</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Computation</strong></td><td>Unread message count goes negative after bulk-delete</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Interfaces</strong></td><td>Push notification API returns 429 (rate limit) and app silently drops messages</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Data</strong></td><td>Database migration corrupts messages containing special Unicode (ZWJ sequences)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Fault Attacks — Organized Error Guessing</h4>
          <p>A <strong>fault attack</strong> = a structured list of likely errors/failures, then design tests to trigger each one. Build lists from:</p>
          <ul>
            <li><strong>Experience:</strong> "Last app crashed on iOS when backgrounded during file upload"</li>
            <li><strong>Defect data:</strong> "Our bug tracker shows 40% of defects are in message serialization"</li>
            <li><strong>Common knowledge:</strong> "Chat apps often break with network interruptions, timezone changes, or special characters"</li>
          </ul>
        </div>
      </section>

      <!-- ==================== EXPLORATORY TESTING ==================== -->
      <section class="concept-block">
        <h3>4.4.2 Exploratory Testing</h3>
        <p>Tests are <strong>designed, executed, and evaluated simultaneously</strong> while the tester learns about the system. No upfront test scripts — the tester follows their intuition and findings in real-time.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Session-Based Exploratory Testing (SBET)</h4>
          <p>Adds structure to exploration:</p>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Element</th>
                <th style="text-align:left; padding:0.4rem;">Messaging App Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Time box</strong></td><td>60-minute session</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Test charter</strong></td><td>"Explore group chat with 100+ members. Focus on notification behavior and message ordering."</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Session sheet</strong></td><td>Notes: "Found messages arriving out of order when 5+ people type simultaneously. Screenshot saved."</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Debriefing</strong></td><td>15-min standup with dev lead — discuss findings, agree on bug reports to file</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>When to Use Exploratory Testing</h4>
            <ul>
              <li>Few or <strong>inadequate specifications</strong></li>
              <li>Significant <strong>time pressure</strong></li>
              <li>As a <strong>complement</strong> to formal techniques</li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Who Does It Best?</h4>
            <ul>
              <li><strong>Experienced</strong> testers with domain knowledge</li>
              <li>People with <strong>analytical skills, curiosity, creativeness</strong></li>
              <li>Can incorporate other techniques (EP, BVA) on the fly</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ==================== CHECKLIST-BASED ==================== -->
      <section class="concept-block">
        <h3>4.4.3 Checklist-Based Testing</h3>
        <p>Test conditions come from a <strong>pre-built checklist</strong> — a curated list of things to verify, often phrased as questions.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Real Example — Messaging Release Checklist</h4>
          <ul>
            <li>Does message send work on airplane mode → queue → deliver on reconnect?</li>
            <li>Do push notifications appear correctly on iOS 17 AND Android 14?</li>
            <li>Does the app handle 1,000 unread messages without crashing?</li>
            <li>Is message encryption end-to-end verified with key exchange?</li>
            <li>Do voice messages play through both speaker and Bluetooth?</li>
          </ul>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Checklist Rules</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">DO Include</th>
                <th style="text-align:left; padding:0.4rem;">DON'T Include</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:0.4rem; vertical-align:top;">
                  <ul style="margin:0; padding-left:1.2rem;">
                    <li>Items checkable <strong>separately and directly</strong></li>
                    <li>Items phrased as <strong>questions</strong></li>
                    <li>References to requirements, UI, quality attributes</li>
                  </ul>
                </td>
                <td style="padding:0.4rem; vertical-align:top;">
                  <ul style="margin:0; padding-left:1.2rem;">
                    <li>Things that can be <strong>checked automatically</strong> (use CI for that)</li>
                    <li>Items better as <strong>entry/exit criteria</strong></li>
                    <li>Items that are <strong>too general</strong> ("Test everything works")</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <h4>⚠️ Maintenance Warning</h4>
          <p>Checklist items lose effectiveness over time as developers learn to avoid those mistakes. <strong>Regularly update:</strong> add entries for new high-severity defects, remove stale items. But don't let it grow too long — a 200-item checklist becomes useless.</p>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>The Trade-Off</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Advantage</th>
                <th style="text-align:left; padding:0.4rem;">Disadvantage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:0.4rem;"><strong>Greater coverage</strong> — testers explore freely within checklist scope</td>
                <td style="padding:0.4rem;"><strong>Less repeatability</strong> — different testers may interpret/execute items differently</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is error guessing based on?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> The tester's knowledge: how the app worked in the past, common developer mistakes and resulting defects, and failures that occurred in similar applications.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are "fault attacks" and how do they relate to error guessing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Fault attacks are a structured way to implement error guessing. The tester creates a list of likely errors/defects/failures and designs tests to trigger each one. Lists are built from experience, defect data, and common knowledge about why software fails.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What makes exploratory testing unique compared to other techniques?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Tests are <strong>designed, executed, and evaluated simultaneously</strong> while the tester learns about the system. There's no separate upfront design phase — the tester explores in real-time.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the four elements of session-based exploratory testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) A defined <strong>time box</strong>. 2) A <strong>test charter</strong> with objectives. 3) <strong>Session sheets</strong> to document steps/discoveries. 4) A <strong>debriefing</strong> with stakeholders afterward.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> Your team has 2 days to test a brand-new chat feature with barely any specs written. Which experience-based technique is MOST appropriate and why?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Exploratory testing</strong> — it's best when specs are few/inadequate and time pressure is high. The tester can learn about the feature while simultaneously designing and executing tests, maximizing coverage within the tight timeframe.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What should a checklist NOT contain?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Items that can be checked automatically (use CI/CD for those), items better suited as entry/exit criteria, and items too general to be actionable.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Why should checklists be regularly updated?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Entries lose effectiveness as developers learn to avoid those errors. Add new entries for recently found high-severity defects, remove stale ones — but don't let the checklist grow too long.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the trade-off of high-level checklists vs detailed test cases?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> High-level checklists give <strong>potentially greater coverage</strong> (testers explore more freely) but <strong>less repeatability</strong> (different testers may interpret and execute items differently).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A tester's error-guessing checklist from 2022 includes "Test for crash when sending GIFs." Since then, the GIF rendering was rewritten from scratch and no GIF bugs have been filed in 18 months. Should this item stay on the checklist?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> It could be <strong>removed or deprioritized</strong>. The item has become less effective because the underlying code was rewritten and no related defects have been found. The checklist should be updated to reflect current risk areas. However, a lightweight smoke check for GIFs could remain if the risk is still non-trivial.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `
};
    </div>
  `
};

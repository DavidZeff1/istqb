import audio32 from "./audio/32audio.m4a";

export const content = {
  title: "3.2 Feedback and Review Process",
  audioSrc: audio32,
  content: `
    <div class="test-content">

      <!-- ==================== BENEFITS OF EARLY FEEDBACK ==================== -->
      <section class="concept-block">
        <h3>3.2.1 Why Early Feedback Saves Projects</h3>
        <p><strong>Real scenario:</strong> A fintech startup builds a <strong>stock trading app</strong>. The product owner describes the main feature: <em>"Users should be able to trade stocks instantly."</em> The team codes for 4 months without showing anything to stakeholders. At the demo, the CEO says: <em>"I meant they should be able to schedule trades for market open... not trade after-hours."</em></p>
        <p>Result: 4 months of wasted work. That's what happens without early feedback.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Without Regular Feedback, You Get:</h4>
          <table style="width:100%; border-collapse:collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">💸</td><td style="padding:0.4rem;"><strong>Costly rework</strong> — re-building what was misunderstood</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">⏰</td><td style="padding:0.4rem;"><strong>Missed deadlines</strong> — rework eats into the schedule</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;">👉</td><td style="padding:0.4rem;"><strong>Blame games</strong> — "I said instant!" / "You said instant trading!"</td></tr>
              <tr><td style="padding:0.4rem;">💀</td><td style="padding:0.4rem;"><strong>Complete project failure</strong> — product doesn't match anyone's vision</td></tr>
            </tbody>
          </table>
        </div>

        <p>Frequent feedback <strong>prevents misunderstandings</strong>, catches requirement changes early, and helps the team focus on features that deliver the <strong>most value</strong> and address the highest <strong>risks</strong>.</p>
      </section>

      <!-- ==================== REVIEW PROCESS ==================== -->
      <section class="concept-block">
        <h3>3.2.2 The Review Process — 5 Steps (ISO/IEC 20246)</h3>
        <p><strong>Real scenario:</strong> The trading app team needs to review the <strong>order execution module's design document</strong>. Here's how a formal review would work:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Memory Trick — "PIICF" → "Please Inspect It Carefully, Friends"</h4>
          <ol style="margin: 0.5rem 0 0 1.5rem;">
            <li><strong>P</strong>lanning</li>
            <li>Review <strong>I</strong>nitiation</li>
            <li><strong>I</strong>ndividual Review</li>
            <li><strong>C</strong>ommunication & Analysis</li>
            <li><strong>F</strong>ixing & Reporting</li>
          </ol>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Step 1: Planning</h4>
          <p>The review leader defines: <em>We're reviewing the order execution design. Focus areas: trade timing logic and error handling. Exit criteria: all critical anomalies resolved. Time: reviewers get 3 days to prepare.</em></p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Step 2: Review Initiation</h4>
          <p>The doc, checklist, and role assignments are distributed. The backend lead, security expert, and tester confirm they understand their roles and have access to the document.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Step 3: Individual Review</h4>
          <p>Each reviewer reads the design doc alone. The security expert flags: <em>"No mention of rate-limiting on trade requests — a user could fire 1,000 trades per second."</em> The tester notes: <em>"What happens if the stock exchange API times out mid-trade?"</em> All findings are logged.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Step 4: Communication & Analysis</h4>
          <p>The team meets. Key discussion: <em>"The rate-limiting gap — is this an anomaly or a real defect?"</em> Decision: it's a defect (missing requirement). The timeout issue is assigned to the architect to resolve. Each anomaly gets a <strong>status, owner, and required action</strong>.</p>
          <p><strong>Important:</strong> Not all anomalies are defects — they must be analyzed and discussed first.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Step 5: Fixing & Reporting</h4>
          <p>The architect adds rate-limiting to the design. The timeout handling is documented. Defect reports are created. Once exit criteria are met (all critical anomalies resolved), the design document is <strong>accepted</strong>.</p>
        </div>
      </section>

      <!-- ==================== ROLES ==================== -->
      <section class="concept-block">
        <h3>3.2.3 The 6 Review Roles</h3>
        <p>Using our trading app design review as an example:</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Role</th>
                <th style="text-align:left; padding:0.5rem;">What They Do</th>
                <th style="text-align:left; padding:0.5rem;">In Our Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Manager</strong></td><td>Decides what gets reviewed, provides resources</td><td>VP Engineering says: "Review the order execution design before Sprint 5"</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Author</strong></td><td>Creates and fixes the work product</td><td>The architect who wrote the design doc</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Moderator</strong> (Facilitator)</td><td>Runs the meeting — mediates, manages time, safe environment</td><td>Senior dev ensures everyone speaks and no one gets attacked</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Scribe</strong> (Recorder)</td><td>Records anomalies, decisions, new findings</td><td>Junior dev takes notes in Jira during the meeting</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><td style="padding:0.4rem;"><strong>Reviewer</strong></td><td>Performs the actual review — finds anomalies</td><td>Backend lead, security expert, tester</td></tr>
              <tr><td style="padding:0.4rem;"><strong>Review Leader</strong></td><td>Overall responsibility — decides who, when, where</td><td>QA lead organizes the review, selects participants</td></tr>
            </tbody>
          </table>
        </div>
        <p><em>One person can take multiple roles (e.g., reviewer + scribe), except in inspections where the author <strong>cannot</strong> be the review leader or scribe.</em></p>
      </section>

      <!-- ==================== REVIEW TYPES ==================== -->
      <section class="concept-block">
        <h3>3.2.4 The Four Review Types — Informal to Formal</h3>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Memory Trick — "I Walk Through Technical Inspections"</h4>
          <p><strong>I</strong>nformal → <strong>W</strong>alkthrough → <strong>T</strong>echnical Review → <strong>I</strong>nspection (least → most formal)</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>1. Informal Review</h4>
          <p><strong>No defined process. No formal output.</strong></p>
          <p><em>Example:</em> A dev Slacks a colleague: <em>"Hey, can you glance at my PR for the trade confirmation screen?"</em> Quick, no ceremony. Main purpose: <strong>detect anomalies</strong>.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>2. Walkthrough — Led by the AUTHOR</h4>
          <p>The architect presents the trade execution design to the team, walking through it section by section. Goals: educate others, build consensus, generate ideas, and detect anomalies.</p>
          <p><strong>Key:</strong> Individual review beforehand is <strong>NOT required</strong>.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>3. Technical Review — Led by a MODERATOR</h4>
          <p>Technically qualified reviewers (backend lead, security expert, DBA) examine the database schema design. A moderator facilitates. Goals: reach consensus on technical decisions, detect anomalies, evaluate quality.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>4. Inspection — Most Formal</h4>
          <p>The <strong>complete generic process</strong> is followed (all 5 steps). The order execution module undergoes a full inspection because it handles real money.</p>
          <p><strong>Main objective:</strong> Find the <strong>maximum number of anomalies</strong>.</p>
          <p><strong>Unique rules:</strong></p>
          <ul>
            <li><strong>Metrics are collected</strong> and used to improve the SDLC</li>
            <li>The <strong>author CANNOT</strong> be the review leader or scribe</li>
          </ul>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam trap:</strong> "Which review is led by the author?" → <strong>Walkthrough</strong>. "Which review is led by a moderator?" → <strong>Technical review</strong> (and inspection). "In which review can the author NOT be the leader or scribe?" → <strong>Inspection</strong>.</p>
        </div>
      </section>

      <!-- ==================== SUCCESS FACTORS ==================== -->
      <section class="concept-block highlight-box">
        <h3>3.2.5 Success Factors for Reviews</h3>
        <p>What makes a review actually work:</p>
        <ul>
          <li><strong>Clear objectives + measurable exit criteria</strong> — and <strong>NEVER</strong> use reviews to evaluate participants personally</li>
          <li><strong>Right review type</strong> for the job — don't inspect a README, don't informally review safety-critical code</li>
          <li><strong>Small chunks</strong> — reviewers lose focus on 200-page documents</li>
          <li><strong>Feedback loops</strong> — authors and stakeholders learn from review findings</li>
          <li><strong>Adequate preparation time</strong> — rushing reviewers = shallow reviews</li>
          <li><strong>Management support</strong> — reviews need allocated time, not "do it in your spare time"</li>
          <li><strong>Part of the culture</strong> — not a punishment, but a learning opportunity</li>
          <li><strong>Training</strong> — everyone knows their role and the process</li>
          <li><strong>Effective facilitation</strong> — a good moderator keeps things productive and safe</li>
        </ul>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> Why is early and frequent stakeholder feedback important?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> It prevents misunderstandings about requirements, catches changes early, and helps focus on high-value/high-risk features. Without it: costly rework, missed deadlines, blame games, or project failure.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> List the five review process activities in order.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Planning — define scope, exit criteria. 2) Review Initiation — distribute materials, assign roles. 3) Individual Review — each reviewer assesses quality, logs anomalies. 4) Communication & Analysis — discuss anomalies, decide status/ownership. 5) Fixing & Reporting — fix defects, report results, accept work product when exit criteria met. <em>Mnemonic: "PIICF".</em></p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the six principal roles in a review?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Manager (provides resources), Author (creates/fixes the work product), Moderator/Facilitator (runs meetings safely), Scribe/Recorder (records findings and decisions), Reviewer (examines and finds anomalies), Review Leader (organizes the review overall).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> List the four review types from least to most formal.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Informal review — no process, no formal output. 2) Walkthrough — led by author. 3) Technical review — led by moderator, technically qualified reviewers. 4) Inspection — most formal, full process, main goal is maximum anomaly detection, metrics collected, author cannot be leader/scribe.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A team is reviewing the design for a financial trading module that processes real transactions. The architect wants to just walk the team through it casually. What's wrong with this approach?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> For a safety/mission-critical module handling real money, an informal walkthrough is insufficient. A <strong>technical review</strong> or <strong>inspection</strong> would be more appropriate given the criticality, legal implications, and need for a thorough audit trail. The review type should match the complexity and risk of the work product.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> During the "Communication & Analysis" phase, are all anomalies considered defects?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No. Anomalies are not necessarily defects — they need to be analyzed and discussed. Each anomaly gets a status (defect, false positive, improvement suggestion), an owner, and required actions. Only confirmed defects receive defect reports.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is unique about inspections compared to other review types?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Inspections are the most formal review type, following the complete generic process. Their main objective is finding the <strong>maximum number of anomalies</strong>. Metrics are collected to improve the SDLC. The author cannot act as review leader or scribe.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 4 success factors for reviews.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any 4 of: Clear objectives with measurable exit criteria (never evaluate participants), choosing the right review type, reviewing small chunks, providing feedback to authors, adequate preparation time, management support, making reviews part of culture, adequate training, effective facilitation.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> A review leader schedules a 3-hour review for a 150-page requirements document with no preparation time. What will likely go wrong, and what success factors were violated?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Reviewers will lose concentration on such a large document (violated: "small chunks"), have no time to prepare (violated: "adequate preparation time"), and likely produce shallow findings. The review leader should break the doc into smaller sections, schedule multiple shorter sessions, and give reviewers days to prepare individually before the meeting.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

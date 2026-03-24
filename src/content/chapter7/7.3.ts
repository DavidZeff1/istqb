export const content = {
  title: "Chapter 3 Exam Questions & Patterns",
  content: `
    <div class="test-content">
      <div class="concept-block intro-box">
        <h3>Exam Strategy &amp; Patterns — Chapter 3</h3>
        <p>Chapter 3 covers static testing — reviews and static analysis. Key traps involve confusing what static testing can/can't examine, mixing up defect types unique to static vs. dynamic testing, and confusing the review roles and process sequence. All 4 questions are from ISTQB Sample Exam Set D.</p>
      </div>

      <!-- SECTION 3.1 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #16a34a;">
        <h3 style="color: #16a34a;">3.1 Static Testing Basics — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Static testing can examine almost anything:</strong> Requirements, code, test plans, contracts, user stories, design docs, test charters — if a human can interpret it, it can be reviewed.</li>
          <li><strong>Exception — what CAN'T be statically tested:</strong> Work products that are too complex for human interpretation AND not analyzable by tools. Classic example: <strong>encrypted code</strong>.</li>
          <li><strong>Defects unique to static testing only:</strong> Unreachable code, design patterns not implemented as desired, defects in non-executable work products (e.g., a contradiction in a requirements doc).</li>
          <li><strong>Defects unique to dynamic testing only:</strong> Performance issues, memory leaks, race conditions — only observable when code is running.</li>
          <li><strong>Both can find:</strong> Programming defects visible in code review that also cause runtime failures.</li>
          <li><strong>Trap:</strong> "Static testing finds ALL the defects dynamic testing finds, plus more" is FALSE. Dynamic testing finds some defects (e.g., performance issues) that static testing cannot.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>3.1 — Sample Exam D, Questions #15, #16 <span style="font-weight:normal; font-size:0.85em;">(FL-3.1.1/2, K1/K2)</span></h3>
        <ol>
          <li>
            <strong>Q#15: Which of the following CANNOT be examined by static testing?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Contract</div>
              <div>B) Test plan</div>
              <div>C) Encrypted code</div>
              <div>D) Test charter</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Why A, B, D are wrong:</em> Contracts, test plans, and test charters are all human-readable documents — they can be reviewed (a form of static testing).</p>
                  <p><em>Why C is correct:</em> Encrypted code is not interpretable by humans, and if properly encrypted it cannot be analyzed by most tools either. Static testing requires the work product to be interpretable.</p>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#16: Which statement about the value of static testing is CORRECT?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) The defect types found by static testing are completely different from those found by dynamic testing</div>
              <div>B) Dynamic testing can detect defect types found by static testing, plus some additional ones</div>
              <div>C) Dynamic testing can identify some of the defects found by static testing but not all of them</div>
              <div>D) Static testing can identify defect types found by dynamic testing as well as some extra ones</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>The reality is overlap, not containment:</em></p>
                  <ul>
                    <li>Some defects → <strong>static only</strong> (e.g., unreachable code, defects in non-executable docs)</li>
                    <li>Some defects → <strong>dynamic only</strong> (e.g., performance issues, memory leaks)</li>
                    <li>Some defects → <strong>both</strong> (e.g., a programming logic error visible in review AND causing a runtime failure)</li>
                  </ul>
                  <p>So dynamic testing finds <em>some</em> of what static testing finds (the overlap), but NOT all static defects (those in non-executable work products). This matches C.</p>
                  <p><em>Why A is wrong:</em> Some defects can be found by both.</p>
                  <p><em>Why B and D are wrong:</em> Neither is a superset of the other — both have unique defect types.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 3.2 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #15803d; margin-top: 2.5rem;">
        <h3 style="color: #15803d;">3.2 Feedback and Review Process — Tips &amp; Tricks</h3>
        <ul>
          <li><strong>Review process sequence (ISO/IEC 20246):</strong>
            <ol>
              <li><strong>Planning</strong> — set objectives, scope, schedule</li>
              <li><strong>Review Initiation</strong> — distribute work product to participants</li>
              <li><strong>Individual Review</strong> — reviewers examine and note anomalies</li>
              <li><strong>Communication and Analysis</strong> — team discusses anomalies, agrees on status and ownership</li>
              <li><strong>Fixing and Reporting</strong> — defects are fixed and results reported</li>
            </ol>
          </li>
          <li><strong>Roles:</strong>
            <ul>
              <li><strong>Manager</strong> → decides what needs reviewing, allocates resources</li>
              <li><strong>Review Leader</strong> → plans the review, selects team, schedules meetings, ensures completion</li>
              <li><strong>Moderator (Facilitator)</strong> → runs meetings effectively, mediates discussion, ensures safe environment</li>
              <li><strong>Reviewer</strong> → performs the review and identifies anomalies</li>
              <li><strong>Author</strong> → created the work product under review</li>
              <li><em>Note: "Chairperson" is NOT a recognized review role in ISTQB.</em></li>
            </ul>
          </li>
          <li><strong>Trap — Moderator vs. Review Leader:</strong> The Review Leader organizes and plans. The Moderator facilitates the meeting and keeps discussion productive.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>3.2 — Sample Exam D, Questions #17, #18 <span style="font-weight:normal; font-size:0.85em;">(FL-3.2.2/3, K1/K2)</span></h3>
        <ol>
          <li>
            <strong>Q#17: Given these review activity descriptions — (1) Anomalies deliberated, status/ownership determined, (2) Defects recorded and updates addressed before acceptance, (3) Reviewers use techniques to spot anomalies, (4) Objectives and schedule established, (5) Participants given access to the work product — what is the CORRECT sequence?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) 4 – 3 – 5 – 2 – 1</div>
              <div>B) 4 – 5 – 3 – 1 – 2</div>
              <div>C) 5 – 4 – 1 – 3 – 2</div>
              <div>D) 5 – 4 – 3 – 2 – 1</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B — sequence: 4 → 5 → 3 → 1 → 2</strong></p>
                  <p><em>Mapping to process activities:</em></p>
                  <ul>
                    <li>4 = <strong>Planning</strong> (establish objective and schedule)</li>
                    <li>5 = <strong>Review Initiation</strong> (distribute/give access to the work product)</li>
                    <li>3 = <strong>Individual Review</strong> (reviewers spot anomalies)</li>
                    <li>1 = <strong>Communication and Analysis</strong> (discuss and agree on anomaly status)</li>
                    <li>2 = <strong>Fixing and Reporting</strong> (fix defects, accept work product)</li>
                  </ul>
                </div>
              </details>
            </div>
          </li>

          <li style="margin-top: 1.5rem;">
            <strong>Q#18: Which review participant is responsible for ensuring review meetings run effectively and that everyone can voice opinions freely?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
              <div>A) Manager</div>
              <div>B) Moderator</div>
              <div>C) Chairperson</div>
              <div>D) Review Leader</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer &amp; Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p><em>Why A is wrong:</em> The Manager decides what to review and allocates resources — not a meeting facilitator role.</p>
                  <p><em>Why B is correct:</em> The <strong>Moderator</strong> (also called Facilitator) manages meeting time, mediates discussions, and creates a safe environment where participants can speak freely.</p>
                  <p><em>Why C is wrong:</em> "Chairperson" is NOT a recognized ISTQB review role.</p>
                  <p><em>Why D is wrong:</em> The Review Leader plans the review and selects reviewers — but the Moderator runs the actual meeting.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

    </div>
  `
};

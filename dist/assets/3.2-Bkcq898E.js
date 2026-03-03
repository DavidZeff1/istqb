const e={title:"3.2 Feedback and Review Process",content:`
    <div class="test-content">
      <div class="concept-block">
        <h3>3.2.1 Benefits of Early and Frequent Stakeholder Feedback</h3>
        <p>Early and frequent feedback allows for the <strong>early communication of potential quality problems</strong>. Without sufficient stakeholder involvement during the SDLC, the product may not meet the stakeholder's original or current vision — which can result in:</p>
        <ul>
          <li>Costly <strong>rework</strong></li>
          <li><strong>Missed deadlines</strong></li>
          <li><strong>Blame games</strong></li>
          <li>Potentially <strong>complete project failure</strong></li>
        </ul>
        <p>Frequent stakeholder feedback throughout the SDLC <strong>prevents misunderstandings</strong> about requirements and ensures changes to requirements are understood and implemented earlier. This helps the development team focus on features that deliver the <strong>most value</strong> to stakeholders and have the most positive impact on identified <strong>risks</strong>.</p>
      </div>

      <div class="concept-block">
        <h3>3.2.2 Review Process Activities</h3>
        <p>The <strong>ISO/IEC 20246</strong> standard defines a generic review process. If the review is more formal, more tasks are needed. The review process may be invoked <strong>multiple times</strong> to cover an entire large work product.</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>1. Planning</h4>
          <p>Define the <strong>scope of the review</strong>: purpose, work product to be reviewed, quality characteristics to evaluate, areas to focus on, exit criteria, supporting information (standards), effort, and timeframes.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>2. Review Initiation</h4>
          <p>Make sure <strong>everyone and everything</strong> is prepared to start. Every participant has access to the work product, understands their role and responsibilities, and receives everything needed to perform the review.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>3. Individual Review</h4>
          <p>Every reviewer performs an <strong>individual review</strong> to assess quality and identify <strong>anomalies, recommendations, and questions</strong> by applying one or more review techniques (e.g., checklist-based reviewing, scenario-based reviewing). All findings are logged.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>4. Communication and Analysis</h4>
          <p>Anomalies identified are <strong>not necessarily defects</strong> — they need to be analyzed and discussed. For every anomaly, decide on its <strong>status, ownership, and required actions</strong>. This is typically done in a <strong>review meeting</strong> where participants also decide on the quality level and follow-up actions. A follow-up review may be required.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>5. Fixing and Reporting</h4>
          <p>For every defect, a <strong>defect report</strong> should be created for follow-up. Once <strong>exit criteria</strong> are reached, the work product can be accepted. Review results are reported.</p>
        </div>
      </div>

      <div class="concept-block">
        <h3>3.2.3 Roles and Responsibilities in Reviews</h3>
        <p>Reviews involve various stakeholders who may take on several roles:</p>

        <div class="highlight-box">
          <ul>
            <li><strong>Manager:</strong> Decides what is to be reviewed and provides resources (staff and time).</li>
            <li><strong>Author:</strong> Creates and fixes the work product under review.</li>
            <li><strong>Moderator (Facilitator):</strong> Ensures effective running of review meetings — mediation, time management, and a safe environment where everyone can speak freely.</li>
            <li><strong>Scribe (Recorder):</strong> Collates anomalies from reviewers and records review information (decisions, new anomalies found during review meeting).</li>
            <li><strong>Reviewer:</strong> Performs reviews. Can be someone on the project, a subject matter expert, or any other stakeholder.</li>
            <li><strong>Review Leader:</strong> Takes overall responsibility for the review — deciding who will be involved, and organizing when and where it will take place.</li>
          </ul>
        </div>
      </div>

      <div class="concept-block">
        <h3>3.2.4 Review Types</h3>
        <p>Review types range from <strong>informal to formal</strong>. The required formality depends on the SDLC, maturity of the development process, criticality and complexity of the work product, legal/regulatory requirements, and need for an audit trail. The same work product can be reviewed with <strong>different review types</strong> (e.g., first informal, then formal).</p>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Informal Review</h4>
          <p><strong>No defined process</strong> and no formal documented output.<br>
          <strong>Main objective:</strong> Detecting anomalies.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Walkthrough</h4>
          <p><strong>Led by the author.</strong> Can serve many objectives:</p>
          <ul>
            <li>Evaluating quality and building confidence</li>
            <li>Educating reviewers</li>
            <li>Gaining consensus and generating new ideas</li>
            <li>Motivating and enabling authors to improve</li>
            <li>Detecting anomalies</li>
          </ul>
          <p><em>Individual review before the walkthrough is not required.</em></p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Technical Review</h4>
          <p>Performed by <strong>technically qualified reviewers</strong> and <strong>led by a moderator</strong>.</p>
          <p><strong>Objectives:</strong> Gaining consensus and making decisions on technical problems, detecting anomalies, evaluating quality, building confidence, generating new ideas, and motivating/enabling authors to improve.</p>
        </div>

        <div class="highlight-box" style="margin-bottom: 1rem;">
          <h4>Inspection</h4>
          <p>The <strong>most formal</strong> type of review — follows the complete generic review process.</p>
          <p><strong>Main objective:</strong> Finding the <strong>maximum number of anomalies</strong>.</p>
          <p>Other objectives: evaluate quality, build confidence, motivate and enable authors to improve.</p>
          <p><strong>Key characteristics:</strong></p>
          <ul>
            <li><strong>Metrics</strong> are collected and used to improve the SDLC, including the inspection process.</li>
            <li>The <strong>author cannot act</strong> as the review leader or scribe.</li>
          </ul>
        </div>
      </div>

      <div class="concept-block highlight-box">
        <h3>3.2.5 Success Factors for Reviews</h3>
        <p>Key factors that determine review success:</p>
        <ul>
          <li>Defining <strong>clear objectives and measurable exit criteria</strong>. Evaluation of participants should <strong>never</strong> be an objective.</li>
          <li>Choosing the <strong>appropriate review type</strong> to suit the objectives, work product type, participants, project needs, and context.</li>
          <li>Performing reviews on <strong>small chunks</strong> so reviewers don't lose concentration.</li>
          <li>Providing <strong>feedback from reviews</strong> to stakeholders and authors so they can improve.</li>
          <li>Providing <strong>adequate time</strong> for participants to prepare.</li>
          <li><strong>Management support</strong> for the review process.</li>
          <li>Making reviews <strong>part of the organization's culture</strong> to promote learning and process improvement.</li>
          <li>Providing <strong>adequate training</strong> for all participants so they know how to fulfil their role.</li>
          <li><strong>Facilitating meetings</strong> effectively.</li>
        </ul>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> Why is early and frequent stakeholder feedback important?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> It allows for early communication of potential quality problems. Without it, the product may not meet stakeholder expectations, resulting in costly rework, missed deadlines, blame games, or even complete project failure. Frequent feedback prevents misunderstandings about requirements and ensures changes are understood and implemented earlier.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> List the five activities in the review process in order.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Planning — define scope, purpose, exit criteria. 2) Review Initiation — ensure everyone is prepared. 3) Individual Review — each reviewer assesses quality and logs anomalies. 4) Communication and Analysis — discuss anomalies, decide status and actions. 5) Fixing and Reporting — create defect reports, accept work product when exit criteria are met.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the six principal roles in a review?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Manager (provides resources), Author (creates/fixes the work product), Moderator/Facilitator (ensures effective running of meetings), Scribe/Recorder (records anomalies and decisions), Reviewer (performs the review), and Review Leader (takes overall responsibility for the review).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the four review types, from least formal to most formal?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> 1) Informal Review — no defined process, main objective is detecting anomalies. 2) Walkthrough — led by the author, serves many objectives. 3) Technical Review — performed by technically qualified reviewers, led by a moderator. 4) Inspection — the most formal type, follows the complete generic process, main objective is finding the maximum number of anomalies.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Which review type is led by the author, and which is led by a moderator?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A walkthrough is led by the author. A technical review is led by a moderator. In an inspection, the author cannot act as the review leader or scribe.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is unique about inspections compared to other review types?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Inspections are the most formal type of review and follow the complete generic review process. Their main objective is finding the maximum number of anomalies. Metrics are collected and used to improve the SDLC. Uniquely, the author cannot act as the review leader or scribe.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> During the "Communication and Analysis" phase, are all identified anomalies considered defects?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> No. Anomalies identified during a review are not necessarily defects. All anomalies need to be analyzed and discussed. For each anomaly, a decision is made on its status, ownership, and required actions. Only confirmed defects receive defect reports.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 4 success factors for reviews.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any four of: Clear objectives and measurable exit criteria (never evaluate participants), choosing the appropriate review type, performing reviews on small chunks, providing feedback to stakeholders/authors, providing adequate preparation time, management support, making reviews part of organizational culture, adequate training for participants, and effective meeting facilitation.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `};export{e as content};

export const content = {
  title: "Chapter 3 Exam Questions",
  content: `
<style>
  .question-block {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px 24px;
    margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  }
  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .question-source {
    font-size: 0.75rem;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .lo-badge {
    font-size: 0.7rem;
    background: #eff6ff;
    color: #2563eb;
    border: 1px solid #bfdbfe;
    border-radius: 4px;
    padding: 2px 8px;
    font-family: monospace;
  }
  .question-text {
    font-size: 0.95rem;
    color: #1e293b;
    line-height: 1.6;
    margin-bottom: 14px;
    font-weight: 500;
  }
  .options-list {
    list-style: none;
    padding: 0;
    margin: 0 0 14px 0;
  }
  .option-item {
    padding: 8px 12px;
    margin-bottom: 6px;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #334155;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.5;
  }
  .option-correct {
    background: #f0fdf4;
    border-color: #86efac;
    color: #166534;
    font-weight: 500;
  }
  .option-letter {
    font-weight: 700;
    min-width: 22px;
    color: #475569;
    flex-shrink: 0;
  }
  .option-correct .option-letter {
    color: #16a34a;
  }
  .correct-mark {
    color: #16a34a;
    font-weight: 700;
    margin-left: auto;
    flex-shrink: 0;
  }
  .answer-reveal {
    font-size: 0.82rem;
    color: #64748b;
    padding-top: 10px;
    border-top: 1px solid #f1f5f9;
  }
  .answer-reveal strong {
    color: #16a34a;
  }
</style>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q15</span>
    <span class="lo-badge">FL-3.1.2</span>
  </div>
  <div class="question-text">Which of the following is NOT a benefit of static testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Having less expensive defect management due to the ease of detecting defects later in the SDLC</li>
        <li class="option-item"><span class="option-letter">b)</span> Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing</li>
        <li class="option-item"><span class="option-letter">c)</span> Finding coding defects that might not have been found by only performing dynamic testing</li>
        <li class="option-item"><span class="option-letter">d)</span> Detecting gaps and inconsistencies in requirements</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: "Having less expensive defect management due to the ease of detecting defects later in the SDLC" is NOT a benefit — detecting defects later is MORE expensive, not less. This statement contradicts the value of static testing. B is a true benefit (early defect fixing is cheaper). C is a true benefit (static testing finds what dynamic testing cannot). D is a true benefit (static testing detects gaps and inconsistencies in requirements).
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q16</span>
    <span class="lo-badge">FL-3.2.1</span>
  </div>
  <div class="question-text">Which of the following is a benefit of early and frequent feedback?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> It improves the test process for future projects</li>
        <li class="option-item"><span class="option-letter">b)</span> It forces customers to prioritize their requirements based on agreed risks</li>
        <li class="option-item"><span class="option-letter">c)</span> It provides a measure for the quality of changes</li>
        <li class="option-item"><span class="option-letter">d)</span> It helps avoid requirements misunderstandings</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Early and frequent feedback helps avoid requirements misunderstandings before they become costly defects. A is wrong — improving future test processes is a retrospective benefit, not a feedback benefit. B is wrong — feedback doesn't force prioritization by risk. C is wrong — feedback provides understanding, not a quality measure.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q17</span>
    <span class="lo-badge">FL-3.2.4</span>
  </div>
  <div class="question-text">The reviews being used in your organization have the following attributes: • • • • • There is the role of a scribe The main purpose is to evaluate quality The meeting is led by the author of the work product There is individual preparation A review report is produced Which of the following review types is MOST likely being used?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Informal review</li>
        <li class="option-item"><span class="option-letter">b)</span> Walkthrough</li>
        <li class="option-item"><span class="option-letter">c)</span> Technical review</li>
        <li class="option-item"><span class="option-letter">d)</span> Inspection</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Walkthrough is correct. Key indicators: the meeting is LED BY THE AUTHOR (unique to walkthroughs), has individual preparation, a scribe role, and a review report. A is wrong — informal reviews have no formal process. C is wrong — technical reviews are led by a trained moderator, not the author. D is wrong — inspections are led by a facilitator/moderator with the most formal process.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - Q18</span>
    <span class="lo-badge">FL-3.2.5</span>
  </div>
  <div class="question-text">Which of these statements is NOT a factor that contributes to successful reviews?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Participants should dedicate adequate time for the review</li>
        <li class="option-item"><span class="option-letter">b)</span> Splitting large work products into small parts to make the required effort less intense</li>
        <li class="option-item"><span class="option-letter">c)</span> Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants</li>
        <li class="option-item"><span class="option-letter">d)</span> Failures found should be acknowledged, appreciated, and handled objectively</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: The statement says "failures found" — but reviews find DEFECTS, not failures. Failures occur during dynamic testing. The incorrect terminology makes this NOT a valid success factor. A (dedicating adequate time), B (splitting large work products), and C (avoiding hostile behaviors) are all legitimate success factors for reviews.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA11</span>
    <span class="lo-badge">FL-3.1.1</span>
  </div>
  <div class="question-text">The following is a list of the work products produced in the SDLC. i. ii. iii. iv. v. Business requirements Schedule Test budget Third-party executable code User stories and their acceptance criteria Which of them can be reviewed?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> i and iv can be reviewed</li>
        <li class="option-item"><span class="option-letter">b)</span> i, ii, iii and iv can be reviewed</li>
        <li class="option-item"><span class="option-letter">c)</span> i, ii, iii, and v can be reviewed</li>
        <li class="option-item"><span class="option-letter">d)</span> iii, iv, v can be reviewed</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Business requirements (i), schedule (ii), test budget (iii), and user stories (v) can all be reviewed — they are readable/understandable work products. Third-party executable code (iv) cannot be reviewed because it's not human-readable and may have legal restrictions. A is wrong — it includes iv which can't be reviewed. B is wrong — it also includes iv. D is wrong — it excludes i and ii which can be reviewed.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA12</span>
    <span class="lo-badge">FL-3.1.3</span>
  </div>
  <div class="question-text">Decide which of the following statements (i-v) are true for static testing. i. ii. iii. iv. v.</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Abnormal external behaviors are easier to identify with this testing</li>
        <li class="option-item"><span class="option-letter">b)</span> Discrepancies from a coding standard are easier to find with this testing</li>
        <li class="option-item"><span class="option-letter">c)</span> It identifies failures caused by defects when the software is run</li>
        <li class="option-item"><span class="option-letter">d)</span> Its test objective is to identify defects as early as possible</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Static testing's objective is to identify defects as early as possible, before dynamic testing. A is wrong — abnormal external behaviors are identified by dynamic testing. B is wrong — while static analysis CAN find coding standard deviations, option D is the broader/better answer about the objective. C is wrong — failures are found by dynamic testing, not static testing.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA13</span>
    <span class="lo-badge">FL-3.2.2</span>
  </div>
  <div class="question-text">Which of the following statements about formal reviews is TRUE?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Some reviews do not require more than one role</li>
        <li class="option-item"><span class="option-letter">b)</span> The review process has several activities</li>
        <li class="option-item"><span class="option-letter">c)</span> Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types</li>
        <li class="option-item"><span class="option-letter">d)</span> Defects found during the review are not reported since they are not found by dynamic testing</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: The formal review process has several activities: planning, review initiation, individual review, communication and analysis, and fixing and reporting. A is wrong — formal reviews require multiple roles (author, reviewers, facilitator, scribe, etc.). C is wrong — documentation IS distributed before the meeting during review initiation. D is wrong — defects found during reviews ARE reported.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam A - QA14</span>
    <span class="lo-badge">FL-3.2.3</span>
  </div>
  <div class="question-text">What task may management take on during a formal review?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Taking overall responsibility for the review</li>
        <li class="option-item"><span class="option-letter">b)</span> Deciding what is to be reviewed</li>
        <li class="option-item"><span class="option-letter">c)</span> Ensuring the effective running of review meetings, and moderating, if necessary</li>
        <li class="option-item"><span class="option-letter">d)</span> Recording review information such as review decisions</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Management decides WHAT is to be reviewed and provides resources (time, staff). A is wrong — overall responsibility belongs to the review leader. C is wrong — ensuring effective running of meetings is the facilitator's role. D is wrong — recording information is the scribe's role.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q15</span>
    <span class="lo-badge">FL-3.1.3</span>
  </div>
  <div class="question-text">Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Lack of usability provided through the user interface</li>
        <li class="option-item"><span class="option-letter">b)</span> Code with no path that reaches it</li>
        <li class="option-item"><span class="option-letter">c)</span> Poor response times for most of the expected users</li>
        <li class="option-item"><span class="option-letter">d)</span> Required features that are not implemented in the code</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Unreachable code (dead code) can only be found by static testing/analysis — you can't reach it during execution by definition. A is wrong — usability issues are typically found through dynamic testing (user interaction). C is wrong — response times require execution (dynamic testing). D is wrong — missing features can be found by both static and dynamic testing.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q16</span>
    <span class="lo-badge">FL-3.2.1</span>
  </div>
  <div class="question-text">Which of the following is a benefit of early and frequent stakeholder feedback?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Managers are aware of which developers are less productive</li>
        <li class="option-item"><span class="option-letter">b)</span> It allows project managers to prioritize their stakeholder interactions</li>
        <li class="option-item"><span class="option-letter">c)</span> It facilitates early communication of potential quality issues</li>
        <li class="option-item"><span class="option-letter">d)</span> End users better understand why the delivery of the work product is delayed</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Early and frequent feedback facilitates early communication of potential quality issues before they become expensive to fix. A is wrong — this is about people management, not quality feedback. B is wrong — feedback isn't about prioritizing stakeholder interactions. D is wrong — feedback isn't about explaining delays to end users.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q17</span>
    <span class="lo-badge">FL-3.2.2</span>
  </div>
  <div class="question-text">Given the following task descriptions: 1. The quality characteristics to be evaluated and the exit criteria are selected 2. Everyone has access to the work product 3. Anomalies are identified in the work product 4. Anomalies are discussed And the following review activities A. Individual review B. Review initiation C. Planning D. Communication and analysis Which of the following BEST matches the task descriptions and activities?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 1B, 2C, 3D, 4A</li>
        <li class="option-item"><span class="option-letter">b)</span> 1B, 2D, 3C, 4A</li>
        <li class="option-item"><span class="option-letter">c)</span> 1C, 2A, 3B, 4D</li>
        <li class="option-item"><span class="option-letter">d)</span> 1C, 2B, 3A, 4D</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Planning (C) = quality criteria and exit criteria selected; Review initiation (B) = everyone gets access to the work product; Individual review (A) = anomalies identified in the work product; Communication and analysis (D) = anomalies discussed. So the correct mapping is 1C, 2B, 3A, 4D.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam B - Q18</span>
    <span class="lo-badge">FL-3.2.3</span>
  </div>
  <div class="question-text">Given the following roles in reviews: 1. Scribe 2. Review leader 3. Facilitator 4. Manager And the following responsibilities in reviews: A. Ensures the effective running of review meetings and the setting up a safe review environment B. Records review information, such as decisions and new anomalies found during the review meeting C. Decides what is to be reviewed and provides resources, such as staff and time for the review D. Takes overall responsibility for the review such as organizing when and where the review will take place Which of the following BEST matches the roles and responsibilities?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 1A, 2B, 3D, 4C</li>
        <li class="option-item"><span class="option-letter">b)</span> 1A, 2C, 3B, 4D</li>
        <li class="option-item"><span class="option-letter">c)</span> 1B, 2D, 3A, 4C</li>
        <li class="option-item"><span class="option-letter">d)</span> 1B, 2D, 3C, 4A</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Scribe (1) = records review information (B); Review leader (2) = takes overall responsibility (D); Facilitator (3) = ensures effective running of meetings (A); Manager (4) = decides what to review and provides resources (C). So the correct mapping is 1B, 2D, 3A, 4C.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q15</span>
    <span class="lo-badge">FL-3.1.3</span>
  </div>
  <div class="question-text">Given the following example defects: i. Two different parts of the design specification disagree due to the complexity of the design ii. A response time is too long and so makes users lose patience iii. A path in the code cannot be reached during execution iv. A variable is declared but never subsequently used in the program v. The amount of memory needed by the program to generate a report is too high Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> ii, v</li>
        <li class="option-item"><span class="option-letter">b)</span> iii, v</li>
        <li class="option-item"><span class="option-letter">c)</span> i, ii, iv</li>
        <li class="option-item"><span class="option-letter">d)</span> i, iii, iv</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>D</strong>. Explanation: Design disagreements (i), unreachable code (iii), and unused variables (iv) are found by static testing. Response time (ii) and memory usage (v) require execution and are found by dynamic testing. A (ii, v) lists only dynamic defects. B (iii, v) mixes static and dynamic. C (i, ii, iv) incorrectly includes response time (ii).
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q16</span>
    <span class="lo-badge">FL-3.2.1</span>
  </div>
  <div class="question-text">Which of the following is a benefit of early and frequent stakeholder feedback?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Changes to requirements are understood and implemented earlier</li>
        <li class="option-item"><span class="option-letter">b)</span> It ensures business stakeholders understand user requirements</li>
        <li class="option-item"><span class="option-letter">c)</span> It allows product owners to change their requirements as often as they want</li>
        <li class="option-item"><span class="option-letter">d)</span> End users are told which requirements will not be implemented prior to release</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>A</strong>. Explanation: Changes to requirements are understood and implemented earlier when stakeholders provide early and frequent feedback. B is wrong — feedback doesn't ensure business stakeholder understanding of user requirements. C is wrong — this is about unlimited changes, not a benefit of feedback. D is wrong — informing about unimplemented requirements isn't the primary feedback benefit.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q17</span>
    <span class="lo-badge">FL-3.2.4</span>
  </div>
  <div class="question-text">Given the following review types: 1. Technical review 2. Informal review 3. Inspection 4. Walkthrough And the following descriptions: A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects C. The main objective is detecting potential defects and it requires metrics collection to support process improvement D. The main objective is detecting potential defects and it generates no formal documented output Which of the following BEST matches the review types and the descriptions?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 1A, 2B, 3C, 4D</li>
        <li class="option-item"><span class="option-letter">b)</span> 1A, 2D, 3C, 4B</li>
        <li class="option-item"><span class="option-letter">c)</span> 1B, 2C, 3D, 4A</li>
        <li class="option-item"><span class="option-letter">d)</span> 1C, 2D, 3A, 4B</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Technical review (1) = gaining consensus and new ideas (A); Informal review (2) = detecting defects with no formal output (D); Inspection (3) = detecting defects with metrics collection (C); Walkthrough (4) = educating reviewers, new ideas, and detecting defects (B). So the correct mapping is 1A, 2D, 3C, 4B.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam C - Q18</span>
    <span class="lo-badge">FL-3.2.5</span>
  </div>
  <div class="question-text">Which of the following is a factor that contributes to a successful review?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Ensure management participate as reviewers</li>
        <li class="option-item"><span class="option-letter">b)</span> Split large work products into smaller parts</li>
        <li class="option-item"><span class="option-letter">c)</span> Set reviewer evaluation as an objective</li>
        <li class="option-item"><span class="option-letter">d)</span> Plan to cover one document per review</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: Splitting large work products into smaller parts is a recognized success factor for reviews, making the effort less intense. A is wrong — management as reviewers can intimidate participants. C is wrong — evaluating reviewers creates an unsafe environment. D is wrong — reviews should be focused on small parts, not covering entire documents at once.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q15</span>
    <span class="lo-badge">FL-3.1.1</span>
  </div>
  <div class="question-text">Which of the following CANNOT be examined by static testing?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Contract</li>
        <li class="option-item"><span class="option-letter">b)</span> Test plan</li>
        <li class="option-item"><span class="option-letter">c)</span> Encrypted code</li>
        <li class="option-item"><span class="option-letter">d)</span> Test charter</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Encrypted code cannot be examined by static testing because it's not human-readable. Contracts (A), test plans (B), and test charters (D) are all readable work products that can be reviewed through static testing.
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q16</span>
    <span class="lo-badge">FL-3.1.2</span>
  </div>
  <div class="question-text">Which of the following statements about the value of static testing is CORRECT?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> The defect types found by static testing are different from the defect types that can be found by dynamic testing</li>
        <li class="option-item"><span class="option-letter">b)</span> Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types</li>
        <li class="option-item"><span class="option-letter">c)</span> Dynamic testing can identify some of the defects that can be found by static testing but not all of them</li>
        <li class="option-item"><span class="option-letter">d)</span> Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>C</strong>. Explanation: Dynamic testing can identify some but not all defects found by static testing (e.g., it cannot find unreachable code). A is wrong — the defect types overlap partially, they are not entirely different. B is wrong — dynamic testing can't find all static defects. D is wrong — static testing also can't find all dynamic defects (e.g., performance issues).
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q17</span>
    <span class="lo-badge">FL-3.2.2</span>
  </div>
  <div class="question-text">Given the following descriptions of review activities: 1. Detected anomalies are deliberated upon, and determinations are reached regarding their status, ownership, and any further steps needed 2. Defects are recorded, and any needed updates are addressed prior to the acceptance of the work product 3. Reviewers employ techniques to come up with suggestions and questions about the work product and to spot anomalies 4. The objective of the review and its schedule are established to ensure a focused and efficient review 5. Participants are provided with access to the item being reviewed Which of the following is the CORRECT sequence in the review process of the activities that correspond to the descriptions?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> 4–3–5–2–1</li>
        <li class="option-item"><span class="option-letter">b)</span> 4–5–3–1–2</li>
        <li class="option-item"><span class="option-letter">c)</span> 5–4–1–3–2</li>
        <li class="option-item"><span class="option-letter">d)</span> 5–4–3–2–1</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: The correct sequence is 4 (Planning — objective and schedule established) → 5 (Review initiation — participants get access) → 3 (Individual review — reviewers spot anomalies) → 1 (Communication and analysis — anomalies deliberated) → 2 (Fixing and reporting — defects recorded and updates addressed).
</div>

<div class="question-block">
  <div class="question-header">
    <span class="question-source">Exam D - Q18</span>
    <span class="lo-badge">FL-3.2.3</span>
  </div>
  <div class="question-text">Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely?</div>
  <ul class="options-list">
        <li class="option-item"><span class="option-letter">a)</span> Manager</li>
        <li class="option-item"><span class="option-letter">b)</span> Moderator</li>
        <li class="option-item"><span class="option-letter">c)</span> Chairperson</li>
        <li class="option-item"><span class="option-letter">d)</span> Review Leader</li>
  </ul>
  <div class="answer-reveal">Correct answer: <strong>B</strong>. Explanation: The moderator (also called facilitator) ensures effective meetings and that everyone can voice opinions freely in a safe environment. A is wrong — the manager decides what to review and provides resources, not how meetings run. C is wrong — chairperson is not a standard ISTQB review role. D is wrong — the review leader has overall responsibility for the review, not meeting facilitation.
</div>
`,
};

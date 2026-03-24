export const content = {
  title: "Chapter 1 Exam Questions & Patterns",
  content: `
    <div class="test-content">
      <div class="concept-block intro-box">
        <h3>Exam Strategy & Patterns</h3>
        <p>ISTQB Chapter 1 questions primarily test your ability to differentiate between very similar-sounding concepts. Watch out for absolute terms like "always," "guarantees," or "proves," which are usually incorrect in testing. Testing is about confidence and risk reduction, not absolute proof.</p>
      </div>

      <!-- SECTION 1.1 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #3b82f6;">
        <h3 style="color: #3b82f6;">1.1 What is Testing? - Tips & Tricks</h3>
        <ul>
          <li><strong>Watch for "Objective" vs "Action":</strong> If a question asks for an objective, look for intents like "evaluating", "triggering failures", "building confidence", or "reducing risk". Avoid answers that just describe an activity like "writing a script".</li>
          <li><strong>Verification vs Validation:</strong> <em>Verification</em> = Did we meet the specified requirements? <em>Validation</em> = Is it actually fit for the users in the real world?</li>
          <li><strong>Testing vs Debugging:</strong> Testers show defects exist (by triggering failures); developers find root causes and fix them.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>1.1 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question 1: Which of the following is a typical test objective?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
               <div>A) Fixing defects found during dynamic testing.</div>
               <div>B) Running automated test scripts via a CI/CD pipeline.</div>
               <div>C) Triggering failures to find hidden defects.</div>
               <div>D) Designing the software architecture.</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer & Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Explanation:</em> Fixing defects (A) is debugging. Running scripts (B) is an action, not the underlying objective. Designing architecture (D) is a development task. Triggering failures to find defects (C) is a core testing objective.</p>
                </div>
              </details>
            </div>
          </li>
          
          <li style="margin-top: 1.5rem;">
            <strong>Question 2: What is the main difference between Testing and Debugging?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
               <div>A) Testing identifies the root cause; debugging fixes it.</div>
               <div>B) Testing triggers failures to show defects exist; debugging diagnoses the root cause.</div>
               <div>C) Testing is done by developers; debugging is done by users.</div>
               <div>D) Testing only involves static analysis; debugging involves dynamic execution.</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer & Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p><em>Explanation:</em> Testing triggers failures or directly finds defects, while debugging analyzes those failures to find the root cause and apply a fix.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

      <!-- SECTION 1.2 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #8b5cf6; margin-top: 2.5rem;">
        <h3 style="color: #8b5cf6;">1.2 Why is Testing Necessary? - Tips & Tricks</h3>
        <ul>
          <li><strong>Errors &rarr; Defects &rarr; Failures sequence:</strong> Humans make Errors (mistakes), which produce Defects (faults) in code/documents. When the code is executed, the defect may cause a Failure.</li>
          <li><strong>Root Cause:</strong> The root cause is the underlying human or process issue that led to the defect (e.g., tight timeline, lack of training, misleading requirement), NOT the defect itself.</li>
        </ul>
      </div>

      <div class="concept-block practice-questions exams-list">
        <h3>1.2 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question 1: A developer misunderstands a requirement and implements a feature incorrectly. This leads to the application crashing during a test. Which sequence perfectly describes this situation?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
               <div>A) Defect &rarr; Error &rarr; Failure</div>
               <div>B) Failure &rarr; Defect &rarr; Error</div>
               <div>C) Error &rarr; Defect &rarr; Failure</div>
               <div>D) Error &rarr; Failure &rarr; Defect</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer & Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Explanation:</em> The developer misunderstanding the requirement is the <strong>Error</strong> (mistake). Implementing it incorrectly creates a <strong>Defect</strong> in the code. The application crashing during execution is the <strong>Failure</strong>.</p>
                </div>
              </details>
            </div>
          </li>
          
          <li style="margin-top: 1.5rem;">
            <strong>Question 2: Which of the following is an example of a root cause?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
               <div>A) The system crashed when saving a file.</div>
               <div>B) An incorrect variable was used in a loop.</div>
               <div>C) The Product Owner gave ambiguous requirements.</div>
               <div>D) The calculation output was $5.00 instead of $15.00.</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer & Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Explanation:</em> The ambiguous requirements are the underlying reason (root cause) the mistake was made. B is a Defect. A and D are Failures.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>
      
      <!-- SECTION 1.3 -->
      <div class="concept-block highlight-box" style="border-left: 4px solid #10b981; margin-top: 2.5rem;">
        <h3 style="color: #10b981;">1.3 Testing Principles - Tips & Tricks</h3>
        <ul>
          <li><strong>Testing shows the presence of defects:</strong> It does NOT guarantee or prove there are no defects left.</li>
          <li><strong>Tests Wear Out (formerly Pesticide Paradox):</strong> Running the same tests over and over will eventually stop finding new bugs. Tests must be updated.</li>
          <li><strong>Absence-of-Errors Fallacy:</strong> Just because you found zero bugs doesn't mean the system is useful or meets business needs.</li>
          <li><strong>Early Testing saves time and money:</strong> The "Shift-Left" approach means catching defects during planning/design is exponentially cheaper than finding them in production.</li>
        </ul>
      </div>
      
      <div class="concept-block practice-questions exams-list">
        <h3>1.3 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question 1: A team runs their automated regression suite every night for 6 months but hasn't found any new defects in the last month. Which testing principle best explains this scenario?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
               <div>A) Testing shows the presence of defects.</div>
               <div>B) Early testing saves time and money.</div>
               <div>C) Tests wear out.</div>
               <div>D) Testing is context-dependent.</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer & Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: C</strong></p>
                  <p><em>Explanation:</em> If identical tests are repeated over and over, they will eventually stop finding new defects as the application stabilizes against those specific paths. The tests need to be updated ("Tests wear out").</p>
                </div>
              </details>
            </div>
          </li>
          
          <li style="margin-top: 1.5rem;">
            <strong>Question 2: Which testing principle states that fixing all defects does not guarantee the success of the software?</strong>
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
               <div>A) Exhaustive testing is impossible.</div>
               <div>B) Absence-of-errors fallacy.</div>
               <div>C) Testing is context-dependent.</div>
               <div>D) Defects cluster together.</div>
            </div>
            <div class="details-panel">
              <details>
                <summary>Show Answer & Explanation</summary>
                <div class="answer-box">
                  <p><strong>Answer: B</strong></p>
                  <p><em>Explanation:</em> The Absence-of-errors fallacy highlights that even a bug-free system can fail in the market if it was built to incorrect requirements or doesn't solve the user's problem.</p>
                </div>
              </details>
            </div>
          </li>
        </ol>
      </div>

    </div>
  `
};

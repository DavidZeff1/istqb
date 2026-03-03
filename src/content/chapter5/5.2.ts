export const content = {
  title: "5.2 Risk Management",
  content: `
    <div class="test-content">
      <div class="concept-block">
        <h3>The Big Picture</h3>
        <p>Risk management allows organizations to increase the likelihood of achieving objectives, improve product quality, and increase stakeholders' <strong>confidence and trust</strong>.</p>
        <p>The main risk management activities are:</p>
        <ul>
          <li><strong>Risk analysis</strong> (risk identification + risk assessment)</li>
          <li><strong>Risk control</strong> (risk mitigation + risk monitoring)</li>
        </ul>
        <p>A test approach where test activities are selected, prioritized, and managed based on risk analysis and risk control is called <strong>risk-based testing</strong>.</p>
      </div>

      <div class="concept-block">
        <h3>5.2.1 Risk Definition and Risk Attributes</h3>
        <p><strong>Risk</strong> is a potential event, hazard, threat, or situation whose occurrence causes an adverse effect. A risk is characterized by two factors:</p>
        <div class="highlight-box">
          <ul>
            <li><strong>Risk likelihood:</strong> The probability of the risk occurrence (greater than zero and less than one).</li>
            <li><strong>Risk impact (harm):</strong> The consequences of this occurrence.</li>
          </ul>
          <p>These two factors express the <strong>risk level</strong> — the higher the risk level, the more important its treatment.</p>
        </div>
      </div>

      <div class="concept-block">
        <h3>5.2.2 Project Risks and Product Risks</h3>

        <div class="comparison-grid" style="margin-top: 1rem;">
          <div class="grid-item">
            <h4>Project Risks</h4>
            <p>Related to the <strong>management and control</strong> of the project:</p>
            <ul>
              <li><strong>Organizational issues:</strong> Delays in deliveries, inaccurate estimates, cost cutting</li>
              <li><strong>People issues:</strong> Insufficient skills, conflicts, communication problems, staff shortage</li>
              <li><strong>Technical issues:</strong> Scope creep, poor tool support</li>
              <li><strong>Supplier issues:</strong> Third-party delivery failure, bankruptcy</li>
            </ul>
            <p><em>When they occur, they may impact project schedule, budget, or scope.</em></p>
          </div>
          <div class="grid-item">
            <h4>Product Risks</h4>
            <p>Related to <strong>product quality characteristics</strong> (ISO 25010):</p>
            <ul>
              <li>Missing or wrong functionality</li>
              <li>Incorrect calculations, runtime errors</li>
              <li>Poor architecture, inefficient algorithms</li>
              <li>Inadequate response time, poor UX</li>
              <li>Security vulnerabilities</li>
            </ul>
            <p><em>Negative consequences may include: user dissatisfaction, loss of revenue/trust/reputation, damage to third parties, high maintenance costs, criminal penalties, or even physical damage/injuries/death.</em></p>
          </div>
        </div>
      </div>

      <div class="concept-block">
        <h3>5.2.3 Product Risk Analysis</h3>
        <p>Goal: Provide <strong>awareness of product risk</strong> to focus test effort and minimize the <strong>residual level of product risk</strong>. Ideally begins <strong>early in the SDLC</strong>.</p>

        <p>Product risk analysis consists of:</p>
        <div class="highlight-box" style="margin: 1rem 0;">
          <ul>
            <li><strong>Risk identification:</strong> Generating a comprehensive list of risks using techniques like brainstorming, workshops, interviews, or cause-effect diagrams.</li>
            <li><strong>Risk assessment:</strong> Categorizing risks, determining their likelihood, impact, and level, prioritizing them, and proposing ways to handle them.</li>
          </ul>
          <p><strong>Assessment approaches:</strong></p>
          <ul>
            <li><strong>Quantitative:</strong> Risk level = risk likelihood × risk impact</li>
            <li><strong>Qualitative:</strong> Risk level determined using a risk matrix</li>
            <li>Or a <strong>mix</strong> of both</li>
          </ul>
        </div>

        <p><strong>Results of product risk analysis are used to:</strong></p>
        <ul>
          <li>Determine the <strong>test scope</strong></li>
          <li>Determine test levels and propose <strong>test types</strong></li>
          <li>Determine <strong>test techniques</strong> and coverage to be achieved</li>
          <li>Estimate the <strong>test effort</strong> required</li>
          <li><strong>Prioritize testing</strong> to find critical defects as early as possible</li>
          <li>Determine if <strong>additional activities</strong> beyond testing could reduce risk</li>
        </ul>
      </div>

      <div class="concept-block highlight-box">
        <h3>5.2.4 Product Risk Control</h3>
        <p>Risk control comprises all measures taken in response to identified and assessed risks. It consists of <strong>risk mitigation</strong> and <strong>risk monitoring</strong>.</p>

        <p><strong>Response options:</strong> Risk mitigation by testing, risk acceptance, risk transfer, or a contingency plan.</p>

        <h4 style="margin-top: 1rem;">Actions to Mitigate Product Risks by Testing</h4>
        <ul>
          <li>Select testers with the <strong>right level of experience and skills</strong> for the risk type</li>
          <li>Apply an appropriate level of <strong>independence of testing</strong></li>
          <li>Perform <strong>reviews and static analysis</strong></li>
          <li>Apply appropriate <strong>test techniques and coverage levels</strong></li>
          <li>Apply appropriate <strong>test types</strong> addressing affected quality characteristics</li>
          <li>Perform <strong>dynamic testing</strong>, including regression testing</li>
        </ul>
      </div>

      <hr class="section-divider">

      <div class="concept-block practice-questions">
        <h3>🧠 Knowledge Check Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What two factors characterize a risk?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Risk likelihood (the probability of occurrence, between 0 and 1) and risk impact/harm (the consequences of occurrence). Together they express the risk level — the higher the level, the more important its treatment.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between project risks and product risks?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Project risks are related to the management and control of the project (organizational, people, technical, supplier issues) and impact schedule, budget, or scope. Product risks are related to product quality characteristics and when they occur may cause user dissatisfaction, loss of revenue, damage to third parties, or worse.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is risk-based testing?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Risk-based testing is a test approach where test activities are selected, prioritized, and managed based on risk analysis (risk identification + risk assessment) and risk control (risk mitigation + risk monitoring).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between quantitative and qualitative risk assessment?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> In the quantitative approach, risk level is calculated as the multiplication of risk likelihood and risk impact. In the qualitative approach, risk level is determined using a risk matrix. A mix of both approaches can also be used.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name at least 4 ways that product risk analysis results are used.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Any four of: Determine test scope, determine test levels and test types, determine test techniques and coverage, estimate test effort, prioritize testing to find critical defects early, and determine if additional activities beyond testing could reduce risk.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What are the response options for product risk control?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Risk mitigation by testing, risk acceptance, risk transfer, or a contingency plan. Testing-specific mitigation actions include selecting experienced testers, applying appropriate independence, performing reviews/static analysis, applying appropriate test techniques, test types, and dynamic testing including regression testing.</p>
              </details>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};


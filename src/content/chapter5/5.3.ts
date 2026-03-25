export const content = {
  title: "5.3 Test Monitoring, Test Control and Test Completion",
  content: `
    <div class="test-content">

      <!-- ==================== BIG PICTURE ==================== -->
      <section class="concept-block">
        <h3>The Big Picture — Running a Video Streaming Launch</h3>
        <p>Your team is building a <strong>video streaming platform</strong> (think Netflix / Disney+). You're 3 weeks from launch. The test manager needs to answer: "Are we on track? If not, what do we change? And when it's done, what did we learn?" That's <strong>monitoring → control → completion</strong>.</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.5rem;">Activity</th>
                <th style="text-align:left; padding:0.5rem;">Purpose</th>
                <th style="text-align:left; padding:0.5rem;">Streaming Platform Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Monitoring</strong></td>
                <td>Gather data to assess progress against exit criteria</td>
                <td>"78% of regression tests passed, 12 critical defects open, load test covers 5 of 8 regions."</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Control</strong></td>
                <td>Use monitoring data to take <strong>corrective actions</strong></td>
                <td>"Reassign 2 testers from subtitle testing to payment flow — it has 8 critical bugs. Delay load test to next week after env fix."</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Completion</strong></td>
                <td>Consolidate experience, testware, and lessons learned at milestones</td>
                <td>"Post-launch report: 99.4% uptime, 3 P1 defects found in production, test automation saved 200 hours. Lesson: start CDN testing earlier."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>Control Directives — Real Examples</h4>
          <ul>
            <li><strong>Reprioritize tests:</strong> Buffering issues reported in beta → move streaming quality tests to top priority</li>
            <li><strong>Re-evaluate entry/exit criteria:</strong> Payment rework delays → re-assess if payment module meets entry criteria for system testing</li>
            <li><strong>Adjust schedule:</strong> AWS staging environment delayed 5 days → shift load testing window</li>
            <li><strong>Add resources:</strong> Bring in a contract tester for mobile device compatibility testing</li>
          </ul>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;"><strong>When does completion happen?</strong> At milestones: test level completed, agile iteration finished, project completed/cancelled, system released, or maintenance release done.</p>
        </div>
      </section>

      <!-- ==================== METRICS ==================== -->
      <section class="concept-block">
        <h3>5.3.1 Metrics Used in Testing</h3>
        <p>Metrics answer: "Where are we?", "How good is the product?", and "How effective are we?"</p>

        <div class="highlight-box" style="margin: 1rem 0;">
          <h4>🧠 Memory Trick — "PTPDRC-C" → 7 Metric Categories</h4>
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Category</th>
                <th style="text-align:left; padding:0.4rem;">What It Measures</th>
                <th style="text-align:left; padding:0.4rem;">Streaming Platform Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Project progress</strong></td><td>Task completion, resource usage, effort</td><td>85% of planned test tasks complete, 3 of 4 testers allocated</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Test progress</strong></td><td>Cases run/not run, passed/failed, execution time</td><td>420/500 cases executed, 380 passed, 28 failed, 12 blocked</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Product quality</strong></td><td>Availability, response time, MTTF</td><td>99.7% uptime, average stream start &lt; 2s, MTTF = 72 hours</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Defect metrics</strong></td><td>Found/fixed count, density, detection %</td><td>142 defects found, 118 fixed, defect density = 3.2/KLOC</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Risk metrics</strong></td><td>Residual risk level</td><td>3 high product risks remain: DRM bypass, 4K stuttering on low-bandwidth, subtitle sync</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Coverage</strong></td><td>Requirements coverage, code coverage</td><td>94% requirements covered, 81% branch coverage on playback engine</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Cost</strong></td><td>Cost of testing, cost of quality</td><td>$45K testing budget spent of $60K total, $12K in automation infrastructure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ==================== REPORTS ==================== -->
      <section class="concept-block">
        <h3>5.3.2 Purpose, Content and Audience for Test Reports</h3>

        <div class="comparison-grid" style="margin: 1rem 0;">
          <div class="grid-item">
            <h4>Test Progress Reports</h4>
            <p><strong>When:</strong> Regularly — daily standups, weekly emails</p>
            <p><strong>Purpose:</strong> Ongoing test control</p>
            <ul>
              <li>Testing period covered</li>
              <li>Progress vs schedule (ahead/behind)</li>
              <li>Impediments & workarounds</li>
              <li>Current test metrics</li>
              <li>New/changed risks</li>
              <li>Plan for next period</li>
            </ul>
            <p><em>Example: "Week 3 report: 28 new defects found this sprint, staging env was down Mon–Tue (workaround: used local Docker). Next week: performance testing on AWS US-East."</em></p>
          </div>
          <div class="grid-item">
            <h4>Test Completion Reports</h4>
            <p><strong>When:</strong> Once — at milestones</p>
            <p><strong>Purpose:</strong> Consolidate final status</p>
            <ul>
              <li>Test summary</li>
              <li>Quality evaluation vs original plan</li>
              <li>Deviations from test plan</li>
              <li>Impediments & workarounds</li>
              <li>Metrics from progress reports</li>
              <li>Unmitigated risks, unfixed defects</li>
              <li><strong>Lessons learned</strong></li>
            </ul>
            <p><em>Example: "Launch report: 500 test cases, 96% pass rate. 4 known defects deferred to v1.1. Lesson: CDN region testing needed 2 weeks earlier."</em></p>
          </div>
        </div>

        <div class="definition-box highlight-box" style="padding: 1rem; margin: 1rem 0; border-radius: 8px;">
          <p style="margin: 0;">🎯 <strong>Exam trap:</strong> Progress reports are <strong>regular/recurring</strong>. Completion reports happen <strong>once at a milestone</strong>. The exam may describe a report and ask you to identify which type it is.</p>
        </div>
      </section>

      <!-- ==================== COMMUNICATING STATUS ==================== -->
      <section class="concept-block">
        <h3>5.3.3 Communicating the Status of Testing</h3>
        <div class="highlight-box" style="margin: 1rem 0;">
          <table style="width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                <th style="text-align:left; padding:0.4rem;">Method</th>
                <th style="text-align:left; padding:0.4rem;">Best For</th>
                <th style="text-align:left; padding:0.4rem;">Streaming Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Verbal</strong></td><td>Co-located teams, quick updates</td><td>Daily standup: "Playback tests green, payment has 3 blockers"</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Dashboards</strong></td><td>Real-time visibility for all</td><td>Grafana board showing test pass rate, defect trend, coverage %</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Electronic channels</strong></td><td>Async updates, distributed teams</td><td>Slack #qa-streaming: "Load test passed — 50K concurrent streams stable"</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding:0.4rem;"><strong>Online docs</strong></td><td>Detailed reference, audit trail</td><td>Confluence test plan wiki with linked execution results</td>
              </tr>
              <tr>
                <td style="padding:0.4rem;"><strong>Formal reports</strong></td><td>Compliance, stakeholder sign-off</td><td>PDF completion report for VP of Engineering before go-live</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><em>Key principle: <strong>Tailor communication to the audience.</strong> More formal for distributed teams and senior stakeholders. More informal for daily team interaction.</em></p>
      </section>

      <hr class="section-divider">

      <!-- ==================== PRACTICE QUESTIONS ==================== -->
      <section class="concept-block practice-questions">
        <h3>🧠 Practice Questions</h3>
        <ol>
          <li>
            <strong>Question:</strong> What is the difference between test monitoring, test control, and test completion?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Monitoring</strong> = gathering data to assess progress and whether exit criteria are met. <strong>Control</strong> = using that data to take corrective actions. <strong>Completion</strong> = collecting data from finished activities to consolidate experience, testware, and lessons learned at milestones.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> Name the 7 categories of test metrics.
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Project progress, test progress, product quality, defect metrics, risk metrics, coverage metrics, and cost metrics.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What is the difference between a test progress report and a test completion report?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Progress reports are <strong>regular/recurring</strong> (daily, weekly) and support ongoing control — they cover current status, impediments, and next steps. Completion reports happen <strong>once at a milestone</strong> and include a full summary, quality evaluation vs the original plan, unmitigated risks, unfixed defects, and lessons learned.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> Your streaming platform's staging environment goes down for 3 days. The test manager reassigns mobile testers to API testing (which doesn't need the staging env) and pushes the integration test window back by 4 days. Which testing activity is this — monitoring, control, or completion?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> <strong>Test control.</strong> The test manager is using monitoring information (staging env is down, schedule is impacted) to take corrective actions (reassigning testers, adjusting the schedule).</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Question:</strong> What communication methods exist for test status, and when should you use formal vs informal?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> Methods: verbal, dashboards, electronic channels (email/chat), online documentation, formal reports. Use <strong>informal</strong> for co-located daily team interactions. Use <strong>formal</strong> for distributed teams and senior stakeholder reporting. Always tailor communication to the audience.</p>
              </details>
            </div>
          </li>
          <li>
            <strong>Scenario Question:</strong> After launch, the QA lead writes a document summarizing all testing performed, listing 4 unfixed defects deferred to v1.1, noting that CDN testing should start 2 weeks earlier next time, and including final metrics. What type of report is this?
            <div class="details-panel">
              <details>
                <summary>Show Answer</summary>
                <p><strong>Answer:</strong> A <strong>test completion report</strong>. It's written once at a milestone (launch), contains a summary, unfixed defects, lessons learned, and final metrics — all hallmarks of completion reporting.</p>
              </details>
            </div>
          </li>
        </ol>
      </section>
    </div>
  `,
};

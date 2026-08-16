const { I, SITE, card, step, faq, faqSchema, ctaBand, btn } = require('./layout');

const AVAIL_NOTE = `<div class="callout warm">
        <h4>Who can access this service</h4>
        <p>This support is delivered by Grow What Matters, which is not an NDIS-registered provider. That means it is available to plan-managed and self-managed participants.</p>
        <p>If your plan is agency-managed, I can still help with <a href="specialist-behaviour-support.html">specialist behaviour support</a>, which is delivered under the NDIS registration of ${SITE.regProvider}. Give me a call and we will work out what is possible.</p>
      </div>`;

/* ============================================================ EARLY CHILDHOOD */
const ecFaqs = [
  { q: 'My child does not have a diagnosis. Can we still get support?',
    a: `<p>Yes. Early childhood supports are based on developmental need and functional impact, not on having a label. Plenty of families I work with are somewhere in the middle of an assessment process, or have decided not to pursue one at all.</p>` },
  { q: 'Do you work in kindy and daycare?',
    a: `<p>Yes, with the service&rsquo;s agreement, and it is often where the most useful work happens. Educators are with your child for hours a day. Giving them a handful of strategies that fit the room usually changes more than an hour of one-to-one ever could.</p>` },
  { q: 'Is this the same as therapy sessions?',
    a: `<p>Not really. I am not taking your child away to work on skills in a room and handing them back. The work happens in the places where the tricky bit actually happens: the morning routine, drop-off, the supermarket, the end of screen time. Most of it is coaching the adults.</p>` },
  { q: 'What ages do you work with?',
    a: `<p>I work across the lifespan, including the early years. For very young children, most of the support is delivered through parents, carers and educators, which is both what the evidence supports and what fits a young child&rsquo;s day.</p>` },
];

const ec = {
  file: 'early-childhood-early-intervention.html',
  crumb: 'Early Childhood',
  title: 'Early Childhood Early Intervention | Gympie &amp; Sunshine Coast',
  description: 'Practical early childhood support in Gympie and on the Sunshine Coast: coaching for parents and educators, at home, at kindy and out in the community. No diagnosis required.',
  schema: [faqSchema(ecFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">Early childhood supports &middot; Improved Daily Living</p>
      <h1>Early childhood support that fits the actual day</h1>
      <p class="lede">Support built around the morning routine, the drop-off, the supermarket and the moment the screen goes off, delivered mostly through the adults who are already there.</p>
      <div class="cta-row" style="margin-top:26px">
        ${btn('contact.html', 'Get in touch', 'btn-primary', true)}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <p>Small children are supposed to be hard work sometimes. The question that brings families to me is usually not &ldquo;is this normal?&rdquo; but &ldquo;is this getting worse, and is what we are doing making it better?&rdquo;</p>
      <p>Often the honest answer is that the family is doing something entirely sensible that happens to be feeding the problem, and a small, specific change makes a surprising difference. Sometimes there is more going on, and it is genuinely useful to have someone say so early rather than three years from now.</p>

      <h2>What this looks like</h2>
      <ul class="ticks">
        <li>I watch what actually happens, at home, at kindy or daycare, out in the community. Not a description of it. The thing itself.</li>
        <li>We work out what your child is communicating, and what they are trying to get, avoid or manage.</li>
        <li>You get strategies that fit your family, not a generic handout. If it does not survive contact with a Tuesday morning, it is not a strategy.</li>
        <li>Educators get the same strategies, so your child is not learning one set of rules at home and another at kindy.</li>
        <li>We build skills, not just calm. Communication, waiting, transitions, play and independence: the things that make the next year easier as well as this afternoon.</li>
      </ul>

      <div class="callout">
        <h4>Becoming a parent changed how I do this work</h4>
        <p>It sharpened my appreciation for how different every child and every family is, and how little use advice is if it does not fit the life you are actually living. I will not hand you a plan that assumes you have unlimited time, two adults available and a child who sleeps.</p>
      </div>

      <h2>When behaviour support would help too</h2>
      <p>Sometimes, part-way through early childhood work, it becomes clear that a child would benefit from specialist behaviour support as well. Where that happens I will tell you plainly.</p>
      <p>Assessment and reporting are part of the support you are already funded for, so I can describe what I have observed in writing for you to take to your next plan review. What the NDIA decides from there is theirs to weigh up, but a description from someone who has watched your child in the settings that matter is far more useful to them than a general account. <a href="assessments-and-reports.html">More about assessments and reports &rarr;</a></p>

      ${AVAIL_NOTE}
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head"><h2>Questions from families of young children</h2></div>
      ${faq(ecFaqs)}
    </div>
  </section>

  ${ctaBand('Not sure if it is worth a call?', 'It usually is. A short conversation costs you nothing and often saves a year of wondering.')}
  `,
};

/* ============================================================ IDL */
const idlFaqs = [
  { q: 'What sort of skills do you work on?',
    a: `<p>Whatever is standing between the person and the life they want. Communication. Getting through a morning without a fight. Catching a bus. Managing money. Cooking something. Holding down a shift at work. Being able to say no. Being able to be alone safely. It is led by what matters to the person, not by a checklist.</p>` },
  { q: 'Is there an age limit?',
    a: `<p>No. I work across the lifespan, including in aged care settings. Skill building is not something that stops at 25.</p>` },
  { q: 'How is this different from a support worker helping with the same things?',
    a: `<p>A support worker does the thing with you or for you. My job is to work out why the skill has not developed, design the teaching so it does, and then set the support team up to deliver it consistently. Ideally you need less support afterwards.</p>` },
  { q: 'Can this be delivered by telehealth?',
    a: `<p>A lot of it can, particularly coaching the people around the person and reviewing how things are going. Whether it suits depends on the person and who is available to support them online. You will get a straight answer from me rather than a convenient one.</p>` },
];

const idl = {
  file: 'improved-daily-living.html',
  crumb: 'Improved Daily Living',
  title: 'Improved Daily Living &amp; Skill Building | Gympie &amp; Sunshine Coast',
  description: 'NDIS Improved Daily Living support in Gympie and on the Sunshine Coast: skill building across the lifespan in communication, independence, routines, work and community participation.',
  schema: [faqSchema(idlFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">Improved Daily Living &middot; Capacity Building</p>
      <h1>Building the skills that make a life bigger</h1>
      <p class="lede">Independence is not a personality trait. It is a set of skills, taught in the right order, in the places they will be used, by people who know what they are doing.</p>
      <div class="cta-row" style="margin-top:26px">
        ${btn('contact.html', 'Get in touch', 'btn-primary', true)}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <p>Ten years of teaching skills across the lifespan has taught me one thing above all: people are almost never unable. They are usually untaught, or taught in a way that never had a chance of working for them.</p>
      <p>Skill building starts with a genuine question. What does this person want to be able to do that they cannot do yet? Then we work out what is actually in the way. Sometimes it is the skill. Often it is the environment, the expectation, or the fact that nobody has ever broken the task down.</p>

      <h2>What we might work on</h2>
      <div class="grid g2">
        ${card({ icon: I.people, iconTone: 'sage', title: 'Communication and self-advocacy', body: '<p>Being understood. Asking for help. Saying no, and having it stick. This underpins nearly everything else, and it is where I start more often than not.</p>' })}
        ${card({ icon: I.compass, title: 'Routines and daily living', body: '<p>Mornings, mealtimes, hygiene, sleep routines, getting out the door. The unglamorous things that decide whether a week is manageable.</p>' })}
        ${card({ icon: I.key, iconTone: 'gold', title: 'Independence and community access', body: '<p>Transport, money, shopping, appointments. Being out in the world with the right amount of support and no more than that.</p>' })}
        ${card({ icon: I.chart, iconTone: 'peach', title: 'Work, study and participation', body: '<p>The skills that hold a job or a course together: turning up, managing a task, handling feedback, dealing with the bits that are boring.</p>' })}
      </div>

      <div class="callout">
        <h4>Why this sits alongside behaviour support</h4>
        <p>Because they are the same work, viewed from different ends. When someone has the skills to get what they need, the behaviour that used to be necessary tends to stop being necessary. Every good behaviour support plan is, underneath, a skill-building plan.</p>
      </div>

      ${AVAIL_NOTE}
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head"><h2>Questions about skill building</h2></div>
      ${faq(idlFaqs)}
    </div>
  </section>

  ${ctaBand()}
  `,
};

/* ============================================================ ASSESSMENTS */
const asFaqs = [
  { q: 'Will a report guarantee we get the funding?',
    a: `<p>No, and be wary of anyone who says it will. What a good report does is give the NDIA clear, specific evidence of functional need, what has been tried, and what is reasonable and necessary as a result. That is what decisions are made on. I will also tell you honestly if I do not think the evidence supports what you are asking for.</p>` },
  { q: 'How long does an assessment and report take?',
    a: `<p>It depends on how many settings and people are involved. I will give you a written estimate of hours before starting, so it can be checked against what is in the plan.</p>` },
  { q: 'Can you do this if we have no behaviour support funding yet?',
    a: `<p>Often, yes. Assessment and reporting sit within therapy and capacity-building supports, so where your plan already funds those, the work can usually be done within it. I will tell you honestly at the start whether what you have will cover it.</p>` },
  { q: 'Do you review reports written by someone else?',
    a: `<p>Yes. Sometimes what you have is stronger than you think and simply needs framing differently for a plan review. Sometimes it genuinely will not do the job. Either way you will get a straight answer before you spend money.</p>` },
];

const assess = {
  file: 'assessments-and-reports.html',
  crumb: 'Assessments & Reports',
  title: 'Behaviour Assessments &amp; NDIS Plan Review Reports | Gympie',
  description: 'Functional behaviour assessments and NDIS reports that evidence need at plan review, including where a participant needs behaviour support funding added to their plan.',
  schema: [faqSchema(asFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">Evidence that stands up</p>
      <h1>Assessments and reports for plan review</h1>
      <p class="lede">The NDIA makes decisions on evidence. A report from a practitioner who has actually observed the person, in the settings that matter, is the strongest evidence there is.</p>
      <div class="cta-row" style="margin-top:26px">
        ${btn('contact.html', 'Discuss an assessment', 'btn-primary', true)}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <p>A common frustration in this system: a family knows something is not working, but there is nothing in writing that describes it clearly enough for anyone to act on.</p>
      <p>Assessment and report writing are part of therapy and capacity-building supports, so where a plan already funds those, this work can usually be done within it. The report sets out what is actually happening, which is what a plan review needs in front of it.</p>

      <h2>What I can provide</h2>
      <ul class="ticks">
        <li>Functional behaviour assessment: direct observation, interviews with the people who know the person best, record review, and a clear formulation of what is happening and why.</li>
        <li>Functional capacity and skill assessment, covering what the person can currently do independently, what they can do with support, and what they cannot do yet.</li>
        <li>Plan review reports, written against what the NDIA actually needs to see: functional impact, what has been tried, outcomes, and what is reasonable and necessary next.</li>
        <li>Letters of recommendation at the end of a period of support, setting out the level of ongoing support the evidence indicates.</li>
        <li>Second opinions on existing reports and plans, before you spend money on new ones.</li>
      </ul>

      <div class="callout">
        <h4>What makes a report work</h4>
        <p>Specificity. &ldquo;Requires support with community access&rdquo; tells a delegate nothing. &ldquo;Cannot currently board a bus without a familiar adult present, has left a supermarket unaccompanied on four occasions in the past three months, and requires line-of-sight supervision in unfenced public spaces&rdquo; tells them exactly what they need to know.</p>
        <p>My reports are written to be read by someone who has never met the person and has ten minutes.</p>
      </div>

      ${AVAIL_NOTE}
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head"><h2>Questions about assessments</h2></div>
      ${faq(asFaqs)}
    </div>
  </section>

  ${ctaBand('Need evidence before a plan review?', 'Get in touch well before the review date. Good assessment takes time, and rushed reports read like rushed reports.')}
  `,
};

/* ============================================================ FUNDING */
const fundFaqs = [
  { q: 'Can I use Core funding for behaviour support?',
    a: `<p>No. Behaviour support sits in Capacity Building, under Improved Relationships, and cannot be drawn from Core supports. If your plan has no Improved Relationships funding, the route is usually an assessment and report evidencing the need, funded from another line, and then a plan review.</p>` },
  { q: 'What is the difference between plan-managed, self-managed and agency-managed?',
    a: `<p>Self-managed means you receive the funds and pay providers yourself. Plan-managed means a plan manager pays invoices on your behalf. Agency (NDIA) managed means the NDIA pays providers directly, and you can only use NDIS-registered providers.</p><p>For behaviour support I can work with all three. For early childhood and daily living supports, plan-managed and self-managed only.</p>` },
  { q: 'Do I need a support coordinator to engage you?',
    a: `<p>No. Plenty of participants and families contact me directly, and always have. Most of my referrals have come by word of mouth. If you do have a support coordinator, they are welcome to handle it, but nothing depends on it.</p>` },
  { q: 'What happens if the funding runs out mid-way?',
    a: `<p>I track hours as we go and tell you well before we get near the end. Where more support is genuinely needed, I write the report that evidences it for a plan review. What I will not do is quietly burn through a budget and hand you a surprise.</p>` },
  { q: 'What do you charge?',
    a: `<p>In line with the NDIS Pricing Arrangements and Price Limits for the relevant support item. You will get an estimate of hours in writing before any work begins, and a service agreement setting out what is included.</p>` },
  { q: 'Are support coordinators being replaced by navigators?',
    a: `<p>A navigator model has been announced as part of the NDIS reforms, and the open-market model for support coordination is being replaced by a commissioned model from 1 July 2028. As things stand there is no confirmed national rollout date for navigators, and support coordination continues as normal. Changes will be phased and communicated well ahead of affecting individual plans.</p>` },
];

const fund = {
  file: 'ndis-funding.html',
  crumb: 'How NDIS funding works',
  title: 'Which NDIS Funding Pays for Behaviour Support? | Grow What Matters',
  description: 'Plain-English guide to NDIS funding for behaviour support: Capacity Building, Improved Relationships, Improved Daily Living, plan management types, and what to do if the funding is not there yet.',
  schema: [faqSchema(fundFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">Plain English</p>
      <h1>Which part of the plan pays for this?</h1>
      <p class="lede">The single most common question I get, from families and support coordinators alike. Here is the whole answer, without the jargon.</p>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <h2>The short answer</h2>
      <div class="grid g3" style="margin-bottom:34px">
        ${card({ icon: I.shield, title: 'Behaviour support', body: '<p>Improved Relationships, in the Capacity Building budget.</p><p class="small muted">A separate line from Core. It cannot be drawn from Core supports.</p>' })}
        ${card({ icon: I.seed, iconTone: 'gold', title: 'Early childhood', body: '<p>Early childhood supports, or Improved Daily Living.</p><p class="small muted">Depends on the child&rsquo;s age and how the plan is written.</p>' })}
        ${card({ icon: I.chart, iconTone: 'peach', title: 'Skill building', body: '<p>Improved Daily Living, in the Capacity Building budget.</p><p class="small muted">Covers therapy and capacity-building supports across the lifespan.</p>' })}
      </div>

      <h2>What if there is no behaviour support funding in the plan?</h2>
      <p>This is extremely common, and it is not a dead end. The usual route:</p>
      <div class="steps" style="margin-bottom:28px">
        ${step({ title: 'Get an assessment done within the funding you have', body: '<p>Assessment and report writing sit within therapy and capacity-building supports, so where a plan already funds those, the work can usually be done within it.</p>' })}
        ${step({ title: 'Get a report that names the need specifically', body: '<p>Vague reports get vague outcomes. The report needs to describe functional impact, what has been tried, and what is reasonable and necessary as a result. <a href="assessments-and-reports.html">More on that here.</a></p>' })}
        ${step({ title: 'Take it to a plan review', body: '<p>With evidence attached. This is what the NDIA is asking for when they ask for evidence, and a report from a practitioner who has observed the person carries real weight.</p>' })}
      </div>

      <h2>No GP referral. No diagnosis required.</h2>
      <p>You do not need a doctor&rsquo;s referral to start behaviour support, and you do not need a new diagnosis. If the funding is in the plan, you can contact a provider directly. If you are not sure whether it is there, send me the plan and I will tell you what I can see. That is not a billable conversation, it is just a sensible one.</p>

      <div class="callout">
        <h4>How your plan management type affects who you can use</h4>
        <p>Specialist behaviour support is delivered under the NDIS registration of ${SITE.regProvider}, so agency-managed, plan-managed and self-managed participants can all access it.</p>
        <p>Early childhood and daily living supports are delivered by Grow What Matters, which is not an NDIS-registered provider, so those are available to plan-managed and self-managed participants.</p>
        <p>Worth knowing generally: behaviour support assessments and behaviour support plans can only be delivered by a practitioner engaged by a registered specialist behaviour support provider. That requirement applies even to self-managed participants.</p>
      </div>

      <div class="callout warm">
        <h4>How I try to make funding go further</h4>
        <p>Travel is expensive, and in a regional area it comes out of the same budget as the actual support. So I front-load the face-to-face work, covering assessment, meeting the team, building rapport and training, then move to telehealth with less frequent visits once things are established.</p>
        <p>That is not a cost-cutting measure at your expense. More of the budget reaching more of the team is what changes outcomes, and a practitioner sitting in a car for two hours does not.</p>
      </div>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head"><h2>Funding questions</h2></div>
      ${faq(fundFaqs)}
    </div>
  </section>

  ${ctaBand('Send me the plan', 'Genuinely. Email it through and I will tell you what funding I can see and what it can be used for.')}
  `,
};

/* ============================================================ CONSULTANCY & TRAINING */
const consultFaqs = [
  { q: 'Do we need to be an NDIS provider to engage you?',
    a: `<p>No. This work sits outside the NDIS entirely. Schools, early learning centres, services and families can engage me directly, and it is invoiced to you rather than drawn from anyone&rsquo;s plan.</p>` },
  { q: 'What does it cost?',
    a: `<p>It depends on what is involved, so I quote it in writing before anything starts. You will know the scope and the cost before you commit to it.</p>` },
  { q: 'Can you do a one-off session, or does it have to be ongoing?',
    a: `<p>Both work. Sometimes a single conversation about one situation is genuinely all that is needed. Sometimes a team wants training and then a few follow-ups while they put it into practice. I would rather do the smaller piece well than sell you something larger.</p>` },
  { q: 'Is there a waiting list for this?',
    a: `<p>NDIS behaviour support is the priority in my week, so consultancy is fitted around it. Ask and I will tell you honestly what I can do and when.</p>` },
];

const consult = {
  file: 'training-and-consultancy.html',
  crumb: 'Consultancy & Training',
  title: 'Behaviour Consultancy &amp; Training for Schools and Services | Gympie',
  description: 'Privately funded behaviour consultancy and staff training for schools, early learning centres, services and families in Gympie, the Sunshine Coast and by telehealth. No NDIS plan required.',
  schema: [faqSchema(consultFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">Outside the NDIS &middot; Schools &middot; Services &middot; Private clients</p>
      <h1>Consultancy and training</h1>
      <p class="lede">Not every question about behaviour comes with a funding line attached. Schools, services and families sometimes want the expertise directly, without a plan, a package or a portal in the way.</p>
      <div class="cta-row" style="margin-top:26px">
        ${btn('contact.html', 'Ask about consultancy', 'btn-primary', true)}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <p>Most of my week is NDIS behaviour support, and that is where the practice is built. Alongside it I take a smaller amount of privately funded work, because the need is real and there is often nowhere obvious to take it.</p>
      <p>A teacher who has one child they cannot reach. A service whose team keeps responding differently to the same situation. A parent with no NDIS plan and no intention of getting one, who just wants to understand what is going on.</p>

      <h2>What this can look like</h2>
      <ul class="ticks">
        <li>Staff training on behaviour, communication and what to do when a situation escalates, pitched at the people who will actually be in the room.</li>
        <li>Consultation on a specific situation, where a team wants a second set of eyes and a clear formulation rather than a full plan.</li>
        <li>Coaching for a team putting new strategies into practice, because the first fortnight is where most good ideas quietly die.</li>
        <li>Support for families paying privately, whether or not the NDIS is part of the picture.</li>
      </ul>

      <div class="callout">
        <h4>Who this suits</h4>
        <p>Schools and early learning centres, disability and community services, day programs, and families outside the NDIS. If you are already an NDIS participant, the funded pathways on this site are almost certainly the better route, and I will point you there instead.</p>
      </div>

      <h2>How it works</h2>
      <div class="steps" style="margin-bottom:28px">
        ${step({ when: 'Within 2 business days', title: 'A conversation first', body: '<p>Tell me the situation. I will tell you whether I am the right person for it, and roughly what it would take.</p>' })}
        ${step({ title: 'Scope and cost, in writing', body: '<p>What is included, how long it takes and what it costs, before anything begins. No open-ended engagements.</p>' })}
        ${step({ title: 'The work itself', body: '<p>On site where that makes sense, by telehealth where it does not, and always with the people who will be carrying it afterwards.</p>' })}
      </div>

      <div class="callout warm">
        <h4>An honest note on capacity</h4>
        <p>NDIS behaviour support comes first in my week. Consultancy is fitted around it, which means I can be genuinely useful but I cannot always be immediate. Ask, and you will get a straight answer about timing.</p>
      </div>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head"><h2>Questions about consultancy</h2></div>
      ${faq(consultFaqs)}
    </div>
  </section>

  ${ctaBand('Got a situation you want a second opinion on?', 'Tell me what is happening. If I am not the right person, I will say so.')}
  `,
};

module.exports = [ec, idl, assess, fund, consult];

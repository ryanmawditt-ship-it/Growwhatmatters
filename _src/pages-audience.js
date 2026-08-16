const { I, SITE, card, step, faq, faqSchema, ctaBand, enquiryForm, btn } = require('./layout');

/* ============================================================ FOR FAMILIES */
const famFaqs = [
  { q: 'We have had a behaviour support plan before and nothing changed. Why would this be different?',
    a: `<p>Usually one of three things went wrong: the plan was not built on a proper functional assessment, nobody was trained to use it, or it was written for compliance instead of for a Tuesday afternoon. All three are fixable. Send me what you have and I will tell you which one it was.</p>` },
  { q: 'Will you tell us we are doing it wrong?',
    a: `<p>No. Almost every family I meet is doing something sensible that happens to be feeding the problem, because it works in the short term. Everybody does this, including me. My job is to find the thing that works better, not to audit your parenting.</p>` },
  { q: 'Do we have to talk about everything in front of our child?',
    a: `<p>No. We will work out together what is discussed where, and who needs to be in which conversation. Young people are often more aware of what is being said about them than adults assume, and I take that seriously.</p>` },
  { q: 'How involved do we have to be?',
    a: `<p>More than you might expect, and that is the point. Behaviour support delivered to a person in isolation does not hold. Most of what changes things happens between my visits, which means it happens with you. I will not ask more of you than is realistic, so tell me what your week actually looks like.</p>` },
  { q: 'What if we cannot afford to use up the funding?',
    a: `<p>Tell me at the start. I would much rather design a smaller, focused piece of work that fits the budget than start something we cannot finish. I track hours and will always tell you where we are up to before we get near the end.</p>` },
];

const families = {
  file: 'for-families.html',
  crumb: 'For families',
  title: 'Behaviour Support for Families &amp; Carers | Gympie &amp; Sunshine Coast',
  description: 'What NDIS behaviour support actually looks like for a family: how it starts, what is expected of you, and what changes. Gympie, Sunshine Coast and telehealth.',
  schema: [faqSchema(famFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">For families, carers and participants</p>
      <h1>You have been holding this together for a while</h1>
      <p class="lede">Maybe the school rings. Maybe the school has stopped ringing. Maybe you have quietly reorganised the whole week around one part of the day that always goes badly, and you have got so used to it that you only notice when someone else is in the house.</p>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <p>Families arrive at behaviour support tired, and usually a bit wary. Often they have had a plan written before by someone who visited twice, and the plan is in a drawer. Sometimes they have been told the behaviour is a phase, or that it is their fault, or both in the same week.</p>
      <p>So before anything else: what is happening in your house makes sense. Behaviour that looks irrational from the outside is almost always doing a job for the person doing it. Once we know what the job is, there is usually something to be done about it.</p>
      <p>And if you are reading this for yourself rather than for someone else, you are just as welcome here. You can contact me directly, and the conversation starts with what you want, not with what someone else has written about you.</p>

      <h2>What I will actually do</h2>
      <ul class="ticks">
        <li>Come and see it. Not a description of the morning routine, but the morning routine itself. At home, at school, at the shops. Wherever it happens.</li>
        <li>Talk to everyone who knows them. You, siblings, grandparents, teachers, support workers. People who love someone notice things that do not show up in a formal assessment.</li>
        <li>Work out what the behaviour is getting: escape, connection, control, sensory relief, a say in something.</li>
        <li>Build the alternative. Skills, communication, changes to how the day is set up, and a consistent response from everyone.</li>
        <li>Train the people around them, so you are not the only one holding the plan.</li>
        <li>Stay with it. Plans need adjusting. The first version is a hypothesis, not a verdict.</li>
      </ul>

      <div class="callout">
        <h4>What I will not do</h4>
        <p>I will not write a plan full of strategies that assume you have unlimited time, two adults available and a child who sleeps. I will not tell you to be more consistent without showing you how. And I will not hand you a forty-page document as though the document were the point.</p>
      </div>

      <h2>What tends to change first</h2>
      <p>Not the behaviour, usually. What changes first is that everyone around the person starts responding the same way, for reasons they understand. That alone lowers the temperature, and it is what makes room for the actual skill building to work.</p>
      <p>Then, over weeks rather than days, the behaviour starts having less work to do. The person has a better way of getting what they needed, so the old way stops earning its keep.</p>

      <div class="callout warm">
        <h4>If you are not sure you have the right funding</h4>
        <p>Email your plan to <a href="mailto:${SITE.email}">${SITE.email}</a> and I will tell you what I can see in it. That is not a billable conversation. It is just easier than you trying to decode it alone.</p>
      </div>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head"><h2>What families ask me</h2></div>
      ${faq(famFaqs)}
    </div>
  </section>

  ${ctaBand('Start whenever you are ready', 'A first conversation is just a conversation. Nothing is committed to and nothing is billed.')}
  `,
};

/* ============================================================ FOR SUPPORT COORDINATORS */
const scFaqs = [
  { q: 'What is your current capacity, honestly?',
    a: `<p>${SITE.capacity}, at one to two new referrals per month. I keep the notice at the top of every page on this site current. If it says I have capacity, I have capacity.</p><p>If I cannot take a referral, I will say so immediately instead of holding it while you wait.</p>` },
  { q: 'Will you take agency-managed participants?',
    a: `<p>For behaviour support, yes. That work is delivered under the NDIS registration of ${SITE.regProvider}, a registered specialist behaviour support provider, so agency-managed, plan-managed and self-managed are all fine.</p><p>Early childhood and daily living supports are delivered by Grow What Matters, which is not registered, so those are plan-managed and self-managed only.</p>` },
  { q: 'How quickly can you get an interim plan in place?',
    a: `<p>Within the first month where there are regulated restrictive practices in use or an immediate risk. If you have a participant in that situation right now, call rather than email.</p>` },
  { q: 'What do your reports look like?',
    a: `<p>Specific, functional, and written to be read by a delegate who has never met the participant and has ten minutes. Functional impact, what has been tried, what changed, what is reasonable and necessary next. Happy to send a de-identified sample.</p>` },
  { q: 'Do you actually travel, or is this a telehealth business with a regional postcode?',
    a: `<p>I travel. Gympie or the Sunshine Coast every Tuesday and Wednesday, as far south as Brisbane, north to Tin Can Bay and inland to Murgon. Face-to-face is heaviest at assessment and training, then I shift towards telehealth to stretch the funding. That is a deliberate choice, discussed with you, and never a quiet downgrade.</p>` },
  { q: 'What will you decline?',
    a: `<p>Forensic behaviour support, and referrals where sexualised behaviour in adolescents or adults is the primary concern. I will also decline where I do not think I can add value, or where the funding available is not enough to do the job properly. You will hear that at the first conversation.</p>` },
];

const coords = {
  file: 'for-support-coordinators.html',
  crumb: 'For support coordinators',
  title: 'Behaviour Support Referrals &amp; Capacity | For Support Coordinators',
  description: 'Current capacity, referral process, plan management types accepted and report standards for support coordinators referring to behaviour support in Gympie, the Sunshine Coast and Wide Bay.',
  schema: [faqSchema(scFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">For support coordinators, plan managers and services</p>
      <h1>The provider who answers, and reports that hold up</h1>
      <p class="lede">You know how this usually goes. The referral is accepted, then it goes quiet. Six weeks later there is a plan that reads like it was written for an auditor, and the support workers have never opened it.</p>
      <div class="cta-row" style="margin-top:26px">
        ${btn('contact.html', 'Send a referral', 'btn-primary', true)}
        ${btn('tel:' + SITE.phoneHref, 'Call ' + SITE.phone, 'btn-ghost')}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="grid g4">
        ${card({ icon: I.clock, title: 'Capacity, published', body: `<p>${SITE.capacity}, one to two new referrals per month. The notice at the top of every page is kept current.</p>` })}
        ${card({ icon: I.mail, iconTone: 'sage', title: 'Response time', body: '<p>Two business days, every time. If something is urgent, call and say so.</p>' })}
        ${card({ icon: I.shield, iconTone: 'gold', title: 'All management types', body: '<p>Behaviour support: agency, plan and self-managed. Other supports: plan and self-managed.</p>' })}
        ${card({ icon: I.doc, iconTone: 'peach', title: 'One practitioner', body: '<p>The person who does the assessment writes the plan and trains the team. No handovers, no juniors.</p>' })}
      </div>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head">
        <h2>What you get that you may not be getting now</h2>
      </div>
      <ul class="ticks">
        <li>An Advanced-level practitioner. Assessed as suitable at Advanced level by the NDIS Commission in 2022, and a Board Certified Behavior Analyst since 2021. Ask any provider for their practitioner&rsquo;s level. You are entitled to know, and most will not tell you.</li>
        <li>Plans support workers will open, written in the language of a shift rather than a submission. If the team cannot follow it, it is not finished.</li>
        <li>Evidence that survives plan review, with functional impact described specifically, alongside what has been tried and what changed.</li>
        <li>Honest scoping before we start. An estimate of hours in writing, and a straight answer if the funding in the plan is not enough for the job.</li>
        <li>A practitioner who says no. If I am not right for a participant, you will know at the first conversation, not after the referral has sat for a month.</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <div class="sec-head"><h2>Referring takes about five minutes</h2></div>
      <div class="steps">
        ${step({ title: 'Send what you have', body: `<p>Email <a href="mailto:${SITE.email}">${SITE.email}</a> or use the <a href="contact.html">enquiry form</a>. Participant&rsquo;s first name, town, plan management type, what is happening, and whether restrictive practices are involved. Attach the plan and any existing reports if you have consent.</p>` })}
        ${step({ when: 'Within 2 business days', title: 'You get a yes, a no, or a question', body: '<p>Never a holding email. If it is a yes, you get an indicative start date. If it is a no, you get a reason and, where I can, a suggestion of who else to try.</p>' })}
        ${step({ title: 'Service agreement and scope', body: '<p>Estimated hours in writing against the relevant support item, so you can check it against the plan before anything begins.</p>' })}
        ${step({ title: 'Assessment starts, and you stay informed', body: '<p>You will know what stage we are at without having to chase. If something changes, whether that is the participant&rsquo;s circumstances, the timeframe or the hours, you hear it from me first.</p>' })}
      </div>
    </div>
  </section>

  <section class="bg-cream2">
    <div class="wrap narrow">
      <div class="callout">
        <h4>Where I travel</h4>
        <p>Gympie or the Sunshine Coast every Tuesday and Wednesday. South to Brisbane, north to Tin Can Bay, inland to Murgon. Telehealth across Queensland.</p>
        <p>If a participant sits outside that, I would rather tell you than take the referral and deliver it thinly.</p>
      </div>
      <div class="callout warm">
        <h4>On the transition to navigators</h4>
        <p>The open-market model for support coordination is being replaced by a commissioned model from 1 July 2028, and a navigator model has been announced without a confirmed national rollout date. Whatever the role ends up being called, participants will still need someone who knows the local providers and can tell a good plan from a compliant one. Nothing about how I work depends on which it is.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <div class="sec-head"><h2>Questions coordinators ask</h2></div>
      ${faq(scFaqs)}
    </div>
  </section>

  ${ctaBand('Got a participant in mind?', 'Call or text if it is urgent. Email if it is not. Either way you will hear back within 2 business days.')}
  `,
};

/* ============================================================ ABOUT */
const about = {
  file: 'about.html',
  crumb: 'About Amy',
  title: 'About Amy | Board Certified Behavior Analyst, Gympie',
  description: 'Amy is a Board Certified Behavior Analyst and NDIS behaviour support practitioner assessed at Advanced level, working in Gympie and on the Sunshine Coast. Master of Education in Applied Behavior Analysis.',
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">The person who turns up</p>
      <h1>Hello, I am Amy</h1>
      <p class="lede">Board Certified Behavior Analyst, NDIS behaviour support practitioner assessed at Advanced level, and the only person you will deal with at Grow What Matters.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="area-grid">
        <div>
          <p>I grew up on the Sunshine Coast. I studied in the United States, which is where I began specialising in applied behaviour analysis, and then came home to work here.</p>
          <p>Before starting Grow What Matters I was a program manager in an early intervention centre, and then clinical director for a leading provider of positive behaviour support, improved daily living and early childhood early intervention. That role taught me a great deal about what makes support work at scale. It also taught me what gets lost when a participant becomes a file that moves between clinicians.</p>
          <p>So this practice is deliberately small. One to two new referrals a month, and the person who does your assessment is the person who writes your plan, trains your team and picks up the phone in March when something changes.</p>

          <h2>What drew me to this work</h2>
          <p>I am interested in what is underneath. Behaviour that looks unreasonable from the outside is nearly always a sensible solution to a problem we have not identified yet, and the moment you see the problem, the person stops looking difficult and starts looking resourceful.</p>
          <p>My practice has been shaped particularly by the constructional approach, which reoriented how I work. Rather than cataloguing what we want to reduce, it asks what the person is building towards, what they already have, and what would keep it going. It changes the goals, the plan, and honestly the mood of the whole thing.</p>
          <p>Becoming a mother deepened that. It sharpened my appreciation for how individual every child and every family is, how much of support depends on meeting people exactly where they are, and how useless advice is if it does not fit the life someone is actually living.</p>

          <h2>How I work</h2>
          <ul class="ticks">
            <li>I come to you. Home, school, kindy, day program, aged care, or out in the community, wherever the skills are needed and the behaviour actually happens.</li>
            <li>Face-to-face first, then telehealth. Heavy travel up front for assessment, rapport and training. Then I shift towards telehealth with less frequent visits, so the funding stretches further and more of the team gets supported.</li>
            <li>I train the people around the person. A plan nobody has been shown how to use is just paper.</li>
            <li>I bring specialist behaviour knowledge, not all the answers. The person, their family and their support team know things I cannot know from my training alone. I listen, learn and combine that knowledge with assessment, observation and behaviour science to understand what is happening, what matters, and what we can build from there.</li>
            <li>I tell you what I think, including when I think the funding is not enough, the plan is the wrong plan, or someone else would serve you better.</li>
          </ul>
        </div>
        <div>
          <div class="card" style="margin-bottom:22px">
            <h3>Qualifications and registrations</h3>
            <ul class="ticks small" style="margin-bottom:0">
              <li>Board Certified Behavior Analyst (BCBA), 2021<br><span class="muted">Certificant 1-21-54730, verifiable on the BACB registry</span></li>
              <li>NDIS behaviour support practitioner<br><span class="muted">Assessed as suitable at Advanced level, August 2022 (provisional 2021)</span></li>
              <li>Master of Education in Applied Behavior Analysis, 2020</li>
              <li>Bachelor of Science in Psychology, 2018</li>
              <li>Blue card and NDIS worker screening, current</li>
            </ul>
          </div>
          <div class="callout">
            <h4>What Advanced level means</h4>
            <p>NDIS behaviour support practitioners are assessed against four capability levels: Core, Proficient, Advanced and Specialist. Advanced practitioners work independently with complex presentations, including restrictive practice reduction, and supervise less experienced colleagues.</p>
            <p>Very few providers publish this. If you are comparing providers, it is a fair and useful question to ask all of them.</p>
          </div>
          <div class="callout warm">
            <h4>Ten years, across the lifespan</h4>
            <p>Autism, intellectual disability, foetal alcohol spectrum disorder, cerebral palsy and global developmental delay, frequently alongside ADHD, anxiety, depression, OCD, sensory processing differences and physical disability. From early childhood through to aged care.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow center">
      <p class="quote">&ldquo;Look beyond what we see on the surface, understand what a person is communicating, and recognise the strengths and possibilities that are already there.&rdquo;</p>
      <p class="script">the short version of why I do this</p>
    </div>
  </section>

  ${ctaBand('Want to see whether we are a fit?', 'That is what a first conversation is for. It costs nothing and commits you to nothing.')}
  `,
};

/* ============================================================ GYMPIE */
const gympieFaqs = [
  { q: 'Are you actually based in Gympie, or is this a Sunshine Coast provider with a Gympie page?',
    a: `<p>Fair question, and worth asking every provider you find. I am in Gympie or on the Sunshine Coast every Tuesday and Wednesday, and I live in the region. I do not have a shopfront in Gympie. I work in homes, schools, early learning centres, day programs and out in the community, which is where this work belongs.</p>` },
  { q: 'Do you go out to Tin Can Bay, Rainbow Beach and the Mary Valley?',
    a: `<p>Yes. Tin Can Bay, Cooloola Cove and Rainbow Beach to the north-east, and Imbil, Kandanga, Amamoor and Widgee through the Mary Valley. Kilkivan, Goomeri and Murgon to the west. Beyond Murgon is genuinely too far for me to do it well.</p>` },
  { q: 'Can you work with Gympie schools?',
    a: `<p>Yes, with consent and the school&rsquo;s agreement. I do not come into a school assuming I have all the answers. I value the knowledge of the people who know the child, and work collaboratively with families and education teams to understand what is happening in each setting. Together, we build practical supports that make sense for the child and the people around them.</p>` },
  { q: 'How long is the wait for a Gympie participant?',
    a: `<p>${SITE.capacity}, at one to two new referrals per month. Because the Gympie run is a fixed day in my week, a Gympie referral does not wait longer than a Sunshine Coast one.</p>` },
  { q: 'Where do I go for help with my NDIS plan itself in Gympie?',
    a: `<p>For plan questions and access, the local NDIS partner office is on Wickham Street in Gympie, and there is an early childhood partner on Channon Street. They handle plans and access. I handle the behaviour support once the funding is there. Happy to point you in the right direction if you are not sure which you need.</p>` },
];

const gympie = {
  file: 'positive-behaviour-support-gympie.html',
  crumb: 'Gympie',
  title: 'Positive Behaviour Support Gympie | NDIS Practitioner in Town Weekly',
  description: 'NDIS positive behaviour support in Gympie, Tin Can Bay, Rainbow Beach and the Mary Valley. Board Certified Behavior Analyst in the region weekly. Enquiries answered within 2 business days.',
  schema: [faqSchema(gympieFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">Gympie &middot; Cooloola &middot; Mary Valley</p>
      <h1>Positive behaviour support in Gympie</h1>
      <p class="lede">A named practitioner who is in the region every week, with real days in the diary. Not a template that swapped the town name in and embedded a map of Maroochydore.</p>
      <div class="cta-row" style="margin-top:26px">
        ${btn('contact.html', 'Make a referral', 'btn-primary', true)}
        ${btn('tel:' + SITE.phoneHref, SITE.phone, 'btn-ghost')}
      </div>
      <p class="reply-note" style="margin-top:16px">${I.clock} ${SITE.reply} &middot; ${SITE.capacity.toLowerCase()}</p>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <p>Gympie families have a particular version of a familiar problem. There are providers who will service the region, on paper. What that often means in practice is a clinician driving up from Maroochydore or Brisbane when the diary allows, a plan written after two visits, and a review that keeps getting pushed back because the trip is expensive and the day is long.</p>
      <p>I have built this practice around that problem. Gympie is a fixed day, not a favour. I am in Gympie or on the Sunshine Coast every Tuesday and Wednesday, which means a Gympie participant is not waiting for a gap in someone&rsquo;s Brisbane schedule.</p>

      <h2>What I do here</h2>
      <ul class="ticks">
        <li>Functional behaviour assessment in the settings that matter: the house, the classroom, the day program, the main street on a Saturday.</li>
        <li>Interim and comprehensive behaviour support plans, written so a support worker on their first shift knows what to do.</li>
        <li>Training for the team, including family, support workers, school and early learning staff, and day programs.</li>
        <li>Restrictive practice reduction, including where practices are already in place and nobody is quite sure how they got there.</li>
        <li>Early childhood and daily living skill building for plan-managed and self-managed participants.</li>
      </ul>

      <h2>The travel reality, honestly</h2>
      <p>Gympie town and the surrounding suburbs are straightforward, and I get to Southside, Monkland, Jones Hill, The Dawn, Araluen, Victory Heights and Glanmire most weeks.</p>
      <p>North-east to Tin Can Bay, Cooloola Cove and Rainbow Beach is around an hour each way, so those visits are planned rather than spontaneous, and I try to group them. Through the Mary Valley to Imbil, Kandanga and Amamoor, and out to Widgee, Curra, Kilkivan and Goomeri, it is the same story. Murgon is my inland limit.</p>
      <p>What that means for you: the assessment phase is front-loaded with face-to-face visits, and then I move to telehealth with less frequent trips. In a region this spread out, travel comes from the same budget as the actual support, so an hour in the car is an hour not spent training your team.</p>

      <div class="callout">
        <h4>Getting the funding sorted first</h4>
        <p>The NDIS partner office for Gympie is on Wickham Street, and the early childhood partner is on Channon Street. They handle plan and access questions. If your plan does not yet have behaviour support funding in it, there is a route through that: <a href="assessments-and-reports.html">an assessment and report</a> funded from another line, taken to a plan review.</p>
      </div>
    </div>
  </section>

  <section class="bg-cream2">
    <div class="wrap">
      <div class="area-grid">
        <div>
          <p class="kicker">Coverage</p>
          <h2>Towns and suburbs I get to</h2>
          <p>If a town is on this list, I can get there sustainably and keep getting there. If yours is not, ask. You will get a straight answer, and sometimes that answer is no.</p>
          <p class="small muted">Gympie sits in the Gympie Regional Council area, and covers a lot of ground: the Cooloola coast to the north-east, the Mary Valley to the south, and farming country west towards the South Burnett.</p>
          <p style="margin-top:20px">${btn('contact.html', 'Ask about your town', 'btn-ghost', true)}</p>
        </div>
        <figure class="mapfig">
          <h4 style="margin-bottom:14px">Gympie region</h4>
          <ul class="area-list">
            <li>Gympie</li><li>Southside</li><li>Monkland</li><li>Jones Hill</li>
            <li>The Dawn</li><li>Araluen</li><li>Victory Heights</li><li>Glanmire</li>
            <li>Tamaree</li><li>Curra</li><li>Chatsworth</li><li>Widgee</li>
            <li>Imbil</li><li>Kandanga</li><li>Amamoor</li><li>Dagun</li>
            <li>Tin Can Bay</li><li>Cooloola Cove</li><li>Rainbow Beach</li><li>Kilkivan</li>
            <li>Goomeri</li><li>Murgon</li><li>Cooroy</li><li>Pomona</li>
          </ul>
          <figcaption>Telehealth available anywhere in Queensland.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="bg-paper">
    <div class="wrap narrow">
      <div class="sec-head"><h2>Why a local practitioner is worth holding out for</h2></div>
      <div class="grid g2">
        ${card({ icon: I.pin, title: 'The drive is not a favour', body: '<p>When a provider treats regional visits as an exception, reviews get postponed and plans go stale. A fixed weekly day changes that.</p>' })}
        ${card({ icon: I.people, iconTone: 'sage', title: 'I come into your settings', body: '<p>Home, classroom, early learning centre or day program. I work inside the places support actually has to hold together, alongside the people who already know the person well.</p>' })}
        ${card({ icon: I.clock, iconTone: 'gold', title: 'Less funding spent on travel', body: '<p>Grouped visits and a deliberate move to telehealth once things are established means more of the budget reaches the support itself.</p>' })}
        ${card({ icon: I.heart, iconTone: 'peach', title: 'You get the same person', body: '<p>No allocation to whoever has availability. The person who assesses is the person who writes the plan and trains the team.</p>' })}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <div class="sec-head"><h2>Gympie questions</h2></div>
      ${faq(gympieFaqs)}
    </div>
  </section>

  ${ctaBand('Behaviour support in Gympie', 'Call, text or send an enquiry. You will hear back within 2 business days.')}
  `,
};

/* ============================================================ CONTACT */
const contact = {
  file: 'contact.html',
  crumb: 'Contact',
  title: 'Contact &amp; Referrals | Grow What Matters, Gympie',
  description: 'Make a referral or ask a question. Enquiries answered within 2 business days. Phone 0426 745 136 or email amy@growwhatmatters.com.au.',
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">Referrals and enquiries</p>
      <h1>Get in touch</h1>
      <p class="lede">Whether you are a family working out where to start, or a support coordinator with a participant in mind, pick whichever route suits and you will hear back within 2 business days.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="area-grid" style="align-items:start">
        <div>
          ${enquiryForm()}
        </div>
        <div>
          <div class="card" style="margin-bottom:22px">
            <div class="icon">${I.phone}</div>
            <h3>Call or text</h3>
            <p>Quickest option, and the right one if something is urgent. Tell me it is urgent and I will treat it that way.</p>
            <p><a class="btn btn-ghost btn-sm" href="tel:${SITE.phoneHref}">${SITE.phone}</a></p>
          </div>
          <div class="card" style="margin-bottom:22px">
            <div class="icon sage">${I.mail}</div>
            <h3>Email</h3>
            <p>Best if you already have a plan, reports or a referral to attach.</p>
            <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
          </div>
          <div class="card" style="margin-bottom:22px">
            <div class="icon gold">${I.pin}</div>
            <h3>Where I work</h3>
            <p>Gympie and the Sunshine Coast every Tuesday and Wednesday. South to Brisbane, north to Tin Can Bay, inland to Murgon. Telehealth across Queensland.</p>
            <p class="small muted">This is a mobile service. I come to homes, schools, early learning centres, day programs, aged care and out in the community, so there is no clinic to visit.</p>
          </div>
          <div class="callout">
            <h4>Current capacity</h4>
            <p>${SITE.capacity}, at one to two new referrals per month. If I cannot take a referral I will tell you straight away instead of holding it.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head"><h2>Helpful things to include</h2></div>
      <div class="grid g2">
        ${card({ title: 'If you are a family', body: '<p>The person&rsquo;s first name and age, your town, whether the plan is self-managed, plan-managed or agency-managed, and a couple of sentences about what is happening. That is plenty.</p>' })}
        ${card({ title: 'If you are a coordinator', body: '<p>Participant first name, town, plan management type, funding available in Improved Relationships, whether restrictive practices are involved, and any existing plan or reports.</p>' })}
      </div>
      <p class="small muted" style="margin-top:24px">Please do not send detailed personal or health information through the form until we have made contact and consent is sorted. A first name and a summary is enough to get started.</p>
      <p class="small muted">This site is not a crisis service and is not monitored outside business hours. In an emergency call 000. For mental health crisis support, Lifeline is available 24 hours on 13 11 14.</p>
    </div>
  </section>
  `,
};

module.exports = [families, coords, about, gympie, contact];

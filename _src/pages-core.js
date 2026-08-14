const { I, SITE, card, step, faq, faqSchema, ctaBand, enquiryForm, btn } = require('./layout');

/* ============================================================ HOME */
const homeFaqs = [
  { q: 'What is positive behaviour support?',
    a: `<p>Positive behaviour support is an evidence-based approach to behaviour that people find difficult or distressing. It starts by working out what the behaviour is doing for the person: what it communicates, what it gets, what it avoids. From there we build the skills, relationships and opportunities that make the behaviour unnecessary.</p><p>Done properly, most of the work happens around the person, in the environment, the routines and the people supporting them. It is not a compliance program.</p>` },
  { q: 'Which part of an NDIS plan pays for behaviour support?',
    a: `<p>Behaviour support sits in the Capacity Building budget, under Improved Relationships. That is a separate line from Core supports, and it cannot be drawn from Core.</p><p>Early childhood supports usually come from Improved Daily Living or the early childhood supports line. Skill building for older participants comes from Improved Daily Living. There is a fuller explanation on the <a href="ndis-funding.html">NDIS funding page</a>.</p>` },
  { q: 'Do I need a GP referral or a diagnosis?',
    a: `<p>No. You do not need a GP referral to start behaviour support, and you do not need a new diagnosis. If you have behaviour support funding in your plan, you can contact me directly. If you are not sure whether you have it, send me your plan and I will tell you what I can see.</p>` },
  { q: 'Can you work with agency-managed plans?',
    a: `<p>For behaviour support, yes. Agency-managed, plan-managed and self-managed are all fine, because that work is delivered under the NDIS registration of ${SITE.regProvider}.</p><p>Early childhood and daily living supports are delivered by Grow What Matters, which is not an NDIS-registered provider. Those services are available to plan-managed and self-managed participants.</p>` },
  { q: 'How long does it take to get a behaviour support plan?',
    a: `<p>An interim plan is developed within the first month where there are restrictive practices in place or an immediate risk. A comprehensive plan follows the functional behaviour assessment, generally within the first few months, depending on how much needs to be observed and how many people are involved.</p><p>After the first conversation I will give you a timeframe that fits your situation.</p>` },
  { q: 'Where do you travel, and how often?',
    a: `<p>I am in Gympie or on the Sunshine Coast every Tuesday and Wednesday. I travel as far south as Brisbane, as far north as Tin Can Bay and inland to Murgon.</p><p>Face-to-face visits are heaviest at the start, during assessment, meeting the team, building rapport and delivering training. Once things are established I shift to telehealth with less frequent visits. That stretches the funding further and gets more support to more of the team.</p>` },
  { q: 'What if we are not in your travel area?',
    a: `<p>Telehealth is available across Queensland and works well for a lot of the work, particularly team training, plan reviews and coaching. Whether it suits depends on the person and who is around them. If I think you would be better served by someone face-to-face, I will say so.</p>` },
  { q: 'How quickly will I hear back?',
    a: `<p>Within 2 business days. If it is urgent, call or text ${SITE.phone} and say so.</p>` },
];

const home = {
  file: 'index.html',
  title: 'NDIS Positive Behaviour Support in Gympie | Grow What Matters',
  description: 'NDIS positive behaviour support, early childhood intervention and skill building in Gympie and on the Sunshine Coast. Board Certified Behavior Analyst, assessed at Advanced level. Enquiries answered in 2 business days.',
  schema: [faqSchema(homeFaqs)],
  body: `
  <section class="hero">
    <div class="wrap">
      <div class="hero-grid">
        <div>
          <p class="kicker">Gympie &middot; Sunshine Coast &middot; Telehealth</p>
          <h1>Behaviour support that starts with the life you want to build</h1>
          <p class="lede">Most behaviour support begins with the behaviour someone wants to stop. I start at the other end, with what a person is trying to do, what they already have going for them, and what would make the hard days rarer. Then we work backwards to a plan the people around them can actually use.</p>
          <ul class="cred-line">
            <li>Board Certified Behavior Analyst</li>
            <li>NDIS practitioner, Advanced level</li>
            <li>Master of Education (ABA)</li>
          </ul>
          <div class="cta-row">
            ${btn('contact.html', 'Make a referral', 'btn-primary', true)}
            ${btn('for-families.html', 'I am a family, start here', 'btn-ghost')}
          </div>
          <p class="reply-note">${I.clock} ${SITE.reply} &middot; ${SITE.capacity.toLowerCase()}</p>
        </div>
        <div class="hero-art">
          <span class="blob blob-peach" aria-hidden="true"></span>
          <span class="blob blob-mint" aria-hidden="true"></span>
          <span class="blob blob-gold" aria-hidden="true"></span>
          <img src="assets/logo-lockup.png" alt="Grow What Matters, building on strengths, relationships and possibilities" width="430" height="320">
        </div>
      </div>
    </div>
  </section>

  <section class="bg-paper sec-tight">
    <div class="wrap">
      <div class="grid g2">
        <a class="door" href="for-families.html">
          <span class="tag">For families &amp; participants</span>
          <h3>Something has to change, and you are tired</h3>
          <ul>
            <li>School keeps calling, or has stopped calling</li>
            <li>You are managing the day around one behaviour</li>
            <li>You have had a plan written before and nothing changed</li>
          </ul>
          <span class="more">See what support actually looks like${I.arrow}</span>
        </a>
        <a class="door b" href="for-support-coordinators.html">
          <span class="tag terra">For support coordinators</span>
          <h3>You need someone who answers, and reports that hold up</h3>
          <ul>
            <li>Current capacity and honest timeframes, published</li>
            <li>Plans support workers will actually open</li>
            <li>Evidence that stands up at plan review</li>
          </ul>
          <span class="more">Referral details and capacity${I.arrow}</span>
        </a>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="sec-head">
        <p class="kicker">The approach</p>
        <h2>We do not start with the behaviour. We start with the person.</h2>
        <p class="lede">My work is grounded in the constructional approach, a way of doing behaviour support that asks what someone is building towards instead of cataloguing what is going wrong. It changes what gets measured, what goes in the plan, and what the team is asked to do on a Tuesday afternoon.</p>
      </div>
      <div class="grid g4">
        ${card({ icon: I.compass, iconTone: 'sage', title: 'Where you want to go', body: '<p>What does a good week look like for this person? Something their family would recognise, described in ordinary words, and not the sort of goal that only exists to fill a report.</p>' })}
        ${card({ icon: I.seed, title: 'What is already there', body: '<p>Every person arrives with skills, relationships and interests that are working. Support that ignores them starts from zero for no reason.</p>' })}
        ${card({ icon: I.key, iconTone: 'gold', title: 'What the behaviour is doing', body: '<p>Behaviour is always doing a job. Once we understand the job, we can teach something that does it better, more easily and at less cost to everyone.</p>' })}
        ${card({ icon: I.people, iconTone: 'peach', title: 'Who keeps it going', body: '<p>A plan is only as good as the people using it. Training, coaching and honest review are part of the work, not an optional extra at the end.</p>' })}
      </div>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap">
      <div class="sec-head center">
        <p class="kicker">Services</p>
        <h2>Three funding lines, one practitioner</h2>
        <p class="lede">Behaviour support is the core of my practice. Early childhood and daily living supports sit alongside it, and they are often the way in when a family knows something is not working but has no behaviour support funding yet.</p>
      </div>
      <div class="grid g3">
        ${card({ icon: I.shield, title: 'Specialist Behaviour Support', href: 'specialist-behaviour-support.html', more: 'How it works',
          body: '<p>Functional behaviour assessment, interim and comprehensive behaviour support plans, team training, and restrictive practice reduction.</p><p class="small muted">Funded from Improved Relationships (Capacity Building)</p>' })}
        ${card({ icon: I.seed, iconTone: 'gold', title: 'Early Childhood', href: 'early-childhood-early-intervention.html', more: 'For under 9s',
          body: '<p>Practical, play-based support for young children and the adults around them, at home, at kindy, at the shops, wherever the tricky bit actually happens.</p><p class="small muted">Funded from early childhood supports or Improved Daily Living</p>' })}
        ${card({ icon: I.chart, iconTone: 'peach', title: 'Improved Daily Living', href: 'improved-daily-living.html', more: 'Skill building',
          body: '<p>Building the skills that make a life bigger: communication, independence, routines, work and community participation, across the lifespan.</p><p class="small muted">Funded from Improved Daily Living (Capacity Building)</p>' })}
      </div>
      <p class="center small muted" style="margin-top:26px">Not sure which one you have funding for? <a href="ndis-funding.html">Here is how to read your plan</a>, or send it to me and I will tell you what I can see.</p>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <div class="sec-head">
        <p class="kicker">How it works</p>
        <h2>What happens after you get in touch</h2>
        <p class="lede">No mystery, no waiting to find out. This is the sequence, with the timeframes I actually work to.</p>
      </div>
      <div class="steps">
        ${step({ when: 'Within 2 business days', title: 'We have a proper conversation', body: '<p>I want to know what is happening, who is involved, what has already been tried and what you are hoping will change. By the end of it I will tell you honestly whether I am the right person, and roughly when I could start.</p>' })}
        ${step({ when: 'First few weeks', title: 'Assessment, and I come to you', body: '<p>A functional behaviour assessment means seeing the person where things actually happen: home, school, the day program, the shopping centre. I travel most heavily at this stage, because getting it right here matters more than anywhere else. I talk to everyone who knows them well.</p>' })}
        ${step({ when: 'Within the first month if restrictive practices are in place', title: 'An interim plan, if one is needed', body: '<p>Where there are regulated restrictive practices or an immediate risk, an interim behaviour support plan goes in place first, so that everyone is working to something lawful and safe while the full assessment continues.</p>' })}
        ${step({ title: 'A comprehensive plan written to be used', body: '<p>Function-based strategies, in plain language, with the day-to-day detail a support worker needs at 4pm on a bad day. If a plan cannot be followed by the people holding it, it is not finished.</p>' })}
        ${step({ title: 'Training, coaching and review', body: '<p>I train the team implementing the plan, then stay close while it beds in. This is usually where I shift to telehealth with less frequent visits. It stretches the funding further and gets more contact to more of the team, which is what actually changes outcomes.</p>' })}
      </div>
    </div>
  </section>

  <section class="bg-cream2">
    <div class="wrap">
      <div class="area-grid">
        <div>
          <p class="kicker">Where I work</p>
          <h2>Gympie and the Sunshine Coast, every week</h2>
          <p>I am on the road in Gympie or on the Sunshine Coast every Tuesday and Wednesday. Those are fixed days in my week, and they are where the car actually goes.</p>
          <p>South to Brisbane, north to Tin Can Bay, and inland as far as Murgon. Past that I will refer you to someone closer, because the drive stops being sustainable and the support suffers for it.</p>
          <ul class="pillrow">
            <li>Homes</li><li>Schools</li><li>Early learning centres</li><li>Day programs</li><li>Aged care</li><li>Out in the community</li>
          </ul>
          <p class="small muted">Telehealth is available across Queensland, and is often the right call for team training and review.</p>
          <p style="margin-top:22px">${btn('positive-behaviour-support-gympie.html', 'Behaviour support in Gympie', 'btn-ghost', true)}</p>
        </div>
        <div>
          <figure class="mapfig">
            <h4 style="margin-bottom:14px">Towns I regularly travel to</h4>
            <ul class="area-list">
              <li>Gympie</li><li>Southside</li><li>Monkland</li><li>Jones Hill</li>
              <li>The Dawn</li><li>Araluen</li><li>Curra</li><li>Widgee</li>
              <li>Imbil</li><li>Kandanga</li><li>Amamoor</li><li>Tin Can Bay</li>
              <li>Cooloola Cove</li><li>Rainbow Beach</li><li>Kilkivan</li><li>Goomeri</li>
              <li>Murgon</li><li>Noosa</li><li>Cooroy</li><li>Pomona</li>
              <li>Maroochydore</li><li>Nambour</li><li>Caloundra</li><li>Caboolture</li>
            </ul>
            <figcaption>If your town is not listed, ask. It is usually a yes, or a straight answer about why not.</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-paper">
    <div class="wrap">
      <div class="area-grid">
        <div>
          <p class="kicker">Who you would be working with</p>
          <h2>One practitioner. Named, qualified, and the person who actually turns up.</h2>
          <p>I am Amy. I grew up on the Sunshine Coast, studied in the United States where I specialised in applied behaviour analysis, and came home. Before starting Grow What Matters I was a program manager in an early intervention centre, then clinical director for a leading provider of behaviour support, daily living and early childhood services.</p>
          <p>You will not be allocated to whoever is available. You get me, and you keep me.</p>
          <ul class="ticks">
            <li>Board Certified Behavior Analyst (BCBA) since 2021, certificant 1-21-54730, publicly verifiable</li>
            <li>Assessed as suitable at Advanced level by the NDIS Quality and Safeguards Commission, 2022</li>
            <li>Master of Education in Applied Behavior Analysis, 2020</li>
            <li>Bachelor of Science in Psychology, 2018</li>
            <li>Blue card and NDIS worker screening current</li>
          </ul>
          <p>${btn('about.html', 'More about how I work', 'btn-ghost', true)}</p>
        </div>
        <div>
          <div class="callout">
            <h4>Why the capability level matters</h4>
            <p>NDIS behaviour support practitioners are assessed against four levels: Core, Proficient, Advanced and Specialist. Advanced practitioners work independently with complex presentations, including restrictive practice reduction, and supervise others.</p>
            <p>Almost no provider publishes this. You are entitled to ask any practitioner what level they were assessed at, and to be told plainly.</p>
          </div>
          <div class="callout warm">
            <h4>I take on a small number of referrals</h4>
            <p>One to two new referrals a month, and only where I think I can genuinely help. If a referral is not a good fit, clinically or because of where you live, I will say so at the first conversation instead of three months in.</p>
            <p>It is the only way one person delivers work worth having.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <div class="sec-head">
        <p class="kicker">Common questions</p>
        <h2>The things people ask before they call</h2>
      </div>
      ${faq(homeFaqs)}
      <p class="small muted" style="margin-top:24px">More detail on <a href="behaviour-support-plans.html">behaviour support plans</a>, <a href="restrictive-practices.html">restrictive practices</a> and <a href="ndis-funding.html">NDIS funding</a>.</p>
    </div>
  </section>

  ${ctaBand()}
  `,
};

/* ============================================================ SBS */
const sbsFaqs = [
  { q: 'What is the difference between an interim and a comprehensive behaviour support plan?',
    a: `<p>An interim plan is a short document put in place quickly, usually within the first month, where there is an immediate risk or a regulated restrictive practice already being used. It makes the situation lawful and safe while the full assessment happens.</p><p>A comprehensive plan comes after the functional behaviour assessment. It sets out what the behaviour is doing, what is being taught instead, how the environment is changing, and what everyone does day to day.</p>` },
  { q: 'How many hours of funding will this take?',
    a: `<p>It depends on how many settings are involved, how many people need training, and whether restrictive practices are in play. A straightforward assessment and comprehensive plan for one setting is a much smaller job than a participant with three services, a school and a restrictive practice authorisation.</p><p>I will give you an estimate in writing before we start, and I will tell you if I think the funding in the plan is not going to be enough.</p>` },
  { q: 'Do you work with the school or the day program too?',
    a: `<p>Yes, and I would want to. Behaviour rarely stays in one setting, and a plan that only works at home is half a plan. With consent, I speak to schools, early learning centres, day programs and support workers, and I train the people implementing the plan.</p>` },
  { q: 'What if there is already a behaviour support plan?',
    a: `<p>Send it through. Sometimes the right answer is to review and rebuild what is there, which is cheaper and faster than starting again. Sometimes the existing plan was written for an auditor and it needs replacing. I will tell you which.</p>` },
  { q: 'Is this the same as ABA therapy?',
    a: `<p>I am a Board Certified Behavior Analyst, so behaviour analysis is the science underneath what I do. This is not early-intensive-behavioural-intervention style ABA, though. My practice is built on the constructional approach, which means building repertoires, opportunities and options. It is delivered as NDIS positive behaviour support, working with the team around a person instead of in a therapy room.</p>` },
  { q: 'What will you not take on?',
    a: `<p>I do not take forensic behaviour support, and I do not take referrals where sexualised behaviour in adolescents or adults is the primary concern. That work needs a practitioner with specific expertise, and you deserve one.</p><p>In early childhood, behaviour is sometimes labelled this way when it is developmentally ordinary. I am glad to help there.</p>` },
];

const sbs = {
  file: 'specialist-behaviour-support.html',
  crumb: 'Specialist Behaviour Support',
  title: 'Specialist Behaviour Support | NDIS PBS Gympie &amp; Sunshine Coast',
  description: 'NDIS specialist behaviour support in Gympie and on the Sunshine Coast: functional behaviour assessment, interim and comprehensive behaviour support plans, team training and restrictive practice reduction.',
  schema: [faqSchema(sbsFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">Improved Relationships &middot; Capacity Building</p>
      <h1>Specialist Behaviour Support</h1>
      <p class="lede">Assessment, planning and team training for people whose behaviour is getting in the way of the life they want. One Advanced-level practitioner does the assessment, writes the plan and trains the team.</p>
      <div class="cta-row" style="margin-top:26px">
        ${btn('contact.html', 'Make a referral', 'btn-primary', true)}
        ${btn('ndis-funding.html', 'Check your funding', 'btn-ghost')}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <p class="quote">&ldquo;Behaviour is always doing a job. Our task is not to stop it, but to make it unnecessary.&rdquo;</p>
      <p>Behaviours that get labelled challenging are almost always solving a problem for the person doing them. Getting away from something unbearable. Getting attention when nothing else works. Getting a body to feel manageable. Getting a say, when nobody is asking.</p>
      <p>Suppressing the behaviour without solving the problem underneath it just moves it somewhere else, usually somewhere worse. So the work is to understand the job the behaviour is doing, and then build something that does the same job better: a skill, a different environment, a team that responds differently, an actual say in the day.</p>
      <p>That is what a good behaviour support plan is for. A working set of instructions the people around a person can follow on the hard days.</p>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap">
      <div class="sec-head">
        <h2>What is included</h2>
        <p class="lede">Every piece of this is done by me. Nothing is subcontracted out to a junior clinician you have never met.</p>
      </div>
      <div class="grid g2">
        ${card({ icon: I.compass, iconTone: 'sage', title: 'Functional behaviour assessment', body: '<p>Direct observation in the settings that matter, interviews with the people who know the person best, review of existing reports and data, and a clear formulation of what the behaviour is doing and why.</p>' })}
        ${card({ icon: I.doc, title: 'Interim and comprehensive behaviour support plans', body: '<p>Interim plans within the first month where restrictive practices or immediate risk are involved. Comprehensive plans built on the assessment, written in language a support worker can act on.</p><p><a href="behaviour-support-plans.html">What is actually in a plan &rarr;</a></p>' })}
        ${card({ icon: I.people, iconTone: 'peach', title: 'Team training and implementation coaching', body: '<p>Training for everyone implementing the plan: family, support workers, school staff and day program teams. Training implementers is an NDIS requirement, and it is also the part that decides whether anything changes.</p>' })}
        ${card({ icon: I.shield, iconTone: 'gold', title: 'Restrictive practice reduction', body: '<p>Reviewing what is currently in place, reporting as required, and building the non-coercive alternatives that let restrictions be reduced safely instead of simply documented.</p><p><a href="restrictive-practices.html">More on restrictive practices &rarr;</a></p>' })}
        ${card({ icon: I.chart, title: 'Data systems people will actually use', body: '<p>Recording that fits the setting instead of fighting it. If the data collection is too heavy, it does not get done, and then nobody knows whether the plan worked.</p>' })}
        ${card({ icon: I.key, iconTone: 'gold', title: 'Reports for plan review', body: '<p>Clear evidence of need, what has been tried, what changed and what is required next, written so it holds up when the plan comes up for review.</p><p><a href="assessments-and-reports.html">Assessments and reports &rarr;</a></p>' })}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <div class="sec-head">
        <h2>Who this is for</h2>
      </div>
      <div class="grid g2" style="gap:28px">
        <div>
          <h4 style="margin-bottom:12px">I work across the lifespan, with</h4>
          <ul class="ticks">
            <li>Autism</li>
            <li>Intellectual disability</li>
            <li>Foetal alcohol spectrum disorder</li>
            <li>Cerebral palsy</li>
            <li>Global developmental delay</li>
            <li>Co-occurring ADHD, anxiety, depression, OCD, sensory processing differences and physical disability</li>
          </ul>
        </div>
        <div>
          <h4 style="margin-bottom:12px">I do not take on</h4>
          <ul class="ticks nos">
            <li>Forensic behaviour support</li>
            <li>Referrals where sexualised behaviour in adolescents or adults is the primary concern</li>
          </ul>
          <p class="small muted">In early childhood, behaviour is sometimes labelled this way when it is developmentally ordinary. That I am glad to help with, so please still get in touch.</p>
          <p class="small muted">Saying no to work outside my expertise is not me being difficult. It is the difference between a practitioner and a calendar with gaps in it.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-cream2">
    <div class="wrap narrow">
      <div class="callout">
        <h4>How this is funded and who can access it</h4>
        <p>Specialist behaviour support is funded from Improved Relationships, which sits in the Capacity Building budget. It is delivered under the NDIS registration of ${SITE.regProvider}, a registered NDIS specialist behaviour support provider, so agency-managed, plan-managed and self-managed participants can all access it.</p>
        <p>Behaviour support assessments and plans can only lawfully be delivered by a practitioner engaged by a registered specialist behaviour support provider. If a provider is offering you a behaviour support plan without that, ask them about it.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <div class="sec-head"><h2>Questions about behaviour support</h2></div>
      ${faq(sbsFaqs)}
    </div>
  </section>

  ${ctaBand('Start with a conversation', 'Tell me what is going on. I will tell you honestly whether I can help, and when.')}
  `,
};

/* ============================================================ BSP */
const bspFaqs = [
  { q: 'Who writes a behaviour support plan?',
    a: `<p>An NDIS behaviour support practitioner who has been assessed as suitable by the NDIS Quality and Safeguards Commission, and who is employed or engaged by a registered specialist behaviour support provider. It is not something a support coordinator, support worker or service manager can write.</p>` },
  { q: 'How long is a behaviour support plan valid for?',
    a: `<p>Plans are reviewed regularly, and must be reviewed when circumstances change: a new setting, a new service, a change in the person&rsquo;s health, or the behaviour itself changing. Where regulated restrictive practices are in place, review requirements are stricter. I will tell you the schedule that applies to your situation.</p>` },
  { q: 'Do we have to follow everything in the plan?',
    a: `<p>If the plan contains regulated restrictive practices, implementing providers have legal obligations under the NDIS rules, including being trained in the plan. Beyond that, a plan works because people use it, not because they are told to. If part of a plan is not workable in your house or your service, tell me and we will change it. A plan nobody can follow is a failed plan.</p>` },
  { q: 'What if we already have a plan and nothing has changed?',
    a: `<p>That is a common reason people call. Usually one of three things has happened: the plan was never built on a proper functional assessment, nobody was trained in it, or it was written for compliance instead of for use. All three are fixable, and the fix is usually cheaper than starting over.</p>` },
];

const bsp = {
  file: 'behaviour-support-plans.html',
  crumb: 'Behaviour Support Plans',
  title: 'What Is In an NDIS Behaviour Support Plan? | Grow What Matters',
  description: 'A plain-English guide to NDIS behaviour support plans: what goes in an interim plan and a comprehensive plan, how a functional behaviour assessment works, who can write one, and how often they are reviewed.',
  schema: [faqSchema(bspFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">Plain English</p>
      <h1>What is actually in a behaviour support plan?</h1>
      <p class="lede">If you have been handed one and it made no sense, or you have been told you need one and nobody explained why, this page is for you.</p>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <p>A behaviour support plan is a working document. Its job is to make sure that everybody around a person responds in the same way, for reasons that make sense, so that the person can get what they need without having to escalate to get it.</p>
      <p>A good one is specific enough that a new support worker could read it on their first shift and know what to do. A bad one is a stack of generic strategies that could describe anyone, written to satisfy a requirement instead of to help.</p>

      <div class="callout">
        <h4>The short version</h4>
        <p>An interim plan makes things safe and lawful quickly. A comprehensive plan comes after proper assessment and does the real work. Both must be written by a practitioner the NDIS Commission has assessed as suitable.</p>
      </div>

      <h2>Interim behaviour support plan</h2>
      <p>Put in place quickly, within the first month, where there is an immediate risk to the person or others, or where a regulated restrictive practice is already being used. It is deliberately short. It sets out the immediate strategies, any restrictive practice being used and why, and what happens while the full assessment is underway.</p>
      <p>It is a safety measure that buys time to do the assessment properly instead of guessing.</p>

      <h2>Comprehensive behaviour support plan</h2>
      <p>This is the real document, and it follows a functional behaviour assessment. It should contain:</p>
      <ul class="ticks">
        <li>Who the person is: strengths, interests, communication, relationships, what a good day looks like. If this section is thin, the rest of the plan usually is too.</li>
        <li>What the behaviours of concern actually are, described so precisely that two people watching would agree on whether it just happened.</li>
        <li>The function of the behaviour: what it achieves, avoids or communicates, based on evidence and not on a guess.</li>
        <li>Proactive strategies. Changes to the environment, the routine, the demands and the way people communicate, so the behaviour becomes unnecessary in the first place. This should be the biggest part of the plan.</li>
        <li>The skills being taught. What the person is learning to do instead, who is teaching it, and how.</li>
        <li>Responses. What to do when it happens anyway, calmly and consistently, without making the next time more likely.</li>
        <li>Any regulated restrictive practices: what they are, why they are used, the authorisation, and the plan to reduce and eliminate them.</li>
        <li>How we will know it is working. Data that someone will realistically collect, and a review date.</li>
      </ul>

      <h2>The functional behaviour assessment underneath it</h2>
      <p>The assessment is where the plan gets its authority. It involves direct observation in the settings where behaviour actually happens, conversations with the people who know the person best, review of existing records and reports, and analysis of when the behaviour occurs and when it does not.</p>
      <p>The bit that is easy to skip and expensive to skip: finding out what is already working. People arrive with skills and relationships that function well. A plan that ignores them is starting from zero for no reason.</p>

      <div class="callout warm">
        <h4>How I write plans differently</h4>
        <p>My practice uses the constructional approach, which shifts the question from &ldquo;how do we reduce this behaviour?&rdquo; to &ldquo;what does this person want their life to look like, and what would it take to get there?&rdquo;</p>
        <p>Practically, that means the goals in the plan are things a family would recognise as worth having. It also means the plan spends most of its pages on what we are building rather than what we are managing.</p>
      </div>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head"><h2>Questions about plans</h2></div>
      ${faq(bspFaqs)}
    </div>
  </section>

  ${ctaBand('Need a plan, or a plan that works?', 'Send me what you have. I will tell you whether it needs rebuilding or reviving.')}
  `,
};

/* ============================================================ RESTRICTIVE PRACTICES */
const rpFaqs = [
  { q: 'What counts as a regulated restrictive practice?',
    a: `<p>Under the NDIS rules there are five: seclusion, chemical restraint, mechanical restraint, physical restraint and environmental restraint. Some are less obvious than people expect. A locked cupboard, a medication given to manage behaviour, or a person not being able to leave a room can all fall inside these definitions.</p>` },
  { q: 'We think we might be using one without realising. What now?',
    a: `<p>That is more common than people admit, and getting in front of it is far better than waiting to be told. Get in touch and we will work out what is actually happening. Where a regulated restrictive practice is in use, it needs to be authorised in line with Queensland requirements, recorded in a behaviour support plan, and reported to the NDIS Commission.</p>` },
  { q: 'Can restrictive practices be removed entirely?',
    a: `<p>Often, yes, but not by simply stopping. Restrictions are usually holding something in place. Remove them without building the alternative first and you get a crisis, and then the restriction comes back tighter than before. Reduction works when the skills, environment and team responses that make the restriction unnecessary are built first.</p>` },
  { q: 'Do unregistered providers have obligations too?',
    a: `<p>Using a regulated restrictive practice without meeting the requirements is a breach of the NDIS rules, and it is not something an unregistered provider can lawfully do. If you are a service unsure of where you stand, that is worth a conversation sooner rather than later.</p>` },
];

const rp = {
  file: 'restrictive-practices.html',
  crumb: 'Restrictive Practices',
  title: 'Restrictive Practice Reduction | NDIS Behaviour Support Queensland',
  description: 'Support for services and families using regulated restrictive practices: what counts, what has to be authorised and reported, and how to reduce and eliminate restrictions safely.',
  schema: [faqSchema(rpFaqs)],
  body: `
  <section class="phero">
    <div class="wrap">
      <p class="kicker">For services, schools and families</p>
      <h1>Restrictive practices, reduced properly</h1>
      <p class="lede">Not the absence of restriction on paper, but non-coercive ways of keeping people safe that mean the restriction is genuinely no longer needed.</p>
      <div class="cta-row" style="margin-top:26px">
        ${btn('contact.html', 'Talk to me about a restriction', 'btn-primary', true)}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap narrow">
      <p>Most restrictive practices are not put in place by careless people. They are put in place by people trying to keep someone safe with the tools they had at the time, usually in a hurry, usually after something frightening happened.</p>
      <p>The problem is what happens next. A restriction that solves today&rsquo;s risk tends to stay, because nobody wants to be the person who removed it. Meanwhile the underlying reason it was needed never gets addressed, and the person&rsquo;s world gets a little smaller.</p>

      <h2>The five regulated restrictive practices</h2>
      <div class="grid g2" style="margin-bottom:28px">
        ${card({ title: 'Seclusion', body: '<p>Confining a person alone in a room or space they cannot freely leave.</p>' })}
        ${card({ title: 'Chemical restraint', body: '<p>Medication used to influence behaviour, other than for treating a diagnosed condition.</p>' })}
        ${card({ title: 'Mechanical restraint', body: '<p>A device used to restrict movement, other than for therapeutic or safe-transport purposes.</p>' })}
        ${card({ title: 'Physical restraint', body: '<p>Physical force used to restrict a person&rsquo;s movement.</p>' })}
        ${card({ title: 'Environmental restraint', body: '<p>Restricting access to the person&rsquo;s environment or the things in it, including locked cupboards, fridges and doors.</p>' })}
      </div>
      <div class="callout warm">
        <h4>The ones people miss</h4>
        <p>A locked pantry. A gate on the hallway. PRN medication given when someone is agitated. Keeping the car keys somewhere a person cannot reach. All of these can be regulated restrictive practices depending on why they are being done, and if they are, they need authorisation, a behaviour support plan and reporting.</p>
      </div>

      <h2>How reduction actually works</h2>
      <div class="steps" style="margin-bottom:28px">
        ${step({ title: 'Find out what the restriction is holding', body: '<p>Every restriction is doing a job. Before anything is removed we need to know what would happen without it, and what it is protecting against.</p>' })}
        ${step({ title: 'Make it lawful and visible in the meantime', body: '<p>Interim behaviour support plan, correct authorisation, accurate reporting. This is what stops a restriction quietly becoming permanent.</p>' })}
        ${step({ title: 'Build the alternative first', body: '<p>Skills, communication, environment, routines, and a team who know what to do. This is the part that takes time, and it is the only part that makes reduction stick.</p>' })}
        ${step({ title: 'Fade deliberately, with data', body: '<p>Planned, staged, measured, and reversible if it is not working. No cliff edge, and no promise made to a plan reviewer that nobody intends to keep.</p>' })}
      </div>

      <div class="callout">
        <h4>What I am aiming at</h4>
        <p>The goal is a person whose life contains enough choice, communication and genuine options that coercion is not the thing holding safety in place.</p>
      </div>
    </div>
  </section>

  <section class="bg-mint">
    <div class="wrap narrow">
      <div class="sec-head"><h2>Questions about restrictive practices</h2></div>
      ${faq(rpFaqs)}
      <p class="small muted" style="margin-top:22px">Authorisation requirements differ between states. In Queensland, restrictive practice authorisation sits under Queensland legislation alongside the NDIS Commission requirements. I will walk you through what applies to your situation.</p>
    </div>
  </section>

  ${ctaBand('Worried about a restriction?', 'Whether you are a family, a school or a service, an early conversation is far better than a late one.')}
  `,
};

module.exports = [home, sbs, bsp, rp];

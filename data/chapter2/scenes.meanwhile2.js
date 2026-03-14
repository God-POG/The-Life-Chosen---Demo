// data/chapter2/scenes.meanwhile2.js
// Chapter 2 — Meanwhile 2 (Ages 18–22)
// Graduation -> Diverging Paths -> Meanwhile 2 choice block -> Drift -> Chapter 3

window.CH2_MEANWHILE2 = [
  {
    id: "mw2_01_leaving_parking_lot",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile",
    pages: [
`The parking lot did not decide the future.

It only revealed what the future would now have to carry.

Whether the night ended in a kiss or an unfinished pause, the real test would begin afterward—when the ceremony was over, the photographs were put away, and ordinary days returned.

That had always been where the truth of things showed itself.

Not in declarations alone.

In what remained once routine came back.

And routine was about to change completely.`
    ],
    choices: [
      {
        text: "Continue.",
        goto: "ch2_06_diverging_paths"
      }
    ]
  },

  {
    id: "mw2_01_choice_block",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — The Decision",
    pages: [
`By the end of summer, adulthood no longer looked abstract.

It looked like objects.

An acceptance packet spread open across a kitchen table.
A work schedule pinned to a refrigerator with a magnet from some family vacation no one had thought would become symbolic later.
A phone screen lit too late at night.
A map with two destinations that no longer fit easily inside the same daily route.

For years, the relationship between *BOY_NAME* and *GIRL_NAME* had been held together partly by structure.

The oak tree had a place.
School had a schedule.
The bus had a route.
The library had closing hours.
Even uncertainty had lived inside repeated contact.

Now that old architecture was gone.

Whatever came next would have to survive because they chose it, not because life kept placing them side by side.`,


`At home, adulthood was introduced in the usual practical language.

His mother asked when move-in was.
His father asked whether the financial forms were finished.
Dinner still arrived in sequence. The refrigerator still hummed. The house still believed that problems were best faced by naming them clearly and then building around them one piece at a time.

That steadiness remained useful.

Because love at eighteen no longer asked only whether the feeling was real.

It asked harder questions.

Would they prioritize closeness or expansion?
Would distance make them more deliberate or less defined?
Would they become a unit quickly, or protect individuality first?
Would they name the bond, or trust it to survive on implication alone?

No answer guaranteed safety.

Each one would shape the kind of adulthood they entered.

And that, more than graduation itself, was the real threshold.`
    ],
    choices: [
      {
        text: "Choose each other first.",
        action: { type: "setFlag", key: "interdependent" },
        memoryAdd: ["mw2_interdependent"],
        goto: "mw2_02_apply_interdependent"
      },
      {
        text: "Choose growth first.",
        action: { type: "setFlag", key: "independent_growth" },
        memoryAdd: ["mw2_independent_growth"],
        goto: "mw2_02_apply_independent_growth"
      },
      {
        text: "Stay undefined.",
        action: { type: "setFlag", key: "avoidant_definition" },
        memoryAdd: ["mw2_avoidant_definition"],
        goto: "mw2_02_apply_avoidant_definition"
      },
      {
        text: "Commit quietly.",
        action: { type: "setFlag", key: "quiet_commitment" },
        memoryAdd: ["mw2_quiet_commitment"],
        goto: "mw2_02_apply_quiet_commitment"
      }
    ]
  },

  {
    id: "mw2_02_apply_interdependent",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — Interdependent",
    pages: [
`You choose each other first.

Not theatrically.
Not as an argument against ambition.
Not because you believe love should swallow everything else.

You simply let the relationship become the first reference point.

Before accepting something, you ask what it would mean for both of you.
Before making plans, you check whether the plans can hold two lives instead of one.
Distance is not impossible, but it is treated as a problem to solve, not a challenge to romanticize.

At first, this feels deeply reassuring.

After so many years of almosts, public assumptions, careful pauses, and finally whatever truth graduation made possible, there is relief in orientation.
Relief in saying: we are building from the same side now.

The feeling is not glamorous.

It is steadiness.
It is calendars aligned on purpose.
It is learning which nights belong to study, which to work, which to each other, and how to keep those things from blurring into resentment.`,


`The best version of this path feels warm in the old way his childhood home felt warm.

Not loud.
Not performative.
Maintained.

A sweater left in the passenger seat because it has quietly become normal.
A visit planned three weeks ahead and still felt all the way through in advance.
A hand reaching across a small restaurant table because the conversation turned difficult and both of you understood touch could steady what words had not yet finished building.

The danger appears more slowly.

When two people become a unit young, the unit can begin making decisions before either person notices what has been surrendered to it.

You start editing private wants so they fit the pair.
You hesitate before naming a separate need because separate can feel suspicious.
You tell yourselves this is maturity, and sometimes it is.

Sometimes it is only fear in a more flattering coat.`,


`By twenty-two, the relationship is stronger than many people around you would have predicted.

It has weathered logistics.
It has survived inconvenience.
It has learned the quiet adult skills movies almost never bother to show:
checking in before resentment hardens
planning around money
repairing tone before tone becomes a wound
remembering that togetherness is healthiest when it is chosen, not merely expected

And still, one lesson remains essential.

Closeness is not the same thing as fusion.

If you are not careful, devotion can blur the edge between support and self-erasure.

So adulthood teaches you to ask a better question than “Are we close?”

It teaches you to ask:

Can we remain close without disappearing inside each other?`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 4 },
        action2: { type: "applyDrift", profile: "mw2_interdependent_18_to_22" },
        goto: "mw2_03_closing"
      }
    ]
  },

  {
    id: "mw2_02_apply_independent_growth",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — Independent Growth",
    pages: [
`You choose growth first.

The decision is not a rejection of love.
It is a refusal to let fear disguise itself as loyalty.

You tell each other the brave, destabilizing things:
Take the better opportunity.
Do not make yourself smaller for me.
Let us see what survives when the future stops being convenient.

In the beginning, this choice feels almost noble.

There is energy in it.
A kind of modern optimism.
The belief that two people can become more fully themselves without treating that expansion as betrayal.

You learn quickly that distance changes the texture of everything.

Affection becomes scheduled.
Comfort becomes negotiated through call times, travel costs, and the tiny mathematics of exhaustion.
You stop assuming availability and start being grateful for it.`,


`Some weeks, the relationship feels sharpened by the pressure.

Because you cannot rely on proximity, you learn to rely on clarity.
You say what you mean sooner.
You stop pretending one half-finished sentence should be enough.
You discover that communication is not the opposite of romance. It is one of romance's adult forms.

Other weeks, the distance feels less elegant.

You are tired.
They are busy.
A text lands wrong because timing is a kind of tone.
A missed call acquires emotional meaning it never asked for.
Silence fills with whatever the day has made easiest to believe:
trust, when you are grounded
assumption, when you are not
longing, when nothing else quite reaches

The relationship does not weaken exactly.

It becomes effortful in visible ways.`,


`By twenty-two, you have learned something many people do not learn until much later.

Love can survive distance.
But distance is never neutral.

It asks for discipline.
It rewards honesty.
It punishes vagueness faster than youth ever did.

You have become more separate and, in some ways, more adult because of it.
You each own your own momentum now.
You know how to build a life that does not collapse when the other person is out of reach.

That is a strength.

The remaining question is whether strength will keep feeding intimacy or eventually replace it.

Because adulthood does not ask only whether two people care.

It asks whether two whole selves can keep choosing “us” without either one becoming a ghost at the edge of the other's ambition.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 4 },
        action2: { type: "applyDrift", profile: "mw2_independent_growth_18_to_22" },
        goto: "mw2_03_closing"
      }
    ]
  },

  {
    id: "mw2_02_apply_avoidant_definition",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — Undefined",
    pages: [
`You stay undefined.

Not because nothing is there.

Because there is so much there that naming it feels risky.

For years, the relationship survived through implication.
The oak tree mattered before either of you had words for why.
School years deepened things through repetition more than declaration.
Even late in adolescence, meaning often arrived in pauses, not labels.

So part of you believes adulthood might work the same way.

If the connection is real, surely it should not need formal edges to survive.

For a little while, that hope feels justified.

You keep seeing each other.
You keep talking.
There are still touches, long conversations, private returns, the familiar sense that whatever exists between you is deeper than what either of you would casually call friendship.

And because nothing has been denied, it is easy to mistake continuity for security.`,


`But adulthood is less forgiving of beautiful ambiguity than adolescence was.

Schedules tighten.
New people enter the frame.
Work and distance and opportunity begin making claims on time that youth once left open by default.

And because the relationship is still mostly implied, every strain becomes harder to interpret cleanly.

Is this freedom?
Is this drift?
Is this trust?
Is this avoidance dressed up as patience?

Nobody is lying.
Nobody is being cruel.
That almost makes it worse.

There is no villain to resist, only erosion.

A missed weekend.
A plan not clarified.
An assumption left untested because clarifying it might force a conversation both of you are still half-afraid to have.

Things do not break loudly.

They soften at the edges first.`,


`By twenty-two, what remains between you is still real.

That is the difficult part.

Unclear bonds can remain emotionally powerful for years.
Shared history does not disappear merely because structure is missing.
Sometimes the very lack of definition makes the attachment feel larger, because fantasy has more room to move in unframed spaces.

But fantasy is not the same thing as architecture.

You begin to understand that language is not only exposure.
Sometimes it is protection.
Sometimes the kindest thing two people can do for a bond is give it a shape sturdy enough to survive public time.

Until then, adulthood keeps asking the same question in quieter and quieter ways:

Is avoiding definition a form of freedom—

or the most polite way two people can slowly lose each other?`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 4 },
        action2: { type: "applyDrift", profile: "mw2_avoidant_definition_18_to_22" },
        goto: "mw2_03_closing"
      }
    ]
  },

  {
    id: "mw2_02_apply_quiet_commitment",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — Quiet Commitment",
    pages: [
`You commit quietly.

No announcement post.
No dramatic rebrand of the relationship.
No urge to make the outside world certify what the inside world already knows.

You simply agree—plainly, privately—that this is something you are building.

That decision fits the shape of your history.

The important things between you were rarely loud.
The oak tree mattered without witnesses.
The buried stone mattered because it was shared, not displayed.
Even later, so much of your intimacy was built in spaces that would have looked ordinary to anyone else: buses, hallways, library tables, curbs, parked cars, pauses.

So adulthood begins the same way.

Not as spectacle.

As practice.`,


`The strength of this path is not intensity.

It is durability.

You learn that practical questions can be affectionate.
What weekend works.
How often do we need to talk to stay steady.
What does reassurance sound like for you when life gets loud.
How do we disagree without making distance do extra damage.

Those conversations would have bored your younger selves.
Now they feel intimate in a different register.

You are not trying to preserve a fantasy version of love.
You are trying to make a real version survivable.

That requires more language than adolescence did.

Not because the feeling is weaker.
Because adulthood punishes assumption more quickly.`,


`By twenty-two, the relationship has become something quietly resilient.

Not invulnerable.
Nothing worth having ever is.

But resilient.

You know how to repair after small injuries instead of pretending they did not happen.
You know how to apologize without turning the apology into a defense.
You know how to revisit a hard subject after emotion cools instead of deciding that one bad conversation defines everything.

There is still longing.
Still fear.
Still the ordinary adult strain of calendars, money, fatigue, and separate ambitions.

But underneath all of that, there is structure.

And structure, you now understand, is not what kills romance.

It is often what lets romance outlive mood.

Adulthood begins, quietly, with that realization:

commitment is not a feeling you happen to have.

It is a way of continuing to build when feeling alone would not be enough.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 4 },
        action2: { type: "applyDrift", profile: "mw2_quiet_commitment_18_to_22" },
        goto: "mw2_03_closing"
      }
    ]
  },

  {
    id: "mw2_03_closing",
    phase: "meanwhile",
    age: 22,
    title: "Meanwhile",
    pages: [
`By twenty-two, the relationship no longer belongs to adolescence alone.

Whatever shape it has taken—steady, stretched, undefined, or quietly durable—it has now been tested by the first adult version of time.

Not school time.
Not summer time.
Adult time.

The kind that arrives with rent, schedules, jobs, applications, long drives, delayed replies, private exhaustion, practical compromise, and the humbling discovery that love survives not only through feeling, but through maintenance.

That lesson would have made no sense beneath the oak tree.

And yet the oak tree was where the pattern began.

A place made meaningful by return.
A secret made larger by being shared.
A bond built slowly enough that, for years, it could be mistaken for accident by anyone standing outside it.

Now the accident is gone.

What remains is pattern.

What remains is practice.

What remains is whatever the two of you have learned to build when memory is no longer enough by itself.`,


`Chapter 3 will not begin with a blank slate.

It will begin inside this pattern.

Inside whatever adulthood has already taught you about closeness, distance, repair, ambition, fear, maintenance, and the difference between wanting a future and knowing how to live inside one.

Because the years between eighteen and twenty-two are not empty.

They are structure.

And structure—quietly, invisibly, relentlessly—is what the next chapter will inherit.`
    ],
    choices: [
      { text: "Continue to Chapter 3.", goto: "ch3_stub_start" }
    ]
  }
];

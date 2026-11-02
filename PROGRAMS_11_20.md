# Programs 11–20

The machine-readable batch is [programs-11-20.json](programs-11-20.json). It contains exactly the next ten requested programs, referencing the single library in [exercises.js](exercises.js). Together with [programs 1–10](programs-01-10.json), there are twenty distinct authored schedules.

## Interpretation and assumptions

- Each schedule includes all seven days, general warm-up and specific practice sets. Weekday 1 is Monday; shift the whole schedule while preserving recovery gaps.
- These are original templates. The references support general principles, not validation of these exact routines or a guaranteed outcome.
- Primary working-set totals are an audit of the baseline build week. Warm-ups, introductory reductions, skill practice and conditioning are not added as hypertrophy hard sets. Secondary involvement is reported separately rather than treated as identical to a primary isolation set.
- Time-based work uses null rep bounds and null RIR with an effort/control cue. Repetitions are per side only when explicitly marked.
- Programs 15 and 16 have structured `introductoryWeeks` overrides: cap the working sets and use the introductory RIR before applying the larger baseline schedule. RIR overrides apply to rep-based working exercises.
- Program 16's `exerciseProgressions` lists existing library IDs for the push-up path; use its ability criteria and rep targets, not an automatic calendar change.
- Program 17 assumes suitable dumbbells, but no bench or rack. Adjustable weights are useful; fixed weights use low-rep practice warm-ups and tempo-based progression rather than a fictional weight increment.
- Program 18 assumes long resistance bands suitable for the stated movements. A short mini-loop alone is insufficient. No door anchor is assumed, and band tension is not assigned invented kilogram values or percentage reductions.
- Program 20 requires a secure low bar suitable for foot assistance and a top start reached from the floor. A high doorway bar alone is insufficient. Its `skillStages` omissions, set cap and substitutions must be applied before displaying or logging that stage's session. These stages are chosen by ability, not by week number.
- Program 14 budgets the whole session at 30 minutes, including its compact warm-up. Waiting for equipment or needing more recovery can extend the visit; controlled technique takes priority.
- Program 19 is conditioning and activity, not a promise of spot reduction or a fixed calorie burn. It uses hard but repeatable effort rather than all-out sprints.
- All 30 programs are now registered in the app. This file documents the second source batch; runtime tests check the complete shipped catalog.

## Overview

| # | Program | Goal | Level | Location | Days/week | Longest session | Weeks | Baseline focus volume |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | Upper / Lower | hypertrophy | intermediate | gym | 4 | 100 min | 8 | pectorals: 10 primary sets / 2 days; lats: 10 primary sets / 2 days; quadriceps: 10 primary sets / 2 days; hamstrings: 10 primary sets / 2 days; calves: 10 primary sets / 2 days; lateral-deltoids: 10 primary sets / 2 days |
| 12 | Powerbuilding | strength | intermediate | gym | 4 | 100 min | 12 | pectorals: 10 primary sets / 2 days; quadriceps: 10 primary sets / 2 days; hamstrings: 10 primary sets / 2 days; lats: 12 primary sets / 2 days |
| 13 | Deadlift Specialist | strength | intermediate | gym | 4 | 90 min | 12 | glutes: 15 primary sets / 2 days; hamstrings: 12 primary sets / 2 days |
| 14 | 30-Minute Express | hypertrophy | intermediate | gym | 3 | 30 min | 8 | pectorals: 10 primary sets / 3 days; lats: 10 primary sets / 3 days; quadriceps: 10 primary sets / 3 days |
| 15 | Beginner Foundations | strength | beginner | gym | 3 | 65 min | 8 | quadriceps: 9 primary sets / 3 days; pectorals: 6 primary sets / 2 days; lats: 9 primary sets / 3 days |
| 16 | Home Bodyweight Basics | hypertrophy | beginner | home | 3 | 65 min | 8 | quadriceps: 12 primary sets / 3 days; pectorals: 10 primary sets / 3 days; glutes: 16 primary sets / 3 days |
| 17 | Home Dumbbell Builder | hypertrophy | intermediate | home | 4 | 95 min | 8 | pectorals: 10 primary sets / 2 days; lats: 10 primary sets / 2 days; quadriceps: 10 primary sets / 2 days; hamstrings: 10 primary sets / 2 days; glutes: 16 primary sets / 2 days |
| 18 | Resistance Band Total Body | hypertrophy | intermediate | home | 3 | 90 min | 8 | pectorals: 10 primary sets / 3 days; lats: 10 primary sets / 3 days; quadriceps: 10 primary sets / 3 days; hamstrings: 10 primary sets / 3 days; glutes: 20 primary sets / 3 days |
| 19 | Home HIIT Fat Burner | fat-loss | intermediate | home | 3 | 35 min | 8 | Timed conditioning, not hypertrophy sets |
| 20 | Pull-Up Mastery | skill | beginner | home | 3 | 55 min | 8 | lats: 13 primary sets / 3 days; forearms: skill practice |

## Plans

### 11. Upper / Lower

A balanced four-day hypertrophy plan trains the upper and lower body twice each week. The second pair of sessions uses different rep ranges while maintaining the same weekly workload.

**Method:** Balanced upper/lower split with two rep-range exposures. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, plate-loaded-machine, rack, selectorized-machine.





<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Upper A · lower rep emphasis (100 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Cable Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Barbell Bench Press — 3 × 6–8, rest 180s, RIR 2
- Cable Row — 3 × 8–10, rest 120s, RIR 2
- Incline DB Press — 2 × 8–10, rest 150s, RIR 2
- Lat Pulldown — 2 × 8–10, rest 120s, RIR 2
- Overhead Press — 2 × 6–8, rest 150s, RIR 2
- Lateral Raise — 5 × 12–20, rest 75s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2
- Triceps Pushdown — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Lower A · squat and hinge (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Back Squat — 3 × 6–8, rest 180s, RIR 2
- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Leg Extension — 2 × 10–15, rest 90s, RIR 2
- Seated Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Upper B · moderate rep emphasis (100 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Incline DB Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Lat Pulldown — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Incline DB Press — 3 × 10–12, rest 150s, RIR 2
- Lat Pulldown — 3 × 10–12, rest 120s, RIR 2
- Barbell Bench Press — 2 × 10–12, rest 150s, RIR 2
- Cable Row — 2 × 10–12, rest 120s, RIR 2
- Seated DB Shoulder Press — 2 × 10–12, rest 120s, RIR 2
- Lateral Raise — 5 × 15–20, rest 75s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2
- Dumbbell Overhead Triceps Extension — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Lower B · press and curl (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Leg Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Dumbbell Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Leg Press — 3 × 10–12, rest 150s, RIR 2
- Dumbbell Romanian Deadlift — 3 × 10–12, rest 150s, RIR 2
- Leg Extension — 2 × 12–15, rest 90s, RIR 2
- Lying Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Seated Calf Raise — 5 × 12–20, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Four sessions distribute ten primary weekly sets to each listed focus muscle without a separate specialization day. The two upper and two lower sessions keep repeat exposures several days apart. Rep-range differences let the trainee practice both heavier and moderate-load work while tracking progress separately.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- Use the listed set ceiling rather than adding extra work to every session.
- Arm muscles also receive indirect work from presses and pulls; their isolation counts are not the whole stimulus.

**Baseline primary working sets:** anterior-deltoids 4; biceps 4; brachialis 4; calves 10; glutes 12; hamstrings 10; lateral-deltoids 10; lats 10; middle-trapezius 5; pectorals 10; quadriceps 10; rhomboids 5; triceps 4.

**Secondary involvement (not added to the primary total):** abdominals 2 set exposures; adductors 6 set exposures; anterior-deltoids 10 set exposures; biceps 10 set exposures; forearms 10 set exposures; lateral-deltoids 4 set exposures; lower-trapezius 5 set exposures; posterior-deltoids 5 set exposures; spinal-erectors 9 set exposures; triceps 14 set exposures; upper-trapezius 10 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 12. Powerbuilding

Heavier squat, bench, deadlift and press work is combined with separate hypertrophy sessions. The weekly structure preserves strength practice while adding measured muscle-building volume.

**Method:** Heavy upper/lower sessions followed by higher-volume upper/lower sessions. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, plate-loaded-machine, rack, selectorized-machine.





<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Upper strength (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Overhead Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Barbell Bench Press — 4 × 4, rest 240s, RIR 2
- Overhead Press — 3 × 5, rest 180s, RIR 2
- Bent-Over Barbell Row — 4 × 5, rest 180s, RIR 2
- Lat Pulldown — 2 × 6, rest 150s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Lower strength (85 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Conventional Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Back Squat — 4 × 4, rest 240s, RIR 2
- Conventional Deadlift — 3 × 3, rest 240s, RIR 2
- Forearm Plank — 2 × 30 sec, rest 60s, effort: Maintain trunk alignment and end the hold before technique changes.

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Upper hypertrophy (100 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Incline DB Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Cable Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Incline DB Press — 4 × 8–12, rest 150s, RIR 2
- Cable Row — 3 × 8–12, rest 120s, RIR 2
- Barbell Bench Press — 2 × 8–12, rest 150s, RIR 2
- Lat Pulldown — 3 × 10–12, rest 120s, RIR 2
- Lateral Raise — 4 × 12–20, rest 75s, RIR 2
- EZ-Bar Curl — 3 × 10–15, rest 75s, RIR 2
- Triceps Pushdown — 3 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Lower hypertrophy (95 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Leg Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Leg Press — 4 × 10–12, rest 150s, RIR 2
- Romanian Deadlift — 4 × 8–10, rest 150s, RIR 2
- Leg Extension — 2 × 12–15, rest 90s, RIR 2
- Seated Leg Curl — 3 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** During build weeks, increase the next heavy exposure by the smallest available increment only after every prescribed rep is completed with at least 2 RIR and stable technique. Keep heavy squat, bench, deadlift and overhead-press targets fixed rather than adding reps beyond their range. For hypertrophy work, add reps within the stated range, then increase load about 2–5% after all sets reach the upper bound at 2 RIR; track these loads separately from heavy days. Planks add 5 seconds per build week up to 45 seconds before progressing the lever. If two successive heavy exposures decline, reduce that lift's load about 10% and rebuild.

**Deload:** Weeks 4, 8 and 12: halve all working sets, rounding up, reduce external loads by about 10%, and keep 4 or more RIR. Halve plank duration. Keep the same four training days and warm-ups; use this deload early if recovery or performance remains poor. Resume with the last controlled build-week loads rather than forcing an increase.

**Why this works:** The first two sessions practice heavy lifts in the 3–6-rep range with long rests. The second pair supplies additional work in higher rep ranges, bringing chest, quads and hamstrings to ten primary sets each while back work is slightly higher. Keeping the two loading roles separate prevents every session from becoming both maximal and high volume.

**Volume notes:** Heavy and moderate-load sets both count toward weekly working volume; do not count only the hypertrophy-labelled days. This is a combined goal plan: strength lifts use 3–6 reps and 150–240 seconds rest, while accessories use higher reps. Small muscle groups receive additional indirect work from the compounds.

- Keep the listed RIR; powerbuilding does not mean testing one-repetition maxima every week.
- If heavy-day performance repeatedly deteriorates, reduce one accessory set per exercise on the corresponding hypertrophy day before adding more recovery work.

**Baseline primary working sets:** abdominals 2; anterior-deltoids 3; biceps 3; calves 5; glutes 15; hamstrings 10; lateral-deltoids 4; lats 12; middle-trapezius 7; pectorals 10; quadriceps 10; rhomboids 7; triceps 3.

**Secondary involvement (not added to the primary total):** abdominals 3 set exposures; adductors 8 set exposures; anterior-deltoids 10 set exposures; biceps 12 set exposures; brachialis 3 set exposures; forearms 10 set exposures; glutes 2 set exposures; lateral-deltoids 3 set exposures; lats 3 set exposures; lower-trapezius 5 set exposures; posterior-deltoids 3 set exposures; quadriceps 3 set exposures; shoulders 2 set exposures; spinal-erectors 15 set exposures; triceps 13 set exposures; upper-trapezius 4 set exposures.

**References:** [American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)](https://pubmed.ncbi.nlm.nih.gov/19204579/); [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/).

### 13. Deadlift Specialist

Two deadlift exposures combine heavier triples with lighter technique practice. Posterior-chain accessories and upper-body support provide a structured week around the main lift.

**Method:** Four-day deadlift emphasis with heavy and technique hinge sessions. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, rack, selectorized-machine.





<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Lower A · heavy deadlift (85 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Conventional Deadlift — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Bent-Over Barbell Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Conventional Deadlift — 4 × 3, rest 240s, RIR 2
- Bent-Over Barbell Row — 3 × 8–10, rest 150s, RIR 2
- Lying Leg Curl — 3 × 10–15, rest 90s, RIR 2
- Forearm Plank — 2 × 30 sec, rest 60s, effort: Hold a braced position and stop before your lower back sags.

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Upper A · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Lat Pulldown — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Barbell Bench Press — 4 × 6–8, rest 180s, RIR 2
- Lat Pulldown — 3 × 8–12, rest 120s, RIR 2
- Overhead Press — 3 × 6–8, rest 150s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Lower B · technical deadlift (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Conventional Deadlift — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Front Squat — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Conventional Deadlift — 3 × 3, rest 180s, RIR 3 (light exposure: 85% of last heavy load) — Use about 85% of the last successful heavy deadlift load; each repetition is a fresh, controlled start.
- Front Squat — 3 × 5, rest 180s, RIR 2
- Romanian Deadlift — 2 × 8–10, rest 150s, RIR 2
- Hip Thrust — 3 × 10–12, rest 120s, RIR 2
- Side Plank — 2 × 25 sec / side, rest 60s, effort: Hold without hip sag or rotation; finish both sides with control.

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Upper B · support (80 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Lat Pulldown — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Barbell Bench Press — 3 × 10–12, rest 150s, RIR 2
- Lat Pulldown — 3 × 10–12, rest 120s, RIR 2
- Cable Row — 3 × 10–12, rest 120s, RIR 2
- Lateral Raise — 3 × 12–20, rest 75s, RIR 2
- Triceps Pushdown — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** Add the smallest practical deadlift increment, usually about 2.5%, at the next heavy exposure only after all four triples remain controlled at 2 or more RIR. The technique session stays at about 85% of the latest successful heavy load; do not increase it independently. Accessories use double progression: add reps within the range, then a small load increase when all sets reach the top at the listed RIR. Planks add 5 seconds per build week up to 45 seconds. If the bar drifts, the back position changes, or two heavy exposures decline, repeat or reduce the load about 10% instead of forcing progression.

**Deload:** Weeks 4, 8 and 12: reduce heavy deadlift work to two easy triples, technique work to one or two triples, and other working sets by half, rounding up. Reduce external load about 10% and keep at least 4 RIR; halve plank duration. Remove the RDL sets that week if the hinge still feels unrecovered. Use the same approach early after two consecutive performance declines.

**Why this works:** The heavy session provides a clear performance target, while the lighter session repeats the deadlift start with less load. Twelve primary hamstring sets and fifteen glute sets combine the deadlift work with curls, hinges and thrusts. Upper-body days retain pressing and pulling without adding a third hard deadlift day.

**Volume notes:** The seven weekly deadlift sets include three lighter technical sets and should not all be treated as maximal-effort work. Main deadlifts use 3 reps and 3–4 minutes of rest; accessory reps are higher. This is a lift specialization block with lower direct quad and chest volume than a full hypertrophy plan.

- Deadlift experience and controlled setup are prerequisites; this is not the beginner introduction.
- Barbell rows also load the back as a stabilizer. Keep them strict and reduce row load if Thursday's hinge technique declines.

**Baseline primary working sets:** abdominals 2; anterior-deltoids 3; biceps 2; brachialis 2; glutes 15; hamstrings 12; lateral-deltoids 3; lats 12; middle-trapezius 6; obliques 2; pectorals 7; quadriceps 3; rhomboids 6; triceps 2.

**Secondary involvement (not added to the primary total):** abdominals 9 set exposures; anterior-deltoids 7 set exposures; biceps 12 set exposures; forearms 11 set exposures; glutes 2 set exposures; gluteus-medius 2 set exposures; hamstrings 3 set exposures; lateral-deltoids 3 set exposures; lats 7 set exposures; lower-trapezius 6 set exposures; posterior-deltoids 3 set exposures; quadriceps 7 set exposures; shoulders 4 set exposures; spinal-erectors 12 set exposures; triceps 10 set exposures; upper-back 3 set exposures; upper-trapezius 3 set exposures.

**References:** [American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)](https://pubmed.ncbi.nlm.nih.gov/19204579/); [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/).

### 14. 30-Minute Express

Three compact full-body sessions use fixed set counts and moderate loads to fit a 30-minute visit. Each includes a brief warm-up and light practice sets before the working sets.

**Method:** Fixed-volume full-body sessions with a compact warm-up and 60-second rests. **Equipment:** bench, bodyweight, cable-machine, dumbbells.





<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Express A · squat allocation (30 min estimate)**

Warm-up:

- March in Place — 1 × 60 sec, rest 0s, effort: Easy pace, gradually warming up.
- Controlled Arm Circles — 1 × 5 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 5, rest 0s, RIR 6

Specific practice / ramp-up:

- Goblet Squat — 1 × 5, rest 30s, RIR 5 — 50% of that session's external working load
- Flat DB Press — 1 × 5, rest 30s, RIR 5 — 50% of that session's external working load

Main session:

- Goblet Squat — 4 × 8–10, rest 60s, RIR 2
- Flat DB Press — 3 × 8–10, rest 60s, RIR 2
- Cable Row — 3 × 8–10, rest 60s, RIR 2
- Dumbbell Romanian Deadlift — 2 × 8–10, rest 60s, RIR 2

Complete the four exercises in order with 60 seconds between working sets. Keep reps controlled and do not rush equipment setup. The compact warm-up is included in the 30-minute estimate; allow extra time if your body or equipment availability requires it.

**Tuesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Wednesday — Express B · press allocation (30 min estimate)**

Warm-up:

- March in Place — 1 × 60 sec, rest 0s, effort: Easy pace, gradually warming up.
- Controlled Arm Circles — 1 × 5 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 5, rest 0s, RIR 6

Specific practice / ramp-up:

- Goblet Squat — 1 × 5, rest 30s, RIR 5 — 50% of that session's external working load
- Flat DB Press — 1 × 5, rest 30s, RIR 5 — 50% of that session's external working load

Main session:

- Goblet Squat — 3 × 8–10, rest 60s, RIR 2
- Flat DB Press — 4 × 8–10, rest 60s, RIR 2
- Cable Row — 3 × 8–10, rest 60s, RIR 2
- Dumbbell Romanian Deadlift — 2 × 8–10, rest 60s, RIR 2

Complete the four exercises in order with 60 seconds between working sets. Keep reps controlled and do not rush equipment setup. The compact warm-up is included in the 30-minute estimate; allow extra time if your body or equipment availability requires it.

**Thursday — Rest**

Rest from planned training; easy everyday activity is optional.

**Friday — Express C · row allocation (30 min estimate)**

Warm-up:

- March in Place — 1 × 60 sec, rest 0s, effort: Easy pace, gradually warming up.
- Controlled Arm Circles — 1 × 5 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 5, rest 0s, RIR 6

Specific practice / ramp-up:

- Goblet Squat — 1 × 5, rest 30s, RIR 5 — 50% of that session's external working load
- Flat DB Press — 1 × 5, rest 30s, RIR 5 — 50% of that session's external working load

Main session:

- Goblet Squat — 3 × 8–10, rest 60s, RIR 2
- Flat DB Press — 3 × 8–10, rest 60s, RIR 2
- Cable Row — 4 × 8–10, rest 60s, RIR 2
- Dumbbell Romanian Deadlift — 2 × 8–10, rest 60s, RIR 2

Complete the four exercises in order with 60 seconds between working sets. Keep reps controlled and do not rush equipment setup. The compact warm-up is included in the 30-minute estimate; allow extra time if your body or equipment availability requires it.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Keep the scheduled set counts and 60-second rests fixed; do not add intensity techniques or extra sets. Choose loads light enough to preserve 2 RIR with that rest. If more rest is needed, take it and omit the final RDL set that day to keep the visit close to 30 minutes; warm-up and controlled technique take priority over completing every set.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Twelve working sets per visit give chest, back and quads ten primary weekly sets across three exposures. The changing fourth-set allocation balances those priorities without changing equipment stations every day. A fixed set ceiling makes progression about better reps and manageable load increases rather than a longer session.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- The 30-minute estimate assumes the needed dumbbells, bench and row station are available with little waiting.
- The compact warm-up replaces the longer warm-up used by other gym plans. Add more warm-up if needed, even if the visit runs longer.
- Hamstrings receive six primary hinge sets; this is a time-budget compromise, not a hamstring specialization plan.

**Baseline primary working sets:** glutes 16; hamstrings 6; lats 10; middle-trapezius 10; pectorals 10; quadriceps 10; rhomboids 10.

**Secondary involvement (not added to the primary total):** abdominals 10 set exposures; adductors 10 set exposures; anterior-deltoids 10 set exposures; biceps 10 set exposures; forearms 6 set exposures; posterior-deltoids 10 set exposures; spinal-erectors 6 set exposures; triceps 10 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 15. Beginner Foundations

Three full-body sessions emphasize repeatable technique and manageable loads. A two-week introduction reduces the working sets before building toward the full schedule.

**Method:** Technique-first full-body practice with an introductory volume stage. **Equipment:** bench, bodyweight, cable-machine, dumbbells, plate-loaded-machine, selectorized-machine.


**Introduction override:** weeks 1, 2 cap every working exercise at 2 sets and use 4 RIR for rep-based work. Apply this before using the baseline schedule below.



<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Foundation A · squat, press and row (65 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Goblet Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Flat DB Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Goblet Squat — 3 × 6, rest 150s, RIR 3
- Flat DB Press — 3 × 6, rest 150s, RIR 3
- Cable Row — 3 × 6, rest 120s, RIR 3
- Dumbbell Romanian Deadlift — 2 × 8–10, rest 120s, RIR 3
- Dead Bug — 2 × 6–8 / side, rest 60s, RIR 3
- Standing Calf Raise — 2 × 10–15, rest 75s, RIR 3

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Wednesday — Foundation B · supported machines and shoulder press (65 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Leg Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Seated DB Shoulder Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Leg Press — 3 × 6, rest 150s, RIR 3
- Seated DB Shoulder Press — 3 × 6, rest 150s, RIR 3
- Lat Pulldown — 3 × 6, rest 120s, RIR 3
- Seated Leg Curl — 2 × 10–12, rest 90s, RIR 3
- Glute Bridge — 2 × 10–15, rest 75s, RIR 3
- Dead Bug — 2 × 6–8 / side, rest 60s, RIR 3

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Thursday — Rest**

Rest from planned training; easy everyday activity is optional.

**Friday — Foundation C · repeat and refine (65 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Goblet Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of that session's external working load
- Flat DB Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of that session's external working load

Main session:

- Goblet Squat — 3 × 6, rest 150s, RIR 3
- Flat DB Press — 3 × 6, rest 150s, RIR 3
- Cable Row — 3 × 6, rest 120s, RIR 3
- Dumbbell Romanian Deadlift — 2 × 8–10, rest 120s, RIR 3
- Bodyweight Calf Raise — 2 × 12–20, rest 75s, RIR 3
- Bird Dog — 2 × 6–8 / side, rest 60s, RIR 3

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** In weeks 1–2, cap every working exercise at two sets and keep 4 RIR; use the introductoryWeeks override rather than the larger baseline set count. From week 3, use the scheduled sets only when you recover between sessions and can repeat the movement consistently. Keep main lifts at six reps and add the smallest load increment only after two consecutive exposures show the same controlled technique with at least 3 RIR. Accessories add reps within their range before a small load increase. Do not add load and the third set in the same exposure, and do not use body weight or gender to choose a starting weight.

**Deload:** Weeks 4 and 8: halve the scheduled working sets, rounding up, reduce external load about 10%, and keep 4 or more RIR. Retain easy warm-up and technique practice. Use the reduced two-set introductory stage again if several sessions are missed or technique becomes inconsistent; resume from the last controlled load.

**Why this works:** Repeating the main movements across three nonconsecutive sessions creates regular technique practice. The introductory set reduction limits early workload while the full schedule is learned. The six-rep main sets use comfortable loads and 3 RIR rather than requiring a beginner to test a maximum.

**Volume notes:** Learning and strength practice take priority over meeting a hypertrophy set quota for every muscle. Main squat/press/pull patterns use six reps, 2–2.5 minutes rest, and 3 RIR; higher-rep accessories remain easy to control. The first two weeks explicitly use fewer sets and higher RIR than the baseline schedule.

- Have a qualified coach check unfamiliar movements when possible.
- A six-rep target is not a six-repetition maximum. Keep the stated reps in reserve throughout the set.

**Baseline primary working sets:** abdominals 6; anterior-deltoids 3; calves 4; glutes 15; hamstrings 6; lats 9; middle-trapezius 6; pectorals 6; quadriceps 9; rhomboids 6; spinal-erectors 2.

**Secondary involvement (not added to the primary total):** abdominals 8 set exposures; adductors 9 set exposures; anterior-deltoids 6 set exposures; biceps 9 set exposures; forearms 4 set exposures; glutes 2 set exposures; hamstrings 2 set exposures; hip-flexors 4 set exposures; lateral-deltoids 3 set exposures; lower-trapezius 3 set exposures; posterior-deltoids 6 set exposures; shoulders 2 set exposures; spinal-erectors 4 set exposures; triceps 9 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)](https://pubmed.ncbi.nlm.nih.gov/19204579/).

### 16. Home Bodyweight Basics

A three-day, equipment-free routine builds basic squat, push-up and trunk-control capacity. Push-up difficulty progresses by ability rather than by a fixed week number.

**Method:** Nonconsecutive full-body practice with equipment-free exercise progressions. **Equipment:** bodyweight.


**Introduction override:** weeks 1 cap every working exercise at 2 sets and use 4 RIR for rep-based work. Apply this before using the baseline schedule below.



<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Basics A · squat and push (65 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

No loaded ramp-up is needed; begin the interval practice at an easy effort.

Main session:

- Bodyweight Squat — 4 × 10–20, rest 90s, RIR 3
- Wall Push-up — 4 × 10–20, rest 90s, RIR 3
- Prone W Raise — 4 × 10–15, rest 60s, RIR 3
- Glute Bridge — 2 × 12–20, rest 75s, RIR 3
- Bodyweight Calf Raise — 3 × 12–20, rest 60s, RIR 3
- Dead Bug — 2 × 6–10 / side, rest 60s, RIR 3

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Wednesday — Basics B · unilateral control (55 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

No loaded ramp-up is needed; begin the interval practice at an easy effort.

Main session:

- Bodyweight Squat — 3 × 10–20, rest 90s, RIR 3
- Wall Push-up — 3 × 10–20, rest 90s, RIR 3
- Reverse Lunge — 2 × 8–12 / side, rest 90s, RIR 3
- Prone W Raise — 3 × 10–15, rest 60s, RIR 3
- Bird Dog — 2 × 6–10 / side, rest 60s, RIR 3

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Thursday — Rest**

Rest from planned training; easy everyday activity is optional.

**Friday — Basics C · repeatable movement (60 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

No loaded ramp-up is needed; begin the interval practice at an easy effort.

Main session:

- Bodyweight Squat — 3 × 10–20, rest 90s, RIR 3
- Wall Push-up — 3 × 10–20, rest 90s, RIR 3
- Glute Bridge — 2 × 12–20, rest 75s, RIR 3
- Prone W Raise — 3 × 10–15, rest 60s, RIR 3
- Bodyweight Calf Raise — 3 × 12–20, rest 60s, RIR 3
- Dead Bug — 2 × 6–10 / side, rest 60s, RIR 3

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** In week 1, cap working exercises at two sets and keep 4 RIR; from week 2 use the listed sets only if recovery is stable. Add one controlled rep per set each build week while preserving 3 RIR. After two exposures at 20 wall push-ups per set, move feet farther from the wall or try the knee-pushup library entry at 8–12 reps; progress to pushup at 6–12 only when knee reps remain controlled. Keep the scheduled number of sets when changing variations and return to the lower rep bound. For squats and bridges, reach the upper bound before adding a 3-second lowering phase and restarting at the lower bound. Do not progress by rushing or adding endless sets.

**Deload:** Weeks 4 and 8: halve working sets, rounding up, choose an easier push-up position and return other movements to an ordinary controlled tempo, keeping at least 4 RIR. Keep the warm-up and the same nonconsecutive days. Use this easier week early if soreness or fatigue persists into the next session.

**Why this works:** The baseline gives quads twelve primary sets, chest ten and glutes sixteen over three sessions. Repeating a manageable push-up variation allows a clear progression without assuming equipment or a strong starting push-up. Prone shoulder work and trunk practice add movement variety, but do not replace progressively loaded lat pulling.

**Volume notes:** The full build-week target is 12 primary quad sets, 10 chest sets and 16 glute sets; week 1 and deloads intentionally use less volume. Calves receive six direct sets and prone upper-back work is a low-load accessory, not a promise of full lat hypertrophy. Progress beyond the loading limits of bodyweight basics may require equipment or a more advanced program.

- A solid wall and a clear floor are needed, but no external training equipment is assumed.
- The week-1 set cap overrides the larger baseline counts.

**Baseline primary working sets:** abdominals 6; calves 6; glutes 16; middle-trapezius 10; pectorals 10; posterior-deltoids 10; quadriceps 12; spinal-erectors 2.

**Secondary involvement (not added to the primary total):** abdominals 4 set exposures; adductors 12 set exposures; anterior-deltoids 10 set exposures; external-rotators 10 set exposures; glutes 2 set exposures; hamstrings 6 set exposures; hip-flexors 4 set exposures; shoulders 2 set exposures; triceps 10 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 17. Home Dumbbell Builder

A four-day upper/lower hypertrophy plan uses dumbbells and floor space. Floor presses, unsupported rows and standing presses avoid assuming a bench or rack.

**Method:** Dumbbell-only upper/lower split with floor-based pressing. **Equipment:** bodyweight, dumbbells.





<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Upper A · floor press and row (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Dumbbell Floor Press — 1 × 2, rest 45s, RIR 5 — Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue.
- Unsupported Bent-Over Dumbbell Row — 1 × 2, rest 45s, RIR 5 — Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue.

Main session:

- Dumbbell Floor Press — 5 × 8–12, rest 150s, RIR 2
- Unsupported Bent-Over Dumbbell Row — 5 × 8–12, rest 120s, RIR 2
- Standing Dumbbell Shoulder Press — 2 × 8–12, rest 120s, RIR 2
- Lateral Raise — 3 × 12–20, rest 75s, RIR 2
- Standing Dumbbell Curl — 2 × 10–15, rest 75s, RIR 2
- Dumbbell Overhead Triceps Extension — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Lower A · goblet and hinge (85 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Goblet Squat — 1 × 2, rest 45s, RIR 5 — Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue.
- Dumbbell Romanian Deadlift — 1 × 2, rest 45s, RIR 5 — Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue.

Main session:

- Goblet Squat — 3 × 8–12, rest 150s, RIR 2
- Dumbbell Romanian Deadlift — 3 × 8–12, rest 150s, RIR 2
- Dumbbell Split Squat — 2 × 8–12 / side, rest 120s, RIR 2
- Bodyweight Calf Raise — 5 × 12–20, rest 75s, RIR 2
- Dumbbell Weighted Floor Crunch — 3 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Upper B · controlled volume (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Dumbbell Floor Press — 1 × 2, rest 45s, RIR 5 — Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue.
- Unsupported Bent-Over Dumbbell Row — 1 × 2, rest 45s, RIR 5 — Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue.

Main session:

- Dumbbell Floor Press — 5 × 10–15, rest 150s, RIR 2
- Unsupported Bent-Over Dumbbell Row — 5 × 10–15, rest 120s, RIR 2
- Standing Dumbbell Shoulder Press — 2 × 10–12, rest 120s, RIR 2
- Lateral Raise — 3 × 15–20, rest 75s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2
- Dumbbell Overhead Triceps Extension — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Lower B · unilateral and hamstring work (95 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Goblet Squat — 1 × 2, rest 45s, RIR 5 — Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue.
- Dumbbell Romanian Deadlift — 1 × 2, rest 45s, RIR 5 — Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue.

Main session:

- Goblet Squat — 3 × 10–15, rest 150s, RIR 2
- Dumbbell Romanian Deadlift — 3 × 10–12, rest 150s, RIR 2
- Dumbbell Split Squat — 2 × 10–12 / side, rest 120s, RIR 2
- Glute Bridge Hamstring Walkout — 4 × 6–10, rest 90s, RIR 2
- Bodyweight Calf Raise — 5 × 12–20, rest 75s, RIR 2
- Dumbbell Weighted Floor Crunch — 3 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. If only fixed-weight dumbbells are available, first reach the upper rep bound, then add a controlled 3-second descent and restart at the lower bound; do not add sets beyond the prescription. For hamstring walkouts, increase the controlled step distance before adding repetitions, stopping before the back position changes. For calf raises, use a slower descent after 20 reps then add a brief pause at the top while keeping the same bodyweight calf-raise exercise.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower. With fixed dumbbells, use fewer reps or the easier movement range to maintain at least 4 RIR instead of inventing an unavailable 10% weight reduction.

**Why this works:** Ten primary sets each for chest, lats, quads and hamstrings are supplied without bench-supported exercises. Two upper and two lower sessions distribute the work while floor pressing limits the bottom position naturally. The dumbbells provide measurable loading increases until their available weight becomes the limiting factor.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- A pair of dumbbells with suitable loads is assumed; adjustability is useful but not mandatory.
- All required equipment is bodyweight and dumbbells. There is no bench, chair, door anchor or rack requirement.

**Baseline primary working sets:** abdominals 6; anterior-deltoids 4; biceps 4; brachialis 2; calves 10; glutes 16; hamstrings 10; lateral-deltoids 6; lats 10; middle-trapezius 10; pectorals 10; quadriceps 10; rhomboids 10; triceps 4.

**Secondary involvement (not added to the primary total):** abdominals 14 set exposures; adductors 10 set exposures; anterior-deltoids 10 set exposures; biceps 10 set exposures; brachialis 2 set exposures; forearms 10 set exposures; glutes 4 set exposures; hamstrings 4 set exposures; lateral-deltoids 4 set exposures; spinal-erectors 16 set exposures; triceps 14 set exposures; upper-trapezius 6 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 18. Resistance Band Total Body

Three full-body sessions use long resistance bands for pushing, pulling and leg work. Exercises use the feet or upper back for support instead of an unselected door anchor.

**Method:** Three-day band training with repeatable tension and rep progression. **Equipment:** bodyweight, resistance-bands.





<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Band A · baseline tension (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Resistance Band Squat — 1 × 5, rest 45s, RIR 5 — Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed.
- Seated Resistance Band Row Around Feet — 1 × 5, rest 45s, RIR 5 — Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed.

Main session:

- Resistance Band Squat — 4 × 10–15, rest 90s, RIR 2
- Seated Resistance Band Row Around Feet — 4 × 10–15, rest 90s, RIR 2
- Resistance Band Chest Press Around Back — 4 × 10–15, rest 90s, RIR 2
- Resistance Band Romanian Deadlift — 4 × 10–15, rest 90s, RIR 2
- Resistance Band Overhead Press — 2 × 10–15, rest 90s, RIR 2
- Resistance Band Pull-Apart — 2 × 12–20, rest 60s, RIR 2
- Resistance Band Biceps Curl — 2 × 10–15, rest 60s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Wednesday — Band B · hinge and press (80 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Resistance Band Romanian Deadlift — 1 × 5, rest 45s, RIR 5 — Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed.
- Resistance Band Chest Press Around Back — 1 × 5, rest 45s, RIR 5 — Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed.

Main session:

- Resistance Band Romanian Deadlift — 3 × 10–15, rest 90s, RIR 2
- Resistance Band Chest Press Around Back — 3 × 10–15, rest 90s, RIR 2
- Resistance Band Squat — 3 × 10–15, rest 90s, RIR 2
- Seated Resistance Band Row Around Feet — 3 × 10–15, rest 90s, RIR 2
- Resistance Band Overhead Press — 2 × 10–15, rest 90s, RIR 2
- Resistance Band Overhead Triceps Extension — 2 × 10–15, rest 75s, RIR 2
- Dead Bug — 2 × 6–10 / side, rest 60s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Thursday — Rest**

Rest from planned training; easy everyday activity is optional.

**Friday — Band C · repeatable volume (80 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Resistance Band Squat — 1 × 5, rest 45s, RIR 5 — Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed.
- Seated Resistance Band Row Around Feet — 1 × 5, rest 45s, RIR 5 — Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed.

Main session:

- Resistance Band Squat — 3 × 10–15, rest 90s, RIR 2
- Seated Resistance Band Row Around Feet — 3 × 10–15, rest 90s, RIR 2
- Resistance Band Chest Press Around Back — 3 × 10–15, rest 90s, RIR 2
- Resistance Band Romanian Deadlift — 3 × 10–15, rest 90s, RIR 2
- Resistance Band Pull-Apart — 2 × 12–20, rest 60s, RIR 2
- Resistance Band Biceps Curl — 2 × 10–15, rest 60s, RIR 2
- Resistance Band Overhead Triceps Extension — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** Record the band used, grip length and foot placement for each exercise; band colors are not universal weight units. Add reps within the listed range while preserving 2 RIR and the same safe setup. After every set reaches the upper bound, increase tension by a small, manufacturer-permitted setup change or a stronger band if available, then return to the lower rep bound. Do not shorten or knot a band beyond its instructions or assume a 5% resistance increase can be measured from stretch alone. Keep the set count fixed and do not progress during deload weeks.

**Deload:** Weeks 4 and 8: halve working sets, rounding up, and reduce band tension or use a comfortably easier range so at least 4 RIR remain. Keep the same warm-up and controlled technique. No numerical percentage reduction is prescribed because band resistance depends on the band and its stretch. Use the same easier week early if performance and recovery deteriorate.

**Why this works:** The four main movement patterns each receive ten primary sets across three sessions, with squats and hinges together supplying twenty glute sets. Recording the same band, grip and setup makes rep progression easier to interpret. Elastic resistance can support strength development, but the exact loading and hypertrophy response of this original schedule is not established by the cited comparisons.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- Long bands suitable for the listed ranges are assumed; inspect them and follow their stretch limits. No door anchor, pull-up bar or dumbbell is required.
- A short mini-loop alone cannot perform every listed movement; use the described long band setup.
- Keep bands secured under the feet or around the back as specified in the central instructions.

**Baseline primary working sets:** abdominals 2; anterior-deltoids 4; biceps 4; glutes 20; hamstrings 10; lats 10; middle-trapezius 14; pectorals 10; posterior-deltoids 4; quadriceps 10; rhomboids 10; triceps 4.

**Secondary involvement (not added to the primary total):** abdominals 10 set exposures; anterior-deltoids 10 set exposures; biceps 10 set exposures; brachialis 4 set exposures; forearms 14 set exposures; hip-flexors 2 set exposures; lateral-deltoids 4 set exposures; posterior-deltoids 10 set exposures; rhomboids 4 set exposures; spinal-erectors 10 set exposures; triceps 14 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/); [Lopes et al.: Effects of training with elastic resistance versus conventional resistance on muscular strength: A systematic review and meta-analysis (2019)](https://pubmed.ncbi.nlm.nih.gov/30815258/).

### 19. Home HIIT Fat Burner

Short bodyweight work intervals alternate with generous recovery on three nonconsecutive days. The plan builds conditioning and activity, while fat loss still depends on dietary energy balance.

**Method:** Bodyweight interval clusters with controlled hard effort and recovery. **Equipment:** bodyweight.




**Nutrition guidance:**

- Fat loss requires a sustainable dietary energy deficit; the name does not promise spot reduction or a fixed calorie burn.
- Keep meals and activity consistent enough to monitor your response, and avoid automatically eating back an app's guessed exercise calories.
- If recovery or daily functioning worsens, reduce the deficit or training demand rather than adding more intervals.

<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Intervals A · movement control (35 min estimate)**

Warm-up:

- March in Place — 1 × 180 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

No loaded ramp-up is needed; begin the interval practice at an easy effort.

Main session:

- Low-Impact Step Jack — 3 × 20 sec, rest 40s, effort: Work at about 7–8/10 effort while keeping steps controlled; recover at an easy pace.
- Bodyweight Squat — 3 × 20 sec, rest 40s, effort: Hard but controlled effort around 7/10; stop before technique deteriorates.
- Controlled Mountain Climber — 3 × 20 sec, rest 40s, effort: Use a repeatable pace around 7/10; keep hips stable and slow down if needed.
- Step-Back Squat Thrust — 3 × 20 sec, rest 40s, effort: Step back rather than jump; keep a controlled plank and effort around 7/10.
- March in Place — 1 × 180 sec, rest 0s, effort: Easy cooldown; allow breathing to settle.

Complete each movement's three work/recovery intervals before the next movement. Recover easily for at least 60 seconds when changing movements. Keep the easy march cooldown last. Work intervals are hard but controlled, not all-out; maintain the prescribed recovery.

**Tuesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Wednesday — Intervals B · steadier lower impact (35 min estimate)**

Warm-up:

- March in Place — 1 × 180 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

No loaded ramp-up is needed; begin the interval practice at an easy effort.

Main session:

- Low-Impact Step Jack — 3 × 20 sec, rest 45s, effort: Repeatable hard effort around 7/10; keep one foot grounded.
- Reverse Lunge — 3 × 20 sec, rest 45s, effort: Alternate legs slowly enough to balance; hard effort must not replace control.
- March in Place — 3 × 25 sec, rest 45s, effort: March briskly around 7/10 effort without leaning backward; recover easily.
- Controlled Mountain Climber — 3 × 20 sec, rest 45s, effort: Use a controlled pace around 7/10; take longer recovery if form or breathing has not settled.
- March in Place — 1 × 180 sec, rest 0s, effort: Easy cooldown with relaxed breathing.

Complete each movement's three work/recovery intervals before the next movement. Recover easily for at least 60 seconds when changing movements. Keep the easy march cooldown last. Work intervals are hard but controlled, not all-out; maintain the prescribed recovery.

**Thursday — Rest**

Rest from planned training; easy everyday activity is optional.

**Friday — Intervals C · repeatable harder bouts (35 min estimate)**

Warm-up:

- March in Place — 1 × 180 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

No loaded ramp-up is needed; begin the interval practice at an easy effort.

Main session:

- Low-Impact Step Jack — 3 × 25 sec, rest 45s, effort: Work around 7–8/10 effort; each interval should remain repeatable.
- Bodyweight Squat — 3 × 25 sec, rest 45s, effort: Keep the same comfortable range from first rep to last; effort around 7/10.
- Controlled Mountain Climber — 3 × 20 sec, rest 45s, effort: Brace the trunk and stay controlled at a hard, repeatable pace.
- Step-Back Squat Thrust — 3 × 20 sec, rest 45s, effort: Use step-back transitions and stop before the plank position breaks down.
- March in Place — 1 × 180 sec, rest 0s, effort: Easy cooldown; do not stop abruptly after a hard interval.

Complete each movement's three work/recovery intervals before the next movement. Recover easily for at least 60 seconds when changing movements. Keep the easy march cooldown last. Work intervals are hard but controlled, not all-out; maintain the prescribed recovery.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** Use week 1 to learn the movements at about 6/10 effort. During later build weeks, work around 7–8/10 rather than all-out sprint effort. If every interval remains controlled and recovery is adequate, add 5 seconds to one exercise's work intervals at the next exposure, up to 30 seconds, while preserving the listed 40–45 seconds of recovery and three intervals per exercise. Do not increase pace and interval duration in the same week, and do not add more clusters beyond the 35-minute budget. If technique declines, shorten the work interval or extend recovery rather than chasing exhaustion.

**Deload:** Weeks 4 and 8: use two intervals per exercise instead of three, reduce work bouts to 15–20 seconds, and keep recovery at 45–60 seconds with an easy-to-moderate effort around 5–6/10. Keep the warm-up and cooldown. Use this easier week early if fatigue persists into the next session.

**Why this works:** Repeated hard bouts with recovery create a conditioning stimulus without equipment or mandatory jumping. Nonconsecutive days give room to recover between interval sessions. This schedule adds activity but does not guarantee greater fat loss than another sustainable activity plan with the same overall energy balance.

**Volume notes:** These are conditioning intervals with hardSet false, not a claim of 10–20 hypertrophy sets per muscle. RIR is null for timed intervals; the intensity note and movement quality govern effort. This plan does not replace a complete resistance-training program.

- Finish the prescribed intervals for one movement before moving to the next. Recover at least 60 seconds between movement clusters; the cooldown comes last.
- Recover by standing or marching easily. Begin the next interval only when you can control the movement and breathing; extend rest if needed.
- For an unsuitable floor-based interval, use the central march or step-jack entry for that work period rather than forcing a painful or uncontrolled position.

**Baseline primary working sets:** None counted; conditioning is not resistance-training hard sets.

**Secondary involvement (not added to the primary total):** Not counted for conditioning intervals.

**References:** [Physiological and Health-Related Adaptations to Low-Volume Interval Training: Influences of Nutrition and Sex (2014)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4213388/); [Aragon et al.: International society of sports nutrition position stand: diets and body composition (2017)](https://pubmed.ncbi.nlm.nih.gov/28630601/).

### 20. Pull-Up Mastery

A staged skill plan develops assisted pulling, hanging control and controlled lowering before full pull-up work. Progress depends on demonstrated ability and a safely reachable low bar, not an eight-week guarantee.

**Method:** Ability-based pulling stages with assistance, eccentrics and strict reps. **Equipment:** bodyweight, pull-up-bar.

**Setup requirements:**

- A securely mounted, rated pull-up bar low enough for foot-assisted pulling and reaching the top position with feet on the floor is required.
- A high doorway bar alone is not sufficient for the assisted and eccentric stages; do not assume a chair, band or climb to the bar.
- This is a pulling specialization plan, not a complete full-body strength program.


**Ability-based stages:**

- **foundation:** Initial stage for a trainee without three controlled strict pull-ups; use it until assisted reps and hangs are repeatable. Cap working sets at 2 per exercise. Omit negative-pullup. 
- **assisted-eccentric:** Two sessions of eight controlled foot-assisted reps per set at about 3 RIR, comfortable supported hangs, and the ability to begin a slow lowering from the safely reachable top position. 
- **strict-reps:** Already able to demonstrate three controlled strict pull-ups without kipping or craning the neck. Omit negative-pullup. Replace foot-assisted-pullup with Strict Pull-up — 3 × 1–3, rest 150s, RIR 1.


<details>
<summary>Baseline weekly schedule, warm-up, effort and rest</summary>

**Monday — Pulling A · assistance and positions (45 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Supported Bar Hang — 1 × 10 sec, rest 45s, effort: Very easy foot-supported grip and shoulder-position practice before the session.

Main session:

- Supported Bar Hang — 3 × 15 sec, rest 60s, effort: Use foot support as needed; finish with grip and shoulder control still available.
- Scapular Pull-up — 3 × 4–8, rest 90s, RIR 4
- Foot-Assisted Low-Bar Pull-up — 3 × 5–8, rest 120s, RIR 3
- Dead Bug — 2 × 6–10 / side, rest 60s, RIR 3

Apply the current skill-stage omissions and overrides before training. Keep hangs and scapular pulls easy, then complete the pulling sets with full rest. The low bar must permit a safe start and step-down without added equipment.

**Tuesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Wednesday — Pulling B · controlled lowering (55 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Supported Bar Hang — 1 × 10 sec, rest 45s, effort: Very easy foot-supported grip and shoulder-position practice before the session.

Main session:

- Supported Bar Hang — 2 × 15 sec, rest 60s, effort: Keep feet close to the floor and stop before grip failure.
- Scapular Pull-up — 3 × 4–8, rest 90s, RIR 4
- Foot-Assisted Low-Bar Pull-up — 3 × 5–8, rest 120s, RIR 3
- Eccentric Pull-up from a Low Bar — 2 × 2–3, rest 150s, RIR 3 (lower over 5 sec) — Use only in the assisted/eccentric stage after its entry criteria; each lowering lasts up to 5 controlled seconds.
- Dead Bug — 2 × 6–10 / side, rest 60s, RIR 3

Apply the current skill-stage omissions and overrides before training. Keep hangs and scapular pulls easy, then complete the pulling sets with full rest. The low bar must permit a safe start and step-down without added equipment.

**Thursday — Rest**

Rest from planned training; easy everyday activity is optional.

**Friday — Pulling C · repeatable assisted reps (50 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Specific practice / ramp-up:

- Supported Bar Hang — 1 × 10 sec, rest 45s, effort: Very easy foot-supported grip and shoulder-position practice before the session.

Main session:

- Supported Bar Hang — 3 × 15 sec, rest 60s, effort: Use a comfortable overhead position and retain enough grip to step down safely.
- Scapular Pull-up — 2 × 4–8, rest 90s, RIR 4
- Foot-Assisted Low-Bar Pull-up — 3 × 5–8, rest 120s, RIR 3
- Eccentric Pull-up from a Low Bar — 2 × 2–3, rest 150s, RIR 3 (lower over 5 sec) — Only use this stage after controlled assisted reps; stop before the descent becomes a drop.

Apply the current skill-stage omissions and overrides before training. Keep hangs and scapular pulls easy, then complete the pulling sets with full rest. The low bar must permit a safe start and step-down without added equipment.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** Start in the foundation skill stage even if the baseline schedule shows later-stage negatives; apply its omissions and set cap. Add assisted reps toward eight while keeping about 3 RIR, then gradually use less leg assistance without changing the range. Enter the assisted/eccentric stage only after two sessions of eight controlled assisted reps per set and comfortable supported hangs; begin each descent at 3 seconds and build toward the prescribed 5 seconds before adding reps. Enter the strict-rep stage only after you can demonstrate three controlled unassisted pull-ups without kipping; use 1–3 reps at 1 or more RIR, adding one rep to a set only while that reserve remains. Progress the supported hangs by 5 seconds per build week up to 25 seconds, without approaching grip failure. Stay at a stage as long as needed rather than forcing a calendar deadline.

**Deload:** Weeks 4 and 8: halve assisted or strict working sets, rounding up; omit all negative-pullup sets and halve supported-hang duration. Increase foot assistance and keep at least 4 RIR on rep exercises, while retaining only easy scapular practice. Use the same reduction early if elbows, shoulders or grip remain unrecovered; return to the last controlled stage and do not force eccentric repetitions.

**Why this works:** Assisted repetitions supply practice through the pulling range while allowing the legs to control difficulty. Brief hangs and scapular practice develop the starting position, and low-rep eccentric work is added only after its control criteria are met. The later stage replaces assisted work with small strict-rep sets rather than stacking a full extra workout on top.

**Volume notes:** This is skill practice, not a high-volume hypertrophy prescription. Hangs and scapular pulls are easy practice with hardSet false. The assisted/eccentric baseline has nine assisted and four eccentric working sets per week; the entry stage uses fewer sets and omits eccentrics, while the strict stage replaces assisted work and removes the negative sets.

- Skill-stage entry criteria override the calendar: a beginner does not start negative pull-ups merely because it is Wednesday.
- An eccentric rep ends when the slow descent is no longer controlled; the listed RIR means additional equally controlled descents, not extra drops.
- The first strict pull-up may arrive before or after this block. Do not test to failure at every session.

**Baseline primary working sets:** abdominals 4; lats 13.

**Secondary involvement (not added to the primary total):** biceps 13 set exposures; forearms 13 set exposures; hip-flexors 4 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)](https://pubmed.ncbi.nlm.nih.gov/19204579/).


## Evidence scope

ACSM guidance informs goal-specific loading, progression and manageable training consistency. Schoenfeld and colleagues' reviews inform weekly volume distribution; the schedules do not claim that one frequency is always best when volume is equal.

Lopes and colleagues' review compares elastic and conventional training for strength outcomes. It supports using bands as a practical resistance option; it does not establish equal hypertrophy for every band exercise or validate Program 18. The interval-training review supports general adaptation principles, not this exact equipment-free sequence. The diet reference distinguishes activity from the sustained energy deficit that drives fat loss.

## Verification

Run `node --test tests/model.test.cjs tests/programs.test.cjs`. The checks now cover both batches: twenty distinct programs, central exercise references, complete weekly schedules, equipment eligibility, warm-ups, timing, target volume/frequency, beginner set caps, low-bar skill stages, deloads, and real reference URLs.

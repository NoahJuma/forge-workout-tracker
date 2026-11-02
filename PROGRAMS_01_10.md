# Programs 1–10

The machine-readable delivery is [programs-01-10.json](programs-01-10.json): exactly ten original programs using IDs from [exercises.js](exercises.js). No exercise instructions, muscles, or video data are duplicated inside programs.

## Reading the schedules

- ISO weekday 1 is Monday; weekday 7 is Sunday. Shift a schedule as a whole while preserving training/rest gaps.
- Every training day contains general warm-up prescriptions and specific light ramp-up sets. Ramp-up percentages refer to that session's external working load, not a tested one-repetition maximum. Bodyweight pull-up/dip warm-ups use short technique sets instead of fictional percentage loads.
- Listed working sets are build-week targets. Warm-ups and conditioning have `hardSet: false`. Holds can be working core sets but use a technical-control cue instead of numeric RIR.
- `min/max` means repetitions; time/distance prescriptions use null rep bounds plus `durationSeconds` or `distanceMetres`. Repetitions are per side when `perSide` is true; the set count is not doubled when reporting one muscle's volume.
- Program session length is the longest day estimate; each day also has its own estimate. It includes warm-up and rest and can vary with setup or recovery. Conditioning progression may extend its initial duration within the provided estimate.
- Primary muscle set totals are a planning audit, not a precise measure of stimulus. Secondary muscles also work during compounds; the JSON does not assign every secondary set the same value as an isolation set. Specialization targets receive roughly 10–20 primary sets; supporting areas receive compound work and, where specified, lower direct volume.
- These are original templates, not individually validated study routines. Load increments, deload timing, exact exercise order and set distribution are app design choices informed by general training principles.
- This phase delivers JSON for review. It does not yet register an incomplete ten-program catalog in the live recommendation engine. The remaining twenty programs follow in Phases 5–6.

## Overview

| # | Program | Goal | Level | Days/week | Longest session | Weeks | Focus volume per build week |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Shortcut to Strength | strength | intermediate | 4 | 85 min | 12 | quadriceps: 8 sets / 2 sessions; pectorals: 8 sets / 2 sessions; glutes: 13 sets / 2 sessions; anterior-deltoids: 8 sets / 2 sessions |
| 2 | Shortcut to Six-Pack | fat-loss | intermediate | 4 | 85 min | 8 | abdominals: 14 sets / 3 sessions |
| 3 | Shoulder Killer | hypertrophy | advanced | 5 | 100 min | 8 | lateral-deltoids: 12 sets / 3 sessions |
| 4 | Abs Killer | hypertrophy | advanced | 4 | 90 min | 8 | abdominals: 12 sets / 2 sessions |
| 5 | Chest Builder | hypertrophy | intermediate | 4 | 100 min | 8 | pectorals: 19 sets / 2 sessions |
| 6 | Arm Blaster | hypertrophy | intermediate | 4 | 100 min | 8 | biceps: 12 sets / 2 sessions; triceps: 12 sets / 2 sessions |
| 7 | Quad Crusher | hypertrophy | intermediate | 4 | 95 min | 8 | quadriceps: 18 sets / 2 sessions |
| 8 | Glute Builder | hypertrophy | intermediate | 4 | 95 min | 8 | glutes: 17 sets / 2 sessions |
| 9 | V-Taper Back | hypertrophy | advanced | 4 | 100 min | 8 | lats: 17 sets / 2 sessions; middle-trapezius: 10 sets / 2 sessions |
| 10 | Push / Pull / Legs | hypertrophy | intermediate | 6 | 90 min | 8 | pectorals: 10 sets / 2 sessions; lats: 10 sets / 2 sessions; quadriceps: 10 sets / 2 sessions; hamstrings: 10 sets / 2 sessions; calves: 10 sets / 2 sessions; lateral-deltoids: 10 sets / 2 sessions |

## Plans

### 1. Shortcut to Strength

A four-day upper/lower plan with 5×5-style practice on the squat, bench press and overhead press. Deadlifts use lower-volume triples to manage fatigue.

**Method:** Linear progression with heavy and lighter technique exposures. **Equipment:** barbell, bench, bodyweight, cable-machine, rack.



<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Lower A · squat priority (85 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Conventional Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 5 × 5, rest 240s, RIR 2
- Conventional Deadlift — 2 × 3, rest 180s, RIR 3 (light exposure: 90% of last heavy load)
- Forearm Plank — 2 × 30 sec, rest 60s, effort: End the hold before alignment changes; keep breathing.

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Upper A · bench priority (85 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Overhead Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Barbell Bench Press — 5 × 5, rest 240s, RIR 2
- Overhead Press — 3 × 5, rest 180s, RIR 3 (light exposure: 90% of last heavy load)
- Lat Pulldown — 3 × 6, rest 150s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Lower B · deadlift priority (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Conventional Deadlift — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Back Squat — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Conventional Deadlift — 3 × 3, rest 240s, RIR 2
- Back Squat — 3 × 5, rest 180s, RIR 3 (light exposure: 90% of last heavy load)
- Forearm Plank — 2 × 30 sec, rest 60s, effort: Maintain alignment and stop before technical failure.

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Upper B · press priority (85 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Overhead Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Barbell Bench Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Overhead Press — 5 × 5, rest 240s, RIR 2
- Barbell Bench Press — 3 × 5, rest 180s, RIR 3 (light exposure: 90% of last heavy load)
- Bent-Over Barbell Row — 3 × 6, rest 150s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** Start with loads that leave at least 2 RIR on every heavy set. During build weeks, increase the next heavy exposure by the smallest available increment (roughly 1–2.5% for presses and 2.5–5% for squat/deadlift) only after completing every prescribed rep at 2 or more RIR; lighter exposures stay at 90% of the latest successful heavy load. Do not force weekly increases: repeat a load if reps or technique deteriorate, and after two failed exposures reduce it by about 10% and rebuild. Rows and pulldowns progress by the smallest increment after all sets of 6 remain controlled; planks add 5 seconds per week up to 45 seconds before using a harder bracing position.

**Deload:** Weeks 4, 8 and 12: halve working sets, rounding up, reduce heavy working loads by about 10%, and keep 4 or more RIR. Keep lighter exposures easy and halve plank duration. Use the same deload early after two consecutive performance declines; resume at the last successful controlled load.

**Why this works:** The heavy exposure sets a clear load target while the lighter exposure repeats the same lift with less fatigue. Lower-volume deadlift triples keep the hinge workload separate from the 5×5 squat and press work. Four training days leave Wednesday and the weekend for recovery.

**Volume notes:** This is a strength plan, not a 10–20-set hypertrophy target for every muscle. Main-lift sets use 3–5 reps, 3–4 minutes of rest, and at least 2 RIR. Lighter exposures are technique practice; never grind them. Use a rack with correctly set safeties for squats and benching, or a competent bench spotter.


**Primary working sets:** abdominals 4; anterior-deltoids 8; glutes 13; hamstrings 5; lats 6; middle-trapezius 3; pectorals 8; quadriceps 8; rhomboids 3.

**Secondary involvement (not added to the primary total):** abdominals 8 set exposures; adductors 8 set exposures; anterior-deltoids 8 set exposures; biceps 6 set exposures; forearms 5 set exposures; glutes 4 set exposures; lateral-deltoids 8 set exposures; lats 5 set exposures; lower-trapezius 3 set exposures; quadriceps 5 set exposures; shoulders 4 set exposures; spinal-erectors 16 set exposures; triceps 16 set exposures.

**References:** [American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)](https://pubmed.ncbi.nlm.nih.gov/19204579/); [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/).

### 2. Shortcut to Six-Pack

Weighted core work and full-body resistance sessions are paired with a separate conditioning day and practical nutrition guidance. Ab training does not selectively remove belly fat.

**Method:** Three full-body sessions plus a low-impact conditioning day. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, pull-up-bar, rack.

**Ab training and body fat:** Spot reduction is a myth: ab exercises do not selectively remove belly fat. Visible abs depend on body fat, which is controlled mainly through diet and overall energy balance, as well as individual fat distribution. Ab training builds the muscle; nutrition reveals it. This program cannot guarantee visible abs.

**Nutrition guidance:**

- For fat loss, use a sustainable dietary energy deficit rather than adding endless ab sets; avoid treating exercise calories as precise measurements.
- Include protein regularly; 1.4–2.0 g/kg/day is a general reference for most healthy exercising adults, not an automatically calculated app target.
- Build meals around protein foods, fruit or vegetables, fiber-rich staples and adequate fluids. Adjust intake if recovery and training performance consistently decline.
- Visible abs are not guaranteed by an eight-week block; starting body fat and individual fat distribution affect appearance.

<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Full body A · loaded flexion (80 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Barbell Bench Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 3 × 6–8, rest 180s, RIR 2
- Barbell Bench Press — 3 × 6–8, rest 150s, RIR 2
- Cable Row — 3 × 8–12, rest 120s, RIR 2
- Dumbbell Weighted Floor Crunch — 3 × 10–15, rest 75s, RIR 2
- Cable Pallof Press — 2 × 10–12 / side, rest 60s, RIR 2
- Brisk Walking — 1 × 480 sec, rest 0s, effort: Comfortable purposeful pace; full sentences remain possible.

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Wednesday — Full body B · hanging control (80 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Romanian Deadlift — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Barbell Bench Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Barbell Bench Press — 3 × 8–10, rest 150s, RIR 2
- Cable Row — 3 × 10–12, rest 120s, RIR 2
- Hanging Knee Raise — 3 × 8–12, rest 75s, RIR 2
- Cable Pallof Press — 2 × 10–12 / side, rest 60s, RIR 2
- Brisk Walking — 1 × 480 sec, rest 0s, effort: Comfortable purposeful pace, not a hard finisher.

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Thursday — Rest**

Rest from planned training; easy everyday activity is optional.

**Friday — Full body C · core volume (85 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 3 × 8–10, rest 150s, RIR 2
- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Barbell Bench Press — 3 × 8–10, rest 150s, RIR 2
- Cable Row — 3 × 8–12, rest 120s, RIR 2
- Dumbbell Weighted Floor Crunch — 2 × 10–15, rest 75s, RIR 2
- Hanging Knee Raise — 2 × 8–12, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Conditioning · walking and intervals (60 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

No loaded ramp-up needed; begin the first conditioning interval easily.

Working session:

- Brisk Walking — 1 × 1500 sec, rest 0s, effort: Brisk but conversational; choose a clear level route.
- Low-Impact Step Jack — 6 × 30 sec, rest 30s, effort: Moderate, repeatable effort around 6/10; no jumping required.

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. For knee raises, first add controlled repetitions; after all sets reach 12 without swinging, gradually lengthen the legs while keeping the same range and RIR. Add 2 minutes to the conditioning-day walk per build week up to 40 minutes, or add one step-jack interval up to 10; change only one conditioning variable that week and extend the session estimate accordingly.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower. Halve step-jack intervals and keep the walk easy at 15–20 minutes on deload weeks.

**Why this works:** Three resistance days retain full-body loading while ten dynamic ab sets distribute direct core work across the week. The separate conditioning day adds activity without turning every strength set into a circuit. Fat loss still depends on sustained energy balance rather than which area is exercised.

**Volume notes:** There are 10 dynamic ab sets plus 4 Pallof-press sets each build week. Full-body lifting uses 6 squat sets, 6 hinge sets and 9 sets each of benching and rowing, prioritizing strength maintenance while managing recovery during a dietary deficit. Walking and step-jack intervals are conditioning, not hypertrophy hard sets.


**Primary working sets:** abdominals 14; glutes 12; hamstrings 6; lats 9; middle-trapezius 9; obliques 4; pectorals 9; quadriceps 6; rhomboids 9.

**Secondary involvement (not added to the primary total):** adductors 6 set exposures; anterior-deltoids 9 set exposures; biceps 9 set exposures; forearms 11 set exposures; hip-flexors 5 set exposures; posterior-deltoids 9 set exposures; spinal-erectors 12 set exposures; triceps 9 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Vispute et al.: The effect of abdominal exercise on abdominal fat (2011)](https://pubmed.ncbi.nlm.nih.gov/21804427/); [Aragon et al.: International society of sports nutrition position stand: diets and body composition (2017)](https://pubmed.ncbi.nlm.nih.gov/28630601/); [Jäger et al.: International Society of Sports Nutrition Position Stand: protein and exercise (2017)](https://pubmed.ncbi.nlm.nih.gov/28642676/).

### 3. Shoulder Killer

A delt specialization block with three weekly shoulder exposures and 12 lateral-raise sets for width. Upper and lower support sessions keep the rest of the body in training.

**Method:** Five-day delt specialization with a short isolation session. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, plate-loaded-machine, rack, selectorized-machine.



<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Upper A · overhead strength and width (100 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Overhead Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Lateral Raise — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Overhead Press — 3 × 6–8, rest 180s, RIR 2
- Lateral Raise — 3 × 12–20, rest 75s, RIR 2
- Reverse Pec Deck — 3 × 12–20, rest 75s, RIR 2
- Barbell Bench Press — 5 × 8–10, rest 150s, RIR 2
- Lat Pulldown — 3 × 8–12, rest 120s, RIR 2
- Cable Row — 3 × 8–12, rest 120s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Lower A · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 3 × 6–8, rest 180s, RIR 2
- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Leg Extension — 2 × 10–15, rest 90s, RIR 2
- Seated Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Upper B · seated press and cable width (100 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Seated DB Shoulder Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Single-Arm Cable Lateral Raise — 2 × 5 / side, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Seated DB Shoulder Press — 3 × 8–12, rest 150s, RIR 2
- Single-Arm Cable Lateral Raise — 3 × 12–20 / side, rest 75s, RIR 2
- Bent-Over Dumbbell Rear Delt Fly — 3 × 12–20, rest 75s, RIR 2
- Barbell Bench Press — 5 × 10–12, rest 150s, RIR 2
- Lat Pulldown — 3 × 10–12, rest 120s, RIR 2
- Cable Row — 3 × 10–12, rest 120s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Lower B · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Leg Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Dumbbell Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Leg Press — 3 × 10–12, rest 150s, RIR 2
- Dumbbell Romanian Deadlift — 3 × 10–12, rest 150s, RIR 2
- Leg Extension — 2 × 12–15, rest 90s, RIR 2
- Lying Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Seated Calf Raise — 5 × 12–20, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Delt isolation · controlled volume (45 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Lateral Raise — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Single-Arm Cable Lateral Raise — 2 × 5 / side, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Lateral Raise — 3 × 15–20, rest 75s, RIR 2
- Single-Arm Cable Lateral Raise — 3 × 15–20 / side, rest 75s, RIR 2
- Face Pull — 2 × 15–20, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. For raises, progress reps before load and use the smallest available increase; do not shorten the range or swing to reach the target. Keep 3 RIR on all shoulder work in week 1 and use the full listed set count only if recovery is stable.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Twelve lateral-raise sets are spread over three sessions, with separate pressing and rear-delt work. The short isolation day adds width-focused work without another heavy press session. Chest and back still receive two exposures, while two lower days provide balanced leg work.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- Killer is a program name, not an instruction to train to failure. Stop sets when control is lost.
- Lateral delts receive 12 primary sets, anterior delts 6 pressing sets, and rear delts 8 direct sets before indirect pressing/rowing work. Do not add this block to another full upper-body plan without reviewing overlap.

**Primary working sets:** anterior-deltoids 6; calves 10; glutes 12; hamstrings 10; lateral-deltoids 12; lats 12; middle-trapezius 8; pectorals 10; posterior-deltoids 8; quadriceps 10; rhomboids 6.

**Secondary involvement (not added to the primary total):** abdominals 3 set exposures; adductors 6 set exposures; anterior-deltoids 10 set exposures; biceps 14 set exposures; external-rotators 2 set exposures; forearms 6 set exposures; lateral-deltoids 6 set exposures; lower-trapezius 6 set exposures; middle-trapezius 6 set exposures; posterior-deltoids 6 set exposures; rhomboids 6 set exposures; spinal-erectors 9 set exposures; triceps 16 set exposures; upper-trapezius 12 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 4. Abs Killer

Progressive loaded crunches, hanging leg raises and anti-extension work build the ab muscles. This hypertrophy block makes no claim of spot reduction.

**Method:** Four-day upper/lower plan with two progressive core sessions. **Equipment:** ab-wheel, barbell, bench, bodyweight, cable-machine, dumbbells, plate-loaded-machine, pull-up-bar, rack, selectorized-machine.

**Ab training and body fat:** Spot reduction is a myth: ab exercises do not selectively remove belly fat. Visible abs depend on body fat, which is controlled mainly through diet and overall energy balance, as well as individual fat distribution. Ab training builds the muscle; nutrition reveals it. This program cannot guarantee visible abs.


<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Upper A · cable flexion and hanging control (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Cable Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Barbell Bench Press — 5 × 8–10, rest 150s, RIR 2
- Cable Row — 3 × 8–12, rest 120s, RIR 2
- Lat Pulldown — 2 × 10–12, rest 120s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Cable Crunch — 3 × 10–15, rest 75s, RIR 2
- Hanging Leg Raise — 2 × 8–12, rest 90s, RIR 2
- Cable Pallof Press — 2 × 10–12 / side, rest 60s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Lower A · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 3 × 6–8, rest 180s, RIR 2
- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Leg Extension — 2 × 10–15, rest 90s, RIR 2
- Seated Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Upper B · weighted flexion and rollout (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Cable Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Barbell Bench Press — 5 × 10–12, rest 150s, RIR 2
- Cable Row — 3 × 10–12, rest 120s, RIR 2
- Lat Pulldown — 2 × 10–15, rest 120s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Dumbbell Weighted Floor Crunch — 3 × 10–15, rest 75s, RIR 2
- Ab Wheel — 2 × 6–10, rest 90s, RIR 2
- Side Plank — 2 × 25 sec / side, rest 60s, effort: Keep breathing and stop before the hips sag; holds are per side.

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Lower B · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Leg Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Dumbbell Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

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

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Cable and weighted crunches use the smallest load increase after all sets reach 15 at 2 RIR. For leg raises, increase controlled reps before lengthening the lever or adding load; never progress by swinging. For rollouts, add reach gradually while maintaining trunk control before adding reps, and do not add external load during this block. Add 5 seconds to side-plank holds per build week up to 40 seconds, then use a longer lever if comfortable.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Two core sessions provide ten dynamic primary ab sets alongside four anti-rotation or side-plank sets. Loaded trunk flexion and controlled hanging or rollout patterns give measurable progression targets. The upper/lower split keeps the core sessions apart and retains two weekly exposures for the main supporting muscle groups.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- Use the central library's body-crunch or hanging-knee-raise record as a regression if the loaded or straight-leg version cannot be controlled; re-check equipment before substitutions.
- Dynamic RIR refers to additional repetitions with the same trunk control. Side-plank holds use technical control rather than a numeric RIR.

**Primary working sets:** abdominals 12; calves 10; glutes 12; hamstrings 10; lateral-deltoids 4; lats 10; middle-trapezius 6; obliques 4; pectorals 10; quadriceps 10; rhomboids 6.

**Secondary involvement (not added to the primary total):** adductors 6 set exposures; anterior-deltoids 10 set exposures; biceps 10 set exposures; forearms 8 set exposures; gluteus-medius 2 set exposures; hip-flexors 2 set exposures; lats 2 set exposures; lower-trapezius 4 set exposures; posterior-deltoids 6 set exposures; shoulders 4 set exposures; spinal-erectors 9 set exposures; triceps 10 set exposures; upper-trapezius 4 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/); [Vispute et al.: The effect of abdominal exercise on abdominal fat (2011)](https://pubmed.ncbi.nlm.nih.gov/21804427/).

### 5. Chest Builder

Two weekly chest sessions combine heavier flat pressing with incline and fly work. A higher-repetition session adds volume without repeating the same loading pattern.

**Method:** Four-day upper/lower block with chest priority and multiple angles. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, plate-loaded-machine, rack, selectorized-machine.



<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Upper A · flat press priority (95 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Incline DB Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Barbell Bench Press — 4 × 6–8, rest 180s, RIR 2
- Incline DB Press — 3 × 8–12, rest 150s, RIR 2
- Cable Fly — 2 × 12–15, rest 90s, RIR 2
- Cable Row — 3 × 8–12, rest 120s, RIR 2
- Lat Pulldown — 2 × 10–12, rest 120s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Lower A · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 3 × 6–8, rest 180s, RIR 2
- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Leg Extension — 2 × 10–15, rest 90s, RIR 2
- Seated Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Upper B · incline and higher repetitions (100 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Incline DB Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Flat DB Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Incline DB Press — 3 × 10–12, rest 150s, RIR 2
- Flat DB Press — 3 × 10–12, rest 150s, RIR 2
- Pec Deck — 2 × 12–15, rest 90s, RIR 2
- Push-up — 2 × 8–20, rest 90s, RIR 2
- Cable Row — 3 × 10–12, rest 120s, RIR 2
- Lat Pulldown — 2 × 10–15, rest 120s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Lower B · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Leg Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Dumbbell Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

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

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. For push-ups, reach the top of the rep range at 2 RIR before making the lever harder; use a slower controlled descent if no suitable harder variation is available. Keep the initial 19-set weekly ceiling rather than adding more fly or pressing sets.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Nineteen primary chest sets are divided between two sessions rather than crowded into one day. Flat and incline presses plus fly variations offer different movement paths without claiming to isolate a separate chest muscle. Pulling and lower-body sessions preserve a broader training base while chest work takes priority.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- If soreness or pressing performance worsens between sessions, first remove the two push-up sets and one fly set for that week; do not compensate with more sets later.
- Pressing already loads the triceps and anterior delts. Additional arm or shoulder blocks need an overlap review.

**Primary working sets:** biceps 4; brachialis 4; calves 10; glutes 12; hamstrings 10; lateral-deltoids 4; lats 10; middle-trapezius 6; pectorals 19; quadriceps 10; rhomboids 6.

**Secondary involvement (not added to the primary total):** abdominals 2 set exposures; adductors 6 set exposures; anterior-deltoids 19 set exposures; biceps 10 set exposures; forearms 10 set exposures; lower-trapezius 4 set exposures; posterior-deltoids 6 set exposures; spinal-erectors 9 set exposures; triceps 15 set exposures; upper-trapezius 4 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 6. Arm Blaster

Biceps and triceps receive priority work before upper-body compounds. Two arm sessions vary grip and shoulder position while lower-body sessions retain balanced leg training.

**Method:** Four-day upper/lower specialization with arm work first. **Equipment:** barbell, bench, bodyweight, cable-machine, dip-bars, dumbbells, plate-loaded-machine, rack, selectorized-machine.



<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Upper A · curls and elbow extensions first (95 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- EZ-Bar Curl — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Triceps Pushdown — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- EZ-Bar Curl — 3 × 8–12, rest 90s, RIR 2
- Triceps Pushdown — 3 × 10–15, rest 90s, RIR 2
- Hammer Curl — 3 × 10–15, rest 90s, RIR 2
- Dumbbell Overhead Triceps Extension — 3 × 10–15, rest 90s, RIR 2
- Barbell Bench Press — 3 × 8–10, rest 150s, RIR 3
- Lat Pulldown — 3 × 8–12, rest 120s, RIR 2
- Cable Row — 2 × 10–12, rest 120s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Lower A · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 3 × 6–8, rest 180s, RIR 2
- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Leg Extension — 2 × 10–15, rest 90s, RIR 2
- Seated Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Upper B · unilateral curls and close pressing (100 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Concentration Curl — 3 × 5 / side, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Dips — 2 × 2, rest 60s, RIR 5

Working session:

- Concentration Curl — 3 × 10–15 / side, rest 90s, RIR 2
- Dips — 3 × 6–10, rest 120s, RIR 2
- Standing Dumbbell Curl — 3 × 10–15, rest 90s, RIR 2
- Close-Grip Push-up — 3 × 8–15, rest 90s, RIR 2
- Barbell Bench Press — 3 × 10–12, rest 150s, RIR 3
- Lat Pulldown — 3 × 10–12, rest 120s, RIR 2
- Cable Row — 2 × 10–12, rest 120s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Lower B · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Leg Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Dumbbell Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

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

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Keep compound pressing at 3 RIR after arm work instead of comparing its load with a fresh pressing session. For dips and close-grip push-ups, first add controlled reps; add a harder lever only after the upper range remains comfortable. Do not add external dip weight during this block.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Each arm session begins with the priority muscles rather than leaving them until the end. Twelve primary biceps sets and twelve primary triceps sets are distributed across two days, with additional indirect loading from the compounds. The second session changes exercise demands while retaining the same weekly recovery pattern.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- Dip range is limited by controlled, comfortable shoulder motion. If dips cannot be controlled, use the central close-pushup record for those sets at the same RIR and reduce the later close-pushup exercise by two sets to avoid duplicating all six sets.
- Concentration-curl repetitions and sets are per arm. Complete both sides before taking the listed rest.
- This block already includes indirect arm work from presses and pulls; do not add another arm specialization schedule on top.

**Primary working sets:** biceps 12; brachialis 3; calves 10; glutes 12; hamstrings 10; lats 10; middle-trapezius 4; pectorals 12; quadriceps 10; rhomboids 4; triceps 12.

**Secondary involvement (not added to the primary total):** abdominals 3 set exposures; adductors 6 set exposures; anterior-deltoids 12 set exposures; biceps 10 set exposures; brachialis 9 set exposures; forearms 18 set exposures; lower-trapezius 6 set exposures; posterior-deltoids 4 set exposures; spinal-erectors 9 set exposures; triceps 6 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 7. Quad Crusher

A knee-dominant lower-body specialization emphasizes squats, presses and knee extensions. Two upper-body sessions and direct hamstring work support a balanced week.

**Method:** Four-day upper/lower block with squat and front-squat priority. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, plate-loaded-machine, rack, selectorized-machine.



<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Lower A · squat and press (95 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Leg Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 4 × 6–8, rest 180s, RIR 2
- Leg Press — 3 × 10–12, rest 150s, RIR 2
- Leg Extension — 3 × 12–15, rest 90s, RIR 2
- Seated Leg Curl — 5 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Upper A · support (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Cable Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Barbell Bench Press — 5 × 8–12, rest 150s, RIR 2
- Cable Row — 3 × 8–12, rest 120s, RIR 2
- Lat Pulldown — 2 × 10–12, rest 120s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Triceps Pushdown — 2 × 10–15, rest 75s, RIR 2
- Hammer Curl — 3 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Lower B · front squat and lunge (95 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Front Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Walking Lunge — 2 × 5 / side, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Front Squat — 3 × 8–10, rest 180s, RIR 2
- Walking Lunge — 3 × 10–12 / side, rest 120s, RIR 2
- Leg Extension — 2 × 12–15, rest 90s, RIR 2
- Seated Leg Curl — 5 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 12–20, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Upper B · support (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Cable Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Barbell Bench Press — 5 × 8–12, rest 150s, RIR 2
- Cable Row — 3 × 8–12, rest 120s, RIR 2
- Lat Pulldown — 2 × 10–12, rest 120s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Triceps Pushdown — 2 × 10–15, rest 75s, RIR 2
- Hammer Curl — 3 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Increase only one major quad exercise load per lower session if recovery is uncertain; hold the others at their existing load and add reps as allowed. Walking-lunge reps are per leg and must remain controlled. Do not add more knee-extension sets beyond the 18-set weekly quad prescription.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Eighteen primary quad sets are split between two lower sessions with different lead movements. Hamstring curls and calf raises retain direct work that the quad-focused exercises do not replace. Two upper sessions keep pressing and pulling in the week without adding another hard leg day.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- Start week 1 at 3 RIR. If the full volume prevents recovery by the next lower session, remove one leg-press set and one leg-extension set from Lower A until recovery is stable.
- Support work is not an invitation to add another leg program.

**Primary working sets:** biceps 6; brachialis 6; calves 10; glutes 13; hamstrings 10; lateral-deltoids 4; lats 10; middle-trapezius 6; pectorals 10; quadriceps 18; rhomboids 6; triceps 4.

**Secondary involvement (not added to the primary total):** abdominals 3 set exposures; adductors 10 set exposures; anterior-deltoids 10 set exposures; biceps 10 set exposures; forearms 6 set exposures; hamstrings 3 set exposures; lower-trapezius 4 set exposures; posterior-deltoids 6 set exposures; spinal-erectors 4 set exposures; triceps 10 set exposures; upper-back 3 set exposures; upper-trapezius 4 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 8. Glute Builder

Hip thrusts and hip hinges lead two glute-focused lower sessions. Unilateral leg work and upper-body support round out the week.

**Method:** Four-day upper/lower block with thrust and hinge emphasis. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, selectorized-machine.



<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Lower A · thrust and long hinge (95 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Hip Thrust — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Hip Thrust — 4 × 8–10, rest 150s, RIR 2
- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Bulgarian Split Squat — 2 × 8–12 / side, rest 120s, RIR 2
- Leg Extension — 3 × 10–15, rest 90s, RIR 2
- Lying Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Upper A · support (85 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Flat DB Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Cable Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Flat DB Press — 5 × 8–12, rest 150s, RIR 2
- Cable Row — 3 × 8–12, rest 120s, RIR 2
- Lat Pulldown — 2 × 10–12, rest 120s, RIR 2
- Seated DB Shoulder Press — 2 × 8–12, rest 120s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Lower B · thrust and unilateral control (95 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Hip Thrust — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Dumbbell Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Hip Thrust — 3 × 10–12, rest 150s, RIR 2
- Dumbbell Romanian Deadlift — 2 × 10–12, rest 150s, RIR 2
- Reverse Lunge — 3 × 12–20 / side, rest 120s, RIR 2
- Leg Extension — 2 × 12–15, rest 90s, RIR 2
- Lying Leg Curl — 3 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 12–20, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Upper B · support (85 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Flat DB Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Cable Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Flat DB Press — 5 × 10–12, rest 150s, RIR 2
- Cable Row — 3 × 10–12, rest 120s, RIR 2
- Lat Pulldown — 2 × 10–15, rest 120s, RIR 2
- Seated DB Shoulder Press — 2 × 10–12, rest 120s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Rest**

Rest from planned training; easy everyday activity is optional.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. For reverse lunges, reach 20 controlled reps per leg at 2 RIR before increasing range only if comfortable or choosing a harder controlled tempo; no extra equipment is assumed for that exercise. Hip-thrust progression must keep the top position at the hips rather than gaining height by arching the lower back.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Seventeen primary glute sets combine thrusts, hinges and unilateral leg movements across two sessions. Hamstrings receive ten primary sets, and knee extensions bring quad work to ten sets without adding more glute-heavy compounds. Upper-body days keep the lower sessions separated.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- The reverse-lunge prescription uses the bodyweight library entry. If bodyweight is too easy even at the top of the range, use the central dumbbell walking-lunge record at 10–12 reps per leg and re-check the same session's fatigue.
- If recovery declines, remove one thrust set from each lower session before changing the rest of the schedule.

**Primary working sets:** anterior-deltoids 4; biceps 4; brachialis 4; calves 10; glutes 17; hamstrings 10; lateral-deltoids 4; lats 10; middle-trapezius 6; pectorals 10; quadriceps 10; rhomboids 6.

**Secondary involvement (not added to the primary total):** abdominals 7 set exposures; adductors 5 set exposures; anterior-deltoids 10 set exposures; biceps 10 set exposures; forearms 9 set exposures; hamstrings 12 set exposures; lateral-deltoids 4 set exposures; lower-trapezius 4 set exposures; posterior-deltoids 6 set exposures; spinal-erectors 5 set exposures; triceps 14 set exposures; upper-trapezius 4 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 9. V-Taper Back

Vertical pulls emphasize lat work while supported and unsupported rows train back thickness. Two lower-body sessions and pressing work maintain a complete weekly structure.

**Method:** Four-day upper/lower block with vertical and horizontal pulling priority. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, free-weights, plate-loaded-machine, pull-up-bar, rack, selectorized-machine.



<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Upper A · weighted vertical pull and row (95 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Strict Pull-up — 2 × 2, rest 60s, RIR 5
- Bent-Over Barbell Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Weighted Pull-up — 3 × 6–8, rest 180s, RIR 2
- Bent-Over Barbell Row — 3 × 8–10, rest 150s, RIR 2
- Straight-Arm Pulldown — 2 × 12–15, rest 90s, RIR 2
- Face Pull — 2 × 12–20, rest 75s, RIR 2
- Flat DB Press — 5 × 8–12, rest 150s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Lower A · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 3 × 6–8, rest 180s, RIR 2
- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Leg Extension — 2 × 10–15, rest 90s, RIR 2
- Seated Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Rest**

Rest from planned training; easy everyday activity is optional.

**Thursday — Upper B · unweighted control and cable rows (100 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Strict Pull-up — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Lat Pulldown — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Strict Pull-up — 2 × 6–10, rest 150s, RIR 2
- Lat Pulldown — 2 × 10–12, rest 120s, RIR 2
- One-Arm Dumbbell Row — 2 × 10–12 / side, rest 120s, RIR 2
- Cable Row — 3 × 10–12, rest 120s, RIR 2
- Face Pull — 2 × 15–20, rest 75s, RIR 2
- Flat DB Press — 5 × 10–12, rest 150s, RIR 2
- Lateral Raise — 2 × 12–20, rest 75s, RIR 2
- Hammer Curl — 2 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Lower B · support (75 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Leg Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Dumbbell Romanian Deadlift — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

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

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Weighted pull-ups progress by the smallest secure added load only after every set reaches 8 at 2 RIR without swinging. For unweighted pull-ups, add reps first; once 10 is controlled, use a slower descent rather than adding unlisted weight. One-arm dumbbell rows use the same reps on each side, capped by the weaker side.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Seventeen primary lat sets combine vertical pulls and rows over two upper sessions. Rows and face pulls also provide ten primary middle-trapezius sets, so the plan does not rely on pulldowns alone for back work. Keeping two lower days preserves leg training while the upper sessions prioritize pulling.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- Weighted pull-ups require already controlled full bodyweight pull-ups and rated loading equipment. Use the strict-pullup library entry instead if added load reduces control.
- Rows, pulldowns and pull-ups already load the biceps indirectly; avoid adding a separate full arm block.

**Primary working sets:** biceps 4; brachialis 4; calves 10; glutes 12; hamstrings 10; lateral-deltoids 4; lats 17; middle-trapezius 10; pectorals 10; posterior-deltoids 4; quadriceps 10; rhomboids 8.

**Secondary involvement (not added to the primary total):** abdominals 2 set exposures; adductors 6 set exposures; anterior-deltoids 10 set exposures; biceps 19 set exposures; external-rotators 4 set exposures; forearms 15 set exposures; lower-trapezius 7 set exposures; posterior-deltoids 5 set exposures; spinal-erectors 12 set exposures; triceps 12 set exposures; upper-trapezius 4 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).

### 10. Push / Pull / Legs

A six-day hypertrophy split repeats push, pull and leg sessions twice each week. One weekly rest day is built in, and the second round uses different rep emphases.

**Method:** Six-day Push A / Pull A / Legs A / Push B / Pull B / Legs B. **Equipment:** barbell, bench, bodyweight, cable-machine, dumbbells, plate-loaded-machine, rack, selectorized-machine.



<details>
<summary>Weekly schedule, warm-up, effort and rest</summary>

**Monday — Push A · heavier pressing (80 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Barbell Bench Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Incline DB Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Barbell Bench Press — 3 × 6–8, rest 180s, RIR 2
- Incline DB Press — 2 × 8–10, rest 150s, RIR 2
- Overhead Press — 2 × 6–8, rest 150s, RIR 2
- Lateral Raise — 5 × 12–20, rest 75s, RIR 2
- Triceps Pushdown — 3 × 10–15, rest 90s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Tuesday — Pull A · row emphasis (65 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Bent-Over Barbell Row — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Lat Pulldown — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Bent-Over Barbell Row — 3 × 8–10, rest 150s, RIR 2
- Lat Pulldown — 3 × 8–10, rest 120s, RIR 2
- Face Pull — 2 × 12–20, rest 75s, RIR 2
- EZ-Bar Curl — 3 × 8–12, rest 90s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Wednesday — Legs A · squat emphasis (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Back Squat — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Leg Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Back Squat — 3 × 6–8, rest 180s, RIR 2
- Leg Press — 2 × 10–12, rest 150s, RIR 2
- Romanian Deadlift — 3 × 8–10, rest 150s, RIR 2
- Seated Leg Curl — 2 × 10–15, rest 90s, RIR 2
- Standing Calf Raise — 5 × 10–15, rest 75s, RIR 2
- Cable Crunch — 3 × 10–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Thursday — Push B · moderate pressing (80 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Incline DB Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Barbell Bench Press — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Incline DB Press — 3 × 10–12, rest 150s, RIR 2
- Barbell Bench Press — 2 × 10–12, rest 150s, RIR 2
- Overhead Press — 2 × 10–12, rest 120s, RIR 2
- Lateral Raise — 5 × 15–20, rest 75s, RIR 2
- Dumbbell Overhead Triceps Extension — 3 × 10–15, rest 90s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Friday — Pull B · controlled repetitions (65 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Lat Pulldown — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Bent-Over Barbell Row — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Lat Pulldown — 2 × 10–15, rest 120s, RIR 2
- Bent-Over Barbell Row — 2 × 10–12, rest 150s, RIR 2
- Face Pull — 3 × 15–20, rest 75s, RIR 2
- Hammer Curl — 3 × 10–15, rest 90s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Saturday — Legs B · press and curl emphasis (90 min estimate)**

Warm-up:

- March in Place — 1 × 120 sec, rest 0s, effort: Easy pace; gradually raise breathing rate.
- Controlled Arm Circles — 1 × 8 / side, rest 0s, RIR 6
- Bodyweight Hip Hinge Drill — 1 × 8, rest 0s, RIR 6
- Bodyweight Squat — 1 × 8, rest 0s, RIR 6

Ramp-up:

- Leg Press — 3 × 5, rest 60s, RIR 5 — 40 / 60 / 80% of working load
- Back Squat — 2 × 5, rest 60s, RIR 5 — 50 / 75% of working load

Working session:

- Leg Press — 3 × 12–15, rest 150s, RIR 2
- Back Squat — 2 × 10–12, rest 150s, RIR 2
- Romanian Deadlift — 2 × 10–12, rest 150s, RIR 2
- Seated Leg Curl — 3 × 12–15, rest 90s, RIR 2
- Seated Calf Raise — 5 × 12–20, rest 75s, RIR 2
- Cable Crunch — 3 × 12–15, rest 75s, RIR 2

Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets.

**Sunday — Rest**

Rest from planned training; easy everyday activity is optional.

</details>

**Progression:** During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Track A and B rep-range performance separately for the same exercise; an increase in one range does not force an increase in the other. Keep the weekly set count fixed rather than adding finishers to a six-day schedule.

**Deload:** Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.

**Why this works:** Repeating the split gives the main muscle groups two weekly exposures while keeping each session organized by movement role. Chest, lats, quads, hamstrings, calves and lateral delts each receive ten primary sets in a build week. The second round changes rep ranges while Sunday remains free from planned training.

**Volume notes:** The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.

- Six sessions are a substantial weekly commitment. If recovery or attendance repeatedly breaks down, choose a lower-frequency program instead of compressing missed sessions together.
- Because barbell rows and RDLs load spinal erectors across nearby days, keep rows strict and reduce row load if the hinge sessions lose control. Main lifts stay at 2 RIR.
- Arm isolation totals 6 primary sets per week for each arm muscle; compound pressing and pulling add indirect work. Abs receive 6 direct sets rather than a second core specialization block.

**Primary working sets:** abdominals 6; anterior-deltoids 4; biceps 6; brachialis 3; calves 10; glutes 15; hamstrings 10; lateral-deltoids 10; lats 10; middle-trapezius 10; pectorals 10; posterior-deltoids 5; quadriceps 10; rhomboids 5; triceps 6.

**Secondary involvement (not added to the primary total):** abdominals 4 set exposures; adductors 10 set exposures; anterior-deltoids 10 set exposures; biceps 15 set exposures; brachialis 3 set exposures; external-rotators 5 set exposures; forearms 11 set exposures; lateral-deltoids 4 set exposures; lower-trapezius 5 set exposures; spinal-erectors 15 set exposures; triceps 14 set exposures; upper-trapezius 10 set exposures.

**References:** [ACSM: Updated resistance training guidelines (2026)](https://acsm.org/resistance-training-guidelines-update-2026/); [Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)](https://pubmed.ncbi.nlm.nih.gov/27433992/); [Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)](https://pubmed.ncbi.nlm.nih.gov/30558493/).


## Evidence scope

ACSM's 2026 guidance supports consistent training, appropriate goal-specific loading, and sufficient weekly volume. The older ACSM progression position stand supplies additional background on load progression and rest for strength work. Schoenfeld and colleagues' volume and frequency reviews inform workload distribution; twice-weekly exposure is a practical schedule choice, not a claim that it always beats another frequency when volume is equal. Vispute et al. found that their ab-only intervention did not reduce abdominal fat, supporting the distinction between training the ab muscles and reducing body fat.

The diet and protein references support the general nutrition notes; the app does not turn body weight into a personalized calorie prescription.

## Verification

Run `node --test tests/model.test.cjs tests/programs.test.cjs`. Checks include exact program count/names, all exercise references, complete seven-day schedules, warm-ups, equipment eligibility, rep/time/rest/RIR fields, target volume/frequency, recovery days, deload weeks, citations, and a conservative session-time estimate.

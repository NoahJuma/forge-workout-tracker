> Catalog expansion: the current library has 131 exercises. This document describes the original 113 entries; additional supported strength, balance and recovery entries are in exercises-expanded.js. The current video query sheet includes all 131.

# Central exercise library

The app defines **113 exercises** in [exercises.js](exercises.js), including the original 42 exercise IDs and 71 additions.

## Runtime and compatibility

Load exercises.js, exercises-expanded.js and reviewed-videos.js before data.js. The 42 current playback selections use the curated male-demonstrator registry; legacyVideo is historical metadata only. No packages or build step are required.

- `ForgeData.exercises` is the canonical array. `ForgeModel.exerciseLibrary[id]` provides lookup by ID.
- `ForgeData.catalog` and `ForgeModel.catalog` are derived views of all 113 exercises for the logger and player. Exercise definitions are authored once.
- Existing exercise names and IDs are retained so past workout snapshots and load history still match.
- `programExerciseCoverage` is an inventory for the 30 requested programs, including their warm-up movements. It is not a schedule or a training prescription. Schedules, volume, progression, and deloads are authored in Phases 4–6.
- All 113 exercises are available through the existing exercise picker and technique dialog. Instructions are always visible; the official YouTube player is attached when a video is selected.

## Exercise fields

Each exercise has an ID, name, primary and secondary muscles, equipment IDs, difficulty, original step-by-step instructions, common mistakes, a YouTube search query, an empty `youtubeVideoId`, and nullable home/outdoor alternative IDs.

Additional fields support the existing app: group, movement pattern, readable equipment label, and a tracking unit (reps, seconds, or metres). Original exercises retain their default set/rep values and existing video metadata under `legacyVideo`.

Muscle identifiers distinguish areas such as lateral deltoids, quadriceps, lats, and obliques. These labels describe exercise emphasis; they do not count sets or promise a particular adaptation. Volume accounting uses program working sets; the combined-week display shows primary sets plus a half-set estimate for indirect work.

## Equipment and alternatives

All required equipment is listed, including benches and racks where needed. The dumbbell-only home inventory uses floor presses, unsupported rows, standing presses, and split squats with both feet on the floor.

Bodyweight means no external training equipment. A clear floor or room, a solid wall for wall exercises, or a suitable walking area is still needed. Running requires a clear route. Park equipment means a stable, suitable fixed bar, bench, or stair as specified in that exercise's instructions.

Pull-up progressions distinguish low-bar foot assistance, controlled eccentric repetitions, hangs, scapular pulls, and full pull-ups. Foot assistance and eccentric starts require a secure bar reachable from the floor; the instructions do not assume a chair or unsafe climb. Band movements use the body or feet rather than assuming an unselected door anchor. Band length, condition, and manufacturer stretch limits still matter.

An alternative ID is a different option for a similar movement or training role, not a claim of identical loading or results. A null means no distinct alternative is supplied. Alternatives can require equipment: check their own equipment list against the user's selection before offering a swap.

## Video handling

All 113 canonical `youtubeVideoId` values are empty. Every record has a precise `youtubeSearchQuery`. No new video ID was invented. The app can store user-selected IDs or YouTube links on the device.

The original 42 demonstrations retain their original metadata in `legacyVideo` so the current player can retain those demonstrations. Their old verification dates are historical repository metadata; these links were not reverified in Phase 3. New search results should be selected for clear technique instruction from qualified coaches or established fitness channels before IDs are entered.

## Technique resources

The exercise instructions are original coaching summaries. Difficulty categories are app design choices, not certification criteria. The following established resources provide general technique background; they do not validate the app's exact routines or every individual cue:

- [ACE Exercise Library](https://www.acefitness.org/resources/everyone/exercise-library/)
- [NSCA: Two-Arm Kettlebell Swing](https://www.nsca.com/education/articles/kinetic-select/two-arm-kettlebell-swing/)
- [NSCA: Plyometric Exercises](https://www.nsca.com/education/articles/kinetic-select/plyometric-exercises/)
- [NSCA: Jump landing progressions](https://www.nsca.com/education/videos/plyometric-implementation-setup-and-execution-of-jump-landing-positions-to-decrease-likelihood-of-injuries/)

## Inventory

| ID | Exercise | Equipment | Tracking |
| --- | --- | --- | --- |
| squat | Back Squat | Barbell + Rack | reps |
| leg-press | Leg Press | Plate-loaded machine | reps |
| leg-extension | Leg Extension | Selectorized machine | reps |
| calf | Standing Calf Raise | Selectorized machine | reps |
| db-press | Seated DB Shoulder Press | Dumbbells + Bench | reps |
| lateral | Lateral Raise | Dumbbells | reps |
| rear-delt | Reverse Pec Deck | Selectorized machine | reps |
| incline | Incline DB Press | Dumbbells + Bench | reps |
| bench | Flat DB Press | Dumbbells + Bench | reps |
| fly | Cable Fly | Cable machine | reps |
| pullup | Weighted Pull-up | Pull-up bar + Added weight and secure loading equipment | reps |
| chest-row | Chest-Supported Row | Dumbbells + Bench | reps |
| pulldown-straight | Straight-Arm Pulldown | Cable machine | reps |
| leg-raise | Hanging Leg Raise | Pull-up bar | reps |
| rdl | Romanian Deadlift | Barbell | reps |
| hip-thrust | Hip Thrust | Barbell + Bench | reps |
| curl-seated | Seated Leg Curl | Selectorized machine | reps |
| calf-seated | Seated Calf Raise | Plate-loaded machine | reps |
| pec-deck | Pec Deck | Selectorized machine | reps |
| crunch | Cable Crunch | Cable machine | reps |
| ohp | Overhead Press | Barbell + Rack | reps |
| face-pull | Face Pull | Cable machine | reps |
| lat-pulldown | Lat Pulldown | Cable machine | reps |
| cable-row | Cable Row | Cable machine | reps |
| ez-curl | EZ-Bar Curl | Barbell | reps |
| pushdown | Triceps Pushdown | Cable machine | reps |
| front-squat | Front Squat | Barbell + Rack | reps |
| lunge | Walking Lunge | Dumbbells | reps |
| curl-lying | Lying Leg Curl | Selectorized machine | reps |
| hammer | Hammer Curl | Dumbbells | reps |
| dips | Dips | Dip bars | reps |
| ab-wheel | Ab Wheel | Ab wheel | reps |
| goblet | Goblet Squat | Dumbbells | reps |
| db-rdl | Dumbbell Romanian Deadlift | Dumbbells | reps |
| db-row | One-Arm Dumbbell Row | Dumbbells + Bench | reps |
| pushup | Push-up | Bodyweight | reps |
| split-squat | Bulgarian Split Squat | Dumbbells + Bench | reps |
| body-squat | Bodyweight Squat | Bodyweight | reps |
| bridge | Glute Bridge | Bodyweight | reps |
| reverse-lunge | Reverse Lunge | Bodyweight | reps |
| deadbug | Dead Bug | Bodyweight | reps |
| db-curl | Concentration Curl | Dumbbells + Bench | reps |
| barbell-bench | Barbell Bench Press | Barbell + Bench + Rack | reps |
| deadlift | Conventional Deadlift | Barbell | reps |
| barbell-row | Bent-Over Barbell Row | Barbell | reps |
| cable-lateral | Single-Arm Cable Lateral Raise | Cable machine | reps |
| db-rear-fly | Bent-Over Dumbbell Rear Delt Fly | Dumbbells | reps |
| overhead-triceps | Dumbbell Overhead Triceps Extension | Dumbbells | reps |
| weighted-crunch | Dumbbell Weighted Floor Crunch | Dumbbells | reps |
| pallof-press | Cable Pallof Press | Cable machine | reps |
| strict-pullup | Strict Pull-up | Pull-up bar | reps |
| foot-assisted-pullup | Foot-Assisted Low-Bar Pull-up | Pull-up bar | reps |
| negative-pullup | Eccentric Pull-up from a Low Bar | Pull-up bar | reps |
| scapular-pullup | Scapular Pull-up | Pull-up bar | reps |
| active-hang | Supported Bar Hang | Pull-up bar | seconds |
| standing-db-press | Standing Dumbbell Shoulder Press | Dumbbells | reps |
| db-floor-press | Dumbbell Floor Press | Dumbbells | reps |
| bent-db-row | Unsupported Bent-Over Dumbbell Row | Dumbbells | reps |
| db-standing-curl | Standing Dumbbell Curl | Dumbbells | reps |
| db-split-squat | Dumbbell Split Squat | Dumbbells | reps |
| body-split-squat | Bodyweight Split Squat | Bodyweight | reps |
| wall-pushup | Wall Push-up | Bodyweight | reps |
| knee-pushup | Knee Push-up | Bodyweight | reps |
| eccentric-pushup | Slow Eccentric Push-up | Bodyweight | reps |
| close-pushup | Close-Grip Push-up | Bodyweight | reps |
| pike-pushup | Pike Push-up | Bodyweight | reps |
| archer-pushup | Archer Push-up | Bodyweight | reps |
| front-plank | Forearm Plank | Bodyweight | seconds |
| side-plank | Side Plank | Bodyweight | seconds |
| bird-dog | Bird Dog | Bodyweight | reps |
| body-crunch | Floor Crunch | Bodyweight | reps |
| reverse-crunch | Reverse Crunch | Bodyweight | reps |
| hanging-knee-raise | Hanging Knee Raise | Pull-up bar | reps |
| hamstring-walkout | Glute Bridge Hamstring Walkout | Bodyweight | reps |
| body-calf-raise | Bodyweight Calf Raise | Bodyweight | reps |
| prone-w-raise | Prone W Raise | Bodyweight | reps |
| band-row | Seated Resistance Band Row Around Feet | Resistance bands | reps |
| band-chest-press | Resistance Band Chest Press Around Back | Resistance bands | reps |
| band-squat | Resistance Band Squat | Resistance bands | reps |
| band-rdl | Resistance Band Romanian Deadlift | Resistance bands | reps |
| band-press | Resistance Band Overhead Press | Resistance bands | reps |
| band-pull-apart | Resistance Band Pull-Apart | Resistance bands | reps |
| band-curl | Resistance Band Biceps Curl | Resistance bands | reps |
| band-triceps-extension | Resistance Band Overhead Triceps Extension | Resistance bands | reps |
| kb-deadlift | Kettlebell Deadlift | Kettlebell | reps |
| kb-goblet | Kettlebell Goblet Squat | Kettlebell | reps |
| kb-swing | Two-Hand Kettlebell Swing | Kettlebell | reps |
| kb-suitcase-carry | Kettlebell Suitcase Carry | Kettlebell | metres |
| kb-reverse-lunge | Kettlebell Goblet Reverse Lunge | Kettlebell | reps |
| park-row | Low Park-Bar Inverted Row | Park bars, bench or stairs | reps |
| park-incline-pushup | Park Bench Incline Push-up | Park bars, bench or stairs | reps |
| park-stepup | Low Park Step-up | Park bars, bench or stairs | reps |
| march | March in Place | Bodyweight | seconds |
| walk | Brisk Walking | Bodyweight | seconds |
| easy-run | Easy Run | Clear running route | seconds |
| tempo-run | Controlled Tempo Run | Clear running route | seconds |
| sprint | Flat Ground Acceleration Sprint | Clear running route | metres |
| hill-run | Uphill Running Interval | Clear running route | seconds |
| stair-climb | Controlled Stair Climb | Park bars, bench or stairs | seconds |
| step-jack | Low-Impact Step Jack | Bodyweight | seconds |
| mountain-climber | Controlled Mountain Climber | Bodyweight | seconds |
| stepback-thrust | Step-Back Squat Thrust | Bodyweight | seconds |
| squat-jump | Countermovement Squat Jump | Bodyweight | reps |
| broad-jump | Standing Broad Jump | Bodyweight | reps |
| hip-flexor-stretch | Half-Kneeling Hip Flexor Stretch | Bodyweight | seconds |
| open-book | Side-Lying Open Book Rotation | Bodyweight | reps |
| wall-slide | Wall Slide | Bodyweight | reps |
| chin-tuck | Gentle Chin Retraction | Bodyweight | reps |
| cat-camel | Gentle Cat-Camel | Bodyweight | reps |
| ankle-rock | Standing Ankle Dorsiflexion Rock | Bodyweight | reps |
| arm-circles | Controlled Arm Circles | Bodyweight | reps |
| hinge-drill | Bodyweight Hip Hinge Drill | Bodyweight | reps |
| scapular-pushup | Scapular Push-up | Bodyweight | reps |

## Coverage of the requested programs

All exercise IDs and warm-up IDs below resolve in the central library. Later phases will choose weekly prescriptions and progression options from this inventory.

| Program | ID | Exercise options | Warm-up options |
| --- | --- | --- | --- |
| 1 | shortcut-to-strength | squat, barbell-bench, deadlift, ohp, barbell-row, lat-pulldown, front-plank | march, arm-circles, hinge-drill, body-squat |
| 2 | shortcut-to-six-pack | squat, barbell-bench, rdl, cable-row, weighted-crunch, pallof-press, hanging-knee-raise, walk, step-jack | march, arm-circles, hinge-drill, body-squat |
| 3 | shoulder-killer | ohp, db-press, lateral, cable-lateral, rear-delt, db-rear-fly, face-pull, barbell-bench, lat-pulldown, squat, rdl | march, arm-circles, hinge-drill, body-squat |
| 4 | abs-killer | crunch, leg-raise, weighted-crunch, pallof-press, ab-wheel, side-plank, barbell-bench, squat, cable-row, rdl, body-crunch | march, arm-circles, hinge-drill, body-squat |
| 5 | chest-builder | barbell-bench, incline, bench, fly, pec-deck, pushup, cable-row, lat-pulldown, goblet, db-rdl | march, arm-circles, hinge-drill, body-squat |
| 6 | arm-blaster | ez-curl, hammer, db-curl, db-standing-curl, pushdown, overhead-triceps, dips, close-pushup, barbell-bench, lat-pulldown, goblet, rdl | march, arm-circles, hinge-drill, body-squat |
| 7 | quad-crusher | squat, front-squat, leg-press, leg-extension, lunge, split-squat, curl-seated, calf, barbell-bench, cable-row | march, arm-circles, hinge-drill, body-squat |
| 8 | glute-builder | hip-thrust, rdl, db-rdl, split-squat, reverse-lunge, curl-lying, bridge, lat-pulldown, db-press | march, arm-circles, hinge-drill, body-squat |
| 9 | v-taper-back | pullup, strict-pullup, lat-pulldown, barbell-row, chest-row, db-row, cable-row, pulldown-straight, face-pull, lateral, goblet, bench | march, arm-circles, hinge-drill, body-squat |
| 10 | push-pull-legs | barbell-bench, incline, ohp, lateral, pushdown, overhead-triceps, lat-pulldown, barbell-row, face-pull, ez-curl, hammer, squat, leg-press, rdl, curl-seated, calf, calf-seated, crunch | march, arm-circles, hinge-drill, body-squat |
| 11 | upper-lower | barbell-bench, ohp, cable-row, lat-pulldown, lateral, pushdown, hammer, squat, front-squat, rdl, leg-extension, curl-lying, calf, deadbug | march, arm-circles, hinge-drill, body-squat |
| 12 | powerbuilding | squat, barbell-bench, deadlift, ohp, barbell-row, leg-press, incline, lateral, ez-curl, pushdown, calf | march, arm-circles, hinge-drill, body-squat |
| 13 | deadlift-specialist | deadlift, rdl, front-squat, barbell-row, curl-lying, hip-thrust, front-plank, side-plank, barbell-bench, lat-pulldown | march, arm-circles, hinge-drill, body-squat |
| 14 | 30-minute-express | goblet, bench, cable-row, db-rdl, db-press, lat-pulldown, deadbug | march, arm-circles, hinge-drill, body-squat |
| 15 | beginner-foundations | goblet, leg-press, bench, db-press, cable-row, lat-pulldown, db-rdl, curl-seated, deadbug, calf | march, arm-circles, hinge-drill, body-squat |
| 16 | home-bodyweight-basics | body-squat, wall-pushup, knee-pushup, pushup, reverse-lunge, bridge, bird-dog, deadbug, prone-w-raise, body-calf-raise | march, arm-circles, hinge-drill, body-squat |
| 17 | home-dumbbell-builder | goblet, db-floor-press, bent-db-row, db-rdl, standing-db-press, db-split-squat, lateral, db-rear-fly, db-standing-curl, hammer, overhead-triceps, weighted-crunch | march, arm-circles, hinge-drill, body-squat |
| 18 | resistance-band-total-body | band-squat, band-rdl, band-row, band-chest-press, band-press, band-pull-apart, band-curl, band-triceps-extension, deadbug | march, arm-circles, hinge-drill, body-squat |
| 19 | home-hiit-fat-burner | step-jack, body-squat, mountain-climber, reverse-lunge, stepback-thrust, pushup, front-plank, march | march, arm-circles, hinge-drill, body-squat |
| 20 | pull-up-mastery | active-hang, scapular-pullup, foot-assisted-pullup, negative-pullup, strict-pullup, deadbug | march, arm-circles, hinge-drill, body-squat |
| 21 | push-up-progression | wall-pushup, knee-pushup, eccentric-pushup, pushup, close-pushup, archer-pushup, scapular-pushup, front-plank | march, arm-circles, hinge-drill, body-squat |
| 22 | kettlebell-conditioning | kb-deadlift, kb-swing, kb-goblet, kb-reverse-lunge, kb-suitcase-carry, side-plank | march, arm-circles, hinge-drill, body-squat |
| 23 | core-stability-back-health | deadbug, bird-dog, side-plank, front-plank, bridge, hinge-drill, walk | march, arm-circles, hinge-drill, body-squat |
| 24 | mobility-posture-fix | hip-flexor-stretch, open-book, wall-slide, chin-tuck, cat-camel, ankle-rock, prone-w-raise, scapular-pushup, arm-circles | march, arm-circles, hinge-drill, body-squat |
| 25 | outdoor-calisthenics | strict-pullup, park-row, park-incline-pushup, pushup, pike-pushup, park-stepup, body-split-squat, hanging-knee-raise, body-calf-raise | walk, easy-run, arm-circles, hinge-drill, body-squat |
| 26 | run-strength-hybrid | easy-run, tempo-run, body-squat, reverse-lunge, pushup, bridge, hamstring-walkout, front-plank | walk, easy-run, arm-circles, hinge-drill, body-squat |
| 27 | athletic-power | sprint, squat-jump, broad-jump, reverse-lunge, body-calf-raise, side-plank | walk, easy-run, arm-circles, hinge-drill, body-squat |
| 28 | stair-hill-conditioning | stair-climb, hill-run, park-stepup, walk, body-calf-raise | walk, easy-run, arm-circles, hinge-drill, body-squat |
| 29 | low-impact-strength | body-squat, wall-pushup, reverse-lunge, bridge, bird-dog, body-calf-raise, prone-w-raise, walk | march, arm-circles, hinge-drill, body-squat |
| 30 | summer-shred | body-squat, body-split-squat, pushup, close-pushup, hamstring-walkout, bridge, prone-w-raise, reverse-crunch, side-plank, step-jack, walk | march, arm-circles, hinge-drill, body-squat |

## Checks

Run `node --test tests/model.test.cjs`. The library checks validate record uniqueness, required instructions and search queries, blank video IDs, equipment IDs, alternative references, coverage of all 30 programs, and preservation of the original catalog's video metadata.

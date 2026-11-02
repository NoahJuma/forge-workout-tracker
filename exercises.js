"use strict";
// Single source for exercise definitions. The catalog in data.js is a derived
// compatibility view for the existing workout logger, not a second library.
globalThis.ForgeExerciseData = {
  "exercises": [
    {
      "id": "squat",
      "name": "Back Squat",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "barbell",
        "rack"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "adductors",
        "spinal-erectors"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Set rack safeties and place the bar across your upper back; grip evenly.",
        "Step back, brace your trunk and keep your whole foot planted.",
        "Bend hips and knees together to a depth you can control without losing balance.",
        "Drive the floor away and stand with hips and shoulders rising together."
      ],
      "commonMistakes": [
        "Relaxing your brace under load",
        "Heels lifting or knees collapsing inward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Back Squat exercise proper form tutorial",
      "homeAlternativeId": "body-squat",
      "outdoorAlternativeId": "body-squat",
      "equipmentLabel": "Barbell + Rack",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "R2dMsNhN3DE",
        "source": "https://www.muscleandstrength.com/exercises/squat.html",
        "title": "Barbell Back Squat Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "leg-press",
      "name": "Leg Press",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "plate-loaded-machine"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "adductors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Adjust the seat so your back and pelvis stay supported.",
        "Place feet evenly on the platform and release the safety handles.",
        "Lower until just before your pelvis rolls away from the pad.",
        "Press through the whole foot without forcefully locking your knees; engage the safeties before exiting."
      ],
      "commonMistakes": [
        "Lowering farther than your pelvis can control",
        "Letting knees collapse inward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Leg Press exercise proper form tutorial",
      "homeAlternativeId": "body-squat",
      "outdoorAlternativeId": "body-squat",
      "equipmentLabel": "Plate-loaded machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "sEM_zo9w2ss",
        "source": "https://www.muscleandstrength.com/exercises/45-degree-leg-press.html",
        "title": "Leg Press Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "leg-extension",
      "name": "Leg Extension",
      "group": "Legs",
      "pattern": "quads",
      "equipment": [
        "selectorized-machine"
      ],
      "primaryMuscles": [
        "quadriceps"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Align your knees with the machine pivot and place the shin pad above your ankles.",
        "Sit against the back pad and hold the handles.",
        "Straighten your knees smoothly within a comfortable range.",
        "Lower the pad slowly without letting the stack slam."
      ],
      "commonMistakes": [
        "Swinging the weight with your hips",
        "Using a painful knee range"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Leg Extension exercise proper form tutorial",
      "homeAlternativeId": "body-squat",
      "outdoorAlternativeId": "body-squat",
      "equipmentLabel": "Selectorized machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "0fl1RRgJ83I",
        "source": "https://www.muscleandstrength.com/exercises/leg-extension.html",
        "title": "Leg Extension Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "calf",
      "name": "Standing Calf Raise",
      "group": "Calves",
      "pattern": "calves",
      "equipment": [
        "selectorized-machine"
      ],
      "primaryMuscles": [
        "calves"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Adjust the shoulder pads and place the balls of your feet on the platform.",
        "Brace and keep a slight, steady knee bend.",
        "Raise your heels as high as you can control.",
        "Lower your heels slowly to a comfortable stretch."
      ],
      "commonMistakes": [
        "Bouncing at the bottom",
        "Rolling onto the outside edges of your feet"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Standing Calf Raise exercise proper form tutorial",
      "homeAlternativeId": "body-calf-raise",
      "outdoorAlternativeId": "body-calf-raise",
      "equipmentLabel": "Selectorized machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "30ygzcJw4v4",
        "source": "https://www.youtube.com/watch?v=30ygzcJw4v4",
        "title": "How To Use: Standing Calf Raise Machine  - AF ASHFIELD",
        "channel": "Anytime Fitness Ashfield",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "db-press",
      "name": "Seated DB Shoulder Press",
      "group": "Shoulders",
      "pattern": "press",
      "equipment": [
        "dumbbells",
        "bench"
      ],
      "primaryMuscles": [
        "anterior-deltoids"
      ],
      "secondaryMuscles": [
        "triceps",
        "lateral-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Sit against an upright bench with feet planted; bring dumbbells to shoulder level.",
        "Keep wrists above elbows and ribs stacked over your pelvis.",
        "Press upward through a comfortable shoulder range.",
        "Lower with control to the starting position."
      ],
      "commonMistakes": [
        "Overarching your lower back",
        "Letting wrists bend backward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Seated DB Shoulder Press exercise proper form tutorial",
      "homeAlternativeId": "standing-db-press",
      "outdoorAlternativeId": "pike-pushup",
      "equipmentLabel": "Dumbbells + Bench",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "FRxZ6wr5bpA",
        "source": "https://www.muscleandstrength.com/exercises/seated-dumbbell-press.html",
        "title": "Seated Dumbbell Press Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "lateral",
      "name": "Lateral Raise",
      "group": "Shoulders",
      "pattern": "delts",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "lateral-deltoids"
      ],
      "secondaryMuscles": [
        "upper-trapezius"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand tall with light dumbbells and softly bent elbows.",
        "Raise arms out and slightly forward until around shoulder height.",
        "Keep your neck relaxed and wrists aligned with forearms.",
        "Lower slowly without swinging."
      ],
      "commonMistakes": [
        "Using leg drive to throw the weights",
        "Shrugging through every repetition"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Lateral Raise exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "pike-pushup",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "3VcKaXpzqRo",
        "source": "https://www.youtube.com/watch?v=3VcKaXpzqRo",
        "title": "Lateral Raise technique demonstration",
        "channel": "ScottHermanFitness",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "rear-delt",
      "name": "Reverse Pec Deck",
      "group": "Shoulders",
      "pattern": "rear",
      "equipment": [
        "selectorized-machine"
      ],
      "primaryMuscles": [
        "posterior-deltoids"
      ],
      "secondaryMuscles": [
        "rhomboids",
        "middle-trapezius"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Set the seat so the handles are near shoulder height.",
        "Keep your chest supported and elbows softly bent.",
        "Open your arms without arching your back.",
        "Return slowly until you feel a comfortable rear-shoulder stretch."
      ],
      "commonMistakes": [
        "Lifting your chest off the pad",
        "Jerking the handles"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Reverse Pec Deck exercise proper form tutorial",
      "homeAlternativeId": "db-rear-fly",
      "outdoorAlternativeId": "prone-w-raise",
      "equipmentLabel": "Selectorized machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "Z84HkxGCBqQ",
        "source": "https://www.youtube.com/watch?v=Z84HkxGCBqQ",
        "title": "Exercise Technique 7: Reverse Pec Deck",
        "channel": "YouTube exercise demonstration",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "incline",
      "name": "Incline DB Press",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "dumbbells",
        "bench"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "anterior-deltoids",
        "triceps"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Set a modest bench incline and bring dumbbells over your chest.",
        "Keep feet planted and shoulder blades supported.",
        "Lower with elbows angled away from your torso at a comfortable angle.",
        "Press upward while keeping forearms near vertical."
      ],
      "commonMistakes": [
        "Flaring elbows into discomfort",
        "Bouncing out of the bottom"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Incline DB Press exercise proper form tutorial",
      "homeAlternativeId": "db-floor-press",
      "outdoorAlternativeId": "park-incline-pushup",
      "equipmentLabel": "Dumbbells + Bench",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "8nNi8jbbUPE",
        "source": "https://www.muscleandstrength.com/exercises/incline-dumbbell-bench-press.html",
        "title": "Incline Dumbbell Bench Press Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "bench",
      "name": "Flat DB Press",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "dumbbells",
        "bench"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Lie on a flat bench with feet planted and dumbbells over your chest.",
        "Keep wrists stacked above elbows and shoulder blades supported.",
        "Lower smoothly through a comfortable range.",
        "Press the dumbbells back up without crashing them together."
      ],
      "commonMistakes": [
        "Dropping the weights too deep",
        "Losing wrist alignment"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Flat DB Press exercise proper form tutorial",
      "homeAlternativeId": "db-floor-press",
      "outdoorAlternativeId": "pushup",
      "equipmentLabel": "Dumbbells + Bench",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "dGqI0Z5ul4k",
        "source": "https://www.muscleandstrength.com/exercises/dumbbell-bench-press.html",
        "title": "Dumbbell Bench Press Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "fly",
      "name": "Cable Fly",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "cable-machine"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "anterior-deltoids"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Set cables around chest height and take a balanced stance.",
        "Keep a small, fixed bend in your elbows.",
        "Bring your hands together in front of your chest in a hugging arc.",
        "Open slowly without pulling shoulders into discomfort."
      ],
      "commonMistakes": [
        "Turning the movement into a press",
        "Using a load that pulls you off balance"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Cable Fly exercise proper form tutorial",
      "homeAlternativeId": "band-chest-press",
      "outdoorAlternativeId": "pushup",
      "equipmentLabel": "Cable machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "FGF8MR9dmFs",
        "source": "https://www.youtube.com/watch?v=FGF8MR9dmFs",
        "title": "BUILD Your Chest With The Cable Chest Fly (Mind Muscle Connection!)",
        "channel": "YouTube exercise demonstration",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "pullup",
      "name": "Weighted Pull-up",
      "group": "Back",
      "pattern": "pull",
      "equipment": [
        "pull-up-bar",
        "free-weights"
      ],
      "primaryMuscles": [
        "lats"
      ],
      "secondaryMuscles": [
        "biceps",
        "lower-trapezius",
        "forearms"
      ],
      "difficulty": "advanced",
      "instructions": [
        "Secure added weight using purpose-built equipment; use a rated bar.",
        "Start from a controlled overhead hang with your trunk braced.",
        "Pull your elbows toward your ribs until your chin clears the bar without craning.",
        "Lower slowly to a controlled hang."
      ],
      "commonMistakes": [
        "Kipping or swinging under added load",
        "Adding weight before strict bodyweight pull-ups are controlled"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Weighted Pull-up exercise proper form tutorial",
      "homeAlternativeId": "strict-pullup",
      "outdoorAlternativeId": "strict-pullup",
      "equipmentLabel": "Pull-up bar + Added weight and secure loading equipment",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "2m58VKBEQuo",
        "source": "https://www.youtube.com/watch?v=2m58VKBEQuo",
        "title": "Weighted Pull-Up",
        "channel": "OPEX Fitness",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "chest-row",
      "name": "Chest-Supported Row",
      "group": "Back",
      "pattern": "row",
      "equipment": [
        "dumbbells",
        "bench"
      ],
      "primaryMuscles": [
        "rhomboids",
        "middle-trapezius",
        "lats"
      ],
      "secondaryMuscles": [
        "biceps",
        "posterior-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Lie chest-down on an inclined bench with feet supported.",
        "Let the dumbbells hang with palms facing inward.",
        "Pull elbows back while keeping your chest on the bench.",
        "Lower until your arms extend with control."
      ],
      "commonMistakes": [
        "Lifting your torso to move the weights",
        "Pulling shoulders toward your ears"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Chest-Supported Row exercise proper form tutorial",
      "homeAlternativeId": "bent-db-row",
      "outdoorAlternativeId": "park-row",
      "equipmentLabel": "Dumbbells + Bench",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "_b6ch2nIchk",
        "source": "https://www.youtube.com/watch?v=_b6ch2nIchk",
        "title": "How To Do The Chest Supported Dumbbell Row Correctly - Proper Form, Sets & Reps Tutorial",
        "channel": "YouTube exercise demonstration",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "pulldown-straight",
      "name": "Straight-Arm Pulldown",
      "group": "Back",
      "pattern": "pull",
      "equipment": [
        "cable-machine"
      ],
      "primaryMuscles": [
        "lats"
      ],
      "secondaryMuscles": [
        "triceps",
        "abdominals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand facing a high cable with a small hip hinge.",
        "Grip the attachment and maintain a soft elbow bend.",
        "Pull your arms toward your thighs while keeping ribs down.",
        "Return slowly to a comfortable overhead stretch."
      ],
      "commonMistakes": [
        "Bending elbows to turn it into a pushdown",
        "Arching your lower back"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Straight-Arm Pulldown exercise proper form tutorial",
      "homeAlternativeId": "band-row",
      "outdoorAlternativeId": "park-row",
      "equipmentLabel": "Cable machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "gDtXrJWPdlY",
        "source": "https://www.muscleandstrength.com/exercises/straight-arm-lat-pull-down.html",
        "title": "Straight Arm Lat Pull Down Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "leg-raise",
      "name": "Hanging Leg Raise",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "pull-up-bar"
      ],
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [
        "hip-flexors",
        "forearms"
      ],
      "difficulty": "advanced",
      "instructions": [
        "Use a rated bar and establish a still, controlled hang.",
        "Brace your trunk and lift your legs while gently curling your pelvis upward.",
        "Raise only as high as you can without swinging.",
        "Lower slowly and stop the set when you cannot control your pelvis."
      ],
      "commonMistakes": [
        "Swinging for momentum",
        "Only flexing the hips without controlling the pelvis"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Hanging Leg Raise exercise proper form tutorial",
      "homeAlternativeId": "reverse-crunch",
      "outdoorAlternativeId": "hanging-knee-raise",
      "equipmentLabel": "Pull-up bar",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "Yrtvs-nEnk0",
        "source": "https://www.youtube.com/watch?v=Yrtvs-nEnk0",
        "title": "Hanging Leg Raise technique demonstration",
        "channel": "PureGym",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "rdl",
      "name": "Romanian Deadlift",
      "group": "Legs",
      "pattern": "hinge",
      "equipment": [
        "barbell"
      ],
      "primaryMuscles": [
        "hamstrings",
        "glutes"
      ],
      "secondaryMuscles": [
        "spinal-erectors",
        "forearms"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Start standing with the bar close to your thighs and knees softly bent.",
        "Brace and push your hips back while keeping the bar close.",
        "Lower until you feel hamstring tension before your back position changes.",
        "Push through your feet to stand tall without leaning backward."
      ],
      "commonMistakes": [
        "Reaching the floor by rounding your back",
        "Turning the hinge into a deep squat"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Romanian Deadlift exercise proper form tutorial",
      "homeAlternativeId": "db-rdl",
      "outdoorAlternativeId": "hinge-drill",
      "equipmentLabel": "Barbell",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "CQp5I9KgdXI",
        "source": "https://www.youtube.com/watch?v=CQp5I9KgdXI",
        "title": "Romanian Deadlift Guide — Form, Muscles Worked, and Programming",
        "channel": "BarBend",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "hip-thrust",
      "name": "Hip Thrust",
      "group": "Legs",
      "pattern": "glutes",
      "equipment": [
        "barbell",
        "bench"
      ],
      "primaryMuscles": [
        "glutes"
      ],
      "secondaryMuscles": [
        "hamstrings",
        "abdominals"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Secure a stable bench and pad the bar across your hip crease.",
        "Support your upper back on the bench and plant feet evenly.",
        "Brace and lift your hips until your torso is roughly level.",
        "Lower under control while keeping the bar stable."
      ],
      "commonMistakes": [
        "Hyperextending your lower back at the top",
        "Using an unsecured bench"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Hip Thrust exercise proper form tutorial",
      "homeAlternativeId": "bridge",
      "outdoorAlternativeId": "bridge",
      "equipmentLabel": "Barbell + Bench",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "yTnWiBECvLk",
        "source": "https://www.youtube.com/watch?v=yTnWiBECvLk",
        "title": "How To: Hip Thrust For Beginners and Intermediates",
        "channel": "YouTube exercise demonstration",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "curl-seated",
      "name": "Seated Leg Curl",
      "group": "Legs",
      "pattern": "hamstrings",
      "equipment": [
        "selectorized-machine"
      ],
      "primaryMuscles": [
        "hamstrings"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Align knees with the pivot and secure the thigh and ankle pads.",
        "Keep your back and hips against the supports.",
        "Bend your knees to draw the pad under the seat.",
        "Return slowly without lifting your hips."
      ],
      "commonMistakes": [
        "Lifting your hips off the seat",
        "Snapping the knees straight"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Seated Leg Curl exercise proper form tutorial",
      "homeAlternativeId": "hamstring-walkout",
      "outdoorAlternativeId": "hamstring-walkout",
      "equipmentLabel": "Selectorized machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "_2Kd0d-JEUM",
        "source": "https://www.youtube.com/watch?v=_2Kd0d-JEUM",
        "title": "How to do a Seated Leg Curl  | Proper Form & Technique | NASM",
        "channel": "National Academy of Sports Medicine",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "calf-seated",
      "name": "Seated Calf Raise",
      "group": "Calves",
      "pattern": "calves",
      "equipment": [
        "plate-loaded-machine"
      ],
      "primaryMuscles": [
        "calves"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Set the thigh pads above your knees and place forefeet on the platform.",
        "Lift the weight to release the catch.",
        "Raise your heels smoothly with knees bent.",
        "Lower into a comfortable stretch and replace the catch before exiting."
      ],
      "commonMistakes": [
        "Bouncing the weight",
        "Lifting one heel faster than the other"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Seated Calf Raise exercise proper form tutorial",
      "homeAlternativeId": "body-calf-raise",
      "outdoorAlternativeId": "body-calf-raise",
      "equipmentLabel": "Plate-loaded machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "Yh5TXz99xwY",
        "source": "https://www.muscleandstrength.com/exercises/seated-calf-raise.html",
        "title": "Seated Calf Raise Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "pec-deck",
      "name": "Pec Deck",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "selectorized-machine"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "anterior-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Adjust the seat and start position so shoulders feel comfortable.",
        "Keep your back supported and elbows softly bent.",
        "Bring the handles or pads together in front of your chest.",
        "Return slowly without forcing a deep shoulder stretch."
      ],
      "commonMistakes": [
        "Letting shoulders roll forward under load",
        "Releasing the handles abruptly"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Pec Deck exercise proper form tutorial",
      "homeAlternativeId": "band-chest-press",
      "outdoorAlternativeId": "pushup",
      "equipmentLabel": "Selectorized machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "eGjt4lk6g34",
        "source": "https://www.youtube.com/watch?v=eGjt4lk6g34",
        "title": "Pec Deck technique demonstration",
        "channel": "PureGym",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "crunch",
      "name": "Cable Crunch",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "cable-machine"
      ],
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [],
      "difficulty": "intermediate",
      "instructions": [
        "Kneel facing a high cable with the rope held beside your head.",
        "Keep hips mostly still and gently curl your ribs toward your pelvis.",
        "Pause in the shortened position without pulling with your arms.",
        "Return slowly without overarching your lower back."
      ],
      "commonMistakes": [
        "Rocking the hips instead of curling the trunk",
        "Pulling the rope with your arms"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Cable Crunch exercise proper form tutorial",
      "homeAlternativeId": "body-crunch",
      "outdoorAlternativeId": "body-crunch",
      "equipmentLabel": "Cable machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "Mgg28KTFsgk",
        "source": "https://www.youtube.com/watch?v=Mgg28KTFsgk",
        "title": "How to: Cable Crunch",
        "channel": "Rachel Scheer",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "ohp",
      "name": "Overhead Press",
      "group": "Shoulders",
      "pattern": "press",
      "equipment": [
        "barbell",
        "rack"
      ],
      "primaryMuscles": [
        "anterior-deltoids"
      ],
      "secondaryMuscles": [
        "triceps",
        "lateral-deltoids",
        "abdominals"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Set the bar around upper-chest height in a rack.",
        "Grip evenly, brace and keep forearms near vertical.",
        "Press the bar overhead while moving your head out of its path.",
        "Lower to your upper chest without leaning backward."
      ],
      "commonMistakes": [
        "Excessive lower-back arch",
        "Pressing around the face in a large arc"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Overhead Press exercise proper form tutorial",
      "homeAlternativeId": "standing-db-press",
      "outdoorAlternativeId": "pike-pushup",
      "equipmentLabel": "Barbell + Rack",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "j7ULT6dznNc",
        "source": "https://www.muscleandstrength.com/exercises/military-press.html",
        "title": "Military Press (AKA Overhead Press) Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "face-pull",
      "name": "Face Pull",
      "group": "Shoulders",
      "pattern": "rear",
      "equipment": [
        "cable-machine"
      ],
      "primaryMuscles": [
        "posterior-deltoids",
        "middle-trapezius"
      ],
      "secondaryMuscles": [
        "external-rotators",
        "biceps"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Set a rope cable around face height and stand balanced.",
        "Pull the rope toward your forehead while separating your hands.",
        "Keep shoulders comfortable and ribs stacked over your pelvis.",
        "Return slowly without being pulled forward."
      ],
      "commonMistakes": [
        "Using torso momentum",
        "Forcing the shoulders into an uncomfortable position"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Face Pull exercise proper form tutorial",
      "homeAlternativeId": "band-pull-apart",
      "outdoorAlternativeId": "prone-w-raise",
      "equipmentLabel": "Cable machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "eTCBSFlCJ_s",
        "source": "https://www.youtube.com/watch?v=eTCBSFlCJ_s",
        "title": "How to do a Face Pull | Proper Form & Technique | NASM",
        "channel": "National Academy of Sports Medicine",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "lat-pulldown",
      "name": "Lat Pulldown",
      "group": "Back",
      "pattern": "pull",
      "equipment": [
        "cable-machine"
      ],
      "primaryMuscles": [
        "lats"
      ],
      "secondaryMuscles": [
        "biceps",
        "lower-trapezius"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Secure the thigh pad and grip the bar slightly wider than shoulders.",
        "Keep your chest comfortably lifted with a small, steady torso lean.",
        "Pull the bar toward the upper chest with elbows moving down.",
        "Let your arms lengthen overhead under control."
      ],
      "commonMistakes": [
        "Pulling behind the neck",
        "Swinging the torso to move the load"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Lat Pulldown exercise proper form tutorial",
      "homeAlternativeId": "strict-pullup",
      "outdoorAlternativeId": "strict-pullup",
      "equipmentLabel": "Cable machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "iKrKgWR9wbY",
        "source": "https://www.muscleandstrength.com/exercises/lat-pull-down.html",
        "title": "Lat Pull Down Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "cable-row",
      "name": "Cable Row",
      "group": "Back",
      "pattern": "row",
      "equipment": [
        "cable-machine"
      ],
      "primaryMuscles": [
        "lats",
        "rhomboids",
        "middle-trapezius"
      ],
      "secondaryMuscles": [
        "biceps",
        "posterior-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Sit with feet supported and knees softly bent.",
        "Brace and pull the handle toward your lower ribs.",
        "Keep your torso mostly still as elbows pass beside your body.",
        "Extend arms slowly without rounding your trunk to chase the cable."
      ],
      "commonMistakes": [
        "Rocking backward and forward",
        "Shrugging instead of rowing"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Cable Row exercise proper form tutorial",
      "homeAlternativeId": "band-row",
      "outdoorAlternativeId": "park-row",
      "equipmentLabel": "Cable machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "lJoozxC0Rns",
        "source": "https://www.youtube.com/watch?v=lJoozxC0Rns",
        "title": "Cable Row technique demonstration",
        "channel": "PureGym",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "ez-curl",
      "name": "EZ-Bar Curl",
      "group": "Arms",
      "pattern": "biceps",
      "equipment": [
        "barbell"
      ],
      "primaryMuscles": [
        "biceps"
      ],
      "secondaryMuscles": [
        "brachialis",
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand tall and grip the angled bar with palms facing upward.",
        "Keep upper arms near your sides and wrists steady.",
        "Curl the bar without leaning backward.",
        "Lower slowly until elbows are comfortably extended."
      ],
      "commonMistakes": [
        "Swinging from the hips",
        "Bending the wrists to finish repetitions"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "EZ-Bar Curl exercise proper form tutorial",
      "homeAlternativeId": "db-standing-curl",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Barbell",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "aEscWJ3dS3w",
        "source": "https://www.youtube.com/watch?v=aEscWJ3dS3w",
        "title": "EZ-Bar Curl technique demonstration",
        "channel": "ScottHermanFitness",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "pushdown",
      "name": "Triceps Pushdown",
      "group": "Arms",
      "pattern": "triceps",
      "equipment": [
        "cable-machine"
      ],
      "primaryMuscles": [
        "triceps"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Stand facing a high cable with elbows near your sides.",
        "Brace and straighten your elbows without moving your upper arms much.",
        "Finish with wrists aligned and shoulders relaxed.",
        "Return slowly while keeping the elbows near your ribs."
      ],
      "commonMistakes": [
        "Using body weight to push the attachment",
        "Letting elbows drift far forward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Triceps Pushdown exercise proper form tutorial",
      "homeAlternativeId": "band-triceps-extension",
      "outdoorAlternativeId": "close-pushup",
      "equipmentLabel": "Cable machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "LXkCrxn3caQ",
        "source": "https://www.youtube.com/watch?v=LXkCrxn3caQ",
        "title": "How To Do A Tricep Pushdown",
        "channel": "YouTube exercise demonstration",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "front-squat",
      "name": "Front Squat",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "barbell",
        "rack"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "upper-back",
        "abdominals"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Set rack safeties and rest the bar on the front of your shoulders.",
        "Use a comfortable front-rack grip and keep elbows lifted.",
        "Brace, sit down between your hips and keep your whole foot grounded.",
        "Stand without letting your elbows drop."
      ],
      "commonMistakes": [
        "Supporting the bar only with your hands",
        "Heels lifting as the torso collapses"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Front Squat exercise proper form tutorial",
      "homeAlternativeId": "goblet",
      "outdoorAlternativeId": "body-squat",
      "equipmentLabel": "Barbell + Rack",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "yr_8VuSqhmM",
        "source": "https://www.youtube.com/watch?v=yr_8VuSqhmM",
        "title": "How to do a Barbell Front Squat with Clean Position",
        "channel": "National Academy of Sports Medicine",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "lunge",
      "name": "Walking Lunge",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "hamstrings",
        "adductors"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Hold dumbbells at your sides and stand tall.",
        "Step forward into a stable stride and lower both knees with control.",
        "Push through the lead foot to step through into the next lunge.",
        "Alternate sides while keeping knees aligned with feet."
      ],
      "commonMistakes": [
        "Taking steps too narrow to balance",
        "Slamming the trailing knee into the ground"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Walking Lunge exercise proper form tutorial",
      "homeAlternativeId": "reverse-lunge",
      "outdoorAlternativeId": "reverse-lunge",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "uRSsOoZG9z8",
        "source": "https://www.muscleandstrength.com/exercises/dumbbell-walking-lunge.html",
        "title": "Dumbbell Walking Lunge Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "curl-lying",
      "name": "Lying Leg Curl",
      "group": "Legs",
      "pattern": "hamstrings",
      "equipment": [
        "selectorized-machine"
      ],
      "primaryMuscles": [
        "hamstrings"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Align knees near the machine pivot and position the roller above your heels.",
        "Lie face down with your pelvis supported.",
        "Curl your heels toward your hips without lifting your pelvis.",
        "Lower slowly to a comfortable knee extension."
      ],
      "commonMistakes": [
        "Arching the lower back to lift more weight",
        "Dropping the weight stack"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Lying Leg Curl exercise proper form tutorial",
      "homeAlternativeId": "hamstring-walkout",
      "outdoorAlternativeId": "hamstring-walkout",
      "equipmentLabel": "Selectorized machine",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "SbSNUXPRkc8",
        "source": "https://www.youtube.com/watch?v=SbSNUXPRkc8",
        "title": "How To Do A Lying Leg Curl (Prone Leg Curl)",
        "channel": "PureGym",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "hammer",
      "name": "Hammer Curl",
      "group": "Arms",
      "pattern": "biceps",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "brachialis",
        "biceps"
      ],
      "secondaryMuscles": [
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand with palms facing inward and elbows near your sides.",
        "Curl the dumbbells while keeping wrists neutral.",
        "Pause without lifting your shoulders.",
        "Lower slowly without swinging your trunk."
      ],
      "commonMistakes": [
        "Using body momentum",
        "Letting wrists fold inward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Hammer Curl exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "zC3nLlEvin4",
        "source": "https://www.youtube.com/watch?v=zC3nLlEvin4",
        "title": "Hammer Curl technique demonstration",
        "channel": "ScottHermanFitness",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "dips",
      "name": "Dips",
      "group": "Arms",
      "pattern": "triceps",
      "equipment": [
        "dip-bars"
      ],
      "primaryMuscles": [
        "triceps",
        "pectorals"
      ],
      "secondaryMuscles": [
        "anterior-deltoids"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Use fixed, rated parallel bars and support yourself with arms straight.",
        "Brace and lower by bending elbows through a comfortable shoulder range.",
        "Keep your body controlled without dropping into the bottom.",
        "Press back up smoothly; use an easier push-up variation if you cannot control the descent."
      ],
      "commonMistakes": [
        "Descending past a comfortable shoulder range",
        "Bouncing or swinging between repetitions"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Dips exercise proper form tutorial",
      "homeAlternativeId": "close-pushup",
      "outdoorAlternativeId": "close-pushup",
      "equipmentLabel": "Dip bars",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "2HYAeF6o7Bc",
        "title": "How To Do Chest Dips",
        "channel": "PureGym",
        "source": "https://www.puregym.com/exercises/chest/dips/",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "ab-wheel",
      "name": "Ab Wheel",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "ab-wheel"
      ],
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [
        "lats",
        "shoulders"
      ],
      "difficulty": "advanced",
      "instructions": [
        "Kneel on a comfortable surface with hands gripping the wheel.",
        "Brace and keep ribs down with your pelvis controlled.",
        "Roll forward only as far as you can without sagging at the lower back.",
        "Use your trunk to return to the start."
      ],
      "commonMistakes": [
        "Rolling farther than you can control",
        "Letting the lower back sag"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Ab Wheel exercise proper form tutorial",
      "homeAlternativeId": "front-plank",
      "outdoorAlternativeId": "front-plank",
      "equipmentLabel": "Ab wheel",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "PK4n7qJpOhM",
        "source": "https://www.youtube.com/watch?v=PK4n7qJpOhM",
        "title": "Ab Wheel Rollouts (Beginner to Advanced Progressions)",
        "channel": "YouTube exercise demonstration",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "goblet",
      "name": "Goblet Squat",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "abdominals",
        "adductors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Hold one dumbbell securely at chest height.",
        "Brace and bend hips and knees while keeping the whole foot planted.",
        "Lower to a depth you can control with knees following your toes.",
        "Push through your feet to stand."
      ],
      "commonMistakes": [
        "Dropping the chest to chase depth",
        "Lifting the heels"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Goblet Squat exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "body-squat",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "nfX7IFK9UNI",
        "source": "https://www.youtube.com/watch?v=nfX7IFK9UNI",
        "title": "Goblet Squat technique demonstration",
        "channel": "National Academy of Sports Medicine",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "db-rdl",
      "name": "Dumbbell Romanian Deadlift",
      "group": "Legs",
      "pattern": "hinge",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "hamstrings",
        "glutes"
      ],
      "secondaryMuscles": [
        "spinal-erectors",
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand with dumbbells beside the front of your thighs and knees slightly bent.",
        "Push your hips back while keeping the weights close to your legs.",
        "Stop when hamstrings are stretched before your back position changes.",
        "Drive hips forward to stand without leaning back."
      ],
      "commonMistakes": [
        "Rounding to lower the weights farther",
        "Bending knees into a squat"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Dumbbell Romanian Deadlift exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "hinge-drill",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "QFbZevA7dps",
        "source": "https://www.youtube.com/watch?v=QFbZevA7dps",
        "title": "How to do a Dumbbell Romanian Deadlift | Proper Form & Technique | NASM",
        "channel": "National Academy of Sports Medicine",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "db-row",
      "name": "One-Arm Dumbbell Row",
      "group": "Back",
      "pattern": "row",
      "equipment": [
        "dumbbells",
        "bench"
      ],
      "primaryMuscles": [
        "lats",
        "rhomboids"
      ],
      "secondaryMuscles": [
        "biceps",
        "posterior-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Support a hand and knee on a stable bench with the other foot planted.",
        "Brace your torso and let the dumbbell hang below the working shoulder.",
        "Pull the elbow toward your hip without rotating your trunk.",
        "Lower slowly and repeat on the other side."
      ],
      "commonMistakes": [
        "Twisting the torso to lift the weight",
        "Shrugging the working shoulder"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "One-Arm Dumbbell Row exercise proper form tutorial",
      "homeAlternativeId": "bent-db-row",
      "outdoorAlternativeId": "park-row",
      "equipmentLabel": "Dumbbells + Bench",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "YZgVEy6cmaY",
        "source": "https://www.muscleandstrength.com/exercises/one-arm-dumbbell-row.html",
        "title": "One Arm Dumbbell Row Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "pushup",
      "name": "Push-up",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids",
        "abdominals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Place hands a little wider than shoulders and extend your legs.",
        "Brace to keep your head, torso and hips moving as one unit.",
        "Bend elbows to lower your chest through a comfortable range.",
        "Push the floor away without letting your hips sag."
      ],
      "commonMistakes": [
        "Sagging or piking the hips",
        "Flaring elbows into discomfort"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Push-up exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "WDIpL0pjun0",
        "source": "https://www.youtube.com/watch?v=WDIpL0pjun0",
        "title": "How to do a Push-Up | Proper Form & Technique | NASM",
        "channel": "National Academy of Sports Medicine",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "split-squat",
      "name": "Bulgarian Split Squat",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "dumbbells",
        "bench"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "adductors",
        "hamstrings"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Rest the top of your rear foot on a stable low bench and hold dumbbells.",
        "Place the lead foot far enough forward to balance comfortably.",
        "Lower straight down with the front knee tracking over the foot.",
        "Push through the front foot; finish one side before switching."
      ],
      "commonMistakes": [
        "Using a bench too high to control",
        "Driving mainly through the rear leg"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Bulgarian Split Squat exercise proper form tutorial",
      "homeAlternativeId": "db-split-squat",
      "outdoorAlternativeId": "body-split-squat",
      "equipmentLabel": "Dumbbells + Bench",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "hbw7hdyOpq0",
        "source": "https://www.youtube.com/watch?v=hbw7hdyOpq0",
        "title": "Bulgarian Split Squat technique demonstration",
        "channel": "National Academy of Sports Medicine",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "body-squat",
      "name": "Bodyweight Squat",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "adductors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand with feet at a comfortable width and arms forward for balance.",
        "Bend hips and knees, keeping your whole foot grounded.",
        "Lower only as far as you can control without pain or loss of balance.",
        "Stand tall with knees following the direction of your toes."
      ],
      "commonMistakes": [
        "Heels lifting",
        "Collapsing the knees inward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Bodyweight Squat exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "0PboqagHAjs",
        "source": "https://www.muscleandstrength.com/exercises/bodyweight-squat.html",
        "title": "Prisoner Squat Video Exercise Guide",
        "channel": "Muscle & Strength",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "bridge",
      "name": "Glute Bridge",
      "group": "Legs",
      "pattern": "glutes",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "glutes"
      ],
      "secondaryMuscles": [
        "hamstrings",
        "abdominals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Lie on your back with knees bent and feet flat.",
        "Gently brace and press through both feet to lift your hips.",
        "Stop when hips, shoulders and knees form a comfortable line.",
        "Lower slowly without arching the lower back."
      ],
      "commonMistakes": [
        "Lifting by arching the lower back",
        "Pushing only through the toes"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Glute Bridge exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "tqp5XQPpTxY",
        "source": "https://www.youtube.com/watch?v=tqp5XQPpTxY",
        "title": "How To Do A Glute Bridge",
        "channel": "PureGym",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "reverse-lunge",
      "name": "Reverse Lunge",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "adductors",
        "hamstrings"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand tall with feet about hip width apart.",
        "Step one foot back and lower both knees with control.",
        "Keep the lead knee tracking over the lead foot.",
        "Push through the front foot to return; alternate sides."
      ],
      "commonMistakes": [
        "Stepping directly behind the other foot",
        "Dropping quickly onto the back knee"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Reverse Lunge exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "0SHCQLa-gms",
        "source": "https://www.youtube.com/watch?v=0SHCQLa-gms",
        "title": "How to Do a Bodyweight Reverse Lunge",
        "channel": "YouTube exercise demonstration",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "deadbug",
      "name": "Dead Bug",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [
        "hip-flexors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Lie on your back with hips and knees bent and arms pointing upward.",
        "Gently brace so your ribs stay down and lower back stays comfortable.",
        "Slowly extend opposite arm and leg only as far as you can control.",
        "Return and alternate sides while breathing steadily."
      ],
      "commonMistakes": [
        "Arching the back as the leg extends",
        "Holding your breath through the whole set"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Dead Bug exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "bxn9FBrt4-A",
        "source": "https://www.youtube.com/watch?v=bxn9FBrt4-A",
        "title": "How to do a Dead Bug | Proper Form & Technique | NASM",
        "channel": "National Academy of Sports Medicine",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "db-curl",
      "name": "Concentration Curl",
      "group": "Arms",
      "pattern": "biceps",
      "equipment": [
        "dumbbells",
        "bench"
      ],
      "primaryMuscles": [
        "biceps"
      ],
      "secondaryMuscles": [
        "brachialis",
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Sit on a stable bench and rest the back of your upper arm against your inner thigh.",
        "Keep your shoulder still and wrist aligned.",
        "Curl the dumbbell toward your shoulder without leaning backward.",
        "Lower slowly and repeat on the other arm."
      ],
      "commonMistakes": [
        "Swinging the trunk",
        "Lifting the upper arm off the thigh"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Concentration Curl exercise proper form tutorial",
      "homeAlternativeId": "db-standing-curl",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Dumbbells + Bench",
      "trackingUnit": "reps",
      "sets": 3,
      "min": 8,
      "max": 12,
      "legacyVideo": {
        "id": "llD6MImgqe8",
        "title": "How to do a concentration curl",
        "channel": "PureGym",
        "source": "https://www.youtube.com/watch?v=llD6MImgqe8",
        "verifiedAt": "2026-10-31"
      }
    },
    {
      "id": "barbell-bench",
      "name": "Barbell Bench Press",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "barbell",
        "bench",
        "rack"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Set rack safeties or arrange a competent spotter before loading.",
        "Lie with feet planted and grip the bar evenly with wrists above forearms.",
        "Unrack, brace and lower the bar toward the lower chest with control.",
        "Press upward without bouncing; guide the bar fully into the hooks before releasing."
      ],
      "commonMistakes": [
        "Benching heavy without safeties or a spotter",
        "Bouncing the bar off your chest"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Barbell Bench Press exercise proper form tutorial",
      "homeAlternativeId": "db-floor-press",
      "outdoorAlternativeId": "pushup",
      "equipmentLabel": "Barbell + Bench + Rack",
      "trackingUnit": "reps"
    },
    {
      "id": "deadlift",
      "name": "Conventional Deadlift",
      "group": "Legs",
      "pattern": "hinge",
      "equipment": [
        "barbell"
      ],
      "primaryMuscles": [
        "glutes",
        "hamstrings"
      ],
      "secondaryMuscles": [
        "quadriceps",
        "spinal-erectors",
        "lats",
        "forearms"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Place a bar with full-size plates over the middle of your feet.",
        "Hinge down, grip outside your knees, brace and pull slack from the bar.",
        "Push through the floor, keeping the bar close as hips and shoulders rise together.",
        "Stand tall without leaning back, then hinge and bend knees to return the bar with control."
      ],
      "commonMistakes": [
        "Jerking the bar from the floor",
        "Letting the bar drift forward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Conventional Deadlift exercise proper form tutorial",
      "homeAlternativeId": "kb-deadlift",
      "outdoorAlternativeId": "hinge-drill",
      "equipmentLabel": "Barbell",
      "trackingUnit": "reps"
    },
    {
      "id": "barbell-row",
      "name": "Bent-Over Barbell Row",
      "group": "Back",
      "pattern": "row",
      "equipment": [
        "barbell"
      ],
      "primaryMuscles": [
        "lats",
        "rhomboids",
        "middle-trapezius"
      ],
      "secondaryMuscles": [
        "biceps",
        "spinal-erectors"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Hold the bar and hinge forward with knees softly bent.",
        "Brace and keep your torso angle steady.",
        "Pull the bar toward your lower ribs with elbows moving back.",
        "Lower the bar until arms extend without rounding your trunk."
      ],
      "commonMistakes": [
        "Standing up to finish each repetition",
        "Bouncing the bar with your hips"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Bent-Over Barbell Row exercise proper form tutorial",
      "homeAlternativeId": "bent-db-row",
      "outdoorAlternativeId": "park-row",
      "equipmentLabel": "Barbell",
      "trackingUnit": "reps"
    },
    {
      "id": "cable-lateral",
      "name": "Single-Arm Cable Lateral Raise",
      "group": "Shoulders",
      "pattern": "delts",
      "equipment": [
        "cable-machine"
      ],
      "primaryMuscles": [
        "lateral-deltoids"
      ],
      "secondaryMuscles": [
        "upper-trapezius"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Stand side-on to a low pulley holding the handle in the outside hand.",
        "Keep a soft elbow bend and stable torso.",
        "Raise the arm out and slightly forward toward shoulder height.",
        "Lower with control and repeat on the other side."
      ],
      "commonMistakes": [
        "Leaning sharply to move the load",
        "Shrugging before raising the arm"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Single-Arm Cable Lateral Raise exercise proper form tutorial",
      "homeAlternativeId": "lateral",
      "outdoorAlternativeId": "pike-pushup",
      "equipmentLabel": "Cable machine",
      "trackingUnit": "reps"
    },
    {
      "id": "db-rear-fly",
      "name": "Bent-Over Dumbbell Rear Delt Fly",
      "group": "Shoulders",
      "pattern": "rear",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "posterior-deltoids"
      ],
      "secondaryMuscles": [
        "middle-trapezius",
        "rhomboids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Hinge forward with knees softly bent and light dumbbells hanging.",
        "Brace your torso and keep a small elbow bend.",
        "Open your arms out to the sides without lifting your chest.",
        "Lower slowly while keeping your neck relaxed."
      ],
      "commonMistakes": [
        "Using a heavy load that forces jerking",
        "Arching upward with every repetition"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Bent-Over Dumbbell Rear Delt Fly exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "prone-w-raise",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps"
    },
    {
      "id": "overhead-triceps",
      "name": "Dumbbell Overhead Triceps Extension",
      "group": "Arms",
      "pattern": "triceps",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "triceps"
      ],
      "secondaryMuscles": [],
      "difficulty": "intermediate",
      "instructions": [
        "Hold one dumbbell securely with both hands overhead.",
        "Keep ribs down and upper arms in a comfortable position near your head.",
        "Bend elbows to lower the weight behind your head.",
        "Straighten elbows without arching your back."
      ],
      "commonMistakes": [
        "Flaring ribs to lift more weight",
        "Forcing an uncomfortable shoulder position"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Dumbbell Overhead Triceps Extension exercise proper form tutorial",
      "homeAlternativeId": "band-triceps-extension",
      "outdoorAlternativeId": "close-pushup",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps"
    },
    {
      "id": "weighted-crunch",
      "name": "Dumbbell Weighted Floor Crunch",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Lie on your back with knees bent and a light dumbbell held securely against your chest.",
        "Gently curl your ribs toward your pelvis to lift the shoulder blades.",
        "Keep your neck relaxed and hips on the floor.",
        "Lower slowly without turning the movement into a full sit-up."
      ],
      "commonMistakes": [
        "Pulling your head forward",
        "Holding a loose weight over your face"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Dumbbell Weighted Floor Crunch exercise proper form tutorial",
      "homeAlternativeId": "body-crunch",
      "outdoorAlternativeId": "body-crunch",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps"
    },
    {
      "id": "pallof-press",
      "name": "Cable Pallof Press",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "cable-machine"
      ],
      "primaryMuscles": [
        "obliques",
        "abdominals"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Stand side-on to a chest-height cable with feet planted.",
        "Hold the handle at your sternum and brace against rotation.",
        "Press your hands forward while keeping hips and shoulders square.",
        "Bring hands back slowly and switch sides."
      ],
      "commonMistakes": [
        "Rotating toward the cable",
        "Holding your breath throughout"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Cable Pallof Press exercise proper form tutorial",
      "homeAlternativeId": "side-plank",
      "outdoorAlternativeId": "side-plank",
      "equipmentLabel": "Cable machine",
      "trackingUnit": "reps"
    },
    {
      "id": "strict-pullup",
      "name": "Strict Pull-up",
      "group": "Back",
      "pattern": "pull",
      "equipment": [
        "pull-up-bar"
      ],
      "primaryMuscles": [
        "lats"
      ],
      "secondaryMuscles": [
        "biceps",
        "forearms",
        "lower-trapezius"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Use a securely mounted, rated bar and grip around shoulder width.",
        "Start in a controlled hang and brace to limit swinging.",
        "Pull elbows toward your ribs until your chin clears the bar without craning.",
        "Lower slowly to a comfortable overhead position."
      ],
      "commonMistakes": [
        "Kipping to reach the top",
        "Cutting every repetition short"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Strict Pull-up exercise proper form tutorial",
      "homeAlternativeId": "foot-assisted-pullup",
      "outdoorAlternativeId": "park-row",
      "equipmentLabel": "Pull-up bar",
      "trackingUnit": "reps"
    },
    {
      "id": "foot-assisted-pullup",
      "name": "Foot-Assisted Low-Bar Pull-up",
      "group": "Back",
      "pattern": "pull",
      "equipment": [
        "pull-up-bar"
      ],
      "primaryMuscles": [
        "lats"
      ],
      "secondaryMuscles": [
        "biceps",
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Use only a rated bar mounted low enough to keep your feet on the floor.",
        "Grip overhead, bend your knees and keep feet under you.",
        "Pull upward while using only as much leg assistance as needed.",
        "Lower slowly; if your bar is too high, use hangs and scapular pull-ups instead."
      ],
      "commonMistakes": [
        "Using an unsecured or unsuitable bar",
        "Pushing so hard with the legs that arms do no work"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Foot-Assisted Low-Bar Pull-up exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "park-row",
      "equipmentLabel": "Pull-up bar",
      "trackingUnit": "reps"
    },
    {
      "id": "negative-pullup",
      "name": "Eccentric Pull-up from a Low Bar",
      "group": "Back",
      "pattern": "pull",
      "equipment": [
        "pull-up-bar"
      ],
      "primaryMuscles": [
        "lats"
      ],
      "secondaryMuscles": [
        "biceps",
        "forearms"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Use a rated low bar that lets you reach the top with feet on the ground.",
        "Use your legs to bring your chin above the bar without jumping onto a high doorway bar.",
        "Lift your feet and lower slowly for the prescribed time.",
        "Put your feet down and reset; stop when you cannot control the descent."
      ],
      "commonMistakes": [
        "Dropping suddenly from the top",
        "Climbing furniture to reach an unsuitable bar"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Eccentric Pull-up from a Low Bar exercise proper form tutorial",
      "homeAlternativeId": "foot-assisted-pullup",
      "outdoorAlternativeId": "foot-assisted-pullup",
      "equipmentLabel": "Pull-up bar",
      "trackingUnit": "reps"
    },
    {
      "id": "scapular-pullup",
      "name": "Scapular Pull-up",
      "group": "Back",
      "pattern": "pull",
      "equipment": [
        "pull-up-bar"
      ],
      "primaryMuscles": [
        "lower-trapezius",
        "lats"
      ],
      "secondaryMuscles": [
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Take a controlled hang from a rated bar with arms straight.",
        "Gently draw shoulders away from your ears to raise your torso a small amount.",
        "Keep elbows straight and avoid swinging.",
        "Return slowly to the starting hang."
      ],
      "commonMistakes": [
        "Bending elbows into a full pull-up",
        "Shrugging and dropping abruptly"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Scapular Pull-up exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Pull-up bar",
      "trackingUnit": "reps"
    },
    {
      "id": "active-hang",
      "name": "Supported Bar Hang",
      "group": "Back",
      "pattern": "pull",
      "equipment": [
        "pull-up-bar"
      ],
      "primaryMuscles": [
        "forearms"
      ],
      "secondaryMuscles": [
        "lats",
        "lower-trapezius"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Use a secure bar you can reach safely from the floor.",
        "Grip firmly and let your feet take some weight if needed.",
        "Hold with a comfortable overhead shoulder position and steady breathing.",
        "Put feet down before releasing; stop before grip fails."
      ],
      "commonMistakes": [
        "Hanging through shoulder pain",
        "Dropping unexpectedly when your grip fails"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Supported Bar Hang exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Pull-up bar",
      "trackingUnit": "seconds"
    },
    {
      "id": "standing-db-press",
      "name": "Standing Dumbbell Shoulder Press",
      "group": "Shoulders",
      "pattern": "press",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "anterior-deltoids"
      ],
      "secondaryMuscles": [
        "triceps",
        "lateral-deltoids",
        "abdominals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand with dumbbells at shoulder level and feet stable.",
        "Brace and keep ribs stacked over your pelvis.",
        "Press upward through a comfortable range without leg drive.",
        "Lower slowly to shoulder level."
      ],
      "commonMistakes": [
        "Leaning backward to finish the press",
        "Bouncing the knees to move the weights"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Standing Dumbbell Shoulder Press exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "pike-pushup",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps"
    },
    {
      "id": "db-floor-press",
      "name": "Dumbbell Floor Press",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Sit with dumbbells close, then lie back with knees bent and feet flat.",
        "Position dumbbells above your chest with wrists stacked over elbows.",
        "Lower until upper arms gently touch the floor without bouncing.",
        "Press upward and lower the weights safely at the end."
      ],
      "commonMistakes": [
        "Slamming elbows into the floor",
        "Letting wrists bend backward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Dumbbell Floor Press exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "pushup",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps"
    },
    {
      "id": "bent-db-row",
      "name": "Unsupported Bent-Over Dumbbell Row",
      "group": "Back",
      "pattern": "row",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "lats",
        "rhomboids",
        "middle-trapezius"
      ],
      "secondaryMuscles": [
        "biceps",
        "spinal-erectors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand with dumbbells and hinge forward with knees softly bent.",
        "Brace and hold a steady torso position.",
        "Pull both elbows toward your hips without twisting.",
        "Lower slowly to extended arms."
      ],
      "commonMistakes": [
        "Jerking your chest upward",
        "Rounding the lower back as you fatigue"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Unsupported Bent-Over Dumbbell Row exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "park-row",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps"
    },
    {
      "id": "db-standing-curl",
      "name": "Standing Dumbbell Curl",
      "group": "Arms",
      "pattern": "biceps",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "biceps"
      ],
      "secondaryMuscles": [
        "brachialis",
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand with palms facing forward and elbows near your sides.",
        "Curl the dumbbells without moving your upper arms much.",
        "Keep wrists in line with forearms.",
        "Lower slowly without swinging."
      ],
      "commonMistakes": [
        "Leaning back for momentum",
        "Moving elbows forward to shorten the lift"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Standing Dumbbell Curl exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps"
    },
    {
      "id": "db-split-squat",
      "name": "Dumbbell Split Squat",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "dumbbells"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "adductors",
        "hamstrings"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Hold dumbbells at your sides and take a stationary split stance with both feet on the floor.",
        "Lower both knees while keeping most pressure through the front foot.",
        "Keep your trunk controlled and lead knee aligned with the foot.",
        "Stand and finish one side before switching."
      ],
      "commonMistakes": [
        "Balancing on an excessively narrow stance",
        "Bouncing the rear knee off the floor"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Dumbbell Split Squat exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "body-split-squat",
      "equipmentLabel": "Dumbbells",
      "trackingUnit": "reps"
    },
    {
      "id": "body-split-squat",
      "name": "Bodyweight Split Squat",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "adductors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Take a stable split stance with both feet on the floor.",
        "Bend both knees and lower your hips under control.",
        "Keep the front foot grounded and the lead knee following your toes.",
        "Stand and repeat before switching sides."
      ],
      "commonMistakes": [
        "Using a tightrope stance",
        "Dropping too quickly"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Bodyweight Split Squat exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "wall-pushup",
      "name": "Wall Push-up",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand facing a solid wall and place hands around chest height.",
        "Step back enough to create a manageable lean while keeping feet planted.",
        "Bend elbows and bring your chest toward the wall as one body unit.",
        "Push back without shrugging."
      ],
      "commonMistakes": [
        "Letting hips bend separately from the torso",
        "Using a slippery surface"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Wall Push-up exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "knee-pushup",
      "name": "Knee Push-up",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids",
        "abdominals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Place hands on the floor and rest knees on a comfortable surface.",
        "Brace so shoulders, hips and knees form a straight line.",
        "Bend elbows to lower the chest without folding at the hips.",
        "Press back up with the trunk moving as one unit."
      ],
      "commonMistakes": [
        "Leaving hips behind while only moving the chest",
        "Letting the lower back sag"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Knee Push-up exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "eccentric-pushup",
      "name": "Slow Eccentric Push-up",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids",
        "abdominals"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Start in a full push-up position with your trunk braced.",
        "Lower your whole body over the prescribed number of seconds.",
        "Place knees down before you lose control.",
        "Use your knees to return to the top and reset for the next repetition."
      ],
      "commonMistakes": [
        "Collapsing at the end of the descent",
        "Continuing after you cannot maintain alignment"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Slow Eccentric Push-up exercise proper form tutorial",
      "homeAlternativeId": "knee-pushup",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "close-pushup",
      "name": "Close-Grip Push-up",
      "group": "Arms",
      "pattern": "triceps",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "triceps",
        "pectorals"
      ],
      "secondaryMuscles": [
        "anterior-deltoids",
        "abdominals"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Take a push-up position with hands slightly inside shoulder width.",
        "Keep wrists comfortable and elbows moving close to your sides.",
        "Lower your chest as your trunk stays braced.",
        "Press up without sagging; use knees if needed."
      ],
      "commonMistakes": [
        "Forcing hands into an uncomfortable diamond position",
        "Flaring elbows suddenly"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Close-Grip Push-up exercise proper form tutorial",
      "homeAlternativeId": "knee-pushup",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "pike-pushup",
      "name": "Pike Push-up",
      "group": "Shoulders",
      "pattern": "press",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "anterior-deltoids"
      ],
      "secondaryMuscles": [
        "triceps",
        "lateral-deltoids"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Start on hands and feet with hips raised and knees softly bent if needed.",
        "Bend elbows and bring your head toward the floor slightly in front of your hands.",
        "Stop before your head touches or you lose control.",
        "Press away to the starting position."
      ],
      "commonMistakes": [
        "Loading your head or neck on the floor",
        "Flaring elbows into discomfort"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Pike Push-up exercise proper form tutorial",
      "homeAlternativeId": "wall-pushup",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "archer-pushup",
      "name": "Archer Push-up",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids",
        "abdominals"
      ],
      "difficulty": "advanced",
      "instructions": [
        "Take a wide hand position with your trunk braced.",
        "Shift toward one hand while bending that elbow and keeping the other arm relatively straight.",
        "Lower only through a range you can control without twisting.",
        "Push back to the center and alternate sides."
      ],
      "commonMistakes": [
        "Rotating the trunk to avoid the working arm",
        "Forcing excessive wrist or shoulder range"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Archer Push-up exercise proper form tutorial",
      "homeAlternativeId": "pushup",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "front-plank",
      "name": "Forearm Plank",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [
        "glutes",
        "shoulders"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Place elbows under shoulders and extend your legs.",
        "Brace gently and keep ribs and pelvis aligned.",
        "Hold without sagging or lifting your hips, breathing steadily.",
        "Stop the hold when alignment starts to change."
      ],
      "commonMistakes": [
        "Holding your breath",
        "Letting the lower back sag"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Forearm Plank exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "seconds"
    },
    {
      "id": "side-plank",
      "name": "Side Plank",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "obliques"
      ],
      "secondaryMuscles": [
        "gluteus-medius",
        "shoulders"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Lie on your side with the elbow below the shoulder.",
        "Lift your hips, using bent knees for an easier version or stacked feet for a harder one.",
        "Keep hips and shoulders facing forward and breathe steadily.",
        "Lower with control and switch sides."
      ],
      "commonMistakes": [
        "Letting the hips rotate toward the floor",
        "Shrugging into the supporting shoulder"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Side Plank exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "seconds"
    },
    {
      "id": "bird-dog",
      "name": "Bird Dog",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "abdominals",
        "spinal-erectors"
      ],
      "secondaryMuscles": [
        "glutes",
        "shoulders"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Start on hands and knees with a comfortable, steady back position.",
        "Brace gently and reach one arm and the opposite leg away.",
        "Keep the pelvis level and move only as far as you can without twisting.",
        "Return slowly and alternate sides."
      ],
      "commonMistakes": [
        "Lifting the leg by arching the back",
        "Rotating the pelvis"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Bird Dog exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "body-crunch",
      "name": "Floor Crunch",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Lie on your back with knees bent and feet flat.",
        "Keep hands across your chest or lightly beside your head.",
        "Curl ribs toward your pelvis until shoulder blades lift slightly.",
        "Lower slowly without pulling your neck."
      ],
      "commonMistakes": [
        "Yanking the head forward",
        "Turning the movement into a swinging sit-up"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Floor Crunch exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "reverse-crunch",
      "name": "Reverse Crunch",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [
        "hip-flexors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Lie on your back with knees bent above your hips.",
        "Gently curl the pelvis to lift your tailbone a small distance.",
        "Keep shoulders relaxed and avoid throwing your legs.",
        "Lower slowly until the pelvis rests again."
      ],
      "commonMistakes": [
        "Swinging the legs to gain momentum",
        "Lifting the pelvis too high to control"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Reverse Crunch exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "hanging-knee-raise",
      "name": "Hanging Knee Raise",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "pull-up-bar"
      ],
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [
        "hip-flexors",
        "forearms"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Begin in a still, controlled hang from a secure bar.",
        "Draw knees upward while gently curling the pelvis toward the ribs.",
        "Pause before you start swinging.",
        "Lower slowly to the start."
      ],
      "commonMistakes": [
        "Swinging between repetitions",
        "Rushing the lowering phase"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Hanging Knee Raise exercise proper form tutorial",
      "homeAlternativeId": "reverse-crunch",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Pull-up bar",
      "trackingUnit": "reps"
    },
    {
      "id": "hamstring-walkout",
      "name": "Glute Bridge Hamstring Walkout",
      "group": "Legs",
      "pattern": "hamstrings",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "hamstrings"
      ],
      "secondaryMuscles": [
        "glutes",
        "abdominals"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Start in a glute bridge with heels planted.",
        "Take small alternating heel steps away while keeping hips raised only as far as you can control.",
        "Stop before the back arches or the hamstrings cramp.",
        "Walk heels back and lower your hips."
      ],
      "commonMistakes": [
        "Taking steps too large to control",
        "Letting the lower back take over"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Glute Bridge Hamstring Walkout exercise proper form tutorial",
      "homeAlternativeId": "bridge",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "body-calf-raise",
      "name": "Bodyweight Calf Raise",
      "group": "Calves",
      "pattern": "calves",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "calves"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Stand with feet hip width apart on flat ground.",
        "Keep knees softly extended and spread pressure across the forefoot.",
        "Rise onto the balls of your feet with control.",
        "Lower heels slowly without bouncing."
      ],
      "commonMistakes": [
        "Rolling the ankles outward",
        "Rushing through a very small range"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Bodyweight Calf Raise exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "prone-w-raise",
      "name": "Prone W Raise",
      "group": "Shoulders",
      "pattern": "rear",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "posterior-deltoids",
        "middle-trapezius"
      ],
      "secondaryMuscles": [
        "external-rotators"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Lie face down with forehead supported comfortably and arms shaped like a W.",
        "Keep your neck relaxed and gently lift hands and elbows a small distance.",
        "Draw shoulder blades together without arching the lower back.",
        "Lower slowly and breathe normally."
      ],
      "commonMistakes": [
        "Lifting the head to look forward",
        "Arching the trunk instead of moving the shoulders"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Prone W Raise exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "band-row",
      "name": "Seated Resistance Band Row Around Feet",
      "group": "Back",
      "pattern": "row",
      "equipment": [
        "resistance-bands"
      ],
      "primaryMuscles": [
        "lats",
        "rhomboids",
        "middle-trapezius"
      ],
      "secondaryMuscles": [
        "biceps",
        "posterior-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Inspect a long band and loop its middle securely around the soles of both shoes, keeping toes up.",
        "Sit tall with knees slightly bent and grip both ends with a little tension.",
        "Pull elbows toward your ribs without leaning backward.",
        "Extend arms slowly; keep the band secured to prevent recoil."
      ],
      "commonMistakes": [
        "Looping the band only around the tips of your toes",
        "Using a damaged band or overstretching it"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Seated Resistance Band Row Around Feet exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "park-row",
      "equipmentLabel": "Resistance bands",
      "trackingUnit": "reps"
    },
    {
      "id": "band-chest-press",
      "name": "Resistance Band Chest Press Around Back",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "resistance-bands"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Place an intact long band across your upper back below shoulder level, holding an end in each hand.",
        "Stand stable with hands beside your chest and wrists aligned.",
        "Press forward without flaring elbows into discomfort.",
        "Return slowly while keeping the band below your neck."
      ],
      "commonMistakes": [
        "Letting the band ride against the neck",
        "Releasing the band under tension"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Resistance Band Chest Press Around Back exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "pushup",
      "equipmentLabel": "Resistance bands",
      "trackingUnit": "reps"
    },
    {
      "id": "band-squat",
      "name": "Resistance Band Squat",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "resistance-bands"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "abdominals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand on the middle of an intact long band with both feet.",
        "Hold the ends securely near your shoulders within the band manufacturer’s stretch limit.",
        "Squat to a comfortable depth with the whole foot planted.",
        "Stand smoothly while keeping your trunk braced."
      ],
      "commonMistakes": [
        "Using a band too short to stand upright safely",
        "Letting the band slip from under the feet"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Resistance Band Squat exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "body-squat",
      "equipmentLabel": "Resistance bands",
      "trackingUnit": "reps"
    },
    {
      "id": "band-rdl",
      "name": "Resistance Band Romanian Deadlift",
      "group": "Legs",
      "pattern": "hinge",
      "equipment": [
        "resistance-bands"
      ],
      "primaryMuscles": [
        "hamstrings",
        "glutes"
      ],
      "secondaryMuscles": [
        "spinal-erectors",
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand on the center of an intact long band and grip both ends.",
        "Keep knees softly bent and hinge your hips backward.",
        "Maintain a steady back position and secure footing.",
        "Stand by driving hips forward; lower slowly without releasing the band."
      ],
      "commonMistakes": [
        "Rounding the back to reach lower",
        "Using more stretch than the band allows"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Resistance Band Romanian Deadlift exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "hinge-drill",
      "equipmentLabel": "Resistance bands",
      "trackingUnit": "reps"
    },
    {
      "id": "band-press",
      "name": "Resistance Band Overhead Press",
      "group": "Shoulders",
      "pattern": "press",
      "equipment": [
        "resistance-bands"
      ],
      "primaryMuscles": [
        "anterior-deltoids"
      ],
      "secondaryMuscles": [
        "triceps",
        "lateral-deltoids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand securely on the middle of a long band and hold the ends at shoulder height.",
        "Check that the band permits the full press within its stretch limit.",
        "Brace and press overhead without leaning backward.",
        "Lower the hands slowly to shoulder height."
      ],
      "commonMistakes": [
        "Pressing an unsuitable short band too far",
        "Letting the band recoil toward the face"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Resistance Band Overhead Press exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "pike-pushup",
      "equipmentLabel": "Resistance bands",
      "trackingUnit": "reps"
    },
    {
      "id": "band-pull-apart",
      "name": "Resistance Band Pull-Apart",
      "group": "Shoulders",
      "pattern": "rear",
      "equipment": [
        "resistance-bands"
      ],
      "primaryMuscles": [
        "posterior-deltoids",
        "middle-trapezius"
      ],
      "secondaryMuscles": [
        "rhomboids"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Hold a light band in front of your chest with arms almost straight.",
        "Keep shoulders relaxed and ribs down.",
        "Separate your hands to draw the band toward your upper chest.",
        "Return slowly without allowing the band to snap back."
      ],
      "commonMistakes": [
        "Shrugging or arching the back",
        "Using a band too heavy for controlled movement"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Resistance Band Pull-Apart exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "prone-w-raise",
      "equipmentLabel": "Resistance bands",
      "trackingUnit": "reps"
    },
    {
      "id": "band-curl",
      "name": "Resistance Band Biceps Curl",
      "group": "Arms",
      "pattern": "biceps",
      "equipment": [
        "resistance-bands"
      ],
      "primaryMuscles": [
        "biceps"
      ],
      "secondaryMuscles": [
        "brachialis",
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand on the center of an intact band and hold the ends with palms forward.",
        "Keep elbows beside your torso.",
        "Curl without leaning backward, staying within the band’s stretch limit.",
        "Lower slowly without releasing tension suddenly."
      ],
      "commonMistakes": [
        "Swinging your trunk",
        "Letting the band slip under your shoes"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Resistance Band Biceps Curl exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Resistance bands",
      "trackingUnit": "reps"
    },
    {
      "id": "band-triceps-extension",
      "name": "Resistance Band Overhead Triceps Extension",
      "group": "Arms",
      "pattern": "triceps",
      "equipment": [
        "resistance-bands"
      ],
      "primaryMuscles": [
        "triceps"
      ],
      "secondaryMuscles": [],
      "difficulty": "intermediate",
      "instructions": [
        "Stand on one end of a suitable long band and hold the other end securely behind your head.",
        "Keep ribs down and choose light tension that permits a comfortable shoulder position.",
        "Straighten the elbows overhead without moving the upper arms much.",
        "Lower slowly and stay within the band’s stretch limit."
      ],
      "commonMistakes": [
        "Using an overly short or damaged band",
        "Arching the lower back to finish"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Resistance Band Overhead Triceps Extension exercise proper form tutorial",
      "homeAlternativeId": "close-pushup",
      "outdoorAlternativeId": "close-pushup",
      "equipmentLabel": "Resistance bands",
      "trackingUnit": "reps"
    },
    {
      "id": "kb-deadlift",
      "name": "Kettlebell Deadlift",
      "group": "Legs",
      "pattern": "hinge",
      "equipment": [
        "kettlebell"
      ],
      "primaryMuscles": [
        "glutes",
        "hamstrings"
      ],
      "secondaryMuscles": [
        "quadriceps",
        "spinal-erectors",
        "forearms"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Place one kettlebell between your feet.",
        "Hinge and bend your knees enough to grip the handle with both hands while keeping your back comfortable.",
        "Brace and push through the floor to stand tall.",
        "Lower the bell between your feet under control."
      ],
      "commonMistakes": [
        "Rounding the back to reach the handle",
        "Leaning backward at lockout"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Kettlebell Deadlift exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "hinge-drill",
      "equipmentLabel": "Kettlebell",
      "trackingUnit": "reps"
    },
    {
      "id": "kb-goblet",
      "name": "Kettlebell Goblet Squat",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "kettlebell"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "abdominals",
        "adductors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Hold the kettlebell securely by the handle close to your chest.",
        "Plant your whole foot and brace your trunk.",
        "Squat through a comfortable range with knees tracking over your feet.",
        "Stand without letting the bell pull your chest down."
      ],
      "commonMistakes": [
        "Holding the bell far from the chest",
        "Lifting heels to reach more depth"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Kettlebell Goblet Squat exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": "body-squat",
      "equipmentLabel": "Kettlebell",
      "trackingUnit": "reps"
    },
    {
      "id": "kb-swing",
      "name": "Two-Hand Kettlebell Swing",
      "group": "Legs",
      "pattern": "hinge",
      "equipment": [
        "kettlebell"
      ],
      "primaryMuscles": [
        "glutes",
        "hamstrings"
      ],
      "secondaryMuscles": [
        "abdominals",
        "spinal-erectors",
        "forearms"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Learn a controlled kettlebell deadlift and hinge first; clear space around you.",
        "Stand behind the bell, hinge and hike it backward between your thighs.",
        "Extend hips briskly so the bell floats forward to around chest height with relaxed arms.",
        "Let the bell return into a hinge, then park it safely when the set ends."
      ],
      "commonMistakes": [
        "Lifting the bell mainly with the shoulders",
        "Squatting instead of hinging or leaning backward at the top"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Two-Hand Kettlebell Swing exercise proper form tutorial",
      "homeAlternativeId": "kb-deadlift",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Kettlebell",
      "trackingUnit": "reps"
    },
    {
      "id": "kb-suitcase-carry",
      "name": "Kettlebell Suitcase Carry",
      "group": "Core",
      "pattern": "core",
      "equipment": [
        "kettlebell"
      ],
      "primaryMuscles": [
        "obliques",
        "forearms"
      ],
      "secondaryMuscles": [
        "gluteus-medius",
        "upper-trapezius"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Pick up one kettlebell using a controlled hinge.",
        "Stand tall with shoulders level and the bell beside one thigh.",
        "Walk with short, steady steps while resisting a sideways lean.",
        "Set it down under control and switch hands."
      ],
      "commonMistakes": [
        "Leaning toward or away from the load",
        "Walking too quickly to keep the torso steady"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Kettlebell Suitcase Carry exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Kettlebell",
      "trackingUnit": "metres"
    },
    {
      "id": "kb-reverse-lunge",
      "name": "Kettlebell Goblet Reverse Lunge",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "kettlebell"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "abdominals",
        "adductors"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Hold the kettlebell close to your chest with both hands.",
        "Step one leg back into a stable lunge.",
        "Lower both knees while keeping the front foot planted.",
        "Push through the front leg to return and alternate sides."
      ],
      "commonMistakes": [
        "Taking narrow, unstable steps",
        "Letting the bell pull the torso forward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Kettlebell Goblet Reverse Lunge exercise proper form tutorial",
      "homeAlternativeId": "reverse-lunge",
      "outdoorAlternativeId": "reverse-lunge",
      "equipmentLabel": "Kettlebell",
      "trackingUnit": "reps"
    },
    {
      "id": "park-row",
      "name": "Low Park-Bar Inverted Row",
      "group": "Back",
      "pattern": "row",
      "equipment": [
        "park-equipment"
      ],
      "primaryMuscles": [
        "lats",
        "rhomboids",
        "middle-trapezius"
      ],
      "secondaryMuscles": [
        "biceps",
        "posterior-deltoids",
        "abdominals"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Check that a fixed low park bar is secure and the ground is dry.",
        "Grip the bar and walk your feet forward, keeping your body braced.",
        "Pull your chest toward the bar without jutting the chin.",
        "Lower slowly; bend knees or stand more upright to reduce difficulty."
      ],
      "commonMistakes": [
        "Using an unstable rail",
        "Sagging the hips or jerking the chest upward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Low Park-Bar Inverted Row exercise proper form tutorial",
      "homeAlternativeId": "band-row",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Park bars, bench or stairs",
      "trackingUnit": "reps"
    },
    {
      "id": "park-incline-pushup",
      "name": "Park Bench Incline Push-up",
      "group": "Chest",
      "pattern": "chest",
      "equipment": [
        "park-equipment"
      ],
      "primaryMuscles": [
        "pectorals"
      ],
      "secondaryMuscles": [
        "triceps",
        "anterior-deltoids",
        "abdominals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Check that a fixed park bench or bar is dry, secure and free of sharp edges.",
        "Place hands on the support and step feet back into a straight body line.",
        "Lower your chest toward the support with controlled elbows.",
        "Press back without bending at your hips."
      ],
      "commonMistakes": [
        "Using a movable or slippery bench",
        "Letting hips sag"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Park Bench Incline Push-up exercise proper form tutorial",
      "homeAlternativeId": "wall-pushup",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Park bars, bench or stairs",
      "trackingUnit": "reps"
    },
    {
      "id": "park-stepup",
      "name": "Low Park Step-up",
      "group": "Legs",
      "pattern": "squat",
      "equipment": [
        "park-equipment"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes"
      ],
      "secondaryMuscles": [
        "calves",
        "hamstrings"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Choose a stable low stair or park step where you can place your whole foot.",
        "Step onto it with one foot and keep the knee following your toes.",
        "Press through the lead leg to stand without springing from the trailing foot.",
        "Step down slowly and switch legs."
      ],
      "commonMistakes": [
        "Using a step too high to control",
        "Pushing mostly off the trailing leg"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Low Park Step-up exercise proper form tutorial",
      "homeAlternativeId": "reverse-lunge",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Park bars, bench or stairs",
      "trackingUnit": "reps"
    },
    {
      "id": "march",
      "name": "March in Place",
      "group": "Conditioning",
      "pattern": "conditioning",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "hip-flexors"
      ],
      "secondaryMuscles": [
        "quadriceps",
        "calves"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand tall with room to move.",
        "Lift one knee to a comfortable height while swinging the opposite arm.",
        "Place the foot down softly and alternate sides.",
        "Keep breathing easily and increase pace gradually."
      ],
      "commonMistakes": [
        "Leaning backward to lift the knee",
        "Starting too fast to speak comfortably"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "March in Place exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "seconds"
    },
    {
      "id": "walk",
      "name": "Brisk Walking",
      "group": "Conditioning",
      "pattern": "conditioning",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "glutes",
        "calves"
      ],
      "secondaryMuscles": [
        "quadriceps",
        "hamstrings"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Choose a clear, level route or walk back and forth in a clear room.",
        "Stand comfortably tall and use a natural stride.",
        "Build to a purposeful pace while keeping breathing controlled.",
        "Ease your pace before stopping."
      ],
      "commonMistakes": [
        "Overstriding with a hard heel strike",
        "Ignoring slippery surfaces or obstacles"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Brisk Walking exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "seconds"
    },
    {
      "id": "easy-run",
      "name": "Easy Run",
      "group": "Conditioning",
      "pattern": "conditioning",
      "equipment": [
        "running"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes",
        "calves"
      ],
      "secondaryMuscles": [
        "hamstrings",
        "hip-flexors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Choose a clear, even route and begin with walking.",
        "Jog at a pace where you can speak in full sentences.",
        "Use relaxed arms and short, comfortable strides.",
        "Slow to a walk if breathing or technique stops being comfortable."
      ],
      "commonMistakes": [
        "Turning every easy run into a hard effort",
        "Increasing distance and speed together too quickly"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Easy Run exercise proper form tutorial",
      "homeAlternativeId": "march",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Clear running route",
      "trackingUnit": "seconds"
    },
    {
      "id": "tempo-run",
      "name": "Controlled Tempo Run",
      "group": "Conditioning",
      "pattern": "conditioning",
      "equipment": [
        "running"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes",
        "calves"
      ],
      "secondaryMuscles": [
        "hamstrings",
        "hip-flexors"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Warm up with easy walking and jogging first.",
        "Build to a comfortably hard pace where short phrases are possible.",
        "Keep shoulders relaxed and maintain steady, repeatable effort.",
        "Ease into a jog or walk for the recovery period."
      ],
      "commonMistakes": [
        "Starting at a sprint",
        "Ignoring slowing technique or unusual symptoms"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Controlled Tempo Run exercise proper form tutorial",
      "homeAlternativeId": "march",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Clear running route",
      "trackingUnit": "seconds"
    },
    {
      "id": "sprint",
      "name": "Flat Ground Acceleration Sprint",
      "group": "Conditioning",
      "pattern": "power",
      "equipment": [
        "running"
      ],
      "primaryMuscles": [
        "glutes",
        "hamstrings",
        "quadriceps"
      ],
      "secondaryMuscles": [
        "calves",
        "hip-flexors"
      ],
      "difficulty": "advanced",
      "instructions": [
        "Use a clear, dry, level straightaway and complete a gradual running warm-up.",
        "Start with a slight forward body lean and accelerate smoothly.",
        "Drive arms and push the ground behind you without reaching far forward.",
        "Slow down gradually in a clear runoff area and recover fully."
      ],
      "commonMistakes": [
        "Sprinting cold or on uneven ground",
        "Stopping abruptly or continuing after speed and control decline"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Flat Ground Acceleration Sprint exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Clear running route",
      "trackingUnit": "metres"
    },
    {
      "id": "hill-run",
      "name": "Uphill Running Interval",
      "group": "Conditioning",
      "pattern": "conditioning",
      "equipment": [
        "running"
      ],
      "primaryMuscles": [
        "glutes",
        "quadriceps",
        "calves"
      ],
      "secondaryMuscles": [
        "hamstrings",
        "hip-flexors"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Choose a clear, moderate hill with a safe walking route back.",
        "Warm up, then run uphill with short strides and a slight whole-body lean.",
        "Keep effort repeatable without straining or overstriding.",
        "Walk down carefully for recovery; avoid fast downhill running."
      ],
      "commonMistakes": [
        "Choosing an excessively steep or slippery hill",
        "Racing downhill while fatigued"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Uphill Running Interval exercise proper form tutorial",
      "homeAlternativeId": "march",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Clear running route",
      "trackingUnit": "seconds"
    },
    {
      "id": "stair-climb",
      "name": "Controlled Stair Climb",
      "group": "Conditioning",
      "pattern": "conditioning",
      "equipment": [
        "park-equipment"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes",
        "calves"
      ],
      "secondaryMuscles": [
        "hamstrings"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Choose dry, clear public stairs and use a handrail when needed.",
        "Walk up one step at a time, placing your foot securely.",
        "Keep the torso controlled and breathing steady.",
        "Walk down slowly and use the prescribed recovery before repeating."
      ],
      "commonMistakes": [
        "Running down stairs",
        "Skipping steps before you can control ordinary stair walking"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Controlled Stair Climb exercise proper form tutorial",
      "homeAlternativeId": "march",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Park bars, bench or stairs",
      "trackingUnit": "seconds"
    },
    {
      "id": "step-jack",
      "name": "Low-Impact Step Jack",
      "group": "Conditioning",
      "pattern": "conditioning",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "gluteus-medius",
        "calves"
      ],
      "secondaryMuscles": [
        "shoulders",
        "quadriceps"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand tall with feet together and arms at your sides.",
        "Step one foot sideways while raising arms through a comfortable range.",
        "Return to the center and repeat on the other side.",
        "Keep one foot on the ground and use a steady rhythm."
      ],
      "commonMistakes": [
        "Jumping when a low-impact version is intended",
        "Forcing arms through shoulder discomfort"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Low-Impact Step Jack exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "seconds"
    },
    {
      "id": "mountain-climber",
      "name": "Controlled Mountain Climber",
      "group": "Conditioning",
      "pattern": "conditioning",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "abdominals",
        "hip-flexors"
      ],
      "secondaryMuscles": [
        "shoulders",
        "quadriceps"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Start in a high plank with hands under shoulders.",
        "Bring one knee toward your chest without rounding or twisting excessively.",
        "Return the foot and alternate legs.",
        "Keep hips steady; slow down before technique deteriorates."
      ],
      "commonMistakes": [
        "Bouncing the hips high",
        "Moving faster than you can control"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Controlled Mountain Climber exercise proper form tutorial",
      "homeAlternativeId": "march",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "seconds"
    },
    {
      "id": "stepback-thrust",
      "name": "Step-Back Squat Thrust",
      "group": "Conditioning",
      "pattern": "conditioning",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes",
        "abdominals"
      ],
      "secondaryMuscles": [
        "shoulders",
        "hip-flexors"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Stand with space around you and bend hips and knees to place hands on the floor.",
        "Step one foot and then the other back into a braced plank.",
        "Step feet back under your body one at a time.",
        "Stand tall without adding a jump."
      ],
      "commonMistakes": [
        "Dropping into a sagging plank",
        "Rushing the transition before you can balance"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Step-Back Squat Thrust exercise proper form tutorial",
      "homeAlternativeId": "step-jack",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "seconds"
    },
    {
      "id": "squat-jump",
      "name": "Countermovement Squat Jump",
      "group": "Legs",
      "pattern": "power",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "quadriceps",
        "glutes",
        "calves"
      ],
      "secondaryMuscles": [
        "hamstrings",
        "abdominals"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Warm up and choose a clear, level surface with good grip.",
        "Dip through hips and knees, then jump upward using a comfortable arm swing.",
        "Land quietly with hips and knees bending and knees aligned with your feet.",
        "Hold your balance and reset before the next jump."
      ],
      "commonMistakes": [
        "Landing with stiff knees",
        "Continuing when landing control or jump height declines"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Countermovement Squat Jump exercise proper form tutorial",
      "homeAlternativeId": "body-squat",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "broad-jump",
      "name": "Standing Broad Jump",
      "group": "Legs",
      "pattern": "power",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "glutes",
        "quadriceps",
        "calves"
      ],
      "secondaryMuscles": [
        "hamstrings",
        "abdominals"
      ],
      "difficulty": "intermediate",
      "instructions": [
        "Choose a level, clear landing area and warm up first.",
        "Bend hips and knees, swing arms, and jump forward a manageable distance.",
        "Land on both feet with hips and knees bending to absorb the landing.",
        "Hold your balance and walk back to reset."
      ],
      "commonMistakes": [
        "Chasing distance at the cost of a controlled landing",
        "Landing with knees collapsing inward"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Standing Broad Jump exercise proper form tutorial",
      "homeAlternativeId": "body-squat",
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "hip-flexor-stretch",
      "name": "Half-Kneeling Hip Flexor Stretch",
      "group": "Mobility",
      "pattern": "mobility",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "hip-flexors"
      ],
      "secondaryMuscles": [
        "glutes",
        "abdominals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Kneel on a comfortable surface with the other foot forward.",
        "Gently tuck your pelvis and squeeze the glute of the kneeling side.",
        "Shift forward a small amount until you feel a mild front-of-hip stretch.",
        "Breathe steadily and switch sides without forcing the range."
      ],
      "commonMistakes": [
        "Arching the lower back to move farther",
        "Stretching into sharp discomfort"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Half-Kneeling Hip Flexor Stretch exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "seconds"
    },
    {
      "id": "open-book",
      "name": "Side-Lying Open Book Rotation",
      "group": "Mobility",
      "pattern": "mobility",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "thoracic-rotators"
      ],
      "secondaryMuscles": [
        "pectorals",
        "obliques"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Lie on your side with hips and knees bent and arms together in front.",
        "Keep knees stacked while opening your top arm toward the other side.",
        "Rotate only as far as you can without pulling the shoulder or twisting the knees apart.",
        "Return slowly and switch sides."
      ],
      "commonMistakes": [
        "Forcing the hand to the floor",
        "Letting the knees lift to create extra rotation"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Side-Lying Open Book Rotation exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "wall-slide",
      "name": "Wall Slide",
      "group": "Mobility",
      "pattern": "mobility",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "lower-trapezius",
        "serratus-anterior"
      ],
      "secondaryMuscles": [
        "shoulders"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand near a solid wall with forearms against it at a comfortable height.",
        "Keep ribs relaxed over the pelvis.",
        "Slide your forearms upward through a range that does not cause pinching.",
        "Lower slowly without shrugging or arching your back."
      ],
      "commonMistakes": [
        "Forcing hands overhead through discomfort",
        "Using lower-back extension to gain range"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Wall Slide exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "chin-tuck",
      "name": "Gentle Chin Retraction",
      "group": "Mobility",
      "pattern": "mobility",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "deep-neck-flexors"
      ],
      "secondaryMuscles": [
        "cervical-extensors"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Sit or stand comfortably tall and look straight ahead.",
        "Draw your chin gently backward without tipping your head down.",
        "Hold briefly while breathing and keeping shoulders relaxed.",
        "Return to neutral; use a small comfortable movement."
      ],
      "commonMistakes": [
        "Pressing the head backward forcefully",
        "Looking down instead of gliding the head back"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Gentle Chin Retraction exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "cat-camel",
      "name": "Gentle Cat-Camel",
      "group": "Mobility",
      "pattern": "mobility",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "spinal-erectors",
        "abdominals"
      ],
      "secondaryMuscles": [],
      "difficulty": "beginner",
      "instructions": [
        "Start on hands and knees with weight evenly distributed.",
        "Slowly round your back within a comfortable range.",
        "Gently reverse the movement without forcing end range.",
        "Move smoothly with your breathing."
      ],
      "commonMistakes": [
        "Pushing into painful end ranges",
        "Moving rapidly through the neck and lower back"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Gentle Cat-Camel exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "ankle-rock",
      "name": "Standing Ankle Dorsiflexion Rock",
      "group": "Mobility",
      "pattern": "mobility",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "calves"
      ],
      "secondaryMuscles": [
        "tibialis-anterior"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Take a small staggered stance near a wall for optional balance.",
        "Keep the front heel grounded as you move that knee forward over the toes.",
        "Stop before the heel lifts or the ankle pinches.",
        "Return slowly and repeat before switching legs."
      ],
      "commonMistakes": [
        "Letting the arch collapse inward",
        "Forcing the knee forward through pain"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Standing Ankle Dorsiflexion Rock exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "arm-circles",
      "name": "Controlled Arm Circles",
      "group": "Mobility",
      "pattern": "mobility",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "deltoids"
      ],
      "secondaryMuscles": [
        "rotator-cuff",
        "upper-back"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand tall with arms out at a comfortable height.",
        "Make small circles without shrugging.",
        "Gradually enlarge the circles only through a comfortable range.",
        "Reverse direction and keep breathing steadily."
      ],
      "commonMistakes": [
        "Swinging arms violently",
        "Forcing the shoulders through painful motion"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Controlled Arm Circles exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "hinge-drill",
      "name": "Bodyweight Hip Hinge Drill",
      "group": "Mobility",
      "pattern": "hinge",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "hamstrings",
        "glutes"
      ],
      "secondaryMuscles": [
        "spinal-erectors",
        "abdominals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Stand with soft knees and hands on your hip creases.",
        "Push your hips backward while keeping your whole foot planted.",
        "Let the torso tip forward while maintaining a comfortable, steady back position.",
        "Press through your feet to stand without leaning backward."
      ],
      "commonMistakes": [
        "Bending mostly at the waist with a rounding back",
        "Dropping into a deep squat"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Bodyweight Hip Hinge Drill exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    },
    {
      "id": "scapular-pushup",
      "name": "Scapular Push-up",
      "group": "Shoulders",
      "pattern": "mobility",
      "equipment": [
        "bodyweight"
      ],
      "primaryMuscles": [
        "serratus-anterior"
      ],
      "secondaryMuscles": [
        "abdominals",
        "pectorals"
      ],
      "difficulty": "beginner",
      "instructions": [
        "Start in a high plank or on hands and knees for an easier version.",
        "Keep elbows straight and allow the chest to lower slightly between your shoulders.",
        "Push the floor away so shoulder blades move around the ribs.",
        "Keep the trunk braced as you repeat the small movement."
      ],
      "commonMistakes": [
        "Bending the elbows into a full push-up",
        "Sagging at the hips"
      ],
      "youtubeVideoId": "",
      "youtubeSearchQuery": "Scapular Push-up exercise proper form tutorial",
      "homeAlternativeId": null,
      "outdoorAlternativeId": null,
      "equipmentLabel": "Bodyweight",
      "trackingUnit": "reps"
    }
  ],
  "programExerciseCoverage": [
    {
      "programNumber": 1,
      "programId": "shortcut-to-strength",
      "exerciseIds": [
        "squat",
        "barbell-bench",
        "deadlift",
        "ohp",
        "barbell-row",
        "lat-pulldown",
        "front-plank"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 2,
      "programId": "shortcut-to-six-pack",
      "exerciseIds": [
        "squat",
        "barbell-bench",
        "rdl",
        "cable-row",
        "weighted-crunch",
        "pallof-press",
        "hanging-knee-raise",
        "walk",
        "step-jack"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 3,
      "programId": "shoulder-killer",
      "exerciseIds": [
        "ohp",
        "db-press",
        "lateral",
        "cable-lateral",
        "rear-delt",
        "db-rear-fly",
        "face-pull",
        "barbell-bench",
        "lat-pulldown",
        "squat",
        "rdl"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 4,
      "programId": "abs-killer",
      "exerciseIds": [
        "crunch",
        "leg-raise",
        "weighted-crunch",
        "pallof-press",
        "ab-wheel",
        "side-plank",
        "barbell-bench",
        "squat",
        "cable-row",
        "rdl",
        "body-crunch"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 5,
      "programId": "chest-builder",
      "exerciseIds": [
        "barbell-bench",
        "incline",
        "bench",
        "fly",
        "pec-deck",
        "pushup",
        "cable-row",
        "lat-pulldown",
        "goblet",
        "db-rdl"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 6,
      "programId": "arm-blaster",
      "exerciseIds": [
        "ez-curl",
        "hammer",
        "db-curl",
        "db-standing-curl",
        "pushdown",
        "overhead-triceps",
        "dips",
        "close-pushup",
        "barbell-bench",
        "lat-pulldown",
        "goblet",
        "rdl"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 7,
      "programId": "quad-crusher",
      "exerciseIds": [
        "squat",
        "front-squat",
        "leg-press",
        "leg-extension",
        "lunge",
        "split-squat",
        "curl-seated",
        "calf",
        "barbell-bench",
        "cable-row"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 8,
      "programId": "glute-builder",
      "exerciseIds": [
        "hip-thrust",
        "rdl",
        "db-rdl",
        "split-squat",
        "reverse-lunge",
        "curl-lying",
        "bridge",
        "lat-pulldown",
        "db-press"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 9,
      "programId": "v-taper-back",
      "exerciseIds": [
        "pullup",
        "strict-pullup",
        "lat-pulldown",
        "barbell-row",
        "chest-row",
        "db-row",
        "cable-row",
        "pulldown-straight",
        "face-pull",
        "lateral",
        "goblet",
        "bench"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 10,
      "programId": "push-pull-legs",
      "exerciseIds": [
        "barbell-bench",
        "incline",
        "ohp",
        "lateral",
        "pushdown",
        "overhead-triceps",
        "lat-pulldown",
        "barbell-row",
        "face-pull",
        "ez-curl",
        "hammer",
        "squat",
        "leg-press",
        "rdl",
        "curl-seated",
        "calf",
        "calf-seated",
        "crunch"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 11,
      "programId": "upper-lower",
      "exerciseIds": [
        "barbell-bench",
        "ohp",
        "cable-row",
        "lat-pulldown",
        "lateral",
        "pushdown",
        "hammer",
        "squat",
        "front-squat",
        "rdl",
        "leg-extension",
        "curl-lying",
        "calf",
        "deadbug"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 12,
      "programId": "powerbuilding",
      "exerciseIds": [
        "squat",
        "barbell-bench",
        "deadlift",
        "ohp",
        "barbell-row",
        "leg-press",
        "incline",
        "lateral",
        "ez-curl",
        "pushdown",
        "calf"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 13,
      "programId": "deadlift-specialist",
      "exerciseIds": [
        "deadlift",
        "rdl",
        "front-squat",
        "barbell-row",
        "curl-lying",
        "hip-thrust",
        "front-plank",
        "side-plank",
        "barbell-bench",
        "lat-pulldown"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 14,
      "programId": "30-minute-express",
      "exerciseIds": [
        "goblet",
        "bench",
        "cable-row",
        "db-rdl",
        "db-press",
        "lat-pulldown",
        "deadbug"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 15,
      "programId": "beginner-foundations",
      "exerciseIds": [
        "goblet",
        "leg-press",
        "bench",
        "db-press",
        "cable-row",
        "lat-pulldown",
        "db-rdl",
        "curl-seated",
        "deadbug",
        "calf"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 16,
      "programId": "home-bodyweight-basics",
      "exerciseIds": [
        "body-squat",
        "wall-pushup",
        "knee-pushup",
        "pushup",
        "reverse-lunge",
        "bridge",
        "bird-dog",
        "deadbug",
        "prone-w-raise",
        "body-calf-raise"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 17,
      "programId": "home-dumbbell-builder",
      "exerciseIds": [
        "goblet",
        "db-floor-press",
        "bent-db-row",
        "db-rdl",
        "standing-db-press",
        "db-split-squat",
        "lateral",
        "db-rear-fly",
        "db-standing-curl",
        "hammer",
        "overhead-triceps",
        "weighted-crunch"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 18,
      "programId": "resistance-band-total-body",
      "exerciseIds": [
        "band-squat",
        "band-rdl",
        "band-row",
        "band-chest-press",
        "band-press",
        "band-pull-apart",
        "band-curl",
        "band-triceps-extension",
        "deadbug"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 19,
      "programId": "home-hiit-fat-burner",
      "exerciseIds": [
        "step-jack",
        "body-squat",
        "mountain-climber",
        "reverse-lunge",
        "stepback-thrust",
        "pushup",
        "front-plank",
        "march"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 20,
      "programId": "pull-up-mastery",
      "exerciseIds": [
        "active-hang",
        "scapular-pullup",
        "foot-assisted-pullup",
        "negative-pullup",
        "strict-pullup",
        "deadbug"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 21,
      "programId": "push-up-progression",
      "exerciseIds": [
        "wall-pushup",
        "knee-pushup",
        "eccentric-pushup",
        "pushup",
        "close-pushup",
        "archer-pushup",
        "scapular-pushup",
        "front-plank"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 22,
      "programId": "kettlebell-conditioning",
      "exerciseIds": [
        "kb-deadlift",
        "kb-swing",
        "kb-goblet",
        "kb-reverse-lunge",
        "kb-suitcase-carry",
        "side-plank"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 23,
      "programId": "core-stability-back-health",
      "exerciseIds": [
        "deadbug",
        "bird-dog",
        "side-plank",
        "front-plank",
        "bridge",
        "hinge-drill",
        "walk"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 24,
      "programId": "mobility-posture-fix",
      "exerciseIds": [
        "hip-flexor-stretch",
        "open-book",
        "wall-slide",
        "chin-tuck",
        "cat-camel",
        "ankle-rock",
        "prone-w-raise",
        "scapular-pushup",
        "arm-circles"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 25,
      "programId": "outdoor-calisthenics",
      "exerciseIds": [
        "strict-pullup",
        "park-row",
        "park-incline-pushup",
        "pushup",
        "pike-pushup",
        "park-stepup",
        "body-split-squat",
        "hanging-knee-raise",
        "body-calf-raise"
      ],
      "warmupExerciseIds": [
        "walk",
        "easy-run",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 26,
      "programId": "run-strength-hybrid",
      "exerciseIds": [
        "easy-run",
        "tempo-run",
        "body-squat",
        "reverse-lunge",
        "pushup",
        "bridge",
        "hamstring-walkout",
        "front-plank"
      ],
      "warmupExerciseIds": [
        "walk",
        "easy-run",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 27,
      "programId": "athletic-power",
      "exerciseIds": [
        "sprint",
        "squat-jump",
        "broad-jump",
        "reverse-lunge",
        "body-calf-raise",
        "side-plank"
      ],
      "warmupExerciseIds": [
        "walk",
        "easy-run",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 28,
      "programId": "stair-hill-conditioning",
      "exerciseIds": [
        "stair-climb",
        "hill-run",
        "park-stepup",
        "walk",
        "body-calf-raise"
      ],
      "warmupExerciseIds": [
        "walk",
        "easy-run",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 29,
      "programId": "low-impact-strength",
      "exerciseIds": [
        "body-squat",
        "wall-pushup",
        "reverse-lunge",
        "bridge",
        "bird-dog",
        "body-calf-raise",
        "prone-w-raise",
        "walk"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    },
    {
      "programNumber": 30,
      "programId": "summer-shred",
      "exerciseIds": [
        "body-squat",
        "body-split-squat",
        "pushup",
        "close-pushup",
        "hamstring-walkout",
        "bridge",
        "prone-w-raise",
        "reverse-crunch",
        "side-plank",
        "step-jack",
        "walk"
      ],
      "warmupExerciseIds": [
        "march",
        "arm-circles",
        "hinge-drill",
        "body-squat"
      ]
    }
  ]
};
if(typeof module !== "undefined") module.exports=globalThis.ForgeExerciseData;

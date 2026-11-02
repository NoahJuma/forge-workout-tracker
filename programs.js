"use strict";
// Ready-to-run static catalog. Tests compare this snapshot with all JSON batches.
// No build step is required to run the app.
globalThis.ForgePrograms = [
  {
    "programNumber": 1,
    "id": "shortcut-to-strength",
    "name": "Shortcut to Strength",
    "description": "A four-day upper/lower plan with 5×5-style practice on the squat, bench press and overhead press. Deadlifts use lower-volume triples to manage fatigue.",
    "goal": "strength",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "rack"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 85,
    "durationWeeks": 12,
    "method": "Linear progression with heavy and lighter technique exposures",
    "focusMuscles": [
      "quadriceps",
      "pectorals",
      "glutes",
      "anterior-deltoids"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Lower A · squat priority",
        "kind": "training",
        "sessionLengthMinutes": 85,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "deadlift",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 5,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 240,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadlift",
            "sets": 2,
            "min": 3,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 3,
            "perSide": false,
            "hardSet": true,
            "loadFactor": 0.9,
            "intensityNote": "Use about 90% of the load from the last successful heavy deadlift session; prioritize technique."
          },
          {
            "exerciseId": "front-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": true,
            "intensityNote": "End the hold before alignment changes; keep breathing."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Upper A · bench priority",
        "kind": "training",
        "sessionLengthMinutes": 85,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "ohp",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 5,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 240,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "ohp",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 3,
            "perSide": false,
            "hardSet": true,
            "loadFactor": 0.9,
            "intensityNote": "Use about 90% of the last successful heavy overhead-press load."
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Lower B · deadlift priority",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "deadlift",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "squat",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "deadlift",
            "sets": 3,
            "min": 3,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 240,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 3,
            "perSide": false,
            "hardSet": true,
            "loadFactor": 0.9,
            "intensityNote": "Use about 90% of the last successful heavy squat load; do not progress this lighter exposure independently."
          },
          {
            "exerciseId": "front-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": true,
            "intensityNote": "Maintain alignment and stop before technical failure."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Upper B · press priority",
        "kind": "training",
        "sessionLengthMinutes": 85,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "ohp",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "ohp",
            "sets": 5,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 240,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 3,
            "perSide": false,
            "hardSet": true,
            "loadFactor": 0.9,
            "intensityNote": "Use about 90% of the last successful heavy bench-press load."
          },
          {
            "exerciseId": "barbell-row",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Start with loads that leave at least 2 RIR on every heavy set. During build weeks, increase the next heavy exposure by the smallest available increment (roughly 1–2.5% for presses and 2.5–5% for squat/deadlift) only after completing every prescribed rep at 2 or more RIR; lighter exposures stay at 90% of the latest successful heavy load. Do not force weekly increases: repeat a load if reps or technique deteriorate, and after two failed exposures reduce it by about 10% and rebuild. Rows and pulldowns progress by the smallest increment after all sets of 6 remain controlled; planks add 5 seconds per week up to 45 seconds before using a harder bracing position.",
    "deloadRule": "Weeks 4, 8 and 12: halve working sets, rounding up, reduce heavy working loads by about 10%, and keep 4 or more RIR. Keep lighter exposures easy and halve plank duration. Use the same deload early after two consecutive performance declines; resume at the last successful controlled load.",
    "deloadWeeks": [
      4,
      8,
      12
    ],
    "whyThisWorks": "The heavy exposure sets a clear load target while the lighter exposure repeats the same lift with less fatigue. Lower-volume deadlift triples keep the hinge workload separate from the 5×5 squat and press work. Four training days leave Wednesday and the weekend for recovery.",
    "volumeNotes": "This is a strength plan, not a 10–20-set hypertrophy target for every muscle. Main-lift sets use 3–5 reps, 3–4 minutes of rest, and at least 2 RIR. Lighter exposures are technique practice; never grind them. Use a rack with correctly set safeties for squats and benching, or a competent bench spotter.",
    "references": [
      {
        "id": "acsm-2009",
        "title": "American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19204579/"
      },
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      }
    ]
  },
  {
    "programNumber": 2,
    "id": "shortcut-to-six-pack",
    "name": "Shortcut to Six-Pack",
    "description": "Weighted core work and full-body resistance sessions are paired with a separate conditioning day and practical nutrition guidance. Ab training does not selectively remove belly fat.",
    "goal": "fat-loss",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "pull-up-bar",
      "rack"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 85,
    "durationWeeks": 8,
    "method": "Three full-body sessions plus a low-impact conditioning day",
    "focusMuscles": [
      "abdominals"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Full body A · loaded flexion",
        "kind": "training",
        "sessionLengthMinutes": 80,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "weighted-crunch",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pallof-press",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 480,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Comfortable purposeful pace; full sentences remain possible."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Full body B · hanging control",
        "kind": "training",
        "sessionLengthMinutes": 80,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hanging-knee-raise",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pallof-press",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 480,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Comfortable purposeful pace, not a hard finisher."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Full body C · core volume",
        "kind": "training",
        "sessionLengthMinutes": 85,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "weighted-crunch",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hanging-knee-raise",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Conditioning · walking and intervals",
        "kind": "training",
        "sessionLengthMinutes": 60,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 1500,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Brisk but conversational; choose a clear level route."
          },
          {
            "exerciseId": "step-jack",
            "sets": 6,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Moderate, repeatable effort around 6/10; no jumping required."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. For knee raises, first add controlled repetitions; after all sets reach 12 without swinging, gradually lengthen the legs while keeping the same range and RIR. Add 2 minutes to the conditioning-day walk per build week up to 40 minutes, or add one step-jack interval up to 10; change only one conditioning variable that week and extend the session estimate accordingly.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower. Halve step-jack intervals and keep the walk easy at 15–20 minutes on deload weeks.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Three resistance days retain full-body loading while ten dynamic ab sets distribute direct core work across the week. The separate conditioning day adds activity without turning every strength set into a circuit. Fat loss still depends on sustained energy balance rather than which area is exercised.",
    "volumeNotes": "There are 10 dynamic ab sets plus 4 Pallof-press sets each build week. Full-body lifting uses 6 squat sets, 6 hinge sets and 9 sets each of benching and rowing, prioritizing strength maintenance while managing recovery during a dietary deficit. Walking and step-jack intervals are conditioning, not hypertrophy hard sets.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "vispute-2011",
        "title": "Vispute et al.: The effect of abdominal exercise on abdominal fat (2011)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21804427/"
      },
      {
        "id": "issn-diets-2017",
        "title": "Aragon et al.: International society of sports nutrition position stand: diets and body composition (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28630601/"
      },
      {
        "id": "issn-protein-2017",
        "title": "Jäger et al.: International Society of Sports Nutrition Position Stand: protein and exercise (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28642676/"
      }
    ],
    "coreMessage": "Spot reduction is a myth: ab exercises do not selectively remove belly fat. Visible abs depend on body fat, which is controlled mainly through diet and overall energy balance, as well as individual fat distribution. Ab training builds the muscle; nutrition reveals it. This program cannot guarantee visible abs.",
    "nutritionGuidance": [
      "For fat loss, use a sustainable dietary energy deficit rather than adding endless ab sets; avoid treating exercise calories as precise measurements.",
      "Include protein regularly; 1.4–2.0 g/kg/day is a general reference for most healthy exercising adults, not an automatically calculated app target.",
      "Build meals around protein foods, fruit or vegetables, fiber-rich staples and adequate fluids. Adjust intake if recovery and training performance consistently decline.",
      "Visible abs are not guaranteed by an eight-week block; starting body fat and individual fat distribution affect appearance."
    ]
  },
  {
    "programNumber": 3,
    "id": "shoulder-killer",
    "name": "Shoulder Killer",
    "description": "A delt specialization block with three weekly shoulder exposures and 12 lateral-raise sets for width. Upper and lower support sessions keep the rest of the body in training.",
    "goal": "hypertrophy",
    "level": "advanced",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "plate-loaded-machine",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 5,
    "sessionLengthMinutes": 100,
    "durationWeeks": 8,
    "method": "Five-day delt specialization with a short isolation session",
    "focusMuscles": [
      "lateral-deltoids"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Upper A · overhead strength and width",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "ohp",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "ohp",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rear-delt",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 5,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Lower A · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Upper B · seated press and cable width",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "db-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-lateral",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": true,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "db-press",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-lateral",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "db-rear-fly",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 5,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Lower B · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-lying",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf-seated",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Delt isolation · controlled volume",
        "kind": "training",
        "sessionLengthMinutes": 45,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "lateral",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-lateral",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": true,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "lateral",
            "sets": 3,
            "min": 15,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-lateral",
            "sets": 3,
            "min": 15,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "face-pull",
            "sets": 2,
            "min": 15,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. For raises, progress reps before load and use the smallest available increase; do not shorten the range or swing to reach the target. Keep 3 RIR on all shoulder work in week 1 and use the full listed set count only if recovery is stable.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Twelve lateral-raise sets are spread over three sessions, with separate pressing and rear-delt work. The short isolation day adds width-focused work without another heavy press session. Chest and back still receive two exposures, while two lower days provide balanced leg work.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "Killer is a program name, not an instruction to train to failure. Stop sets when control is lost.",
      "Lateral delts receive 12 primary sets, anterior delts 6 pressing sets, and rear delts 8 direct sets before indirect pressing/rowing work. Do not add this block to another full upper-body plan without reviewing overlap."
    ]
  },
  {
    "programNumber": 4,
    "id": "abs-killer",
    "name": "Abs Killer",
    "description": "Progressive loaded crunches, hanging leg raises and anti-extension work build the ab muscles. This hypertrophy block makes no claim of spot reduction.",
    "goal": "hypertrophy",
    "level": "advanced",
    "location": "gym",
    "requiredEquipment": [
      "ab-wheel",
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "plate-loaded-machine",
      "pull-up-bar",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 90,
    "durationWeeks": 8,
    "method": "Four-day upper/lower plan with two progressive core sessions",
    "focusMuscles": [
      "abdominals"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Upper A · cable flexion and hanging control",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 5,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "crunch",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-raise",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pallof-press",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Lower A · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Upper B · weighted flexion and rollout",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 5,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "weighted-crunch",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "ab-wheel",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "side-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 25,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": true,
            "intensityNote": "Keep breathing and stop before the hips sag; holds are per side."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Lower B · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-lying",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf-seated",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Cable and weighted crunches use the smallest load increase after all sets reach 15 at 2 RIR. For leg raises, increase controlled reps before lengthening the lever or adding load; never progress by swinging. For rollouts, add reach gradually while maintaining trunk control before adding reps, and do not add external load during this block. Add 5 seconds to side-plank holds per build week up to 40 seconds, then use a longer lever if comfortable.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Two core sessions provide ten dynamic primary ab sets alongside four anti-rotation or side-plank sets. Loaded trunk flexion and controlled hanging or rollout patterns give measurable progression targets. The upper/lower split keeps the core sessions apart and retains two weekly exposures for the main supporting muscle groups.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      },
      {
        "id": "vispute-2011",
        "title": "Vispute et al.: The effect of abdominal exercise on abdominal fat (2011)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21804427/"
      }
    ],
    "coreMessage": "Spot reduction is a myth: ab exercises do not selectively remove belly fat. Visible abs depend on body fat, which is controlled mainly through diet and overall energy balance, as well as individual fat distribution. Ab training builds the muscle; nutrition reveals it. This program cannot guarantee visible abs.",
    "executionNotes": [
      "Use the central library's body-crunch or hanging-knee-raise record as a regression if the loaded or straight-leg version cannot be controlled; re-check equipment before substitutions.",
      "Dynamic RIR refers to additional repetitions with the same trunk control. Side-plank holds use technical control rather than a numeric RIR."
    ]
  },
  {
    "programNumber": 5,
    "id": "chest-builder",
    "name": "Chest Builder",
    "description": "Two weekly chest sessions combine heavier flat pressing with incline and fly work. A higher-repetition session adds volume without repeating the same loading pattern.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "plate-loaded-machine",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 100,
    "durationWeeks": 8,
    "method": "Four-day upper/lower block with chest priority and multiple angles",
    "focusMuscles": [
      "pectorals"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Upper A · flat press priority",
        "kind": "training",
        "sessionLengthMinutes": 95,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "incline",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 4,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "incline",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "fly",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Lower A · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Upper B · incline and higher repetitions",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "incline",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "bench",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "incline",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bench",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pec-deck",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushup",
            "sets": 2,
            "min": 8,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Lower B · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-lying",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf-seated",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. For push-ups, reach the top of the rep range at 2 RIR before making the lever harder; use a slower controlled descent if no suitable harder variation is available. Keep the initial 19-set weekly ceiling rather than adding more fly or pressing sets.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Nineteen primary chest sets are divided between two sessions rather than crowded into one day. Flat and incline presses plus fly variations offer different movement paths without claiming to isolate a separate chest muscle. Pulling and lower-body sessions preserve a broader training base while chest work takes priority.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "If soreness or pressing performance worsens between sessions, first remove the two push-up sets and one fly set for that week; do not compensate with more sets later.",
      "Pressing already loads the triceps and anterior delts. Additional arm or shoulder blocks need an overlap review."
    ]
  },
  {
    "programNumber": 6,
    "id": "arm-blaster",
    "name": "Arm Blaster",
    "description": "Biceps and triceps receive priority work before upper-body compounds. Two arm sessions vary grip and shoulder position while lower-body sessions retain balanced leg training.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dip-bars",
      "dumbbells",
      "plate-loaded-machine",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 100,
    "durationWeeks": 8,
    "method": "Four-day upper/lower specialization with arm work first",
    "focusMuscles": [
      "biceps",
      "triceps"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Upper A · curls and elbow extensions first",
        "kind": "training",
        "sessionLengthMinutes": 95,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "ez-curl",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "pushdown",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "ez-curl",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushdown",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "overhead-triceps",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Lower A · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Upper B · unilateral curls and close pressing",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "db-curl",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": true,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "dips",
            "sets": 2,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Two short, unweighted technique sets; do not force the depth or approach fatigue."
          }
        ],
        "exercises": [
          {
            "exerciseId": "db-curl",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "dips",
            "sets": 3,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-standing-curl",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "close-pushup",
            "sets": 3,
            "min": 8,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Lower B · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-lying",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf-seated",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Keep compound pressing at 3 RIR after arm work instead of comparing its load with a fresh pressing session. For dips and close-grip push-ups, first add controlled reps; add a harder lever only after the upper range remains comfortable. Do not add external dip weight during this block.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Each arm session begins with the priority muscles rather than leaving them until the end. Twelve primary biceps sets and twelve primary triceps sets are distributed across two days, with additional indirect loading from the compounds. The second session changes exercise demands while retaining the same weekly recovery pattern.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "Dip range is limited by controlled, comfortable shoulder motion. If dips cannot be controlled, use the central close-pushup record for those sets at the same RIR and reduce the later close-pushup exercise by two sets to avoid duplicating all six sets.",
      "Concentration-curl repetitions and sets are per arm. Complete both sides before taking the listed rest.",
      "This block already includes indirect arm work from presses and pulls; do not add another arm specialization schedule on top."
    ]
  },
  {
    "programNumber": 7,
    "id": "quad-crusher",
    "name": "Quad Crusher",
    "description": "A knee-dominant lower-body specialization emphasizes squats, presses and knee extensions. Two upper-body sessions and direct hamstring work support a balanced week.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "plate-loaded-machine",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 95,
    "durationWeeks": 8,
    "method": "Four-day upper/lower block with squat and front-squat priority",
    "focusMuscles": [
      "quadriceps"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Lower A · squat and press",
        "kind": "training",
        "sessionLengthMinutes": 95,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "leg-press",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 4,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 3,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Upper A · support",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 5,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushdown",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Lower B · front squat and lunge",
        "kind": "training",
        "sessionLengthMinutes": 95,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "front-squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "lunge",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": true,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "front-squat",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lunge",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Upper B · support",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 5,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushdown",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Increase only one major quad exercise load per lower session if recovery is uncertain; hold the others at their existing load and add reps as allowed. Walking-lunge reps are per leg and must remain controlled. Do not add more knee-extension sets beyond the 18-set weekly quad prescription.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Eighteen primary quad sets are split between two lower sessions with different lead movements. Hamstring curls and calf raises retain direct work that the quad-focused exercises do not replace. Two upper sessions keep pressing and pulling in the week without adding another hard leg day.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "Start week 1 at 3 RIR. If the full volume prevents recovery by the next lower session, remove one leg-press set and one leg-extension set from Lower A until recovery is stable.",
      "Support work is not an invitation to add another leg program."
    ]
  },
  {
    "programNumber": 8,
    "id": "glute-builder",
    "name": "Glute Builder",
    "description": "Hip thrusts and hip hinges lead two glute-focused lower sessions. Unilateral leg work and upper-body support round out the week.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "selectorized-machine"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 95,
    "durationWeeks": 8,
    "method": "Four-day upper/lower block with thrust and hinge emphasis",
    "focusMuscles": [
      "glutes"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Lower A · thrust and long hinge",
        "kind": "training",
        "sessionLengthMinutes": 95,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "hip-thrust",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "hip-thrust",
            "sets": 4,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "split-squat",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-lying",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Upper A · support",
        "kind": "training",
        "sessionLengthMinutes": 85,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "bench",
            "sets": 5,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-press",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Lower B · thrust and unilateral control",
        "kind": "training",
        "sessionLengthMinutes": 95,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "hip-thrust",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "hip-thrust",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "reverse-lunge",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-lying",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Upper B · support",
        "kind": "training",
        "sessionLengthMinutes": 85,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "bench",
            "sets": 5,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-press",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. For reverse lunges, reach 20 controlled reps per leg at 2 RIR before increasing range only if comfortable or choosing a harder controlled tempo; no extra equipment is assumed for that exercise. Hip-thrust progression must keep the top position at the hips rather than gaining height by arching the lower back.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Seventeen primary glute sets combine thrusts, hinges and unilateral leg movements across two sessions. Hamstrings receive ten primary sets, and knee extensions bring quad work to ten sets without adding more glute-heavy compounds. Upper-body days keep the lower sessions separated.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "The reverse-lunge prescription uses the bodyweight library entry. If bodyweight is too easy even at the top of the range, use the central dumbbell walking-lunge record at 10–12 reps per leg and re-check the same session's fatigue.",
      "If recovery declines, remove one thrust set from each lower session before changing the rest of the schedule."
    ]
  },
  {
    "programNumber": 9,
    "id": "v-taper-back",
    "name": "V-Taper Back",
    "description": "Vertical pulls emphasize lat work while supported and unsupported rows train back thickness. Two lower-body sessions and pressing work maintain a complete weekly structure.",
    "goal": "hypertrophy",
    "level": "advanced",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "free-weights",
      "plate-loaded-machine",
      "pull-up-bar",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 100,
    "durationWeeks": 8,
    "method": "Four-day upper/lower block with vertical and horizontal pulling priority",
    "focusMuscles": [
      "lats",
      "middle-trapezius"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Upper A · weighted vertical pull and row",
        "kind": "training",
        "sessionLengthMinutes": 95,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "strict-pullup",
            "sets": 2,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use unweighted pull-ups for a few easy repetitions; do not approach fatigue before the weighted work."
          },
          {
            "exerciseId": "barbell-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "pullup",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-row",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pulldown-straight",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "face-pull",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bench",
            "sets": 5,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Lower A · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Upper B · unweighted control and cable rows",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "strict-pullup",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "strict-pullup",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-row",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "face-pull",
            "sets": 2,
            "min": 15,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bench",
            "sets": 5,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Lower B · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-lying",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf-seated",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Weighted pull-ups progress by the smallest secure added load only after every set reaches 8 at 2 RIR without swinging. For unweighted pull-ups, add reps first; once 10 is controlled, use a slower descent rather than adding unlisted weight. One-arm dumbbell rows use the same reps on each side, capped by the weaker side.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Seventeen primary lat sets combine vertical pulls and rows over two upper sessions. Rows and face pulls also provide ten primary middle-trapezius sets, so the plan does not rely on pulldowns alone for back work. Keeping two lower days preserves leg training while the upper sessions prioritize pulling.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "Weighted pull-ups require already controlled full bodyweight pull-ups and rated loading equipment. Use the strict-pullup library entry instead if added load reduces control.",
      "Rows, pulldowns and pull-ups already load the biceps indirectly; avoid adding a separate full arm block."
    ]
  },
  {
    "programNumber": 10,
    "id": "push-pull-legs",
    "name": "Push / Pull / Legs",
    "description": "A six-day hypertrophy split repeats push, pull and leg sessions twice each week. One weekly rest day is built in, and the second round uses different rep emphases.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "plate-loaded-machine",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 6,
    "sessionLengthMinutes": 90,
    "durationWeeks": 8,
    "method": "Six-day Push A / Pull A / Legs A / Push B / Pull B / Legs B",
    "focusMuscles": [
      "pectorals",
      "lats",
      "quadriceps",
      "hamstrings",
      "calves",
      "lateral-deltoids"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Push A · heavier pressing",
        "kind": "training",
        "sessionLengthMinutes": 80,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "incline",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "incline",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "ohp",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushdown",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Pull A · row emphasis",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-row",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-row",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "face-pull",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "ez-curl",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Legs A · squat emphasis",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "leg-press",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-press",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "crunch",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Push B · moderate pressing",
        "kind": "training",
        "sessionLengthMinutes": 80,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "incline",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "incline",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "ohp",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 5,
            "min": 15,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "overhead-triceps",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Pull B · controlled repetitions",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "barbell-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-row",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "face-pull",
            "sets": 3,
            "min": 15,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Legs B · press and curl emphasis",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "squat",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "squat",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 3,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf-seated",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "crunch",
            "sets": 3,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Track A and B rep-range performance separately for the same exercise; an increase in one range does not force an increase in the other. Keep the weekly set count fixed rather than adding finishers to a six-day schedule.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Repeating the split gives the main muscle groups two weekly exposures while keeping each session organized by movement role. Chest, lats, quads, hamstrings, calves and lateral delts each receive ten primary sets in a build week. The second round changes rep ranges while Sunday remains free from planned training.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "Six sessions are a substantial weekly commitment. If recovery or attendance repeatedly breaks down, choose a lower-frequency program instead of compressing missed sessions together.",
      "Because barbell rows and RDLs load spinal erectors across nearby days, keep rows strict and reduce row load if the hinge sessions lose control. Main lifts stay at 2 RIR.",
      "Arm isolation totals 6 primary sets per week for each arm muscle; compound pressing and pulling add indirect work. Abs receive 6 direct sets rather than a second core specialization block."
    ]
  },
  {
    "programNumber": 11,
    "id": "upper-lower",
    "name": "Upper / Lower",
    "description": "A balanced four-day hypertrophy plan trains the upper and lower body twice each week. The second pair of sessions uses different rep ranges while maintaining the same weekly workload.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "plate-loaded-machine",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 100,
    "durationWeeks": 8,
    "method": "Balanced upper/lower split with two rep-range exposures",
    "focusMuscles": [
      "pectorals",
      "lats",
      "quadriceps",
      "hamstrings",
      "calves",
      "lateral-deltoids"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Upper A · lower rep emphasis",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "incline",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "ohp",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushdown",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Lower A · squat and hinge",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Upper B · moderate rep emphasis",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "incline",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "incline",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-press",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 5,
            "min": 15,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "overhead-triceps",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Lower B · press and curl",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-lying",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf-seated",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Four sessions distribute ten primary weekly sets to each listed focus muscle without a separate specialization day. The two upper and two lower sessions keep repeat exposures several days apart. Rep-range differences let the trainee practice both heavier and moderate-load work while tracking progress separately.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "Use the listed set ceiling rather than adding extra work to every session.",
      "Arm muscles also receive indirect work from presses and pulls; their isolation counts are not the whole stimulus."
    ]
  },
  {
    "programNumber": 12,
    "id": "powerbuilding",
    "name": "Powerbuilding",
    "description": "Heavier squat, bench, deadlift and press work is combined with separate hypertrophy sessions. The weekly structure preserves strength practice while adding measured muscle-building volume.",
    "goal": "strength",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "plate-loaded-machine",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 100,
    "durationWeeks": 12,
    "method": "Heavy upper/lower sessions followed by higher-volume upper/lower sessions",
    "focusMuscles": [
      "pectorals",
      "quadriceps",
      "hamstrings",
      "lats"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Upper strength",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "ohp",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 4,
            "min": 4,
            "max": 4,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 240,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "ohp",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-row",
            "sets": 4,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Lower strength",
        "kind": "training",
        "sessionLengthMinutes": 85,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "deadlift",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat",
            "sets": 4,
            "min": 4,
            "max": 4,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 240,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadlift",
            "sets": 3,
            "min": 3,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 240,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "front-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": true,
            "intensityNote": "Maintain trunk alignment and end the hold before technique changes."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Upper hypertrophy",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "incline",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "cable-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "incline",
            "sets": 4,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-bench",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 4,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "ez-curl",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushdown",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Lower hypertrophy",
        "kind": "training",
        "sessionLengthMinutes": 95,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "leg-press",
            "sets": 4,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 4,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "leg-extension",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During build weeks, increase the next heavy exposure by the smallest available increment only after every prescribed rep is completed with at least 2 RIR and stable technique. Keep heavy squat, bench, deadlift and overhead-press targets fixed rather than adding reps beyond their range. For hypertrophy work, add reps within the stated range, then increase load about 2–5% after all sets reach the upper bound at 2 RIR; track these loads separately from heavy days. Planks add 5 seconds per build week up to 45 seconds before progressing the lever. If two successive heavy exposures decline, reduce that lift's load about 10% and rebuild.",
    "deloadRule": "Weeks 4, 8 and 12: halve all working sets, rounding up, reduce external loads by about 10%, and keep 4 or more RIR. Halve plank duration. Keep the same four training days and warm-ups; use this deload early if recovery or performance remains poor. Resume with the last controlled build-week loads rather than forcing an increase.",
    "deloadWeeks": [
      4,
      8,
      12
    ],
    "whyThisWorks": "The first two sessions practice heavy lifts in the 3–6-rep range with long rests. The second pair supplies additional work in higher rep ranges, bringing chest, quads and hamstrings to ten primary sets each while back work is slightly higher. Keeping the two loading roles separate prevents every session from becoming both maximal and high volume.",
    "volumeNotes": "Heavy and moderate-load sets both count toward weekly working volume; do not count only the hypertrophy-labelled days. This is a combined goal plan: strength lifts use 3–6 reps and 150–240 seconds rest, while accessories use higher reps. Small muscle groups receive additional indirect work from the compounds.",
    "references": [
      {
        "id": "acsm-2009",
        "title": "American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19204579/"
      },
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      }
    ],
    "executionNotes": [
      "Keep the listed RIR; powerbuilding does not mean testing one-repetition maxima every week.",
      "If heavy-day performance repeatedly deteriorates, reduce one accessory set per exercise on the corresponding hypertrophy day before adding more recovery work."
    ]
  },
  {
    "programNumber": 13,
    "id": "deadlift-specialist",
    "name": "Deadlift Specialist",
    "description": "Two deadlift exposures combine heavier triples with lighter technique practice. Posterior-chain accessories and upper-body support provide a structured week around the main lift.",
    "goal": "strength",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "barbell",
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "rack",
      "selectorized-machine"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 90,
    "durationWeeks": 12,
    "method": "Four-day deadlift emphasis with heavy and technique hinge sessions",
    "focusMuscles": [
      "glutes",
      "hamstrings"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Lower A · heavy deadlift",
        "kind": "training",
        "sessionLengthMinutes": 85,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "deadlift",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "barbell-row",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "deadlift",
            "sets": 4,
            "min": 3,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 240,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "barbell-row",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-lying",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "front-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": true,
            "intensityNote": "Hold a braced position and stop before your lower back sags."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Upper A · support",
        "kind": "training",
        "sessionLengthMinutes": 75,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 4,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "ohp",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Lower B · technical deadlift",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "deadlift",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "front-squat",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "deadlift",
            "sets": 3,
            "min": 3,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 3,
            "perSide": false,
            "hardSet": true,
            "loadFactor": 0.85,
            "intensityNote": "Use about 85% of the last successful heavy deadlift load; each repetition is a fresh, controlled start."
          },
          {
            "exerciseId": "front-squat",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 180,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "rdl",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hip-thrust",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "side-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 25,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": true,
            "intensityNote": "Hold without hip sag or rotation; finish both sides with control."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Upper B · support",
        "kind": "training",
        "sessionLengthMinutes": 80,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "barbell-bench",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushdown",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Add the smallest practical deadlift increment, usually about 2.5%, at the next heavy exposure only after all four triples remain controlled at 2 or more RIR. The technique session stays at about 85% of the latest successful heavy load; do not increase it independently. Accessories use double progression: add reps within the range, then a small load increase when all sets reach the top at the listed RIR. Planks add 5 seconds per build week up to 45 seconds. If the bar drifts, the back position changes, or two heavy exposures decline, repeat or reduce the load about 10% instead of forcing progression.",
    "deloadRule": "Weeks 4, 8 and 12: reduce heavy deadlift work to two easy triples, technique work to one or two triples, and other working sets by half, rounding up. Reduce external load about 10% and keep at least 4 RIR; halve plank duration. Remove the RDL sets that week if the hinge still feels unrecovered. Use the same approach early after two consecutive performance declines.",
    "deloadWeeks": [
      4,
      8,
      12
    ],
    "whyThisWorks": "The heavy session provides a clear performance target, while the lighter session repeats the deadlift start with less load. Twelve primary hamstring sets and fifteen glute sets combine the deadlift work with curls, hinges and thrusts. Upper-body days retain pressing and pulling without adding a third hard deadlift day.",
    "volumeNotes": "The seven weekly deadlift sets include three lighter technical sets and should not all be treated as maximal-effort work. Main deadlifts use 3 reps and 3–4 minutes of rest; accessory reps are higher. This is a lift specialization block with lower direct quad and chest volume than a full hypertrophy plan.",
    "references": [
      {
        "id": "acsm-2009",
        "title": "American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19204579/"
      },
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      }
    ],
    "executionNotes": [
      "Deadlift experience and controlled setup are prerequisites; this is not the beginner introduction.",
      "Barbell rows also load the back as a stabilizer. Keep them strict and reduce row load if Thursday's hinge technique declines."
    ]
  },
  {
    "programNumber": 14,
    "id": "30-minute-express",
    "name": "30-Minute Express",
    "description": "Three compact full-body sessions use fixed set counts and moderate loads to fit a 30-minute visit. Each includes a brief warm-up and light practice sets before the working sets.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "gym",
    "requiredEquipment": [
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 30,
    "durationWeeks": 8,
    "method": "Fixed-volume full-body sessions with a compact warm-up and 60-second rests",
    "focusMuscles": [
      "pectorals",
      "lats",
      "quadriceps"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Express A · squat allocation",
        "kind": "training",
        "sessionLengthMinutes": 30,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace, gradually warming up."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "goblet",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50
            ]
          },
          {
            "exerciseId": "bench",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "goblet",
            "sets": 4,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bench",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete the four exercises in order with 60 seconds between working sets. Keep reps controlled and do not rush equipment setup. The compact warm-up is included in the 30-minute estimate; allow extra time if your body or equipment availability requires it."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Express B · press allocation",
        "kind": "training",
        "sessionLengthMinutes": 30,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace, gradually warming up."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "goblet",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50
            ]
          },
          {
            "exerciseId": "bench",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "goblet",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bench",
            "sets": 4,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete the four exercises in order with 60 seconds between working sets. Keep reps controlled and do not rush equipment setup. The compact warm-up is included in the 30-minute estimate; allow extra time if your body or equipment availability requires it."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Express C · row allocation",
        "kind": "training",
        "sessionLengthMinutes": 30,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace, gradually warming up."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "goblet",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50
            ]
          },
          {
            "exerciseId": "bench",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "goblet",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bench",
            "sets": 3,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 4,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete the four exercises in order with 60 seconds between working sets. Keep reps controlled and do not rush equipment setup. The compact warm-up is included in the 30-minute estimate; allow extra time if your body or equipment availability requires it."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. Keep the scheduled set counts and 60-second rests fixed; do not add intensity techniques or extra sets. Choose loads light enough to preserve 2 RIR with that rest. If more rest is needed, take it and omit the final RDL set that day to keep the visit close to 30 minutes; warm-up and controlled technique take priority over completing every set.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Twelve working sets per visit give chest, back and quads ten primary weekly sets across three exposures. The changing fourth-set allocation balances those priorities without changing equipment stations every day. A fixed set ceiling makes progression about better reps and manageable load increases rather than a longer session.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "The 30-minute estimate assumes the needed dumbbells, bench and row station are available with little waiting.",
      "The compact warm-up replaces the longer warm-up used by other gym plans. Add more warm-up if needed, even if the visit runs longer.",
      "Hamstrings receive six primary hinge sets; this is a time-budget compromise, not a hamstring specialization plan."
    ]
  },
  {
    "programNumber": 15,
    "id": "beginner-foundations",
    "name": "Beginner Foundations",
    "description": "Three full-body sessions emphasize repeatable technique and manageable loads. A two-week introduction reduces the working sets before building toward the full schedule.",
    "goal": "strength",
    "level": "beginner",
    "location": "gym",
    "requiredEquipment": [
      "bench",
      "bodyweight",
      "cable-machine",
      "dumbbells",
      "plate-loaded-machine",
      "selectorized-machine"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 65,
    "durationWeeks": 8,
    "method": "Technique-first full-body practice with an introductory volume stage",
    "focusMuscles": [
      "quadriceps",
      "pectorals",
      "lats"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Foundation A · squat, press and row",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "goblet",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "bench",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "goblet",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bench",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "calf",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Foundation B · supported machines and shoulder press",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "db-press",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "leg-press",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-press",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lat-pulldown",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "curl-seated",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Foundation C · repeat and refine",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "goblet",
            "sets": 3,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              40,
              60,
              80
            ]
          },
          {
            "exerciseId": "bench",
            "sets": 2,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "loadPercentagesOfWorkingWeight": [
              50,
              75
            ]
          }
        ],
        "exercises": [
          {
            "exerciseId": "goblet",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bench",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "cable-row",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bird-dog",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "In weeks 1–2, cap every working exercise at two sets and keep 4 RIR; use the introductoryWeeks override rather than the larger baseline set count. From week 3, use the scheduled sets only when you recover between sessions and can repeat the movement consistently. Keep main lifts at six reps and add the smallest load increment only after two consecutive exposures show the same controlled technique with at least 3 RIR. Accessories add reps within their range before a small load increase. Do not add load and the third set in the same exposure, and do not use body weight or gender to choose a starting weight.",
    "deloadRule": "Weeks 4 and 8: halve the scheduled working sets, rounding up, reduce external load about 10%, and keep 4 or more RIR. Retain easy warm-up and technique practice. Use the reduced two-set introductory stage again if several sessions are missed or technique becomes inconsistent; resume from the last controlled load.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Repeating the main movements across three nonconsecutive sessions creates regular technique practice. The introductory set reduction limits early workload while the full schedule is learned. The six-rep main sets use comfortable loads and 3 RIR rather than requiring a beginner to test a maximum.",
    "volumeNotes": "Learning and strength practice take priority over meeting a hypertrophy set quota for every muscle. Main squat/press/pull patterns use six reps, 2–2.5 minutes rest, and 3 RIR; higher-rep accessories remain easy to control. The first two weeks explicitly use fewer sets and higher RIR than the baseline schedule.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "acsm-2009",
        "title": "American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19204579/"
      }
    ],
    "introductoryWeeks": {
      "weeks": [
        1,
        2
      ],
      "maxWorkingSetsPerExercise": 2,
      "rir": 4
    },
    "executionNotes": [
      "Have a qualified coach check unfamiliar movements when possible.",
      "A six-rep target is not a six-repetition maximum. Keep the stated reps in reserve throughout the set."
    ]
  },
  {
    "programNumber": 16,
    "id": "home-bodyweight-basics",
    "name": "Home Bodyweight Basics",
    "description": "A three-day, equipment-free routine builds basic squat, push-up and trunk-control capacity. Push-up difficulty progresses by ability rather than by a fixed week number.",
    "goal": "hypertrophy",
    "level": "beginner",
    "location": "home",
    "requiredEquipment": [
      "bodyweight"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 65,
    "durationWeeks": 8,
    "method": "Nonconsecutive full-body practice with equipment-free exercise progressions",
    "focusMuscles": [
      "quadriceps",
      "pectorals",
      "glutes"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Basics A · squat and push",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "body-squat",
            "sets": 4,
            "min": 10,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "wall-pushup",
            "sets": 4,
            "min": 10,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "prone-w-raise",
            "sets": 4,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Basics B · unilateral control",
        "kind": "training",
        "sessionLengthMinutes": 55,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "body-squat",
            "sets": 3,
            "min": 10,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 10,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "reverse-lunge",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "prone-w-raise",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bird-dog",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Basics C · repeatable movement",
        "kind": "training",
        "sessionLengthMinutes": 60,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "body-squat",
            "sets": 3,
            "min": 10,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 10,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "prone-w-raise",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "In week 1, cap working exercises at two sets and keep 4 RIR; from week 2 use the listed sets only if recovery is stable. Add one controlled rep per set each build week while preserving 3 RIR. After two exposures at 20 wall push-ups per set, move feet farther from the wall or try the knee-pushup library entry at 8–12 reps; progress to pushup at 6–12 only when knee reps remain controlled. Keep the scheduled number of sets when changing variations and return to the lower rep bound. For squats and bridges, reach the upper bound before adding a 3-second lowering phase and restarting at the lower bound. Do not progress by rushing or adding endless sets.",
    "deloadRule": "Weeks 4 and 8: halve working sets, rounding up, choose an easier push-up position and return other movements to an ordinary controlled tempo, keeping at least 4 RIR. Keep the warm-up and the same nonconsecutive days. Use this easier week early if soreness or fatigue persists into the next session.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "The baseline gives quads twelve primary sets, chest ten and glutes sixteen over three sessions. Repeating a manageable push-up variation allows a clear progression without assuming equipment or a strong starting push-up. Prone shoulder work and trunk practice add movement variety, but do not replace progressively loaded lat pulling.",
    "volumeNotes": "The full build-week target is 12 primary quad sets, 10 chest sets and 16 glute sets; week 1 and deloads intentionally use less volume. Calves receive six direct sets and prone upper-back work is a low-load accessory, not a promise of full lat hypertrophy. Progress beyond the loading limits of bodyweight basics may require equipment or a more advanced program.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "introductoryWeeks": {
      "weeks": [
        1
      ],
      "maxWorkingSetsPerExercise": 2,
      "rir": 4
    },
    "exerciseProgressions": [
      {
        "fromExerciseId": "wall-pushup",
        "toExerciseIds": [
          "knee-pushup",
          "pushup"
        ],
        "criteria": "Choose the next variation only after two controlled exposures at the upper rep bound and 3 RIR; use its lower rep target from the progression rule."
      }
    ],
    "executionNotes": [
      "A solid wall and a clear floor are needed, but no external training equipment is assumed.",
      "The week-1 set cap overrides the larger baseline counts."
    ]
  },
  {
    "programNumber": 17,
    "id": "home-dumbbell-builder",
    "name": "Home Dumbbell Builder",
    "description": "A four-day upper/lower hypertrophy plan uses dumbbells and floor space. Floor presses, unsupported rows and standing presses avoid assuming a bench or rack.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "home",
    "requiredEquipment": [
      "bodyweight",
      "dumbbells"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 95,
    "durationWeeks": 8,
    "method": "Dumbbell-only upper/lower split with floor-based pressing",
    "focusMuscles": [
      "pectorals",
      "lats",
      "quadriceps",
      "hamstrings",
      "glutes"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Upper A · floor press and row",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "db-floor-press",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue."
          },
          {
            "exerciseId": "bent-db-row",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue."
          }
        ],
        "exercises": [
          {
            "exerciseId": "db-floor-press",
            "sets": 5,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bent-db-row",
            "sets": 5,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "standing-db-press",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-standing-curl",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "overhead-triceps",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Lower A · goblet and hinge",
        "kind": "training",
        "sessionLengthMinutes": 85,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "goblet",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue."
          },
          {
            "exerciseId": "db-rdl",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue."
          }
        ],
        "exercises": [
          {
            "exerciseId": "goblet",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-split-squat",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "weighted-crunch",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Upper B · controlled volume",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "db-floor-press",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue."
          },
          {
            "exerciseId": "bent-db-row",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue."
          }
        ],
        "exercises": [
          {
            "exerciseId": "db-floor-press",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bent-db-row",
            "sets": 5,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "standing-db-press",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "lateral",
            "sets": 3,
            "min": 15,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hammer",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "overhead-triceps",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Lower B · unilateral and hamstring work",
        "kind": "training",
        "sessionLengthMinutes": 95,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "goblet",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue."
          },
          {
            "exerciseId": "db-rdl",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a lighter dumbbell if available. With fixed weights, perform only these two easy practice reps at an appropriate working load and stop well before fatigue."
          }
        ],
        "exercises": [
          {
            "exerciseId": "goblet",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-rdl",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "db-split-squat",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "hamstring-walkout",
            "sets": 4,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 5,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "weighted-crunch",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During each build week, keep the same exercise order and add one repetition to sets that still meet the prescribed RIR. Once every set reaches the top of its rep range at the target RIR, increase by the smallest available load next exposure (usually about 2–5%) and return to the bottom of the range. If the new load drops you below the range or target RIR, use a smaller increase or keep the previous load. Do not increase sets or load during a deload. If only fixed-weight dumbbells are available, first reach the upper rep bound, then add a controlled 3-second descent and restart at the lower bound; do not add sets beyond the prescription. For hamstring walkouts, increase the controlled step distance before adding repetitions, stopping before the back position changes. For calf raises, use a slower descent after 20 reps then add a brief pause at the top while keeping the same bodyweight calf-raise exercise.",
    "deloadRule": "Weeks 4 and 8 are deload weeks: perform half the listed working sets, rounding up, reduce external load by about 10%, and keep at least 4 RIR. Keep the same training days and easy warm-up. After each deload, restart with the last successfully controlled build-week load rather than forcing an increase. If performance falls for two successive exposures or recovery remains poor, use this deload early and resume one build step lower. With fixed dumbbells, use fewer reps or the easier movement range to maintain at least 4 RIR instead of inventing an unavailable 10% weight reduction.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Ten primary sets each for chest, lats, quads and hamstrings are supplied without bench-supported exercises. Two upper and two lower sessions distribute the work while floor pressing limits the bottom position naturally. The dumbbells provide measurable loading increases until their available weight becomes the limiting factor.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "executionNotes": [
      "A pair of dumbbells with suitable loads is assumed; adjustability is useful but not mandatory.",
      "All required equipment is bodyweight and dumbbells. There is no bench, chair, door anchor or rack requirement."
    ]
  },
  {
    "programNumber": 18,
    "id": "resistance-band-total-body",
    "name": "Resistance Band Total Body",
    "description": "Three full-body sessions use long resistance bands for pushing, pulling and leg work. Exercises use the feet or upper back for support instead of an unselected door anchor.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "home",
    "requiredEquipment": [
      "bodyweight",
      "resistance-bands"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 90,
    "durationWeeks": 8,
    "method": "Three-day band training with repeatable tension and rep progression",
    "focusMuscles": [
      "pectorals",
      "lats",
      "quadriceps",
      "hamstrings",
      "glutes"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Band A · baseline tension",
        "kind": "training",
        "sessionLengthMinutes": 90,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "band-squat",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed."
          },
          {
            "exerciseId": "band-row",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed."
          }
        ],
        "exercises": [
          {
            "exerciseId": "band-squat",
            "sets": 4,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-row",
            "sets": 4,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-chest-press",
            "sets": 4,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-rdl",
            "sets": 4,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-press",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-pull-apart",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-curl",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Band B · hinge and press",
        "kind": "training",
        "sessionLengthMinutes": 80,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "band-rdl",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed."
          },
          {
            "exerciseId": "band-chest-press",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed."
          }
        ],
        "exercises": [
          {
            "exerciseId": "band-rdl",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-chest-press",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-squat",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-row",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-press",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-triceps-extension",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Band C · repeatable volume",
        "kind": "training",
        "sessionLengthMinutes": 80,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "band-squat",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed."
          },
          {
            "exerciseId": "band-row",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Practice with minimal band tension and a comfortable range. No percentage of band resistance or second band is assumed."
          }
        ],
        "exercises": [
          {
            "exerciseId": "band-squat",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-row",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-chest-press",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-rdl",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-pull-apart",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-curl",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "band-triceps-extension",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Record the band used, grip length and foot placement for each exercise; band colors are not universal weight units. Add reps within the listed range while preserving 2 RIR and the same safe setup. After every set reaches the upper bound, increase tension by a small, manufacturer-permitted setup change or a stronger band if available, then return to the lower rep bound. Do not shorten or knot a band beyond its instructions or assume a 5% resistance increase can be measured from stretch alone. Keep the set count fixed and do not progress during deload weeks.",
    "deloadRule": "Weeks 4 and 8: halve working sets, rounding up, and reduce band tension or use a comfortably easier range so at least 4 RIR remain. Keep the same warm-up and controlled technique. No numerical percentage reduction is prescribed because band resistance depends on the band and its stretch. Use the same easier week early if performance and recovery deteriorate.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "The four main movement patterns each receive ten primary sets across three sessions, with squats and hinges together supplying twenty glute sets. Recording the same band, grip and setup makes rep progression easier to interpret. Elastic resistance can support strength development, but the exact loading and hypertrophy response of this original schedule is not established by the cited comparisons.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      },
      {
        "id": "lopes-elastic-2019",
        "title": "Lopes et al.: Effects of training with elastic resistance versus conventional resistance on muscular strength: A systematic review and meta-analysis (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30815258/"
      }
    ],
    "executionNotes": [
      "Long bands suitable for the listed ranges are assumed; inspect them and follow their stretch limits. No door anchor, pull-up bar or dumbbell is required.",
      "A short mini-loop alone cannot perform every listed movement; use the described long band setup.",
      "Keep bands secured under the feet or around the back as specified in the central instructions."
    ],
    "requiredCapabilities": [
      "long-bands"
    ]
  },
  {
    "programNumber": 19,
    "id": "home-hiit-fat-burner",
    "name": "Home HIIT Fat Burner",
    "description": "Short bodyweight work intervals alternate with generous recovery on three nonconsecutive days. The plan builds conditioning and activity, while fat loss still depends on dietary energy balance.",
    "goal": "fat-loss",
    "level": "intermediate",
    "location": "home",
    "requiredEquipment": [
      "bodyweight"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 35,
    "durationWeeks": 8,
    "method": "Bodyweight interval clusters with controlled hard effort and recovery",
    "focusMuscles": [],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Intervals A · movement control",
        "kind": "training",
        "sessionLengthMinutes": 35,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "step-jack",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 40,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Work at about 7–8/10 effort while keeping steps controlled; recover at an easy pace."
          },
          {
            "exerciseId": "body-squat",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 40,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Hard but controlled effort around 7/10; stop before technique deteriorates."
          },
          {
            "exerciseId": "mountain-climber",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 40,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a repeatable pace around 7/10; keep hips stable and slow down if needed."
          },
          {
            "exerciseId": "stepback-thrust",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 40,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Step back rather than jump; keep a controlled plank and effort around 7/10."
          },
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy cooldown; allow breathing to settle."
          }
        ],
        "notes": "Complete each movement's three work/recovery intervals before the next movement. Recover easily for at least 60 seconds when changing movements. Keep the easy march cooldown last. Work intervals are hard but controlled, not all-out; maintain the prescribed recovery."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Intervals B · steadier lower impact",
        "kind": "training",
        "sessionLengthMinutes": 35,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "step-jack",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Repeatable hard effort around 7/10; keep one foot grounded."
          },
          {
            "exerciseId": "reverse-lunge",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Alternate legs slowly enough to balance; hard effort must not replace control."
          },
          {
            "exerciseId": "march",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 25,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "March briskly around 7/10 effort without leaning backward; recover easily."
          },
          {
            "exerciseId": "mountain-climber",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a controlled pace around 7/10; take longer recovery if form or breathing has not settled."
          },
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy cooldown with relaxed breathing."
          }
        ],
        "notes": "Complete each movement's three work/recovery intervals before the next movement. Recover easily for at least 60 seconds when changing movements. Keep the easy march cooldown last. Work intervals are hard but controlled, not all-out; maintain the prescribed recovery."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Intervals C · repeatable harder bouts",
        "kind": "training",
        "sessionLengthMinutes": 35,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "step-jack",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 25,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Work around 7–8/10 effort; each interval should remain repeatable."
          },
          {
            "exerciseId": "body-squat",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 25,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Keep the same comfortable range from first rep to last; effort around 7/10."
          },
          {
            "exerciseId": "mountain-climber",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Brace the trunk and stay controlled at a hard, repeatable pace."
          },
          {
            "exerciseId": "stepback-thrust",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use step-back transitions and stop before the plank position breaks down."
          },
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy cooldown; do not stop abruptly after a hard interval."
          }
        ],
        "notes": "Complete each movement's three work/recovery intervals before the next movement. Recover easily for at least 60 seconds when changing movements. Keep the easy march cooldown last. Work intervals are hard but controlled, not all-out; maintain the prescribed recovery."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Use week 1 to learn the movements at about 6/10 effort. During later build weeks, work around 7–8/10 rather than all-out sprint effort. If every interval remains controlled and recovery is adequate, add 5 seconds to one exercise's work intervals at the next exposure, up to 30 seconds, while preserving the listed 40–45 seconds of recovery and three intervals per exercise. Do not increase pace and interval duration in the same week, and do not add more clusters beyond the 35-minute budget. If technique declines, shorten the work interval or extend recovery rather than chasing exhaustion.",
    "deloadRule": "Weeks 4 and 8: use two intervals per exercise instead of three, reduce work bouts to 15–20 seconds, and keep recovery at 45–60 seconds with an easy-to-moderate effort around 5–6/10. Keep the warm-up and cooldown. Use this easier week early if fatigue persists into the next session.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Repeated hard bouts with recovery create a conditioning stimulus without equipment or mandatory jumping. Nonconsecutive days give room to recover between interval sessions. This schedule adds activity but does not guarantee greater fat loss than another sustainable activity plan with the same overall energy balance.",
    "volumeNotes": "These are conditioning intervals with hardSet false, not a claim of 10–20 hypertrophy sets per muscle. RIR is null for timed intervals; the intensity note and movement quality govern effort. This plan does not replace a complete resistance-training program.",
    "references": [
      {
        "id": "interval-adaptations-2014",
        "title": "Physiological and Health-Related Adaptations to Low-Volume Interval Training: Influences of Nutrition and Sex (2014)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4213388/"
      },
      {
        "id": "issn-diets-2017",
        "title": "Aragon et al.: International society of sports nutrition position stand: diets and body composition (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28630601/"
      }
    ],
    "nutritionGuidance": [
      "Fat loss requires a sustainable dietary energy deficit; the name does not promise spot reduction or a fixed calorie burn.",
      "Keep meals and activity consistent enough to monitor your response, and avoid automatically eating back an app's guessed exercise calories.",
      "If recovery or daily functioning worsens, reduce the deficit or training demand rather than adding more intervals."
    ],
    "executionNotes": [
      "Finish the prescribed intervals for one movement before moving to the next. Recover at least 60 seconds between movement clusters; the cooldown comes last.",
      "Recover by standing or marching easily. Begin the next interval only when you can control the movement and breathing; extend rest if needed.",
      "For an unsuitable floor-based interval, use the central march or step-jack entry for that work period rather than forcing a painful or uncontrolled position."
    ]
  },
  {
    "programNumber": 20,
    "id": "pull-up-mastery",
    "name": "Pull-Up Mastery",
    "description": "A staged skill plan develops assisted pulling, hanging control and controlled lowering before full pull-up work. Progress depends on demonstrated ability and a safely reachable low bar, not an eight-week guarantee.",
    "goal": "skill",
    "level": "beginner",
    "location": "home",
    "requiredEquipment": [
      "bodyweight",
      "pull-up-bar"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 55,
    "durationWeeks": 8,
    "method": "Ability-based pulling stages with assistance, eccentrics and strict reps",
    "focusMuscles": [
      "lats",
      "forearms"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Pulling A · assistance and positions",
        "kind": "training",
        "sessionLengthMinutes": 45,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "active-hang",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 10,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Very easy foot-supported grip and shoulder-position practice before the session."
          }
        ],
        "exercises": [
          {
            "exerciseId": "active-hang",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 15,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use foot support as needed; finish with grip and shoulder control still available."
          },
          {
            "exerciseId": "scapular-pullup",
            "sets": 3,
            "min": 4,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 4,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "foot-assisted-pullup",
            "sets": 3,
            "min": 5,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Apply the current skill-stage omissions and overrides before training. Keep hangs and scapular pulls easy, then complete the pulling sets with full rest. The low bar must permit a safe start and step-down without added equipment."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Pulling B · controlled lowering",
        "kind": "training",
        "sessionLengthMinutes": 55,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "active-hang",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 10,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Very easy foot-supported grip and shoulder-position practice before the session."
          }
        ],
        "exercises": [
          {
            "exerciseId": "active-hang",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 15,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Keep feet close to the floor and stop before grip failure."
          },
          {
            "exerciseId": "scapular-pullup",
            "sets": 3,
            "min": 4,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 4,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "foot-assisted-pullup",
            "sets": 3,
            "min": 5,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "negative-pullup",
            "sets": 2,
            "min": 2,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true,
            "eccentricSeconds": 5,
            "intensityNote": "Use only in the assisted/eccentric stage after its entry criteria; each lowering lasts up to 5 controlled seconds."
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Apply the current skill-stage omissions and overrides before training. Keep hangs and scapular pulls easy, then complete the pulling sets with full rest. The low bar must permit a safe start and step-down without added equipment."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Pulling C · repeatable assisted reps",
        "kind": "training",
        "sessionLengthMinutes": 50,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "active-hang",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 10,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Very easy foot-supported grip and shoulder-position practice before the session."
          }
        ],
        "exercises": [
          {
            "exerciseId": "active-hang",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 15,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a comfortable overhead position and retain enough grip to step down safely."
          },
          {
            "exerciseId": "scapular-pullup",
            "sets": 2,
            "min": 4,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 4,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "foot-assisted-pullup",
            "sets": 3,
            "min": 5,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "negative-pullup",
            "sets": 2,
            "min": 2,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 3,
            "perSide": false,
            "hardSet": true,
            "eccentricSeconds": 5,
            "intensityNote": "Only use this stage after controlled assisted reps; stop before the descent becomes a drop."
          }
        ],
        "notes": "Apply the current skill-stage omissions and overrides before training. Keep hangs and scapular pulls easy, then complete the pulling sets with full rest. The low bar must permit a safe start and step-down without added equipment."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Start in the foundation skill stage even if the baseline schedule shows later-stage negatives; apply its omissions and set cap. Add assisted reps toward eight while keeping about 3 RIR, then gradually use less leg assistance without changing the range. Enter the assisted/eccentric stage only after two sessions of eight controlled assisted reps per set and comfortable supported hangs; begin each descent at 3 seconds and build toward the prescribed 5 seconds before adding reps. Enter the strict-rep stage only after you can demonstrate three controlled unassisted pull-ups without kipping; use 1–3 reps at 1 or more RIR, adding one rep to a set only while that reserve remains. Progress the supported hangs by 5 seconds per build week up to 25 seconds, without approaching grip failure. Stay at a stage as long as needed rather than forcing a calendar deadline.",
    "deloadRule": "Weeks 4 and 8: halve assisted or strict working sets, rounding up; omit all negative-pullup sets and halve supported-hang duration. Increase foot assistance and keep at least 4 RIR on rep exercises, while retaining only easy scapular practice. Use the same reduction early if elbows, shoulders or grip remain unrecovered; return to the last controlled stage and do not force eccentric repetitions.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Assisted repetitions supply practice through the pulling range while allowing the legs to control difficulty. Brief hangs and scapular practice develop the starting position, and low-rep eccentric work is added only after its control criteria are met. The later stage replaces assisted work with small strict-rep sets rather than stacking a full extra workout on top.",
    "volumeNotes": "This is skill practice, not a high-volume hypertrophy prescription. Hangs and scapular pulls are easy practice with hardSet false. The assisted/eccentric baseline has nine assisted and four eccentric working sets per week; the entry stage uses fewer sets and omits eccentrics, while the strict stage replaces assisted work and removes the negative sets.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "acsm-2009",
        "title": "American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19204579/"
      }
    ],
    "setupRequirements": [
      "A securely mounted, rated pull-up bar low enough for foot-assisted pulling and reaching the top position with feet on the floor is required.",
      "A high doorway bar alone is not sufficient for the assisted and eccentric stages; do not assume a chair, band or climb to the bar.",
      "This is a pulling specialization plan, not a complete full-body strength program."
    ],
    "skillStages": [
      {
        "id": "foundation",
        "entryCriteria": "Initial stage for a trainee without three controlled strict pull-ups; use it until assisted reps and hangs are repeatable.",
        "maxWorkingSetsPerExercise": 2,
        "omitExerciseIds": [
          "negative-pullup"
        ],
        "prescriptionOverrides": []
      },
      {
        "id": "assisted-eccentric",
        "entryCriteria": "Two sessions of eight controlled foot-assisted reps per set at about 3 RIR, comfortable supported hangs, and the ability to begin a slow lowering from the safely reachable top position.",
        "maxWorkingSetsPerExercise": null,
        "omitExerciseIds": [],
        "prescriptionOverrides": []
      },
      {
        "id": "strict-reps",
        "entryCriteria": "Already able to demonstrate three controlled strict pull-ups without kipping or craning the neck.",
        "maxWorkingSetsPerExercise": null,
        "omitExerciseIds": [
          "negative-pullup"
        ],
        "prescriptionOverrides": [
          {
            "fromExerciseId": "foot-assisted-pullup",
            "toPrescription": {
              "exerciseId": "strict-pullup",
              "sets": 3,
              "min": 1,
              "max": 3,
              "durationSeconds": null,
              "distanceMetres": null,
              "restSeconds": 150,
              "rir": 1,
              "perSide": false,
              "hardSet": true
            }
          }
        ]
      }
    ],
    "executionNotes": [
      "Skill-stage entry criteria override the calendar: a beginner does not start negative pull-ups merely because it is Wednesday.",
      "An eccentric rep ends when the slow descent is no longer controlled; the listed RIR means additional equally controlled descents, not extra drops.",
      "The first strict pull-up may arrive before or after this block. Do not test to failure at every session."
    ],
    "requiredCapabilities": [
      "low-pull-up-bar"
    ]
  },
  {
    "programNumber": 21,
    "id": "push-up-progression",
    "name": "Push-Up Progression",
    "description": "Three weekly practice sessions build from wall and knee push-ups toward controlled full and advanced variations. Progress follows demonstrated technique rather than automatic weekly difficulty jumps.",
    "goal": "skill",
    "level": "beginner",
    "location": "home",
    "requiredEquipment": [
      "bodyweight"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 35,
    "durationWeeks": 8,
    "method": "Ability-gated push-up practice with controlled eccentric and lever progressions",
    "focusMuscles": [
      "pectorals",
      "triceps"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Push practice A",
        "kind": "training",
        "sessionLengthMinutes": 30,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "scapular-pushup",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "front-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": true,
            "intensityNote": "Keep the trunk aligned and breathe normally; stop before sagging."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Push practice B",
        "kind": "training",
        "sessionLengthMinutes": 35,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "eccentric-pushup",
            "sets": 2,
            "min": 2,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true,
            "eccentricSeconds": 4,
            "intensityNote": "Use only after the knee/eccentric stage entry criteria; put knees down to reset."
          },
          {
            "exerciseId": "scapular-pushup",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Push practice C",
        "kind": "training",
        "sessionLengthMinutes": 35,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "eccentric-pushup",
            "sets": 2,
            "min": 2,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true,
            "eccentricSeconds": 4,
            "intensityNote": "Lower only as slowly as you can control; reset from the knees."
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Begin in the wall stage and add controlled reps while keeping 3 RIR. After two sessions of 15 well-controlled wall reps per set, increase the lean or move to the knee/eccentric stage at 6–12 knee reps. Introduce the short eccentric sets only when you can lower without the hips sagging. Move to the full stage after two sessions of 12 controlled knee reps and three controlled full push-ups; keep at least 2 RIR while building 4–10 full reps. Use the advanced archer stage only after two sessions of 12 controlled full reps; start at 3–6 reps per side without twisting and return to the full variation if control declines. Add 5 seconds to planks up to 35 seconds before choosing a more demanding trunk position.",
    "deloadRule": "Weeks 4 and 8: halve working sets, rounding up, omit eccentric sets and use an easier push-up variation while keeping at least 4 RIR. Halve plank duration. Retain easy scapular practice and return to the last controlled stage after the deload; ability criteria still apply.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "A repeatable starting variation allows consistent practice while the trunk stays controlled. Small eccentric doses are introduced only after basic pushing ability is present. Later stages replace the easier movement instead of adding a second complete push-up workout.",
    "volumeNotes": "This is skill practice, not an instruction to reach failure or maximize chest volume. The wall baseline has nine primary pushing sets plus small eccentric doses in the later introductory stage. Stage substitutions keep the weekly set count controlled.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "acsm-2009",
        "title": "American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19204579/"
      }
    ],
    "skillStages": [
      {
        "id": "wall",
        "entryCriteria": "Start here until wall reps are controlled at the stated range and reserve.",
        "maxWorkingSetsPerExercise": null,
        "omitExerciseIds": [
          "eccentric-pushup"
        ],
        "prescriptionOverrides": []
      },
      {
        "id": "knee-eccentric",
        "entryCriteria": "Two sessions of 15 controlled wall reps per set and the ability to lower a knee or full push-up without hip sag.",
        "maxWorkingSetsPerExercise": null,
        "omitExerciseIds": [],
        "prescriptionOverrides": [
          {
            "fromExerciseId": "wall-pushup",
            "toPrescription": {
              "exerciseId": "knee-pushup",
              "sets": 3,
              "min": 6,
              "max": 12,
              "durationSeconds": null,
              "distanceMetres": null,
              "restSeconds": 90,
              "rir": 3,
              "perSide": false,
              "hardSet": true
            }
          }
        ]
      },
      {
        "id": "full",
        "entryCriteria": "Two sessions of 12 controlled knee reps and three controlled full push-ups.",
        "maxWorkingSetsPerExercise": null,
        "omitExerciseIds": [
          "eccentric-pushup"
        ],
        "prescriptionOverrides": [
          {
            "fromExerciseId": "wall-pushup",
            "toPrescription": {
              "exerciseId": "pushup",
              "sets": 3,
              "min": 4,
              "max": 10,
              "durationSeconds": null,
              "distanceMetres": null,
              "restSeconds": 120,
              "rir": 2,
              "perSide": false,
              "hardSet": true
            }
          }
        ]
      },
      {
        "id": "advanced",
        "entryCriteria": "Two sessions of 12 controlled full push-ups without sagging or shoulder discomfort.",
        "maxWorkingSetsPerExercise": null,
        "omitExerciseIds": [
          "eccentric-pushup"
        ],
        "prescriptionOverrides": [
          {
            "fromExerciseId": "wall-pushup",
            "toPrescription": {
              "exerciseId": "archer-pushup",
              "sets": 3,
              "min": 3,
              "max": 6,
              "durationSeconds": null,
              "distanceMetres": null,
              "restSeconds": 120,
              "rir": 2,
              "perSide": true,
              "hardSet": true
            }
          }
        ]
      }
    ],
    "executionNotes": [
      "A solid wall and clear floor are sufficient. No bench or elevated furniture is assumed.",
      "Apply stage omissions and substitutions before the baseline session. Changing stage is a deliberate ability-based choice."
    ]
  },
  {
    "programNumber": 22,
    "id": "kettlebell-conditioning",
    "name": "Kettlebell Conditioning",
    "description": "One kettlebell supports hinge, squat, lunge and carry work across three sessions. Swing sets use crisp technique and recovery instead of training to exhaustion.",
    "goal": "endurance",
    "level": "intermediate",
    "location": "home",
    "requiredEquipment": [
      "bodyweight",
      "kettlebell"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 55,
    "durationWeeks": 8,
    "method": "Single-kettlebell conditioning with separate ballistic and controlled work",
    "focusMuscles": [
      "glutes",
      "hamstrings"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Bell A · hinge and carry",
        "kind": "training",
        "sessionLengthMinutes": 55,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "kb-deadlift",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "A few easy technique reps before the working sets; use less band tension or an easier body position if applicable."
          }
        ],
        "exercises": [
          {
            "exerciseId": "kb-deadlift",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "kb-swing",
            "sets": 6,
            "min": 10,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Keep every swing crisp; stop early if the hinge or float changes."
          },
          {
            "exerciseId": "kb-goblet",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "kb-suitcase-carry",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": null,
            "distanceMetres": 20,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": false,
            "intensityNote": "Walk with a level torso and enough grip to set the bell down safely; distance is per side."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Bell B · controlled strength endurance",
        "kind": "training",
        "sessionLengthMinutes": 55,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "kb-goblet",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "A few easy technique reps before the working sets; use less band tension or an easier body position if applicable."
          }
        ],
        "exercises": [
          {
            "exerciseId": "kb-goblet",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "kb-deadlift",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "kb-reverse-lunge",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "kb-suitcase-carry",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": null,
            "distanceMetres": 20,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": false,
            "intensityNote": "Use short controlled steps; turns are slow and the route is clear."
          },
          {
            "exerciseId": "side-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": true,
            "intensityNote": "Keep hips and shoulders aligned; stop before the hold deteriorates."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Bell C · repeatable swing practice",
        "kind": "training",
        "sessionLengthMinutes": 50,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "kb-swing",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "A few easy technique reps before the working sets; use less band tension or an easier body position if applicable."
          }
        ],
        "exercises": [
          {
            "exerciseId": "kb-swing",
            "sets": 6,
            "min": 10,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use only after a controlled deadlift and hinge are established; finish before technique slows."
          },
          {
            "exerciseId": "kb-goblet",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "kb-deadlift",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "kb-suitcase-carry",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": null,
            "distanceMetres": 20,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": false,
            "intensityNote": "Retain a tall, steady torso and controlled grip on each side."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Use a bell that is manageable for the most demanding listed movement. Add controlled reps in the squat, deadlift and lunge ranges before using a heavier bell if available. For swings, add one rep to at most two sets per build week, up to 15 per set, only while every rep remains crisp; never shorten rest and add reps in the same week. Carries add 5 metres per side per build week up to 30 metres on a clear route. With one fixed bell, keep the set ceiling and progress reps or distance rather than inventing load increases. Use the kb-deadlift entry instead of swings until the hinge is controlled.",
    "deloadRule": "Weeks 4 and 8: halve working and swing sets, rounding up, reduce carry distance by half, and keep rep work at least 4 RIR. Use an easier bell if available; otherwise use the low end of the rep range and omit swings if hinge control is not fresh. Retain easy warm-up and full recovery between short sets.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Controlled lifts and carries provide work with a single load while swing practice adds repeated hip extension. The sessions separate crisp ballistic sets from grinding strength efforts. Rest intervals and a fixed set ceiling make conditioning progression easier to monitor.",
    "volumeNotes": "Swing and carry sets are conditioning or technical work with hardSet false; they are not counted as full hypertrophy sets. The plan does not promise balanced upper-body muscle growth from one kettlebell.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "nsca-kettlebell-swing",
        "title": "NSCA: Two-Arm Kettlebell Swing",
        "url": "https://www.nsca.com/education/articles/kinetic-select/two-arm-kettlebell-swing/"
      },
      {
        "id": "acsm-exercise-2011",
        "title": "ACSM position stand: Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults (2011)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21694556/"
      }
    ],
    "setupRequirements": [
      "One suitable kettlebell and a clear floor or short walking route are required.",
      "Swings require an established hinge; substitute the existing kettlebell deadlift record until ready."
    ]
  },
  {
    "programNumber": 23,
    "id": "core-stability-back-health",
    "name": "Core Stability & Back Health",
    "description": "Gentle trunk-control and hip exercises emphasize steady positions and comfortable ranges. This is general training, with no promise to diagnose or cure back pain.",
    "goal": "skill",
    "level": "beginner",
    "location": "home",
    "requiredEquipment": [
      "bodyweight"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 40,
    "durationWeeks": 8,
    "method": "Low-fatigue anti-movement practice with easy walking",
    "focusMuscles": [
      "abdominals",
      "obliques"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Control A",
        "kind": "training",
        "sessionLengthMinutes": 40,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "bird-dog",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "side-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 15,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": true,
            "intensityNote": "Use bent knees if needed and stop before the trunk rotates."
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 4,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 480,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy comfortable walking; it can be broken into short lengths."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Control B",
        "kind": "training",
        "sessionLengthMinutes": 35,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "hinge-drill",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "front-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 15,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": true,
            "intensityNote": "Keep a comfortable trunk position and stop before sagging."
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 4,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 480,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy conversational pace, without forcing stride length."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Control C",
        "kind": "training",
        "sessionLengthMinutes": 40,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "bird-dog",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "side-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 15,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": true,
            "intensityNote": "Breathe normally and end before alignment changes."
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 4,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 480,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy walking with relaxed breathing."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Add one slow, controlled rep per set in a build week up to the upper bound while preserving the stated reserve and steady trunk position. Add 5 seconds to holds only when breathing and alignment remain easy, up to 30 seconds. Then make a small lever change already described in the central instructions, such as a longer leg reach, rather than adding external weight. Add 1 minute of easy walking per build week up to 12 minutes and allow extra session time. Do not increase rep range or hold duration through pain or loss of control.",
    "deloadRule": "Weeks 4 and 8: halve working sets, rounding up, halve holds, and use the easier lever or comfortable movement range while keeping at least 5 RIR on rep practice. Keep walking easy for 5–8 minutes. Reduce earlier if movements stop being comfortable; the program is not a treatment plan.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "The sessions use repeatable trunk positions instead of heavy loading or rapid end-range movement. Small doses across three days allow practice without deliberately seeking fatigue. Comfortable movement control is the aim, not a claim that one exercise is universally safe for every back condition.",
    "volumeNotes": "Core practice is intentionally below a high-volume hypertrophy prescription. Holds use technical control rather than RIR, and hinge practice and easy walking are not hypertrophy hard sets.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "ace-exercise-library",
        "title": "American Council on Exercise: Exercise Library",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/"
      }
    ],
    "executionNotes": [
      "Low back friendly describes the controlled, adaptable intent; no movement is guaranteed pain-free for everyone.",
      "Choose a comfortable variation or stop a movement that causes pain rather than forcing the listed range."
    ]
  },
  {
    "programNumber": 24,
    "id": "mobility-posture-fix",
    "name": "Mobility & Posture Fix",
    "description": "Short sessions practice comfortable shoulder, hip, ankle and trunk movement around a desk-based day. The title does not promise a permanent posture correction or a medical treatment.",
    "goal": "mobility",
    "level": "beginner",
    "location": "home",
    "requiredEquipment": [
      "bodyweight"
    ],
    "daysPerWeek": 5,
    "sessionLengthMinutes": 25,
    "durationWeeks": 8,
    "method": "Frequent low-fatigue mobility practice with varied body regions",
    "focusMuscles": [],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Desk reset A",
        "kind": "training",
        "sessionLengthMinutes": 25,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy movement to begin."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "chin-tuck",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "wall-slide",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "hip-flexor-stretch",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": null,
            "perSide": true,
            "hardSet": false,
            "intensityNote": "Mild, comfortable stretch with steady breathing; repeat on both sides."
          },
          {
            "exerciseId": "open-book",
            "sets": 1,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Desk reset B",
        "kind": "training",
        "sessionLengthMinutes": 25,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy movement to begin."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "ankle-rock",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "cat-camel",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "prone-w-raise",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Desk reset C",
        "kind": "training",
        "sessionLengthMinutes": 25,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy movement to begin."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "wall-slide",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "open-book",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hip-flexor-stretch",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": null,
            "perSide": true,
            "hardSet": false,
            "intensityNote": "Mild front-of-hip stretch with the pelvis controlled; repeat both sides."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Desk reset D",
        "kind": "training",
        "sessionLengthMinutes": 25,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy movement to begin."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "chin-tuck",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "ankle-rock",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "cat-camel",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Desk reset E",
        "kind": "training",
        "sessionLengthMinutes": 25,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy movement to begin."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 5,
            "max": 5,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "prone-w-raise",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "wall-slide",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 45,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "open-book",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "In build weeks, add one controlled repetition within the range only when the movement stays easy. Add 5 seconds to a stretch after a week of comfortable practice, up to 30 seconds per side, without forcing end range. Once the upper bound is easy, use a slightly smoother or more comfortable range rather than adding resistance. Keep the session low fatigue and add regular changes of sitting or standing position during the day.",
    "deloadRule": "Weeks 4 and 8: use one set per movement, ordinary comfortable ranges and 15-second stretches while keeping every rep easy. Maintain the routine as a brief movement break rather than adding intensity. Return to the previous comfortable prescription afterward.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Frequent small sessions create opportunities to explore comfortable ranges after long periods in one position. Alternating body regions keeps each session manageable. The schedule supports movement variety rather than claiming there is one ideal posture to hold all day.",
    "volumeNotes": "All movements have hardSet false. Numeric RIR on rep practice means deliberately staying far from fatigue; it is not a hypertrophy target. Repeated mobility days are gentle practice, not repeated hard strength sessions.",
    "references": [
      {
        "id": "acsm-exercise-2011",
        "title": "ACSM position stand: Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults (2011)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21694556/"
      },
      {
        "id": "ace-exercise-library",
        "title": "American Council on Exercise: Exercise Library",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/"
      }
    ]
  },
  {
    "programNumber": 25,
    "id": "outdoor-calisthenics",
    "name": "Outdoor Calisthenics",
    "description": "Park bars, benches and bodyweight movements form a three-day full-body hypertrophy plan. Existing pulling skill and secure, suitable park equipment are required.",
    "goal": "hypertrophy",
    "level": "intermediate",
    "location": "outdoor",
    "requiredEquipment": [
      "bodyweight",
      "park-equipment",
      "pull-up-bar"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 100,
    "durationWeeks": 8,
    "method": "Full-body park training with vertical pulls, rows and unilateral legs",
    "focusMuscles": [
      "pectorals",
      "lats",
      "quadriceps",
      "hamstrings"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Park A · vertical pull and push",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "strict-pullup",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "A few easy technique reps before the working sets; use less band tension or an easier body position if applicable."
          }
        ],
        "exercises": [
          {
            "exerciseId": "strict-pullup",
            "sets": 3,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "park-row",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "park-incline-pushup",
            "sets": 4,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "park-stepup",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "body-split-squat",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "hanging-knee-raise",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hamstring-walkout",
            "sets": 3,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Park B · controlled full-body volume",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "strict-pullup",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "A few easy technique reps before the working sets; use less band tension or an easier body position if applicable."
          }
        ],
        "exercises": [
          {
            "exerciseId": "strict-pullup",
            "sets": 3,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "park-row",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushup",
            "sets": 3,
            "min": 8,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "park-stepup",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "body-split-squat",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hamstring-walkout",
            "sets": 3,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Park C · repeat and progress",
        "kind": "training",
        "sessionLengthMinutes": 100,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "strict-pullup",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "A few easy technique reps before the working sets; use less band tension or an easier body position if applicable."
          }
        ],
        "exercises": [
          {
            "exerciseId": "strict-pullup",
            "sets": 3,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 150,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "park-row",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "pushup",
            "sets": 3,
            "min": 8,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "park-stepup",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "body-split-squat",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "hanging-knee-raise",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hamstring-walkout",
            "sets": 4,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Add controlled reps inside each range while keeping 2 RIR. After all sets reach the upper bound for two exposures, make the row angle slightly harder or lower the incline of the park push-up using a secure existing support, then return to the lower bound. For strict pull-ups and leg work, use a 3-second lowering phase after the upper bound is controlled rather than adding unlisted weights. Do not increase step height beyond a stable, comfortable range. Keep the weekly set count fixed.",
    "deloadRule": "Weeks 4 and 8: halve working sets, rounding up, use easier row and push-up angles and an ordinary controlled tempo, and keep at least 4 RIR. Keep the general warm-up. Reduce difficulty earlier if recovery or park conditions prevent stable technique.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Ten primary chest sets, fifteen lat sets, fourteen quad sets and ten hamstring sets are spread across three full-body sessions. Vertical pulls, low-bar rows and floor-based hamstring work provide different movement demands without extra weights. Body position and controlled rep progression supply overload options when external load is unavailable.",
    "volumeNotes": "The listed sets are the full build-week prescription, not a requirement to start at maximum effort on day one. Use 3 RIR in week 1, then the listed RIR in later build weeks. Target muscles receive roughly 10–20 primary working sets each week across at least two sessions; other areas receive support work and indirect loading. Warm-up and ramp-up sets are excluded. Compound sets can involve more than one muscle, so do not add primary and secondary counts as if they were independent workload.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "schoenfeld-volume-2017",
        "title": "Schoenfeld, Ogborn and Krieger: Dose-response relationship between weekly resistance training volume and increases in muscle mass (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27433992/"
      },
      {
        "id": "schoenfeld-frequency-2019",
        "title": "Schoenfeld, Grgic and Krieger: How many times per week should a muscle be trained to maximize muscle hypertrophy? (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30558493/"
      }
    ],
    "setupRequirements": [
      "Use only fixed, dry, secure bars, a low bench or step, and a clear non-slip surface.",
      "Already controlled pull-ups are needed for the baseline. Use the low-bar foot-assisted record only when a suitable low bar is available."
    ]
  },
  {
    "programNumber": 26,
    "id": "run-strength-hybrid",
    "name": "Run + Strength Hybrid",
    "description": "Easy run/walk intervals are paired with short bodyweight strength sessions on three days. Running time grows gradually while strength work stays controlled.",
    "goal": "endurance",
    "level": "beginner",
    "location": "outdoor",
    "requiredEquipment": [
      "bodyweight",
      "running"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 50,
    "durationWeeks": 8,
    "method": "Run/walk progression with full-body bodyweight support",
    "focusMuscles": [
      "quadriceps",
      "glutes"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Hybrid A · short run/walk",
        "kind": "training",
        "sessionLengthMinutes": 50,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "easy-run",
            "sets": 6,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy conversational jogging; walk throughout each recovery minute."
          },
          {
            "exerciseId": "body-squat",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "front-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": true,
            "intensityNote": "Maintain comfortable trunk alignment and breathing."
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Walk easily while your breathing settles."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Hybrid B · repeatable run/walk",
        "kind": "training",
        "sessionLengthMinutes": 50,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "easy-run",
            "sets": 6,
            "min": null,
            "max": null,
            "durationSeconds": 45,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Keep the jog easy enough for full sentences and walk during recovery."
          },
          {
            "exerciseId": "reverse-lunge",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 3,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bird-dog",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy cooldown without abrupt stopping."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Hybrid C · consolidate",
        "kind": "training",
        "sessionLengthMinutes": 50,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "easy-run",
            "sets": 6,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "A comfortable repeatable jog, not a sprint; walk each recovery."
          },
          {
            "exerciseId": "body-squat",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "front-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": false,
            "hardSet": true,
            "intensityNote": "Finish before the hips sag or breathing is held."
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Walk easily while your breathing settles."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "After a build week in which all six intervals remain conversational, add 15 seconds to the run bouts in one session the next week, up to 90 seconds per bout, while preserving the full 60-second walking recovery. Do not increase pace at the same time. If conversation or technique breaks down, repeat or reduce the previous duration. Strength work adds reps within its range at 3 RIR; wall push-ups may progress to the knee-pushup library entry at 8–12 only after the current upper bound is controlled. Holds add 5 seconds per build week up to 35 seconds. Extra running time may bring the session toward its estimate; do not add more intervals.",
    "deloadRule": "Weeks 4 and 8: use three or four run bouts instead of six at the original short duration, keep them easy and retain walking recovery. Halve strength sets, rounding up, halve hold duration and use at least 4 RIR. Keep the warm-up and cooldown; use this easier week early if recovery is poor.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Run/walk intervals make the initial running dose measurable instead of requiring continuous running immediately. Small bodyweight sessions retain basic pushing, leg and trunk work without another long training day. Nonconsecutive sessions provide recovery as running time increases.",
    "volumeNotes": "The primary goal is endurance with basic strength support, not a 10–20-set hypertrophy target for every muscle. Running intervals have hardSet false and null RIR. Do not turn all three easy sessions into hard tempo runs.",
    "references": [
      {
        "id": "acsm-exercise-2011",
        "title": "ACSM position stand: Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults (2011)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21694556/"
      },
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      }
    ],
    "executionNotes": [
      "Use a clear, level route and leave safe space to slow down.",
      "For a first week that feels too demanding, use walking for part or all of a run bout and build from that repeatable baseline."
    ]
  },
  {
    "programNumber": 27,
    "id": "athletic-power",
    "name": "Athletic Power",
    "description": "Fast accelerations and low-repetition jumps prioritize speed and controlled landings. This advanced outdoor block uses full recovery rather than fatigue circuits.",
    "goal": "skill",
    "level": "advanced",
    "location": "outdoor",
    "requiredEquipment": [
      "bodyweight",
      "running"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 65,
    "durationWeeks": 8,
    "method": "Acceleration and plyometric quality with low-rep bodyweight support",
    "focusMuscles": [
      "glutes",
      "quadriceps",
      "hamstrings"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Power A · acceleration and broad jump",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Begin walking at an easy, comfortable pace."
          },
          {
            "exerciseId": "easy-run",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Gradually warm up at a conversational pace."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "sprint",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": null,
            "distanceMetres": 15,
            "restSeconds": 90,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Two gradual, easy-to-moderate build-ups before the faster work; not maximal sprints."
          },
          {
            "exerciseId": "squat-jump",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 6,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Two small practice jumps with controlled landings."
          }
        ],
        "exercises": [
          {
            "exerciseId": "sprint",
            "sets": 4,
            "min": null,
            "max": null,
            "durationSeconds": null,
            "distanceMetres": 20,
            "restSeconds": 180,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Fast, smooth acceleration with a clear runoff; stop if speed or coordination declines."
          },
          {
            "exerciseId": "broad-jump",
            "sets": 3,
            "min": 3,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 4,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Reset fully between jumps and hold a quiet, balanced landing."
          },
          {
            "exerciseId": "reverse-lunge",
            "sets": 2,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "side-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": true,
            "intensityNote": "Steady alignment and normal breathing."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Power B · vertical jump and short sprint",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Begin walking at an easy, comfortable pace."
          },
          {
            "exerciseId": "easy-run",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Gradually warm up at a conversational pace."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "sprint",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": null,
            "distanceMetres": 15,
            "restSeconds": 90,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Two gradual, easy-to-moderate build-ups before the faster work; not maximal sprints."
          },
          {
            "exerciseId": "squat-jump",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 6,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Two small practice jumps with controlled landings."
          }
        ],
        "exercises": [
          {
            "exerciseId": "squat-jump",
            "sets": 4,
            "min": 3,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 4,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Jump with intent and land under control; stop when quality declines."
          },
          {
            "exerciseId": "sprint",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": null,
            "distanceMetres": 30,
            "restSeconds": 180,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Accelerate smoothly; do not force a maximal effort when fatigued."
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 4,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "side-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 20,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": true,
            "intensityNote": "Stop the hold before rotating or sagging."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Power C · repeat quality",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Begin walking at an easy, comfortable pace."
          },
          {
            "exerciseId": "easy-run",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 180,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Gradually warm up at a conversational pace."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "sprint",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": null,
            "distanceMetres": 15,
            "restSeconds": 90,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Two gradual, easy-to-moderate build-ups before the faster work; not maximal sprints."
          },
          {
            "exerciseId": "squat-jump",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 6,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Two small practice jumps with controlled landings."
          }
        ],
        "exercises": [
          {
            "exerciseId": "sprint",
            "sets": 4,
            "min": null,
            "max": null,
            "durationSeconds": null,
            "distanceMetres": 20,
            "restSeconds": 180,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use full recovery and a clear slowdown area; keep the sprint smooth."
          },
          {
            "exerciseId": "broad-jump",
            "sets": 3,
            "min": 3,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 4,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Use a manageable distance and reset after each landing."
          },
          {
            "exerciseId": "squat-jump",
            "sets": 2,
            "min": 3,
            "max": 3,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 4,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Maintain jump and landing quality rather than chasing fatigue."
          },
          {
            "exerciseId": "body-split-squat",
            "sets": 2,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Progress only after two sessions of stable landing control and repeatable acceleration. Add one sprint repetition to one session, up to six, or add 5 metres to a short sprint up to 30 metres; never increase both in the same week. Keep jump reps per set at three and add at most one set to one jump drill in a build week, up to five sets, only if landing and jump quality stay consistent. Keep the full recovery and stop a drill if speed, jump height or coordination clearly deteriorates. Bodyweight support work progresses through controlled range, not exhaustion.",
    "deloadRule": "Weeks 4 and 8: halve sprint and jump sets, rounding up, and use controlled submaximal accelerations and smaller jumps with full recovery. Halve the support sets and holds while keeping rep work at least 5 RIR. Retain the complete gradual warm-up. Deload earlier if quality falls across two sessions.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Long recoveries keep the emphasis on fast, controlled efforts rather than endurance under fatigue. Low jump counts allow each landing to be reset and checked. The supporting strength work is modest so it does not crowd out the quality of the sprint and jump practice.",
    "volumeNotes": "Sprint and jump sets are power-skill exposures with hardSet false, not hypertrophy set equivalents. The baseline uses low reps and long rests; RIR on support and jump reps means staying well away from fatigue, while distance work uses a quality cue.",
    "references": [
      {
        "id": "nsca-plyometrics",
        "title": "NSCA: Plyometric Exercises",
        "url": "https://www.nsca.com/education/articles/kinetic-select/plyometric-exercises/"
      },
      {
        "id": "acsm-2009",
        "title": "American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19204579/"
      },
      {
        "id": "acsm-exercise-2011",
        "title": "ACSM position stand: Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults (2011)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21694556/"
      }
    ],
    "setupRequirements": [
      "Prior sprinting and jumping experience plus controlled landings are required.",
      "Use a clear, dry, level surface, suitable footwear and enough unobstructed space to accelerate and slow down."
    ]
  },
  {
    "programNumber": 28,
    "id": "stair-hill-conditioning",
    "name": "Stair & Hill Conditioning",
    "description": "Controlled stair climbs and repeatable uphill intervals build outdoor endurance and leg work. Recovery includes careful walking down, with no fast downhill efforts.",
    "goal": "endurance",
    "level": "intermediate",
    "location": "outdoor",
    "requiredEquipment": [
      "bodyweight",
      "park-equipment",
      "running"
    ],
    "daysPerWeek": 3,
    "sessionLengthMinutes": 55,
    "durationWeeks": 8,
    "method": "Alternating stair and hill intervals with controlled descents",
    "focusMuscles": [
      "quadriceps",
      "calves",
      "glutes"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Stairs A",
        "kind": "training",
        "sessionLengthMinutes": 45,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "park-stepup",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": true,
            "hardSet": false,
            "intensityNote": "A few easy technique reps before the working sets; use less band tension or an easier body position if applicable."
          }
        ],
        "exercises": [
          {
            "exerciseId": "stair-climb",
            "sets": 4,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Climb at a repeatable effort around 6–7/10; walk down carefully during recovery."
          },
          {
            "exerciseId": "park-stepup",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 300,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy cooldown on level ground."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Hill B",
        "kind": "training",
        "sessionLengthMinutes": 45,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "hill-run",
            "sets": 4,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Short, repeatable uphill effort around 7/10; walk down carefully and recover fully."
          },
          {
            "exerciseId": "reverse-lunge",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 600,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Comfortable level walking after the intervals."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Stairs and hill C",
        "kind": "training",
        "sessionLengthMinutes": 55,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [
          {
            "exerciseId": "park-stepup",
            "sets": 1,
            "min": 2,
            "max": 2,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 5,
            "perSide": true,
            "hardSet": false,
            "intensityNote": "A few easy technique reps before the working sets; use less band tension or an easier body position if applicable."
          }
        ],
        "exercises": [
          {
            "exerciseId": "stair-climb",
            "sets": 4,
            "min": null,
            "max": null,
            "durationSeconds": 60,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Repeatable effort with a secure foot placement; use a rail if needed."
          },
          {
            "exerciseId": "hill-run",
            "sets": 3,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Keep the uphill run controlled and walk down; do not sprint downhill."
          },
          {
            "exerciseId": "park-stepup",
            "sets": 2,
            "min": 8,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 300,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Walk easily while your breathing settles."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "During build weeks, add 10 seconds to one stair interval at a time, up to 90 seconds, or 5 seconds to one uphill bout up to 45 seconds. Do not increase both duration and pace that week. Retain at least the listed recovery and extend it if a safe descent takes longer. Step-ups and lunges add reps within range at 3 RIR; choose a comfortable low step rather than increasing height to chase fatigue. Keep the interval count fixed.",
    "deloadRule": "Weeks 4 and 8: halve interval and support sets, rounding up, return to the shortest interval durations and keep effort easy to moderate. Walk all descents carefully and retain 5–10 minutes of easy level walking. Keep at least 4 RIR on rep work and take an easier week early if recovery declines.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Uphill and stair bouts provide a measurable endurance workload with built-in recovery. Alternating their emphasis changes the session demand without adding hard downhill running. Controlled descents and fixed interval counts keep progression focused on repeatable effort.",
    "volumeNotes": "Intervals are conditioning, not hypertrophy hard sets. The modest step-up, lunge and calf work supports the endurance goal; this is not a high-volume leg specialization block.",
    "references": [
      {
        "id": "acsm-exercise-2011",
        "title": "ACSM position stand: Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults (2011)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21694556/"
      },
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      }
    ],
    "setupRequirements": [
      "Dry, clear stairs and a moderate hill with a safe walking return route are required.",
      "Walking down is part of recovery; never rush the descent to fit a timer."
    ]
  },
  {
    "programNumber": 29,
    "id": "low-impact-strength",
    "name": "Low-Impact Strength",
    "description": "Two simple full-body sessions use comfortable bodyweight movements and conservative effort. The plan is designed as a gentle starting point after a break, without guaranteeing every movement suits every joint.",
    "goal": "strength",
    "level": "beginner",
    "location": "any",
    "requiredEquipment": [
      "bodyweight"
    ],
    "daysPerWeek": 2,
    "sessionLengthMinutes": 50,
    "durationWeeks": 8,
    "method": "Two-day full-body return to training with modest volume",
    "focusMuscles": [
      "quadriceps",
      "pectorals",
      "glutes"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Return A",
        "kind": "training",
        "sessionLengthMinutes": 45,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "body-squat",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bird-dog",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "body-calf-raise",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "deadbug",
            "sets": 2,
            "min": 6,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 4,
            "perSide": true,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Return B",
        "kind": "training",
        "sessionLengthMinutes": 50,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "body-squat",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "wall-pushup",
            "sets": 3,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "reverse-lunge",
            "sets": 2,
            "min": 6,
            "max": 6,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 3,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 3,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "prone-w-raise",
            "sets": 2,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": 4,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 600,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy, comfortable walking; shorten it if needed."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "In weeks 1–2, cap working exercises at two sets and keep at least 4 RIR; from week 3 use the baseline only if recovery and movement comfort remain stable. Increase range gradually within a comfortable movement before adding reps to accessories. Keep squat and wall-push-up sets at six reps; after two controlled exposures, increase the wall lean or use a 3-second squat descent while preserving 3 RIR, rather than adding an unlisted load. Walking adds 1 minute per build week up to 12 minutes, with extra session time if required. Do not progress through pain.",
    "deloadRule": "Weeks 4 and 8: halve working sets, rounding up, use the easier movement range and keep at least 4 RIR. Keep easy walking at 5–8 minutes. Reuse the introductory stage after a longer break or if recovery is inconsistent rather than resuming at the hardest previous version.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Two separated sessions keep the initial commitment and fatigue modest. Conservative rep targets and reserve allow technique to be repeated without grinding. The plan supplies a starting framework that can be adjusted to comfortable movement capacity before increasing training frequency.",
    "volumeNotes": "This is a modest-volume strength starting point, not a 10–20-set hypertrophy plan. Low impact means no mandatory jumping or running; it does not mean every exercise is automatically comfortable for every person.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "acsm-2009",
        "title": "American College of Sports Medicine position stand. Progression models in resistance training for healthy adults (2009)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19204579/"
      }
    ],
    "introductoryWeeks": {
      "weeks": [
        1,
        2
      ],
      "maxWorkingSetsPerExercise": 2,
      "rir": 4
    },
    "executionNotes": [
      "Use a comfortable squat depth and wall lean. If a movement causes pain, choose a comfortable existing alternative or stop that movement.",
      "No weights, resistance bands, park equipment or pull-up bar are required."
    ]
  },
  {
    "programNumber": 30,
    "id": "summer-shred",
    "name": "Summer Shred",
    "description": "An eight-week block pairs bodyweight strength practice with a separate conditioning day. Nutrition and repeatable resistance work support fat loss while retaining the strength qualities actually trained.",
    "goal": "fat-loss",
    "level": "intermediate",
    "location": "any",
    "requiredEquipment": [
      "bodyweight"
    ],
    "daysPerWeek": 4,
    "sessionLengthMinutes": 65,
    "durationWeeks": 8,
    "method": "Eight-week bodyweight strength-maintenance and activity block",
    "focusMuscles": [
      "pectorals",
      "quadriceps",
      "glutes"
    ],
    "schedule": [
      {
        "id": "day-1",
        "weekday": 1,
        "title": "Strength A",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "body-split-squat",
            "sets": 3,
            "min": 8,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "pushup",
            "sets": 3,
            "min": 6,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hamstring-walkout",
            "sets": 3,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "prone-w-raise",
            "sets": 3,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "side-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 25,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": true,
            "intensityNote": "Keep alignment and breathe; stop before the hips rotate."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-2",
        "weekday": 2,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-3",
        "weekday": 3,
        "title": "Strength B",
        "kind": "training",
        "sessionLengthMinutes": 60,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "body-squat",
            "sets": 3,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "close-pushup",
            "sets": 3,
            "min": 6,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "reverse-lunge",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "prone-w-raise",
            "sets": 3,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "reverse-crunch",
            "sets": 2,
            "min": 10,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-4",
        "weekday": 4,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      },
      {
        "id": "day-5",
        "weekday": 5,
        "title": "Strength C",
        "kind": "training",
        "sessionLengthMinutes": 65,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "body-split-squat",
            "sets": 3,
            "min": 10,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": true,
            "hardSet": true
          },
          {
            "exerciseId": "pushup",
            "sets": 3,
            "min": 6,
            "max": 12,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 120,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "hamstring-walkout",
            "sets": 3,
            "min": 6,
            "max": 10,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 90,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "bridge",
            "sets": 2,
            "min": 12,
            "max": 20,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "prone-w-raise",
            "sets": 3,
            "min": 12,
            "max": 15,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 75,
            "rir": 2,
            "perSide": false,
            "hardSet": true
          },
          {
            "exerciseId": "side-plank",
            "sets": 2,
            "min": null,
            "max": null,
            "durationSeconds": 25,
            "distanceMetres": null,
            "restSeconds": 60,
            "rir": null,
            "perSide": true,
            "hardSet": true,
            "intensityNote": "End the hold before technique changes."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-6",
        "weekday": 6,
        "title": "Activity day",
        "kind": "training",
        "sessionLengthMinutes": 50,
        "warmup": [
          {
            "exerciseId": "march",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 120,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Easy pace; gradually raise breathing rate."
          },
          {
            "exerciseId": "arm-circles",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": true,
            "hardSet": false
          },
          {
            "exerciseId": "hinge-drill",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          },
          {
            "exerciseId": "body-squat",
            "sets": 1,
            "min": 8,
            "max": 8,
            "durationSeconds": null,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": 6,
            "perSide": false,
            "hardSet": false
          }
        ],
        "rampUpSets": [],
        "exercises": [
          {
            "exerciseId": "walk",
            "sets": 1,
            "min": null,
            "max": null,
            "durationSeconds": 1500,
            "distanceMetres": null,
            "restSeconds": 0,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Brisk, conversational walking on a clear route."
          },
          {
            "exerciseId": "step-jack",
            "sets": 6,
            "min": null,
            "max": null,
            "durationSeconds": 30,
            "distanceMetres": null,
            "restSeconds": 30,
            "rir": null,
            "perSide": false,
            "hardSet": false,
            "intensityNote": "Moderate, repeatable effort around 6/10; keep one foot grounded."
          }
        ],
        "notes": "Complete exercises in order. Rest is between sets; for unilateral work complete both sides before the rest interval. Reps are per side when perSide is true. Warm-up sets do not count as working sets."
      },
      {
        "id": "day-7",
        "weekday": 7,
        "title": "Rest",
        "kind": "rest",
        "sessionLengthMinutes": 0,
        "warmup": [],
        "rampUpSets": [],
        "exercises": [],
        "notes": "Rest from planned training; easy everyday activity is optional."
      }
    ],
    "progressionRule": "Weeks 1–3 and 5–7 are build weeks; weeks 4 and 8 reduce workload as described in the deload rule. Keep the listed sets and aim to retain the same controlled rep quality during a dietary deficit. Add one rep within range when 2 RIR remain; after the upper bound, use a 3-second descent and restart at the lower bound rather than adding endless sets. Holds add 5 seconds per build week up to 40 seconds. Add 2 minutes to the activity-day walk per build week up to 35 minutes, or add one step-jack interval up to eight, but change only one variable that week. If recovery declines, hold progression or reduce conditioning before cutting controlled strength work.",
    "deloadRule": "Weeks 4 and 8: halve strength sets and step-jack intervals, rounding up, use easier bodyweight variations and keep at least 4 RIR. Halve hold duration and keep walking easy at 15–20 minutes. Keep the same rest days. At the end of week 8, review recovery and maintenance needs instead of automatically increasing the deficit or repeating a harder block.",
    "deloadWeeks": [
      4,
      8
    ],
    "whyThisWorks": "Three resistance sessions keep the trained bodyweight patterns in the week while a separate activity day adds conditioning. Fixed set counts and reps in reserve help manage training demand during a dietary deficit. The block supports the specific strength tasks practiced; equipment-free work cannot fully replace heavy loaded pulling or maximal barbell practice.",
    "volumeNotes": "This is a fat-loss block with strength maintenance of the practiced bodyweight patterns, not a maximal hypertrophy plan. Chest has nine primary pressing sets and lower-body work is moderate; conditioning does not count as resistance-training hard sets.",
    "references": [
      {
        "id": "acsm-2026",
        "title": "ACSM: Updated resistance training guidelines (2026)",
        "url": "https://acsm.org/resistance-training-guidelines-update-2026/"
      },
      {
        "id": "issn-diets-2017",
        "title": "Aragon et al.: International society of sports nutrition position stand: diets and body composition (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28630601/"
      },
      {
        "id": "issn-protein-2017",
        "title": "Jäger et al.: International Society of Sports Nutrition Position Stand: protein and exercise (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28642676/"
      }
    ],
    "coreMessage": "Spot reduction is a myth: ab exercises do not selectively remove belly fat. Visible abs depend on body fat, which is controlled mainly through diet and overall energy balance, as well as individual fat distribution. Ab training builds the muscle; nutrition reveals it. This program cannot guarantee visible abs.",
    "nutritionGuidance": [
      "Use a sustainable dietary energy deficit; no eight-week plan guarantees a particular amount of fat loss or visible abs.",
      "Include protein regularly; roughly 1.4–2.0 g/kg/day is a general reference for most healthy exercising adults, not an automatically calculated personal target.",
      "Choose meals with protein foods, fruit or vegetables and fiber-rich staples, and maintain adequate fluids.",
      "If training performance and recovery keep declining, reconsider the deficit or total training demand rather than adding more exercise."
    ],
    "executionNotes": [
      "Without pulling equipment, this block cannot fully maintain previously trained heavy pulling strength. Choose an equipment-based plan if that is the priority.",
      "The title describes an eight-week training block, not a seasonal deadline or a guaranteed appearance."
    ]
  }
];
if(typeof module!=="undefined")module.exports=globalThis.ForgePrograms;

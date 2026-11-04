"use strict";
// Additional central entries for supported strength, balance and recovery.
(() => {
const source=globalThis.ForgeExerciseData || require("./exercises.js");
source.exercises.push(...[
  {
    "id": "chair-stand",
    "name": "Chair Sit-to-Stand",
    "group": "Legs",
    "pattern": "squat",
    "equipment": [
      "chair"
    ],
    "primaryMuscles": [
      "quadriceps",
      "glutes"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Use a firm non-wheeled chair against a wall; clear the floor and wear secure footwear.",
      "Bring feet beneath knees, lean from the hips and stand; use hands for assistance if needed.",
      "Sit back slowly without dropping. Breathe continuously; keep the movement pain-free."
    ],
    "commonMistakes": [
      "Using a rolling or unstable chair",
      "Holding the breath or dropping into the seat"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Chair Sit-to-Stand exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Sturdy chair"
  },
  {
    "id": "supported-squat",
    "name": "Wall-Supported Shallow Squat",
    "group": "Legs",
    "pattern": "squat",
    "equipment": [
      "bodyweight"
    ],
    "primaryMuscles": [
      "quadriceps",
      "glutes"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Stand beside a solid wall or fixed counter with a light hand support.",
      "Bend knees and hips only as far as comfortable, keeping both feet planted.",
      "Stand smoothly while breathing out. Keep the support within reach throughout."
    ],
    "commonMistakes": [
      "Using unsecured furniture as support",
      "Forcing depth despite discomfort"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Wall-Supported Shallow Squat exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  },
  {
    "id": "supported-calf",
    "name": "Supported Heel Raise",
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
      "Face a wall with both hands in contact and feet hip-width apart.",
      "Rise onto the balls of both feet without leaning away from the wall.",
      "Lower slowly; use a smaller range if balance is uncertain."
    ],
    "commonMistakes": [
      "Letting go of support before ready",
      "Bouncing or rolling ankles outward"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Supported Heel Raise exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  },
  {
    "id": "supported-hip-abduction",
    "name": "Supported Side Leg Lift",
    "group": "Glutes",
    "pattern": "glutes",
    "equipment": [
      "bodyweight"
    ],
    "primaryMuscles": [
      "gluteus-medius"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Hold a fixed wall or counter, standing tall.",
      "Move one leg a short distance to the side with toes facing forward.",
      "Return slowly without leaning; complete each side."
    ],
    "commonMistakes": [
      "Tilting the trunk",
      "Swinging or forcing hip range"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Supported Side Leg Lift exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  },
  {
    "id": "supported-hip-extension",
    "name": "Supported Standing Hip Extension",
    "group": "Glutes",
    "pattern": "glutes",
    "equipment": [
      "bodyweight"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Hold a solid support with both feet initially grounded.",
      "Move one straight leg a short distance behind without arching your back.",
      "Return under control; repeat on the other side."
    ],
    "commonMistakes": [
      "Arching the lower back",
      "Moving farther than the hips allow"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Supported Standing Hip Extension exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  },
  {
    "id": "supported-weight-shift",
    "name": "Supported Side-to-Side Weight Shift",
    "group": "Balance",
    "pattern": "balance",
    "equipment": [
      "bodyweight"
    ],
    "primaryMuscles": [
      "gluteus-medius",
      "quadriceps"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Stand near a fixed support and hold it as needed.",
      "Shift weight gently from one foot to the other while both feet stay on the floor.",
      "Keep eyes open and stop if dizzy; no attempt to make the task unstable."
    ],
    "commonMistakes": [
      "Closing the eyes",
      "Practising without reachable support"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Supported Side-to-Side Weight Shift exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "seconds",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  },
  {
    "id": "supported-tandem",
    "name": "Supported Semi-Tandem Balance",
    "group": "Balance",
    "pattern": "balance",
    "equipment": [
      "bodyweight"
    ],
    "primaryMuscles": [
      "calves",
      "gluteus-medius"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Stand beside a solid counter and hold it.",
      "Place one foot slightly ahead of the other, with enough width to feel secure.",
      "Keep eyes open and breathe; change the leading foot. Widen the stance whenever needed."
    ],
    "commonMistakes": [
      "Progressing by removing support before steady",
      "Practising on a slippery or uneven surface"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Supported Semi-Tandem Balance exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "seconds",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  },
  {
    "id": "seated-march",
    "name": "Seated March",
    "group": "Conditioning",
    "pattern": "conditioning",
    "equipment": [
      "chair"
    ],
    "primaryMuscles": [
      "hip-flexors"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Sit tall in a firm chair placed against a wall, with feet flat.",
      "Lift one foot a little, lower it, then alternate.",
      "Keep breathing and reduce the range or stop if pain or dizziness develops."
    ],
    "commonMistakes": [
      "Leaning backward or gripping the breath",
      "Using an unstable chair"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Seated March exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "seconds",
    "equipmentLabel": "Sturdy chair"
  },
  {
    "id": "seated-knee-extension",
    "name": "Seated Knee Extension",
    "group": "Legs",
    "pattern": "quads",
    "equipment": [
      "chair"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Sit with back supported in a stable chair.",
      "Straighten one knee to a comfortable position without locking hard.",
      "Lower slowly; repeat on the other side."
    ],
    "commonMistakes": [
      "Swinging the leg",
      "Forcing the knee through pain"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Seated Knee Extension exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Sturdy chair"
  },
  {
    "id": "seated-heel-raise",
    "name": "Seated Heel Raise",
    "group": "Calves",
    "pattern": "calves",
    "equipment": [
      "chair"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Sit securely with feet flat and knees comfortable.",
      "Raise both heels while the balls of the feet remain grounded.",
      "Lower with control; keep the movement comfortable."
    ],
    "commonMistakes": [
      "Bouncing rapidly",
      "Holding the breath"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Seated Heel Raise exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Sturdy chair"
  },
  {
    "id": "rib-breathing",
    "name": "Relaxed Rib Breathing",
    "group": "Recovery",
    "pattern": "breathing",
    "equipment": [
      "bodyweight"
    ],
    "primaryMuscles": [
      "diaphragm"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Stand comfortably near support, or use a supported position that feels good.",
      "Breathe gently into the lower ribs without forcing a deep inhalation.",
      "Exhale slowly and let the abdomen and pelvic floor soften; stop if light-headed."
    ],
    "commonMistakes": [
      "Breath-holding or forceful abdominal bracing",
      "Forcing breaths or continuing through dizziness"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Relaxed Rib Breathing exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "seconds",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  },
  {
    "id": "pelvic-floor-awareness",
    "name": "Pelvic Floor Lift and Full Release",
    "group": "Recovery",
    "pattern": "breathing",
    "equipment": [
      "bodyweight"
    ],
    "primaryMuscles": [
      "pelvic-floor"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Use a comfortable upright or supported position and breathe normally.",
      "If comfortable, gently lift around the pelvic openings on an exhale, then completely release on the next breath.",
      "This is an introductory coordination exercise, not a personalized treatment dose. Skip if painful or unable to relax; ask a pelvic health physiotherapist to assess technique and set a daily dose."
    ],
    "commonMistakes": [
      "Straining down or holding the breath",
      "Repeated squeezing without full relaxation; continuing through pain"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Pelvic Floor Lift and Full Release exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  },
  {
    "id": "seated-db-curl",
    "name": "Seated Dumbbell Curl",
    "group": "Arms",
    "pattern": "biceps",
    "equipment": [
      "chair",
      "dumbbells"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Sit in a firm chair with feet planted and a light dumbbell in each hand.",
      "Curl without moving the upper arms or leaning back.",
      "Lower smoothly and breathe throughout."
    ],
    "commonMistakes": [
      "Using momentum",
      "Choosing loads that cause breath-holding"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Seated Dumbbell Curl exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Sturdy chair + dumbbells"
  },
  {
    "id": "one-arm-db-row",
    "name": "Staggered-Stance One-Arm Dumbbell Row",
    "group": "Back",
    "pattern": "row",
    "equipment": [
      "dumbbells"
    ],
    "primaryMuscles": [
      "lats",
      "rhomboids"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Take a stable staggered stance and hinge comfortably, resting the free hand lightly on your front thigh.",
      "Pull the dumbbell toward your hip without twisting or shrugging.",
      "Lower smoothly; repeat on the other side."
    ],
    "commonMistakes": [
      "Rounding or twisting the trunk",
      "Pulling with momentum"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Staggered-Stance One-Arm Dumbbell Row exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Dumbbells"
  },
  {
    "id": "standing-w-squeeze",
    "name": "Standing Shoulder-Blade W Squeeze",
    "group": "Mobility",
    "pattern": "mobility",
    "equipment": [
      "bodyweight"
    ],
    "primaryMuscles": [
      "rhomboids",
      "posterior-deltoids"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Stand tall beside a fixed support, or sit if standing is tiring.",
      "With elbows bent and arms comfortable, gently draw shoulder blades back and down.",
      "Release fully and breathe normally. Use a small pain-free range; this is gentle movement practice, not heavy back training."
    ],
    "commonMistakes": [
      "Arching the back or forcing the arms outward",
      "Shrugging or holding the breath"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Standing Shoulder-Blade W Squeeze exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  },
  {
    "id": "band-wide-row",
    "name": "Self-Anchored Wide Band Row",
    "group": "Back",
    "pattern": "row",
    "equipment": [
      "resistance-bands"
    ],
    "primaryMuscles": [
      "rhomboids",
      "middle-trapezius",
      "lats"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Sit tall with knees soft and pass an intact long band securely around both shoe-covered midfeet, keeping its line away from your face.",
      "Use a controlled grip and draw elbows slightly outward toward the lower ribs; do not pull the band toward your face.",
      "Return slowly, keeping tension and avoiding a rounded back. Stop if the band slips or shows damage."
    ],
    "commonMistakes": [
      "Using damaged bands or unstable anchors",
      "Leaning back and snapping the band"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Self-Anchored Wide Band Row exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Long resistance band"
  },
  {
    "id": "band-neutral-curl",
    "name": "Neutral-Grip Band Curl",
    "group": "Arms",
    "pattern": "biceps",
    "equipment": [
      "resistance-bands"
    ],
    "primaryMuscles": [
      "biceps",
      "brachialis"
    ],
    "secondaryMuscles": [],
    "difficulty": "beginner",
    "instructions": [
      "Stand securely on the middle of an intact long band with shoe-covered feet.",
      "Grip the ends with palms facing inward and curl without moving the upper arms.",
      "Lower under control. Reduce tension if you cannot breathe normally or keep the band secure."
    ],
    "commonMistakes": [
      "Wrapping the band tightly around the hands",
      "Using momentum or standing on an insecure band"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Neutral-Grip Band Curl exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Long resistance band"
  },
  {
    "id": "supported-single-calf",
    "name": "Supported Single-Leg Heel Raise",
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
      "Use a fixed wall or counter with both hands and practise two-leg raises first.",
      "Only if steady, shift weight onto one foot and raise the heel in a comfortable range.",
      "Lower slowly and repeat on the other side. Return to two feet if control changes; keep hand support throughout."
    ],
    "commonMistakes": [
      "Letting go of support to increase difficulty",
      "Bouncing or progressing before two-leg raises are steady"
    ],
    "youtubeVideoId": "",
    "youtubeSearchQuery": "Supported Single-Leg Heel Raise exercise safe technique physiotherapist tutorial",
    "homeAlternativeId": null,
    "outdoorAlternativeId": null,
    "trackingUnit": "reps",
    "equipmentLabel": "Bodyweight · stable wall nearby"
  }
]);
globalThis.ForgeExerciseData=source;
})();
if(typeof module!=="undefined")module.exports=globalThis.ForgeExerciseData;

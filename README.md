# THE FORGE Workout Tracker

A mobile-first static training app with 196 structured programs, 131 centrally defined exercises, multiple active programs and a combined weekly calendar. It runs directly as HTML/CSS/JavaScript with no packages or build step.

## Training features

### Mobile workout controls

Weight and reps entry comes before the rest timer on phones. A compact bottom session bar keeps progress and Finish workout within reach. Touch targets, 16px form text, safe-area spacing and sticky navigation support narrow screens; the desktop layout retains its sidebar. The technique guide fills the phone screen, keeps its close control visible and reserves a stable video aspect ratio. Reduced-motion preferences are respected.

### Program length and every-week preview

Recommendations show the actual full program length, training days and session time. Expand **Explore all N weeks** to review the recommendation without leaving setup. The Workout screen shows **Week X of N** and a **Preview another week** selector. Plan details offer every numbered week plus previous/next navigation, with introductory and lighter/deload weeks labeled.

Each week resolves the existing plan prescriptions, including sets, repetitions, rest, warm-up and ability-stage adjustments. Repeated weekly splits use the stated progression rule rather than invented exercise changes. Pregnancy/postpartum plans remain symptom- and readiness-led. Browsing is read-only: it does not change the training date, block start, activation, ability stage or logged sets. Custom and archived routines without a specified duration are labeled as having no fixed end date.

### Change, remove or choose a program later

The Workout screen shows **Change program** and **Remove program** beside the selected program, above the logging fields. Change opens a replacement flow: the current program stays active until another is chosen, and cancelling keeps it. A replacement changes only that active program and retains its saved bookmark and recorded workouts.

Remove offers **Remove for now** or **Remove & choose another**. It removes that selection from active and saved programs, preserving workout records and editable custom routines. If another program is active it becomes the current selection; otherwise the app shows **No active program**. Removal persists after reload.

Profile setup also offers **Choose a program later** on the recommendation step, saving the profile without activating the suggestion. Existing users can keep their current plan instead. My week provides change and removal controls for each active program. All persistent changes use the existing guarded localStorage helpers.

- Four-step onboarding with Gym, Home and Outdoor. Home supports bodyweight, dumbbells, resistance bands, a pull-up bar and a kettlebell; follow-up setup checks distinguish long bands and a low assistance bar.
- Recommendations match equipment, location, experience and available days. Every program includes warm-ups, complete weekly prescriptions, progression, deloads, rationale and references.
- Save any number of available programs and activate more than one. My week combines them, supports weekday shifts, and flags consecutive muscle exposure, over-about-25 weekly hard sets and no full rest day.
- Program weeks, beginner set caps and ability stages change future unlogged targets. Existing workout snapshots stay intact. Completed blocks can be restarted deliberately.
- Log reps, seconds or metres, with a rest timer including longer strength rests. Exact exercise load history is retained; time/distance work is not included in repetition tonnage.
- Create custom programs, swap exercises, export/import backups and switch between light, dark and system appearance.

## Exercises and YouTube

All 131 exercises include muscles, equipment, difficulty, instructions, common mistakes, search queries and existing alternatives. There are 66 curated male-demonstrator videos. The other exercises provide 29 illustrated position guides and 36 original animated movement guides that run locally. Animations can be paused and respect reduced-motion preferences. Every guide includes numbered steps. Sources and review scope are documented in VIDEO_SOURCES.md.

Open Technique & instructions to view the official privacy-enhanced YouTube player and written guidance. Video preference offers the curated demonstration or written steps only. Old custom video IDs remain in backups, but cannot bypass the reviewed library; existing written-only preferences still apply. Playback errors keep the written steps available, and closing the guide destroys the player. Settings lists missing selections and failed checks and exports the current exercise selections.

- [Video-selection CSV](EXERCISE_VIDEO_SELECTION.csv)
- [Central exercise library](EXERCISE_LIBRARY.md)
- [Current video source record](VIDEO_SOURCES.md)

The advanced Strength & Cardio program combines four strength sessions with walking and offers a matching option for the advanced fat-loss filters. If no exact matches exist, clearly labeled similar plans retain the selected goal and profile checks; one-tap options can widen a single filter.

The rest timer schedules a short sound when it starts or resumes. Sound can be turned off, its preference is stored with other settings, and a Test sound button previews the alert. Pausing or resetting cancels the pending alert. Device volume and browser or operating-system background restrictions affect whether it is audible. The timer also displays an on-screen message.

## Storage and privacy

Onboarding answers, the current device profile, bookmarks, active programs, schedules, stages, logs and video selections/checks live in localStorage. Every storage access is guarded. When storage is unavailable, the app remains usable in memory and warns that changes may not survive reload. Export a backup before leaving.

There are no accounts or automatic cross-device sync. Backups include profile information and program/video preferences; keep them private. Version-3 and previous version-4 logs are retained through validation/migration. A failed read preserves a recovery download rather than silently overwriting the original data.

YouTube is contacted when a selected demonstration is opened. The privacy-enhanced embed includes no profile or workout values. Videos are never downloaded or cached.

## Program data and evidence

The three JSON batches are the readable program sources. programs.js is their ready-to-run shipped snapshot; tests check they agree. All program exercises reference the central library by ID.

- [Programs 1–10](PROGRAMS_01_10.md) / [JSON](programs-01-10.json)
- [Programs 11–20](PROGRAMS_11_20.md) / [JSON](programs-11-20.json)
- [Programs 21–30](PROGRAMS_21_30.md) / [JSON](programs-21-30.json)
- [Research and interpretation](RESEARCH.md)

## Run locally

From the repository folder, run:

    python -m http.server 8080 --bind 127.0.0.1

Open http://127.0.0.1:8080. The shipped app requires no compilation or installation.

## Check the app

With Node.js available:

    node --test tests/model.test.cjs tests/programs.test.cjs tests/features.test.cjs tests/expanded.test.cjs tests/program-controls.test.cjs tests/program-weeks.test.cjs tests/reviewed-videos.test.cjs tests/timer-catalog.test.cjs

For browser checks, use the local server and open tests/browser.html. This isolated harness tests the mobile UI, all 196 previews, persistent selections, logs, recovery and simulated official-player error events; it uses isolated prefixed test storage, cleans it up, and refuses non-local hosts. Player events are mocked so the suite does not claim to verify every remote video.

## Publish

Serve the repository root on static HTTPS hosting, including all referenced runtime files and icons. GitHub Pages can use main / root when configured. The service worker caches the complete app shell and only this app’s files; each release uses a new CACHE_NAME so assets update together. Reload an installed app after a release to pick up the current shell.

## Expanded catalog and life-stage guidance

The [expanded catalog](EXPANDED_CATALOG.md) lists every section count, added plan and primary source. Browse equipment photography, goals, ten muscle sections, pregnancy, postpartum recovery and 65+ strength/balance. Section chips reset stale browse filters. Profile matching includes optional life stage, readiness, floor transfers and a sturdy-chair equipment choice.

Pregnancy and postpartum activation uses one primary active plan. Changing context preserves earlier bookmarks and training history. New health-context fields and exercise-video selections stay in guarded localStorage, including when storage is unavailable. These are guideline-informed examples, not individualized clinical treatment.

Additional sources are programs-expanded.json, programs-expanded.js, exercises-expanded.js and catalog.js. The static page loads them directly. See [asset provenance](ASSET_SOURCES.md) for the equipment imagery.

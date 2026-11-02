# THE FORGE Workout Tracker

A mobile-first static training app with 30 original programs, 113 centrally defined exercises, multiple active programs and a combined weekly calendar. It runs directly as HTML/CSS/JavaScript with no packages or build step.

## Training features

- Four-step onboarding with Gym, Home and Outdoor. Home supports bodyweight, dumbbells, resistance bands, a pull-up bar and a kettlebell; follow-up setup checks distinguish long bands and a low assistance bar.
- Recommendations match equipment, location, experience and available days. Every program includes warm-ups, complete weekly prescriptions, progression, deloads, rationale and references.
- Save any number of available programs and activate more than one. My week combines them, supports weekday shifts, and flags consecutive muscle exposure, over-about-25 weekly hard sets and no full rest day.
- Program weeks, beginner set caps and ability stages change future unlogged targets. Existing workout snapshots stay intact. Completed blocks can be restarted deliberately.
- Log reps, seconds or metres, with a rest timer including longer strength rests. Exact exercise load history is retained; time/distance work is not included in repetition tonnage.
- Create custom programs, swap exercises, export/import backups and switch between light, dark and system appearance.

## Exercises and YouTube

All 113 exercises include muscles, equipment, difficulty, instructions, common mistakes, search queries and existing alternatives. New video IDs are blank. The original 42 demonstration IDs are retained as historical selections.

Open Technique & instructions to see written guidance, search YouTube and paste a chosen ID or link. The official player reports failures and the app keeps the written steps visible. Settings lists missing selections and failed checks, and can download all exercises and search queries. Videos are checked when opened, not through an unverified background availability claim.

- [Video-selection CSV](EXERCISE_VIDEO_SELECTION.csv)
- [Central exercise library](EXERCISE_LIBRARY.md)
- [Original video source record](VIDEO_SOURCES.md)

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

    node --test tests/model.test.cjs tests/programs.test.cjs tests/features.test.cjs

For browser checks, use the local server and open tests/browser.html. This isolated harness tests the mobile UI, all 30 previews, persistent selections, logs, recovery and simulated official-player error events; it uses isolated prefixed test storage, cleans it up, and refuses non-local hosts. Player events are mocked so the suite does not claim to verify every remote video.

## Publish

Serve the repository root on static HTTPS hosting, including all referenced runtime files and icons. GitHub Pages can use main / root when configured. The service worker caches the complete app shell and only this app’s files; each release uses a new CACHE_NAME so assets update together. Reload an installed app after a release to pick up the current shell.

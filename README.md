# THE FORGE Workout Tracker

A mobile-first training app with guided setup, flexible programs, in-app exercise videos, and a custom program builder. It runs as a static site with no build step or account required.

## What you can do

- Set an optional gender and body-weight profile, then choose your goals, experience, available days and equipment.
- Get an explained starting-plan suggestion or choose Beginner, Intermediate, Advanced or Custom in Training plans.
- Choose gym plans for 2–5 days or dumbbell-and-bench plans for 2–3 days. Keep using the original Forge routine if preferred.
- Preview a complete plan and watch a YouTube technique demonstration for every exercise without leaving the app.
- Build programs with up to seven named sessions. Choose from 42 exercises; change exercise order, sets and rep ranges. Edit a custom program or turn an existing session into your own plan.
- Swap exercises, add/remove sets and track weights and reps with automatic saving, a rest timer, exercise-specific load history and progression guidance.
- Export/import backups, including old version-3 Forge backups. Existing version-3 logs migrate automatically on the same browser and site address. Recorded sessions keep their own exercise snapshots.

## Evidence and scope

See [RESEARCH.md](RESEARCH.md) for the sources, recommendation rules and limits, and [VIDEO_SOURCES.md](VIDEO_SOURCES.md) for every demonstration link. New starter templates apply the 2026 ACSM position stand and recent systematic reviews. The exact app routines are original starting templates, not individually validated clinical programs. Gender and body weight do not determine exercise ability or starting loads. Custom plans remain user-designed.

## Storage and video privacy

Data stays in this browser using localStorage. It does not sync automatically between devices. Backups include profile details; keep them private. The old version-3 storage entry is retained during migration. Delete all training data in Settings removes both versions.

Videos load from youtube-nocookie.com only when opened and stop when closed. They need an internet connection. Creator, region or browser restrictions can prevent embedded playback; a direct YouTube fallback is available. No profile or workout values are sent in video URLs.

The installed app caches its own files for offline logging after a successful online visit. Videos are not cached. Each release must use a new CACHE_NAME in sw.js so the entire app shell updates together.

## Run locally

From the repository folder:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080. On a deployed HTTPS site, install with the browser install option or Safari Share → Add to Home Screen. Existing workout data only carries over automatically when the browser and site origin are the same.

## Deploy

Host the repository root as a static HTTPS site, for example GitHub Pages from main / root. Deploy index.html, styles.css, data.js, model.js, app.js, sw.js, the manifest and both PNG icons together. A code review or draft pull request does not deploy the update.

## Validate

No packages need to be installed. With Node.js available:

```sh
node --test tests/model.test.cjs
```

The tests cover every plan variation and video mapping, recommendations, legacy migration, malformed backups, exercise-specific loads, custom-session snapshots, bodyweight logs and scoped offline caching. Browser QA also checks setup, logging and reload, filtering, custom sessions, and embedded playback at mobile sizes.

# Release verification

Completed locally on 3 November 2026.

## Automated data and model checks

Command:

    node --test tests/model.test.cjs tests/programs.test.cjs tests/features.test.cjs

Result: **58 tests passed, 0 failed**.

Coverage includes all 30 program records, JSON/runtime agreement, central exercise references, equipment and setup matching, experience/day limits, complete warm-ups, progression and deloads, target volume, session timing, beginner and skill stages, unrestricted bookmarks, multiple active programs, shifted calendars, all three overlap warnings, block completion, snapshot preservation, reps/seconds/metres, migration, backup validation and video ID validation.

## Browser checks

Result: **120 checks passed**, using a local Chromium browser at a 390px app viewport.

The suite opens all 30 program previews, checks onboarding and home equipment, activates multiple programs, shifts a schedule, saves an ability stage, logs reps and seconds, reloads saved state, creates a timed custom session, tests missing and failed videos, handles blocked storage, recovers a malformed backup, and verifies installed offline-cache entries.

Player callbacks are simulated using the existing official-player interface. This verifies fallback behavior; it does not claim that every remote YouTube video is currently playable. The canonical video IDs remain blank until selected; the original 42 source IDs are retained.

The browser harness is localhost-only and uses a unique prefixed storage adapter, so existing training keys are not overwritten. Its temporary keys are cleaned up. Production storage remains ordinary guarded localStorage.

## Manual review

- Reviewed the 390px combined calendar layout and workload summary.
- Syntax checks passed for the application and program modules.
- Git whitespace checks passed.
- No browser script errors were reported in normal flows, blocked-storage flows or backup recovery.

## Remaining user selection

The 113-exercise search-query sheet is [EXERCISE_VIDEO_SELECTION.csv](EXERCISE_VIDEO_SELECTION.csv). New video IDs were intentionally not invented. Open an exercise in the app to paste a chosen YouTube ID or link, saved on that device.

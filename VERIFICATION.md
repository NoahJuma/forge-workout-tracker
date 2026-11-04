# Release verification

Completed locally on 4 November 2026.

## Automated checks

Command:

    node --test tests/model.test.cjs tests/programs.test.cjs tests/features.test.cjs tests/expanded.test.cjs tests/program-controls.test.cjs tests/program-weeks.test.cjs tests/reviewed-videos.test.cjs

Result: **88 tests passed, 0 failed**.

Checks include all 195 data records and all block weeks/stages; original data preservation; 10+ choices in every displayed goal, muscle, context and location; meaningful schedule uniqueness; equipment/capability matching; 10–20 primary focus-group sets; maternal screening/readiness; conservative pregnancy and early postpartum prescriptions; supported/floor-transfer options at 65+; fresh starting loads for new life-stage blocks; backup migration; guarded storage; targets in reps/seconds/metres; and all local assets in the offline shell.

The video checks cover all 42 curated exact-exercise selections, retired IDs and old override suppression, preserved backup data and logged sets, written-only preferences, current-video health validation, the complete 131-row selection sheet and cache/load order. Historical source metadata is preserved.

## Browser checks

Result: **930 checks passed** in a real Chromium browser, including 320px and 390px phone widths, a 560px short viewport and an 1100px desktop width.

Mobile checks cover fixed session actions, 48px logging/finish targets, unobscured set fields, readable date input, saved workout completion, visible rest presets, desktop sidebar restoration and horizontal fit. The technique guide fills the phone viewport; its close control stays visible while scrolling. It handles fast close/reopen, written-only selection, restoring the reviewed video, player destruction and late callbacks.

Week-navigation checks cover the recommendation duration and inline preview; the Workout current/total-week summary; every plan’s complete week range and final week; previous/next boundaries; actual introductory, regular and deload doses; generic 4-, 6- and 12-week lengths; ability/readiness preservation; and unchanged training dates and recorded sets. Reviewed the current-week summary and normal/lighter-week previews at phone size. The week stylesheet is included in the offline cache.

Program management checks cover cancelling a replacement, replacing rather than stacking, removal with both next steps, preserved recorded sets and custom routines, restart persistence, optional program choice in setup, and removal with blocked storage. Controls appear before weight/rep fields and their stylesheet is in the offline cache.

The suite opens all 195 previews, exercises catalog sections and equipment images, tests new context questions and readiness gates, activates appropriate plans, checks that maternal blocks are not stacked, preserves earlier records, and verifies reloads, backups, blocked storage, video fallback and the installed offline cache. Player events are simulated; remote video availability is not individually certified. The localhost-only test harness uses isolated prefixed storage and cleans its temporary keys.

Reviewed catalog screenshots at phone and desktop widths. Syntax and whitespace checks are included in the release review.

## Evidence limits

Guideline source links are provided in the app and EXPANDED_CATALOG.md. The app templates are original examples, not clinically validated protocols or an individual medical prescription. Videos retain written fallback. All 42 live public titles/channels and official thumbnails were checked on 4 November 2026 for the male demonstrator, movement and equipment; this was not a full-motion or worldwide-playback certification. See VIDEO_SOURCES.md for the precise scope. The query sheet contains 131 exercise rows. Equipment cover images are illustrative generated artwork and do not add requirements beyond the equipment list.

# Release verification

Completed locally on 4 November 2026.

## Automated checks

Command:

    node --test tests/model.test.cjs tests/programs.test.cjs tests/features.test.cjs tests/expanded.test.cjs tests/program-controls.test.cjs tests/program-weeks.test.cjs

Result: **80 tests passed, 0 failed**.

Checks include all 195 data records and all block weeks/stages; original data preservation; 10+ choices in every displayed goal, muscle, context and location; meaningful schedule uniqueness; equipment/capability matching; 10–20 primary focus-group sets; maternal screening/readiness; conservative pregnancy and early postpartum prescriptions; supported/floor-transfer options at 65+; fresh starting loads for new life-stage blocks; backup migration; guarded storage; targets in reps/seconds/metres; and all local assets in the offline shell.

## Browser checks

Result: **906 checks passed** in a real Chromium browser at a 390px app viewport.

Week-navigation checks cover the recommendation duration and inline preview; the Workout current/total-week summary; every plan’s complete week range and final week; previous/next boundaries; actual introductory, regular and deload doses; generic 4-, 6- and 12-week lengths; ability/readiness preservation; and unchanged training dates and recorded sets. Reviewed the current-week summary and normal/lighter-week previews at phone size. The week stylesheet is included in the offline cache.

Program management checks cover cancelling a replacement, replacing rather than stacking, removal with both next steps, preserved recorded sets and custom routines, restart persistence, optional program choice in setup, and removal with blocked storage. Controls appear before weight/rep fields and their stylesheet is in the offline cache.

The suite opens all 195 previews, exercises catalog sections and equipment images, tests new context questions and readiness gates, activates appropriate plans, checks that maternal blocks are not stacked, preserves earlier records, and verifies reloads, backups, blocked storage, video fallback and the installed offline cache. Player events are simulated; remote video availability is not individually certified. The localhost-only test harness uses isolated prefixed storage and cleans its temporary keys.

Reviewed catalog screenshots at phone and desktop widths. Syntax and whitespace checks are included in the release review.

## Evidence limits

Guideline source links are provided in the app and EXPANDED_CATALOG.md. The app templates are original examples, not clinically validated protocols or an individual medical prescription. Videos retain written fallback, and new canonical YouTube IDs remain blank for user selection. The query sheet contains 131 exercise rows. Equipment cover images are illustrative generated artwork and do not add requirements beyond the equipment list.

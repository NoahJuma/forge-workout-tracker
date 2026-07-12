# THE FORGE Workout Tracker

A mobile-first workout tracker built from the supplied 5-day hypertrophy plan.

## What changed

- Every working set has editable **kg** and **reps** fields.
- Repetitions automatically mark a set as completed; the check button can also be used manually.
- The next session reuses the previous working weights.
- Completed workouts are stored in a history list.
- Double-progression guidance is calculated from the recorded repetitions.
- Data saves automatically with the browser's `localStorage` API.
- JSON export/import provides backups and manual transfer between devices.
- The included manifest and service worker make it installable as a Progressive Web App when hosted over HTTPS.

## Recommended way to use it everywhere

Host the entire folder as a static site on GitHub Pages:

1. Create a GitHub repository, for example `forge-workout-tracker`.
2. Upload `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, and `icon-512.png` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Open the published HTTPS address on your phone.
7. In Safari use **Share → Add to Home Screen**. In Chrome/Edge use **Install app** or the install button shown by the page.

## Important storage note

The application is accessible from any device after hosting, but browser `localStorage` is device- and browser-specific. It does not automatically synchronize workout history between a phone and computer.

For now, use **Export backup** on one device and **Import backup** on another. For automatic multi-device synchronization, the next development step is to connect the same interface to a hosted database with user authentication, such as Supabase.

## Local testing

For reliable saving and PWA behavior, serve the folder through a local web server rather than opening `index.html` directly as a `file:` URL.

Example with Python:

```bash
cd forge_workout_tracker
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

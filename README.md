# tune_gen

Instrument-first generative music playground for learning practical music theory in real time.

`tune_gen` runs fully in the browser (Web Audio API), lets you shape harmony/melody/rhythm with theory-aware knobs, and shows how those decisions affect arrangement and sound while it plays.

## Why This Exists

Most generative music tools feel random.  
This project focuses on **intentional variation**:

- theory knobs that map to musical outcomes
- section-aware form (`verse -> chorus -> bridge -> chorus`)
- editable melody via piano roll
- live status HUD with progression and chord context

## Feature Highlights

- Instrumental engine (not genre-locked)
- Theory-focused controls:
  - scale mode, harmonic rhythm, cadence tension
  - voice leading, chord-tone gravity, diatonic strictness
- Core macro controls:
  - energy curve, voicing density, chord color
  - groove, motif development, rhythm density
  - brightness, humanization
- Section level shaping:
  - separate melody/harmony/rhythm levels for verse, chorus, bridge
- Melody editor:
  - piano roll with generated-note ghosting
  - custom melody per section
  - playhead/time feedback for easier editing
- Live mixing feedback:
  - per-element level meters
  - one-click SVG mute buttons for each element
- Status HUD:
  - now playing, section, current chord
  - roman and named progression readouts
  - next-shift timer (expanded + compact header timer)
- Random Theory Mode:
  - automatically re-randomizes theory controls at each shift

## Quick Start

No build step, no dependencies.

1. From repo root, start a local static server:

```bash
python3 -m http.server 8000
```

2. Open:

```text
http://localhost:8000
```

3. Click **Take me to the Tune Playground**.
4. Press **Play** (top-right transport controls).

## Controls Overview

### Core Sound

Shapes overall musical behavior and texture:

- `Energy Curve`
- `Voicing Density`
- `Chord Color`
- `Groove`
- `Motif Development`
- `Rhythm Density`
- `Timbre Brightness`
- `Humanization`
- `Pattern Shift (minutes)` (1-10, default 2)

### Instrumental Theory

Primary music-theory panel:

- `Scale Mode` (Auto/Major/Minor/Dorian/Mixolydian)
- `Melody Instrument`
- `Chord Instrument` (Warm Strings, Organ)
- `Melody Tone`
- `Harmonic Rhythm`
- `Cadence Tension`
- `Voice Leading`
- `Chord-Tone Gravity`
- `Diatonic Strictness`
- `Random Theory Mode` (enabled by default)

### Section Levels

Clear form contrast controls:

- Verse/Chorus/Bridge Melody
- Verse/Chorus/Bridge Harmony
- Verse/Chorus/Bridge Rhythm

### Production + Advanced

- Room size, dynamics, stereo width
- Advanced controls:
  - tempo, energy, complexity, swing, variation, reverb
  - drum/bass/melody/atmosphere levels

### Melody Editor

Hidden by default. Click **Show Melody Editor** to open.

Capabilities:

- edit by section (verse/chorus/bridge)
- draw note duration + velocity
- load generated melody into custom lane
- clear custom lane
- enable/disable custom melody playback
- optionally follow currently playing section

## Transport + HUD

- Top-right fixed transport:
  - Play, Pause, Regenerate
- Status HUD (collapsible, hidden by default):
  - compact mode shows timer + show/hide control
  - expanded mode shows progression/chord context

Pause/resume keeps the same pattern and timeline context (no forced reset on pause).

## Keyboard Shortcuts

- `Space`: Play/Pause
- `R`: Generate new pattern

Shortcuts are ignored while typing in form fields/buttons.

## Project Structure

- `index.html` - app layout, controls, HUD, editor, meters, transport
- `styles.css` - visual design, control styling, responsive behavior
- `app.js` - audio engine, pattern generation, scheduling, UI wiring

## Tech Notes

- Uses Web Audio API (oscillators/noise buffers/envelopes/filters/reverb routing)
- Step-based sequencer:
  - 64 total steps
  - 16 steps per bar
  - section order: `verse -> chorus -> bridge -> chorus`
- Shift timer regenerates patterns periodically, optionally with theory randomization

## Troubleshooting

- No sound:
  - click `Play` after entering playground (browser audio unlock)
  - ensure tab/audio output is not muted
- Playback feels unchanged:
  - check if elements are muted in meter panel
  - verify `Random Theory Mode` and `Pattern Shift` settings
- High CPU on low-power devices:
  - reduce complexity/variation
  - close extra browser tabs

---

If you want, the next README upgrade can include a visual control map and “knob recipes” (e.g., cinematic, intimate, tension-build, modal-folk).

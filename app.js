const STEPS_PER_BAR = 16;
const TOTAL_STEPS = 64;
const SECTION_ORDER = ["verse", "chorus", "bridge", "chorus"];

const ui = {
  landing: document.getElementById("landing"),
  loading: document.getElementById("loading"),
  playground: document.getElementById("playground"),
  loadingProgress: document.getElementById("loading-progress"),
  enterPlaygroundBtn: document.getElementById("enter-playground-btn"),
  statusPill: document.getElementById("status-pill"),

  key: document.getElementById("key"),

  energyCurve: document.getElementById("energy-curve"),
  harmonicDensity: document.getElementById("harmonic-density"),
  chordComplexity: document.getElementById("chord-complexity"),
  groove: document.getElementById("groove"),
  motifRepetition: document.getElementById("motif-repetition"),
  rhythmDensity: document.getElementById("rhythm-density"),
  brightness: document.getElementById("brightness"),
  humanization: document.getElementById("humanization"),

  scaleMode: document.getElementById("scale-mode"),
  harmonicRhythm: document.getElementById("harmonic-rhythm"),
  cadenceTension: document.getElementById("cadence-tension"),
  voiceLeading: document.getElementById("voice-leading"),
  chordToneGravity: document.getElementById("chord-tone-gravity"),
  diatonicStrictness: document.getElementById("diatonic-strictness"),
  randomTheoryMode: document.getElementById("random-theory-mode"),
  melodyInstrument: document.getElementById("melody-instrument"),
  chordInstrument: document.getElementById("chord-instrument"),
  melodyTone: document.getElementById("melody-tone"),

  verseMelodyLevel: document.getElementById("verse-melody-level"),
  chorusMelodyLevel: document.getElementById("chorus-melody-level"),
  bridgeMelodyLevel: document.getElementById("bridge-melody-level"),
  verseHarmonyLevel: document.getElementById("verse-harmony-level"),
  chorusHarmonyLevel: document.getElementById("chorus-harmony-level"),
  bridgeHarmonyLevel: document.getElementById("bridge-harmony-level"),
  verseRhythmLevel: document.getElementById("verse-rhythm-level"),
  chorusRhythmLevel: document.getElementById("chorus-rhythm-level"),
  bridgeRhythmLevel: document.getElementById("bridge-rhythm-level"),

  roomSize: document.getElementById("room-size"),
  dynamics: document.getElementById("dynamics"),
  stereoWidth: document.getElementById("stereo-width"),

  tempo: document.getElementById("tempo"),
  energy: document.getElementById("energy"),
  complexity: document.getElementById("complexity"),
  swing: document.getElementById("swing"),
  variation: document.getElementById("variation"),
  reverb: document.getElementById("reverb"),
  drumLevel: document.getElementById("drum-level"),
  bassLevel: document.getElementById("bass-level"),
  melodyLevel: document.getElementById("melody-level"),
  atmosphere: document.getElementById("atmosphere"),
  shiftMinutes: document.getElementById("shift-minutes"),

  harmonicDensityValue: document.getElementById("harmonic-density-value"),
  chordComplexityValue: document.getElementById("chord-complexity-value"),
  grooveValue: document.getElementById("groove-value"),
  motifRepetitionValue: document.getElementById("motif-repetition-value"),
  rhythmDensityValue: document.getElementById("rhythm-density-value"),
  brightnessValue: document.getElementById("brightness-value"),
  humanizationValue: document.getElementById("humanization-value"),

  cadenceTensionValue: document.getElementById("cadence-tension-value"),
  voiceLeadingValue: document.getElementById("voice-leading-value"),
  chordToneGravityValue: document.getElementById("chord-tone-gravity-value"),
  diatonicStrictnessValue: document.getElementById("diatonic-strictness-value"),
  melodyToneValue: document.getElementById("melody-tone-value"),

  verseMelodyLevelValue: document.getElementById("verse-melody-level-value"),
  chorusMelodyLevelValue: document.getElementById("chorus-melody-level-value"),
  bridgeMelodyLevelValue: document.getElementById("bridge-melody-level-value"),
  verseHarmonyLevelValue: document.getElementById("verse-harmony-level-value"),
  chorusHarmonyLevelValue: document.getElementById("chorus-harmony-level-value"),
  bridgeHarmonyLevelValue: document.getElementById("bridge-harmony-level-value"),
  verseRhythmLevelValue: document.getElementById("verse-rhythm-level-value"),
  chorusRhythmLevelValue: document.getElementById("chorus-rhythm-level-value"),
  bridgeRhythmLevelValue: document.getElementById("bridge-rhythm-level-value"),

  roomSizeValue: document.getElementById("room-size-value"),
  dynamicsValue: document.getElementById("dynamics-value"),
  stereoWidthValue: document.getElementById("stereo-width-value"),

  tempoValue: document.getElementById("tempo-value"),
  energyValue: document.getElementById("energy-value"),
  complexityValue: document.getElementById("complexity-value"),
  swingValue: document.getElementById("swing-value"),
  variationValue: document.getElementById("variation-value"),
  reverbValue: document.getElementById("reverb-value"),
  drumLevelValue: document.getElementById("drum-level-value"),
  bassLevelValue: document.getElementById("bass-level-value"),
  melodyLevelValue: document.getElementById("melody-level-value"),
  atmosphereValue: document.getElementById("atmosphere-value"),
  shiftMinutesValue: document.getElementById("shift-minutes-value"),

  startBtn: document.getElementById("start-btn"),
  pauseBtn: document.getElementById("pause-btn"),
  refreshBtn: document.getElementById("refresh-btn"),

  nowPlaying: document.getElementById("now-playing"),
  currentSection: document.getElementById("current-section"),
  theoryProgressionsRoman: document.getElementById("theory-progressions-roman"),
  theoryProgressionsChords: document.getElementById("theory-progressions-chords"),
  currentChord: document.getElementById("current-chord"),
  nextShift: document.getElementById("next-shift"),
  nextShiftMini: document.getElementById("next-shift-mini"),
  theoryHudToggle: document.getElementById("theory-hud-toggle"),
  theoryHudBody: document.getElementById("theory-hud-body"),

  melodyEditorSection: document.getElementById("melody-editor-section"),
  melodyFollowPlayback: document.getElementById("melody-follow-playback"),
  melodyLoadGenerated: document.getElementById("melody-load-generated"),
  melodyClearCustom: document.getElementById("melody-clear-custom"),
  melodyUseCustom: document.getElementById("melody-use-custom"),
  melodyEditorToggle: document.getElementById("melody-editor-toggle"),
  melodyEditorBody: document.getElementById("melody-editor-body"),
  melodyDrawDuration: document.getElementById("melody-draw-duration"),
  melodyDrawVelocity: document.getElementById("melody-draw-velocity"),
  melodyDrawVelocityValue: document.getElementById("melody-draw-velocity-value"),
  melodyGeneratedPreview: document.getElementById("melody-generated-preview"),
  melodyCustomPreview: document.getElementById("melody-custom-preview"),
  melodyTimingMode: document.getElementById("melody-timing-mode"),
  melodyPlayhead: document.getElementById("melody-playhead"),
  melodyTimingList: document.getElementById("melody-timing-list"),
  pianoRoll: document.getElementById("piano-roll"),

  meterKick: document.getElementById("meter-kick"),
  meterSnare: document.getElementById("meter-snare"),
  meterHat: document.getElementById("meter-hat"),
  meterOpenHat: document.getElementById("meter-open-hat"),
  meterPerc: document.getElementById("meter-perc"),
  meterBass: document.getElementById("meter-bass"),
  meterMelody: document.getElementById("meter-melody"),
  meterPad: document.getElementById("meter-pad"),

  muteKick: document.getElementById("mute-kick"),
  muteSnare: document.getElementById("mute-snare"),
  muteHat: document.getElementById("mute-hat"),
  muteOpenHat: document.getElementById("mute-open-hat"),
  mutePerc: document.getElementById("mute-perc"),
  muteBass: document.getElementById("mute-bass"),
  muteMelody: document.getElementById("mute-melody"),
  mutePad: document.getElementById("mute-pad"),
};

const keyNames = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];
const noteNamesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const PIANO_ROLL_MIN_MIDI = 48;
const PIANO_ROLL_MAX_MIDI = 84;

const scales = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  majorPent: [0, 2, 4, 7, 9],
  minorPent: [0, 3, 5, 7, 10],
};

const preset = {
  label: "Theory Lab",
  rootBase: 36,
  bassOctaveOffset: -12,
  melodyOctaveOffset: 12,
  defaultScale: "major",
};

const transport = {
  lookAheadMs: 25,
  scheduleAheadSec: 0.14,
  nextStepTime: 0,
  currentStep: 0,
  stepCounter: 0,
  schedulerTimer: null,
  shiftTimer: null,
  nextShiftAt: 0,
};

const ELEMENT_KEYS = ["kick", "snare", "hat", "openHat", "perc", "bass", "melody", "pad"];

function createEmptyElementLevels() {
  return {
    kick: 0,
    snare: 0,
    hat: 0,
    openHat: 0,
    perc: 0,
    bass: 0,
    melody: 0,
    pad: 0,
  };
}

function createEmptyMutes() {
  return {
    kick: false,
    snare: false,
    hat: false,
    openHat: false,
    perc: false,
    bass: false,
    melody: false,
    pad: false,
  };
}

function createEmptyMelodyLane() {
  return new Array(TOTAL_STEPS).fill(null);
}

function createEmptyCustomMelodies() {
  return {
    verse: createEmptyMelodyLane(),
    chorus: createEmptyMelodyLane(),
    bridge: createEmptyMelodyLane(),
  };
}

function createDefaultCustomMelodyEnabled() {
  return {
    verse: false,
    chorus: false,
    bridge: false,
  };
}

const state = {
  audioCtx: null,
  noiseBuffer: null,
  nodes: null,
  live: false,
  pattern: null,
  sectionName: "verse",
  elementLevels: createEmptyElementLevels(),
  mutes: createEmptyMutes(),
  customMelodies: createEmptyCustomMelodies(),
  customMelodyEnabled: createDefaultCustomMelodyEnabled(),
  theoryHudVisible: false,
  resumeFromPause: false,
  pauseRemainingMs: 0,
  melodyEditorVisible: false,
  editorPlayheadStep: -1,
  editorPlayheadSection: "verse",
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFromArray(values) {
  return values[Math.floor(Math.random() * values.length)];
}

function randomChance(probability) {
  return Math.random() < clamp(probability, 0, 1);
}

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function setRangeValue(input, value) {
  const min = Number(input.min);
  const max = Number(input.max);
  input.value = String(clamp(Math.round(value), min, max));
}

function getKeyName() {
  return keyNames[Number(ui.key.value)] || "C";
}

function getScaleName() {
  return ui.scaleMode.value === "auto" ? preset.defaultScale : ui.scaleMode.value;
}

function getRootMidi() {
  return preset.rootBase + Number(ui.key.value);
}

function getStepDurationSeconds() {
  return 60 / Number(ui.tempo.value) / 4;
}

function getShiftMs() {
  return Number(ui.shiftMinutes.value) * 60 * 1000;
}

function formatSeconds(seconds) {
  return `${seconds.toFixed(2)}s`;
}

function buildStepTimeOffsets() {
  const offsets = new Array(TOTAL_STEPS).fill(0);
  const baseStep = getStepDurationSeconds();
  const swing = clamp(Number(ui.swing.value) / 100, 0, 0.45);
  const swingOffset = baseStep * swing * 0.5;

  let currentTime = 0;
  offsets[0] = 0;
  for (let step = 1; step < TOTAL_STEPS; step += 1) {
    const previousStep = step - 1;
    const stepDelta = baseStep + (previousStep % 2 === 0 ? -swingOffset : swingOffset);
    currentTime += Math.max(0.01, stepDelta);
    offsets[step] = currentTime;
  }

  return offsets;
}

function getDurationSecondsFromOffsets(startStep, durationSteps) {
  if (durationSteps <= 0 || startStep < 0 || startStep >= TOTAL_STEPS) {
    return 0;
  }
  const baseStep = getStepDurationSeconds();
  const swing = clamp(Number(ui.swing.value) / 100, 0, 0.45);
  const swingOffset = baseStep * swing * 0.5;

  let total = 0;
  const safeDuration = Math.min(durationSteps, TOTAL_STEPS - startStep);
  for (let offset = 0; offset < safeDuration; offset += 1) {
    const stepIndex = startStep + offset;
    total += Math.max(0.01, baseStep + (stepIndex % 2 === 0 ? -swingOffset : swingOffset));
  }
  return total;
}

function scaleDegreeSemitone(scaleName, degree) {
  const scale = scales[scaleName] || scales[preset.defaultScale];
  const normalized = ((degree % scale.length) + scale.length) % scale.length;
  const octave = Math.floor(degree / scale.length);
  return scale[normalized] + octave * 12;
}

function degreeToRoman(degree) {
  const index = ((degree % 7) + 7) % 7;
  return romanNumerals[index];
}

function degreeFunction(degree) {
  const d = ((degree % 7) + 7) % 7;
  if (d === 0 || d === 2 || d === 5) {
    return "Tonic";
  }
  if (d === 1 || d === 3) {
    return "Predominant";
  }
  return "Dominant";
}

function normalizeSemitone(value) {
  return ((value % 12) + 12) % 12;
}

function getTriadQuality(scaleName, degree) {
  const root = scaleDegreeSemitone(scaleName, degree);
  const third = scaleDegreeSemitone(scaleName, degree + 2);
  const fifth = scaleDegreeSemitone(scaleName, degree + 4);

  const thirdInterval = normalizeSemitone(third - root);
  const fifthInterval = normalizeSemitone(fifth - root);

  if (thirdInterval === 4 && fifthInterval === 7) {
    return "major";
  }
  if (thirdInterval === 3 && fifthInterval === 7) {
    return "minor";
  }
  if (thirdInterval === 3 && fifthInterval === 6) {
    return "diminished";
  }
  if (thirdInterval === 4 && fifthInterval === 8) {
    return "augmented";
  }
  return "chord";
}

function degreeToChordName(scaleName, rootMidi, degree) {
  const rootSemitone = normalizeSemitone(rootMidi + scaleDegreeSemitone(scaleName, degree));
  const note = keyNames[rootSemitone] || "C";
  const quality = getTriadQuality(scaleName, degree);
  if (quality === "chord") {
    return `${note} chord`;
  }
  return `${note} ${quality}`;
}

function cloneMelodyLane(lane) {
  return lane.map((note) => {
    if (!note) {
      return null;
    }
    return {
      midi: note.midi,
      velocity: note.velocity,
      durationSteps: note.durationSteps,
    };
  });
}

function normalizeMelodyLane(lane) {
  const normalized = createEmptyMelodyLane();

  for (let step = 0; step < TOTAL_STEPS; step += 1) {
    const note = lane[step];
    if (!note) {
      continue;
    }
    normalized[step] = {
      midi: clamp(Math.round(Number(note.midi) || 60), PIANO_ROLL_MIN_MIDI, PIANO_ROLL_MAX_MIDI),
      durationSteps: clamp(Math.round(Number(note.durationSteps) || 1), 1, Math.min(8, TOTAL_STEPS - step)),
      velocity: clamp(Number(note.velocity) || 0.6, 0.1, 1),
    };
  }

  let previousStart = null;
  for (let step = 0; step < TOTAL_STEPS; step += 1) {
    const note = normalized[step];
    if (!note) {
      continue;
    }
    if (previousStart !== null) {
      const previousNote = normalized[previousStart];
      const maxDuration = step - previousStart;
      if (previousNote && previousNote.durationSteps > maxDuration) {
        previousNote.durationSteps = Math.max(1, maxDuration);
      }
    }
    previousStart = step;
  }

  return normalized;
}

function getMelodyEditorSection() {
  const section = ui.melodyEditorSection?.value || "verse";
  if (section === "chorus" || section === "bridge") {
    return section;
  }
  return "verse";
}

function getGeneratedMelodyLane(sectionName) {
  if (!state.pattern || !state.pattern.sections[sectionName]) {
    return createEmptyMelodyLane();
  }
  return state.pattern.sections[sectionName].melody;
}

function getPlaybackMelodyLane(sectionName) {
  if (state.customMelodyEnabled[sectionName]) {
    return state.customMelodies[sectionName];
  }
  return getGeneratedMelodyLane(sectionName);
}

function getMelodyDrawDuration() {
  return clamp(Number(ui.melodyDrawDuration?.value || 1), 1, 8);
}

function getMelodyDrawVelocity() {
  return clamp(Number(ui.melodyDrawVelocity?.value || 62) / 100, 0.1, 1);
}

function midiToNoteLabel(midi) {
  const semitone = normalizeSemitone(Math.round(midi));
  const octave = Math.floor(Math.round(midi) / 12) - 1;
  return `${noteNamesSharp[semitone]}${octave}`;
}

function laneToMelodyEvents(lane) {
  const events = [];
  lane.forEach((note, index) => {
    if (!note) {
      return;
    }
    events.push({
      step: index + 1,
      midi: Math.round(note.midi),
      durationSteps: Math.round(note.durationSteps),
      velocity: Number(note.velocity),
    });
  });
  return events;
}

function melodyEventsToLane(events) {
  const lane = createEmptyMelodyLane();
  events.forEach((event) => {
    const step = clamp(Math.round(Number(event.step) || 1), 1, TOTAL_STEPS) - 1;
    lane[step] = {
      midi: clamp(Math.round(Number(event.midi) || 60), 36, 96),
      durationSteps: clamp(Math.round(Number(event.durationSteps) || 1), 1, 8),
      velocity: clamp(Number(event.velocity) || 0.6, 0.1, 1),
    };
  });
  return normalizeMelodyLane(lane);
}

function summarizeMelodyLane(lane) {
  const events = laneToMelodyEvents(lane);
  if (!events.length) {
    return "none";
  }
  const preview = events
    .slice(0, 10)
    .map((event) => `${event.step}:${midiToNoteLabel(event.midi)}/${event.durationSteps}`)
    .join(", ");
  if (events.length > 10) {
    return `${preview} ... (${events.length} notes)`;
  }
  return `${preview} (${events.length} notes)`;
}

function isBlackKey(midi) {
  const semitone = normalizeSemitone(midi);
  return semitone === 1 || semitone === 3 || semitone === 6 || semitone === 8 || semitone === 10;
}

function buildMelodyLaneMaps(lane) {
  const start = new Set();
  const hold = new Set();

  for (let step = 0; step < TOTAL_STEPS; step += 1) {
    const note = lane[step];
    if (!note) {
      continue;
    }
    const midi = Math.round(note.midi);
    start.add(`${step}:${midi}`);
    for (let offset = 1; offset < note.durationSteps; offset += 1) {
      const holdStep = step + offset;
      if (holdStep >= TOTAL_STEPS) {
        break;
      }
      hold.add(`${holdStep}:${midi}`);
    }
  }

  return { start, hold };
}

function renderPianoRoll(sectionName) {
  if (!ui.pianoRoll) {
    return;
  }

  const stepOffsets = buildStepTimeOffsets();
  const customLane = normalizeMelodyLane(state.customMelodies[sectionName]);
  const generatedLane = normalizeMelodyLane(getGeneratedMelodyLane(sectionName));
  const customMap = buildMelodyLaneMaps(customLane);
  const generatedMap = buildMelodyLaneMaps(generatedLane);

  ui.pianoRoll.textContent = "";

  for (let midi = PIANO_ROLL_MAX_MIDI; midi >= PIANO_ROLL_MIN_MIDI; midi -= 1) {
    const row = document.createElement("div");
    row.className = "piano-roll-row";

    const noteLabel = document.createElement("div");
    noteLabel.className = `piano-roll-note-label${isBlackKey(midi) ? " black" : ""}`;
    noteLabel.textContent = midiToNoteLabel(midi);

    const stepGrid = document.createElement("div");
    stepGrid.className = "piano-roll-step-grid";

    for (let step = 0; step < TOTAL_STEPS; step += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "piano-roll-cell";
      cell.dataset.step = String(step);
      cell.dataset.midi = String(midi);

      const key = `${step}:${midi}`;
      if (generatedMap.hold.has(key)) {
        cell.classList.add("generated-hold");
      }
      if (generatedMap.start.has(key)) {
        cell.classList.add("generated");
      }
      if (customMap.hold.has(key)) {
        cell.classList.add("hold");
      }
      if (customMap.start.has(key)) {
        cell.classList.add("active");
      }
      if ((step + 1) % STEPS_PER_BAR === 0) {
        cell.classList.add("barline");
      }
      if (state.editorPlayheadSection === sectionName && state.editorPlayheadStep === step) {
        cell.classList.add("playhead");
      }
      cell.title = `Step ${step + 1} • ${formatSeconds(stepOffsets[step])} • ${midiToNoteLabel(midi)}`;
      stepGrid.appendChild(cell);
    }

    row.appendChild(noteLabel);
    row.appendChild(stepGrid);
    ui.pianoRoll.appendChild(row);
  }
}

function renderMelodyTimingList(sectionName, activeLane) {
  if (!ui.melodyTimingList) {
    return;
  }
  ui.melodyTimingList.textContent = "";
  const events = laneToMelodyEvents(activeLane);
  if (!events.length) {
    const chip = document.createElement("span");
    chip.className = "melody-timing-chip";
    chip.textContent = "No notes";
    ui.melodyTimingList.appendChild(chip);
    return;
  }

  const stepOffsets = buildStepTimeOffsets();
  events.forEach((event) => {
    const startStep = event.step - 1;
    const startTime = stepOffsets[startStep] || 0;
    const dur = getDurationSecondsFromOffsets(startStep, event.durationSteps);
    const chip = document.createElement("span");
    chip.className = "melody-timing-chip";
    chip.textContent = `${formatSeconds(startTime)} · ${midiToNoteLabel(event.midi)} · step ${event.step} · dur ${dur.toFixed(2)}s`;
    ui.melodyTimingList.appendChild(chip);
  });
}

function clearMelodyPlayhead() {
  state.editorPlayheadStep = -1;
  if (ui.melodyPlayhead) {
    ui.melodyPlayhead.textContent = "stopped";
  }
  if (ui.pianoRoll) {
    ui.pianoRoll.querySelectorAll(".piano-roll-cell.playhead").forEach((cell) => {
      cell.classList.remove("playhead");
    });
  }
}

function updateMelodyPlayhead(sectionName, step) {
  let editorSection = getMelodyEditorSection();
  if (!ui.melodyPlayhead || !ui.pianoRoll) {
    return;
  }

  if (editorSection !== sectionName) {
    if (ui.melodyFollowPlayback?.checked) {
      if (ui.melodyEditorSection && ui.melodyEditorSection.value !== sectionName) {
        ui.melodyEditorSection.value = sectionName;
        renderMelodyEditor();
      }
      editorSection = getMelodyEditorSection();
    }
  }

  if (editorSection !== sectionName) {
    if (state.editorPlayheadStep !== -1) {
      clearMelodyPlayhead();
    }
    ui.melodyPlayhead.textContent = `Playing ${sectionName} section`;
    return;
  }

  if (state.editorPlayheadSection !== sectionName || state.editorPlayheadStep !== step) {
    ui.pianoRoll.querySelectorAll(".piano-roll-cell.playhead").forEach((cell) => {
      cell.classList.remove("playhead");
    });
    ui.pianoRoll
      .querySelectorAll(`.piano-roll-cell[data-step="${step}"]`)
      .forEach((cell) => cell.classList.add("playhead"));
    state.editorPlayheadSection = sectionName;
    state.editorPlayheadStep = step;
  }

  const lane = normalizeMelodyLane(getPlaybackMelodyLane(sectionName));
  const stepOffsets = buildStepTimeOffsets();
  const note = lane[step];
  const noteLabel = note ? midiToNoteLabel(note.midi) : "rest";
  ui.melodyPlayhead.textContent = `${sectionName} • ${formatSeconds(stepOffsets[step] || 0)} • step ${step + 1} • ${noteLabel}`;
}

function findHoldingStartStep(lane, stepIndex, midi) {
  for (let step = stepIndex - 1; step >= 0; step -= 1) {
    const note = lane[step];
    if (!note) {
      continue;
    }
    if (Math.round(note.midi) !== midi) {
      continue;
    }
    if (step + note.durationSteps > stepIndex) {
      return step;
    }
  }
  return -1;
}

function applyPianoRollEdit(sectionName, stepIndex, midi) {
  const lane = cloneMelodyLane(state.customMelodies[sectionName]);
  const noteAtStep = lane[stepIndex];

  if (noteAtStep && Math.round(noteAtStep.midi) === midi) {
    lane[stepIndex] = null;
  } else {
    const holdingStart = findHoldingStartStep(lane, stepIndex, midi);
    if (holdingStart >= 0) {
      const source = lane[holdingStart];
      source.durationSteps = Math.max(1, stepIndex - holdingStart);
    } else {
      lane[stepIndex] = {
        midi,
        durationSteps: getMelodyDrawDuration(),
        velocity: getMelodyDrawVelocity(),
      };
    }
  }

  state.customMelodies[sectionName] = normalizeMelodyLane(lane);
  state.customMelodyEnabled[sectionName] = true;
  renderMelodyEditor();
}

function renderMelodyEditor() {
  if (!ui.melodyGeneratedPreview || !ui.melodyCustomPreview || !ui.melodyUseCustom || !ui.pianoRoll) {
    return;
  }
  const sectionName = getMelodyEditorSection();
  const generatedLane = normalizeMelodyLane(getGeneratedMelodyLane(sectionName));
  const customLane = normalizeMelodyLane(state.customMelodies[sectionName]);
  state.customMelodies[sectionName] = customLane;
  const activeLane = state.customMelodyEnabled[sectionName] ? customLane : generatedLane;

  ui.melodyGeneratedPreview.textContent = summarizeMelodyLane(generatedLane);
  ui.melodyCustomPreview.textContent = `${summarizeMelodyLane(customLane)} ${
    state.customMelodyEnabled[sectionName] ? "(active)" : "(inactive)"
  }`;
  if (ui.melodyTimingMode) {
    ui.melodyTimingMode.textContent = state.customMelodyEnabled[sectionName]
      ? "Custom melody is active"
      : "Generated melody is active";
  }
  ui.melodyUseCustom.checked = state.customMelodyEnabled[sectionName];
  if (ui.melodyDrawVelocityValue && ui.melodyDrawVelocity) {
    ui.melodyDrawVelocityValue.textContent = ui.melodyDrawVelocity.value;
  }
  renderMelodyTimingList(sectionName, activeLane);
  renderPianoRoll(sectionName);

  if (!state.live) {
    clearMelodyPlayhead();
    return;
  }
  const activeSection = getActiveSectionName();
  const playbackStep = (transport.currentStep + TOTAL_STEPS - 1) % TOTAL_STEPS;
  updateMelodyPlayhead(activeSection, playbackStep);
}

function bindMelodyEditorControls() {
  if (!ui.melodyEditorSection || !ui.pianoRoll) {
    return;
  }

  setMelodyEditorVisibility(state.melodyEditorVisible);

  ui.melodyEditorSection.addEventListener("change", () => {
    renderMelodyEditor();
  });

  ui.melodyUseCustom.addEventListener("change", () => {
    const sectionName = getMelodyEditorSection();
    state.customMelodyEnabled[sectionName] = ui.melodyUseCustom.checked;
    renderMelodyEditor();
  });

  ui.melodyFollowPlayback.addEventListener("change", () => {
    renderMelodyEditor();
  });

  ui.melodyLoadGenerated.addEventListener("click", () => {
    const sectionName = getMelodyEditorSection();
    state.customMelodies[sectionName] = normalizeMelodyLane(cloneMelodyLane(getGeneratedMelodyLane(sectionName)));
    state.customMelodyEnabled[sectionName] = true;
    renderMelodyEditor();
  });

  ui.melodyClearCustom.addEventListener("click", () => {
    const sectionName = getMelodyEditorSection();
    state.customMelodies[sectionName] = createEmptyMelodyLane();
    renderMelodyEditor();
  });

  ui.melodyDrawDuration.addEventListener("change", () => {
    renderMelodyEditor();
  });

  ui.melodyDrawVelocity.addEventListener("input", () => {
    renderMelodyEditor();
  });

  ui.pianoRoll.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains("piano-roll-cell")) {
      return;
    }
    const sectionName = getMelodyEditorSection();
    const stepIndex = Number(target.dataset.step);
    const midi = Number(target.dataset.midi);
    if (Number.isNaN(stepIndex) || Number.isNaN(midi)) {
      return;
    }
    applyPianoRollEdit(sectionName, stepIndex, midi);
  });

  if (ui.melodyEditorToggle) {
    ui.melodyEditorToggle.addEventListener("click", () => {
      setMelodyEditorVisibility(!state.melodyEditorVisible);
    });
  }
}

function setMelodyEditorVisibility(visible) {
  state.melodyEditorVisible = visible;
  if (ui.melodyEditorBody) {
    ui.melodyEditorBody.classList.toggle("hidden", !visible);
  }
  if (ui.melodyEditorToggle) {
    ui.melodyEditorToggle.textContent = visible ? "Hide Melody Editor" : "Show Melody Editor";
    ui.melodyEditorToggle.setAttribute("aria-expanded", visible ? "true" : "false");
  }
}

function setTheoryHudVisibility(visible) {
  state.theoryHudVisible = visible;
  if (ui.theoryHudBody) {
    ui.theoryHudBody.classList.toggle("hidden", !visible);
  }
  if (ui.theoryHudToggle) {
    ui.theoryHudToggle.textContent = visible ? "Hide" : "Show";
    ui.theoryHudToggle.setAttribute("aria-expanded", visible ? "true" : "false");
  }
}

function randomizeInstrumentalTheoryControls() {
  ui.scaleMode.value = randomFromArray(["major", "minor", "dorian", "mixolydian"]);
  ui.melodyInstrument.value = randomFromArray(["grand-piano", "nylon-guitar", "warm-strings", "woodwind"]);
  ui.chordInstrument.value = randomFromArray(["warm-strings", "organ"]);
  ui.melodyTone.value = String(randomInt(2, 10));
  ui.harmonicRhythm.value = randomFromArray(["1", "2", "4"]);
  ui.cadenceTension.value = String(randomInt(1, 10));
  ui.voiceLeading.value = String(randomInt(2, 10));
  ui.chordToneGravity.value = String(randomInt(2, 10));
  ui.diatonicStrictness.value = String(randomInt(3, 10));
  updateOutputs();
  applyMixFromUI();
}

function setStatus(text, live) {
  ui.statusPill.textContent = text;
  ui.statusPill.classList.toggle("live", live);
}

function updateOutputs() {
  ui.harmonicDensityValue.textContent = ui.harmonicDensity.value;
  ui.chordComplexityValue.textContent = ui.chordComplexity.value;
  ui.grooveValue.textContent = ui.groove.value;
  ui.motifRepetitionValue.textContent = ui.motifRepetition.value;
  ui.rhythmDensityValue.textContent = ui.rhythmDensity.value;
  ui.brightnessValue.textContent = ui.brightness.value;
  ui.humanizationValue.textContent = ui.humanization.value;

  ui.cadenceTensionValue.textContent = ui.cadenceTension.value;
  ui.voiceLeadingValue.textContent = ui.voiceLeading.value;
  ui.chordToneGravityValue.textContent = ui.chordToneGravity.value;
  ui.diatonicStrictnessValue.textContent = ui.diatonicStrictness.value;
  ui.melodyToneValue.textContent = ui.melodyTone.value;

  ui.verseMelodyLevelValue.textContent = ui.verseMelodyLevel.value;
  ui.chorusMelodyLevelValue.textContent = ui.chorusMelodyLevel.value;
  ui.bridgeMelodyLevelValue.textContent = ui.bridgeMelodyLevel.value;
  ui.verseHarmonyLevelValue.textContent = ui.verseHarmonyLevel.value;
  ui.chorusHarmonyLevelValue.textContent = ui.chorusHarmonyLevel.value;
  ui.bridgeHarmonyLevelValue.textContent = ui.bridgeHarmonyLevel.value;
  ui.verseRhythmLevelValue.textContent = ui.verseRhythmLevel.value;
  ui.chorusRhythmLevelValue.textContent = ui.chorusRhythmLevel.value;
  ui.bridgeRhythmLevelValue.textContent = ui.bridgeRhythmLevel.value;

  ui.roomSizeValue.textContent = ui.roomSize.value;
  ui.dynamicsValue.textContent = ui.dynamics.value;
  ui.stereoWidthValue.textContent = ui.stereoWidth.value;

  ui.tempoValue.textContent = ui.tempo.value;
  ui.energyValue.textContent = ui.energy.value;
  ui.complexityValue.textContent = ui.complexity.value;
  ui.swingValue.textContent = ui.swing.value;
  ui.variationValue.textContent = ui.variation.value;
  ui.reverbValue.textContent = ui.reverb.value;
  ui.drumLevelValue.textContent = ui.drumLevel.value;
  ui.bassLevelValue.textContent = ui.bassLevel.value;
  ui.melodyLevelValue.textContent = ui.melodyLevel.value;
  ui.atmosphereValue.textContent = ui.atmosphere.value;
  ui.shiftMinutesValue.textContent = ui.shiftMinutes.value;
  if (ui.melodyDrawVelocityValue) {
    ui.melodyDrawVelocityValue.textContent = ui.melodyDrawVelocity.value;
  }
}

function noteElementLevel(element, level) {
  const normalized = clamp(level, 0, 1);
  state.elementLevels[element] = Math.max(state.elementLevels[element], normalized);
}

function decayElementLevels() {
  ELEMENT_KEYS.forEach((key) => {
    state.elementLevels[key] *= 0.9;
    if (state.elementLevels[key] < 0.003) {
      state.elementLevels[key] = 0;
    }
  });
}

function renderElementMeters() {
  const rows = [
    [ui.meterKick, state.elementLevels.kick],
    [ui.meterSnare, state.elementLevels.snare],
    [ui.meterHat, state.elementLevels.hat],
    [ui.meterOpenHat, state.elementLevels.openHat],
    [ui.meterPerc, state.elementLevels.perc],
    [ui.meterBass, state.elementLevels.bass],
    [ui.meterMelody, state.elementLevels.melody],
    [ui.meterPad, state.elementLevels.pad],
  ];

  rows.forEach(([bar, level]) => {
    if (!bar) {
      return;
    }
    const pct = Math.round(clamp(level, 0, 1) * 100);
    bar.style.width = `${pct}%`;
  });
}

function resetElementMeters() {
  state.elementLevels = createEmptyElementLevels();
  renderElementMeters();
}

function getElementLabel(element) {
  return element
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
}

function getMuteIconSvg(muted) {
  if (muted) {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M11 5L6.5 9H3v6h3.5l4.5 4V5Z" />
        <path d="M16 9l5 6M21 9l-5 6" />
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M11 5L6.5 9H3v6h3.5l4.5 4V5Z" />
      <path d="M16 10.5c1.2 1 1.2 2 0 3" />
      <path d="M18.5 8c2.4 2 2.4 6 0 8" />
    </svg>
  `;
}

function updateMuteButton(element) {
  const key = element.charAt(0).toUpperCase() + element.slice(1);
  const button = ui[`mute${key}`];
  if (!button) {
    return;
  }
  const muted = state.mutes[element];
  const label = getElementLabel(element);
  button.setAttribute("aria-pressed", muted ? "true" : "false");
  button.setAttribute("aria-label", muted ? `Unmute ${label}` : `Mute ${label}`);
  button.title = muted ? `Unmute ${label}` : `Mute ${label}`;
  button.innerHTML = getMuteIconSvg(muted);
}

function setElementMuted(element, muted) {
  state.mutes[element] = muted;
  if (muted) {
    state.elementLevels[element] = 0;
    renderElementMeters();
  }
  updateMuteButton(element);
}

function bindMuteControls() {
  ELEMENT_KEYS.forEach((element) => {
    const key = element.charAt(0).toUpperCase() + element.slice(1);
    const button = ui[`mute${key}`];
    if (!button) {
      return;
    }
    updateMuteButton(element);
    button.addEventListener("click", () => {
      setElementMuted(element, !state.mutes[element]);
    });
  });
}

function syncMacrosFromEngine() {
  const energy = Number(ui.energy.value);
  const complexity = Number(ui.complexity.value);
  const swing = Number(ui.swing.value);
  const variation = Number(ui.variation.value);
  const drumLevel = Number(ui.drumLevel.value);
  const bassLevel = Number(ui.bassLevel.value);
  const melodyLevel = Number(ui.melodyLevel.value);
  const atmosphere = Number(ui.atmosphere.value);

  setRangeValue(ui.rhythmDensity, energy * 0.55 + drumLevel * 0.45);
  setRangeValue(ui.chordComplexity, complexity);
  setRangeValue(ui.groove, 1 + (swing / 70) * 9);
  setRangeValue(ui.motifRepetition, 11 - variation * 0.85);
  setRangeValue(ui.harmonicDensity, bassLevel * 0.45 + melodyLevel * 0.35 + atmosphere * 0.2);
  setRangeValue(ui.brightness, 1 + ((energy * 0.5 + melodyLevel * 0.5) / 10) * 9);
  setRangeValue(ui.humanization, 1 + (variation / 10) * 9);
}

function applyMacroIntent() {
  const harmonicDensity = Number(ui.harmonicDensity.value) / 10;
  const chordComplexity = Number(ui.chordComplexity.value) / 10;
  const groove = Number(ui.groove.value) / 10;
  const motifRepetition = Number(ui.motifRepetition.value) / 10;
  const rhythmDensity = Number(ui.rhythmDensity.value) / 10;
  const brightness = Number(ui.brightness.value) / 10;
  const humanization = Number(ui.humanization.value) / 10;

  setRangeValue(ui.energy, 1 + rhythmDensity * 9);
  setRangeValue(ui.complexity, 1 + chordComplexity * 9);
  setRangeValue(ui.swing, groove * 46);
  setRangeValue(ui.variation, 1 + (1 - motifRepetition) * 7 + humanization * 2);

  setRangeValue(ui.drumLevel, 2 + rhythmDensity * 8);
  setRangeValue(ui.bassLevel, 2 + harmonicDensity * 7);
  setRangeValue(ui.melodyLevel, 2 + harmonicDensity * 4 + chordComplexity * 4);
  setRangeValue(ui.atmosphere, 2 + harmonicDensity * 5 + (1 - brightness) * 2);

  let reverbTarget = 12 + (1 - brightness) * 24 + harmonicDensity * 18;
  if (ui.energyCurve.value === "build") {
    reverbTarget += 8;
  } else if (ui.energyCurve.value === "wave") {
    reverbTarget += 12;
  } else if (ui.energyCurve.value === "drop") {
    reverbTarget -= 6;
  }
  setRangeValue(ui.reverb, reverbTarget);
}

function getEnergyCurveFactor(stepCounter) {
  const cycle = STEPS_PER_BAR * 8;
  const phase = (stepCounter % cycle) / cycle;
  const mode = ui.energyCurve.value;

  if (mode === "build") {
    return 0.8 + phase * 0.38;
  }
  if (mode === "wave") {
    return 0.86 + Math.sin(phase * Math.PI * 2) * 0.2;
  }
  if (mode === "drop") {
    const burst = phase < 0.14 ? 1.18 : 0.85 + (phase - 0.14) * 0.24;
    return clamp(burst, 0.78, 1.22);
  }
  return 1;
}

function getSectionProfiles() {
  return {
    verse: {
      melody: Number(ui.verseMelodyLevel.value) / 10,
      harmony: Number(ui.verseHarmonyLevel.value) / 10,
      rhythm: Number(ui.verseRhythmLevel.value) / 10,
    },
    chorus: {
      melody: Number(ui.chorusMelodyLevel.value) / 10,
      harmony: Number(ui.chorusHarmonyLevel.value) / 10,
      rhythm: Number(ui.chorusRhythmLevel.value) / 10,
    },
    bridge: {
      melody: Number(ui.bridgeMelodyLevel.value) / 10,
      harmony: Number(ui.bridgeHarmonyLevel.value) / 10,
      rhythm: Number(ui.bridgeRhythmLevel.value) / 10,
    },
  };
}

function switchView({ showLanding = false, showLoading = false, showPlayground = false }) {
  ui.landing.classList.toggle("hidden", !showLanding);
  ui.loading.classList.toggle("hidden", !showLoading);
  ui.playground.classList.toggle("hidden", !showPlayground);
}

function simulateLoading() {
  switchView({ showLoading: true });
  ui.loadingProgress.style.width = "0%";

  return new Promise((resolve) => {
    let value = 0;
    const timer = setInterval(() => {
      value += 10 + Math.random() * 10;
      ui.loadingProgress.style.width = `${Math.min(value, 100)}%`;
      if (value >= 100) {
        clearInterval(timer);
        resolve();
      }
    }, 120);
  });
}

function createNoiseBuffer(audioCtx) {
  const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 2, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.7;
  }
  return buffer;
}

function createImpulseResponse(audioCtx, duration = 2.3, decay = 2.4) {
  const length = Math.floor(audioCtx.sampleRate * duration);
  const impulse = audioCtx.createBuffer(2, length, audioCtx.sampleRate);

  for (let channel = 0; channel < impulse.numberOfChannels; channel += 1) {
    const data = impulse.getChannelData(channel);
    for (let i = 0; i < length; i += 1) {
      const envelope = Math.pow(1 - i / length, decay);
      data[i] = (Math.random() * 2 - 1) * envelope;
    }
  }

  return impulse;
}

function initAudio() {
  if (state.audioCtx) {
    return;
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const drumBus = audioCtx.createGain();
  const bassBus = audioCtx.createGain();
  const melodyBus = audioCtx.createGain();
  const padBus = audioCtx.createGain();
  const masterBus = audioCtx.createGain();
  const tonalFilter = audioCtx.createBiquadFilter();
  const dryGain = audioCtx.createGain();
  const wetGain = audioCtx.createGain();
  const convolver = audioCtx.createConvolver();
  const compressor = audioCtx.createDynamicsCompressor();

  drumBus.connect(masterBus);
  bassBus.connect(masterBus);
  melodyBus.connect(masterBus);
  padBus.connect(masterBus);

  masterBus.connect(tonalFilter);
  tonalFilter.connect(dryGain);
  tonalFilter.connect(convolver);
  convolver.connect(wetGain);
  dryGain.connect(compressor);
  wetGain.connect(compressor);
  compressor.connect(audioCtx.destination);

  masterBus.gain.value = 0.66;
  dryGain.gain.value = 0.88;
  wetGain.gain.value = 0.3;
  tonalFilter.type = "lowpass";
  tonalFilter.frequency.value = 4600;
  tonalFilter.Q.value = 0.34;

  compressor.threshold.value = -20;
  compressor.knee.value = 18;
  compressor.ratio.value = 2.4;
  compressor.attack.value = 0.004;
  compressor.release.value = 0.26;

  convolver.buffer = createImpulseResponse(audioCtx);

  state.audioCtx = audioCtx;
  state.noiseBuffer = createNoiseBuffer(audioCtx);
  state.nodes = {
    drumBus,
    bassBus,
    melodyBus,
    padBus,
    masterBus,
    tonalFilter,
    dryGain,
    wetGain,
    compressor,
  };
}

function applyMixFromUI() {
  if (!state.nodes || !state.audioCtx) {
    return;
  }

  const now = state.audioCtx.currentTime;
  const drumAmt = Number(ui.drumLevel.value) / 10;
  const bassAmt = Number(ui.bassLevel.value) / 10;
  const melodyAmt = Number(ui.melodyLevel.value) / 10;
  const atmosphere = Number(ui.atmosphere.value) / 10;
  const reverbAmt = Number(ui.reverb.value) / 100;
  const roomSize = Number(ui.roomSize.value) / 100;
  const dynamics = Number(ui.dynamics.value) / 10;
  const energy = Number(ui.energy.value) / 10;
  const brightness = Number(ui.brightness.value) / 10;

  state.nodes.drumBus.gain.setTargetAtTime(0.08 + drumAmt * 0.48, now, 0.03);
  state.nodes.bassBus.gain.setTargetAtTime(0.14 + bassAmt * 0.6, now, 0.03);
  state.nodes.melodyBus.gain.setTargetAtTime(0.1 + melodyAmt * 0.45, now, 0.03);
  state.nodes.padBus.gain.setTargetAtTime(0.08 + atmosphere * 0.5, now, 0.08);

  const wetBase = clamp((roomSize * 0.72 + reverbAmt * 0.28), 0, 1);
  const wetLevel = clamp(wetBase * (0.32 + atmosphere * 0.68), 0, 0.95);
  const dryLevel = clamp(0.95 - wetLevel * 0.33, 0.42, 1);
  state.nodes.wetGain.gain.setTargetAtTime(wetLevel, now, 0.06);
  state.nodes.dryGain.gain.setTargetAtTime(dryLevel, now, 0.06);

  const filterCutoff = 850 + energy * 3000 + melodyAmt * 1200 + atmosphere * 650 + brightness * 2700;
  state.nodes.tonalFilter.frequency.setTargetAtTime(filterCutoff, now, 0.1);

  state.nodes.masterBus.gain.setTargetAtTime(0.52 + dynamics * 0.28, now, 0.06);
  state.nodes.compressor.ratio.setTargetAtTime(1.5 + (1 - dynamics) * 3.6, now, 0.07);
  state.nodes.compressor.threshold.setTargetAtTime(-15 - (1 - dynamics) * 13, now, 0.07);
}

function createEnvelope(gainNode, time, attack, decay, sustainLevel, releaseTime, peak = 1) {
  gainNode.gain.setValueAtTime(0.0001, time);
  gainNode.gain.linearRampToValueAtTime(peak, time + attack);
  gainNode.gain.linearRampToValueAtTime(sustainLevel, time + attack + decay);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, time + attack + decay + releaseTime);
}

function getStereoPanSpread(multiplier = 1) {
  const width = Number(ui.stereoWidth.value) / 10;
  return (Math.random() * 2 - 1) * width * multiplier;
}

function connectWithStereoPan(sourceNode, targetNode, panValue) {
  if (typeof state.audioCtx.createStereoPanner !== "function") {
    sourceNode.connect(targetNode);
    return;
  }

  const panner = state.audioCtx.createStereoPanner();
  panner.pan.value = clamp(panValue, -1, 1);
  sourceNode.connect(panner);
  panner.connect(targetNode);
}

function getInstrumentalDrumProfile() {
  const brightness = Number(ui.brightness.value) / 10;
  return {
    kickStart: 118,
    kickEnd: 44,
    kickDecay: 0.2,
    snareFreq: 1500 + brightness * 520,
    snareDecay: 0.26,
    snareToneFreq: 165,
    hatCutoff: 3300 + brightness * 1700,
    hatDecay: 0.11,
    openHatDecay: 0.2,
    metallic: 0.02 + brightness * 0.05,
    percFreq: 1000 + brightness * 600,
  };
}

function playKick(time, velocity, profile) {
  const osc = state.audioCtx.createOscillator();
  const gain = state.audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(profile.kickStart, time);
  osc.frequency.exponentialRampToValueAtTime(profile.kickEnd, time + profile.kickDecay);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.65 * velocity, time + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + profile.kickDecay + 0.03);

  osc.connect(gain);
  connectWithStereoPan(gain, state.nodes.drumBus, getStereoPanSpread(0.09));
  osc.start(time);
  osc.stop(time + profile.kickDecay + 0.04);
}

function playSnare(time, velocity, profile) {
  const noise = state.audioCtx.createBufferSource();
  const filter = state.audioCtx.createBiquadFilter();
  const gain = state.audioCtx.createGain();

  noise.buffer = state.noiseBuffer;
  filter.type = "bandpass";
  filter.frequency.value = profile.snareFreq;
  filter.Q.value = 0.7;

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.2 * velocity, time + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + profile.snareDecay);

  noise.connect(filter);
  filter.connect(gain);
  connectWithStereoPan(gain, state.nodes.drumBus, getStereoPanSpread(0.18));
  noise.start(time);
  noise.stop(time + profile.snareDecay + 0.02);

  const tone = state.audioCtx.createOscillator();
  const toneGain = state.audioCtx.createGain();
  tone.type = "triangle";
  tone.frequency.value = profile.snareToneFreq;
  toneGain.gain.setValueAtTime(0.0001, time);
  toneGain.gain.exponentialRampToValueAtTime(0.12 * velocity, time + 0.005);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.09);
  tone.connect(toneGain);
  connectWithStereoPan(toneGain, state.nodes.drumBus, getStereoPanSpread(0.14));
  tone.start(time);
  tone.stop(time + 0.1);
}

function playHat(time, velocity, profile, isOpen = false) {
  const noise = state.audioCtx.createBufferSource();
  const highpass = state.audioCtx.createBiquadFilter();
  const gain = state.audioCtx.createGain();

  noise.buffer = state.noiseBuffer;
  highpass.type = "highpass";
  highpass.frequency.value = profile.hatCutoff;
  highpass.Q.value = 0.45;

  const decay = isOpen ? profile.openHatDecay : profile.hatDecay;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(0.08 * velocity, time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + decay);

  noise.connect(highpass);
  highpass.connect(gain);
  connectWithStereoPan(gain, state.nodes.drumBus, getStereoPanSpread(0.24));
  noise.start(time);
  noise.stop(time + decay + 0.03);

  if (profile.metallic > 0) {
    const metal = state.audioCtx.createOscillator();
    const metalGain = state.audioCtx.createGain();
    metal.type = "triangle";
    metal.frequency.value = 3600 + Math.random() * 1000;
    metalGain.gain.setValueAtTime(0.0001, time);
    metalGain.gain.exponentialRampToValueAtTime(0.02 * profile.metallic * velocity, time + 0.0015);
    metalGain.gain.exponentialRampToValueAtTime(0.0001, time + decay * 0.65);
    metal.connect(metalGain);
    connectWithStereoPan(metalGain, state.nodes.drumBus, getStereoPanSpread(0.27));
    metal.start(time);
    metal.stop(time + decay * 0.68);
  }
}

function playPerc(time, velocity, profile) {
  const osc = state.audioCtx.createOscillator();
  const gain = state.audioCtx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(profile.percFreq, time);
  osc.frequency.exponentialRampToValueAtTime(profile.percFreq * 0.55, time + 0.03);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.06 * velocity, time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.045);

  osc.connect(gain);
  connectWithStereoPan(gain, state.nodes.drumBus, getStereoPanSpread(0.22));
  osc.start(time);
  osc.stop(time + 0.05);
}

function playInstrumentBass(time, midi, durationSec, velocity) {
  const freq = midiToFreq(midi);
  const brightness = Number(ui.brightness.value) / 10;

  const osc = state.audioCtx.createOscillator();
  const sub = state.audioCtx.createOscillator();
  const filter = state.audioCtx.createBiquadFilter();
  const gain = state.audioCtx.createGain();

  osc.type = "triangle";
  sub.type = "sine";
  osc.frequency.value = freq;
  sub.frequency.value = freq * 0.5;

  filter.type = "lowpass";
  filter.frequency.value = 460 + brightness * 1300;
  filter.Q.value = 0.55;

  createEnvelope(gain, time, 0.01, 0.05, 0.6 * velocity, Math.min(0.7, durationSec), velocity);

  osc.connect(filter);
  sub.connect(filter);
  filter.connect(gain);
  connectWithStereoPan(gain, state.nodes.bassBus, getStereoPanSpread(0.12));

  osc.start(time);
  sub.start(time);
  osc.stop(time + durationSec + 0.08);
  sub.stop(time + durationSec + 0.08);
}

function playMelodyTransientNoise(time, velocity, amount, centerFreq, decaySec) {
  if (amount <= 0) {
    return;
  }

  const noise = state.audioCtx.createBufferSource();
  const bandpass = state.audioCtx.createBiquadFilter();
  const gain = state.audioCtx.createGain();
  noise.buffer = state.noiseBuffer;
  bandpass.type = "bandpass";
  bandpass.frequency.value = centerFreq;
  bandpass.Q.value = 0.85;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(amount * velocity, time + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + decaySec);
  noise.connect(bandpass);
  bandpass.connect(gain);
  connectWithStereoPan(gain, state.nodes.melodyBus, getStereoPanSpread(0.55));
  noise.start(time);
  noise.stop(time + decaySec + 0.02);
}

function playInstrumentLead(time, midi, durationSec, velocity) {
  const freq = midiToFreq(midi);
  const brightness = Number(ui.brightness.value) / 10;
  const tone = Number(ui.melodyTone.value) / 10;
  const humanization = Number(ui.humanization.value) / 10;
  const instrument = ui.melodyInstrument.value;

  const filter = state.audioCtx.createBiquadFilter();
  const gain = state.audioCtx.createGain();
  const oscillators = [];
  const oscGains = [];

  const addOsc = (type, ratio, level, detuneCents = 0) => {
    const osc = state.audioCtx.createOscillator();
    const oscGain = state.audioCtx.createGain();
    const drift = (Math.random() - 0.5) * (3 + humanization * 7);
    osc.type = type;
    osc.frequency.value = freq * ratio;
    osc.detune.value = detuneCents + drift;
    oscGain.gain.value = level;
    osc.connect(oscGain);
    oscGain.connect(filter);
    oscillators.push(osc);
    oscGains.push(oscGain);
  };

  let attack = 0.006;
  let decay = 0.08;
  let sustainMultiplier = 0.44;
  let release = Math.min(0.6, durationSec);
  let transientAmount = 0.01;
  let transientFreq = 1900;
  let transientDecay = 0.045;
  let panSpread = 0.66;
  let vibratoRate = 0;
  let vibratoDepth = 0;

  if (instrument === "grand-piano") {
    addOsc("triangle", 1, 0.65);
    addOsc("sine", 2, 0.2, 1);
    addOsc("sine", 3, 0.08, -2);
    attack = 0.003 + humanization * 0.002;
    decay = 0.09;
    sustainMultiplier = 0.14 + tone * 0.25;
    release = Math.min(0.55, durationSec * 0.75 + 0.08);
    transientAmount = 0.014 + tone * 0.018;
    transientFreq = 1850 + brightness * 1200;
    transientDecay = 0.04;
    filter.frequency.value = 1300 + brightness * 2300 + tone * 900;
    filter.Q.value = 0.42;
    panSpread = 0.62;
  } else if (instrument === "nylon-guitar") {
    addOsc("triangle", 1, 0.6, -1);
    addOsc("sine", 2, 0.18, 2);
    addOsc("sawtooth", 1, 0.08, 3);
    attack = 0.002 + humanization * 0.001;
    decay = 0.11;
    sustainMultiplier = 0.09 + tone * 0.15;
    release = Math.min(0.4, durationSec * 0.6 + 0.06);
    transientAmount = 0.012 + tone * 0.016;
    transientFreq = 2500 + brightness * 900;
    transientDecay = 0.035;
    filter.frequency.value = 1650 + brightness * 1900 + tone * 950;
    filter.Q.value = 0.56;
    panSpread = 0.56;
  } else if (instrument === "warm-strings") {
    addOsc("sawtooth", 1, 0.38, -4);
    addOsc("sawtooth", 1, 0.34, 4);
    addOsc("triangle", 2, 0.11, 1);
    attack = 0.018 + (1 - tone) * 0.02;
    decay = 0.13;
    sustainMultiplier = 0.34 + tone * 0.34;
    release = Math.max(0.22, Math.min(1.05, durationSec * 0.95 + 0.2));
    transientAmount = 0.002;
    transientFreq = 2100;
    transientDecay = 0.02;
    filter.frequency.value = 940 + brightness * 1850 + tone * 1200;
    filter.Q.value = 0.34;
    panSpread = 0.72;
    vibratoRate = 4.2 + humanization * 1.1;
    vibratoDepth = 4 + tone * 8;
  } else {
    addOsc("sine", 1, 0.74, 0);
    addOsc("triangle", 2, 0.18, 2);
    attack = 0.012 + humanization * 0.004;
    decay = 0.08;
    sustainMultiplier = 0.3 + tone * 0.25;
    release = Math.max(0.16, Math.min(0.8, durationSec * 0.8 + 0.09));
    transientAmount = 0.007 + tone * 0.01;
    transientFreq = 3000 + brightness * 800;
    transientDecay = 0.05;
    filter.frequency.value = 1500 + brightness * 1950 + tone * 900;
    filter.Q.value = 0.36;
    panSpread = 0.64;
    vibratoRate = 5 + humanization * 1.4;
    vibratoDepth = 2.8 + tone * 4.5;
  }

  createEnvelope(
    gain,
    time,
    attack,
    decay,
    clamp(velocity * sustainMultiplier, 0.08, 0.95),
    release,
    clamp(velocity, 0.08, 1)
  );

  filter.connect(gain);
  connectWithStereoPan(gain, state.nodes.melodyBus, getStereoPanSpread(panSpread));

  let vibratoOsc = null;
  let vibratoGain = null;
  if (vibratoDepth > 0) {
    vibratoOsc = state.audioCtx.createOscillator();
    vibratoGain = state.audioCtx.createGain();
    vibratoOsc.type = "sine";
    vibratoOsc.frequency.value = vibratoRate;
    vibratoGain.gain.value = vibratoDepth;
    vibratoOsc.connect(vibratoGain);
    oscillators.forEach((osc) => {
      vibratoGain.connect(osc.detune);
    });
  }

  const stopTime = time + durationSec + release + 0.08;
  oscillators.forEach((osc) => {
    osc.start(time);
    osc.stop(stopTime);
  });
  oscGains.forEach((oscGain) => {
    oscGain.gain.setValueAtTime(oscGain.gain.value, time);
  });

  if (vibratoOsc) {
    vibratoOsc.start(time);
    vibratoOsc.stop(stopTime);
  }

  playMelodyTransientNoise(time, velocity, transientAmount, transientFreq, transientDecay);
}

function playInstrumentChord(time, midis, durationSec, velocity) {
  const brightness = Number(ui.brightness.value) / 10;
  const humanization = Number(ui.humanization.value) / 10;
  const instrument = ui.chordInstrument.value;
  const chordFilter = state.audioCtx.createBiquadFilter();
  const chordGain = state.audioCtx.createGain();

  let attack = 0.06;
  let decay = 0.14;
  let sustain = 0.54 * velocity;
  let release = 0.9;
  let baseCutoff = 880 + brightness * 2200;
  let filterQ = 0.34;
  let panSpread = 0.86;
  let strumStepSec = 0;
  let holdFactor = 1;
  let voiceProfile = [
    { type: "sine", ratio: 1, level: 0.5, detune: 0 },
    { type: "triangle", ratio: 1.004, level: 0.36, detune: 0 },
  ];
  let transientAmount = 0;
  let transientCenter = 2200;
  let transientDecay = 0.04;

  if (instrument === "grand-piano") {
    attack = 0.008;
    decay = 0.13;
    sustain = velocity * 0.2;
    release = Math.min(0.8, durationSec * 0.6 + 0.12);
    baseCutoff = 1180 + brightness * 2200;
    filterQ = 0.42;
    panSpread = 0.66;
    holdFactor = 0.85;
    voiceProfile = [
      { type: "triangle", ratio: 1, level: 0.56, detune: -1.5 },
      { type: "sine", ratio: 2, level: 0.2, detune: 1.5 },
      { type: "sine", ratio: 3, level: 0.08, detune: -2.5 },
    ];
    transientAmount = 0.012 + brightness * 0.01;
    transientCenter = 1850 + brightness * 1000;
    transientDecay = 0.038;
  } else if (instrument === "felt-piano") {
    attack = 0.016;
    decay = 0.16;
    sustain = velocity * 0.34;
    release = Math.min(1.05, durationSec * 0.82 + 0.18);
    baseCutoff = 980 + brightness * 1650;
    filterQ = 0.36;
    panSpread = 0.58;
    holdFactor = 0.95;
    voiceProfile = [
      { type: "triangle", ratio: 1, level: 0.56, detune: -1.2 },
      { type: "sine", ratio: 2, level: 0.14, detune: 1.2 },
      { type: "sine", ratio: 0.5, level: 0.12, detune: -0.8 },
    ];
    transientAmount = 0.003 + brightness * 0.003;
    transientCenter = 1650 + brightness * 700;
    transientDecay = 0.04;
  } else if (instrument === "organ") {
    attack = 0.018;
    decay = 0.05;
    sustain = velocity * 0.66;
    release = Math.min(1.2, durationSec * 0.9 + 0.22);
    baseCutoff = 980 + brightness * 1850;
    filterQ = 0.28;
    panSpread = 0.5;
    holdFactor = 1.05;
    voiceProfile = [
      { type: "sine", ratio: 1, level: 0.58, detune: 0 },
      { type: "square", ratio: 2, level: 0.18, detune: 0.8 },
      { type: "triangle", ratio: 0.5, level: 0.14, detune: -0.7 },
    ];
  } else {
    attack = 0.08;
    decay = 0.2;
    sustain = velocity * 0.62;
    release = Math.min(1.45, durationSec * 0.95 + 0.35);
    baseCutoff = 840 + brightness * 1900;
    filterQ = 0.32;
    panSpread = 0.86;
    holdFactor = 1.12;
    voiceProfile = [
      { type: "sawtooth", ratio: 1, level: 0.36, detune: -4 },
      { type: "sawtooth", ratio: 1, level: 0.34, detune: 4 },
      { type: "triangle", ratio: 2, level: 0.12, detune: 1.5 },
    ];
  }

  chordFilter.type = "lowpass";
  chordFilter.frequency.value = baseCutoff;
  chordFilter.Q.value = filterQ;

  createEnvelope(
    chordGain,
    time,
    attack,
    decay,
    clamp(sustain, 0.08, 0.95),
    release,
    clamp(velocity, 0.08, 1)
  );
  chordFilter.connect(chordGain);
  connectWithStereoPan(chordGain, state.nodes.padBus, getStereoPanSpread(panSpread));

  midis.forEach((midi, noteIndex) => {
    const noteStart = time + strumStepSec * noteIndex;
    const noteEnd = noteStart + durationSec * holdFactor + release + 0.1;
    const freq = midiToFreq(midi);

    voiceProfile.forEach((voice) => {
      const osc = state.audioCtx.createOscillator();
      const oscGain = state.audioCtx.createGain();
      const drift = (Math.random() - 0.5) * (2 + humanization * 6);
      osc.type = voice.type;
      osc.frequency.value = freq * voice.ratio;
      osc.detune.value = voice.detune + drift;
      oscGain.gain.value = voice.level;
      osc.connect(oscGain);
      oscGain.connect(chordFilter);
      osc.start(noteStart);
      osc.stop(noteEnd);
    });

    if (transientAmount > 0) {
      const transient = state.audioCtx.createBufferSource();
      const transientFilter = state.audioCtx.createBiquadFilter();
      const transientGain = state.audioCtx.createGain();
      transient.buffer = state.noiseBuffer;
      transientFilter.type = "bandpass";
      transientFilter.frequency.value = transientCenter + Math.random() * 420;
      transientFilter.Q.value = 0.9;
      transientGain.gain.setValueAtTime(0.0001, noteStart);
      transientGain.gain.exponentialRampToValueAtTime(transientAmount * velocity, noteStart + 0.0025);
      transientGain.gain.exponentialRampToValueAtTime(0.0001, noteStart + transientDecay);
      transient.connect(transientFilter);
      transientFilter.connect(chordFilter);
      transient.start(noteStart);
      transient.stop(noteStart + transientDecay + 0.02);
    }
  });
}

function chooseDegreeAround(baseDegree, spread = 2) {
  const delta = Math.floor(Math.random() * (spread * 2 + 1)) - spread;
  return baseDegree + delta;
}

function buildChord(scaleName, rootMidi, degree, options = {}) {
  const harmonicDensity = options.harmonicDensity ?? 0.5;
  const chordComplexity = options.chordComplexity ?? 0.5;

  const root = rootMidi + scaleDegreeSemitone(scaleName, degree);
  const third = rootMidi + scaleDegreeSemitone(scaleName, degree + 2);
  const fifth = rootMidi + scaleDegreeSemitone(scaleName, degree + 4);
  const chord = [root, third, fifth];

  if (harmonicDensity > 0.42 || chordComplexity > 0.5) {
    chord.push(rootMidi + scaleDegreeSemitone(scaleName, degree + 6));
  }
  if (chordComplexity > 0.72 && randomChance(0.55)) {
    chord.push(rootMidi + scaleDegreeSemitone(scaleName, degree + 8));
  }

  return chord;
}

function buildLaneFromTemplate(template, options) {
  const lane = new Array(TOTAL_STEPS).fill(0);
  const {
    variation,
    complexity,
    boost,
    drop,
    ghostChance,
    floor = 0.18,
    ceiling = 1,
    lockSteps = [],
  } = options;

  for (let step = 0; step < TOTAL_STEPS; step += 1) {
    const templateIndex = step % template.length;
    let velocity = template[templateIndex] || 0;

    if (velocity > 0) {
      const wobble = (Math.random() - 0.5) * variation * 0.3;
      velocity = clamp(velocity + wobble, floor, ceiling);

      if (!lockSteps.includes(templateIndex) && randomChance(drop * (1 - complexity * 0.42))) {
        velocity = 0;
      } else if (!lockSteps.includes(templateIndex) && randomChance(ghostChance * variation)) {
        velocity *= 0.55;
      }
    } else if (randomChance(boost * (0.4 + complexity * 0.6))) {
      velocity = floor + Math.random() * 0.3;
    }

    lane[step] = clamp(velocity, 0, ceiling);
  }

  return lane;
}

function getInstrumentalProgressions(cadenceTension) {
  if (cadenceTension < 0.34) {
    return [
      [0, 4, 3, 4],
      [0, 3, 4, 3],
      [0, 5, 3, 4],
    ];
  }

  if (cadenceTension < 0.68) {
    return [
      [0, 4, 5, 3],
      [0, 2, 5, 4],
      [0, 4, 1, 5],
    ];
  }

  return [
    [0, 1, 5, 4],
    [0, 6, 5, 1],
    [0, 5, 1, 4],
  ];
}

function progressionToRomanText(progression) {
  return progression.map((degree) => degreeToRoman(degree)).join(" -> ");
}

function progressionToChordText(progression, scaleName, rootMidi) {
  return progression.map((degree) => degreeToChordName(scaleName, rootMidi, degree)).join(" -> ");
}

function createSectionPattern({
  sectionName,
  progression,
  sectionProfile,
  rootMidi,
  scaleName,
  complexity,
  energy,
  variation,
  atmosphere,
  harmonicDensity,
  chordComplexity,
  motifRepetition,
  voiceLeading,
  rhythmDensity,
  chordToneGravity,
  diatonicStrictness,
}) {
  const rhythmInfluence = clamp(sectionProfile.rhythm * 0.65 + rhythmDensity * 0.35, 0, 1);
  const melodyInfluence = clamp(sectionProfile.melody, 0, 1);
  const harmonyInfluence = clamp(sectionProfile.harmony, 0, 1);

  const harmonicBars = Number(ui.harmonicRhythm.value);
  const sectionBars = TOTAL_STEPS / STEPS_PER_BAR;
  const chordSlots = Math.max(1, Math.ceil(sectionBars / harmonicBars));
  const effectiveProgression = new Array(chordSlots)
    .fill(0)
    .map((_, index) => progression[index % progression.length]);
  const chordSpanSteps = clamp(harmonicBars * STEPS_PER_BAR, STEPS_PER_BAR, TOTAL_STEPS);

  const kickTemplate = [0.85, 0, 0, 0, 0.5, 0, 0, 0, 0.75, 0, 0, 0, 0.45, 0, 0, 0];
  const snareTemplate = [0, 0, 0.12, 0, 0.58, 0, 0.15, 0, 0, 0, 0.1, 0, 0.62, 0, 0.14, 0];
  const hatTemplate = [0.34, 0.08, 0.32, 0.08, 0.3, 0.1, 0.3, 0.08, 0.34, 0.08, 0.32, 0.08, 0.3, 0.1, 0.3, 0.08];
  const openHatTemplate = [0, 0, 0.08, 0, 0, 0, 0.1, 0, 0, 0, 0.08, 0, 0, 0, 0.1, 0];
  const percTemplate = [0.1, 0, 0.08, 0, 0.1, 0, 0.08, 0, 0.1, 0, 0.08, 0, 0.1, 0, 0.08, 0];

  const kick = buildLaneFromTemplate(kickTemplate, {
    variation,
    complexity,
    boost: 0.01 + rhythmInfluence * 0.08,
    drop: 0.08 + (1 - rhythmInfluence) * 0.18,
    ghostChance: 0.04,
    floor: 0.2,
    ceiling: 0.84,
    lockSteps: [0, 8],
  });

  const snare = buildLaneFromTemplate(snareTemplate, {
    variation,
    complexity,
    boost: 0.01 + rhythmInfluence * 0.06,
    drop: 0.06,
    ghostChance: 0.08,
    floor: 0.16,
    ceiling: 0.72,
    lockSteps: [4, 12],
  });

  const hat = buildLaneFromTemplate(hatTemplate, {
    variation,
    complexity,
    boost: 0.01 + rhythmInfluence * 0.05,
    drop: 0.12 + (1 - rhythmInfluence) * 0.24,
    ghostChance: 0.06,
    floor: 0.1,
    ceiling: 0.5,
  });

  const openHat = buildLaneFromTemplate(openHatTemplate, {
    variation,
    complexity,
    boost: 0.01,
    drop: 0.18,
    ghostChance: 0,
    floor: 0.1,
    ceiling: 0.35,
  });

  const perc = buildLaneFromTemplate(percTemplate, {
    variation,
    complexity,
    boost: 0.01 + rhythmInfluence * 0.04,
    drop: 0.16,
    ghostChance: 0.08,
    floor: 0.1,
    ceiling: 0.38,
  });

  const bass = new Array(TOTAL_STEPS).fill(null);
  const melody = new Array(TOTAL_STEPS).fill(null);
  const pad = new Array(TOTAL_STEPS).fill(null);
  const chordDegreeByStep = new Array(TOTAL_STEPS).fill(progression[0]);

  let previousBassDegree = progression[0];
  let motifSeed = progression[0];

  for (let step = 0; step < TOTAL_STEPS; step += 1) {
    const chordIndex = Math.floor(step / chordSpanSteps) % effectiveProgression.length;
    const progressionDegree = effectiveProgression[chordIndex];
    const isChordChange = step % chordSpanSteps === 0;
    const isBarStart = step % STEPS_PER_BAR === 0;
    chordDegreeByStep[step] = progressionDegree;

    if (isBarStart && randomChance(0.75 - motifRepetition * 0.55)) {
      motifSeed = progressionDegree + (randomChance(chordComplexity * 0.4) ? 2 : 0);
    }

    const bassChance =
      0.14 +
      harmonyInfluence * 0.28 +
      harmonicDensity * 0.2 +
      rhythmInfluence * 0.12 +
      (step % 4 === 0 ? 0.22 : 0) +
      (isChordChange ? 0.18 : 0);

    if (randomChance(bassChance)) {
      const anchoredDegree = randomChance(0.6 + voiceLeading * 0.3)
        ? previousBassDegree
        : progressionDegree;
      const spread = voiceLeading > 0.66 ? 1 : 2;
      const bassDegree = chooseDegreeAround(anchoredDegree, spread);
      previousBassDegree = bassDegree;

      bass[step] = {
        midi: rootMidi + preset.bassOctaveOffset + scaleDegreeSemitone(scaleName, bassDegree),
        velocity: clamp(0.34 + energy * 0.3 + harmonyInfluence * 0.2 + Math.random() * 0.14, 0.24, 0.9),
        durationSteps: randomChance(0.14 + harmonyInfluence * 0.38) ? 2 : 1,
      };
    }

    const melodyChance =
      0.06 +
      melodyInfluence * 0.34 +
      harmonicDensity * 0.1 +
      complexity * 0.18 +
      variation * 0.12;

    if (randomChance(melodyChance)) {
      const contourBase = randomChance(motifRepetition * 0.72) ? motifSeed : progressionDegree;
      const spread = voiceLeading > 0.72 ? 2 : 3;
      const chordTones = [progressionDegree, progressionDegree + 2, progressionDegree + 4];
      if (chordComplexity > 0.62) {
        chordTones.push(progressionDegree + 6);
      }

      let melodyDegree;
      if (randomChance(chordToneGravity * (0.55 + melodyInfluence * 0.35))) {
        melodyDegree = chordTones[Math.floor(Math.random() * chordTones.length)];
      } else {
        melodyDegree = chooseDegreeAround(contourBase + (randomChance(chordComplexity * 0.5) ? 2 : 0), spread);
      }

      let midi = rootMidi + preset.melodyOctaveOffset + scaleDegreeSemitone(scaleName, melodyDegree);

      if (randomChance((1 - diatonicStrictness) * 0.34)) {
        midi += randomChance(0.5) ? 1 : -1;
      }

      if (randomChance(0.05 + (1 - motifRepetition) * 0.1)) {
        midi += 12;
      }

      melody[step] = {
        midi,
        velocity: clamp(0.22 + melodyInfluence * 0.34 + complexity * 0.2 + Math.random() * 0.14, 0.16, 0.9),
        durationSteps: randomChance(0.14 + atmosphere * 0.22 + melodyInfluence * 0.2) ? 2 : 1,
      };
    }

    if (isChordChange) {
      const chord = buildChord(scaleName, rootMidi, progressionDegree, {
        harmonicDensity: harmonicDensity * (0.6 + harmonyInfluence * 0.4),
        chordComplexity: chordComplexity * (0.5 + harmonyInfluence * 0.5),
      }).map((note, index) => note + preset.melodyOctaveOffset - (index === 0 ? 12 : 0));

      pad[step] = {
        chord,
        velocity: clamp(0.16 + harmonyInfluence * 0.42 + atmosphere * 0.2, 0.14, 0.92),
        durationSteps: chordSpanSteps,
      };
    }
  }

  return {
    sectionName,
    sectionEnergy: (melodyInfluence + harmonyInfluence + rhythmInfluence) / 3,
    progression: effectiveProgression,
    chordDegreeByStep,
    kick,
    snare,
    hat,
    openHat,
    perc,
    bass,
    melody,
    pad,
  };
}

function generatePattern() {
  state.resumeFromPause = false;
  state.pauseRemainingMs = 0;

  const complexity = Number(ui.complexity.value) / 10;
  const energy = Number(ui.energy.value) / 10;
  const variation = Number(ui.variation.value) / 10;
  const atmosphere = Number(ui.atmosphere.value) / 10;
  const harmonicDensity = Number(ui.harmonicDensity.value) / 10;
  const chordComplexity = Number(ui.chordComplexity.value) / 10;
  const motifRepetition = Number(ui.motifRepetition.value) / 10;
  const cadenceTension = Number(ui.cadenceTension.value) / 10;
  const voiceLeading = Number(ui.voiceLeading.value) / 10;
  const rhythmDensity = Number(ui.rhythmDensity.value) / 10;
  const chordToneGravity = Number(ui.chordToneGravity.value) / 10;
  const diatonicStrictness = Number(ui.diatonicStrictness.value) / 10;

  const scaleName = getScaleName();
  const rootMidi = getRootMidi();
  const profiles = getSectionProfiles();

  const progressionSet = getInstrumentalProgressions(cadenceTension);
  const baseIndex = Math.floor(Math.random() * progressionSet.length);
  const verseProgression = progressionSet[baseIndex];
  const bridgeProgression = progressionSet[(baseIndex + 1) % progressionSet.length];

  const chorusProgression = cadenceTension > 0.6
    ? [verseProgression[0], 3, 4, 4]
    : [verseProgression[0], 3, 4, verseProgression[0]];

  const sections = {
    verse: createSectionPattern({
      sectionName: "verse",
      progression: verseProgression,
      sectionProfile: profiles.verse,
      rootMidi,
      scaleName,
      complexity,
      energy,
      variation,
      atmosphere,
      harmonicDensity,
      chordComplexity,
      motifRepetition,
      voiceLeading,
      rhythmDensity,
      chordToneGravity,
      diatonicStrictness,
    }),
    chorus: createSectionPattern({
      sectionName: "chorus",
      progression: chorusProgression,
      sectionProfile: profiles.chorus,
      rootMidi,
      scaleName,
      complexity,
      energy,
      variation,
      atmosphere,
      harmonicDensity,
      chordComplexity,
      motifRepetition,
      voiceLeading,
      rhythmDensity,
      chordToneGravity,
      diatonicStrictness,
    }),
    bridge: createSectionPattern({
      sectionName: "bridge",
      progression: bridgeProgression,
      sectionProfile: profiles.bridge,
      rootMidi,
      scaleName,
      complexity,
      energy,
      variation,
      atmosphere,
      harmonicDensity,
      chordComplexity,
      motifRepetition,
      voiceLeading,
      rhythmDensity,
      chordToneGravity,
      diatonicStrictness,
    }),
  };

  state.pattern = {
    scaleName,
    rootMidi,
    sections,
    progressionText: {
      verse: {
        roman: progressionToRomanText(sections.verse.progression),
        chords: progressionToChordText(sections.verse.progression, scaleName, rootMidi),
      },
      chorus: {
        roman: progressionToRomanText(sections.chorus.progression),
        chords: progressionToChordText(sections.chorus.progression, scaleName, rootMidi),
      },
      bridge: {
        roman: progressionToRomanText(sections.bridge.progression),
        chords: progressionToChordText(sections.bridge.progression, scaleName, rootMidi),
      },
    },
    label: `${preset.label} • ${scaleName} • Key ${getKeyName()}`,
  };

  ui.nowPlaying.textContent = state.pattern.label;
  ui.theoryProgressionsRoman.textContent =
    `Verse: ${state.pattern.progressionText.verse.roman} | Chorus: ${state.pattern.progressionText.chorus.roman} | Bridge: ${state.pattern.progressionText.bridge.roman}`;
  ui.theoryProgressionsChords.textContent =
    `Verse: ${state.pattern.progressionText.verse.chords} | Chorus: ${state.pattern.progressionText.chorus.chords} | Bridge: ${state.pattern.progressionText.bridge.chords}`;
  ui.currentSection.textContent = "verse";
  ui.currentChord.textContent = "-";
  state.sectionName = "verse";
  renderMelodyEditor();
}

function getActiveSectionName() {
  const sectionIndex = Math.floor(transport.stepCounter / TOTAL_STEPS) % SECTION_ORDER.length;
  return SECTION_ORDER[sectionIndex];
}

function updateTheoryReadout(sectionName, stepInSection) {
  if (!state.pattern) {
    return;
  }

  const sectionPattern = state.pattern.sections[sectionName];
  const degree = sectionPattern.chordDegreeByStep[stepInSection];
  const chordName = degreeToChordName(state.pattern.scaleName, state.pattern.rootMidi, degree);
  ui.currentSection.textContent = sectionName;
  ui.currentChord.textContent = `${degreeToRoman(degree)} = ${chordName} (${degreeFunction(degree)})`;
}

function scheduleStep(step, time) {
  if (!state.pattern) {
    return;
  }

  const sectionName = getActiveSectionName();
  const sectionPattern = state.pattern.sections[sectionName];
  if (!sectionPattern) {
    return;
  }

  if (sectionName !== state.sectionName || step % STEPS_PER_BAR === 0) {
    updateTheoryReadout(sectionName, step);
    state.sectionName = sectionName;
  }
  updateMelodyPlayhead(sectionName, step);

  const drumProfile = getInstrumentalDrumProfile();
  const energyFactor = Number(ui.energy.value) / 10;
  const variation = Number(ui.variation.value) / 10;
  const humanization = Number(ui.humanization.value) / 10;
  const curveFactor = getEnergyCurveFactor(transport.stepCounter);
  const stepDuration = getStepDurationSeconds();
  const sectionEnergyFactor = 0.85 + sectionPattern.sectionEnergy * 0.35;

  const jitterRange = 0.012 * (0.45 + humanization * 0.8) + variation * 0.002;
  const jitteredTime = (lagMs = 0, offsetSec = 0) => {
    const jitter = (Math.random() - 0.5) * jitterRange;
    const lagSec = lagMs / 1000;
    return Math.max(time + offsetSec + lagSec + jitter, state.audioCtx.currentTime + 0.001);
  };

  if (sectionPattern.kick[step] > 0 && !state.mutes.kick) {
    const kickLevel =
      sectionPattern.kick[step] * (0.76 + energyFactor * 0.22) * curveFactor * sectionEnergyFactor;
    playKick(
      jitteredTime(1),
      kickLevel,
      drumProfile
    );
    noteElementLevel("kick", kickLevel);
  }

  if (sectionPattern.snare[step] > 0 && !state.mutes.snare) {
    const snareLevel =
      sectionPattern.snare[step] * (0.72 + energyFactor * 0.2) * (0.9 + curveFactor * 0.1) * sectionEnergyFactor;
    playSnare(
      jitteredTime(12),
      snareLevel,
      drumProfile
    );
    noteElementLevel("snare", snareLevel);
  }

  if (sectionPattern.hat[step] > 0 && !state.mutes.hat) {
    const hatLevel =
      sectionPattern.hat[step] * (0.6 + energyFactor * 0.34) * (0.92 + curveFactor * 0.1) * sectionEnergyFactor;
    playHat(
      jitteredTime(-4),
      hatLevel,
      drumProfile,
      false
    );
    noteElementLevel("hat", hatLevel);
  }

  if (sectionPattern.openHat[step] > 0 && !state.mutes.openHat) {
    const openHatLevel =
      sectionPattern.openHat[step] * (0.5 + energyFactor * 0.3) * (0.9 + curveFactor * 0.12) * sectionEnergyFactor;
    playHat(
      jitteredTime(-3),
      openHatLevel,
      drumProfile,
      true
    );
    noteElementLevel("openHat", openHatLevel);
  }

  if (sectionPattern.perc[step] > 0 && !state.mutes.perc) {
    const percLevel =
      sectionPattern.perc[step] * (0.4 + energyFactor * 0.3) * (0.9 + curveFactor * 0.1) * sectionEnergyFactor;
    playPerc(
      jitteredTime(2),
      percLevel,
      drumProfile
    );
    noteElementLevel("perc", percLevel);
  }

  const bassNote = sectionPattern.bass[step];
  if (bassNote && !state.mutes.bass) {
    const bassLevel = bassNote.velocity * (0.9 + curveFactor * 0.08) * sectionEnergyFactor;
    playInstrumentBass(
      jitteredTime(),
      bassNote.midi,
      stepDuration * bassNote.durationSteps,
      bassLevel
    );
    noteElementLevel("bass", bassLevel);
  }

  const activeMelodyLane = getPlaybackMelodyLane(sectionName);
  const melodyNote = activeMelodyLane[step];
  if (melodyNote && !state.mutes.melody) {
    const melodyLevel = melodyNote.velocity * sectionEnergyFactor;
    playInstrumentLead(
      jitteredTime(),
      melodyNote.midi,
      stepDuration * melodyNote.durationSteps * 1.08,
      melodyLevel
    );
    noteElementLevel("melody", melodyLevel);
  }

  const padChord = sectionPattern.pad[step];
  if (padChord && !state.mutes.pad) {
    const padLevel = padChord.velocity * sectionEnergyFactor;
    playInstrumentChord(
      jitteredTime(),
      padChord.chord,
      stepDuration * padChord.durationSteps,
      padLevel
    );
    noteElementLevel("pad", padLevel);
  }
}

function scheduler() {
  if (!state.live || !state.audioCtx || !state.pattern) {
    return;
  }

  while (transport.nextStepTime < state.audioCtx.currentTime + transport.scheduleAheadSec) {
    scheduleStep(transport.currentStep, transport.nextStepTime);

    const baseStep = getStepDurationSeconds();
    const swing = clamp(Number(ui.swing.value) / 100, 0, 0.45);
    const swingOffset = baseStep * swing * 0.5;
    const stepDelta = baseStep + (transport.currentStep % 2 === 0 ? -swingOffset : swingOffset);

    transport.nextStepTime += Math.max(0.01, stepDelta);
    transport.currentStep = (transport.currentStep + 1) % TOTAL_STEPS;
    transport.stepCounter += 1;
  }

  decayElementLevels();
  renderElementMeters();
}

function refreshShiftCountdown() {
  if (!state.live || !transport.nextShiftAt) {
    setShiftCountdownText("-");
    return;
  }

  const delta = Math.max(0, transport.nextShiftAt - Date.now());
  const minutes = Math.floor(delta / 60000);
  const seconds = Math.floor((delta % 60000) / 1000);
  setShiftCountdownText(`${minutes}m ${String(seconds).padStart(2, "0")}s`);

  if (delta <= 220) {
    if (ui.randomTheoryMode.checked) {
      randomizeInstrumentalTheoryControls();
    }
    generatePattern();
    transport.nextShiftAt = Date.now() + getShiftMs();
  }
}

function startSchedulerLoops() {
  transport.schedulerTimer = setInterval(scheduler, transport.lookAheadMs);
  transport.shiftTimer = setInterval(refreshShiftCountdown, 250);
}

function stopSchedulerLoops() {
  clearInterval(transport.schedulerTimer);
  clearInterval(transport.shiftTimer);
  transport.schedulerTimer = null;
  transport.shiftTimer = null;
}

function applyDefaults() {
  ui.tempo.value = "84";
  ui.energy.value = "6";
  ui.complexity.value = "5";
  ui.swing.value = "18";
  ui.variation.value = "5";
  ui.reverb.value = "30";
  ui.drumLevel.value = "5";
  ui.bassLevel.value = "7";
  ui.melodyLevel.value = "6";
  ui.atmosphere.value = "6";

  ui.energyCurve.value = "steady";
  ui.harmonicDensity.value = "6";
  ui.chordComplexity.value = "5";
  ui.groove.value = "6";
  ui.motifRepetition.value = "6";
  ui.rhythmDensity.value = "5";
  ui.brightness.value = "5";
  ui.humanization.value = "6";

  ui.scaleMode.value = "auto";
  ui.randomTheoryMode.checked = true;
  ui.melodyFollowPlayback.checked = true;
  ui.melodyInstrument.value = "grand-piano";
  ui.chordInstrument.value = "warm-strings";
  ui.melodyTone.value = "6";
  ui.melodyDrawDuration.value = "1";
  ui.melodyDrawVelocity.value = "62";
  ui.harmonicRhythm.value = "2";
  ui.cadenceTension.value = "5";
  ui.voiceLeading.value = "8";
  ui.chordToneGravity.value = "7";
  ui.diatonicStrictness.value = "8";

  ui.verseMelodyLevel.value = "5";
  ui.chorusMelodyLevel.value = "8";
  ui.bridgeMelodyLevel.value = "6";
  ui.verseHarmonyLevel.value = "5";
  ui.chorusHarmonyLevel.value = "8";
  ui.bridgeHarmonyLevel.value = "7";
  ui.verseRhythmLevel.value = "4";
  ui.chorusRhythmLevel.value = "8";
  ui.bridgeRhythmLevel.value = "5";

  ui.roomSize.value = "48";
  ui.dynamics.value = "7";
  ui.stereoWidth.value = "6";

  applyMacroIntent();
  updateOutputs();
  applyMixFromUI();
  resetElementMeters();
}

async function startPlayback() {
  initAudio();
  if (state.audioCtx.state === "suspended") {
    await state.audioCtx.resume();
  }

  applyMacroIntent();
  applyMixFromUI();

  if (!state.pattern) {
    generatePattern();
  }

  const shouldResume = state.resumeFromPause && Boolean(state.pattern);
  if (!shouldResume) {
    transport.currentStep = 0;
    transport.stepCounter = 0;
    state.sectionName = "verse";
    transport.nextShiftAt = Date.now() + getShiftMs();
  } else {
    const remaining = Math.max(0, state.pauseRemainingMs || 0);
    transport.nextShiftAt = Date.now() + (remaining || getShiftMs());
  }

  transport.nextStepTime = state.audioCtx.currentTime + 0.05;
  state.resumeFromPause = false;
  state.pauseRemainingMs = 0;
  resetElementMeters();

  state.live = true;
  setStatus("live", true);
  ui.startBtn.disabled = true;
  ui.pauseBtn.disabled = false;

  stopSchedulerLoops();
  startSchedulerLoops();
}

async function pausePlayback() {
  state.live = false;
  state.resumeFromPause = true;
  state.pauseRemainingMs = transport.nextShiftAt ? Math.max(0, transport.nextShiftAt - Date.now()) : 0;
  setStatus("paused", false);
  ui.startBtn.disabled = false;
  ui.pauseBtn.disabled = true;
  stopSchedulerLoops();
  setShiftCountdownText("-");
  resetElementMeters();
  clearMelodyPlayhead();

  if (state.audioCtx && state.audioCtx.state === "running") {
    await state.audioCtx.suspend();
  }
}

function setShiftCountdownText(text) {
  if (ui.nextShift) {
    ui.nextShift.textContent = text;
  }
  if (ui.nextShiftMini) {
    ui.nextShiftMini.textContent = text;
  }
}

function regeneratePatternNow() {
  if (ui.randomTheoryMode.checked) {
    randomizeInstrumentalTheoryControls();
  }
  generatePattern();
  transport.nextShiftAt = Date.now() + getShiftMs();
}

function isEditableTarget(target) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  return Boolean(
    target.closest('input, textarea, select, button, [contenteditable="true"], [role="button"]')
  );
}

function bindControls() {
  setTheoryHudVisibility(state.theoryHudVisible);

  const allRangeControls = [
    ui.harmonicDensity,
    ui.chordComplexity,
    ui.groove,
    ui.motifRepetition,
    ui.rhythmDensity,
    ui.brightness,
    ui.humanization,
    ui.melodyTone,
    ui.cadenceTension,
    ui.voiceLeading,
    ui.chordToneGravity,
    ui.diatonicStrictness,
    ui.verseMelodyLevel,
    ui.chorusMelodyLevel,
    ui.bridgeMelodyLevel,
    ui.verseHarmonyLevel,
    ui.chorusHarmonyLevel,
    ui.bridgeHarmonyLevel,
    ui.verseRhythmLevel,
    ui.chorusRhythmLevel,
    ui.bridgeRhythmLevel,
    ui.roomSize,
    ui.dynamics,
    ui.stereoWidth,
    ui.tempo,
    ui.energy,
    ui.complexity,
    ui.swing,
    ui.variation,
    ui.reverb,
    ui.drumLevel,
    ui.bassLevel,
    ui.melodyLevel,
    ui.atmosphere,
    ui.shiftMinutes,
  ];

  allRangeControls.forEach((control) => {
    control.addEventListener("input", () => {
      updateOutputs();
      applyMixFromUI();
    });
  });

  const macroControls = [
    ui.energyCurve,
    ui.harmonicDensity,
    ui.chordComplexity,
    ui.groove,
    ui.motifRepetition,
    ui.rhythmDensity,
    ui.brightness,
    ui.humanization,
  ];

  macroControls.forEach((control) => {
    control.addEventListener("input", () => {
      applyMacroIntent();
      updateOutputs();
      applyMixFromUI();
    });

    control.addEventListener("change", () => {
      generatePattern();
      transport.nextShiftAt = Date.now() + getShiftMs();
    });
  });

  const regenerateControls = [
    ui.key,
    ui.scaleMode,
    ui.harmonicRhythm,
    ui.cadenceTension,
    ui.voiceLeading,
    ui.chordToneGravity,
    ui.diatonicStrictness,
    ui.tempo,
    ui.energy,
    ui.complexity,
    ui.swing,
    ui.variation,
    ui.atmosphere,
    ui.verseMelodyLevel,
    ui.chorusMelodyLevel,
    ui.bridgeMelodyLevel,
    ui.verseHarmonyLevel,
    ui.chorusHarmonyLevel,
    ui.bridgeHarmonyLevel,
    ui.verseRhythmLevel,
    ui.chorusRhythmLevel,
    ui.bridgeRhythmLevel,
  ];

  regenerateControls.forEach((control) => {
    control.addEventListener("change", () => {
      syncMacrosFromEngine();
      updateOutputs();
      generatePattern();
      transport.nextShiftAt = Date.now() + getShiftMs();
    });
  });

  ui.shiftMinutes.addEventListener("change", () => {
    transport.nextShiftAt = Date.now() + getShiftMs();
  });

  ui.melodyInstrument.addEventListener("change", () => {
    updateOutputs();
  });

  ui.chordInstrument.addEventListener("change", () => {
    updateOutputs();
  });

  ui.randomTheoryMode.addEventListener("change", () => {
    if (ui.randomTheoryMode.checked) {
      randomizeInstrumentalTheoryControls();
      generatePattern();
    }
    transport.nextShiftAt = Date.now() + getShiftMs();
  });

  ui.startBtn.addEventListener("click", startPlayback);
  ui.pauseBtn.addEventListener("click", pausePlayback);

  ui.refreshBtn.addEventListener("click", regeneratePatternNow);

  if (ui.theoryHudToggle) {
    ui.theoryHudToggle.addEventListener("click", () => {
      setTheoryHudVisibility(!state.theoryHudVisible);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.repeat) {
      return;
    }
    if (ui.playground.classList.contains("hidden") || isEditableTarget(event.target)) {
      return;
    }
    if (event.code === "Space") {
      event.preventDefault();
      if (state.live) {
        void pausePlayback();
      } else {
        void startPlayback();
      }
      return;
    }
    if (event.code === "KeyR" && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      regeneratePatternNow();
    }
  });
}

function init() {
  setStatus("stopped", false);
  resetElementMeters();
  applyDefaults();
  bindControls();
  bindMelodyEditorControls();
  bindMuteControls();
  generatePattern();

  ui.enterPlaygroundBtn.addEventListener("click", async () => {
    ui.enterPlaygroundBtn.disabled = true;
    await simulateLoading();
    switchView({ showPlayground: true });
  });
}

init();

# 🌀 Nodal Zero Viewer

**An educational visualization tool for understanding parallax and the consequences of misaligning the nodal point in camera setups.**

---

## ⚠️ The Problem

In many camera rigs — especially in DIY or animation environments — the pivot point of the camera is often **not aligned** with the camera’s **nodal point** (also called the **entrance pupil**).

This misalignment causes **parallax** when the camera rotates: foreground objects shift relative to the background in ways that break compositing, depth perception, and stereo consistency.

While this may go unnoticed in casual photography, it becomes a **critical issue** in:
- Stop-motion animation
- VFX plate shooting
- 3D reconstruction
- Stereoscopic filming
- Multiplane camera setups

The result? Mismatched frames, broken composites, and inaccurate depth cues — unless you understand and control for it.

---

## 👁️ The Solution: See It for Yourself

**Nodal Zero Viewer** doesn’t fix parallax — it helps you **see it**.

This browser-based tool visually demonstrates how moving a camera forward or backward from its rotation axis affects parallax. It replicates what happens when your rig rotates **without** being nodal-calibrated.

Use it to:
- Train your eye to recognize parallax issues
- Understand why proper rig design matters
- Communicate rig problems to your team or students

---

## 🕹️ How to Use

- **Pan Slider** — Rotates the camera left/right (Y-axis).
- **Z Offset Slider** — Moves the camera forward/backward relative to the rotation center.
- **Send to Home Position** — Simulates a common flawed setup with visible parallax.
- **Send to Zero (0)** — Snaps the camera to the correct nodal-aligned position.

As you adjust the sliders, observe how the background and foreground cylinders shift at different speeds — a visual cue of parallax error.

---

## 🧠 Learning Outcomes

With Nodal Zero Viewer, you'll understand:
- Why aligning the **nodal point** to the pivot axis eliminates parallax during rotation
- How to visually diagnose a misaligned rig
- The foundation for designing proper motion control setups

---

## 🔧 Tech & Credits

- Built using [A-Frame](https://aframe.io)
- Uses simple GLB models and WebXR-compatible rendering
- Created by [LIMNMEDIA](https://limnmedia.com)  
- Educational purpose: part of the **Stop-Motion Camera** training tools

---

## 📜 License

MIT License — Fork it, remix it, learn from it.

---
# 🌀 Nodal Zero Viewer

**A visual, browser-based educational tool to understand parallax and the consequences of misaligning the nodal point in camera setups.**

---

## ⚠️ The Problem

In many camera rigs — especially DIY, animation, or VFX setups — the pivot point is **not aligned** with the camera’s **nodal point** (a.k.a. the **entrance pupil**).

This misalignment causes **parallax** when the camera rotates: foreground objects appear to shift against the background, breaking compositing, stereo consistency, and depth perception.

While this may be negligible in casual photography, it becomes a **critical problem** in:

- Stop-motion animation  
- VFX plate shooting  
- 3D reconstruction & photogrammetry  
- Stereoscopic filming  
- Multiplane & downshooter setups  

**The result?** Mismatched frames, broken composites, and unreliable camera data — unless you calibrate properly.

---

## 👁️ The Solution: See It for Yourself

**Nodal Zero Viewer** doesn’t fix parallax — it helps you **see it clearly**.

This interactive tool replicates how misalignment affects your shots, showing what happens when a camera rotates **without nodal calibration**.

Use it to:

- Train your eye to detect parallax errors  
- Understand why proper rig design is essential  
- Communicate the issue to collaborators, clients, or students  

---

## 🕹️ How to Use

- **Pan Slider** — Rotates the entire rig around the Y-axis  
- **Z-Offset Slider** — Moves the camera forward/backward from the pivot  
- **Send to Home Position** — Simulates the flawed standard tripod mount  
- **Send to Nodal Zero (0)** — Snaps the camera to correct nodal alignment  

Watch the **red & blue cylinders** in the foreground shift against the **yellow cylinder** in the background — this visual misalignment is parallax in action.

---

## 🧠 What You'll Learn

- Why aligning the **nodal point** to the **rotation axis** eliminates parallax  
- How to visually diagnose misaligned camera rigs  
- The conceptual link between physical cameras and **CG cameras** in VFX workflows  
- How to improve motion control, multiplane, or stereo setups using mechanical offsets  

---

## 🔧 Tech & Credits

- Built with [A-Frame](https://aframe.io) + vanilla JS modules  
- Includes simple GLB models, VR-ready UI, and slider-driven camera control  
- Developed by [LIMNMEDIA](https://limnmedia.com) as part of the **Stop-Motion Camera** project  
- Designed for educators, cinematographers, and animation/VFX technicians  

---

## 📜 License

MIT License — fork, remix, and adapt freely.  
This tool is educational by design. The goal is better visuals, better storytelling, and better rigs.

---
// main.js — Initializes UI and connects modules

import { attachSliderListeners, updateSliderReadouts } from './slider-readout.js';

window.addEventListener('DOMContentLoaded', () => {
  console.log('[main.js] DOM fully loaded');

  // 1. Attach live slider UI readouts
  attachSliderListeners();
  updateSliderReadouts();

  // 2. Log camera rig startup position
  const rig = document.getElementById('linearMover');
  const camera = document.getElementById('mainCamera');
  if (rig && rig.object3D) {
    console.log('[main.js] Initial rig Z:', rig.object3D.position.z.toFixed(3));
  }
  if (camera && camera.object3D) {
    console.log('[main.js] Main camera ready');
  }

  // 3. Example: debug keybinding
  document.addEventListener('keydown', (e) => {
    if (e.key === 'd') {
      const camPos = camera?.object3D?.position;
      const rigPos = rig?.object3D?.position;
      console.log(`[main.js] [D] key pressed:
        Camera Z: ${camPos?.z.toFixed(3)},
        Rig Z: ${rigPos?.z.toFixed(3)}
      `);
    }
  });

  // 4. Scene loaded hook
  const scene = document.querySelector('a-scene');
  scene?.addEventListener('loaded', () => {
    console.log('[main.js] A-Frame scene is fully initialized.');
  });
});
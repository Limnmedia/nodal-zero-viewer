import { updateSliderReadouts } from './slider-readout.js';

AFRAME.registerSystem('send-to-home', {
  init: function () {
    const homeBtn = document.getElementById('homeBtn');
    const panSlider = document.getElementById('panSlider');
    const zSlider = document.getElementById('zSlider');
    const rotatorEl = document.getElementById('rotatorBase');
    const linearMoverEl = document.getElementById('linearMover');

    if (!homeBtn || !panSlider || !zSlider || !rotatorEl || !linearMoverEl) {
      console.warn('[send-to-home] Missing required elements.');
      return;
    }

    homeBtn.addEventListener('click', () => {
      const homeZ_mm = -2200;
      const homeZ_m = homeZ_mm / 1000.0;

      panSlider.value = 0;
      zSlider.value = homeZ_mm;

      updateSliderReadouts();

      rotatorEl.components['rotation-controller']?.setValue(0);
      linearMoverEl.components['z-offset-controller']?.setValue(homeZ_m);

      console.log('[send-to-home] Sent to home position.');
    });
  }
});
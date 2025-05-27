import { updateSliderReadouts } from './slider-readout.js';

AFRAME.registerSystem('send-to-zero', {
  init: function () {
    const zeroBtn = document.getElementById('zeroBtn');
    const panSlider = document.getElementById('panSlider');
    const zSlider = document.getElementById('zSlider');
    const rotatorEl = document.getElementById('rotatorBase');
    const linearMoverEl = document.getElementById('linearMover');

    if (!zeroBtn || !panSlider || !zSlider || !rotatorEl || !linearMoverEl) {
      console.warn('[send-to-zero] Missing required elements.');
      return;
    }

    zeroBtn.addEventListener('click', () => {
      panSlider.value = 0;
      zSlider.value = 0;

      updateSliderReadouts();

      rotatorEl.components['rotation-controller']?.setValue(0);
      linearMoverEl.components['z-offset-controller']?.setValue(0);

      console.log('[send-to-zero] Sliders set to zero.');
    });
  }
});
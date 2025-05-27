AFRAME.registerComponent('z-offset-controller', {
  schema: {
    inputId: { type: 'string', default: '' },
    value: { type: 'number', default: -2.2 }, // default start
    min: { type: 'number', default: -2.2 },
    max: { type: 'number', default: 0.5 }
  },

  init: function () {
    this.applyZOffset(this.data.value);

    if (this.data.inputId) {
      const input = document.getElementById(this.data.inputId);
      if (input) {
        input.addEventListener('input', () => {
          const meters = parseFloat(input.value) / 1000.0;
          this.setValue(meters);
        });
      }
    }
  },

  applyZOffset: function (z) {
    const pos = this.el.getAttribute('position') || { x: 0, y: 0, z: 0 };
    pos.z = z;
    this.el.setAttribute('position', pos);
  },

  update: function () {
    this.applyZOffset(this.data.value);
  },

  setValue: function (zMeters) {
    const clamped = Math.max(this.data.min, Math.min(this.data.max, zMeters));
    this.data.value = clamped;
    this.applyZOffset(clamped); // always apply
  }
});
AFRAME.registerComponent('rotation-controller', {
  schema: {
    axis: { type: 'string', default: 'y' },
    value: { type: 'number', default: 0 },
    inputId: { type: 'string', default: '' }
  },

  init: function () {
    this.applyRotation(this.data.value);

    if (this.data.inputId) {
      const input = document.getElementById(this.data.inputId);
      if (input) {
        input.addEventListener('input', () => {
          this.setValue(parseFloat(input.value));
        });
      } else {
        console.warn(`[rotation-controller] No input found with id="${this.data.inputId}"`);
      }
    }
  },

  applyRotation: function (angle) {
    const rot = this.el.getAttribute('rotation') || { x: 0, y: 0, z: 0 };
    rot[this.data.axis] = angle;
    this.el.setAttribute('rotation', rot);
  },

  update: function () {
    this.applyRotation(this.data.value);
  },

  setValue: function (angle) {
    this.data.value = angle;
    this.applyRotation(angle);
  }
});
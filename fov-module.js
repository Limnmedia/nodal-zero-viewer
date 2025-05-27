// fov-module.js
AFRAME.registerComponent('aov-frame', {
  schema: {
    color: { type: 'string', default: 'black' },
    showPoints: { type: 'boolean', default: true },
    thickness: { type: 'number', default: 0.01 }
  },
  init: function () {
    const el = this.el;
    const c = this.data.color;
    const r = this.data.thickness;

    // Define frame corners in unit space
    const corners = {
      topLeft:     '-0.5 0.5 0',
      topRight:    '0.5 0.5 0',
      bottomRight: '0.5 -0.5 0',
      bottomLeft:  '-0.5 -0.5 0'
    };

    const lines = [
      [corners.topLeft, corners.topRight],
      [corners.topRight, corners.bottomRight],
      [corners.bottomRight, corners.bottomLeft],
      [corners.bottomLeft, corners.topLeft]
    ];

    lines.forEach(([start, end]) => {
      const line = document.createElement('a-entity');
      line.setAttribute('line', `start: ${start}; end: ${end}; color: ${c}`);
      el.appendChild(line);
    });

    if (this.data.showPoints) {
      Object.values(corners).forEach(pos => {
        const point = document.createElement('a-sphere');
        point.setAttribute('position', pos);
        point.setAttribute('radius', r);
        point.setAttribute('color', c);
        el.appendChild(point);
      });
    }
  }
});
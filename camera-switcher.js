// camera-switcher.js
AFRAME.registerSystem('camera-switcher', {
  init: function () {
    const switchBtn = document.getElementById('switchCameraBtn');
    const mainCam = document.querySelector('#mainCamera');
    const witnessCam = document.querySelector('#witnessCamera');

    if (!switchBtn || !mainCam || !witnessCam) {
      console.warn('[camera-switcher] Missing DOM or scene elements.');
      return;
    }

    switchBtn.addEventListener('click', () => {
      const mainActive = mainCam.getAttribute('camera').active;

      // Toggle cameras
      mainCam.setAttribute('camera', 'active', !mainActive);
      witnessCam.setAttribute('camera', 'active', mainActive);

      // Update button text
      switchBtn.innerText = mainActive
        ? 'Switch to Main Camera'
        : 'Switch to Witness Camera';
    });
  }
});

  const launchBtn = document.getElementById('launchBtn');
  const landingInfo = document.getElementById('landing-info');

  launchBtn.addEventListener('click', () => {
    landingInfo.style.display = 'none';
  });

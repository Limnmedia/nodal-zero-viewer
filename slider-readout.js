export function updateSliderReadouts() {
  const panSlider = document.getElementById('panSlider');
  const zSlider = document.getElementById('zSlider');
  const panValue = document.getElementById('panValue');
  const zValue = document.getElementById('zValue');

  if (!panSlider || !zSlider || !panValue || !zValue) {
    console.warn('[slider-readout] Missing elements.');
    return;
  }

  panValue.textContent = panSlider.value;
  zValue.textContent = parseFloat(zSlider.value).toFixed(2);
}

export function attachSliderListeners() {
  const panSlider = document.getElementById('panSlider');
  const zSlider = document.getElementById('zSlider');

  if (panSlider) panSlider.addEventListener('input', updateSliderReadouts);
  if (zSlider) zSlider.addEventListener('input', updateSliderReadouts);
}
// Paint the last background before the application modules and storage hydrate.
(() => {
  try {
    const saved = JSON.parse(localStorage.getItem('oriatab.background-poster') || 'null')
    if (!saved || typeof saved.color !== 'string' || saved.color.length > 100 || !CSS.supports('color', saved.color)) return
    const root = document.documentElement
    root.style.backgroundColor = saved.color
    if (typeof saved.image === 'string' && saved.image.length < 200000 && /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(saved.image) && Number.isFinite(saved.dim) && saved.dim >= 0 && saved.dim <= 1) {
      const shade = typeof saved.shade === 'string' && saved.shade.length < 100 && CSS.supports('color', saved.shade) ? saved.shade : `rgb(17 32 24 / ${saved.dim})`
      root.style.setProperty('--startup-wallpaper-color', saved.color)
      root.style.setProperty('--startup-wallpaper-image', `linear-gradient(${shade}, ${shade}), url("${saved.image}")`)
      root.dataset.startupWallpaper = ''
    }
  } catch { /* Storage can be unavailable; normal startup remains usable. */ }
})()

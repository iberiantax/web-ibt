export default defineNuxtPlugin(() => {
  // Optimizar detección de viewport
  const updateViewport = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    // Actualizar CSS custom properties para mejor respuesta
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Detectar breakpoint actual
    let breakpoint = 'xs';
    if (vw >= 1680) breakpoint = 'xl-custom';
    else if (vw >= 1201) breakpoint = 'l';
    else if (vw >= 769) breakpoint = 'm';
    else if (vw >= 475) breakpoint = 'sm';
    else breakpoint = 's';
    
    document.documentElement.setAttribute('data-breakpoint', breakpoint);
  };

  // Ejecutar inmediatamente
  updateViewport();
  
  // Escuchar cambios de tamaño
  let resizeTimeout: NodeJS.Timeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateViewport, 100);
  });
  
  // Escuchar cambios de orientación
  window.addEventListener('orientationchange', () => {
    setTimeout(updateViewport, 100);
  });
}); 
window.onload = () => {
  const controller = new ScrollMagic.Controller();

  document.querySelectorAll('web-project-item').forEach((item) => {
    const projectItemScene = new ScrollMagic.Scene({
      triggerElement: item,
    })
      .setClassToggle(item, 'swipe')
      .addTo(controller);
  });
};

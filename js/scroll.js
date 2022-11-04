const sr = ScrollReveal ({
    distance : '45px',
    duration : 2000,
    reset : true,
  })
/* pagina inicial */
sr.reveal('.content', {duration: 1000});
sr.reveal('.fundo img', {duration: 1000});
sr.reveal('.gallery', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000});
sr.reveal('.service', {duration: 2000});

/* historia */
sr.reveal('.image',{ delay:400, origin:'left' })
sr.reveal('.about-text',{ delay:350, origin:'right' })
sr.reveal('.logoS-content',{ delay:350, origin:'left' })
sr.reveal('.logoS-image',{ delay:400, origin:'right' })

/* quem somos*/
sr.reveal('.row',{ delay:400, origin:'left' })
sr.reveal('.home-img',{ delay:350, origin:'right' })
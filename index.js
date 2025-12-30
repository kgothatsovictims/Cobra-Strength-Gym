document.querySelector('.mobile-toggle').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });

  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
      link.style.textDecoration = 'underline';
      link.style.textDecorationColor = 'green';
      link.style.textDecorationThickness = '3px';
      link.style.textUnderlineOffset = '6px';
    }
  });


    //equipment
    let currentEquipSlide = 0;
    const equipCarousel = document.getElementById('equipment-carousel');
    const equipSlides = document.querySelectorAll('#equipment-carousel .equipment-card');
    const totalEquipSlides = equipSlides.length;

    function showEquipSlide(index) {
        if (index >= totalEquipSlides) currentEquipSlide = 0;
        else if (index < 0) currentEquipSlide = totalEquipSlides - 1;
        else currentEquipSlide = index;
        equipCarousel.style.transform = `translateX(-${currentEquipSlide * 100}%)`;
    }

    function nextEquipSlide() {
        showEquipSlide(currentEquipSlide + 1);
    }

    function prevEquipSlide() {
        showEquipSlide(currentEquipSlide - 1);
    }

    //workouts
    let currentWorkoutSlide = 0;
    const workoutCarousel = document.getElementById('workouts-carousel');
    const workoutSlides = document.querySelectorAll('#workouts-carousel .workouts-card');
    const totalWorkoutSlides = workoutSlides.length;

    function showWorkoutSlide(index) {
        if (index >= totalWorkoutSlides) currentWorkoutSlide = 0;
        else if (index < 0) currentWorkoutSlide = totalWorkoutSlides - 1;
        else currentWorkoutSlide = index;
        workoutCarousel.style.transform = `translateX(-${currentWorkoutSlide * 100}%)`;
    }

    function nextWorkoutSlide() {
        showWorkoutSlide(currentWorkoutSlide + 1);
    }

    function prevWorkoutSlide() {
        showWorkoutSlide(currentWorkoutSlide - 1);
    }

    //pricing
    let currentPricingSlide = 0;
    const pricingCarousel = document.getElementById('pricing-carousel');
    const pricingSlides = document.querySelectorAll('#pricing-carousel .pricing-card');
    const totalPricingSlides = pricingSlides.length;

    function showPricingSlide(index) {
        if (index >= totalPricingSlides) currentPricingSlide = 0;
        else if (index < 0) currentPricingSlide = totalPricingSlides - 1;
        else currentPricingSlide = index;
        pricingCarousel.style.transform = `translateX(-${currentPricingSlide * 100}%)`;
    }

    function nextPricingSlide() {
        showPricingSlide(currentPricingSlide + 1);
    }

    function prevPricingSlide() {
        showPricingSlide(currentPricingSlide - 1);
    }

    // Reset on resize (prevents glitch when switching from mobile to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 790) {
            equipCarousel.style.transform = 'translateX(0)';
            workoutCarousel.style.transform = 'translateX(0)';
            pricingCarousel.style.transform = 'translateX(0)';
        }
    });
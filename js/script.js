 

// GSAP Animations
function animateHeader() {
  // Navigation Menu Animation
  gsap.from(".nav-menu", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out"
  });

  // Header Content Animations
  gsap.from("#main-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
  });

  gsap.from("#subtitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
  });
}

// Initialize on page load
window.addEventListener('load', () => {
  create3DScene();
  animateHeader();
});

// banner start

const featureDescriptions = {
  member: {
      title: "Member Management",
      description: "Effortlessly manage member profiles, track memberships, and handle registrations with our intuitive system."
  },
  tracking: {
      title: "Performance Tracking",
      description: "Monitor member progress, set goals, and provide personalized fitness insights with advanced tracking tools."
  },
  equipment: {
      title: "Equipment Management",
      description: "Keep track of gym equipment, maintenance schedules, and usage patterns to optimize your facility."
  },
  billing: {
      title: "Billing Management",
      description: "Streamline payment processing, generate invoices, and manage subscriptions with our integrated billing system."
  },
  scheduling: {
      title: "Class Scheduling",
      description: "Create, manage, and optimize class schedules, handle bookings, and track attendance seamlessly."
  },
  analytics: {
      title: "Advanced Analytics",
      description: "Gain deep insights into gym performance, member engagement, and business growth with comprehensive analytics."
  }
};

// Three.js 3D Scene
function create3DScene() {
            const canvas = document.getElementById('header-3d-canvas');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(5, 5, 5);
            scene.add(ambientLight, directionalLight);

            // Create multiple 3D objects
            const objectGroup = new THREE.Group();
            
            // Dumbbell
            const weightGeometry = new THREE.SphereGeometry(0.5, 32, 32);
            const weightMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
            const leftWeight = new THREE.Mesh(weightGeometry, weightMaterial);
            const rightWeight = new THREE.Mesh(weightGeometry, weightMaterial);
            
            const barGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 32);
            const barMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
            const bar = new THREE.Mesh(barGeometry, barMaterial);
            
            leftWeight.position.set(-1.5, 0, 0);
            rightWeight.position.set(1.5, 0, 0);
            bar.rotation.z = Math.PI / 2;

            // Additional geometric shapes
            const geometries = [
                new THREE.TorusGeometry(1, 0.2, 16, 100),
                new THREE.ConeGeometry(0.5, 1, 32),
                new THREE.BoxGeometry(1, 1, 1)
            ];

            geometries.forEach((geometry, index) => {
                const material = new THREE.MeshStandardMaterial({ 
                    color: [0x3b82f6, 0x10b981, 0xef4444][index],
                    transparent: true,
                    opacity: 0.6
                });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(
                    Math.random() * 10 - 5, 
                    Math.random() * 10 - 5, 
                    Math.random() * 10 - 10
                );
                objectGroup.add(mesh);
            });

            objectGroup.add(leftWeight, rightWeight, bar);
            scene.add(objectGroup);

            camera.position.z = 5;

            // Animation
            function animate() {
                requestAnimationFrame(animate);
                objectGroup.rotation.x += 0.005;
                objectGroup.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
            animate();

            // Responsive Handling
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }

        // GSAP Animations
        function animateHeader() {
            // Navigation Menu Animation
            gsap.from(".nav-menu", {
                opacity: 1,
                y: -10,
                duration: 1,
                ease: "power3.out"
            });
        }

        // Initialize on page load
        window.addEventListener('load', () => {
            create3DScene();
            animateHeader();
        });

// Initialize on page load
window.addEventListener('load', () => {
  create3DScene();
  // setupFeatureInteraction();
});

// banner End

// customer logo start

const logoWrappers = document.querySelectorAll('.logo-wrapper');
logoWrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseenter', () => {
        wrapper.style.transform = 'scale(1.1)';
    });
    wrapper.addEventListener('mouseleave', () => {
        wrapper.style.transform = 'scale(1)';
    });
});

// customer logo End

// benifits start
gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('benefits-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Particle System
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 500;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            color: '#8552C3',
            transparent: true,
            opacity: 0.5
        });
        

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Particle Animation
        function animateParticles() {
            particlesMesh.rotation.x += 0.0005;
            particlesMesh.rotation.y += 0.0008;
        }

        // Render Loop
        function animate() {
            requestAnimationFrame(animate);
            animateParticles();
            renderer.render(scene, camera);
        }
        animate();

        // GSAP Animations
        const benefitCards = document.querySelectorAll('.benefit-card');

        // Initial Load Animation
        benefitCards.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%", // Adjust based on when you want the animation to start
                    toggleActions: "play none none reset", // Ensures it plays when scrolling down
                }
            });
        });

        // Hover Interactions
        benefitCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    rotation: 2, /* ✅ Reduced rotation */
                    duration: 0.3,
                    ease: "power1.inOut"
                });
            });
        
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power1.inOut"
                });
            });
        });
        

        // Responsive Handling
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

// benifits End

// customer review start
const bubblesContainer = document.querySelector('.floating-bubbles');
    const numberOfBubbles = 10;
    
    for (let i = 0; i < numberOfBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      // Random size between 50px and 200px
      const size = Math.random() * 150 + 50;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.left = `${Math.random() * 100}%`;
      
      bubblesContainer.appendChild(bubble);
    }
    
    // Animations with GSAP
    document.addEventListener('DOMContentLoaded', () => {
      // Header animation
      gsap.to('.reviews-header', {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      });
      
      gsap.to('.reviews-header h1::after', {
        width: '80%',
        duration: 1.5,
        delay: 0.5,
        ease: "power2.inOut"
      });
      
      // Review cards animation with stagger
      gsap.to('.review-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.5
      });
      
      // Badges animation
      gsap.to('.badge', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(2)",
        delay: 1.5
      });
      
      // Pagination animation
      gsap.to('.review-pagination', {
        opacity: 1,
        duration: 0.8,
        delay: 2,
        ease: "power2.out"
      });
      
      // Floating bubbles animation
      gsap.to('.bubble', {
        y: -100,
        duration: 20,
        stagger: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Hover effect for review cards
      const reviewCards = document.querySelectorAll('.review-card');
      
      reviewCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(133, 82, 195, 0.3)',
            duration: 0.3
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(255, 255, 255, 0.05)',
            duration: 0.3
          });
        });
      });
    });
    let index = 0;
    const cards = document.querySelectorAll(".card");
    const container = document.getElementById("cardContainer");
    function updateView() {
        const start = index * 3;
        const end = start + 3;
        cards.forEach((card, i) => {
            card.style.display = i >= start && i < end ? "flex" : "none";
        });
    }
    function nextSlide() {
        if (index < Math.ceil(cards.length / 3) - 1) {
            index++;
            updateView();
        }
    }
    function prevSlide() {
        if (index > 0) {
            index--;
            updateView();
        }
    }
    updateView();
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // Show 3 slides at a time
        spaceBetween: 20, // Add space between slides
        loop: true, // Infinite loop
        autoplay: {
          delay: 3000, // Auto change every 3 seconds
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // Allow pagination clicks
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      
// customer review End

// features start

gsap.registerPlugin(ScrollTrigger);
    
// Animate features on scroll
document.querySelectorAll('.feature').forEach((feature, index) => {
  gsap.fromTo(feature, 
    { opacity: 0, y: 100 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: feature,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
      }
    }
  );
});

// Three.js for the humanoid visualization
function initHumanoid() {
  const container = document.getElementById('humanoid');
  
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 1, 3);
  camera.lookAt(0, 1, 0);
  
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);
  
  // Add lights
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Create a simple humanoid figure
  const material = new THREE.MeshPhongMaterial({ 
    color: 0x8552C3,
    emissive: 0x8552C3,
    emissiveIntensity: 0.2,
    transparent: true,
    opacity: 0.9
  });
  
  // Body parts
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 16, 16),
    material
  );
  head.position.y = 1.7;
  scene.add(head);
  
  const torso = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.2, 0.5, 8),
    material
  );
  torso.position.y = 1.35;
  scene.add(torso);
  
  const lowerBody = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.15, 0.3, 8),
    material
  );
  lowerBody.position.y = 1.0;
  scene.add(lowerBody);
  
  function createLimb(x, y, z, height, radius) {
    const limb = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, height, 8),
      material
    );
    limb.position.set(x, y, z);
    return limb;
  }
  
  // Arms
  const rightArm = createLimb(0.35, 1.4, 0, 0.4, 0.05);
  rightArm.rotation.z = -Math.PI / 4;
  scene.add(rightArm);
  
  const leftArm = createLimb(-0.35, 1.4, 0, 0.4, 0.05);
  leftArm.rotation.z = Math.PI / 4;
  scene.add(leftArm);
  
  // Legs
  const rightLeg = createLimb(0.1, 0.7, 0, 0.5, 0.07);
  scene.add(rightLeg);
  
  const leftLeg = createLimb(-0.1, 0.7, 0, 0.5, 0.07);
  scene.add(leftLeg);
  
  // Animation for squat motion
  let squatDown = true;
  let squatAmount = 0;
  
  function animate() {
    requestAnimationFrame(animate);
    
    // Simple squat animation
    if (squatDown) {
      squatAmount += 0.005;
      if (squatAmount >= 0.2) squatDown = false;
    } else {
      squatAmount -= 0.005;
      if (squatAmount <= 0) squatDown = true;
    }
    
    // Apply squat animation to the humanoid
    head.position.y = 1.7 - squatAmount;
    torso.position.y = 1.35 - squatAmount;
    lowerBody.position.y = 1.0 - squatAmount;
    rightArm.position.y = 1.4 - squatAmount;
    leftArm.position.y = 1.4 - squatAmount;
    rightLeg.scale.y = 1 - squatAmount;
    leftLeg.scale.y = 1 - squatAmount;
    rightLeg.position.y = 0.7 - squatAmount * 0.5;
    leftLeg.position.y = 0.7 - squatAmount * 0.5;
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

// Chart visualization
function initChart() {
  const chartContainer = document.getElementById('chart');
  const width = chartContainer.clientWidth;
  const height = chartContainer.clientHeight;
  
  // Create canvas for chart
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  chartContainer.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  
  // Chart data
  const data = [30, 45, 65, 75, 90, 95];
  const maxData = Math.max(...data);
  
  // Draw chart
  ctx.strokeStyle = '#8552C3';
  ctx.lineWidth = 3;
  ctx.beginPath();
  
  // Create gradient for line
  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, '#8552C3');
  gradient.addColorStop(1, '#8552C3');
  ctx.strokeStyle = gradient;
  
  // Draw line
  for (let i = 0; i < data.length; i++) {
    const x = (i / (data.length - 1)) * width;
    const y = height - (data[i] / maxData) * height;
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    
    // Draw point
    ctx.fillStyle = '#8552C3';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.stroke();
  
  // Create gradient fill under the line
  const fillGradient = ctx.createLinearGradient(0, 0, 0, height);
  fillGradient.addColorStop(0, 'rgba(219, 89, 255, 0.3)');
  fillGradient.addColorStop(1, 'rgba(133, 82, 195, 0)');
  
  ctx.fillStyle = fillGradient;
  ctx.beginPath();
  
  // Starting point
  ctx.moveTo(0, height);
  
  // Draw the same path again
  for (let i = 0; i < data.length; i++) {
    const x = (i / (data.length - 1)) * width;
    const y = height - (data[i] / maxData) * height;
    
    if (i === 0) {
      ctx.lineTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  
  // Complete the path to form a closed shape
  ctx.lineTo(width, height);
  ctx.closePath();
  ctx.fill();
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Three.js humanoid
  initHumanoid();
  
  // Initialize chart
  initChart();
  
  // Additional animations
  gsap.from('.logo', {opacity: 0, y: -50, duration: 1});
  gsap.from('.tagline', {opacity: 0, y: -20, duration: 1, delay: 0.3});
  
  // Animate accuracy fill
  gsap.from('.accuracy-fill', {
    width: '0%',
    duration: 1.5,
    delay: 2,
    ease: "power2.out"
  });
});

// features End

// people say about start

document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    const carousel = document.getElementById('carousel');
    const cards = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const totalCards = cards.length;
    
    // Initial setup of cards
    function setupCards() {
      cards.forEach((card, index) => {
        // Skip the active card
        if (index === currentIndex) {
          gsap.set(card, { 
            rotationY: 0, 
            z: 0, 
            opacity: 1, 
            scale: 1,
            x: 0
          });
        } 
        // Cards to the left
        else if (index < currentIndex) {
          gsap.set(card, { 
            rotationY: 45, 
            z: -300, 
            opacity: 0.5, 
            scale: 0.8,
            x: -300
          });
        } 
        // Cards to the right
        else {
          gsap.set(card, { 
            rotationY: -45, 
            z: -300, 
            opacity: 0.5, 
            scale: 0.8,
            x: 300
          });
        }
      });
      
      // Update indicators
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
    
    // Go to specific card
    function goToCard(index) {
      if (index < 0) {
        index = totalCards - 1;
      } else if (index >= totalCards) {
        index = 0;
      }
      
      currentIndex = index;
      
      // Animate cards to their new positions
      cards.forEach((card, i) => {
        let timeline = gsap.timeline();
        
        // Active card
        if (i === currentIndex) {
          timeline.to(card, { 
            rotationY: 0, 
            z: 0, 
            opacity: 1, 
            scale: 1,
            x: 0,
            duration: 0.8, 
            ease: "power2.out"
          });
        } 
        // Cards to the left
        else if (i < currentIndex) {
          timeline.to(card, { 
            rotationY: 45, 
            z: -300, 
            opacity: 0.5, 
            scale: 0.8,
            x: -300,
            duration: 0.8, 
            ease: "power2.out"
          });
        } 
        // Cards to the right
        else {
          timeline.to(card, { 
            rotationY: -45, 
            z: -300, 
            opacity: 0.5, 
            scale: 0.8,
            x: 300,
            duration: 0.8, 
            ease: "power2.out"
          });
        }
      });
      
      // Update indicators
      indicators.forEach((indicator, i) => {
        if (i === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
    
    // Set up event listeners
    prevBtn.addEventListener('click', () => {
      goToCard(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
      goToCard(currentIndex + 1);
    });
    
    // Setup indicator clicks
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        goToCard(index);
      });
    });
    
    // Allow card clicks
    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        if (index !== currentIndex) {
          goToCard(index);
        }
      });
    });
    
    // Initial card setup
    setupCards();
    
    // Animate in the initial elements
    gsap.from('.section-title', { 
      opacity: 0, 
      y: -50, 
      duration: 1
    });
    
    gsap.from('.section-subtitle', { 
      opacity: 0, 
      y: -30, 
      duration: 1, 
      delay: 0.3
    });
    
    gsap.from('.testimonial-card', { 
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      delay: 0.5
    });
    
    gsap.from('.controls, .testimonial-indicators', { 
      opacity: 0, 
      y: 30, 
      duration: 1, 
      delay: 1
    });
    
    // Auto rotation
    let autoRotateInterval = setInterval(() => {
      goToCard(currentIndex + 1);
    }, 5000);
    
    // Clear interval when user interacts
    document.querySelector('.testimonials-container').addEventListener('mouseenter', () => {
      clearInterval(autoRotateInterval);
    });
    
    document.querySelector('.testimonials-container').addEventListener('mouseleave', () => {
      autoRotateInterval = setInterval(() => {
        goToCard(currentIndex + 1);
      }, 5000);
    });
  });

// people say about End

// why choose gym start

document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate section header
    gsap.from('.section-header', {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.section-header',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    // Animate benefit cards
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });
    
    // Animate floating badges
    gsap.from('.floating-badge', {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: '.why-choose-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });
    
    // Animate comparison table
    gsap.from('.comparison-section', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.comparison-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    // Animate table rows
    const tableRows = document.querySelectorAll('.comparison-table tbody tr');
    tableRows.forEach((row, index) => {
      gsap.from(row, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.5,
        delay: 0.2 + (index * 0.1),
        scrollTrigger: {
          trigger: '.comparison-table',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
    
    // Animate CTA button
    gsap.from('.why-us-button', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
    
    // Create hover effects for benefit cards
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          duration: 0.3
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: 'none',
          duration: 0.3
        });
      });
    });
    
    // Pulse animation for CTA button
    gsap.to('.why-us-button', {
      boxShadow: '0 10px 30px rgba(194, 62, 255, 0.5)',
      yoyo: true,
      repeat: -1,
      duration: 2
    });
  });

// why choose gym End


// faq start

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const answer = question.nextElementSibling;
      
      // Toggle active class
      faqItem.classList.toggle('active');
      
      // Animate answer height
      if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
  
  // Search functionality
  const searchInput = document.getElementById('search-faq');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
      
      if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  // Animate glowing elements
  gsap.to("#glow1", {
    x: 20,
    y: 10,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  gsap.to("#glow2", {
    x: -15,
    y: -15,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  // GSAP animations
  window.addEventListener('DOMContentLoaded', () => {
    // Animate header
    gsap.from('.faq-header', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    // Animate search
    gsap.from('.search-container', {
      y: -30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out'
    });
    
    // Animate FAQ items
    gsap.utils.toArray('.faq-item').forEach((item, i) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.5 + (i * 0.1),
        ease: 'power3.out'
      });
    });
  });

// faq End

// blog start

gsap.registerPlugin(ScrollTrigger);
    
// Animate glowing elements
gsap.to("#glow1", {
  x: 30,
  y: 20,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to("#glow2", {
  x: -25,
  y: -25,
  duration: 9,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to("#glow3", {
  x: 15,
  y: -30,
  duration: 7,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Animate header
gsap.from('.header', {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

// Animate filter buttons
gsap.from('.filter-btn', {
  y: -20,
  opacity: 1,
  duration: 0.6,
  stagger: 0.1,
  delay: 0.3,
  ease: 'power3.out'
});

// Animate update cards
gsap.utils.toArray('.update-card').forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=100px",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: i * 0.1,
    ease: 'power3.out'
  });
});

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    const cards = document.querySelectorAll('.update-card');
    
    cards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        gsap.to(card, {
          opacity: 1,
          height: 'auto',
          margin: '',
          padding: '',
          duration: 0.4
        });
      } else {
        gsap.to(card, {
          opacity: 0,
          height: 0,
          margin: 0,
          padding: 0,
          duration: 0.4
        });
      }
    });
  });
});

// Load more button animation
gsap.from('.load-more', {
  scrollTrigger: {
    trigger: '.updates-container',
    start: "bottom bottom-=100px",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: 'power3.out'
});

// Load more button functionality (demo)
document.querySelector('.load-more').addEventListener('click', function() {
  this.innerHTML = '<span>Loading...</span>';
  setTimeout(() => {
    this.innerHTML = 'No More Updates';
    this.disabled = true;
    this.style.backgroundColor = '#666';
    this.style.cursor = 'not-allowed';
  }, 1500);
});

// blog End

// subscibe to newslatter start

gsap.registerPlugin();
    
// Create particles
const particlesContainer = document.getElementById('particles-container');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  // Random position
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  
  // Random size
  const size = Math.random() * 4 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Random opacity
  particle.style.opacity = Math.random() * 0.5 + 0.1;
  
  particlesContainer.appendChild(particle);
  
  // Animate each particle
  gsap.to(particle, {
    x: `${Math.random() * 100 - 50}`,
    y: `${Math.random() * 100 - 50}`,
    duration: Math.random() * 20 + 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

// Animate glowing elements
gsap.to("#glow1", {
  x: 50,
  y: 30,
  duration: 15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to("#glow2", {
  x: -40,
  y: -40,
  duration: 18,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Animate shapes
gsap.to(".shape-1", {
  x: 20,
  y: 20,
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".shape-2", {
  x: -15,
  y: 10,
  duration: 15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".shape-3", {
  x: 15,
  y: -15,
  duration: 14,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".shape-4", {
  x: -10,
  y: -10,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Initial animations
const tl = gsap.timeline();

tl.from('.newsletter-card', {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
})
.from('.newsletter-image svg', {
  scale: 0.5,
  opacity: 0,
  duration: 0.7,
  ease: 'back.out(1.7)'
}, "-=0.4")
.from('.newsletter-badge', {
  y: -20,
  opacity: 0,
  duration: 0.5,
  ease: 'power3.out'
}, "-=0.3")
.from('.newsletter-title', {
  y: 20,
  opacity: 0,
  duration: 0.5,
  ease: 'power3.out'
}, "-=0.2")
.from('.newsletter-description', {
  y: 20,
  opacity: 0,
  duration: 0.5,
  ease: 'power3.out'
}, "-=0.3");

// Animate benefit items with stagger
gsap.to('.benefit-item', {
  opacity: 1,
  x: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: 0.5,
  ease: 'power3.out'
});

// Form animation
gsap.from('.form-input', {
  y: 20,
  opacity: 1,
  duration: 0.5,
  delay: 0.9,
  ease: 'power3.out'
});

gsap.from('.subscribe-btn', {
  y: 20,
  opacity: 1,
  duration: 0.5,
  delay: 1,
  ease: 'power3.out'
});

gsap.from('.privacy-text', {
  opacity: 0,
  duration: 0.5,
  delay: 1.1,
  ease: 'power3.out'
});

// Button click animation
document.getElementById('subscribe-btn').addEventListener('click', function() {
  const email = document.getElementById('email-input').value;
  if (email && email.includes('@')) {
    // Successful subscription animation
    gsap.to('#newsletter-form', {
      opacity: 1,
      y: -20,
      duration: 0.4,
      ease: 'power3.in',
      onComplete: function() {
        document.getElementById('newsletter-form').style.display = 'none';
        document.getElementById('success-message').style.display = 'flex';
        
        gsap.from('#success-message', {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'power3.out'
        });
      }
    });
  } else {
    // Shake animation for invalid email
    gsap.to('.form-input', {
      x: [-5, 5, -5, 5, 0],
      duration: 0.4,
      ease: 'power1.inOut'
    });
    
    gsap.to('.form-input', {
      borderColor: '#ff5a5a',
      backgroundColor: 'rgba(255, 90, 90, 0.08)',
      duration: 0.2
    });
  }
});

// Back button functionality
document.getElementById('back-btn').addEventListener('click', function() {
  gsap.to('#success-message', {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: 'power3.in',
    onComplete: function() {
      document.getElementById('success-message').style.display = 'none';
      document.getElementById('newsletter-form').style.display = 'flex';
      document.getElementById('email-input').value = '';
      
      gsap.to('#newsletter-form', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out'
      });
    }
  });
});

// subscibe to newslatter End


// demo start

// Hero content animation
gsap.from(".hero-content", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
  });
  
  // Hero image animation
  gsap.from(".hero-image", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power3.out"
  });
  
  // Floating shapes animation
  gsap.to(".circle-1", {
    y: 50,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  gsap.to(".circle-2", {
    y: -50,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  // Feature cards animation
  gsap.from(".feature-card", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".features",
      start: "top 80%"
    }
  });

// demo End

// footer start

gsap.registerPlugin(ScrollTrigger);
    
// Footer wave animation
gsap.from(".footer-wave", {
  y: 80,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
  }
});

// Footer content sections staggered animation
gsap.from(".footer-content > div", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer-content",
    start: "top bottom-=100",
  }
});

// Social icons animation
gsap.from(".social-icon", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".social-icons",
    start: "top bottom-=50",
  }
});

// Footer decoration animations
gsap.to(".footer-hexagon", {
  rotation: 360,
  duration: 40,
  repeat: -1,
  ease: "none"
});

gsap.to(".footer-circle", {
  scale: 1.2,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Back to top button
window.addEventListener('scroll', function() {
  const backToTop = document.querySelector('.back-to-top');
  if (window.pageYOffset > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// footer End
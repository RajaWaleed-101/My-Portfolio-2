// DOM Elements
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close-modal');
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const navLinksItems = document.querySelectorAll('.nav-links li');

// Sample project data (replace with your own)
const graphicDesignProjects = [
    {
        id: 'gd1',
        title: 'Brand Identity Design',
        description: 'A complete brand identity package including logo design, color palette, typography, and brand guidelines.',
        image: 'images/girl poster.jpg',
        type: 'image'
    },
    {
        id: 'gd2',
        title: 'Poster Design',
        description: 'Creative poster design for a music festival featuring custom illustrations and typography.',
        image: 'images/ra styles.jpg',
        type: 'image'
    },
    {
        id: 'gd3',
        title: 'Packaging Design',
        description: 'Product packaging design for a premium skincare line with focus on sustainability and elegance.',
        image: 'images/sunset poster.jpg',
        type: 'image'
    },
    {
        id: 'gd4',
        title: 'Social Media Graphics',
        description: 'A series of social media graphics for a fashion brand\'s seasonal campaign.',
        image: 'images/babar azam poster.jpg',
        type: 'image'
    },
    {
        id: 'gd5',
        title: 'Illustration Project',
        description: 'Custom digital illustrations for a children\'s book with vibrant colors and characters.',
        image: 'images/art.jpg',
        type: 'image'
    },
    {
        id: 'gd6',
        title: 'Logo Collection',
        description: 'A collection of logo designs for various clients across different industries.',
        image: 'images/leapord.jpg',
        type: 'image'
    }
];

const websiteProjects = [
    {
        id: 'web1',
        title: 'Savoria Restaurant Website',
        description: 'A fully responsive restaurant website with menu display, reservation system, and customer reviews.',
        image: 'images/Res-website.png',
        link: 'https://rajawaleed-101.github.io/Savoria-Restaurant-Website/',
        githubLink: 'https://github.com/RajaWaleed-101/Savoria-Restaurant-Website',
        type: 'image'
    },
    {
        id: 'web2',
        title: 'Gym Website',
        description: 'Modern gym website with custom animations, interactive elements, and content management system.',
        image: 'images/gym-website.png',
        link: 'https://rajawaleed-101.github.io/Gym-website/',
        githubLink: 'https://github.com/RajaWaleed-101/Gym-website',
        type: 'image'
    },      
    {
        id: 'web3',
        title: 'Portfolio Website',
        description: 'Creative portfolio website for a programmer with gallery features and contact form.',
        image: 'images/port-website.png',
        link: 'https://rajawaleed-101.github.io/My-Portfolio-2/',
        githubLink: 'https://github.com/RajaWaleed-101/My-Portfolio-2',
        type: 'image'
    },
    {
        id: 'web4',
        title: 'Travel Website',
        description: 'Personal blog website with custom theme, comment system, and social media integration.',
        image: 'images/travel-website.png',
        link: 'https://rajawaleed-101.github.io/GlobalQuest-Travel-Website/',
        githubLink: 'https://github.com/RajaWaleed-101/GlobalQuest-Travel-Website',
        type: 'image'
    },
    {
        id: 'web5',
        title: 'Event Website',
        description: 'High-converting landing page for a product launch with animations and call-to-action elements.',
        image: 'images/event-website.png',
        link: 'https://rajawaleed-101.github.io/EventBooking-Website/',
        githubLink: 'https://github.com/RajaWaleed-101/EventBooking-Website',
        type: 'image'
    }
];

const videoProjects = [
    {
        id: 'vid1',
        title: 'Promotional Video',
        description: 'A 30-second promotional video for a tech product with motion graphics and sound design.',
        video: 'video/pro.mp4',
        thumbnail: 'images/pro.png',
        type: 'video'
    },
    {
        id: 'vid2',
        title: 'Corporate Video',
        description: 'Corporate overview video showcasing company culture, values, and services.',
        video: 'video/corporate.mp4',
        thumbnail: 'images/cor.png',
        type: 'video'
    },
    {
        id: 'vid3',
        title: 'Event Highlights',
        description: 'Highlight reel from a major conference with interviews and key moments.',
        video: 'video/event.mp4',
        thumbnail: 'images/event.png',
        type: 'video'
    },
    {
        id: 'vid4',
        title: 'Social Media Ad',
        description: 'Short-form video content optimized for social media advertising.',
        video: 'video/social.mp4',
        thumbnail: 'images/social.png',
        type: 'video'
    },
    {
        id: 'vid5',
        title: 'Motion Graphics',
        description: 'Custom motion graphics and animations for digital marketing campaign.',
        video: 'video/motion.mp4',
        thumbnail: 'images/motion.png',
        type: 'video'
    }
];

// Initialize Three.js Scene
function initThreeJS() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0x7b68ee, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Add moving point light
    const movingLight = new THREE.PointLight(0xff6b6b, 1);
    movingLight.position.set(-5, 5, 5);
    scene.add(movingLight);

    // Create stars
    function addStar() {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);

        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
        star.position.set(x, y, z);
        scene.add(star);
        return star;
    }

    const stars = Array(200).fill().map(addStar);

    // Create floating geometric shapes
    function createShape(geometry, color, position, rotation) {
        const material = new THREE.MeshStandardMaterial({ 
            color: color,
            transparent: true,
            opacity: 0.8,
            metalness: 0.3,
            roughness: 0.4
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(position.x, position.y, position.z);
        mesh.rotation.set(rotation.x, rotation.y, rotation.z);
        scene.add(mesh);
        return mesh;
    }

    // Create various shapes
    const shapes = [];
    
    // Dodecahedron
    shapes.push(createShape(
        new THREE.DodecahedronGeometry(5, 0),
        0x7b68ee,
        { x: -15, y: 10, z: -10 },
        { x: 0, y: 0, z: 0 }
    ));
    
    // Icosahedron
    shapes.push(createShape(
        new THREE.IcosahedronGeometry(4, 0),
        0xff6b6b,
        { x: 15, y: -8, z: -15 },
        { x: 0, y: 0, z: 0 }
    ));
    
    // Torus
    shapes.push(createShape(
        new THREE.TorusGeometry(3, 1, 16, 100),
        0x00ffff,
        { x: 0, y: 15, z: -20 },
        { x: Math.PI / 4, y: Math.PI / 4, z: 0 }
    ));
    
    // Octahedron
    shapes.push(createShape(
        new THREE.OctahedronGeometry(3, 0),
        0xffff00,
        { x: -20, y: -10, z: -5 },
        { x: 0, y: 0, z: 0 }
    ));

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate shapes
        shapes.forEach((shape, index) => {
            shape.rotation.x += 0.003 * (index % 2 ? 1 : -1);
            shape.rotation.y += 0.005 * (index % 3 ? 1 : -1);
            shape.rotation.z += 0.001 * (index % 2 ? 1 : -1);
            
            // Make shapes float up and down
            shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
        });

        // Move the moving light in a circular pattern
        const time = Date.now() * 0.001;
        movingLight.position.x = Math.sin(time) * 15;
        movingLight.position.z = Math.cos(time) * 15;

        // Twinkle stars
        stars.forEach((star, index) => {
            star.material.opacity = 0.5 + Math.sin(time + index) * 0.5;
            star.scale.setScalar(0.8 + Math.sin(time * 0.5 + index) * 0.2);
        });

        renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Start animation
    animate();
}

// Initialize Map with direct Google Maps link
function initMap() {
    // Rawalpindi coordinates
    const rawalpindi = { lat: 33.5651, lng: 73.0169 };
    
    // Get map container elements
    const mapContainer = document.querySelector('.map-container');
    const mapPlaceholder = document.querySelector('.map-placeholder');
    const locationItem = document.querySelector('.location-item');
    
    if (mapContainer && locationItem) {
        // Set up click event to open Google Maps
        mapContainer.addEventListener('click', () => {
            window.open(`https://www.google.com/maps/place/Rawalpindi,+Punjab,+Pakistan/@${rawalpindi.lat},${rawalpindi.lng},13z`, '_blank');
        });
        
        // Add hover effect
        mapContainer.addEventListener('mouseenter', () => {
            mapPlaceholder.classList.add('hover');
        });
        
        mapContainer.addEventListener('mouseleave', () => {
            mapPlaceholder.classList.remove('hover');
        });
    }
}

// Create gallery items
function createGalleryItems() {
    const graphicDesignGallery = document.querySelector('.graphic-design-gallery');
    const websitesGallery = document.querySelector('.websites-gallery');
    const videoGallery = document.querySelector('.video-gallery');
    
    // Setup scroll arrows functionality
    setupScrollArrows();

    // Create graphic design gallery items
    graphicDesignProjects.forEach(project => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.id = project.id;
        galleryItem.dataset.type = project.type;
        
        // Create image with lazy loading
        const img = document.createElement('img');
        img.alt = project.title;
        img.loading = 'lazy'; // Enable native lazy loading
        img.setAttribute('data-src', project.image); // Store image path for lazy loading
        
        // Set a placeholder or low-quality image initially
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" preserveAspectRatio="none"%3E%3Crect width="300" height="250" fill="%23333333"%3E%3C/rect%3E%3C/svg%3E';
        
        galleryItem.appendChild(img);
        
        // Add overlay with title and button
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `
            <h3>${project.title}</h3>
            <div class="project-links">
                <button class="view-details-btn">View Details</button>
            </div>
        `;
        
        galleryItem.appendChild(overlay);
        
        // Add click event to the view details button only
        const viewDetailsBtn = galleryItem.querySelector('.view-details-btn');
        viewDetailsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            openModal(project);
        });
        
        graphicDesignGallery.appendChild(galleryItem);
    });
    
    // Initialize lazy loading for the first section
    lazyLoadImages(document.querySelector('.graphic-design-gallery'));

    // Create websites gallery items
    websiteProjects.forEach(project => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.id = project.id;
        galleryItem.dataset.type = project.type;
        
        // Create image with lazy loading
        const img = document.createElement('img');
        img.alt = project.title;
        img.loading = 'lazy'; // Enable native lazy loading
        img.setAttribute('data-src', project.image); // Store image path for lazy loading
        
        // Set a placeholder or low-quality image initially
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" preserveAspectRatio="none"%3E%3Crect width="300" height="250" fill="%23333333"%3E%3C/rect%3E%3C/svg%3E';
        
        galleryItem.appendChild(img);
        
        // Add overlay with title and button
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `
            <h3>${project.title}</h3>
            <div class="project-links">
                <button class="view-details-btn">View Details</button>
            </div>
        `;
        
        galleryItem.appendChild(overlay);
        
        // Add click event to the view details button only
        const viewDetailsBtn = galleryItem.querySelector('.view-details-btn');
        viewDetailsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            openModal(project);
        });
        
        websitesGallery.appendChild(galleryItem);
    });
    
    // Initialize lazy loading for websites section
    lazyLoadImages(websitesGallery);

    // Create video gallery items
    videoProjects.forEach(project => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.id = project.id;
        galleryItem.dataset.type = project.type;
        
        // Create image with lazy loading
        const img = document.createElement('img');
        img.alt = project.title;
        img.loading = 'lazy'; // Enable native lazy loading
        img.setAttribute('data-src', project.thumbnail); // Store image path for lazy loading
        
        // Set a placeholder or low-quality image initially
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" preserveAspectRatio="none"%3E%3Crect width="300" height="250" fill="%23333333"%3E%3C/rect%3E%3C/svg%3E';
        
        galleryItem.appendChild(img);
        
        // Add overlay with title and button
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `
            <h3>${project.title}</h3>
            <div class="project-links">
                <button class="view-details-btn">View Video</button>
            </div>
        `;
        
        galleryItem.appendChild(overlay);
        
        // Add click event to the view details button only
        const viewDetailsBtn = galleryItem.querySelector('.view-details-btn');
        viewDetailsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            openModal(project);
        });
        
        videoGallery.appendChild(galleryItem);
    });
    
    // Initialize lazy loading for videos section
    lazyLoadImages(videoGallery);
}

// Lazy loading functions
function lazyLoadImages(container) {
    const images = container.querySelectorAll('img[data-src]');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.onload = () => {
                    img.removeAttribute('data-src');
                };
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '100px' });
    
    // Observe each image
    images.forEach(img => {
        observer.observe(img);
    });
}

function lazyLoadVideos(container) {
    const videos = container.querySelectorAll('video[data-src]');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.src = video.getAttribute('data-src');
                video.load();
                video.removeAttribute('data-src');
                observer.unobserve(video);
            }
        });
    }, { rootMargin: '100px' });
    
    // Observe each video
    videos.forEach(video => {
        observer.observe(video);
    });
}

// Open modal with project details
function openModal(project) {
    // Show loading state
    modal.classList.add('loading');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Set basic content immediately
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    
    // Use setTimeout to defer heavy operations
    setTimeout(() => {
        if (project.type === 'video') {
            modalImage.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = project.video;
            modalVideo.load();
            // Only play after loaded
            modalVideo.onloadeddata = () => {
                modalVideo.play();
                modal.classList.remove('loading');
            };
            // Fallback if onloadeddata doesn't trigger
            setTimeout(() => modal.classList.remove('loading'), 500);
        } else {
            modalVideo.style.display = 'none';
            modalImage.style.display = 'block';
            
            // Preload image
            const img = new Image();
            img.onload = () => {
                modalImage.src = project.image;
                modal.classList.remove('loading');
            };
            img.onerror = () => {
                modal.classList.remove('loading');
            };
            img.src = project.image;
            
            // Fallback if image loading takes too long
            setTimeout(() => {
                modalImage.src = project.image;
                modal.classList.remove('loading');
            }, 500);
        }
        
        // Add project links for website projects
        const modalLinks = document.getElementById('modalLinks');
        if (modalLinks) {
            if (project.id.startsWith('web')) {
                // Create links container if it doesn't exist
                modalLinks.innerHTML = '';
                
                // Add live preview link if available
                if (project.link) {
                    const liveLink = document.createElement('a');
                    liveLink.href = project.link;
                    liveLink.target = '_blank';
                    liveLink.classList.add('project-link', 'live-link');
                    liveLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Preview';
                    modalLinks.appendChild(liveLink);
                }
                
                // Add GitHub link - use githubLink property if available, otherwise use default
                const githubLink = document.createElement('a');
                githubLink.href = project.githubLink || 'https://github.com/RajaWaleed-101';
                githubLink.target = '_blank';
                githubLink.classList.add('project-link', 'github-link');
                githubLink.innerHTML = '<i class="fab fa-github"></i> GitHub';
                modalLinks.appendChild(githubLink);
                
                modalLinks.style.display = 'flex';
            } else {
                modalLinks.style.display = 'none';
            }
        }
    }, 10); // Small delay to allow the modal to render first
}

// Close modal
function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalVideo.pause();
}

// Mobile navigation toggle
function navSlide() {
    burger.addEventListener('click', () => {
        // Toggle navigation
        navLinks.classList.toggle('nav-active');
        
        // Animate links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');
    });
}

// Smooth scrolling for navigation links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinksItems.forEach(link => {
                    link.style.animation = '';
                });
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

// Form submission
function handleFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to a server
            // For demo purposes, we'll just log it and show a success message
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Parallax scrolling effect
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const scrollPosition = window.scrollY;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            // Check if section is in viewport
            if (scrollPosition > sectionTop - window.innerHeight && 
                scrollPosition < sectionTop + sectionHeight) {
                
                const speed = section.dataset.speed || 0.2;
                const yPos = (scrollPosition - sectionTop) * speed;
                
                // Apply parallax effect to section header
                const header = section.querySelector('.section-header');
                if (header) {
                    header.style.transform = `perspective(1000px) translateY(${yPos}px) rotateX(${yPos * 0.05}deg)`;
                }
            }
        });
    });
}

// Create folder structure and placeholder images
function createFolderStructure() {
    // This function would typically be run on the server
    // For client-side demo, we'll just log a message
    console.log('In a real environment, you would need to create:');
    console.log('- /images folder for all project images');
    console.log('- /videos folder for video projects');
}

// Handle project category switching
function setupProjectCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCategories = document.querySelectorAll('.project-category');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get category to show
            const categoryToShow = button.dataset.category;
            
            // Hide all project categories
            projectCategories.forEach(category => {
                category.classList.remove('active');
            });
            
            // Show selected category
            document.getElementById(`${categoryToShow}-projects`).classList.add('active');
        });
    });
}

// Handle loading animation
function handleLoadingAnimation() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
            
            // Add animation to main content sections
            document.querySelectorAll('.section').forEach((section, index) => {
                section.style.animation = `fadeInUp 0.8s ease forwards ${index * 0.2}s`;
                section.style.opacity = '0';
            });
        }, 1500); // Show loading screen for at least 1.5 seconds
    });
}

// Handle skill blocks animations
function setupSkillAnimations() {
    const skillBlocks = document.querySelectorAll('.skill-block');
    
    skillBlocks.forEach(block => {
        const percentageFill = block.querySelector('.percentage-fill');
        const percentage = parseInt(block.dataset.percentage);
        
        // Set initial state
        percentageFill.style.background = `conic-gradient(var(--accent-color) 0deg, var(--accent-color) 0deg, transparent 0deg, transparent 360deg)`;
        
        // Add hover event listeners
        block.addEventListener('mouseenter', () => {
            animatePercentage(percentageFill, percentage);
        });
        
        block.addEventListener('mouseleave', () => {
            // Reset animation with skill-specific color
            const skillColor = block.style.getPropertyValue('--skill-color') || 'var(--accent-color)';
            percentageFill.style.background = `conic-gradient(${skillColor} 0deg, ${skillColor} 0deg, transparent 0deg, transparent 360deg)`;
        });
    });
}

// Animate percentage circle
function animatePercentage(element, targetPercentage) {
    const degrees = (targetPercentage / 100) * 360;
    const skillBlock = element.closest('.skill-block');
    const skillColor = skillBlock.style.getPropertyValue('--skill-color') || 'var(--accent-color)';
    
    // Animate the conic gradient
    let currentDegree = 0;
    const increment = degrees / 60; // 60 frames for smooth animation
    
    const animate = () => {
        if (currentDegree < degrees) {
            currentDegree += increment;
            element.style.background = `conic-gradient(${skillColor} 0deg, ${skillColor} ${currentDegree}deg, transparent ${currentDegree}deg, transparent 360deg)`;
            requestAnimationFrame(animate);
        } else {
            element.style.background = `conic-gradient(${skillColor} 0deg, ${skillColor} ${degrees}deg, transparent ${degrees}deg, transparent 360deg)`;
        }
    };
    
    requestAnimationFrame(animate);
}

// Add skill-specific colors to percentage circles
function applySkillColors() {
    const skillBlocks = document.querySelectorAll('.skill-block');
    
    skillBlocks.forEach(block => {
        const skill = block.dataset.skill;
        const percentageFill = block.querySelector('.percentage-fill');
        const percentageCircle = block.querySelector('.percentage-circle');
        
        let skillColor = 'var(--accent-color)';
        
        switch(skill) {
            case 'HTML':
                skillColor = '#e34c26';
                break;
            case 'CSS':
                skillColor = '#1572b6';
                break;
            case 'JavaScript':
                skillColor = '#f7df1e';
                break;
            case 'PHP':
                skillColor = '#777bb4';
                break;
            case 'Graphic Design':
                skillColor = '#ff6b6b';
                break;
            case 'Video Editing':
                skillColor = '#4ecdc4';
                break;
        }
        
        // Set CSS custom property for this skill block
        block.style.setProperty('--skill-color', skillColor);
        
        // Update the percentage circle background
        percentageCircle.style.background = `conic-gradient(${skillColor} 0deg, ${skillColor} 0deg, rgba(100, 255, 218, 0.1) 0deg, rgba(100, 255, 218, 0.1) 360deg)`;
    });
}

// Setup scroll arrows functionality
function setupScrollArrows() {
    // Force all arrows to be visible initially
    const allArrows = document.querySelectorAll('.scroll-arrow');
    allArrows.forEach(arrow => {
        arrow.style.opacity = '1';
        arrow.style.pointerEvents = 'auto';
        arrow.style.display = 'flex';
    });
    
    const galleryWrappers = document.querySelectorAll('.project-gallery-wrapper');
    
    galleryWrappers.forEach(wrapper => {
        const container = wrapper.querySelector('.horizontal-scroll-container');
        const scrollContent = wrapper.querySelector('.scroll-content');
        const arrows = wrapper.querySelectorAll('.scroll-arrow');
        const leftArrow = wrapper.querySelector('.scroll-arrow.left');
        const rightArrow = wrapper.querySelector('.scroll-arrow.right');
        
        // Make sure arrows are visible
        if (leftArrow) {
            leftArrow.style.opacity = '1';
            leftArrow.style.pointerEvents = 'auto';
            leftArrow.style.display = 'flex';
        }
        
        if (rightArrow) {
            rightArrow.style.opacity = '1';
            rightArrow.style.pointerEvents = 'auto';
            rightArrow.style.display = 'flex';
        }
        
        // Remove any cloned items from previous implementation
        if (scrollContent) {
            Array.from(scrollContent.children).forEach(child => {
                if (child.hasAttribute('aria-hidden')) {
                    scrollContent.removeChild(child);
                }
            });
        }
        
        // Initial arrow visibility check
        updateArrowVisibility();
        
        // Handle arrow clicks
        arrows.forEach(arrow => {
            arrow.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('Arrow clicked:', arrow.getAttribute('data-direction'));
                const direction = arrow.getAttribute('data-direction');
                
                // Calculate scroll amount based on container width for consistency
                // Use at least 300px or 80% of container width, whichever is larger
                const scrollAmount = Math.max(300, container.clientWidth * 0.8);
                
                // Calculate new scroll position
                const currentScrollLeft = container.scrollLeft;
                const newScrollLeft = direction === 'left' ? 
                    currentScrollLeft - scrollAmount : 
                    currentScrollLeft + scrollAmount;
                
                // Smooth scroll to new position
                container.scrollTo({
                    left: newScrollLeft,
                    behavior: 'smooth'
                });
            });
        });
        
        // Update arrow visibility on scroll
        container.addEventListener('scroll', updateArrowVisibility);
        
        // Update arrow visibility on window resize
        window.addEventListener('resize', () => {
            // Small delay to ensure container dimensions are updated
            setTimeout(updateArrowVisibility, 100);
        });
        
        // Function to update arrow visibility
        function updateArrowVisibility() {
            // Only apply visibility logic if we have enough content to scroll
            const hasScrollableContent = container.scrollWidth > container.clientWidth;
            
            // Always show arrows if we have scrollable content
            if (hasScrollableContent) {
                // Hide left arrow if at the beginning
                if (container.scrollLeft <= 10) {
                    leftArrow.style.opacity = '0.3';
                    leftArrow.style.pointerEvents = 'none';
                } else {
                    leftArrow.style.opacity = '1';
                    leftArrow.style.pointerEvents = 'auto';
                }
                
                // Hide right arrow if at the end
                const maxScrollLeft = container.scrollWidth - container.clientWidth - 10;
                if (container.scrollLeft >= maxScrollLeft) {
                    rightArrow.style.opacity = '0.3';
                    rightArrow.style.pointerEvents = 'none';
                } else {
                    rightArrow.style.opacity = '1';
                    rightArrow.style.pointerEvents = 'auto';
                }
            } else {
                // No scrollable content, show arrows with reduced opacity
                leftArrow.style.opacity = '0.3';
                rightArrow.style.opacity = '0.3';
            }
        }
    });
}


// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start loading animation
    handleLoadingAnimation();
    
    // Initialize Three.js scene
    initThreeJS();
    
    // Create gallery items
    createGalleryItems();
    
    // Setup project categories
    setupProjectCategories();
    
    // Setup scroll arrows
    setupScrollArrows();
    
    // Setup skill animations
    setupSkillAnimations();
    applySkillColors();
    
    // Setup navigation
    navSlide();
    smoothScroll();
    
    // Setup modal
    closeModal.addEventListener('click', closeModalFunction);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    // Setup form
    handleFormSubmission();
    
    // Setup parallax effect
    parallaxEffect();
    
    // Initialize map with clickable location
    initMap();
    
    // Log folder structure needs
    createFolderStructure();
});
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
        title: 'E-commerce Website',
        description: 'A fully responsive e-commerce website with product catalog, shopping cart, and secure checkout.',
        image: 'images/website-1.jpg',
        link: 'https://example.com/ecommerce',
        type: 'image'
    },
    {
        id: 'web2',
        title: 'Corporate Website',
        description: 'Modern corporate website with custom animations, interactive elements, and content management system.',
        image: 'images/website-2.jpg',
        link: 'https://example.com/corporate',
        type: 'image'
    },
    {
        id: 'web3',
        title: 'Portfolio Website',
        description: 'Creative portfolio website for a photographer with gallery features and contact form.',
        image: 'images/website-3.jpg',
        link: 'https://example.com/portfolio',
        type: 'image'
    },
    {
        id: 'web4',
        title: 'Blog Website',
        description: 'Personal blog website with custom theme, comment system, and social media integration.',
        image: 'images/website-4.jpg',
        link: 'https://example.com/blog',
        type: 'image'
    },
    {
        id: 'web5',
        title: 'Landing Page',
        description: 'High-converting landing page for a product launch with animations and call-to-action elements.',
        image: 'images/website-5.jpg',
        link: 'https://example.com/landing',
        type: 'image'
    }
];

const videoProjects = [
    {
        id: 'vid1',
        title: 'Promotional Video',
        description: 'A 30-second promotional video for a tech product with motion graphics and sound design.',
        video: 'videos/video-1.mp4',
        thumbnail: 'images/video-thumb-1.jpg',
        type: 'video'
    },
    {
        id: 'vid2',
        title: 'Corporate Video',
        description: 'Corporate overview video showcasing company culture, values, and services.',
        video: 'videos/video-2.mp4',
        thumbnail: 'images/video-thumb-2.jpg',
        type: 'video'
    },
    {
        id: 'vid3',
        title: 'Event Highlights',
        description: 'Highlight reel from a major conference with interviews and key moments.',
        video: 'videos/video-3.mp4',
        thumbnail: 'images/video-thumb-3.jpg',
        type: 'video'
    },
    {
        id: 'vid4',
        title: 'Social Media Ad',
        description: 'Short-form video content optimized for social media advertising.',
        video: 'videos/video-4.mp4',
        thumbnail: 'images/video-thumb-4.jpg',
        type: 'video'
    },
    {
        id: 'vid5',
        title: 'Motion Graphics',
        description: 'Custom motion graphics and animations for digital marketing campaign.',
        video: 'videos/video-5.mp4',
        thumbnail: 'images/video-thumb-5.jpg',
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

    // Create graphic design gallery items
    graphicDesignProjects.forEach(project => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.id = project.id;
        galleryItem.dataset.type = project.type;
        
        galleryItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="overlay">
                <h3>${project.title}</h3>
                <p>Click to view details</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openModal(project));
        graphicDesignGallery.appendChild(galleryItem);
    });

    // Create websites gallery items
    websiteProjects.forEach(project => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.id = project.id;
        galleryItem.dataset.type = project.type;
        
        galleryItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="overlay">
                <h3>${project.title}</h3>
                <p>Click to view details</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openModal(project));
        websitesGallery.appendChild(galleryItem);
    });

    // Create video gallery items
    videoProjects.forEach(project => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.id = project.id;
        galleryItem.dataset.type = project.type;
        
        galleryItem.innerHTML = `
            <img src="${project.thumbnail}" alt="${project.title}">
            <div class="overlay">
                <h3>${project.title}</h3>
                <p>Click to play video</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openModal(project));
        videoGallery.appendChild(galleryItem);
    });
}

// Open modal with project details
function openModal(project) {
    if (project.type === 'video') {
        modalImage.style.display = 'none';
        modalVideo.style.display = 'block';
        modalVideo.src = project.video;
        modalVideo.load();
        modalVideo.play();
    } else {
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
        modalImage.src = project.image;
    }
    
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
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
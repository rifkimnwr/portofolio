/**
 * ==========================================================================
 * HIGH CONTRAST HIGH ENGINE SCRIPT ENGINE - MUHAMMAD RIFKI MUNAWAR
 * ==========================================================================
 */

// Data Proyek Terstruktur untuk Modal (2-3 Foto representatif disimulasikan via high-quality placeholder)
const PROJECT_DATABASE = {
    'smart-squeeze': {
        title: "Smart Squeeze Cage – Timbangan Pintar Berbasis IoT",
        period: "Mei 2026 – Juni 2026",
        position: "Hardware Engineer",
        desc: "Mengembangkan sistem timbangan pintar berbasis Internet of Things (IoT) untuk membantu proses penimbangan domba dan kambing secara lebih cepat, akurat, dan efisien. Sistem menggunakan ESP32, sensor Load Cell, serta layar TFT ILI9341 untuk menampilkan hasil pengukuran secara langsung. Data berat ternak dikirim secara real-time ke website dan diolah menggunakan Machine Learning untuk menganalisis kondisi ternak serta memberikan rekomendasi kebutuhan pakan. Proyek ini dikembangkan bekerja sama dengan Program Studi Teknologi Manajemen Peternakan.",
        tech: ["ESP32", "Load Cell", "HX711", "TFT ILI9341", "IoT", "Website", "Machine Learning"],
        images: ["squeeze-1.png", "squeeze-2.png", "squeeze-3.jpeg"],
        video: "squeeze-demo.mp4"
    },
    'iot-monitoring': {
        title: "IoT Monitoring System – Deteksi Potensi Jamur Ruangan",
        period: "Maret 2026 – Juni 2026",
        position: "IoT Engineer",
        desc: "Mengembangkan sistem monitoring lingkungan berbasis IoT untuk mendeteksi kondisi ruangan yang berpotensi menyebabkan pertumbuhan jamur. Sistem memanfaatkan sensor DHT22 dan ESP32 untuk membaca suhu serta kelembapan secara real-time. Data dikirim menggunakan protokol MQTT menuju server Ubuntu yang menjalankan ThingsBoard sehingga dapat dipantau melalui dashboard berbasis web.",
        tech: ["ESP32", "DHT22", "MQTT", "Ubuntu Server", "ThingsBoard"],
        images: ["monitoring-1.jpeg", "monitoring-2.jpeg", "monitoring-3.jpeg"],
        video: null
    },
    'chop-x': {
        title: "Chop-X – Mesin Pencacah Pakan Ayam Berbasis IoT",
        period: "Oktober 2025 – Desember 2025",
        position: "Hardware Engineer",
        desc: "Merancang mesin pencacah pakan ayam elektrik yang terintegrasi dengan Internet of Things (IoT). Sistem menggunakan ESP8266 untuk memantau kecepatan putaran motor (RPM), konsumsi daya listrik, serta total berat pakan yang telah diproses. Seluruh data dikirim secara real-time ke website sehingga kondisi mesin dapat dipantau dengan lebih mudah.",
        tech: ["ESP8266", "IoT", "Sensor RPM", "Sensor Arus", "Load Cell", "Website"],
        images: ["chopx-1.jpeg", "chopx-2.jpeg", "chopx-3.jpeg"],
        video: null
    },
    'farmshield': {
        title: "FarmShield – Web IoT & Robot Pertanian",
        period: "September 2025 – November 2025",
        position: "3D Designer, UI/UX Designer, Hardware Engineer",
        desc: "Mengembangkan simulasi sistem pertanian cerdas yang mengintegrasikan robot, Internet of Things (IoT), Computer Vision, dan Machine Learning. Sistem menggunakan Raspberry Pi dan kamera untuk mendeteksi tingkat kematangan tomat. Hasil analisis kemudian ditampilkan melalui website sehingga proses monitoring dapat dilakukan secara lebih efektif.",
        tech: ["Raspberry Pi", "Camera Module", "IoT", "Machine Learning", "Computer Vision", "Website"],
        images: ["farmshield-1.jpeg", "farmshield-2.jpeg", "farmshield-3.jpeg"],
        video: "farmshield-demo.mp4"
    },
    'smokepeek': {
        title: "SmokePeek – Alat Pendeteksi Gas Berbahaya",
        period: "Maret 2025 – Mei 2025",
        position: "Hardware Engineer",
        desc: "Mengembangkan prototipe sistem peringatan dini kebakaran berbasis Internet of Things (IoT) menggunakan sensor MQ-2 untuk mendeteksi keberadaan gas berbahaya. Data hasil pembacaan sensor dikirim secara real-time menggunakan ESP8266 menuju website sehingga pengguna dapat memantau kondisi lingkungan secara langsung.",
        tech: ["ESP8266", "MQ-2", "IoT", "Website"],
        images: ["smokepeek-1.jpeg", "smokepeek-2.jpeg", "smokepeek-3.jpeg"],
        video: null
    },
    'pestiglide': {
        title: "PestiGlide – Prototype Robot Pertanian Line Follower",
        period: "September 2024 – November 2024",
        position: "Hardware Engineer",
        desc: "Mengembangkan prototipe robot pertanian line follower yang dirancang untuk membantu proses penyemprotan pestisida secara otomatis. Robot dikendalikan menggunakan IC GAL, driver motor L293D, dan sensor inframerah untuk mengikuti jalur yang telah ditentukan sehingga proses penyemprotan menjadi lebih efisien.",
        tech: ["IC GAL", "L293D", "Sensor Infrared", "Embedded System"],
        images: ["pestiglide-1.jpeg", "pestiglide-2.jpeg", "pestiglide-3.jpeg"],
        video: null
    },
    'smart-parking': {
        title: "Smart Parking – Palang Parkir Otomatis",
        period: "April 2024 – Juni 2024",
        position: "Hardware Engineer",
        desc: "Mengembangkan prototipe sistem palang parkir otomatis menggunakan RFID sebagai autentikasi kendaraan dan sensor ultrasonik untuk mendeteksi keberadaan kendaraan. Seluruh sistem dikendalikan menggunakan Arduino Uno sehingga proses akses masuk dan keluar area parkir menjadi lebih otomatis.",
        tech: ["Arduino Uno", "RFID", "Sensor Ultrasonik", "Servo Motor"],
        images: ["parking-1.jpeg", "parking-2.jpeg", "parking-3.jpeg"],
        video: null
    }
};
document.addEventListener('DOMContentLoaded', () => {
    initLucideIcons();
    initThemeManager();
    initMobileNavigation();
    initTypingCarousel();
    initScrollObserver();
    initProjectModals();
});

function initLucideIcons() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function initThemeManager() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const cachedTheme = localStorage.getItem('theme-minimal-mode');
    
    if (cachedTheme === 'dark' || (!cachedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme-minimal-mode', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }
}

function initMobileNavigation() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => { mobileMenu.classList.remove('opacity-0', '-translate-y-4'); }, 10);
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('opacity-0', '-translate-y-4');
            const handleTransition = () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.removeEventListener('transitionend', handleTransition);
            };
            mobileMenu.addEventListener('transitionend', handleTransition);
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    };

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
    }
}

function initTypingCarousel() {
    const targetElement = document.getElementById('typing-text');
    if (!targetElement) return;

    const designations = ["IoT Engineering.", "Software Engineering.", "Robotics Systems.", "Linux Administration."];
    let activeWordIndex = 0;
    let characterPointer = 0;
    let isDeletingMode = false;
    let typedSpeedRate = 80;

    const processTypeExecution = () => {
        const fullStringValue = designations[activeWordIndex];
        
        if (isDeletingMode) {
            targetElement.textContent = fullStringValue.substring(0, characterPointer - 1);
            characterPointer--;
            typedSpeedRate = 30;
        } else {
            targetElement.textContent = fullStringValue.substring(0, characterPointer + 1);
            characterPointer++;
            typedSpeedRate = 60;
        }

        if (!isDeletingMode && characterPointer === fullStringValue.length) {
            isDeletingMode = true;
            typedSpeedRate = 1500;
        } else if (isDeletingMode && characterPointer === 0) {
            isDeletingMode = false;
            activeWordIndex = (activeWordIndex + 1) % designations.length;
            typedSpeedRate = 300;
        }

        setTimeout(processTypeExecution, typedSpeedRate);
    };

    setTimeout(processTypeExecution, 400);
}

function initScrollObserver() {
    const navBar = document.getElementById('main-nav');
    const scrollProgress = document.getElementById('scroll-progress');
    const animatedSections = document.querySelectorAll('.fade-in');
    const desktopNavLinks = document.querySelectorAll('.nav-link');
    const htmlSections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrolledDistance = window.scrollY;
        const totalPageHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (scrollProgress && totalPageHeight > 0) {
            scrollProgress.style.width = `${(scrolledDistance / totalPageHeight) * 100}%`;
        }

        if (navBar) {
            if (scrolledDistance > 30) {
                navBar.classList.add('nav-scrolled', 'shadow-sm');
            } else {
                navBar.classList.remove('nav-scrolled', 'shadow-sm');
            }
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedSections.forEach(section => observer.observe(section));

    const viewSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetIdValue = entry.target.getAttribute('id');
                desktopNavLinks.forEach(linkElement => {
                    if (linkElement.getAttribute('href') === `#${targetIdValue}`) {
                        linkElement.classList.add('active-section');
                    } else {
                        linkElement.classList.remove('active-section');
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    htmlSections.forEach(sectionBlock => viewSectionObserver.observe(sectionBlock));
}

// Interactive Modal Engine Configuration
// Interactive Modal & Lightbox Engine Configuration
function initProjectModals() {
    const modalElement = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    // Lightbox Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightboxBtn = document.getElementById('close-lightbox');

    if (!modalElement || !modalBody) return;

    const openModal = (projectId) => {
        const data = PROJECT_DATABASE[projectId];
        if (!data) return;

        // Render data meta ke dalam elemen modal
        modalBody.innerHTML = `
            <div>
                <div class="flex flex-wrap gap-x-4 text-[10px] font-mono tracking-wider text-zinc-400 uppercase mb-1">
                    <span>${data.period}</span>
                    <span>•</span>
                    <span class="text-zinc-500 dark:text-zinc-300">Posisi: ${data.position}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1">${data.title}</h3>
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 modal-gallery-grid">
                ${data.images.map(img => `
                    <div class="overflow-hidden rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 cursor-zoom-in">
                        <img src="images/${img}" alt="Dokumentasi ${data.title}" class="project-gallery-img w-full h-40 sm:h-48 object-cover transition-all duration-300">
                    </div>
                `).join('')}
            </div>

            ${data.video ? `
            <div class="space-y-2">
                <span class="block text-[10px] uppercase font-bold tracking-wider text-zinc-400">Demo Video</span>
                <div class="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-black shadow-inner">
                    <video src="videos/${data.video}" controls class="w-full max-h-64 object-contain"></video>
                </div>
            </div>
            ` : ''}

            <div class="text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>${data.desc}</p>
            </div>

            <div>
                <span class="block text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-2">Teknologi yang digunakan</span>
                <div class="flex flex-wrap gap-1.5">
                    ${data.tech.map(t => `<span class="text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-200/40 dark:border-zinc-700/30">${t}</span>`).join('')}
                </div>
            </div>
        `;

        modalElement.classList.remove('hidden');
        modalElement.classList.add('flex');
        setTimeout(() => {
            modalElement.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        }, 10);
        document.body.style.overflow = 'hidden'; 

        // Daftarkan event listener klik untuk foto-foto yang baru di-render
        bindLightboxEvents();
    };

    const closeModal = () => {
        modalElement.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        const handleTransitionEnd = () => {
            modalElement.classList.remove('flex');
            modalElement.classList.add('hidden');
            modalElement.removeEventListener('transitionend', handleTransitionEnd);
        };
        modalElement.addEventListener('transitionend', handleTransitionEnd);
        if (lightbox.classList.contains('hidden')) {
            document.body.style.overflow = ''; 
        }
    };

    // Fungsi Pengendali Lightbox Perbesar Foto
    const bindLightboxEvents = () => {
        const galleryImages = modalBody.querySelectorAll('.project-gallery-img');
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                
                lightbox.classList.remove('hidden');
                lightbox.classList.add('flex');
                setTimeout(() => {
                    lightbox.classList.remove('opacity-0');
                    lightboxImg.classList.remove('scale-95');
                }, 10);
            });
        });
    };

    const closeLightbox = () => {
        lightbox.classList.add('opacity-0');
        lightboxImg.classList.add('scale-95');
        const handleLightboxTransition = () => {
            lightbox.classList.remove('flex');
            lightbox.classList.add('hidden');
            lightbox.removeEventListener('transitionend', handleLightboxTransition);
        };
        lightbox.addEventListener('transitionend', handleLightboxTransition);
    };

    // Card Trigger Events
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Close Triggers
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    modalElement.addEventListener('click', (e) => { if (e.target === modalElement) closeModal(); });
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => { if (e.target !== lightboxImg) closeLightbox(); });
    }
    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
}

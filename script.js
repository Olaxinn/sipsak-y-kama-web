// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}


// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Create WhatsApp message
        const whatsappMessage = `Merhaba, ben ${name}. ${message} Telefon: ${phone}`;
        const whatsappUrl = `https://wa.me/905342374533?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        alert('Mesajınız WhatsApp\'a yönlendiriliyor...');
        
        // Reset form
        contactForm.reset();
    });
}

// Add scroll animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .why-us-item, .process-step, .blog-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Phone number formatting (optional enhancement)
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            value = value.match(/.{1,3}/g).join(' ');
        }
        e.target.value = value;
    });
});

// Page Transition Animation
if (typeof jQuery !== 'undefined') {
    $(document).ready(function() {
        // Add page transition class to body on load
        $('body').addClass('page-content');
        
        // Handle page transitions on link clicks
        $('a[href$=".html"]').on('click', function(e) {
            const href = $(this).attr('href');
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            // Don't animate if it's the same page, external link, or anchor link
            if (href === currentPage || 
                href.startsWith('http') || 
                href.startsWith('#') ||
                $(this).hasClass('no-transition')) {
                return true;
            }
            
            e.preventDefault();
            
            // Add transition class
            $('body').addClass('page-transition');
            
            // Small delay for fade out animation
            setTimeout(() => {
                window.location.href = href;
            }, 200);
        });
    });
} else {
    // Fallback for vanilla JS
    document.addEventListener('DOMContentLoaded', function() {
        document.body.classList.add('page-content');
        
        document.querySelectorAll('a[href$=".html"]').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                
                if (href === currentPage || 
                    href.startsWith('http') || 
                    href.startsWith('#') ||
                    this.classList.contains('no-transition')) {
                    return true;
                }
                
                e.preventDefault();
                document.body.classList.add('page-transition');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 200);
            });
        });
    });
}

// jQuery Temizlik Efektleri
if (typeof jQuery !== 'undefined') {
    $(document).ready(function() {
        // Temizlik animasyonu - kartlara hover efekti
        $('.service-card, .why-us-item, .process-step').hover(
            function() {
                $(this).addClass('clean-effect');
            },
            function() {
                $(this).removeClass('clean-effect');
            }
        );

        // Scroll animasyonları - daha smooth
        $(window).on('scroll', function() {
            $('.service-card, .why-us-item, .process-step, .blog-card').each(function() {
                const elementTop = $(this).offset().top;
                const elementBottom = elementTop + $(this).outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).addClass('fade-in-up');
                }
            });
        });

        // WhatsApp butonu animasyonu
        $('.whatsapp-float').on('mouseenter', function() {
            $(this).addClass('pulse-animation');
        }).on('mouseleave', function() {
            $(this).removeClass('pulse-animation');
        });

        // Butonlara ripple efekti
        $('.btn').on('click', function(e) {
            const ripple = $('<span class="ripple"></span>');
            $(this).append(ripple);
            
            const x = e.pageX - $(this).offset().left;
            const y = e.pageY - $(this).offset().top;
            
            ripple.css({
                left: x + 'px',
                top: y + 'px'
            });
            
            setTimeout(() => ripple.remove(), 600);
        });

        // Sayfa yüklendiğinde hero animasyonu
        $('.hero-content').addClass('fade-in');
        
        // Temizlik ikonlarına animasyon
        $('.service-icon, .why-us-icon').each(function(index) {
            $(this).delay(index * 100).queue(function() {
                $(this).addClass('bounce-in').dequeue();
            });
        });
    });
}


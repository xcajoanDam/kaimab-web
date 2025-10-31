// Carrussel Minimalista per a Kaimab amb imatges BRACALET
class CarrusselKaimab {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 3;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 7000; // 7 segons
        
        this.init();
    }
    
    init() {
        this.setupImages();
        this.addEventListeners();
        this.startAutoPlay();
        this.updateSlidePosition();
    }
    
    setupImages() {
        // Configura les imatges del carrusel amb les fotos BRACALET
        const slides = document.querySelectorAll('.carousel-slide');
        const captions = [
            'BRACELET Collection',
            'BRACELET Collection', 
            'BRACELET Collection'
        ];
        
        // Afegir captions a les slides
        captions.forEach((caption, index) => {
            if (slides[index]) {
                // Assegurar que la caption existeix
                if (!slides[index].querySelector('.carousel-caption')) {
                    const captionElement = document.createElement('div');
                    captionElement.className = 'carousel-caption';
                    captionElement.textContent = caption;
                    slides[index].appendChild(captionElement);
                } else {
                    slides[index].querySelector('.carousel-caption').textContent = caption;
                }
            }
        });
    }
    
    addEventListeners() {
        // Navegació amb botons
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prevSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextSlide();
            });
        }
        
        // Navegació amb indicadors
        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Pausar amb el ratolí
        const wrapper = document.querySelector('.carousel-wrapper');
        if (wrapper) {
            wrapper.addEventListener('mouseenter', () => {
                this.pauseAutoPlay();
            });
            
            wrapper.addEventListener('mouseleave', () => {
                this.resumeAutoPlay();
            });
        }
        
        // Navegació amb teclat
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlidePosition();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlidePosition();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlidePosition();
    }
    
    updateSlidePosition() {
        const carousel = document.querySelector('.carousel');
        const indicators = document.querySelectorAll('.carousel-indicator');
        
        if (carousel) {
            // Moure el carrusel
            carousel.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        }
        
        // Actualitzar indicadors
        indicators.forEach((indicator, index) => {
            if (index === this.currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    resumeAutoPlay() {
        if (!this.autoPlayInterval) {
            this.startAutoPlay();
        }
    }
}

// Inicialitzar quan el document estigui carregat
document.addEventListener('DOMContentLoaded', () => {
    new CarrusselKaimab();
});
const modalidades = [
    {
        id: "bingo",
        titleKey: "mod_bingo_title",
        descKey: "mod_bingo_desc",
        tagKey: "mod_bingo_tag",
        color: "#ff2e9f",
        glow: "rgba(255, 46, 159, 0.4)",
        html: `
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center;">
                <div style="border: 2px dashed var(--dynamic-color); color: var(--dynamic-color); border-radius: 12px; padding: 8px; text-align: center; font-weight: 700; font-size: 18px; margin-bottom: 16px;">BINGO 75</div>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; padding: 0 8px;">
                    ${['09', '13', '21', '32', '33', '59', '04', '17', '45', '66', '72', '11'].map(n => `<div style="aspect-ratio: 1; border-radius: 50%; background: #2a2a2a; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: #888;">${n}</div>`).join('')}
                </div>
            </div>
        `
    },
    {
        id: "tradicional",
        titleKey: "mod_tradicional_title",
        descKey: "mod_tradicional_desc",
        tagKey: "mod_tradicional_tag",
        color: "#3b82f6",
        glow: "rgba(59, 130, 246, 0.4)",
        html: `
            <div style="width: 100%;">
                <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                    <div style="flex: 1; height: 60px; background: #2a2a2a; border-radius: 8px; border-bottom: 4px solid var(--dynamic-color);"></div>
                    <div style="flex: 1; height: 60px; background: #2a2a2a; border-radius: 8px; border-bottom: 4px solid #444;"></div>
                    <div style="flex: 1; height: 60px; background: #2a2a2a; border-radius: 8px; border-bottom: 4px solid #444;"></div>
                </div>
                <div style="height: 40px; background: var(--dynamic-color); border-radius: 8px; width: 60%; margin: 0 auto; opacity: 0.8;"></div>
            </div>
        `
    },
    {
        id: "2p500",
        titleKey: "mod_2p500_title",
        descKey: "mod_2p500_desc",
        tagKey: "mod_2p500_tag",
        color: "#f97316",
        glow: "rgba(249, 115, 22, 0.4)",
        html: `
            <div style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; height: 100%;">
                <div style="width: 100px; height: 100px; border-radius: 50%; border: 8px solid #2a2a2a; border-top-color: var(--dynamic-color); border-right-color: var(--dynamic-color); transform: rotate(45deg);"></div>
                <div style="font-size: 24px; font-weight: 800; color: var(--dynamic-color);">500x</div>
            </div>
        `
    },
    {
        id: "super6",
        titleKey: "mod_super6_title",
        descKey: "mod_super6_desc",
        tagKey: "mod_super6_tag",
        color: "#a855f7",
        glow: "rgba(168, 85, 247, 0.4)",
        html: `
            <div style="width: 100%;">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
                    <div style="background: #2a2a2a; border-radius: 8px; padding: 16px; text-align: center; color: #666; font-weight: 700;">1</div>
                    <div style="background: #2a2a2a; border-radius: 8px; padding: 16px; text-align: center; color: #666; font-weight: 700;">2</div>
                    <div style="background: var(--dynamic-color); border-radius: 8px; padding: 16px; text-align: center; color: white; font-weight: 700; box-shadow: 0 4px 15px var(--dynamic-glow); display: flex; flex-direction: column; align-items: center; justify-content: center;"><div style="margin-bottom: 4px;">3</div><div style="width: 20px; height: 4px; background: rgba(255,255,255,0.8); border-radius: 2px;"></div></div>
                    <div style="background: #2a2a2a; border-radius: 8px; padding: 16px; text-align: center; color: #666; font-weight: 700;">4</div>
                    <div style="background: #2a2a2a; border-radius: 8px; padding: 16px; text-align: center; color: #666; font-weight: 700;">5</div>
                    <div style="background: #2a2a2a; border-radius: 8px; padding: 16px; text-align: center; color: #666; font-weight: 700;">6</div>
                </div>
            </div>
        `
    },
    {
        id: "superfacil",
        titleKey: "mod_superfacil_title",
        descKey: "mod_superfacil_desc",
        tagKey: "mod_superfacil_tag",
        color: "#10b981",
        glow: "rgba(16, 185, 129, 0.4)",
        html: `
            <div style="width: 100%; display: flex; flex-direction: column; gap: 16px;">
                <div style="background: #2a2a2a; height: 48px; border-radius: 8px; width: 100%; display: flex; align-items: center; padding: 0 16px; gap: 12px;"><div style="width: 16px; height: 16px; border-radius: 50%; background: var(--dynamic-color);"></div><div style="height: 6px; width: 40%; background: #444; border-radius: 4px;"></div></div>
                <div style="background: #2a2a2a; height: 48px; border-radius: 8px; width: 100%; display: flex; align-items: center; padding: 0 16px; gap: 12px;"><div style="width: 16px; height: 16px; border-radius: 50%; background: #444;"></div><div style="height: 6px; width: 60%; background: #444; border-radius: 4px;"></div></div>
                <div style="height: 48px; background: var(--dynamic-color); border-radius: 8px; color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; box-shadow: 0 4px 15px var(--dynamic-glow); cursor: pointer;" data-i18n-inner="play_btn">${i18n[localStorage.getItem('index_lang')||'pt'].play_btn}</div>
            </div>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Modalidades logic
    const pills = document.querySelectorAll('.pill');
    const modTitle = document.getElementById('mod-title');
    const modDesc = document.getElementById('mod-desc');
    const modTag = document.getElementById('mod-tag');
    const modLinkText = document.getElementById('mod-link-text');
    const mockupScreen = document.getElementById('mockup-screen');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;

    function applyDynamicTheme(color, glow) {
        document.documentElement.style.setProperty('--dynamic-color', color);
        document.documentElement.style.setProperty('--dynamic-glow', glow);
    }

    function updateModalidade(index) {
        // Update Active Pill
        pills.forEach(p => p.classList.remove('active'));
        pills[index].classList.add('active');

        // Apply theme color
        applyDynamicTheme(modalidades[index].color, modalidades[index].glow);

        // Fade out slightly
        modTitle.style.opacity = 0;
        modDesc.style.opacity = 0;
        mockupScreen.style.opacity = 0;
        if(modTag) modTag.style.opacity = 0;

        const currentLang = localStorage.getItem('index_lang') || 'pt';

        setTimeout(() => {
            modTitle.textContent = i18n[currentLang][modalidades[index].titleKey];
            modDesc.textContent = i18n[currentLang][modalidades[index].descKey];
            if(modTag) modTag.textContent = i18n[currentLang][modalidades[index].tagKey];
            if(modLinkText) modLinkText.textContent = i18n[currentLang][modalidades[index].titleKey];
            
            // Set HTML mockup
            mockupScreen.innerHTML = modalidades[index].html;

            modTitle.style.opacity = 1;
            modDesc.style.opacity = 1;
            mockupScreen.style.opacity = 1;
            if(modTag) modTag.style.opacity = 1;
        }, 150);
    }

    // Initialize CSS transitions on target elements
    if(modTitle) {
        [modTitle, modDesc, mockupScreen].forEach(el => {
            if(el) el.style.transition = 'opacity 0.15s ease';
        });
        if(modTag) modTag.style.transition = 'opacity 0.15s ease';

        // Load initially
        updateModalidade(0);

        pills.forEach((pill, idx) => {
            pill.addEventListener('click', () => {
                currentIndex = idx;
                updateModalidade(currentIndex);
            });
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? modalidades.length - 1 : currentIndex - 1;
            updateModalidade(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === modalidades.length - 1) ? 0 : currentIndex + 1;
            updateModalidade(currentIndex);
        });
    }

    // Color Picker in Security Section
    const colorDots = document.querySelectorAll('.color-dot');
    const dynamicText = document.getElementById('dynamic-color-text');
    const dynamicDesktopImg = document.getElementById('dynamic-desktop-img');
    
    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            colorDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            const color = dot.getAttribute('data-color');
            if (dynamicText) dynamicText.style.color = color;
            
            const imgPath = dot.getAttribute('data-image');
            if (dynamicDesktopImg && imgPath) {
                dynamicDesktopImg.style.opacity = '0.5';
                setTimeout(() => {
                    dynamicDesktopImg.src = imgPath;
                    dynamicDesktopImg.style.opacity = '1';
                }, 150);
            }
        });
    });

    // Mobile Hamburger Menu Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if(mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close menu when clicking completely outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileBtn.querySelector('i').className = 'fa-solid fa-bars';
            }
        });
        
        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileBtn.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    // Pix Animation Logic
    const pixStates = [
        { textKey: "pix_dyn_1", defaultText: "Você depositou R$ 5.000,00", type: "send", val: 5000 },
        { textKey: "pix_dyn_2", defaultText: "Você sacou R$ 1.120,00", type: "send", val: 1120 },
        { textKey: "pix_dyn_3", defaultText: "Você recebeu R$ 8.940,00", type: "receive", val: 8940 },
        { textKey: "pix_dyn_4", defaultText: "Você recebeu R$ 340,50", type: "receive", val: 340.5 },
        { textKey: "pix_dyn_5", defaultText: "Você depositou R$ 15.000,00", type: "send", val: 15000 }
    ];
    let currentPix = 0;
    const pixMainText = document.getElementById('pix-text-main');
    const pixMainIcon = document.getElementById('pix-icon-main');
    const pixItemContainer = document.getElementById('pix-item-3');

    if (pixMainText && pixMainIcon && pixItemContainer) {
        setInterval(() => {
            currentPix = (currentPix + 1) % pixStates.length;
            const state = pixStates[currentPix];
            
            // Trigger exit animation visually
            pixItemContainer.style.transform = 'translateY(10px) scale(0.95)';
            pixItemContainer.style.opacity = '0.5';
            pixItemContainer.style.transition = 'all 0.3s ease';

            setTimeout(() => {
                const lang = localStorage.getItem('index_lang') || 'pt';
                
                // Get translated text if available, otherwise fallback
                let displayText = state.defaultText;
                if (i18n[lang] && i18n[lang][state.textKey]) {
                    displayText = i18n[lang][state.textKey];
                }

                pixMainText.textContent = displayText;
                
                if (state.type === 'receive') {
                    pixMainIcon.style.color = '#0ad17e';
                    pixMainIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="#0ad17e" width="20" height="20"><path d="M5.5 12h13a1 1 0 0 0 0-2h-13a1 1 0 0 0 0 2zM5.5 16h13a1 1 0 0 0 0-2h-13a1 1 0 0 0 0 2zM5.5 8h13a1 1 0 0 0 0-2h-13a1 1 0 0 0 0 2z"/></svg>`;
                } else {
                    pixMainIcon.style.color = '#ef4444';
                    pixMainIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="#ef4444" width="20" height="20"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>`; 
                }
                
                // Trigger enter animation
                pixItemContainer.style.transform = 'translateY(0) scale(1)';
                pixItemContainer.style.opacity = '1';
                
                // Keep the subtle breathing pulse running by clearing the inline transition after it enters
                setTimeout(() => {
                    pixItemContainer.style.transition = '';
                }, 300);

            }, 300);
        }, 4000);
    }

    // Casino Slot Machine Action
    const lever = document.getElementById('slot-lever');
    const playBtn = document.getElementById('slot-play-btn');
    const strips = [
        document.getElementById('strip-1'),
        document.getElementById('strip-2'),
        document.getElementById('strip-3')
    ];
    
    // Setup strip HTML
    const slotSymbols = ['🍒', '🍋', '🍉', '⭐', '7️⃣', '💎'];
    let stripHTML = '';
    // Generate 100 symbols per reel so it never runs out over basic spins
    for (let i = 0; i < 100; i++) {
        const sym = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
        stripHTML += `<div>${sym}</div>`;
    }
    
    if (strips[0]) {
        strips.forEach(strip => {
            strip.innerHTML = stripHTML;
            strip.dataset.position = 0;
        });
    }

    function pullLever() {
        if (!lever || lever.classList.contains('pulled')) return;
        
        lever.classList.add('pulled');
        
        strips.forEach((strip, index) => {
            let currentPos = parseInt(strip.dataset.position) || 0;
            // random steps per reel for staggered finish
            let stops = 10 + Math.floor(Math.random() * 5) + (index * 5); 
            let newPos = currentPos + stops;
            
            // Limit to our 100 pre-generated symbols maximum if spamming
            if (newPos > 85) {
                // Secretly reset transition for infinite play if we get high
                strip.style.transition = 'none';
                strip.style.transform = 'translateY(0)';
                currentPos = 0;
                newPos = stops;
                // Force reflow
                void strip.offsetHeight;
            }

            strip.dataset.position = newPos;
            
            // The duration is slightly longer per subsequent reel for the classic 1-2-3 stop
            strip.style.transition = `transform ${1.5 + (index * 0.5)}s cubic-bezier(0.15, 0.85, 0.15, 1)`;
            // 100px is the height of each div from CSS
            strip.style.transform = `translateY(-${newPos * 100}px)`;
        });

        setTimeout(() => {
            lever.classList.remove('pulled');
        }, 500); 
    }

    if (lever) lever.addEventListener('click', pullLever);
    if (playBtn) playBtn.addEventListener('click', pullLever);

    // Number Counter Animation
    const counters = document.querySelectorAll('.animate-counter');
    const observerOptions = {
        threshold: 0.8
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseFloat(target.getAttribute('data-target'));
                const isFloat = endVal % 1 !== 0;
                const prefix = target.getAttribute('data-prefix') || '';
                const suffix = target.getAttribute('data-suffix') || '';
                
                let startVal = 0;
                const duration = 2000;
                const startTime = performance.now();

                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const easeOutProgress = progress * (2 - progress);
                    
                    const currentVal = (endVal * easeOutProgress);
                    
                    if (progress < 1) {
                        let formattedVal;
                        if (isFloat) {
                            formattedVal = currentVal.toFixed(1);
                        } else {
                            formattedVal = Math.ceil(currentVal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                        }
                        target.textContent = prefix + formattedVal + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        let finalFormatted;
                        if (isFloat) {
                            finalFormatted = endVal.toFixed(1);
                        } else {
                            finalFormatted = endVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                        }
                        target.textContent = prefix + finalFormatted + suffix;
                    }
                };
                
                requestAnimationFrame(updateCounter);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Bento Items Scroll Animation
    const bentoItems = document.querySelectorAll('.bento-item');
    const bentoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); // Stagger effect
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    bentoItems.forEach((item, index) => {
        bentoObserver.observe(item);
    });

    // Language Switcher Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    const i18nElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        // Save to localStorage
        localStorage.setItem('index_lang', lang);

        // Update active class on buttons
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

        // Update Title
        if (i18n[lang].doc_title) {
            document.title = i18n[lang].doc_title;
        }

        // Update all translated elements
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                // If the element is a heading or paragraph, just replace text
                // But keep icons if they exist (though we wrapped icons outside in most cases)
                // If there's an icon inside, it's usually at the end.
                // For simplicity, we only replace the text content of elements that don't have nested HTML tags or we target the span specifically.
                // In my implementation, I tried to wrap text in <span> if it had icons.
                el.innerHTML = i18n[lang][key];
            }
        });

        // Update dynamic sections (current modalidade)
        updateModalidade(currentIndex);
    }

    // Event listeners for language buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Initialize language on load
    const savedLang = localStorage.getItem('index_lang') || 'pt';
    setLanguage(savedLang);

    // Global Lead Modal Logic
    const leadModal = document.getElementById('leadModal');
    const closeLeadModal = document.getElementById('closeLeadModal');
    const leadForm = document.getElementById('leadForm');

    // Select all primary CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-primary-nav');

    function openLeadModal(e) {
        if (e) e.preventDefault();
        leadModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background scroll
    }

    function closeLeadModalFn() {
        leadModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Attach listener to all CTA buttons
    ctaButtons.forEach(btn => {
        // Excluimos botões que são links âncoras locais ou que tem outras funções se quisermos,
        // mas a regra pediu: "Qualquer botão clicado no site abre o mesmo popup"
        btn.addEventListener('click', openLeadModal);
    });

    closeLeadModal.addEventListener('click', closeLeadModalFn);

    leadModal.addEventListener('click', (e) => {
        if (e.target === leadModal) {
            closeLeadModalFn();
        }
    });

    // Handle Form Submission
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('leadName').value.trim();
        const company = document.getElementById('leadCompany').value.trim();
        const phone = document.getElementById('leadPhone').value.trim();
        const msg = document.getElementById('leadMessage').value.trim();

        // Construir string
        let text = "Olá, quero integrar o sportsbook:\n\n";
        text += `Nome: ${name}\n`;
        text += `Empresa: ${company}\n`;
        text += `Telefone: ${phone}\n`;
        if (msg) {
            text += `Mensagem: ${msg}\n`;
        }

        const encodedText = encodeURIComponent(text);
        const wanumber = "557996284593";
        const wappUrl = `https://wa.me/${wanumber}?text=${encodedText}`;

        // Abrir whatsapp
        window.open(wappUrl, '_blank');

        // Limpar e fechar
        leadForm.reset();
        closeLeadModalFn();
    });

    // Footer Year
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Cookie Banner
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');

    if (cookieBanner) {
        if (!localStorage.getItem('cookieConsent')) {
            setTimeout(() => {
                cookieBanner.classList.add('active');
            }, 2000);
        }

        acceptCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('active');
        });

        declineCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.classList.remove('active');
        });
    }

});

// Enhanced tech stack display with better formatting
document.addEventListener('DOMContentLoaded', () => {
    // Curated tech stack with improved categorization
    const techStack = [
        // AI & ML
        { name: 'Python', icon: '🐍', category: 'core', description: 'ML & Backend' },
        { name: 'PyTorch', icon: '🧠', category: 'ai', description: 'Deep Learning' },
        { name: 'TensorFlow', icon: '🤖', category: 'ai', description: 'ML Framework' },
        { name: 'Transformers', icon: '🔥', category: 'ai', description: 'NLP Models' },
        { name: 'Hugging Face', icon: '🤗', category: 'ai', description: 'AI Hub' },
        { name: 'OpenAI', icon: '🚀', category: 'ai', description: 'AI APIs' },
        
        // Frontend & Backend
        { name: 'JavaScript', icon: '⚡', category: 'frontend', description: 'Frontend' },
        { name: 'React', icon: '⚛️', category: 'frontend', description: 'UI Library' },
        { name: 'Node.js', icon: '🟢', category: 'backend', description: 'Backend Runtime' },
        
        // Databases
        { name: 'MongoDB', icon: '🍃', category: 'database', description: 'Database' },
        { name: 'MySQL', icon: '🗄️', category: 'database', description: 'SQL Database' },
        
        // DevOps & Tools
        { name: 'Git', icon: '📝', category: 'tools', description: 'Version Control' },
        { name: 'Docker', icon: '🐳', category: 'devops', description: 'Containers' },
        { name: 'AWS', icon: '☁️', category: 'cloud', description: 'Cloud Services' },
        { name: 'n8n', icon: '📊', category: 'automation', description: 'Automation' },
        { name: 'Netlify', icon: '🌍', category: 'hosting', description: 'Hosting' }
    ];

    const techStackGrid = document.getElementById('techStackGrid');
    
    if (!techStackGrid) {
        console.warn('Tech stack grid element not found');
        return;
    }

    // Clear any existing content
    techStackGrid.innerHTML = '';
    
    // Create tech stack items with enhanced formatting
    techStack.forEach((tech, index) => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-stack-item fade-in';
        techItem.setAttribute('data-category', tech.category);
        techItem.style.animationDelay = `${index * 0.08}s`;
        
        // Enhanced HTML structure for better formatting
        techItem.innerHTML = `
            <span class="tech-stack-icon" role="img" aria-label="${tech.name} icon">
                ${tech.icon}
            </span>
            <span class="tech-stack-name">${tech.name}</span>
        `;
        
        // Add hover tooltip with description
        techItem.setAttribute('title', `${tech.name} - ${tech.description}`);
        
        techStackGrid.appendChild(techItem);
    });
    
    // Enhanced animation trigger with staggered effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const techStackObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add a subtle pulse effect after appearing
                setTimeout(() => {
                    entry.target.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        entry.target.style.transform = '';
                    }, 200);
                }, parseInt(entry.target.style.animationDelay) * 1000 + 300);
            }
        });
    }, observerOptions);
    
    // Observe all tech stack items
    document.querySelectorAll('.tech-stack-item').forEach(item => {
        techStackObserver.observe(item);
    });
    
    // Fallback animation trigger
    setTimeout(() => {
        document.querySelectorAll('.tech-stack-item:not(.visible)').forEach(el => {
            el.classList.add('visible');
        });
    }, 500);
});

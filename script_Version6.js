// Crear mariposas al cargar
for (let i = 0; i < 8; i++) {
    let butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.innerHTML = '🦋';
    butterfly.style.left = Math.random() * 100 + '%';
    butterfly.style.top = Math.random() * 100 + '%';
    butterfly.style.animationDelay = Math.random() * 2 + 's';
    butterfly.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(butterfly);
}

// Posicionar botón NO inicialmente
window.addEventListener('load', () => {
    posicionarBotonNo();
});

window.addEventListener('resize', () => {
    if (document.getElementById('pregunta').style.display !== 'none') {
        posicionarBotonNo();
    }
});

function posicionarBotonNo() {
    const btnNo = document.getElementById('btnNo');
    const botones = document.querySelector('.botones');
    const rect = botones.getBoundingClientRect();
    
    btnNo.style.left = (rect.left + rect.width/2 + 85) + 'px';
    btnNo.style.top = (rect.top + rect.height/2 - btnNo.offsetHeight/2) + 'px';
}

function moverBoton(event) {
    event.preventDefault();
    const btn = document.getElementById('btnNo');
    
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    
    const newX = Math.max(20, Math.min(Math.random() * (window.innerWidth - btn.offsetWidth - 40), maxX));
    const newY = Math.max(20, Math.min(Math.random() * (window.innerHeight - btn.offsetHeight - 40), maxY));
    
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}

function responderSi() {
    document.getElementById('pregunta').style.display = 'none';
    document.getElementById('respuesta').style.display = 'block';
    
    document.querySelectorAll('.butterfly').forEach(b => b.remove());
    
    // Crear corazones cayendo
    setInterval(() => {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = ['💖', '💕', '💗', '💓', '💝'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }, 300);
}
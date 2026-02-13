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

function moverBoton(event) {
    event.preventDefault();
    const btn = document.getElementById('btnNo');
    
    // Agregar clase moviendo y convertir a fixed en el primer toque
    if (!btn.classList.contains('moviendo')) {
        const rect = btn.getBoundingClientRect();
        btn.classList.add('moviendo');
        btn.style.left = rect.left + 'px';
        btn.style.top = rect.top + 'px';
    }
    
    // Mover a posición aleatoria después de un momento
    setTimeout(() => {
        const maxX = window.innerWidth - btn.offsetWidth - 20;
        const maxY = window.innerHeight - btn.offsetHeight - 20;
        
        const newX = Math.max(20, Math.min(Math.random() * (window.innerWidth - btn.offsetWidth - 40), maxX));
        const newY = Math.max(20, Math.min(Math.random() * (window.innerHeight - btn.offsetHeight - 40), maxY));
        
        btn.style.left = newX + 'px';
        btn.style.top = newY + 'px';
    }, 10);
}

function responderSi() {
    // Ocultar pregunta
    document.getElementById('pregunta').style.display = 'none';
    
    // Mostrar respuesta con clase
    const respuesta = document.getElementById('respuesta');
    respuesta.classList.add('mostrar');
    
    // Quitar mariposas
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

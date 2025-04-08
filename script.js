// Datos del alfabeto
const alphabet = [
    { letter: 'A', word: 'Avión', image: 'avion.jpg' },
    { letter: 'B', word: 'Barco', image: 'barco.jpg' },
    { letter: 'C', word: 'Casa', image: 'casa.jpg' },
    // ... Añadir el resto de letras
];

// Función para generar un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para generar los tres colores aleatorios requeridos
function getThreeRandomColors() {
    return [
        getRandomColor(),
        getRandomColor(),
        getRandomColor()
    ];
}

// Función para crear una tarjeta de letra
function createLetterCard(item) {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.innerHTML = `
        <div class="letter-content">
            <h2 class="letter">${item.letter}</h2>
            <h3 class="word">${item.word}</h3>
        </div>
        <div class="image-container">
            <img src="images/${item.image}" alt="${item.word}" class="letter-image">
        </div>
    `;

    // Añadir evento de click para cambiar colores
    card.addEventListener('click', function() {
        const [color1, color2, color3] = getThreeRandomColors();
        
        // Aplicar los tres colores a diferentes partes de la tarjeta
        card.style.backgroundColor = color1;
        card.querySelector('.letter').style.color = color2;
        card.querySelector('.word').style.color = color3;
    });

    return card;
}

// Función para inicializar la página
function initializeAlphabet() {
    const container = document.getElementById('alphabet-container');
    
    // Crear y añadir cada tarjeta
    alphabet.forEach(item => {
        const card = createLetterCard(item);
        container.appendChild(card);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeAlphabet);
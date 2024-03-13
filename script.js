document.addEventListener('DOMContentLoaded', function() {
    // Attend que le document HTML soit entièrement chargé avant d'exécuter le code

    const colorBox = document.getElementById('color-box'); // Sélectionne l'élément avec l'identifiant 'color-box'
    const changeColorBtn = document.getElementById('change-color-btn'); // Sélectionne le bouton pour changer la couleur

    function getRandomColor() {
        // Fonction pour générer une couleur aléatoire
        return '#' + Math.floor(Math.random()*16777215).toString(16); // Génère une couleur au format hexadécimal
    }

    changeColorBtn.addEventListener('click', function() {
        // Ajoute un écouteur d'événement au clic sur le bouton pour changer la couleur
        colorBox.style.backgroundColor = getRandomColor(); // Change la couleur de fond du color-box avec une couleur aléatoire
    });
});

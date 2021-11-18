// JavaScript Document

// Slide out menu for mobile bron: https://codepen.io/chrismademe/pen/bEMQbK
document.addEventListener('DOMContentLoaded', function() {
    var menu, toggleButton, closeButton;
    // Set Elements
    menu = document.querySelector("header nav");
    toggleButton = document.getElementById('slideout-toggle');
    closeButton = document.getElementById('slideout-close');
    // Toggle Menu
    toggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle('is-open');
    });

    // Close Menu
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.remove('is-open');
    });
});
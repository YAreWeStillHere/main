document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        
        // Pārbaude, vai ir ievadīti vārds un uzvārds
        if (firstName && lastName) {
            // Pārvirzīt uz jauno lapu
            window.location.href = "secondpage.html";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const applyVisitButton = document.getElementById("apply-visit");
    
    applyVisitButton.addEventListener("click", function () {
        window.location.href = "pieteiktapmeklejumu.html";
    });
});

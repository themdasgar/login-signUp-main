function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";  // Show password
    } else {
        passwordField.type = "password"; // Hide password
    }
}






function searchHostel() {

    let input = document
        .getElementById("searchInput")
        .value.toLowerCase();

    let cards = document.querySelectorAll(".hostel-card");

    let found = 0;

    cards.forEach(function(card) {

        let hostelName = card.innerText.toLowerCase();

        if (hostelName.includes(input)) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }

    });

    document.getElementById("noResult").innerText =
        found === 0 ? "No hostel found!" : "";

}

function bookHostel(hostelName) {

    alert(
        "You selected: " + hostelName +
        "\nThank you for your interest!"
    );

}

document.addEventListener('DOMContentLoaded', function () {
    // Select all membership boxes
    const membershipBoxes = document.querySelectorAll('.membership-box');

    // Create a background overlay for dimming effect
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    // Add click event listener to each membership box
    membershipBoxes.forEach(box => {
        box.addEventListener('click', function () {
            // Remove enlarge class from any box that might have it
            document.querySelectorAll('.membership-box.enlarged').forEach(el => {
                el.classList.remove('enlarged');
            });

            // Add enlarge class to the clicked box
            this.classList.add('enlarged');

            // Display the background overlay
            overlay.style.display = 'block';
        });
    });

    // Add click event listener to the overlay to close the enlarged box
    overlay.addEventListener('click', function () {
        // Remove enlarge class from all boxes
        membershipBoxes.forEach(box => {
            box.classList.remove('enlarged');
        });

        // Hide the background overlay
        overlay.style.display = 'none';
    });
});


function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}
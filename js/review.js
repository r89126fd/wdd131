function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function updateReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');

    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }

    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    return reviewCount;
}

function displayReviewInfo() {
    const productName = getUrlParameter('productName');
    const rating = getUrlParameter('rating');
    const installDate = getUrlParameter('installDate');

    // Get product name from ID
    const product = products.find(p => p.id === productName);
    const productNameDisplay = product ? product.name : productName;

    // Display the information
    document.getElementById('productDisplay').textContent = productNameDisplay;
    document.getElementById('ratingDisplay').textContent = rating + ' stars';
    document.getElementById('dateDisplay').textContent = installDate;

    // Update and display review count
    const count = updateReviewCounter();
    document.getElementById('reviewCount').textContent = count;
}

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', function () {
    displayReviewInfo();
});
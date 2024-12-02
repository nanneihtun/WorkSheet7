// Set the expiration date for the offer (7 days from today)
const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 7); // Adds 7 days

// Display the expiration date in the correct format
const offerExpiryElement = document.getElementById("offer-expiry");
offerExpiryElement.innerText = `This offer expires on: ${expirationDate.toDateString()}`;

// Show the help box after 60 seconds (60000 milliseconds)
setTimeout(() => {
  const helpBox = document.getElementById("help-box");
  helpBox.style.display = "block"; 

  // Hide the help box after another 60 seconds 
  setTimeout(() => {
    helpBox.style.display = "none"; 
  }, 60000); // Hide after 1 minute
}, 60000); // Show after 1 minute

// Images array with proper paths
let images = [
  "images/pexels-tonywuphotography-5538678.jpg",
  "images/kuthodaw-pagoda-5632067_1280.jpg",
  "images/pexels-erwan-grey-33203471-20565268.jpg",
  "images/pexels-tonywuphotography-8161523.jpg",
  "images/pexels-tonywuphotography-8161525.jpg",
];

let currentImageIndex = 0;

// Function to show the image based on the index
function showImage(index) {
  const imageElement = document.getElementById("slider-image");
  imageElement.src = images[index]; 
}

// Function to go to the previous image
function prevImage() {
  currentImageIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  showImage(currentImageIndex);
}

// Function to go to the next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

// Initially load the first image
showImage(currentImageIndex);


// Open the modal
function openModal() {
  document.getElementById("bookNowModal").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("bookNowModal").style.display = "none";
}

// Trigger the modal when the button is clicked
function bookPackage(packageName) {
  openModal(); 
  
  document.getElementById('message').value = `I'm interested in booking the ${packageName} tour.`;
}

// Function to dynamically apply the discount
function applyDiscount() {

  const discountPercentage = 20; 


  const originalPrices = document.querySelectorAll('.original-price');
  const discountedPrices = document.querySelectorAll('.discounted-price');

  originalPrices.forEach((originalPrice, index) => {

    const originalPriceValue = parseFloat(originalPrice.getAttribute('data-original-price'));

    const discountedPriceValue = originalPriceValue * (1 - discountPercentage / 100); // Apply discount

    discountedPrices[index].innerText = `$${discountedPriceValue.toFixed(2)}`;

    originalPrice.style.textDecoration = 'line-through';
    originalPrice.style.color = '#888'; // Light gray color for the strikethrough
  });
}

window.onload = applyDiscount;

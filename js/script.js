
document.addEventListener("DOMContentLoaded", function () {
 var productLink = document.querySelector('.navs-products[href="products.html"]');
 var productHover = document.getElementById('product-hover-div');
 var timeoutId;

 // Use mouseover and mouseleave on the productLink and productHover
 productLink.addEventListener("mouseover", function () {
     clearTimeout(timeoutId);
     productHover.style.display = 'block';
 });

 productLink.addEventListener("mouseleave", function () {
     timeoutId = setTimeout(function () {
         productHover.style.display = 'none';
     }, 1100);
 });

 productHover.addEventListener("mouseover", function () {
     clearTimeout(timeoutId);
 });

 productHover.addEventListener("mouseleave", function () {
     timeoutId = setTimeout(function () {
         productHover.style.display = 'none';
     }, 1100);
 });
 window.addEventListener('scroll', function() {
 // Check the scroll position or any other condition you need
 // For example, let's assume you want to hide productHover when the user scrolls down by 200 pixels
 if (window.scrollY > 200) {
     // Set the display property to 'none'
     productHover.style.display = 'none';
 } else {
     // Set the display property to its default value (e.g., 'block' or '')
     productHover.style.display = '';
 }
});
});

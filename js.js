window.addEventListener('scroll', function() {
    const navbar = document.getElementById('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.getElementById('hamburger').addEventListener('click', function() {
    const navList = document.getElementById('list');
    navList.classList.toggle('active');
  });
  var navItems = document.querySelectorAll('.listItem a');
  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var navLists = document.getElementById('list');
      navLists.classList.remove('active');
    });
  });
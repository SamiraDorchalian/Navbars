const bodyEl = document.querySelector("body");
bodyEl.innerHTML = `
    <div id="header">
      <div class="logo">
        <a href="#">Responsive Nav</a>
      </div>
      <nav>
        <form class="search" action="search.php">
          <input name="q" placeholder="Search..." type="search" />
        </form>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
            <ul class="mega-dropdown">
              <li class="row">
                <ul class="mega-col">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Info</a></li>
                  <li><a href="#">Gmail</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <ul class="mega-col">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Services</a></li>
                </ul>
                <ul class="mega-col">
                  <li><a href="#">Coming Soon</a></li>
                  <li><a href="#">404 Error</a></li>
                  <li><a href="#">Search</a></li>
                  <li><a href="#">Author Page</a></li>
                </ul>
                <ul class="mega-col">
                  <li><a href="#">Full Width</a></li>
                  <li><a href="#">Right Column</a></li>
                  <li><a href="#">Left Column</a></li>
                  <li><a href="#">Maintenance</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="">CONTACT</a>
            <ul>
              <li><a href="#">About Version</a></li>
              <li><a href="#">Phone</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contact Manager</a></li>
            </ul>
          </li>
          <li>
            <a href="">PORTFOLIO</a>
          </li>
          <li>
            <a href="">TEAM</a>
          </li>
        </ul>
      </nav>
    </div>
`;

$("#header").prepend(
  '<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>'
);
$("#menu-icon").on("click", function () {
  $("nav").slideToggle();
  $(this).toggleClass("active");
});

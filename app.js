const headerSearch = document.querySelector('.header__search');
        const headerSearchActive = document.querySelector('.header__search.active');
        const searchIcon = document.querySelector('.header__search-icon');
        const closeSearchIcon = document.querySelector('.header__search-close')
        const headerNavbar = document.querySelector('.header__navbar');
        const headerMenuBtn = document.querySelector('.header__menu-btn');
        const closeNavMenu = document.querySelector('.header__navbar-close');

        searchIcon.onclick = function() {
            headerSearch.classList.toggle('active');
        };

        closeSearchIcon.onclick = function() {
            headerSearch.classList.remove('active');
        }


        headerMenuBtn.onclick = function() {
            headerNavbar.classList.toggle('active-on-mobile');
        }

        closeNavMenu.onclick = function() {
            headerNavbar.classList.remove('active-on-mobile');
        }

        const sidebarFilterList = document.querySelectorAll('.product__sidebar-filter-link');

        sidebarFilterList.forEach((item, index) => {
            item.addEventListener('click', function() {
                document.querySelector('.product__sidebar-filter-link.active').classList.remove('active');
                this.classList.add('active');
            });
        });

        $('.owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
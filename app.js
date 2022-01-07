const navigation = function () {

    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.navbar li');

    burger.addEventListener('click', function(){
        //toggle nav
        navbar.classList.toggle('nav-active');
        //animation
        navItems.forEach(function(link, index){   //taking the all links each and its index with for each
           if (link.style.animation){
               link.style.animation = '';
               } 
               else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
        
        });

        // burger animation

        burger.classList.toggle('toggle');

    });

}

navigation();
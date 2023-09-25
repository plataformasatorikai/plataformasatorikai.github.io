		// nav background
        let header = document.querySelector("header");
	
        window.addEventListener("scroll", () => {
            header.classList.toggle("shadow", window.scrollY > 0)
        })
        
        //Filter
        $(document).ready(function () {
            $(".filter-item").click(function () {
                const value = $(this).attr("data-filter");
                if (value == "all"){
                    $(".post-box").show("1000")
                } else{
                    $(".post-box")
                        .not("." + value)
                        .hide(1000);
                    $(".post-box")
                    .filter("." + value)
                    .show("1000")
                }
            });
            $(".filter-item").click(function () {
                $(this).addClass("active-filter").siblings().removeClass("active-filter")
            });
        });

        /*=============== SHOW SOCIAL NETWORKS ===============*/
const showSocial = (toggleCard, socialCard) =>{
    const toggle = document.getElementById(toggleCard),
          social = document.getElementById(socialCard)
    
    toggle.addEventListener('click', ()=>{
        // If the animation class exists, we add the down-animation class
        if(social.classList.contains('animation')){
            social.classList.add('down-animation')
 
            // We remove the down-animation class
            setTimeout(() =>{
                social.classList.remove('down-animation')
            }, 1000)
        }
 
        // We add the animation class to the div tag with the card__social class
        social.classList.toggle('animation')
    })
 }
 showSocial('card-toggle','card-social')
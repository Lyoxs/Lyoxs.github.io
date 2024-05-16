document.addEventListener('DOMContentLoaded', function() {

    // Get the current year

    let diesesjahr = new Date().getFullYear();
    let getyeardate = document.getElementById("getyeardate");
    getyeardate.innerHTML = diesesjahr;

    // Get the current date and time on click
    //UHR########################

    let intervalId;
    let clicked = false;
    if(getyeardate){
        getyeardate.onclick = function() {
            clicked = true;
            date = new Date();
            currentDateTime = date.toLocaleTimeString();
            getyeardate.innerHTML = diesesjahr +"  " + currentDateTime;
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
                getyeardate.classList.remove("active");
            } else {
                getyeardate.classList.add("active");
                intervalId = setInterval(function() {
                    date = new Date();
                    currentDateTime = date.toLocaleTimeString(); // Get the updated current time
                    getyeardate.innerHTML = diesesjahr +"  " + currentDateTime; // Display the current time
                }, 1000);
            }
            if (clicked && !intervalId) {
                getyeardate.innerHTML = diesesjahr;
            }
        }
    }

    //background menu image transform on scroll

    // window.addEventListener('scroll', function() {
    //     let scrollPosition = window.scrollY;
    //     let menu = document.getElementById("menu-scroll");
    //     menu.style.backgroundPosition = "center " + (scrollPosition / 20 + 10) + "%";
    // });

    // header/img scroll #############################

    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        let img = document.querySelectorAll(".img-scroll");
        let heading = document.querySelectorAll(".heading-scroll");
        if(heading || img){
            img.forEach(e => {
                if (scrollPosition <= 220) {
                    e.style.transform = "translateY(" + (-scrollPosition / 30) + "%)";
                }
            });
            heading.forEach(e => {
                if (scrollPosition <= 220) {
                    e.style.transform = "translateY(" + (-scrollPosition / 2.5) + "px)";
                }
            });
        }
    });

    // cool word animation #############################
    

    const letters = "MAIKROWAVELOVESYOU";
    let ueberschrift = document.getElementById("text-change");
    let iteration = 0;

    function animateText() {
        if(ueberschrift){
            let interval = setInterval(() => {
                ueberschrift.innerText = ueberschrift.innerText
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return ueberschrift.dataset.value[index];
                        }
    
                        return letters[Math.floor(Math.random() * 10)];
                    })
                    .join("");
                iteration += 1 / 4;
                if(iteration >= ueberschrift.dataset.value.length) {
                    clearInterval(interval);
                }
            }, 30);
        }
    }

    animateText();

    // ueberschrift.addEventListener('mouseover', function() {
    //     iteration = 0;
    //     animateText();
    // });

    // links blob animation #############################

    let links = document.querySelectorAll(".links");
    if (links) {
        links.forEach(link => {
            link.addEventListener('mouseenter', function(event) {
                let entryX = event.clientX - link.getBoundingClientRect().left;
                let entryY = event.clientY - link.getBoundingClientRect().top;
                let blob = link.querySelector(".blob");
                blob.style.left = entryX + "px";
                blob.style.top = entryY + "px";
            });
        });
        links.forEach(link => {
            link.addEventListener('mouseout', function(event) {
                let entryX = event.clientX - link.getBoundingClientRect().left;
                let entryY = event.clientY - link.getBoundingClientRect().top;
                let blob = link.querySelector(".blob");
                blob.style.left = entryX + "px";
                blob.style.top = entryY + "px";
            });
        });
    }

    // social on scroll flow #############################

    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        let social = document.getElementById("socials-scroll");
        let bottomValue = (-scrollPosition/20 + 10);
        if(social){
            social.style.bottom = bottomValue < 1 ? "1%" : bottomValue + "%";
        }
    });

    // cursor stuff #############################

    const imgmain = document.getElementById("img-scroll");
    const cursor = document.getElementById("cursor-point");

    window.onpointermove = event => {
        let { clientX, clientY } = event;
        if(imgmain){
            imgmain.animate({
                left: `${Math.min(clientX/20, 120)}px`,
                top: `${Math.min(clientY/20, 120)}px`
                }, { duration: 3000, fill: "forwards" });
        }
        if(cursor){
            cursor.animate({
                left: `${clientX-10}px`,
                top: `${clientY-10}px`
            }, { duration: 750, fill: "forwards" });
        }
    };

    // Add event listener to handle hover over iframe

    document.addEventListener('mouseover', function(event) {
        if (event.target.tagName === 'IFRAME') {
            cursor.classList.add("hidden");
        } else {
            cursor.classList.remove("hidden");
        }
    });

    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
        scrollers.forEach((scroller) => {

            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".events");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
            });
        });
    }
    addAnimation();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                // console.log("in-view");
            }else{
                // entry.target.classList.remove("in-view");
                // console.log("deleted in-view");
            }
        });
    },
    { threshold: 0, rootMargin: "100px 0px -100px 0px" });

    const animatedelements = document.querySelectorAll(".animate");
    animatedelements.forEach((e) => {
        observer.observe(e);
    });

    let currentUrl = window.location.href;
    if (currentUrl.includes("easteregg")) {
        txt = "a";
        while(1){
            txt = txt += "a";
            console.log("crash initialized !");
        }
    }

    console.log(
        '%cMAIKROWAVELOVESYOU',
        'color: #FF006D; background: black; padding: 10px; font-size:25px; font-family: sans-serif;'
      );
});
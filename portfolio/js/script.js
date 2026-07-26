/* ===========================
   LOADING SCREEN
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.transition = "0.6s";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});


/* ===========================
   TYPING EFFECT
=========================== */

const text = "PORTFOLIO PRIBADI";

const typing = document.getElementById("typing");

let index = 0;

function ketik(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(ketik,100);

    }

}

ketik();


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ===========================
   SCROLL PROGRESS BAR
=========================== */

window.addEventListener("scroll",()=>{

    const winScroll=document.body.scrollTop||

    document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    const scrolled=(winScroll/height)*100;

    document.getElementById("progressBar").style.width=scrolled+"%";

});


/* ===========================
   SCROLL TO TOP
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ===========================
   NAVBAR SCROLL EFFECT
=========================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="rgba(15,23,42,.92)";

        navbar.style.padding="10px 0";

    }

    else{

        navbar.style.background="rgba(15,23,42,.65)";

        navbar.style.padding="18px 0";

    }

});


/* ===========================
   ACTIVE NAVBAR
=========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ===========================
   REVEAL ON SCROLL
=========================== */

const reveal=document.querySelectorAll("section");

function tampilkan(){

    reveal.forEach(item=>{

        const posisi=item.getBoundingClientRect().top;

        const tinggi=window.innerHeight-120;

        if(posisi<tinggi){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

reveal.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(60px)";

    item.style.transition=".8s";

});

window.addEventListener("scroll",tampilkan);

tampilkan();


/* ===========================
   RIPPLE BUTTON EFFECT
=========================== */

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const lingkaran=document.createElement("span");

        const diameter=Math.max(this.clientWidth,this.clientHeight);

        lingkaran.style.width=diameter+"px";

        lingkaran.style.height=diameter+"px";

        lingkaran.style.left=e.offsetX-diameter/2+"px";

        lingkaran.style.top=e.offsetY-diameter/2+"px";

        lingkaran.classList.add("ripple");

        const ripple=this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(lingkaran);

    });

});


/* ===========================
   COUNTER
=========================== */

const counters=document.querySelectorAll(".counter");

const speed=80;

function jalankanCounter(){

    counters.forEach(counter=>{

        const update=()=>{

            const target=+counter.getAttribute("data-target");

            const angka=+counter.innerText;

            const increment=target/speed;

            if(angka<target){

                counter.innerText=Math.ceil(angka+increment);

                setTimeout(update,20);

            }

            else{

                counter.innerText=target;

            }

        }

        update();

    });

}


/* ===========================
   PROGRESS BAR SKILL
=========================== */

const skills=document.querySelectorAll(".skill-progress");

function jalankanSkill(){

    skills.forEach(skill=>{

        const persen=skill.getAttribute("data-width");

        skill.style.width=persen;

    });

}


/* ===========================
   OBSERVER
=========================== */

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            jalankanCounter();

            jalankanSkill();

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    observer.observe(sec);

});
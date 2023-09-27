<script>
    // @ts-nocheck
  
    import { page } from "$app/stores";
    import { onMount, onDestroy } from "svelte";
  
    // @ts-ignore
    let routeId;
    $: routeId = $page.route.id;
  
    let isMobile = false;
    let isMenuOpen = false;
  
    onMount(() => {
      checkViewport();
      window.addEventListener("resize", checkViewport);
      window.addEventListener("click", closeMenu);
  
      // add stopPropagation to all links inside the dropdown menu
      const dropdownLinks = document.querySelectorAll('.dropdown-content a');
      dropdownLinks.forEach(link => link.addEventListener('click', (e) => e.stopPropagation()));
  
      return () => {
        window.removeEventListener("resize", checkViewport);
        window.removeEventListener("click", closeMenu);
        dropdownLinks.forEach(link => link.removeEventListener('click', (e) => e.stopPropagation()));
      };
    });
  
    function checkViewport() {
      isMobile = window.innerWidth < 1200;
      const logoContainer = document.querySelector('.logo-container');
      logoContainer.style.marginLeft = isMobile ? '2vw' : '15vw';
    }
  
    function toggleMenu(event) {
      event.stopPropagation(); // Prevent click event from bubbling up to the window
      isMenuOpen = !isMenuOpen;
    }
  
    function closeMenu() {
      isMenuOpen = false;
    }
  </script>
  
  <header>
    <div class="logo-container">
      <a href="/" class="logo">
        <img src="/images/phoenix.svg" alt="its da logo">
      </a>
  
      <a id="logo-word" href="/"> DualLink</a>
    </div>
    {#if isMobile}
    <!-- Hide navigation elements on mobile -->
    {:else}
    <!-- Show navigation elements on desktop -->
    <nav>
      <ul>
        <li><a href="/" class:active={routeId === "/"}  id="underline_home">Home</a></li>
        <li><a href="/courses"  class:active={routeId === "/courses"} id="underline_courses">Courses</a></li>
        <li><a href="/GPA" class:active={routeId === "/GPA"}  id="underline_gpa"> GPA </a></li>
        <li><a href="/advice" class:active={routeId === "/advice"}  id="underline_advice">Advice</a></li>
        <li><a href="/about" class:active={routeId === "/about"}  id="underline_about">About Us</a></li>
      </ul>
    </nav>
    {/if}
  
    {#if isMobile}
  
    <div class="dropdown-container">
      <button class="dropbtn" on:click={toggleMenu}>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </button>
      <div class="dropdown-content" class:open={isMenuOpen}>
  
        <div class="logo-container">
  
          <img src="/images/phoenix.svg" alt="its da logo">
  
          <a href="/">CWHS Dual Link</a>
        </div>
  
        <a href="/" class:active={routeId === "/"}  id="underline_home">Home</a>
        <a href="/courses"  class:active={routeId === "/library"} id="underline_courses">Courses</a>
        <a href="/GPA" class:active={routeId === "/GPA"}  id="underline_gpa"> GPA</a>
        <a href="/advice" class:active={routeId === "/advice"}  id="underline_advice">Advice</a>
        <a href="/about" class:active={routeId === "/about"}  id="underline_about">About Us</a>
      </div>
    </div>
    {/if}
  </header>
  
  <div class="bars">
    <hr class="rounded">
  </div>
  
  <style>

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
    }
  
    img {
      width: 4rem;
      height: 4rem;
    }
  
    header {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;

    }
  
    .logo-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }
   
  
    .logo-container a {
      margin: 0;
      text-decoration: none;
      
     
    }

    #logo-word {
      border-bottom: 2px solid #EEBC1D; 
      text-decoration: none; 
      padding-bottom: 2.5px;
      font-family: 'Open Sans', sans-serif;
      color: black;
      font-weight: bolder;
    

    }
  
    .dropdown-container {
      display: flex;
      align-items: center;
    }
  
    .dropbtn > .line {
      width: 30px;
      height: 2px;
      margin: 6px 0;
      background: #212526;
      text-decoration: none;
    }
  
    .dropdown-content {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 60%;
      transform: translateX(-100%);
      transition: transform 0.3s ease-out;
      z-index: 10;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
      gap: 3rem;
    }
  
    .dropdown-content.open {
      transform: translateX(0);
    }
  
    nav ul {
      display: flex;
      justify-content: space-between;
      gap: calc(3vw + 10px);
      margin-right:calc(11vw - 100px);
    }
  
    nav ul li a {
           color: #EEBC1D;
           display: block;
           margin: 0 2px;
           padding: 8px 18px;
           transition: 0.2s;
           border-radius: 30px;
           font-family: sans-serif;
           font-weight: bolder;
         }
  
         .dropdown-content a {
            font-weight: bolder;
            font-family: sans-serif;
            color: #EEBC1D;
    
    
         }
  
   
  
    #underline_home:not(.active)::after,
         #underline_courses:not(.active)::after,
         #underline_advice:not(.active)::after,
         #underline_about:not(.active)::after,
         #underline_gpa:not(.active)::after {
           content: '';
           width: 0;
           height: 2px;
           background-color: black !important;
           margin: auto;
           display: block;
           margin-top: 5px;
         }
       
         #underline_home:not(.active):hover::after,
         #underline_courses:not(.active):hover::after,
         #underline_advice:not(.active):hover::after,
         #underline_about:not(.active):hover::after,
         #underline_gpa:not(.active):hover:after {
           width: 100%;
           transition: all 80ms ease-in-out;
         }
    
         .dropdown-content a.active {
            font-size: medium;
           background-color: #EEBC1D;
           border: none;
           color: white !important;
           border-radius: 1rem;
           text-decoration: none;
           cursor: pointer;
           transition: ease-in 0.15s;
           padding: 5px;
         }
       
         nav ul li a.active{
           font-size: medium;
           background-color: #EEBC1D;
           border: none;
           color: white !important;
           border-radius: 2rem;
           text-decoration: none;
           cursor: pointer;
           transition: ease-in 0.15s;
         }
  
    .rounded {
      border-top: 1px solid grey;
      border-radius: 5px;
      width: 100vw;
      border-color: grey;
      opacity: 0.2;
      margin-bottom: 10px;
    }
  
    .dropbtn {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  
  </style>
  
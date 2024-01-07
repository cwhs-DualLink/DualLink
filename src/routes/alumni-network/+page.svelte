<script lang="ts">


</script>

<style lang="scss">


article {
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-bottom: 3rem;

  #header {
    width: 60rem;
    text-align: center;
    
    p {
      font-family: 'Poppins', sans-serif;
      font-size: 17px;
      color: #FFFDD0;
      font-weight: 700;
    }

    h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 25px;
      color: white;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    width: 60rem;
    height: 25rem;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    border-radius: 1.7rem;
    overflow: hidden;
    position: relative;
    border: 20px solid white;

    .graphic {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      a img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 1rem;
      }
    }

    .content {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 1rem;

      h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 17px;
      }

      p {
        align-self: center;
        font-family: 'Poppins', sans-serif;
        font-size: 17px;
        color: grey;
      }
    }
  }

  .tools {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
    }

    p {
      width: max-content;
      padding: .3rem;
      border-radius: .3rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    }
  }
}

@media screen and (max-width: 990px) {
  article {
    #header {
      width: 70vw;
    }

    section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 70vw;
      height: auto;
      padding: 1rem;

      .graphic {
        width: 100%;
        height: auto;
      }

      .content {
        width: 100%;
        font-size: 14px;
      }
    }
  }
}

@media screen and (max-width: 660px) {
  article {
    #header {
      width: 70vw;
    }

    section {
      width: 70vw;
    }
  }
}

@media screen and (max-width: 440px) {
  article {
    #header {
      h3 {
        text-align: center;
      }
    }
  }
}

</style>





<article>

    <div id="header">
        <p>PORTFOLIO</p>
        <h3>Each project showcases my growth and journey in Web Development</h3>
    
    </div>

   

   
   
    <section id="afyadux">

        

        <div class="graphic">

            <div class="container">
                <a href="/">
                    <img src="/images/carmen.webp" alt="">
    
                </a>

            </div>

            


        </div>

        <div class="content">

            <h3>Carmen Perez</h3>
            <p>Hello, my name is Carmen Perez. I am a currently a Marketing major at the University of Texas at Arlington. My college essays focused on my academic validation, the challenges I was phased with throughout my time in school, and what being a first-generation Mexican daughter meant for me academically. I graduated with a 4.5 GPA and was an officer for MentorMe & Spanish National Honor Society.</p>
               
            
            
           

           
        </div>

    </section>

    <section id="coding">

        <div class="graphic">

            <div class="container">
                <a href="https://codinginitiative.org">
                    <img src="/images/coding.png" alt="">

                </a>
            </div>

        </div>

        <div class="content">
            <h3 style="color:#3396ff; ">CODINGINITIATIVE.org</h3>
            <p> codinginitiative.org is a Web Development learning platform for Wunsche High School and SpringISD, where students can look the ins & outs of WebDev, find related communities, and have an access to a plethora of resources.   </p>
            <div class="tools">
                <p style="color: rgb(255, 67, 67);">Sveltekit</p>
                <p style="color: orange;">Firebase</p>
                <p style="color: blue;">Typescript</p> 
                <p style="color: pink;">SCSS</p>
            </div>
            
            
        </div>

        
    </section>



    <section id="apply">

        <div class="graphic">

            <div class="container">
                <a href="https://apply.codinginitiative.org">
                    <img src="/images/apply.png" alt="">

                </a>
            </div>

        </div>

        <div class="content">
            <h3 style="color:#3396ff">APPLY.CODINGINITIATIVE</h3>
            <p>Apply.codinginitiative is a sleek Club Admission Page for the Coding Initiative club, featuring a responsive UI and enhanced security with Firebase backend integration for form collection.  </p>
            <div class="tools">
                <p style="color: rgb(255, 67, 67);">Sveltekit</p>
                <p style="color: orange;">Firebase</p>
                <p style="color: blue;">Typescript</p> 
                <p style="color: pink;">SCSS</p>
            </div>
            
            
        </div>

        

    </section>

    
</article>
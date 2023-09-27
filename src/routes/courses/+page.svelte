<script>





    
    </script>

<section id="nav">

    <div id="scrollbar">

        <div class="scroll">
            <a href=""> Languages - English</a>
        </div>
        <div class="scroll">
            <a href=""> Languages Other Than English</a>
        </div>
        
        <div class="scroll">
            <a href=""> Mathematics </a>
        </div>
        
        <div class="scroll">
            <a href=""> Science </a>
        </div>
        
        <div class="scroll">
            <a href=""> Social Studies</a>
        </div>
        
        <div class="scroll">
            <a href=""> Fine Arts</a>
        </div>
    
        <div class="scroll">
            <a href=""> Career & Technical Education </a>
        </div>

    
          
        
        
        
    </div>


    <div class="navigation">
        <button id="leftscroll">

           <img src="/images/left-arrow.png" alt="">
            
                          

              
        </button> 
        
        <h2> Scroll to view navigation</h2> 
        
        <button id="rightscroll"> 
            
            <img src="/images/right-arrow.png" alt="">
              
        </button>
    </div>



</section>


<style>





    
#nav {
    display: flex;
    flex-direction: column;
}
#scrollbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    position: sticky;
    gap: 1.5rem;
    overflow-x: auto; 
    white-space: nowrap; 
}

@media (max-width: 1640px) {
    #scrollbar {
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-top: 20px;
    position: sticky;
    gap: 1.5rem;
    overflow-x: auto; 
    white-space: nowrap; 
}
}

#scrollbar::-webkit-scrollbar {
    display: none;
}

.scroll a {
    color: white;
    background-color: #CBC3E3;
    border-color: white;
    border-radius: 2rem;
    padding: 10px 20px; 
    border: solid transparent;
    min-width: 150px; 
    text-align: center; 
    display: inline-block; 
}

    .scroll a:hover{
        border-color: purple;
        background-color: white;
        color: purple;
        border-radius: 2rem;
        transition: all 300ms ease-in-out;
        border-style: solid;
        
    }

    @media only screen and  (max-width: 600px) {
        .scroll a {
        color: white;
        background-color: #CBC3E3;
        border-color: white;
        border-radius: 1.7rem;
        padding: 8px 12px; 
        border: solid transparent;
        min-width: 120px; 
        text-align: center; 
        display: inline-block; 
        font-size: 15px;
        }

    }

    .navigation {
        overflow: none;
        margin-top: 12px;
        display: flex;
        justify-content: center;
        gap: 3rem;
    }


    #leftscroll, #rightscroll {
        
        cursor: pointer;
    }

    .navigation h2 {
        margin-top: 10.25px; 
    }

    @media screen and (max-width: 600px) {

        .navigation h2{
            margin-top: 15px;
            font-size: 16px;
        }

    }
    button {
        border: none;
        background: none;
    }

</style>
<script lang="ts">
    import { onMount } from 'svelte';
    import type { Category } from '../../data/types.ts';
  
    let categories: Category[] = [];
  
    onMount(async () => {
      const response = await fetch('/courses.json');
      categories = await response.json();
    });
</script>

<section id="nav">
    <div id="scrollbar">
        {#each categories as category}
            <div class="scroll">
                <a href="#{category.id}"> {category.title}</a>
            </div>
        {/each}
    </div>

    <div class="navigation">
        <button id="leftscroll">
            <img src="/images/left-arrow.png" alt="">
        </button> 
        
        <h2> Scroll to view course categories</h2> 
        
        <button id="rightscroll"> 
            <img src="/images/right-arrow.png" alt="">
        </button>
    </div>
</section>

<section id="cataloge">
    {#each categories as category}
        <h1 id={category.id} >{category.title}</h1>
        <div class="grid">
            {#each category.courses as course}
                <div class="card">
                    <p style="background-color: {category.color};"><strong>LoneStar Course:</strong> {course.loneStarCollegeCourse}</p>
                    <h2 >{course.springISDCourse}</h2>

                    <p><strong>College Credit Hours:</strong> {course.collegeCreditHours}</p>
                    <p><strong>Spring ISD Credit:</strong> {course.springISDCredit}</p>
                </div>
            {/each}
        </div>
    {/each}
</section>


<style>



* {
    scroll-behavior: smooth;

}

    
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
            font-size: 15px;
        }

    }
    button {
        border: none;
        background: none;
    }

  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
  }


</style>
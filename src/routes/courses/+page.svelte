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
                <div class="card" style="--color: { category.color }">
                    <div class="header">
                        <p>{ course.springISDCourse }</p>
                        <p>{ course.springISDCredit.toFixed(1) } HS Credit</p>
                    </div>

                    <div class="lone">
                        <p>{ course.loneStarCollegeCourse }</p>
                        <p>{ course.collegeCreditHours } College Credits</p>
                    </div>
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
        border-radius: 8px;
        overflow: hidden;

        background-color: white;
        filter: drop-shadow(0rem 0rem 3rem rgba(40, 42, 54, 0.08));

    }


    .card .header {
        padding: 0.8rem 1rem; 
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 0.1rem;

        position: relative;
        
    }

    .card .header p {
        z-index: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: no-wrap;
        height: 1.2em;
    }

    .card .header::after {
        content: "";
        position: absolute;
        top: 0px; 
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: var(--color);
        height: 100%;
        opacity: 16%;
    }

    .card .lone {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 0.8rem 1rem; 
    }





</style>
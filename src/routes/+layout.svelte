


<svelte:head>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale-1">

    <title>The Coding Initiative</title>
</svelte:head>

<script lang="ts">
    import "./app.css";
    import Navbar from "../elements/Navbar.svelte";
    import Footer from "../elements/Footer.svelte";
</script>

<main>
    <Navbar />
  

    <slot></slot>
</main>
<Footer/>
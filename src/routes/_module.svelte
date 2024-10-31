
<script lang="ts">

    import icon from '../assets/icon.png';
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import { onMount } from "svelte";
    import { afterUrlChange } from "@roxi/routify";
    //bg-gradient-to-r from-violet-800 to-violet-600

    let show_nav = false;

    function set_show_nav(path: string) {
        show_nav = path !== "/" && path.length !== 0;
    }

    onMount(() => {
        set_show_nav(window.location.pathname);
    })

    $afterUrlChange(( change: {route: Route} ) => {
        set_show_nav(change.route.url);
    });

</script>

<svelte:head>
    <title>Dakstrum</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href={icon}>
</svelte:head>

<div class="">
    <div class="flex flex-col min-h-screen p-2 sm:p-12">

        {#if show_nav}
            <Navbar/>
        {/if}

        <div class="flex-grow">
            <slot></slot>
        </div>
        <Footer/>

    </div>
</div>


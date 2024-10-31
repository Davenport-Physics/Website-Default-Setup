
<script lang="ts">

    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import { onMount } from "svelte";
    import { afterUrlChange } from "@roxi/routify";
    //bg-gradient-to-r from-violet-800 to-violet-600

    let show_nav = false;

    function set_show_nav(path: string) {
        show_nav = path !== "/";
    }

    onMount(() => {
        set_show_nav(window.location.pathname);
    })

    $afterUrlChange(( change: {route: Route} ) => {
        set_show_nav(change.route.url);
    });

</script>

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


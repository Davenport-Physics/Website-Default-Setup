
<script lang="ts">
    import Navbar from "../lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<div class="bg-gradient-to-r from-violet-800 to-violet-600">
    <div class="flex flex-col min-h-screen p-2 sm:p-12">
        <Navbar/>
        <div class="flex-grow">
            <slot></slot>
        </div>
        <Footer/>
    </div>
</div>


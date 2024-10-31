
<script lang="ts">

    import Dakstrum from '../components/Dakstrum.svelte';
    import { url } from '@roxi/routify';

    function on_contact_click() {

    }

</script>

<div class="flex flex-col items-center justify-center h-size">

    <Dakstrum/>
    <div class="h-6"></div>
    <span class="text-black sm:text-2xl text-xl text-center bg-white w-1/2">
        Creating open-source software since 
        <span class="">2021</span>
    </span>
    <div class="h-6"></div>
    <div class="flex flex-row gap-2">

        <a href={$url("/projects")} class="link px-2 text-2xl">Projects</a>
        <button type="button" class="link px-2 text-2xl" on:click={on_contact_click}>Contact</button>

    </div>

</div>

<style>

    .background-img {
        background-image: url('../assets/code-stock.jpg');
        background-size: cover;
        background-position: center;
    }

    .h-size {
        height: 80vh;
    }

    .link:hover {
        color: black;
    }

    .link {
        position: relative;
        color: black;
        text-decoration: none;
    }

    .link::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #7e22ce;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    .link:hover::before {
        transform: scaleX(1);
    }

</style>

<script lang="ts">

    import { fade } from 'svelte/transition';
    import Dakstrum from '../components/Dakstrum.svelte';
    import { url } from '@roxi/routify';
    import { onMount } from 'svelte';
    import ContactModal from '../components/ContactModal.svelte';
    import SinglePageContainer from '../components/SinglePageContainer.svelte';

    let show = false;
    let show_modal: boolean = false;

    function on_contact_click() {
        show_modal = true;
    }

    onMount(() => {
        show = true;
    })

</script>

{#if show}
    <div transition:fade={{duration: 500}}>
        <SinglePageContainer>
            <Dakstrum/>
            <div class="h-6"></div>
            <span class="text-black sm:text-2xl text-xl text-center bg-white w-1/2">
                Creating open-source software since 2021
            </span>
            <div class="h-6"></div>
            <div class="flex flex-row gap-2">
                <a href={$url("/projects")} class="link px-2 text-2xl">~$ cd Projects</a>
                <button type="button" class="link px-2 text-2xl" on:click={on_contact_click}>~$ cat Contact</button>
            </div>
        </SinglePageContainer>
    </div>
{/if}

<ContactModal bind:show_modal/>

<style>

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
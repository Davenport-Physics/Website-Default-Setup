
<script lang="ts">

    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Steam from '../../assets/steam.png';

    let show = false;

    onMount(() => {
        show = true;
    })

</script>

{#if show}
    <div in:fade={{duration: 500}} class="sm:grid sm:grid-cols-2">
        <div>
            <iframe width="640" height="480" src="https://www.youtube.com/embed/959kz58yjZs?si=Pw9xA_m_lGbAXU6e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="flex flex-col justify-center">
            <p class="text-4xl text-center">
                <strong>Project Stocks</strong> is an stock trading simulator, allowing you to buy and sell shares of all your favorite companies!
            </p>
            <div class="h-12"></div>
            <div class="text-3xl text-center">
                Play now for free at
                <a href="https://store.steampowered.com/app/1207090/Project_Stocks/" target="_blank" class="inline-block hover:bg-gray-200 rounded-md p-1 relative top-2">
                    <img src={Steam} alt="steam icon" width="96px" height="29px"/>
                </a>
            </div>
        </div>
    </div>
{/if}
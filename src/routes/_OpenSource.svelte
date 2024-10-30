
<script lang="ts">
    import { Heart } from "phosphor-svelte";
</script>

<div class="sm:h-12 h-6"></div>
<div class="flex flex-col items-center">
    <div class="sm:grid sm:grid-cols-2 gap-24 block sm:w-1/2 w-full">
        <div class="flex flex-col gap-2 items-center">
            <p class="text-purple-600 text-6xl">We</p>
            <Heart size="60" color="red"/>
            <p class="text-purple-600 text-6xl">Open Source</p>
        </div>
        <div class="h-6 sm:hidden"></div>
        <p class="text-purple-600 text-3xl">
            At Dakstrum, we believe that software should be open to modification.
            That a user should be able to contribute to the longevity of a piece of software they love using. 
            Therefore, all of our software will be licensed under a free-software license.
        </p>
    </div>
</div>
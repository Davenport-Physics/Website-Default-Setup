
<script lang="ts">

    import { Mailbox, Envelope, DiscordLogo } from "phosphor-svelte";
    import { fly } from "svelte/transition";
    import { click_outside_handler } from "../lib/click_outside";

    export let show_modal: boolean;

    function on_close() {
        show_modal = false;
    }

</script>

{#if show_modal}
    <div 
        transition:fly={{duration: 500, y: -500}} 
        class="fixed z-10 w-96 h-48 border-2 border-purple-800 bg-white rounded-lg shadow-md modal-position flex flex-col"
        use:click_outside_handler={on_close}>
        <div class="absolute w-full">
            <button 
                type="button" on:click={on_close}
                class="text-white text-2xl rounded-full bg-purple-800 hover:bg-purple-700 px-2 absolute -right-2 -top-2 shadow-md">
                X
            </button>
        </div>
        <div class="px-2 flex flex-col items-center h-full justify-center">
            <div class="text-black text-2xl hover:text-purple-800"> 
                <a href="mailto:social@dakstrum.com" class="flex flex-row gap-2 justify-center">
                    <Envelope size={36}/> social@dakstrum.com
                </a>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-position {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
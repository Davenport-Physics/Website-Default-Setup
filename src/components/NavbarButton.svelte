
<script lang="ts">
    
    import { createEventDispatcher } from "svelte";
    export let text: string;

    const dispatch = createEventDispatcher();

    function on_click() {
        dispatch("click");
    }

</script>

<button class="text-2xl link" on:click={on_click}>
    <div class="relative -top-2">
        {text}
    </div>
</button>

<style>

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
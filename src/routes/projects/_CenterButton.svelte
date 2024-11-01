
<script lang="ts">

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function on_click() {
        dispatch("click");
    }

</script>

<div class="flex flex-row justify-center">
    <button 
        type="button" 
        class="text-gray-800 hover:bg-purple-600 hover:text-white rounded-md hover:shadow-md"
        on:click={on_click}>
        <slot></slot>
    </button>
</div>
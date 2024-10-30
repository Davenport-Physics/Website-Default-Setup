
<script lang="ts">
    export let href: string;
</script>

<a 
    href={href} 
    target="_blank"
    class="hover:bg-purple-600 hover:!text-white text-black hover:shadow-md rounded-md p-1"
    >
    <slot></slot>
</a>
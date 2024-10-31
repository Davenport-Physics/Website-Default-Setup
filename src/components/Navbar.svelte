
<script lang="ts">
    import NavbarButton from "./NavbarButton.svelte";
    import Dakstrum from "./Dakstrum.svelte";
</script>

<div class="grid grid-cols-2">
    <div class="flex flex-row">
        <Dakstrum/>
    </div>
    <div class="flex flex-row-reverse gap-4">
        <NavbarButton text="Contact" href="/contact"/>
        <NavbarButton text="About" href="/about"/>
    </div>
</div>

<script lang="ts">
    import NavbarButton from "./NavbarButton.svelte";
    import DakstrumNavbar from "./DakstrumNavbar.svelte";
</script>

<div class="grid grid-cols-2">
    <div class="flex flex-row">
        <DakstrumNavbar/>
    </div>
    <div class="flex flex-row-reverse gap-4">
        <NavbarButton text="Contact" href="/contact"/>
        <NavbarButton text="About" href="/about"/>
    </div>
</div>
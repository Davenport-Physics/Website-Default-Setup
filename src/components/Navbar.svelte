
<script lang="ts">

    import NavbarLink from "./NavbarLink.svelte";
    import NavbarButton from "./NavbarButton.svelte";
    import DakstrumNavbar from "./DakstrumNavbar.svelte";
    import ContactModal from "./ContactModal.svelte";

    let show_modal = false;

    function on_contact_click() {
        show_modal = true;
    }

</script>

<div class="grid grid-cols-2">
    <div class="flex flex-row">
        <DakstrumNavbar/>
    </div>
    <div class="flex flex-row-reverse gap-4">
        <NavbarButton text="Contact" on:click={on_contact_click}/>
        <NavbarLink text="Projects" href="/projects"/>
    </div>
</div>

<ContactModal bind:show_modal/>
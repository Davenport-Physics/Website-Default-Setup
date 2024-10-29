
<script lang="ts">
    import icon from '../assets/icon.png';
    import LatestYoutube from './LatestYoutube.svelte';
    import FirstSegment from './_FirstSegment.svelte';
</script>

<svelte:head>
    <title>Dakstrum</title>
    <link rel="icon" type="image/png" href={icon}>
</svelte:head>

<div class="flex flex-col">
    <div class="md:h-8 h-16"></div>
    <div class="flex flex-col">
        <FirstSegment/>
        <LatestYoutube/>
    </div>
</div>

<style>

</style>

<script lang="ts">
    import icon from '../assets/icon.png';
    import LatestYoutube from './LatestYoutube.svelte';
    import FirstSegment from './_FirstSegment.svelte';
    import OpenSource from './_OpenSource.svelte';
</script>

<svelte:head>
    <title>Dakstrum</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href={icon}>
</svelte:head>

<div class="flex flex-col">
    <div class="md:h-8 h-16"></div>
    <div class="flex flex-col">
        <FirstSegment/>
        <OpenSource/>
        <LatestYoutube/>
    </div>
</div>

<style>

</style>
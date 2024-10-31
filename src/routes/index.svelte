
<script lang="ts">
    import icon from '../assets/icon.png';
    import Chator from './_Chator.svelte';
    import FirstSegment from './_FirstSegment.svelte';
    import SingleSegment from './_SingleSegment.svelte';
</script>

<svelte:head>
    <title>Dakstrum</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href={icon}>
</svelte:head>

<div class="flex flex-col">
    <div class="md:h-8 h-16"></div>
    <div class="">
        <FirstSegment/>
        <Chator/>
        <SingleSegment/>
        <!--
            <FirstSegment/>
            <OpenSource/>
            <LatestYoutube/>
        -->
    </div>
</div>

<style>

</style>
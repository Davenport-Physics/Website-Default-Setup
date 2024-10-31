
<script lang="ts">

    import Code2 from '../assets/code-stock.jpg'
    import Dakstrum from '../components/Dakstrum.svelte';

</script>

<div class="flex flex-col items-center justify-center h-size">
    <Dakstrum size='large'/>
    <div class="h-6"></div>
    <span class="text-black sm:text-2xl text-3xl text-center bg-white w-1/2">
        Creating open-source software since 
        <span class="">2021</span>
    </span>
    <div class="flex flex-row">

    </div>
</div>
<div class="sm:h-12 h-0"></div>

<style>

    .background-img {
        background-image: url('../assets/code-stock.jpg');
        background-size: cover;
        background-position: center;
    }

    .h-size {
        height: 80vh;
    }

</style>
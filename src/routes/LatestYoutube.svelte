
<script lang="ts">
    import Steam from '../assets/steam.png';
</script>

<div class="h-8"></div>
<div class="text-white text-4xl text-center">Check out our latest project</div>
<div class="h-4"></div>
<div class="mx-auto">
    <iframe width="640" height="480" src="https://www.youtube.com/embed/959kz58yjZs?si=Pw9xA_m_lGbAXU6e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="text-4xl text-center text-white">
    Play now for free at
    <a href="https://store.steampowered.com/app/1207090/Project_Stocks/" target="_blank" class="inline-block">
        <img src={Steam} alt="steam icon" width="96px" height="29px"/>
    </a>
</div>

<style>

    @media (min-width: 1280px) {

        .video-screen {
            height: 60vh;
            width: 70vw;
            max-width: 1920px;
            max-height: 1080px;
        }

    }

    @media (min-width: 640px) and (max-width: 1280px) {

        .video-screen {
            height: 70vh;
            width: 80vw;
        }

    }
    @media (max-width: 640px) {

        .video-screen {
            height: 50vh;
        }

    }
</style>
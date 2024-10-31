
<script lang="ts">
    import Steam from '../assets/steam.png';
</script>

<div class="sm:grid sm:grid-cols-2">
    <div>
        <iframe width="640" height="480" src="https://www.youtube.com/embed/959kz58yjZs?si=Pw9xA_m_lGbAXU6e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="flex flex-col">
        <p class="text-4xl text-center">
            <b>Project Stocks</b> is a stock trading simulator, where you can buy and sell stocks of all your favourite (parody) companies!
        </p>
        <div class="h-6"></div>
        <div class="text-4xl text-center">
            Play now for free at
            <a href="https://store.steampowered.com/app/1207090/Project_Stocks/" target="_blank" class="inline-block">
                <img src={Steam} alt="steam icon" width="96px" height="29px"/>
            </a>
        </div>
    </div>
</div>
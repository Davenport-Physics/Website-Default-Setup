
<script lang="ts">

    import { GithubLogo } from "phosphor-svelte";
    import chator from "../assets/chator-icon.png";
    import IconLink from "../lib/IconLink.svelte";
    import itch from "../assets/itchio.svg";

</script>

<div class="sm:grid sm:grid-cols-2 flex flex-col-reverse">
    <div class="flex flex-col items-center">
        <p class="text-4xl">ChaTOR</p>
        <div class="h-2"></div>
        <p class="text-xl">
            A Free-Software Chat Client that runs in conjuction of Star Wars: The Old Republic.
        </p>
        <p>ChaTOR is pronounced as "Chatter"</p>

        <div class="h-6"></div>
        <p class="text-2xl">
            <b>Features</b>
        </p>
        <ul class="list-inside list-disc">
            <li>Supports posting messages longer than 255 characters</li>
            <li>Peruse past scenes with our integrated chat logging system</li>
            <li>Setup and use custom emotes at the click of a button</li>
            <li>and much more!</li>
        </ul>

        <div class="h-6"></div>
        <div class="flex flex-row gap-2">
            <IconLink href="https://dakstrum.itch.io/chator">
                <div class="flex flex-row gap-1">
                    <img src={itch} alt="Itch.io logo" class="w-8 h-8"/>
                    <p class="text-3xl">Itch.io</p>
                </div>
            </IconLink>
            <IconLink href="https://github.com/RPCompanion/ChaTOR">
                <div class="flex flex-row">
                    <GithubLogo size={36}/>
                    <p class="text-3xl">Github</p>
                </div>
            </IconLink>
        </div>
    </div>
    <img src={chator} alt="Chator icon" class=""/>
</div>
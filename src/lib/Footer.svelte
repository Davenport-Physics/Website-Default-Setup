
<script lang="ts">

    import { GithubLogo, XLogo, DiscordLogo } from 'phosphor-svelte'

</script>

<div class="grid grid-cols-2">
    <div></div>
    <div class="flex flex-row-reverse gap-2">
        <a href="https://github.com/Dakstrum" target="_blank" class="hover:bg-gray-600 rounded-md p-1">
            <GithubLogo size={24} color="white" />
        </a>
        <a href="https://twitter.com/dakstrum" target="_blank" class="hover:bg-gray-600 rounded-md p-1">
            <XLogo size={24} color="white"/>
        </a>
        <a href="https://discord.gg/6M445XDec6" target="_blank" class="hover:bg-gray-600 rounded-md p-1">
            <DiscordLogo size={24} color="white"/>
        </a>
    </div>
</div>
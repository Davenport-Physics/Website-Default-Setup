
<script lang="ts">

    import { GithubLogo, XLogo, DiscordLogo } from 'phosphor-svelte'
    import IconLink from './IconLink.svelte';

</script>

<div class="grid grid-cols-2">
    <div></div>
    <div class="flex flex-row-reverse gap-2">
        <IconLink href="https://github.com/Dakstrum">
            <GithubLogo size={36}/>
        </IconLink>
        <IconLink href="https://twitter.com/dakstrum">
            <XLogo size={36}/>
        </IconLink>
        <IconLink href="https://discord.gg/6M445XDec6">
            <DiscordLogo size={36}/>
        </IconLink>
    </div>
</div>
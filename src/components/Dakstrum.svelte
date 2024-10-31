
<script lang="ts">
    import icon from '../assets/icon.png';

    export let size: 'large' | undefined = undefined;

</script>

<a class="flex flex-row cursor-pointer gap-2" href="/">
    <img 
        src={icon} 
        alt="icon" 
        class="rounded-full shadow"
        class:h-12={size == undefined}
        class:w-12={size == undefined}
        class:h-24={size == 'large'}
        class:w-24={size == 'large'}
    />
    <div 
        class="text-black"
        class:text-4xl={size == undefined}
        class:text-8xl={size == 'large'}>
        Dakstrum
    </div>
</a>
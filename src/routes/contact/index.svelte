

<script lang="ts">

    let name: string = "";
    let email: string = "";

</script>

<div class="h-8"></div>
<div class="w-full">
    <div class="flex flex-col items-center gap-4">
        <div class="text-3xl text-white">Need some software created? Start a conversation with us!</div>
        <div class="flex flex-col w-full sm:w-1/3 gap-4">
            <input placeholder="Name" class="border-2 border-slate-600 outline-none rounded-lg pl-1" bind:value={name}/>
            <input placeholder="Email" type="email" class="border-2 border-slate-600 outline-none rounded-lg pl-1" bind:value={email}/>
            <textarea placeholder="Message" class="border-2 border-slate-600 outline-none rounded-lg h-48 pl-1 resize-none"></textarea>
            <button class="bg-violet-600 text-white rounded-lg py-1 hover:shadow-md">Send</button>
        </div>
    </div>
</div>
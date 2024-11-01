
<script lang="ts">

    import Chator from "./_Chator.svelte";
    import SinglePageContainer from "../../components/SinglePageContainer.svelte";
    import { ArrowFatLineDown, ArrowFatLineUp } from "phosphor-svelte";
    import CenterButton from "./_CenterButton.svelte";
    import ProjectStocks from "./_ProjectStocks.svelte";

    type Project = "ChaTOR" | "Project Stocks";
    let project: Project = "ChaTOR";

</script>

<div>

    {#if project === "ChaTOR"}
        <SinglePageContainer>
            <Chator/>
        </SinglePageContainer>
        <CenterButton on:click={() => { project = "Project Stocks" }}>
            <ArrowFatLineDown size={36}/>
        </CenterButton>
    {:else if project === "Project Stocks"}
        <CenterButton on:click={() => { project = "ChaTOR" }}>
            <ArrowFatLineUp size={36}/>
        </CenterButton>
        <SinglePageContainer>
            <ProjectStocks/>
        </SinglePageContainer>
    {/if}

</div>
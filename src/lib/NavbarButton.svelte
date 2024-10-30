
<script lang="ts">

    export let text: string;
    export let href: string;

</script>

<a href={href} class="text-2xl link ">{text}</a>

<style>

    .link:hover {
        color: #7e22ce;
    }

    .link {
        position: relative;
        color: #7e22ce;
        text-decoration: none;
    }

    .link::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #7e22ce;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    .link:hover::before {
        transform: scaleX(1);
    }

</style>
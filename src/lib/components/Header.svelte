<script>

import Logo from './Logo.svelte'

</script>


<header>

    <div class="wrapper">
        <div></div>    
        <Logo />
    </div>

</header>



<style>

header {
    position: fixed;
}

header .wrapper {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem var(--padding);
}

</style>
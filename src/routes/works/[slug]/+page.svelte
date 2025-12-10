<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<svelte:head>
  <title>ブログ</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>{data.title}</h1>
  <!--
  <div class="h5">{data.description}</div>
  <div class="h5">{data.scope}</div>
  <div class="h5">{data.scope}</div>
  <div class="h5">{data.headline}</div>
  <div class="h5">{data.body_jp}</div>
  <div class="h5">{data.body_en}</div>
-->
  
  <img src={data.eyecatch?.url} alt="" />
  <div>{@html data.content}</div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>
  
  <svelte:head>
    <title>Works - Portfolio</title>
    <meta name="description" content="My project portfolio" />
  </svelte:head>
  
  <div class="works-container">
    <header class="works-header">
      <h1>Works</h1>
      <p>A collection of my projects</p>
    </header>
  
    <div class="works-grid">
      <ul>
        {#each data.contents as content}
          <li><a href="/works/{content.id}">{content.title}</a></li>
        {/each}
      </ul>
    </div>
  </div>
  
  <style>
    .works-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
  
    .works-header {
      text-align: center;
      margin-bottom: 4rem;
    }
  
    .works-header h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  
    .works-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
    }
  
    .work-card {
      text-decoration: none;
      color: inherit;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  
    .work-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
  
    .work-image {
      aspect-ratio: 16 / 9;
      overflow: hidden;
    }
  
    .work-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  
    .work-card:hover .work-image img {
      transform: scale(1.05);
    }
  
    .work-content {
      padding: 1.5rem;
    }
  
    .work-content h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  
    .category {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: #f0f0f0;
      border-radius: 4px;
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
    }
  
    .work-content p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  
    .tag {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      background: #e8f4f8;
      border-radius: 3px;
      color: #0066cc;
    }
  </style>
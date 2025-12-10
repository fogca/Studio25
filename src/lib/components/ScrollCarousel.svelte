<script>
  import { onMount, onDestroy } from 'svelte';
  import Lenis from 'lenis';

  export let column1Images = [];
  export let column2Images = [];
  export let column3Images = [];

  let lenis;
  let col1Items = [];
  let col2Items = [];
  let col3Items = [];

  const gap = 16;

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  onMount(() => {
    lenis = new Lenis({ 
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: .9,
      touchMultiplier: 2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Calculate total heights dynamically from actual item heights
    let totalHeight1 = 0;
    let totalHeight2 = 0;
    let totalHeight3 = 0;

    // Initialize positions based on actual heights
    col1Items.forEach((item, i) => {
      if (!item) return;
      const index = i % column1Images.length;
      let yPos = 0;
      for (let j = 0; j < index; j++) {
        const prevItem = col1Items[j];
        if (prevItem) yPos += prevItem.offsetHeight + gap;
      }
      item.style.transform = `translateY(${yPos}px)`;
      if (index === column1Images.length - 1) {
        totalHeight1 = yPos + item.offsetHeight + gap;
      }
    });

    col2Items.forEach((item, i) => {
      if (!item) return;
      const index = i % column2Images.length;
      let yPos = 0;
      for (let j = 0; j < index; j++) {
        const prevItem = col2Items[j];
        if (prevItem) yPos += prevItem.offsetHeight + gap;
      }
      item.style.transform = `translateY(${yPos}px)`;
      if (index === column2Images.length - 1) {
        totalHeight2 = yPos + item.offsetHeight + gap;
      }
    });

    col3Items.forEach((item, i) => {
      if (!item) return;
      const index = i % column3Images.length;
      let yPos = 0;
      for (let j = 0; j < index; j++) {
        const prevItem = col3Items[j];
        if (prevItem) yPos += prevItem.offsetHeight + gap;
      }
      item.style.transform = `translateY(${yPos}px)`;
      if (index === column3Images.length - 1) {
        totalHeight3 = yPos + item.offsetHeight + gap;
      }
    });

    // Update on scroll
    lenis.on('scroll', ({ velocity }) => {
      // Column 1 - moves UP (opposite to scroll)
      col1Items.forEach((item) => {
        if (!item) return;
        const currentY = parseFloat(item.style.transform.replace(/[^\d.-]/g, '')) || 0;
        let newY = currentY + (velocity * 0.5);
        const itemHeight = item.offsetHeight;
        
        // Wrap when completely out of view (above or below)
        if (newY > window.innerHeight + 100) {
          newY = newY - totalHeight1;
        } else if (newY < -itemHeight - 100) {
          newY = newY + totalHeight1;
        }
        
        item.style.transform = `translateY(${newY}px)`;
      });

      // Column 2 - moves DOWN (with scroll)
      col2Items.forEach((item) => {
        if (!item) return;
        const currentY = parseFloat(item.style.transform.replace(/[^\d.-]/g, '')) || 0;
        let newY = currentY - (velocity * 0.7);
        const itemHeight = item.offsetHeight;
        
        // Wrap when completely out of view
        if (newY < -itemHeight - 100) {
          newY = newY + totalHeight2;
        } else if (newY > window.innerHeight + 100) {
          newY = newY - totalHeight2;
        }
        
        item.style.transform = `translateY(${newY}px)`;
      });

      // Column 3 - moves UP (opposite to scroll)
      col3Items.forEach((item) => {
        if (!item) return;
        const currentY = parseFloat(item.style.transform.replace(/[^\d.-]/g, '')) || 0;
        let newY = currentY + (velocity * 0.6);
        const itemHeight = item.offsetHeight;
        
        // Wrap when completely out of view
        if (newY > window.innerHeight + 100) {
          newY = newY - totalHeight3;
        } else if (newY < -itemHeight - 100) {
          newY = newY + totalHeight3;
        }
        
        item.style.transform = `translateY(${newY}px)`;
      });
    });

    return () => {
      lenis?.destroy();
    };
  });

  onDestroy(() => {
    lenis?.destroy();
  });
</script>

<div class="carousel-wrapper">
  <div class="carousel">
    <div class="column">
      {#each [...column1Images, ...column1Images, ...column1Images] as image, i}
        <div class="item" bind:this={col1Items[i]}>
          <img src={image} alt="Item {i}" loading="lazy" />
        </div>
      {/each}
    </div>

    <div class="column">
      {#each [...column2Images, ...column2Images, ...column2Images] as image, i}
        <div class="item" bind:this={col2Items[i]}>
          <img src={image} alt="Item {i}" loading="lazy" />
        </div>
      {/each}
    </div>

    <div class="column">
      {#each [...column3Images, ...column3Images, ...column3Images] as image, i}
        <div class="item" bind:this={col3Items[i]}>
          <img src={image} alt="Item {i}" loading="lazy" />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .carousel-wrapper {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }

  .carousel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0 1rem;
    height: 100%;
  }

  /* Mobile - make carousel wider than viewport, center it */
  @media (max-width: 768px) {
    .carousel {
      width: 200vw;
      transform: translateX(calc( -50vw - 10px ));
      gap: 1rem;
      padding: 0 1rem;
    }
  }

  .column {
    position: relative;
    height: 100%;
  }

  .item {
    position: absolute;
    width: 100%;
    border-radius: 0;
    overflow: hidden;
    background: #e0e0e0;
    will-change: transform;
  }

  .item img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
</style>
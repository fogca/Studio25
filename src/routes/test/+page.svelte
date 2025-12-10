<script>
    import ScrollCarousel from '$lib/components/ScrollCarousel.svelte';
  
    const column1Images = [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/1.jpg',
      '/images/1.jpg',
    ];
  
    const column2Images = [
      '/images/3.jpg',
      '/images/2.jpg',
      '/images/1.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/1.jpg',
    ];
  
    const column3Images = [
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/1.jpg',
      '/images/1.jpg',
    ];
  </script>

  <div class="wrapper">
  
    <div class="page">
      <ScrollCarousel 
        {column1Images}
        {column2Images}
        {column3Images}
      />
    </div>
</div>
  
  <style>


.wrapper {
    padding-top: 50vh;
}

.page {
    min-height: 500vh;
    background: white;
}
  
:global(body) {
  margin: 0;
  padding: 0;
}

@media screen and (min-width:720px) {

.wrapper {
    padding-left: 30vw;
}
    

}
  </style>
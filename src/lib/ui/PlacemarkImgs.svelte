<script lang="ts">
  import type { Placemark } from "$lib/types/placemark-types";
  import Card from "$lib/ui/Card.svelte";
  export let placemarks: Placemark[];

  </script>
  
  {#each placemarks as placemark}

  <Card title={placemark.name}>
    {placemark.img}
  </Card>


      {/each}



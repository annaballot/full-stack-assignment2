<script lang="ts">
    // export let placemarks = [
    //   {
    //     name: "Clonea",
    //     category: "Beach",
    //     description: "lovely",
    //     latitude: "52.161290",
    //     longitude: "-7.51540"
    //   },
    //   {
    //     name: "Kilmurrin",
    //     category: "Surf Spot",
    //     description: "waves",
    //     latitude: "5.161290",
    //     longitude: "7.51540"
    //   },
    //   {
    //     name: "Lahinch",
    //     category: "Diving Board",
    //     description: "deep",
    //     latitude: "2.161290",
    //     longitude: "-1.51540"
    //   }
    // ];

  import type { Placemark } from "$lib/types/placemark-types";

  export let placemarks: Placemark[];

  </script>
  
  <table class="table is-fullwidth">
    <thead>
      <th>Name</th>
      <th>Category</th>
      <th>Description</th>
      <th>Latitude</th>
      <th>Longitude</th>
      <th>Rating</th>
    </thead>
    <tbody>
      {#each placemarks as placemark}
        <tr>
          <td>
            {placemark.name}
          </td>
          <td>
            {placemark.category}
          </td>
          <td>
            {placemark.description}
          </td>
          <td>
            {placemark.latitude}
          </td>
          <td>
            {placemark.longitude}
          </td>
          <td>
            {placemark.rating}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>



  <!-- <tbody>
    {#each placemarks as placemark}
      <tr>
        <td>
          {placemark.name}
        </td>
        <td>
          {placemark.category}
        </td>
        <td>
          {placemark.description}
        </td>
        <td>
          {placemark.latitude}
        </td>
        <td>
          {placemark.longitude}
        </td>
      </tr>
    {/each}
  </tbody> -->
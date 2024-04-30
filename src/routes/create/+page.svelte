<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import CreatePlacemarkForm from "./CreatePlacemarkForm.svelte";
  import PlacemarkList from "$lib/ui/PlacemarkList.svelte";
  import { placemarkService } from "$lib/services/placemark-service";
  import type { Placemark } from "$lib/types/placemark-types";
  import { currentSession, subTitle } from "$lib/stores";

  import { onMount } from "svelte";
  import { get } from "svelte/store";

  


  subTitle.set("Dashboard");
  let placemarks: Placemark[] = [];
  onMount(async () => {
    placemarks = await placemarkService.getPlacemarks(get(currentSession));
  });

</script>

<Card title="Placemarks">
  <PlacemarkList {placemarks}/>
</Card>

<Card title="Create a Placemark">
  <CreatePlacemarkForm />
</Card>


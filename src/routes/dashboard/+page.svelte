<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import { subTitle } from "$lib/stores";
  import CreatePlacemarkForm from "./CreatePlacemarkForm.svelte";

  subTitle.set("Dashboard");
</script>

<Card title="Create a Placemark">
  <CreatePlacemarkForm />
</Card>


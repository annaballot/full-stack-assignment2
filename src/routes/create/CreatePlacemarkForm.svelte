<script lang="ts">
  // const candidateList = [
  //   {
  //     firstName: "Lisa",
  //     lastName: "Simpson",
  //     office: "President"
  //   },
  //   {
  //     firstName: "Maggie",
  //     lastName: "Simpson",
  //     office: "President"
  //   },
  //   {
  //     firstName: "Ned",
  //     lastName: "Flanders",
  //     office: "President"
  //   }
  // ];

  import Coordinates from "$lib/ui/Coordinates.svelte";
  import type { Placemark } from "$lib/types/placemark-types";
  import { currentSession } from "$lib/stores";
  import { placemarkService } from "$lib/services/placemark-service";
  import { get } from "svelte/store";

  let name = "";
  let category = ["Beach", "Surf Spot", "Mobile Sauna", "Coastal Path", "Diving Board", "Snorkelling"];
  let description = "";
  let latitude = 52.160858;
  let longitude = -7.15242;
  let rating = 8;
  let img = "";
  let selectedCategory = "";
  let message = "Please donate";

  async function createPlacemark() {
    console.log(`Just added: ${name} with category ${category} and description ${description} `);
    console.log(`latitude: ${latitude}, longitude: ${longitude}`);

    if (name) {
      // const candidate = candidateList.find((candidate) => candidate._id === selectedCandidate);
      // if (candidate) {
        const placemark: Placemark = {
          name: name,
          category: selectedCategory,
          description: description,
          latitude: latitude,
          longitude: longitude,
          rating: rating,
          img: img,
        };
        const success = await placemarkService.createPlacemark(placemark, get(currentSession));
        console.log(placemark);
        if (!success) {
          message = "Donation not completed - some error occurred";
          console.log("not successful");
          return;
        }
        // placemark.userid = $currentSession.id;
        // latestDonation.set(donation);
        // message = `Thanks! You donated ${amount} to ${candidate.firstName} ${candidate.lastName}`;
      // }
    } else {
      message = "Please select amount, method and candidate";
    }
  }
</script>

<form on:submit|preventDefault={createPlacemark}>
  <div class="field">
    <label class="label" for="name">Enter Name:</label>
    <input bind:value={name} class="input" id="name" name="name" type="string" />
  </div>
  <div class="field">
      <label class="label" for="category">Select Category:</label>
      <div class="select">
        <select bind:value={selectedCategory}>
          {#each category as cat}
            <option value={cat}>{cat}</option>
          {/each}
        </select>
      </div>
  </div>
  <div class="field">
    <label class="label" for="description">Provide a Description for your placemark:</label>
    <input bind:value={description} class="input" id="description" name="description" type="string" />
  </div>
  <Coordinates bind:latitude bind:longitude />
  <div class="field">
    <div class="control">
      <button class="button is-success is-fullwidth">Create Placemark</button>
    </div>
  </div>
</form>
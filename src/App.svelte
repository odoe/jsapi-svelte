<script>
	import { initmap } from "./initmap";

	export let centerText = "Loading...";

	const load = async () => {
	  const view = await initmap();
	  view.watch("center", center => {
	    const { latitude, longitude } = center;
	    centerText = `Lat: ${latitude.toFixed(2)} | Lon: ${longitude.toFixed(2)}`;
	  });
	};

	load();
</script>

<style>
	#root {
	  display: flex;
	  flex-direction: column;
	  padding: 0;
	  margin: 0;
	  height: 100%;
	  width: 100%;
	}
	#viewDiv {
	  padding: 0;
	  margin: 0;
	  height: 100%;
	  width: 100%;
	}
	h1 {
	  width: 100%;
	  text-align: center;
	  color: dodgerblue;
	}
</style>

<div id="root">
	<h1>{centerText}</h1>
	<div id="viewDiv"></div>
</div>

<script>
	import "../app.postcss";
	import Color_box from "$lib/Color_box.svelte";
	let default_color= 200;
	import Button from "$lib/Button.svelte";
  </script>
  <main class="h-screen overflow-hidden" 
	style="background: linear-gradient(-75deg, hsl({default_color+20}, 20%, 20%) 0%,  hsl({default_color+30}, 20%, 20%), hsl({default_color+40}, 20%, 20%) 100%);" >
	<div class="flex flex-col justify-items-center justify-center pt-10 pb-10">
	  <div class="self-center py-2 px-4 rounded-lg shadow-2d text-white">
		<div class="font-mono text-5xl self-center py-2 px-4 rounded-lg shadow-md">Hue Value</div>
	  </div>
	  <input class="flex-shrink w-60 self-center rounded-lg overflow-hidden appearance-none bg-gray-900 h-4 w-128 " name="hue value"  type="range" min="0" max="350" step="1" bind:value={default_color}>
	  <Button>TESTWESa</Button>
	  <Button>BLEH BLAJdfkjaslkdjf</Button>
	</div>
	<div class="flex flex-row flex-wrap justify-around h-screen">
		<Color_box default_color={default_color} steps=20/> 
		<Color_box default_color={default_color} steps=40/>
		<Color_box default_color={default_color} steps=60/>
		<Color_box default_color={default_color} steps=80/>
		<Color_box default_color={default_color} steps=100/>

		<!-- saving a loading function/ see all the palette i made/ randomize function-->
	</div>

  </main>  


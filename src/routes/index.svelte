<script>
	import "../app.postcss";
	import Color_box from "$lib/Color_box.svelte";
	import PaletteLoader from "$lib/PaletteLoader.svelte";
	import Button from "$lib/Button.svelte";

	let default_color=123;
	
	let isModalOpen = false;
	function randomize(){
		default_color = Math.floor(Math.random()*359);
	}
	function loadPalette(e){
		default_color=e.detail;
	}
</script>

<main class="h-screen overflow-hidden" style="background: linear-gradient(-75deg, hsl({default_color+20}, 20%, 20%) 0%,  hsl({default_color+30}, 20%, 20%), hsl({default_color+40}, 20%, 20%) 100%);" >
	<div class="flex items-center flex-col flex-wrap pt-10 pb-10">
	<div class="self-center py-2 px-4 rounded-lg shadow-2d text-white">
		<div class="font-mono text-5xl self-center py-2 px-4 rounded-lg shadow-md">Hue Value</div>
	</div>
	<input class="flex-shrink w-60 self-center rounded-lg overflow-hidden appearance-none bg-gray-900 mt-5" name="hue value"  type="range" min="0" max="350" step="1" bind:value={default_color}> 
	</div>
	<div class="flex flex-row flex-wrap justify-center mb-10">
		<Button on:click={randomize} >Randomize</Button>
		<Button on:click={()=>{isModalOpen=!isModalOpen}}>Save/Load Palette</Button>
	</div>
	<div class="flex flex-row flex-wrap justify-around h-screen">
		<Color_box color_hue={default_color} steps=20/> 
		<Color_box color_hue={default_color} steps=40/>
		<Color_box color_hue={default_color} steps=60/>
		<Color_box color_hue={default_color} steps=80/>
		<Color_box color_hue={default_color} steps=100/>
		<!-- saving a loading function/ see all the palette i made/ randomize function-->
	</div>
</main>  
{#if isModalOpen}
	<PaletteLoader on:load={loadPalette} hue_value={default_color} />
{/if}

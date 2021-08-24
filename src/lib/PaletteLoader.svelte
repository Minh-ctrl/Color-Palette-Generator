<script>
    import {createEventDispatcher} from 'svelte';
    import Modal from '$lib/Modal.svelte';
    import Button from "$lib/Button.svelte";
    import {palettes} from "$lib/store";

    export let hue_value;
    
    const dispatch = createEventDispatcher();
    let paletteName;

    function savePalette(){
        $palettes.push({name:paletteName, hue_value: hue_value});
        palettes.set($palettes);
        localStorage.setItem('palettes',JSON.stringify($palettes));
    }
    function deletePalette(hueOfPaletteToDelete){
        const filtered = $palettes.filter((paletteObject)=>{return paletteObject.hue_value != hueOfPaletteToDelete});
        // the "filtered" variable is every palette except the one we are trying to delete. We are setting the store to this new array
        palettes.set(filtered);
        //This is saving the new store without the deleted palette, to the localStorage database. 
        //The store is updated on line 19. This is saving it to the website. then it should work now?yes 
        localStorage.setItem('palettes',JSON.stringify($palettes));
    }
</script>

<Modal>
    <div slot="header" class="flex flex-row w-full "><h1 class="font-bold">My header</h1><button on:click={()=>{dispatch('close')}}>&times;</button></div>
    <div slot="content" class="flex flex-col w-full">
        <div class="flex flex-row">
            <input type="text" bind:value={paletteName}>
            <Button on:click={savePalette} disabled={(paletteName) ? paletteName.length<4 : true}>Save</Button>
        </div>
        {#if $palettes}
            {#if $palettes.length}
                {#each $palettes as palette}
                    <div class="flex flex-row">
                        <span>{palette.name}</span> <Button on:click={()=>{dispatch('load', palette.hue_value)}}>Load</Button><Button on:click={()=>{deletePalette(palette.hue_value)}}>Delete</Button>
                    </div>
                {/each}
            {:else}
                    <div>No saved palettes</div>
            {/if}
        {/if}
    </div>
</Modal>
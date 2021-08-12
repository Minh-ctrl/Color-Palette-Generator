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
    // TEMPLATE
    // Each palette has this structure:
    // let palette = {
    //     name:string,
    //     hue_value:number
    // }
</script>

<Modal>
    <div slot="header" class="flex flex-row w-full"><h1 class="font-bold">My header</h1><button on:click={()=>{dispatch('close')}}>&times;</button></div>
    <div slot="content" class="flex flex-col w-full">
        <div class="flex flex-row">
            <input type="text" bind:value={paletteName}>
            <Button on:click={savePalette} disabled={(paletteName) ? paletteName.length<4 : true}>Save</Button>
        </div>
        {#if $palettes}
            {#if $palettes.length}
                {#each $palettes as palette}
                    <div class="flex flex-row">
                        <span>{palette.name}</span> <Button on:click={()=>{dispatch('load', palette.hue_value)}}>Load</Button><Button>Delete</Button>
                    </div>
                {/each}
            {:else}
                    <div>No saved palettes</div>
            {/if}
        {/if}
    </div>
</Modal>
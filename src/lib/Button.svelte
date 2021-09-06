<script>
    export let disabled = false;
</script>


<button on:click class="bg-transparent hover:bg-red-500 text-white font-bold py-2 px-4 
                        rounded w-15 h-10 mt-5" 
                        disabled={disabled} class:bg-gray-500={disabled==true}>
    <slot/>
</button>


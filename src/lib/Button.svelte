<script>
    export let disabled = false;
</script>


<button on:click class="bg-transparent hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-15 h-10 hover:border-transparent mt-5" {disabled}>
    <slot/>
</button>


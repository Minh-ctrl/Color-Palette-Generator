<script>
    
</script>
<!-- save functionanilty, look up localStorage -->
<div class= "absolute overflow-hidden object-center">
    <div class="container fixed top-0 left-0 p-4 flex flex-col items-center">
        <div class="header bg-gray-500"><slot name="header"/></div>
        <div class="content bg-gray-500"><slot name="content"/></div>
    </div>
</div>
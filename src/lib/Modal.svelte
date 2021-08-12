<script>
    
</script>
<!-- save functionanilty, look up localStorage -->
<div class= "absolute w-full h-full bg-gray-500">
    <div class="container fixed top-0 left-0 p-4 flex flex-col justify-center items-center">
        <div class="header bg-gray-50"><slot name="header"/></div>
        <div class="content"><slot name="content"/></div>
    </div>
</div>
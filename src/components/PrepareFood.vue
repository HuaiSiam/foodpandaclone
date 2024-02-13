<template>
    <h2 class="font-primary text-24 lg:text-32 text-black px-8 max-w-[1440px] mx-auto mt-20 pb-8">{{ $t('prepare') }}</h2>
    <img src="../assets/images/home-vendor-mm.png" alt="home vendor image" class="h-[540px] md:h-[514px] lg:h-[452px] xl:h-[404px] w-full object-cover">

    <div class="px-4 sm:px-8 relative -translate-y-[136px]">
        <div class="bg-white shadow-elevationlow rounded-xl p-6 sm:max-w-[600px]">
            <p class="font-primary text-black text-20 lg:text-24">{{ $t('list') }}</p>
            <p class="font-primary text-black text-14 lg:text-16 py-6">{{ $t('des') }}</p>
            <button type="button" class="bg-mainpink rounded-lg px-4 py-3 font-primary text-white font-semibold text-14">{{ $t('getstart') }}</button>
        </div>
    </div>
</template>

<script setup>
</script>
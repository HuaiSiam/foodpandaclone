<template>
   <div class="banner-container h-[200px] md:h-auto">
        <div class="flex md:items-center gap-5">
            <div class="pl-5 lg:pl-8 w-[50%] sm:w-[70%] flex items-center md:block pt-4 sm:pt-0">
                <h1 class="font-primary font-normal text-18 md:text-24 xl:text-32 text-mainblack pb-8">{{ $t('bannertitle') }}</h1>
                <div class="lg:bg-white lg:p-4 hidden lg:flex items-center">
                    <SearchBanner />
                </div>
            </div>

            <div class="w-[50%] sm:w-[30%]">
                <img src="../assets/images/refresh-hero-home-mm.png" alt="banner image" class="mix-blend-multiply">
            </div>
        </div>
   </div>
   <div class="lg:hidden px-5 -mt-8">
        <SearchBanner />
   </div>
</template>

<script setup>
import SearchBanner from './SearchBanner.vue'
</script>

<style scoped lang="scss">
.banner-container{
    background-color: #f7f7f7;
    > div{
        max-width: 1440px;
        margin: 0 auto;
    }
}
</style>
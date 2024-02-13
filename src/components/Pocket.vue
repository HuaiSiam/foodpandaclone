<template>
    <div class="main-container px-5 lg:px-8 pb-12 lg:pb-20">
        <h2 class="font-primary text-24 lg:text-32 text-black pb-8">{{ $t('pockettitle') }}</h2>
        <div class="lg:grid lg:grid-cols-2 lg:items-center bg-mainpink rounded-xl">
            <div class="px-4 sm:px-6 pt-8 lg:py-8 xl:py-12 lg:pl-8 lg:pr-0 text-white text-center lg:text-left">
                <p class="pb-6 font-primary font-normal text-18">{{ $t('downloadtitle') }}</p>
                <div class="lg:flex gap-5 pb-4">
                    <div class="border border-white rounded p-2 max-w-[88px] mx-auto">
                        <img src="../assets/images/mmhomepageqrcode.png" alt="qr code" class="w-full h-full">
                    </div>
                    <p class="font-primary font-normal text-16 pt-3 lg:pt-0">{{ $t('downloaddes') }}</p>
                </div>
                <div class="flex gap-4 justify-center lg:justify-start">
                    <a href="https://apps.apple.com/us/app/foodpanda-food-groceries/id758103884?mt=8&pt=1977519&ct=Website">
                        <img src="../assets/images/appstore.svg" alt="app store">
                    </a>
                    <a href="https://apps.apple.com/us/app/foodpanda-food-groceries/id758103884?mt=8&pt=1977519&ct=Website">
                        <img src="../assets/images/playstore.svg" alt="app store">
                    </a>
                    <a href="https://apps.apple.com/us/app/foodpanda-food-groceries/id758103884?mt=8&pt=1977519&ct=Website">
                        <img src="../assets/images/appgallery.svg" alt="app store">
                    </a>
                </div>
            </div>
            <div class="lg:mt-[-56px]">
                <img src="../assets/images/home-foodpanda-apps.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup></script>
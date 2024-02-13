<template>
    <div class="main-container px-5 lg:px-8 pb-12">
        <h2 class="font-primary text-24 lg:text-32 text-black pb-8">{{ $t('citiestitle') }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
            <a :href="city.href" v-for="(city, index) in cities" :key="index" class="h-[156px] md:h-[212px] lg:h-[242px] xl:h-[252px] rounded-lg relative group overflow-hidden">
                <figure class="h-full">
                    <picture>
                        <img :src="city.img" alt="city" class="h-full w-full rounded-lg group-hover:scale-105 transition-all">
                    </picture>
                    <figcaption class="absolute left-0 bottom-0 p-2 pb-4">
                        <span class="bg-white rounded-xl py-2 px-4 text-14 md:text-18">{{ $tc('cities', index) }}</span>
                    </figcaption>
                </figure>
            </a>
        </div>
    </div>
</template>

<script setup>
const cities = [
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Yangon.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/madalay',
        img: '/assets/images/city-tile-Mandalay.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Naypyitaw.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Aungpan.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Bago.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Hpa_an.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Kalaw.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Lashio.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/Mawlamyine.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Monywa.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Mudon.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/Pyin_Oo_Lwin.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Taung_Gyi.png'
    },
    {
        href: 'https://www.foodpanda.com.mm/en/city/yangon',
        img: '/assets/images/city-tile-Taungoo.png'
    },
]
</script>
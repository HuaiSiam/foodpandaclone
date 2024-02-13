<template>
    <div class="main-container px-5 lg:px-8 pb-12 lg:pb-20">
        <h2 class="font-primary font-bold text-mainblack text-24 lg:text-32 pb-2">
            {{ $t('ordertitle') }}
        </h2>

        <p class="font-primary text-14 text-maingray">{{ $t('orderdes') }}</p>
        <p class="font-primary text-14 text-maingray pt-4 pb-1">{{ $t('orderdes2') }}</p>
        <h3 class="font-primary font-bold text-mainblack text-20 lg:text-24 pb-2">
            {{ $t('whypanda') }}
        </h3>
        <ul class="whypanda_lists">
            <li class="font-primary text-14 text-maingray before:content-['✓'] before:text-mainpink before:mr-1">{{ $tc('lists', 0) }}</li>
            <li class="font-primary text-14 text-maingray before:content-['✓'] before:text-mainpink before:mr-1">{{ $tc('lists', 1) }}</li>
            <li class="font-primary text-14 text-maingray before:content-['✓'] before:text-mainpink before:mr-1">{{ $tc('lists', 2) }}</li>
            <li class="font-primary text-14 text-maingray before:content-['✓'] before:text-mainpink before:mr-1">{{ $tc('lists', 3) }}</li>
        </ul>
        <h3 class="font-primary font-bold text-mainblack text-20 lg:text-24 pb-2">
            {{ $t('choose') }}
        </h3>
        <p class="font-primary text-14 text-maingray text-justify pb-1">{{ $t('choosedes') }}</p>
    </div>
</template>

<script setup></script>
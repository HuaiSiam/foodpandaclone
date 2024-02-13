<template>
    <div class="relative hover:bg-hoverpink rounded-lg px-2 py-[.3rem]">
        <button type="button" class="flex items-center" @click="showLang = !showLang">
            <img src="../assets/images/globe.svg" alt="globe">
            <span class="selected-item uppercase">{{ selectedItem }}</span>
            <img src="../assets/images/chevron-down.svg" alt="down arrow" class="filter-pink">
        </button>

        <div class="min-w-[138px] bg-white shadow-elevationMD p-3 absolute left-0 top-8 rounded-xl z-[1]" v-if="showLang">
            <ul class="language-switcher">
                <li :class="['language-switcher__item py-4 px-3 hover:bg-hoverpink rounded-lg', {'active':selectedItem=='MY'}]" lang="my" @click="switchLang('my')">
                    မြန်မာ
                </li>
                <li :class="['language-switcher__item py-4 px-3 hover:bg-hoverpink rounded-lg', {'active':selectedItem=='EN'}]" lang="en" @click="switchLang('en')">
                    English
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {i18n} from '../locale/i18n';

const selectedItem = ref('EN');
const showLang = ref(false);

const switchLang = (lang) => {
    if(lang == 'en') i18n.global.locale = 'EN';
    else i18n.global.locale = 'MY';
    selectedItem.value = i18n.global.locale;
    showLang.value = false;
}
</script>

<style scoped lang="scss">
.language-switcher{
    &__item{
        &.active{
            background-color: #f7f7f7;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &::after{
                content: url('../assets/images/lang-check.svg');
                display: block;
                height: 24px;
                filter: brightness(0) saturate(100%) invert(18%) sepia(54%) saturate(5353%) hue-rotate(321deg) brightness(100%) contrast(90%);
            }
        }
    }
}
</style>
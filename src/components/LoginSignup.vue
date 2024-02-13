<template>
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000ba] z-[2]">
        <div class="bg-white sm:min-w-[400px] px-6 py-5 rounded-xl shadow-elevationlow">
            <button type="button" class="h-8 w-8 rounded-full border border-graybar flex items-center justify-center ml-auto"
            @click="$emit('hideModal', false)">
                <img src="../assets/images/cross.svg" alt="" class="filter-pink">
            </button>
        </div>
    </div>
</template>

<script setup></script>
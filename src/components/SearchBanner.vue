<template>
    <div class="relative lg:mr-4 flex-[1] banner-inputs">
        <input type="text" id="search" name="search" class="w-full border border-graybar py-3 px-4 rounded-lg text-14" placeholder="Street, Postal Code">
        <label for="search" class="font-primary font-normal text-14 text-maingray absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1">
            {{ $t('bannerinput') }}
        </label>
        <div class="flex items-center absolute right-4 top-1/2 -translate-y-1/2">
            <img src="../assets/images/locate-icon.svg" alt="" class="filter-pink mr-2">
            <p class="font-primary text-mainpink text-14">{{ $t('locateme') }}</p>
        </div>
    </div>
    <button type="button" class="bg-mainpink hover:bg-darkpink rounded-lg px-4 h-12 text-white font-primary font-semibold text-14 mt-4 lg:mt-0 w-full text-center lg:w-auto">
        {{ $t('findfood') }}
    </button>
</template>

<style lang="scss" scoped>
.banner-inputs{
    input{
        transition: all .15s;
        &:not(:placeholder-shown),
        &:focus-visible{
            ~ label{
                top: 0;
            }

            &::placeholder{
                color: #767676;
            }
        }

        &::placeholder{
            color: transparent;
        }
    }

    label{
        transition: all .15s;
    }
}
</style>
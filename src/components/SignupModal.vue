<template>
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000ba] z-[2]">
        <div class="bg-white sm:min-w-[400px] px-6 py-5 rounded-xl shadow-elevationlow">
            <div class="flex items-center justify-between">
                <button type="button" v-if="emailview" @click="emailview = false">
                    <img src="../assets/images/back-arrow.svg" alt="back arrow" class="filter-pink">
                </button>
                <button type="button" class="h-8 w-8 rounded-full border border-graybar flex items-center justify-center ml-auto"
                @click="$emit('hideModal', false)">
                    <img src="../assets/images/cross.svg" alt="" class="filter-pink">
                </button>
            </div>
            <div class="welcome-view" v-if="!emailview">
                <h2 class="text-24 text-mainblack font-primary font-bold pb-2">{{ $t('signuptitle') }}</h2>
                <p class="text-14 text-mainblack font-primary pb-8">{{ $t('signupdes') }}</p>
                <a href="https://www.facebook.com/" target="_blank" class="flex items-center xl:gap-10 px-5 w-full h-10 bg-fbblue mb-4">
                    <img src="../assets/images/fb.svg" alt="facebook" class="mr-10">
                    <span class="text-white text-14 font-primary">{{ $t('fb') }}</span>
                </a>
                <a href="https://accounts.google.com/" target="_blank" class="flex items-center xl:gap-10 px-5 w-full h-10 border border-ggbar mb-4">
                    <img src="../assets/images/google.svg" alt="Google" class="min-w-[18px] w-[18px] mr-10">
                    <span class="text-mainblack text-14 font-primary">{{ $t('gg') }}</span>
                </a>
                <a href="https://appleid.apple.com/sign-in" target="_blank" class="flex items-center xl:gap-10 px-5 w-full h-10 bg-black mb-5">
                    <img src="../assets/images/apple.svg" alt="Apple" class="mr-10">
                    <span class="text-white text-14 font-primary">{{ $t('apple') }}</span>
                </a>
                <p class="font-primary text-14 text-maingray text-center pb-4">{{ $t('or') }}</p>
                <button type="button" class="login-btn bg-mainpink hover:bg-darkpink mb-4 w-full py-4 text-white text-14 font-semibold font-primary rounded-lg"
                @click="emailview = true">
                    {{ $t('login') }}
                </button>
                <button type="button" class="border border-mainpink w-full py-4 text-mainpink text-14 font-semibold font-primary rounded-lg hover:border-hoverpink hover:bg-hoverpink"
                @click="emailview = true">
                    {{ $t('signup') }}
                </button>
            </div>
            <form class="email-view" v-if="emailview">
                <img src="../assets/images/email-loginicon.svg" alt="email login icon" class="mb-4">
                <h2 class="text-24 text-mainblack font-primary font-bold pb-2">{{ $t('emailtitle') }}</h2>
                <p class="text-14 text-mainblack font-primary pb-8">{{ $t('emaildes') }}</p>
                <div class="relative email-viewinput mb-4">
                    <input type="email" v-model="email" placeholder=" " class="border border-graybar w-full rounded-lg px-4 py-3 text-14 font-primary focus-visible:outline-none focus-visible:border-mainblack" id="email" name="email">
                    <label for="email" class="font-primary text-14 text-maingray absolute top-1/2 -translate-y-1/2 left-4 bg-white px-1">{{ $t('email') }}</label>
                </div>
                <button type="submit" class="w-full font-primary font-semibold text-white text-14 text-center h-12 bg-mainpink border border-mainpink" :disabled="email!=''?false:true">
                    {{ $t('continue') }}
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const emailview = ref(false);
const email = ref('');
</script>

<style scoped lang="scss">
.login-btn{
    &:hover{
        box-shadow: 0 0.1rem 0.5rem rgba(0,0,0,.15);
    }
}

.email-view{
    &input{
        input{
            transition: all .15s;
            &:not(:placeholder-shown),
            &:focus-visible{
                ~ label{
                    top: 0;
                }
            }
        }

        label{
            transition: all .15s;
        }
    }

    button{
        &:disabled{   
        background-color: #767676;
        border-color: #767676;
        }
    }
}
</style>

<style lang="scss">
@import './hero-img';
</style>
    
<script setup>
import Dollar from '../../../assets/svg/dollar.svg'
import AuthForm from '../AuthForm/AuthForm.vue'
</script>
    
<template>
    <section id="hero-img">
        <img src="https://i.imgur.com/pfw8H6R.jpg" style="--brn:.5" />
        <div class="content-left">
            <p>worldwide</p>
            <strong>freight <br /> service</strong>
        </div>
        <div class="content-center">
            <div id="dollar-conversion">

                <Dollar />
                <span>{{ 'Tỷ giá USD <=> VNĐ' }}</span>

            </div>
        </div>
        <div class="content-right">
            <AuthForm />
        </div>
        <div class="scroll-down-animation">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="text">kéo xuống</span>
        </div>
    </section>
</template>
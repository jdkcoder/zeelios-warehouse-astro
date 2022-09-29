<template>
    <div class="auth-form">
        <div class="auth-change">
            <button @click="" class="active">Đăng nhập</button>
            <button @click="">Đăng ký</button>
        </div>
        <div class="auth-inputs">
            <label>
                <input type="text" placeholder="Tên đăng nhập / Email" />
            </label>
            <label>
                <input type="password" placeholder="Mật khẩu" />
            </label>
            <button @click="login">Đăng nhập</button>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang='scss'>
@import './auth-form';
</style>
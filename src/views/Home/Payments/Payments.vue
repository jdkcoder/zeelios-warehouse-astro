<template>
    <section>
        <h1>Hình thức thanh toán</h1>
        <div id="payment-gateways">
            <Momo />
            <VIB />
        </div>
    </section>
</template>

<script setup lang='ts'>
import Momo from '../../../assets/svg/momo.svg'
import VIB from '../../../assets/svg/vib.svg'
</script>

<style scoped lang='scss'>
@import './payments';
</style>

<style lang='scss'>
@import './benefits';
</style>
<template>
    <section id="benefits">
        <h1>Why Us?</h1>

        <div id="benefits-list">
            <div>
                <LowPrice /> <span>Giá cả cạnh tranh</span>
            </div>
            <div>
                <Shield /> <span>100% Bảo hiểm hàng hoá</span>
            </div>
            <div>
                <AutoPay /> <span>Mua hàng tự động hoá</span>
            </div>
            <div>
                <Support /> <span>Hỗ trợ tối đa sau mua hàng</span>
            </div>
        </div>
    </section>
</template>

<script setup>
import Shield from '../../../assets/svg/shield.svg';
import AutoPay from '../../../assets/svg/auto-pay.svg';
import Support from '../../../assets/svg/support-24h.svg';
import LowPrice from '../../../assets/svg/low-price.svg';
</script>

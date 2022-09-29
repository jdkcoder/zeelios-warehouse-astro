<template>
    <section id="services">
        <h2>Services</h2>

        <div id="services-content">

            <div class="service-card coming">
                <Cargo />
                <span class="title">Coming Soon</span>
                <p>
                    <strong>Zeelios Warehouse</strong>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam magnam tenetur, voluptate ex quibusdam magni architecto!
                    </span>
                </p>
            </div>

            <div class="service-card">
                <Airplane />
                <span class="title">Vận chuyển</span>

                <p>
                    <strong>Zeeliios Warehouse</strong> <span>hiện đang tiếp nhận nhu cầu vận chuyển từ Mỹ đặc biệt là từ sàn thương mại điện tử Amazon về đến Việt Nam tối thiểu chỉ trong vòng 7 ngày</span>
                </p>
            </div>

            <div class="service-card">
                <Purchase />
                <span class="title">Mua hộ</span>

                <p>
                    <strong>Zeelios Warehouse</strong> <span>hiện đang là một trong những đơn vị uy tín hàng đầu phù hợp với quý khách hàng có nhu cầu dịch vụ mua hộ hoặc thanh toán hộ</span>
                </p>
            </div>

            <div class="service-card coming">
                <Truck />
                <span class="title">Coming Soon</span>
                <p>
                    <strong>Zeelios Warehouse</strong>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam magnam tenetur, voluptate ex quibusdam magni architecto!
                    </span>
                </p>
            </div>

        </div>
    </section>
</template>

<script setup>
import Airplane from '../../../assets/svg/airplane.svg'
import Purchase from '../../../assets/svg/purchase.svg'
import Truck from '../../../assets/svg/truck.svg'
import Cargo from '../../../assets/svg/cargo.svg'
</script>

<style lang='scss'>
@import './services';
</style>
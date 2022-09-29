<template>
    <section id="about">
        <h1>About Us</h1>
        <div id="about-content">
            <div class="about-img">
                <img src="https://i.imgur.com/JvQovu6.png" alt="" />
            </div>

            <div class="about-texts">
                <p>
                    <strong>Zeelios Warehouse</strong>
                    <span>Tự hào là đơn vị đi đầu về áp dụng công nghệ vào lĩnh vực vận chuyển mang tới giải pháp đột phá, đem lại trải nghiệm logistics tối ưu, hiện đại cho khách hàng của mình.</span>
                </p>

                <ul id="contacts">
                    <li class="phone">
                        <Phone />
                        <div>
                            <p>Phone</p>
                            <strong>0123456789</strong>
                        </div>
                    </li>
                    <li class="telegram">
                        <Telegram />
                        <div>
                            <p>Telegram</p>
                            <strong>@Zeelios.WH</strong>
                        </div>
                    </li>
                    <li class="mail">
                        <Mail />
                        <div>
                            <p>Email</p>
                            <strong>email@email.com</strong>
                        </div>
                    </li>
                </ul>

                <div id="location">
                    <Location /> <span>Tầng 3, Số 63 – D3, khu biệt thự Vườn Đào, ngõ 689 Lạc Long Quân, Q. Tây Hồ</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Phone from '../../../assets/svg/phone.svg'
import Telegram from '../../../assets/svg/telegram.svg'
import Mail from '../../../assets/svg/mail.svg'
import Location from '../../../assets/svg/location.svg'
</script>

<style  lang='scss'>
@import './about';
</style>
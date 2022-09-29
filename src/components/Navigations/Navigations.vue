<template>
    <nav :class="{ scrolling: scrollPosition > 80 }">
        <div id="menu-list">
            <ul>
                <li class="active">
                    <a href="/">Giới thiệu</a>
                </li>
                <li class="dropdown"><span>Vận chuyển</span>
                    <div class="submenu">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                    </div>
                </li>
                <li class="dropdown">
                    <span>Mua hộ</span>
                    <div class="submenu">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="/bang-gia">Bảng giá</a>
                </li>
            </ul>
        </div>
        <a href="/" id="logo" class="active">Zeelios <br />Warehouse</a>
        <div id="auth">
            <ul>
                <li><a href="#">Đăng ký</a></li>
                <li><a href="#">Đăng nhập</a></li>
            </ul>
        </div>
        <button @click="callMobileMenu" id="trigger-menu">
            <MenuIcon />
        </button>
    </nav>
    <aside>
        <div id="bg" @click="closeMobileMenu"></div>
        <div id="menu-items">
            <strong>Zeelios Warehouse</strong>
            <ul>
                <li>
                    <a href="/" @click="closeMobileMenu">Giới thiệu</a>
                </li>
                <li><a href="#!" @click="closeMobileMenu">Vận chuyển</a></li>
                <li><a href="#!" @click="closeMobileMenu">Mua hộ</a></li>
                <li>
                    <a href="/pricing" @click="closeMobileMenu">Bảng giá</a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { onMounted } from 'vue'
import MenuIcon from '../../assets/svg/menu.svg'
let scrollPosition = $ref(0)
function updateScroll() {
    scrollPosition = window.scrollY;
}
function callMobileMenu() {
    document.querySelector('aside').classList.add('active');
}
function closeMobileMenu() {
    document.querySelector('aside').classList.remove('active');
}
onMounted(() => {
    window.addEventListener("scroll", updateScroll);
})
</script>

<style lang='scss'>
@import './nav';
</style>
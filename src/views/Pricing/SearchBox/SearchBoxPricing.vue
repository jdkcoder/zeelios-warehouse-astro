<template>
    <div id="search-box">
        <p>Tìm ngành hàng bạn quan tâm:</p>
        <input type="search" @input="searchPricing" v-model="keyword" />
    </div>
</template>

<script setup>
let keyword = $ref("")

function searchPricing() {
    let table = document.querySelector('table');
    let trs = table.querySelectorAll('tbody tr');

    for (let tr of trs) {
        let td = tr.querySelectorAll('td')[1]
        if (td) {
            let value = td.textContent || td.innerText;

            if (value.toUpperCase().indexOf(keyword.toUpperCase()) > -1) {
                tr.style.display = "";
            } else {
                tr.style.display = "none";
            }
        }
    }
}
</script>

<style lang='scss'>
@import './search-box-pricing'
</style>
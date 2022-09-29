<template>
    <table>
        <thead>
            <tr>
                <th>
                    <span>#</span>
                </th>
                <th>
                    <strong>Ngành hàng</strong>
                </th>
                <th><span>Phụ thu / Giá trị</span></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in pricing" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                    <p v-for="category in item.categories" :key="index">
                        {{ category.name }}
                    </p>
                </td>
                <td>{{ item.percent }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
let index = $ref(0)
let keyword = $ref("")
const pricing = $ref([
    {
        id: 1,
        categories: [
            {
                name: 'Hàng thông thường: quần áo, hóa mỹ phẩm, thực phẩm chức năng, sữa bột,…'
            },
            {
                name: 'Mũ bảo hiểm, dụng cụ trang điểm.'
            },
            {
                name: 'Thực phẩm, đồ dùng em bé, xe nôi, xe đẩy, đồ chơi trẻ em không điện.'
            },
            {
                name: 'Đồ dụng cụ nhà bếp, xoong chảo, hộp, đồ gia dụng.'
            },
            {
                name: 'Sách báo.'
            },
            {
                name: 'Bánh kẹo.'
            },
        ],
        percent: ""
    },
    {
        id: 2,
        categories: [
            {
                name: 'Quần áo, giày dép, túi xách'
            },
        ],
        percent: ""
    },
    {
        id: 3,
        categories: [
            {
                name: 'Quần áo, giày dép, túi xách có giá trị từ $500 trở lên'
            },
        ],
        percent: "2%"
    },
    {
        id: 4,
        categories: [
            {
                name: 'Đồng hồ đeo tay dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 5,
        categories: [
            {
                name: 'Đồng hồ đeo tay từ $300 đến $500'
            },
        ],
        percent: "$5 / cái"
    },
    {
        id: 6,
        categories: [
            {
                name: 'Đồng hồ đeo tay lớn hơn $500'
            },
        ],
        percent: "3%"
    },
    {
        id: 7,
        categories: [
            {
                name: 'Apple watch'
            },
        ],
        percent: "$4 / cái"
    },
    {
        id: 8,
        categories: [
            {
                name: 'Kính mắt dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 9,
        categories: [
            {
                name: 'Kính mắt từ $300 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 10,
        categories: [
            {
                name: 'Nước hoa, tinh dầu thơm'
            },
        ],
        percent: "$2 / kg"
    },
    {
        id: 11,
        categories: [
            {
                name: 'Củ sạc, tai nghe, iPod Touch, máy nghe nhạc MP3 mini dưới $100'
            },
        ],
        percent: ""
    },
    {
        id: 12,
        categories: [
            {
                name: 'Củ sạc, tai nghe, iPod Touch, máy nghe nhạc MP3 mini từ $100 trở lên hoặc Airpods'
            },
        ],
        percent: "$2 / cái"
    },
    {
        id: 13,
        categories: [
            {
                name: 'Điện thoại thường'
            },
        ],
        percent: "$35 / cái"
    },
    {
        id: 14,
        categories: [
            {
                name: 'Điện thoại từ iPhone 6 đến iPhone XS Max',
                name: 'Điện thoại Samsung S Series, Samsung A Series'
            },
        ],
        percent: "$35 / cái"
    },
    {
        id: 15,
        categories: [
            {
                name: 'Điện thoại iPhone 11 Series',
                name: 'Samsung NOTE 10'
            },
        ],
        percent: "$50 / cái"
    },
    {
        id: 16,
        categories: [
            {
                name: 'iPhone 12 Series'
            },
        ],
        percent: "$60 / cái"
    },
    {
        id: 17,
        categories: [
            {
                name: 'Máy tính bảng dưới $500'
            },
        ],
        percent: "$25 / cái"
    },
    {
        id: 18,
        categories: [
            {
                name: 'Máy tính bảng từ $500 trở lên'
            },
        ],
        percent: "$30 / cái"
    },
    {
        id: 19,
        categories: [
            {
                name: 'Laptop dưới $500'
            },
        ],
        percent: "$30 / cái"
    },
    {
        id: 20,
        categories: [
            {
                name: 'Laptop từ $500 đến $1000'
            },
        ],
        percent: "$45 / cái"
    },
    {
        id: 21,
        categories: [
            {
                name: 'Laptop từ trên $1000'
            },
        ],
        percent: "5%"
    },
    {
        id: 22,
        categories: [
            {
                name: 'Macbook'
            },
        ],
        percent: "$45 / cái"
    },
    {
        id: 23,
        categories: [
            {
                name: 'Kindle Amazon, Kindle Fire, NEXUS, Nook, e-Reader, Kim tự điển.'
            },
        ],
        percent: "$3 / cái"
    },
    {
        id: 24,
        categories: [
            {
                name: 'Thiết bị văn phòng: máy in, scan, fax, photo, máy chiếu, camera, chống trộm, chấm công dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 25,
        categories: [
            {
                name: 'Thiết bị văn phòng: máy in, scan, fax, photo, máy chiếu, camera, chống trộm, chấm công từ 300$ trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 26,
        categories: [
            {
                name: 'Xbox, PS1, PS2, PS3, PSP, Nintendo DS, 3DS, Wii dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 27,
        categories: [
            {
                name: 'Xbox, PS1, PS2, PS3, PSP, Nintendo DS, 3DS, Wii từ 300$ trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 28,
        categories: [
            {
                name: 'Linh kiện điện tử: Chuột máy tính, webcam, bàn phím, ổ cứng, bo mạch chủ, card đồ hoạ dưới $300'
            },
        ],
        percent: "$2 / cái"
    },
    {
        id: 29,
        categories: [
            {
                name: 'Linh kiện điện tử: Chuột máy tính, webcam, bàn phím, ổ cứng, bo mạch chủ, card đồ hoạ từ $300 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 30,
        categories: [
            {
                name: 'RAM'
            },
        ],
        percent: "3%"
    },
    {
        id: 31,
        categories: [
            {
                name: 'Đồ chơi trẻ em'
            },
        ],
        percent: ""
    },
    {
        id: 32,
        categories: [
            {
                name: 'Máy in mini dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 33,
        categories: [
            {
                name: 'Máy in mini từ $300 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 34,
        categories: [
            {
                name: 'Máy ảnh, máy quay, flycam, lens, camera dưới $200'
            },
        ],
        percent: "$5 / cái"
    },
    {
        id: 35,
        categories: [
            {
                name: 'Máy ảnh, máy quay, flycam, lens, camera từ $200 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 36,
        categories: [
            {
                name: 'Dụng cụ âm nhạc: đàn, trống, piano.'
            },
        ],
        percent: ""
    },
    {
        id: 37,
        categories: [
            {
                name: 'Amplifier & Loa dưới $500'
            },
        ],
        percent: ""
    },
    {
        id: 38,
        categories: [
            {
                name: 'Amplifier & Loa từ $500 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 39,
        categories: [
            {
                name: 'Điện thoại để bàn cổ'
            },
        ],
        percent: ""
    },
    {
        id: 40,
        categories: [
            {
                name: 'Dụng cụ thể thao: gậy goft, gậy bida, vợt tennis, đồ dùng thể thao dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 41,
        categories: [
            {
                name: 'Dụng cụ thể thao: gậy goft, gậy bida, vợt tennis, đồ dùng thể thao từ $300 đến $1000'
            },
        ],
        percent: "3%"
    },
    {
        id: 42,
        categories: [
            {
                name: 'Dụng cụ thể thao: gậy goft, gậy bida, vợt tennis, đồ dùng thể thao lơn hơn $1000'
            },
        ],
        percent: "5%"
    },
    {
        id: 43,
        categories: [
            {
                name: 'Dụng cụ làm bếp có điện dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 44,
        categories: [
            {
                name: 'Dụng cụ làm bếp có điện từ $300 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 45,
        categories: [
            {
                name: 'Máy massage. Đồ điện tử khác dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 46,
        categories: [
            {
                name: 'Máy massage. Đồ điện tử khác từ $300 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 47,
        categories: [
            {
                name: 'Máy lọc nước, Máy hút sữa dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 48,
        categories: [
            {
                name: 'Máy lọc nước, Máy hút sữa từ $300 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 49,
        categories: [
            {
                name: 'Phụ tùng ô tô, xe máy dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 50,
        categories: [
            {
                name: 'Phụ tùng ô tô, xe máy từ $300 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 51,
        categories: [
            {
                name: 'Xe đạp dưới $300'
            },
        ],
        percent: ""
    },
    {
        id: 52,
        categories: [
            {
                name: 'Xe đạp từ $300 trở lên'
            },
        ],
        percent: "3%"
    },
    {
        id: 53,
        categories: [
            {
                name: 'Đồ trang trí nội – ngoại thất'
            },
        ],
        percent: ""
    },
    {
        id: 54,
        categories: [
            {
                name: 'Đồ trang sức giả dưới $50'
            },
        ],
        percent: "$2 / cái"
    },
    {
        id: 55,
        categories: [
            {
                name: 'Zippo, dụng cụ cắt cigar, dụng cụ hút thuốc dưới $100'
            },
        ],
        percent: "$1 / cái"
    },
    {
        id: 56,
        categories: [
            {
                name: 'Zippo, dụng cụ cắt cigar, dụng cụ hút thuốc từ $100 trở lên'
            },
        ],
        percent: "$2 / cái"
    },
    {
        id: 57,
        categories: [
            {
                name: 'Tivi / Màn hình dưới 40 inches '
            },
        ],
        percent: "$25 / cái"
    },
    {
        id: 58,
        categories: [
            {
                name: 'Tivi / Màn hình dưới 40 inches - 55 inches'
            },
        ],
        percent: "$35 / cái"
    },
    {
        id: 59,
        categories: [
            {
                name: 'Tivi / Màn hình dưới lớn hơn 55 inches'
            },
        ],
        percent: "$45 / cái"
    },
    {
        id: 60,
        categories: [
            {
                name: 'Chip điện tử'
            },
        ],
        percent: "$3 / cái"
    },
    {
        id: 61,
        categories: [
            {
                name: 'Cigar'
            },
        ],
        percent: "Liên hệ"
    },
    {
        id: 62,
        categories: [
            {
                name: 'Các mặt hàng cồng kềnh, hàng cao cấp, hàng hóa giá trị trên $1000'
            },
        ],
        percent: "Liên hệ"
    },
])

</script>

<style lang='scss'>
@import './pricing-table';
</style>
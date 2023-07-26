<script setup>
import { TheCard } from 'flowbite-vue'
import { Rating } from 'flowbite-vue'
</script>
<template>
    <div class="grid grid-flow-col auto-cols-max">
        <div class="">
  <the-card href="#" class="mb-2" variant="horizontal" img-src="https://i.pinimg.com/236x/00/f4/14/00f414cdab1d19ecd5032101f951a019--irish-lace-lace-embroidery.jpg?nii=t">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WALKING SUIT AMERICAN</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
     sangat nyaman ketika dipakai di berbagai acara
    </p>
    <h3>RP 999.000</h3>
    <Rating :rating="5" />
  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">5 out of 5</p>
  </the-card>
  
</div>
<div>
  <the-card href="#" class="mt-1" variant="horizontal" img-src="https://i.pinimg.com/originals/68/45/db/6845db261f673fd732799ee7ce96e314.jpg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TRONDOL JEANS</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      bersiluet lebar dan mudah untuk di padukan dan juga nyaman
    </p>
    <h3>RP 499.000</h3>
    <Rating :rating="4" />
  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4,95 out of 5</p>
  </the-card>
</div>
</div>
<div class="grid grid-flow-col auto-cols-max">
        <div>
  <the-card href="#" variant="horizontal" img-src="https://1.bp.blogspot.com/-q5aoa9ZlxYA/WH1kGx-eX7I/AAAAAAAAZ84/Gb9WDOx1IT8iv-SKgAaBPkc4_B0zp0GUACLcB/s1600/Sepatu%2BTermahal%2Bdi%2BDunia%2B-%2BAir%2BJordan%2BSilver.jpg" img-alt="Desk">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AIR JORDAN SILVER SKIN</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      sepatu air jordan limitid edition yang hanya di produksi 100 di berbagai dunia
    </p>
    <h3>RP 6.999.000</h3>
    <Rating :rating="5" />
  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">5 out of 5</p>
  </the-card>
</div>
<div>
  <the-card href="#" variant="horizontal" img-src="https://konveksitopi.id/wp-content/uploads/2021/10/Optimo-Hats-Panama-Straw-Hat.jpg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HAT ONE SHOW 2027</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      topi ini pernah di pakai presiden jokowi widodo 
    </p>
    <h3>RP 299.000</h3>
    <Rating :rating="5" />
  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">5 out of 5</p>
  </the-card>
</div>
</div>
<svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 300" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(255, 82.601, 0, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,210L26.7,220C53.3,230,107,250,160,230C213.3,210,267,150,320,110C373.3,70,427,50,480,60C533.3,70,587,110,640,110C693.3,110,747,70,800,80C853.3,90,907,150,960,180C1013.3,210,1067,210,1120,190C1173.3,170,1227,130,1280,130C1333.3,130,1387,170,1440,170C1493.3,170,1547,130,1600,105C1653.3,80,1707,70,1760,100C1813.3,130,1867,200,1920,235C1973.3,270,2027,270,2080,225C2133.3,180,2187,90,2240,55C2293.3,20,2347,40,2400,80C2453.3,120,2507,180,2560,205C2613.3,230,2667,220,2720,200C2773.3,180,2827,150,2880,160C2933.3,170,2987,220,3040,205C3093.3,190,3147,110,3200,80C3253.3,50,3307,70,3360,70C3413.3,70,3467,50,3520,35C3573.3,20,3627,10,3680,30C3733.3,50,3787,100,3813,125L3840,150L3840,300L3813.3,300C3786.7,300,3733,300,3680,300C3626.7,300,3573,300,3520,300C3466.7,300,3413,300,3360,300C3306.7,300,3253,300,3200,300C3146.7,300,3093,300,3040,300C2986.7,300,2933,300,2880,300C2826.7,300,2773,300,2720,300C2666.7,300,2613,300,2560,300C2506.7,300,2453,300,2400,300C2346.7,300,2293,300,2240,300C2186.7,300,2133,300,2080,300C2026.7,300,1973,300,1920,300C1866.7,300,1813,300,1760,300C1706.7,300,1653,300,1600,300C1546.7,300,1493,300,1440,300C1386.7,300,1333,300,1280,300C1226.7,300,1173,300,1120,300C1066.7,300,1013,300,960,300C906.7,300,853,300,800,300C746.7,300,693,300,640,300C586.7,300,533,300,480,300C426.7,300,373,300,320,300C266.7,300,213,300,160,300C106.7,300,53,300,27,300L0,300Z"></path></svg>
<center>
    <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">APP BENEFITS</h1>
</center>
<div class="grid grid-flow-col auto-cols-max">
        <div>
<the-card variant="image" img-src="https://im.uniqlo.com/global-cms/spa/res33fc9ce26d5a339048a0965f3a758bf3fr.jpg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NEXT DAY DELEVERY</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      pembaruan sistem home delivery. pesanan anda sampai lebih cepat
    </p>
</the-card>
</div>
<div>
<the-card variant="image" img-src="https://im.uniqlo.com/global-cms/spa/resf5de78ad1dbc852480b2610da2c1ad4efr.jpg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PRODUCT UPDATE</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      lebih up to date untuk barang terbaru dan penawaran terbatas
    </p>
</the-card>
</div>
<div>
<the-card variant="image" img-src="https://im.uniqlo.com/global-cms/spa/resf67931c5b9fc6b37c8d3064de00e2326fr.jpg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXTRA SIZE</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
    temukan item yang paling cocok untuk Anda, sekarang tersedia beragam ukuran 
    </p>
</the-card>
</div>
<div>
<the-card variant="image" img-src="https://im.uniqlo.com/global-cms/spa/resa80b761ca0ecc74a38865af0a0114975fr.jpg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PRODUCT REVIEW</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      anda berkesempatan mendapatkan produk sample secara gratis dengan memberi ulasan
    </p>
</the-card>
</div>
</div>
<center>
<h1 class="mt-10 mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LOKASI KAMI</h1>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18840.821188566824!2d107.5988711601212!3d-6.915126253091753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7687126b8ef%3A0xbd35aa34884c391a!2sPaskal%2023%20Hyper%20Square!5e0!3m2!1sid!2sid!4v1690357378923!5m2!1sid!2sid" width="1350" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</center>
</template>

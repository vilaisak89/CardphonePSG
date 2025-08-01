<template lang="">
    <div>
        <aside id="layout-menu" class="layout-menu menu-vertical menu">
            <div class="app-brand demo ">
                <a href="javascript:void(0);" class="app-brand-link">
                    <span class="app-brand-logo demo">
                        <span class="text-primary">
                        </span>
                    </span>
                    <span class="app-brand-text demo menu-text fw-bold ms-2">PSG</span>
                </a>
                <a href="javascript:void(0);" @click="toggleMenu"
                    class="layout-menu-toggle menu-link text-large ms-auto">
                    <i class="icon-base bx bx-chevron-left"></i>
                </a>
            </div>

            <div class="menu-inner-shadow"></div>
            <ul class="menu-inner py-1">
                <!-- Dashboards -->
                <li class="menu-item" :class="MainMenu1 + MainM1">
                    <router-link to="/home" class="menu-link"
                        @click="MainMenu1?MainMenu1='' :MainMenu1='active'; MainMenu2=''; MainMenu3=''; MainM2=''; SubM2_01=''; SubM2_02=''; SubM2_03='';">
                        <i class="menu-icon icon-base bx bx-home-smile"></i>
                        <div>ໜ້າຫຼັກ</div>
                    </router-link>
                </li>

                <li class="menu-item" :class="MainMenu3 + MainM3">
                    <router-link to="/card" class="menu-link"
                        @click="MainMenu3?MainMenu3='' :MainMenu3='active'; MainMenu1=''; MainMenu2=''; MainM2=''; SubM2_01=''; SubM2_02=''; SubM2_03='';">
                        <i class="menu-icon icon-base bx bx-credit-card"></i>
                        <div>ແຜນເບີກຈ່າຍບັດ</div>
                    </router-link>
                </li>

                <!-- Layouts -->
                <li class="menu-item" :class="MainMenu2 + MainM2">
                    <a href="javascript:void(0);" class="menu-link menu-toggle"
                        @click="MainMenu2?MainMenu2='' :MainMenu2='open'">
                        <i class="menu-icon icon-base bx bx-layout"></i>
                        <div>ຕັ້ງຄ່າລະບົບ</div>
                    </a>

                    <ul class="menu-sub">
                        <li class="menu-item" :class="SubM2_01">
                            <router-link to="/setting" href="javascript:void(0);" class="menu-link"
                                @click="MainM2=' active', MainMenu1='', MainMenu3='', fmenu2(1)">
                                <div>ລະບົບບັດໂທລະສັບ</div>
                            </router-link>
                        </li>
                        <li class="menu-item" :class="SubM2_02">
                            <a href="javascript:void(0);" class="menu-link"
                                @click="MainM2=' active', MainMenu1='', MainMenu3='', fmenu2(2)">
                                <div>ຜູ້ນຳໃຊ້ລະບົບ</div>
                            </a>
                        </li>
                        <li class="menu-item" :class="SubM2_03">
                            <a href="javascript:void(0);" class="menu-link"
                                @click="MainM2=' active', MainMenu1='', MainMenu3='', fmenu2(3)">
                                <div data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>
        </aside>

        <div class="menu-mobile-toggler d-xl-none rounded-1">
            <a href="javascript:void(0);"
                class="layout-menu-toggle menu-link text-large text-bg-secondary p-2 rounded-1">
                <i class="bx bx-menu icon-base"></i>
                <i class="bx bx-chevron-right icon-base"></i>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        setup() {
            const toggleMenu = () => {
                const html = document.documentElement;

                const isMobile = window.innerWidth < 992; // Bootstrap XL breakpoint

                if (isMobile) {
                    // Mobile view
                    if (html.classList.contains('layout-menu-expanded')) {
                        html.classList.remove('layout-menu-expanded');
                        html.classList.add('layout-menu-collapsed');
                    } else {
                        html.classList.add('layout-menu-expanded');
                        html.classList.remove('layout-menu-collapsed');
                    }
                } else {
                    // Desktop view
                    if (html.classList.contains('layout-menu-collapsed')) {
                        html.classList.remove('layout-menu-collapsed');
                    } else {
                        html.classList.add('layout-menu-collapsed');
                    }
                }
            };

            return {
                toggleMenu
            };
        },
        data() {
            return {
                MainMenu1: '',
                MainMenu2: '',
                MainMenu3: '',
                MainM1: '',
                MainM2: '',
                MainM3: '',
                SubM2_01: '',
                SubM2_02: '',
                SubM2_03: '',
            }
        },
        methods: {
            fmenu2(id) {
                this.SubM2_01 = '';
                this.SubM2_02 = '';
                this.SubM2_03 = '';

                switch (id) {
                    case 1:
                        this.SubM2_01 = 'active';
                        break;
                    case 2:
                        this.SubM2_02 = 'active';
                        break;
                    case 3:
                        this.SubM2_03 = 'active';
                        break;
                }
            },
        }
    }
</script>
<style lang="">
    
</style>
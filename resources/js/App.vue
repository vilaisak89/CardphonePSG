<template lang="">
    <div>

        <!-- Layout wrapper -->
        <div class="layout-wrapper layout-content-navbar  ">
            <div class="layout-container">
                <!-- {{ $route }} -->

                <!-- Menu -->
                <Menu />

                <!-- Layout container -->
                <div class="layout-page">
                    <!-- Navbar -->
                    <nav class="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme"
                        id="layout-navbar">
                        <!-- ປຸ່ມຈໍມືຖື -->
                        <div class="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none "
                            @click="toggleMenu">
                            <a class="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
                                <i class="icon-base bx bx-menu icon-md"></i>
                            </a>
                        </div>

                        <div class="navbar-nav-right d-flex align-items-center justify-content-end"
                            id="navbar-collapse">

                            <!-- Search -->
                            <div class="navbar-nav align-items-center">
                                <div class="nav-item navbar-search-wrapper mb-0">
                                    <a class="nav-item nav-link search-toggler px-0" href="javascript:void(0);">
                                        <span class="d-inline-block text-body-secondary fw-normal"
                                            id="autocomplete"></span>
                                    </a>
                                </div>
                            </div>

                            <!-- /Search -->

                            <ul class="navbar-nav flex-row align-items-center ms-md-auto">

                                <!-- Language -->
                                <li class="nav-item dropdown-language dropdown me-2 me-xl-0">
                                    <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                                        data-bs-toggle="dropdown">
                                        <i class="icon-base bx bx-globe icon-md"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);" data-language="en"
                                                data-text-direction="ltr">
                                                <span>English</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);" data-language="fr"
                                                data-text-direction="ltr">
                                                <span>French</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);" data-language="ar"
                                                data-text-direction="rtl">
                                                <span>Arabic</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="javascript:void(0);" data-language="de"
                                                data-text-direction="ltr">
                                                <span>German</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <!--/ Language -->

                                <!-- Style Switcher -->
                                <li class="nav-item dropdown me-2 me-xl-0">
                                    <a class="nav-link dropdown-toggle hide-arrow" id="nav-theme"
                                        href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="icon-base bx bx-sun icon-md theme-icon-active"></i>
                                        <span class="d-none ms-2" id="nav-theme-text">Toggle theme</span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="nav-theme-text">
                                        <li>
                                            <button type="button" class="dropdown-item align-items-center active"
                                                data-bs-theme-value="light" aria-pressed="false">
                                                <span><i class="icon-base bx bx-sun icon-md me-3"
                                                        data-icon="sun"></i>Light</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="dropdown-item align-items-center"
                                                data-bs-theme-value="dark" aria-pressed="true">
                                                <span><i class="icon-base bx bx-moon icon-md me-3"
                                                        data-icon="moon"></i>Dark</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="dropdown-item align-items-center"
                                                data-bs-theme-value="system" aria-pressed="false">
                                                <span><i class="icon-base bx bx-desktop icon-md me-3"
                                                        data-icon="desktop"></i>System</span>
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                                <!-- / Style Switcher-->

                                <!-- User -->
                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                                    <a class="nav-link dropdown-toggle hide-arrow p-0" href="javascript:void(0);"
                                        data-bs-toggle="dropdown">
                                        <div class="avatar avatar-online">
                                            <img :src="'assets/img/avatars/1.png'" alt="" class="rounded-circle">
                                        </div>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a class="dropdown-item" href="pages-account-settings-account.html">
                                                <div class="d-flex">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar avatar-online">
                                                            <img src="../../assets/img/avatars/1.png" alt=""
                                                                class="w-px-40 h-auto rounded-circle">
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="mb-0">John Doe</h6>
                                                        <small class="text-body-secondary">Admin</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="dropdown-divider my-1"></div>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="pages-profile-user.html"> <i
                                                    class="icon-base bx bx-user icon-md me-3"></i><span>My
                                                    Profile</span> </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="pages-account-settings-account.html"> <i
                                                    class="icon-base bx bx-cog icon-md me-3"></i><span>Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="pages-account-settings-billing.html">
                                                <span class="d-flex align-items-center align-middle">
                                                    <i
                                                        class="flex-shrink-0 icon-base bx bx-credit-card icon-md me-3"></i><span
                                                        class="flex-grow-1 align-middle">Billing Plan</span>
                                                    <span class="flex-shrink-0 badge rounded-pill bg-danger">4</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="dropdown-divider my-1"></div>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="pages-pricing.html"> <i
                                                    class="icon-base bx bx-dollar icon-md me-3"></i><span>Pricing</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="pages-faq.html"> <i
                                                    class="icon-base bx bx-help-circle icon-md me-3"></i><span>FAQ</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="dropdown-divider my-1"></div>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="auth-login-cover.html" target="_blank"> <i
                                                    class="icon-base bx bx-power-off icon-md me-3"></i><span>Log
                                                    Out</span> </a>
                                        </li>
                                    </ul>
                                </li>
                                <!--/ User -->

                            </ul>
                        </div>
                    </nav>
                    <!-- / Navbar -->


                    <!-- Content wrapper -->
                    <div class="content-wrapper">
                        <!-- Content -->
                        <div class="container-xxl flex-grow-1 container-p-y">

                            <router-view />

                        </div>
                        <!-- / Content -->

                        <!-- Footer -->
                        <footer class="content-footer footer bg-footer-theme">
                            <div class="container-xxl">
                                <div
                                    class="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                                    <div class="mb-2 mb-md-0">
                                        ©

                                        document.write(new Date().getFullYear());

                                        , made with ❤️ by <a href="https://themeselection.com" target="_blank"
                                            class="footer-link">ThemeSelection</a>
                                    </div>
                                    <div class="d-none d-lg-inline-block">

                                        <a href="https://themeselection.com/license/" class="footer-link me-4"
                                            target="_blank">License</a>
                                        <a href="https://themeselection.com/" target="_blank"
                                            class="footer-link me-4">More Themes</a>

                                        <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/"
                                            target="_blank" class="footer-link me-6">Documentation</a>


                                        <a href="https://themeselection.com/support/" target="_blank"
                                            class="footer-link d-none d-sm-inline-block">Support</a>

                                    </div>
                                </div>
                            </div>
                        </footer>
                        <!-- / Footer -->

                        <div class="content-backdrop fade"></div>
                    </div>
                    <!-- Content wrapper -->
                </div>
                <!-- / Layout page -->
            </div>


            <!-- Overlay -->
            <div class="layout-overlay layout-menu-toggle"></div>


            <!-- Drag Target Area To SlideIn Menu On Small Screens -->
            <div class="drag-target"></div>

        </div>
        <!-- / Layout wrapper -->


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
    }

</script>
<style>

</style>

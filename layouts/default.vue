<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <div class="container mx-auto p-4 ">
        <div class="navbar bg-base-100 rounded-md shadow-md p-5">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NuxtLink to="/">
                            <li><a>Home</a></li>
                        </NuxtLink>
                        <li>
                            <ul class="p-2">
                                <NuxtLink to="/AboutMe">
                                    <li><a>About me</a></li>
                                </NuxtLink>
                                <NuxtLink to="/Project">
                                    <li><a>Projects</a></li>
                                </NuxtLink>
                            </ul>
                        </li>
                        <NuxtLink to="/OtherThings">
                            <li><a>Other things</a></li>
                        </NuxtLink>
                    </ul>
                </div>
                <NuxtLink to="/">
                    <a id="logo" class="btn btn-ghost my-phone:text-xl rl-sm:text-base">OMG A Porto</a>
                </NuxtLink>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <NuxtLink to="/">
                        <li><a>Home</a></li>
                    </NuxtLink>

                    <NuxtLink to="/AboutMe">
                        <li><a>About me</a></li>
                    </NuxtLink>

                    <NuxtLink to="/Project">
                        <li><a>Projects</a></li>
                    </NuxtLink>

                    <NuxtLink to="/OtherThings">
                        <li><a>Other things</a></li>
                    </NuxtLink>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="xs:hidden avatar online placeholder mr-5">
                    <div class="bg-neutral text-neutral-content w-16 rounded-full">
                        <span class="text-xl">BGS</span>
                    </div>
                </div>
                <NuxtLink to="/contact">
                    <button class="button-ctm">
                        <span>
                            Contact me
                        </span>
                    </button>
                </NuxtLink>
            </div>
        </div>
        <div class="flex justify-end breadcrumbs text-sm m-8">

            <ul class="border-outline-personal p-2 rounded-md">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
                    <NuxtLink :to="breadcrumb.path">
                        <a>{{ breadcrumb.name }}</a>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <slot />
    </div>


</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const generateBreadcrumbs = (route) => {
    const pathArray = route.path.split('/').filter((segment) => segment);
    const breadcrumbs = pathArray.map((segment, index) => {
        const path = `/${pathArray.slice(0, index + 1).join('/')}`;
        return {
            name: segment.charAt(0).toUpperCase() + segment.slice(1),
            path,
        };
    });
    return breadcrumbs;
};

const breadcrumbs = computed(() => generateBreadcrumbs(route));
</script>

<style scoped>
.border-outline-personal {
    border: 1px solid #D9D9D9;
}

.router-link-exact-active {
    color: rgb(143, 186, 255);
}

#logo:not(.router-link-exact-active) {
    color: rgb(221, 221, 221);
}


/* From Uiverse.io by mi-series */
.button-ctm {
    width: 150px;
    padding: 0;
    border: none;
    transform: rotate(5deg);
    transform-origin: center;
    font-family: "Gochi Hand", cursive;
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
    padding-bottom: 3px;
    border-radius: 5px;
    box-shadow: 0 2px 0 #494a4b;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background-color: #5cdb95;
}

.button-ctm span {
    background: #f1f5f8;
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #494a4b;
    color: black;
}

.button-ctm:active {
    transform: translateY(5px);
    padding-bottom: 0px;
    outline: 0;
}
</style>
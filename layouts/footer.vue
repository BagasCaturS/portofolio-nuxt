<template>
    <footer class="footer footer-center bg-primary text-primary-content p-10">
        <aside>
            <!-- <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                    clip-rule="evenodd" class="inline-block fill-current">
                    <path
                        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
                    </path>
                </svg> -->
            <p class="font-bold">
                Bagas Nuxt Portofoli Web.
            </p>
            <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
            <!-- <div class="grid grid-flow-col gap-4">
                    <NuxtLink to="https://github.com/BagasCaturS" target="_blank">
                        <Icon name="devicon:github" size="2rem" />
                    </NuxtLink>
                    
                    <NuxtLink to="https://www.linkedin.com/in/web-bagascaturs/" target="_blank">
                        <Icon name="devicon:linkedin" style="color:black;" size="2rem" />
                    </NuxtLink>
                    
                    <NuxtLink to="https://www.instagram.com/idont_do_art/" target="_blank">
                        <Icon name="skill-icons:instagram" size="2rem" />
                    </NuxtLink>
                    
                </div> -->
            <!-- /* From Uiverse.io by mahiatlinux */ -->
            <ul class="example-1">
                <li class="icon-content">
                    <NuxtLink to="https://github.com/BagasCaturS" target="_blank" 
                    class="link" aria-label="Github" data-social="github">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/></svg>
                    </NuxtLink>

                    <div class="tooltip">Github</div>
                </li>
                <li class="icon-content">
                    <NuxtLink to="https://www.linkedin.com/in/web-bagascaturs/" target="_blank" class="link" aria-label="Linkedin" data-social="linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill="currentColor"/></svg>
                    </NuxtLink>

                    <div class="tooltip">Linkedin</div>
                </li>
                <li class="icon-content">
                    <NuxtLink to="https://www.instagram.com/idont_do_art/" target="_blank" class="link" aria-label="Instagram" data-social="instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                fill="currentColor" />
                        </svg>
                    </NuxtLink>

                    <div class="tooltip">Instagram</div>
                </li>

            </ul>

        </nav>
    </footer>
</template>

<script setup>

</script>

<style scoped>
/* From Uiverse.io by mahiatlinux */
ul {
    margin-top: 1rem;
    list-style: none;
}

.example-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    /* Made bolder */
    background-color: #232323;
    /* Black background */
    border-radius: 1rem;
    /* Added border-radius to make the container rounded */
    padding: 1rem;
    /* Added padding for better appearance */
    height: 4rem;
    min-width: 4rem;
}

.example-1 .icon-content {
    margin: 0 1rem;
    position: relative;
    font-weight: bolder;
    /* Made bolder */
}

.example-1 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    /* White background */
    color: #232323;
    /* Black text */
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
    font-weight: bolder;
    /* Made bolder */
}

.example-1 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
}

.example-1 .icon-content .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    /* White icons */
    background-color: #232323;
    /* Black background */
    transition: all 0.3s ease-in-out;
    font-weight: bolder;
    /* Made bolder */
}

.example-1 .icon-content .link:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}

.example-1 .icon-content .link svg {
    width: 30px;
    height: 30px;
    fill: #fff;
    /* White icons */
}

.example-1 .icon-content .link[data-social="instagram"]:hover {
    color: #E1306C;
}

.example-1 .icon-content .link[data-social="linkedin"]:hover {
    color: #0e76a8;
}

.example-1 .icon-content .link[data-social="github"]:hover {
    color: #2b3137;
}

</style>
<template>
    <div class="divider divider-accent"></div>
    <div class="p-4 mx-auto my-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>

            <!-- <h1 class="text-4xl lg:text-6xl font-bold">It is now fully (some of 'em are not) <span class="text-success">responsive🥳</span></h1> -->
             <!-- <h1 class=" text-4xl lg:text-4xl font-bold">Responsive🥳</h1> -->
            <h2 class="text-4xl lg:text-6xl font-bold">Hello 👋,</h2>
            <h2 class="text-4xl lg:text-6xl font-bold cssanimation lePopUp infinite">I'm <span class="text-error">Bagas Catur Santoso.</span></h2>
            <h2 class="text-4xl lg:text-6xl font-bold text-yellow-300 border-b-2 pb-4">Web Developer</h2>
            <p class="text-justify mt-4 text-sm lg:text-base">Aspiring Junior Full-Stack Web Developer with a strong foundation in
                front-end and back-end technologies. Proficient in HTML, CSS,
                JavaScript, and front-end frameworks like VueJS and NuxtJs. Familiar
                with server-side languages like Express.JS, as well as databases like
                MySQL. Eager to learn, collaborate, and contribute to dynamic web
                applications. Committed to staying up-to-date with the latest
                industry trends and best practices.</p>
                <div class="mt-4 flex gap-8 justify-between md:justify-start">
                    <NuxtLink to="/Contact">
                        <button class="btn w-32 md:w-fit btn-outline lg:text-lg button-85 btn-warning">Contact Me</button>
                    </NuxtLink>
                    <NuxtLink to="/Project">
                        <div></div>
                        <button class="btn w-32 md:w-fit btn-outline lg:text-lg button-30 btn-accent">See My Projects</button>
                    </NuxtLink>
                </div>
        </div>

        <div class="flex items-center justify-center">
            <div class="tooltip tooltip-bottom w-fit flex flex-row justify-center items-center" data-tip="This is just a place holder dont hate me please">
                <NuxtImg alt="profile-pic" format="webp" class=" size-11/12"
                src="f/3000521/712x791/7333c98b40/frame-11-1.png"/>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.cssanimation, .cssanimation span {
    animation-duration: 3s ;
    animation-fill-mode: both;
}

.cssanimation span { display: inline-block }


.lePopUp span { animation-name: lePopUp }
@keyframes lePopUp {
    50% { transform: scale(1.5) }
}

.button-85 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}


.button-30 {
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
}

.button-30:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>
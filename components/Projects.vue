<template>


    <div class="container mx-auto rounded-lg">

        <div class="flex flex-col items-center mx-auto m-4 gap-4">
            <div class="mx-auto flex flex-col items-center ">

                <div class=" container p-4 bg-base-200 w-fit rounded-md">
                    <div class="flex flex-col gap-4 md:grid md:grid-cols-2 md:justify-between">
                        <div
                            class="p-3 flex flex-col justify-center border border-accent rounded-md text-justify w-full md:w-fit">
                            <h1>Internship as a <span class="text-warning">Data Scientist</span></h1>
                            <p class="mt-1">Telkom University, Bandung, Indonesia</p>
                        </div>
                        <div class="md:flex md:justify-end">

                            <div class="p-3 border border-accent rounded-md w-fit h-fit ">
                                <h1>02-2024 | 08-2024</h1>
                            </div>
                        </div>
                    </div>
                    <div class="ml-4 mt-4 text-justify">
                        <div class="flex">
                            <li></li>

                            As a Data Scientist, I am responsible for creating
                            machine learning models using the Python
                            programming language, with the goal of
                            identifying various types of waste, such as plastic
                            bottles, glass bottles, masks, and beverage cans;

                        </div>
                        <div class="flex ">
                            <li></li>
                            <p>
                                Responsible for collecting the dataset needed for
                                training the machine learning model. This dataset
                                consists of a total of 2.200 images encompassing
                                various types of waste to be identified by the
                                model;
                            </p>
                        </div>
                        <div class="flex">

                            <li>
                            </li>
                            <p>
                                Selecting the machine learning algorithms to be
                                used in building the model;
                            </p>
                        </div>
                    </div>


                </div>
                <div class="flex flex-col jse-contents items-center container">

                    <div class="divider divider-accent"></div>
                    <h1 class="text-xl text-center mb-4">Techs i used for building the project</h1>

                    <div class="flex w-fit my-phone:mx-auto gap-4 bg-warning rounded-md p-4 text-gray-900 justify-center items-center" >
                        <Icon name="simple-icons:github" size="4rem" />
                        <Icon name="simple-icons:googlecolab" size="4rem" />
                        <Icon name="simple-icons:tensorflow" size="4rem" />
                        <Icon name="simple-icons:python" size="4rem" />
                    </div>
                </div>
            </div>
        </div>
        <NuxtLayout name="footer" />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
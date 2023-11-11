<script setup>
defineProps({
    pokemon: {
        type: Object,
        required: true
    }
})

const getType1Color = (type1) => {
    switch (type1) {
        case 'Fire':
            return { backgroundColor: '#f7bc92', borderColor: '#d86819' }
        case 'Water':
            return { backgroundColor: '#dce3f5', borderColor: '#5f89ed' }
        case 'Grass':
            return { backgroundColor: '#d5f7c3', borderColor: '#84be62' }
        default:
            return { backgroundColor: 'white', borderColor: '#39495c' }
    }
}

const getType2Color = (type2) => {
    switch (type2) {
        case 'Poison':
            return { boxShadowColorPrimary: '#f2b6f2', boxShadowColorSecondary: '#bf49bf' }
        case 'Flying':
            return { boxShadowColorPrimary: '#dfd7F7', boxShadowColorSecondary: '#b59ef7' }
        default:
            return null
    }
}

const typeText = (type) => {
    switch (type) {
        case 'Fire':
            return 'https://static.wikia.nocookie.net/pokemon/images/4/4d/Type_Fire.gif'
        case 'Water':
            return 'https://static.wikia.nocookie.net/pokemon/images/e/ed/Type_Water.gif'
        case 'Grass':
            return 'https://static.wikia.nocookie.net/pokemon/images/4/46/Type_Grass.gif'
        case 'Poison':
            return 'https://static.wikia.nocookie.net/pokemon/images/8/82/Type_Poison.gif'
        case 'Flying':
            return 'https://static.wikia.nocookie.net/pokemon/images/4/4b/Type_Flying.gif'
        default:
            return null
    }
}
</script>

<template>
    <RouterLink :to="{ name: 'pokemon-details', params: { id: pokemon.id } }" class="details">
        <div
            class="pokemon-card"
            :style="{
                '--backgroundColor': getType1Color(pokemon['Type 1'])?.backgroundColor,
                '--borderColor': getType1Color(pokemon['Type 1'])?.borderColor,
                '--boxShadowColorPrimary': getType2Color(pokemon['Type 2'])?.boxShadowColorPrimary,
                '--boxShadowColorSecondary': getType2Color(pokemon['Type 2'])
                    ?.boxShadowColorSecondary
            }"
        >
            <div class="image">
                <img :src="pokemon.image_url" alt="Pokemon Image" />
            </div>
            <div class="text-box">
                <h2>{{ pokemon.name }} ({{ pokemon['Japanese Name'] }})</h2>
                <div class="types">
                    <img class="type" :src="typeText(pokemon['Type 1'])" />
                    <div v-if="pokemon['Type 2']">
                        <img class="type" :src="typeText(pokemon['Type 2'])" />
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
.details {
    text-decoration: none;
    color: black;
}
.pokemon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 400px;
    cursor: pointer;
    border: 3px solid;
    margin-bottom: 30px;
    background-color: var(--backgroundColor);
    border-color: var(--borderColor);
    box-shadow:
        -5px -5px var(--boxShadowColorPrimary),
        5px 5px var(--boxShadowColorSecondary);
}
.pokemon-card:hover {
    transform: scale(1.01);
    box-shadow:
        -5px -5px var(--boxShadowColorPrimary),
        5px 5px var(--boxShadowColorSecondary);
}
.image {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.types {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.type {
    width: 70px;
    aspect-ratio: auto;
    height: 30px;
}
.type-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}
</style>

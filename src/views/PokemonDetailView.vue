<script setup>
import { ref, onMounted } from 'vue'
import PokemonService from '@/services/PokemonService'

const pokemon = ref(null)
const props = defineProps({
    id: { required: true }
})

onMounted(() => {
    PokemonService.getPokemon(props.id)
        .then((res) => {
            pokemon.value = res.data
        })
        .catch((err) => {
            console.log(err)
        })
})

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
    <div class="pokemon-detail">
        <div v-if="pokemon">
            <div class="image">
                <img :src="pokemon.image_url" alt="Pokemon Image" />
            </div>
            <div class="detials">
                <h1>{{ pokemon.name }} ({{ pokemon['Japanese Name'] }})</h1>
                <div class="description">
                    <div class="types">
                        <img class="type" :src="typeText(pokemon['Type 1'])" />
                        <div v-if="pokemon['Type 2']">
                            <img class="type" :src="typeText(pokemon['Type 2'])" />
                        </div>
                    </div>
                    <div class="pokemon">
                        <div class="abi-spe">
                            <div class="as">
                                <h2 style="text-decoration: underline">Species</h2>
                                <h3>{{ pokemon['Species'] }}</h3>
                            </div>
                            <div class="as">
                                <h2 style="text-decoration: underline">Abilities</h2>
                                <h3>{{ pokemon['Ablilities'] }}</h3>
                            </div>
                        </div>
                        <h2 style="text-decoration: underline">Evolution</h2>
                        <h3>{{ pokemon['Evolution'] }}</h3>
                        <h2 style="text-decoration: underline">Evolutionary Line</h2>
                        <div class="Evolution-line">
                            <img
                                v-for="(evol, index) in pokemon['Evolutionary line']"
                                :key="index"
                                :src="evol"
                                alt="Evolutionary Line"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pokemon-detail {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 0px;
}
.image {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.detials {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    flex-direction: column;
    align-items: center;
}
.types {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: stretch;
}
.description {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    font-size: 12px;
}
.type {
    width: 100px;
    aspect-ratio: auto;
    height: 40px;
}
.pokemon {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    font-size: 13px;
}
.abi-spe {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 130px;
}
.as {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
}
.Evolution-line {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border: solid black;
    border-width: 2px;
    border-radius: 15px;
    width: 840px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import PokemonCard from '../components/PokemonCard.vue'
import PokemonService from '../services/PokemonService'

const pokemons = ref(null)

onMounted(() => {
    PokemonService.getPokemons()
        .then((res) => {
            pokemons.value = res.data
        })
        .catch((err) => {
            console.log(err)
        })
})
</script>

<template>
    <div class="pokemons">
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
    </div>
</template>

<style>
.pokemons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>

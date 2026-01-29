<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
 type Vet ={
    id: string,
    nome:string,
    especialidade:string[]
 }

 defineProps<{
    data: Array<Vet>
 }>();

</script>

<template>
    <NavBar />
    <div class="w-full flex items-center justify-center flex-col">
        <div class="w-">
            <h1 class="text-blue-900 align-text-top mt-10 mb-3 font-bold">Veterinários</h1>

            <table class="w-full">
                <thead>
                    <tr class="bg-blue-800 text-left text-white">
                        <th class="p-2 text-white font-bold">Nome</th>
                        <th class="p-2">Especialidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vet in data" :key="vet.id">
                        <td class="p-2">{{ vet.nome }}</td>
                        <td class="p-2">{{ vet.especialidade.join(', ') }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

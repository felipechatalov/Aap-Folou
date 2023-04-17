<template>  
    <div class = "container">
        <h1>Lojas</h1>
        <div>
            <div class = "card">
                <div><img class = "card-icon" src="../components/icons/cachorrinho.png" alt="cliente">
                    <h2 class = "card-title">{{ nome[0].name }}</h2>
                    <p class = "card-text"> Endereço:{{ nome[0].address }}</p>
                    <p class = "card-text"> Telefone:{{ nome[0].phone }}</p>
                </div>
                <div><img class = "card-icon" src="../components/icons/cute-dog.png" alt="cliente">
                    <h2 class = "card-title">{{ nome[1].name }}</h2>
                    <p class = "card-text"> Endereço:{{ nome[1].address }}</p>
                    <p class = "card-text"> Telefone:{{ nome[1].phone }}</p>
                </div>
                <div><img class = "card-icon" src="../components/icons/cachorro-fofinho.png" alt="cliente">
                    <h2 class = "card-title">{{nome[2].name}}</h2>
                    <p class = "card-text"> Endereço: {{nome[2].address}}</p>
                    <p class = "card-text"> Telefone: {{ nome[2].phone }}</p>
                </div>
                <div><img class = "card-icon" src="../components/icons/cute-dog.png" alt="cliente">
                    <h2 class = "card-title">{{nome[3].name}}</h2>
                    <p class = "card-text"> Endereço: {{nome[3].address}}</p>
                    <p class = "card-text"> Telefone: {{ nome[3].phone }}</p>
                </div>
                <div><img class = "card-icon" src="../components/icons/cachorro-fofinho.png" alt="cliente">
                    <h2 class = "card-title">{{nome[4].name}}</h2>
                    <p class = "card-text"> Endereço: {{nome[4].address}}</p>
                    <p class = "card-text"> Telefone: {{ nome[4].phone }}</p>
                </div> 
                <div><img class = "card-icon" src="../components/icons/cachorrinho.png" alt="cliente">
                    <h2 class = "card-title">{{nome[5].name}}</h2>
                    <p class = "card-text"> Endereço: {{nome[5].address}}</p>
                    <p class = "card-text"> Telefone: {{ nome[5].phone }}</p>
                </div>
            </div>
        </div>
        

    </div>
</template>

<script>
import axios from 'axios';



export default {
    data(){
        return{
            nome: {}
        }
    },
    beforeMount(){
        this.pegarDados()
    },
    methods:{
        async pegarDados() {
            axios.get('http://localhost:6969/petshops')
                .then(response => {
                    this.nome = response.data
                    console.log(this.nome)
                })
                .catch(error => {
                    console.log(error)
                })

            }
    }    
}    
</script>

<template>  
    <div class = "container">
        <h1>Lojas</h1>
        <div>
            <div class = "card">
                <div><img src="../components/icons/cliente.png" alt="cliente">
                    <h2 class = "card-title"> {{name[0]}}</h2>
                    <p class = "card-text"> Endereço:</p>
                    <p class = "card-text"> Telefone:</p>
                </div>
                <div><img src="../components/icons/cliente.png" alt="cliente">
                    <h2 class = "card-title">PetShop do Chatas</h2>
                    <p class = "card-text"> Endereço: Rua dos chatos, nº 0</p>
                    <p class = "card-text"> Telefone: (00) 00000-0000</p>
                </div>
                <div><img src="../components/icons/cliente.png" alt="cliente">
                    <h2 class = "card-title">PetShop do Zé</h2>
                    <p class = "card-text"> Endereço: Rua do Zé, nº 0</p>
                    <p class = "card-text"> Telefone: (00) 00000-0000</p>
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
            name: {}
        }
    },
    methods:{

        pegarDados(){
            axios.get('/petshops')
                .then(response =>{
                    const aux = response
                    const name = aux.filter(obj => obj.chave == 'name')
                    this.name = name
                    console.log(dados);
                })
                .catch(error => {
                    console.log("ERRO !", error);
                })
        },
    
    }    
}    
</script>

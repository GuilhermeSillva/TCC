<template>
    <div>
        <h3> Criar uma conta </h3>
        <input 
            type='text' 
            placeholder='Email'
            required>
            <br>
        <input 
            type="password" 
            placeholder="Senha"
            required>
            <br>
        <button>Criar conta</button>
        <p>Voltar para login</p>
    </div>
</template>

<script>
    export default {
        name: 'singUp',
        data() {
            return {

            }
        },
        methods: {
           
        },
    }
</script>

<style scoped>
input{
    border-radius: 25px;
    margin: 10px 0;
    width: 20%;
    cursor: pointer;
    line-height: 30px;
}
button {
    border-radius: 25px;
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}

</style>
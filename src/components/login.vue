<template>
    <div>
        <h3>Entre</h3>
        <input 
            type='text' 
            placeholder="Email" 
            required>
            <br>
        <input 
            type="password" 
            placeholder="Senha" 
            required>
            <br>
        <button>Entrar</button>
        <p>Não possui conta? Crie uma! </p>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {

            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>
input {
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
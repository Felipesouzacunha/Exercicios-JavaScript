let bancoDeUsuarios = (function() {
    let usuarios = [];

    function encontrarUsuario(email) {
        return usuarios.find(usuario => usuario.email === email);
    }

    function adicionarUsuario(nome, email, senha) {
        if (encontrarUsuario(email)) {
            console.log(`Usuário com email ${email} já existe.`);
            return false;
        }

        let novoUsuario = { nome, email, senha };
        usuarios.push(novoUsuario);
        console.log(`Usuário ${nome} adicionado com sucesso.`);
        return true;
    }

    function removerUsuario(email) {
        let index = usuarios.findIndex(usuario => usuario.email === email);
        if (index !== -1) {
            usuarios.splice(index, 1);
            console.log(`Usuário com email ${email} removido.`);
            return true;
        } else {
            console.log(`Usuário com email ${email} não encontrado.`);
            return false;
        }
    }
    function atualizarSenha(email, novaSenha) {
        let usuario = encontrarUsuario(email);
        if (usuario) {
            usuario.senha = novaSenha;
            console.log(`Senha do usuário ${usuario.nome} atualizada.`);
            return true;
        } else {
            console.log(`Usuário com email ${email} não encontrado.`);
            return false;
        }
    }
    return {
        adicionarUsuario,
        removerUsuario,
        atualizarSenha
    };
})();

bancoDeUsuarios.adicionarUsuario("Alice", "alice@example.com", "senha123");
bancoDeUsuarios.adicionarUsuario("Bob", "bob@example.com", "abc456");
bancoDeUsuarios.removerUsuario("alice@example.com");
bancoDeUsuarios.atualizarSenha("bob@example.com", "novaSenha789");

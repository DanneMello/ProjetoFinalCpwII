var Menu = {
    preload : function() {
        // Carrega todos os recursos necessários para o menu.
        game.load.image('menu', './assets/images/menu5.png');
    },

    create: function () {
        // Adicionar tela de menu.
        // Ele atuará como um botão para iniciar o jogo.
        this.add.button(0, 0, 'menu', this.startGame, this);
    },

    startGame: function () {
        // Muda o estado para o jogo real.
        this.state.start('Game');
    }
};
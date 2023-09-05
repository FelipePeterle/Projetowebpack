import $ from 'jquery';
import './css/style.css';
import Botao from './components/botao/index.js';

$(function(){

    let botao = new Botao();
    botao.setTitle('Testador');
    botao.setClick(function(){
        alert ("CLICASTES!");
    })

    $('.area').html(botao.render() );

});
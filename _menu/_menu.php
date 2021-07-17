<nav id="menuTopo">
    <img src="_menu/_imagem_menu/logoRedimencionado.png" alt="Logo">
    <label for="menu">
        <?php require_once('_imagem_menu/svg/logo_menu.svg'); ?>
    </label>
</nav>
<section id="load">
    <p>Carregando...</p>
</section>
<input type="checkbox" id="menu" style="display:none">
<div id="menuLateral">
    <section>
        <img src="_menu/_imagem_menu/people.png" alt="foto menu" width="40%">
        <h5>Luiz Jailton Viana de Paula</h5>
        <h5>JAILTON DPAULA</h5>
    </section>
    <p>HOME</p>
    <p class="collapsed" data-toggle="collapse" data-target="#menu1">LOJA</p>
    <div id="menu1" class="collapse" data-parent="#menuLateral">
        <li>OBJETO 1</li>
        <li>OBJETO 2</li>
        <li>OBJETO 3</li>
    </div>
    <p class="collapsed" data-toggle="collapse" data-target="#menu2">PEDIDOS</p>
    <div id="menu2" class="collapse" data-parent="#menuLateral">
        <li>OBJETO 1</li>
        <li>OBJETO 2</li>
        <li>OBJETO 3</li>
    </div>
    <p class="collapsed" data-toggle="collapse" data-target="#menu3">SAIR</p>
    <div id="menu3" class="collapse" data-parent="#menuLateral">
        <li>SAIR SISTEMA</li>
    </div>
</div>
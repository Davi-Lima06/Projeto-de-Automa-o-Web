$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Cliente.feature");
formatter.feature({
  "name": "Cliente",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Cliente"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Compra bem sucedida com 1 item",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@CompraBemSucedida"
    }
  ]
});
formatter.step({
  "name": "o cliente adiciona um item ao carrinho",
  "keyword": "Quando "
});
formatter.step({
  "name": "clica no carrinho",
  "keyword": "E "
});
formatter.step({
  "name": "clica em Checkout",
  "keyword": "E "
});
formatter.step({
  "name": "prenche o campo First Name como \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "prenche o campo Last Name como \"\u003csobrenome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preenche o campo Postal Code como \"\u003ccodigo\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no botao Finish",
  "keyword": "E "
});
formatter.step({
  "name": "a compra deve ser realizada com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "sobrenome",
        "codigo"
      ]
    },
    {
      "cells": [
        "davi",
        "lima",
        "72870-564"
      ]
    }
  ]
});
formatter.background({
  "name": "clinte logado",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que usuario esteja logado como cliente",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.que_usuario_esteja_logado_como_cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Compra bem sucedida com 1 item",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Cliente"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@CompraBemSucedida"
    }
  ]
});
formatter.step({
  "name": "o cliente adiciona um item ao carrinho",
  "keyword": "Quando "
});
formatter.match({
  "location": "ClienteSteps.o_cliente_adiciona_um_item_ao_carrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clica_no_carrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica em Checkout",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clica_em_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "prenche o campo First Name como \"davi\"",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.prenche_o_campo_First_Name_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "prenche o campo Last Name como \"lima\"",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.prenche_o_campo_Last_Name_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preenche o campo Postal Code como \"72870-564\"",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.preenche_o_campo_Postal_Code_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clicar_no_botao_Continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Finish",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clicar_no_botao_Finish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a compra deve ser realizada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "ClienteSteps.a_compra_deve_ser_realizada_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Demonstrando erro do sistema ao finalizar a compra sem selecionar nenhum item",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@CompraMalSucedida"
    }
  ]
});
formatter.step({
  "name": "o cliente nao adicionar nenhum item ao carrinho",
  "keyword": "Quando "
});
formatter.step({
  "name": "clica no carrinho",
  "keyword": "E "
});
formatter.step({
  "name": "clica em Checkout",
  "keyword": "E "
});
formatter.step({
  "name": "prenche o campo First Name como \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "prenche o campo Last Name como \"\u003csobrenome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preenche o campo Postal Code como \"\u003ccodigo\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no botao Finish",
  "keyword": "E "
});
formatter.step({
  "name": "a compra nao deve ser realizada",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "sobrenome",
        "codigo"
      ]
    },
    {
      "cells": [
        "davi",
        "lima",
        "72870-564"
      ]
    }
  ]
});
formatter.background({
  "name": "clinte logado",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que usuario esteja logado como cliente",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.que_usuario_esteja_logado_como_cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Demonstrando erro do sistema ao finalizar a compra sem selecionar nenhum item",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Cliente"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@CompraMalSucedida"
    }
  ]
});
formatter.step({
  "name": "o cliente nao adicionar nenhum item ao carrinho",
  "keyword": "Quando "
});
formatter.match({
  "location": "ClienteSteps.o_cliente_nao_adicionar_nenhum_item_ao_carrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clica_no_carrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica em Checkout",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clica_em_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "prenche o campo First Name como \"davi\"",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.prenche_o_campo_First_Name_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "prenche o campo Last Name como \"lima\"",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.prenche_o_campo_Last_Name_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preenche o campo Postal Code como \"72870-564\"",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.preenche_o_campo_Postal_Code_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clicar_no_botao_Continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Finish",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clicar_no_botao_Finish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a compra nao deve ser realizada",
  "keyword": "Entao "
});
formatter.match({
  "location": "ClienteSteps.a_compra_nao_deve_ser_realizada()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Compra de todos os itens",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@CompraVariosItens"
    }
  ]
});
formatter.step({
  "name": "o cliente adicionar varios itens ao carrinho",
  "keyword": "Quando "
});
formatter.step({
  "name": "clica no carrinho",
  "keyword": "E "
});
formatter.step({
  "name": "clica em Checkout",
  "keyword": "E "
});
formatter.step({
  "name": "prenche o campo First Name como \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "prenche o campo Last Name como \"\u003csobrenome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preenche o campo Postal Code como \"\u003ccodigo\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no botao Finish",
  "keyword": "E "
});
formatter.step({
  "name": "a compra deve ser realizada com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "sobrenome",
        "codigo"
      ]
    },
    {
      "cells": [
        "davi",
        "lima",
        "72870-564"
      ]
    }
  ]
});
formatter.background({
  "name": "clinte logado",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que usuario esteja logado como cliente",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.que_usuario_esteja_logado_como_cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Compra de todos os itens",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Cliente"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@CompraVariosItens"
    }
  ]
});
formatter.step({
  "name": "o cliente adicionar varios itens ao carrinho",
  "keyword": "Quando "
});
formatter.match({
  "location": "ClienteSteps.o_cliente_adicionar_varios_itens_ao_carrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clica_no_carrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica em Checkout",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clica_em_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "prenche o campo First Name como \"davi\"",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.prenche_o_campo_First_Name_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "prenche o campo Last Name como \"lima\"",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.prenche_o_campo_Last_Name_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preenche o campo Postal Code como \"72870-564\"",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.preenche_o_campo_Postal_Code_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clicar_no_botao_Continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Finish",
  "keyword": "E "
});
formatter.match({
  "location": "ClienteSteps.clicar_no_botao_Finish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a compra deve ser realizada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "ClienteSteps.a_compra_deve_ser_realizada_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Realizar Login com sucesso",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@RealizarLogin"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "informar o campo usuario como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "informar o campo senha como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o Dashboard",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar Login com sucesso",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@RealizarLogin"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "informar o campo usuario como \"standard_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_usuario_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo senha como \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_senha_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.clicar_no_botao_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar Login com sucesso",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@RealizarLogin"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "informar o campo usuario como \"problem_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_usuario_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo senha como \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_senha_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.clicar_no_botao_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar Login com sucesso",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@RealizarLogin"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "informar o campo usuario como \"performance_glitch_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_usuario_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo senha como \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_senha_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.clicar_no_botao_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Realizar Login com senha ou login incorreto",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@LoginIncorreto"
    }
  ]
});
formatter.step({
  "name": "informar o campo usuario como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "informar o campo senha como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "name": "a pagina devera informar que que ouve erro ao inserir os dados",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ]
    },
    {
      "cells": [
        "12121212",
        "12121212"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar Login com senha ou login incorreto",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@LoginIncorreto"
    }
  ]
});
formatter.step({
  "name": "informar o campo usuario como \"12121212\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_usuario_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo senha como \"12121212\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_senha_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.clicar_no_botao_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pagina devera informar que que ouve erro ao inserir os dados",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.a_pagina_devera_informar_que_que_ouve_erro_ao_inserir_os_dados()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Realizar Login com usuario bloqueado",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@LoginBloqueado"
    }
  ]
});
formatter.step({
  "name": "informar o campo usuario como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "informar o campo senha como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "name": "a pagina devera informar que que ouve o usuario esta bloqueado",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar Login com usuario bloqueado",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@LoginBloqueado"
    }
  ]
});
formatter.step({
  "name": "informar o campo usuario como \"locked_out_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_usuario_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo senha como \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.informar_o_campo_senha_como(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.clicar_no_botao_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pagina devera informar que que ouve o usuario esta bloqueado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginPaginaSwagLabsSteps.a_pagina_devera_informar_que_que_ouve_o_usuario_esta_bloqueado()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
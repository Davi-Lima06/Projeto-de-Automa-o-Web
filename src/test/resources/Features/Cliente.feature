#language: pt
@Cliente @End2End
Funcionalidade: Cliente

  Contexto: clinte logado
    Dado que o usuario esteja na pagina principal do sistema
    E que usuario esteja logado como cliente

  @CompraBemSucedida
  Esquema do Cenario: Compra bem sucedida com 1 item
    Quando o cliente adiciona um item ao carrinho
    E clica no carrinho
    E clica em Checkout
    E prenche o campo First Name como "<nome>"
    E prenche o campo Last Name como "<sobrenome>"
    E preenche o campo Postal Code como "<codigo>"
    E clicar no botao Continue
    E clicar no botao Finish
    Entao a compra deve ser realizada com sucesso

    Exemplos: 
      | nome | sobrenome | codigo    |
      | davi | lima      | 72870-564 |

  @CompraMalSucedida
  Esquema do Cenario: Demonstrando erro do sistema ao finalizar a compra sem selecionar nenhum item
    Quando o cliente nao adicionar nenhum item ao carrinho
    E clica no carrinho
    E clica em Checkout
    E prenche o campo First Name como "<nome>"
    E prenche o campo Last Name como "<sobrenome>"
    E preenche o campo Postal Code como "<codigo>"
    E clicar no botao Continue
    E clicar no botao Finish
    Entao a compra nao deve ser realizada

    Exemplos: 
      | nome | sobrenome | codigo    |
      | davi | lima      | 72870-564 |

	@CompraVariosItens
  Esquema do Cenario: Compra de todos os itens 
    Quando o cliente adicionar varios itens ao carrinho
    E clica no carrinho
    E clica em Checkout
    E prenche o campo First Name como "<nome>"
    E prenche o campo Last Name como "<sobrenome>"
    E preenche o campo Postal Code como "<codigo>"
    E clicar no botao Continue
    E clicar no botao Finish
    Entao a compra deve ser realizada com sucesso

    Exemplos: 
      | nome | sobrenome | codigo    |
      | davi | lima      | 72870-564 |

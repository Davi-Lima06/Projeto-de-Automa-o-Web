#language: pt
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema

  @RealizarLogin @SmokeTest
  Esquema do Cenario: Realizar Login com sucesso
    Quando informar o campo usuario como "<usuario>"
    E informar o campo senha como "<senha>"
    E clicar no botao Login
    Entao o sistema devera autorizar o login, exibindo pagina contendo o Dashboard

    Exemplos: 
      | usuario                 | senha        |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      
@LoginIncorreto
  Esquema do Cenario: Realizar Login com senha ou login incorreto
    Quando informar o campo usuario como "<usuario>"
    E informar o campo senha como "<senha>"
    E clicar no botao Login
    Entao a pagina devera informar que que ouve erro ao inserir os dados

    Exemplos: 
      | usuario  | senha    |
      | 12121212 | 12121212 |
      
@LoginBloqueado
  Esquema do Cenario: Realizar Login com usuario bloqueado
    Quando informar o campo usuario como "<usuario>"
    E informar o campo senha como "<senha>"
    E clicar no botao Login
    Entao a pagina devera informar que que ouve o usuario esta bloqueado

    Exemplos: 
      | usuario         | senha        |
      | locked_out_user | secret_sauce |

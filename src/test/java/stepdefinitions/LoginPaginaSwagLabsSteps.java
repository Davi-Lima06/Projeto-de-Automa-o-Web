package stepdefinitions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.LoginPaginaSwagLabsPage;

public class LoginPaginaSwagLabsSteps {
	WebDriver driver;
	
	@Dado("^que o usuario esteja na pagina principal do sistema$")
	public void que_o_usuario_esteja_na_pagina_principal_do_sistema() throws Throwable {
		Hooks.abrirUrl("https://www.saucedemo.com/");
		driver = Hooks.getDriver();
	}
	
	@Quando("informar o campo usuario como {string}")
	public void informar_o_campo_usuario_como(String string) {
		LoginPaginaSwagLabsPage swagLabs = new LoginPaginaSwagLabsPage(driver);
		swagLabs.preencherUsuario(string);
	}

	@Quando("informar o campo senha como {string}")
	public void informar_o_campo_senha_como(String string) {
		LoginPaginaSwagLabsPage swagLabs = new LoginPaginaSwagLabsPage(driver);
		swagLabs.preencherSenha(string);
	}

	@Quando("^clicar no botao Login$")
	public void clicar_no_botao_Login() throws Throwable {
		LoginPaginaSwagLabsPage swagLabs = new LoginPaginaSwagLabsPage(driver);
		swagLabs.clicarBotaoLogin();
	}

	@Entao("^o sistema devera autorizar o login, exibindo pagina contendo o Dashboard$")
	public void o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_Dashboard() throws Throwable {
		LoginPaginaSwagLabsPage swagLabs = new LoginPaginaSwagLabsPage(driver);
		swagLabs.validarPaginaProdutos();
	}
	
	@Entao("a pagina devera informar que que ouve erro ao inserir os dados")
	public void a_pagina_devera_informar_que_que_ouve_erro_ao_inserir_os_dados() {
	    assertTrue(driver.findElement(By.xpath("//h3[text() = 'Epic sadface: Username and password do not match any user in this service']")).isDisplayed());
	}

	@Entao("a pagina devera informar que que ouve o usuario esta bloqueado")
	public void a_pagina_devera_informar_que_que_ouve_o_usuario_esta_bloqueado() {
	    assertTrue(driver.findElement(By.xpath("//h3[text() = 'Epic sadface: Sorry, this user has been locked out.']")).isDisplayed());

	}
}

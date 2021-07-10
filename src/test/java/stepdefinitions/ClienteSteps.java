package stepdefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.ClientePage;
import pageobjects.LoginPaginaSwagLabsPage;

public class ClienteSteps {
	
	WebDriver driver;
	String usuarioBusca;

	@Dado("que usuario esteja logado como cliente")
	public void que_usuario_esteja_logado_como_cliente() {
		Hooks.abrirUrl("https://www.saucedemo.com/");
		driver = Hooks.getDriver();
		LoginPaginaSwagLabsPage swagLabs = new LoginPaginaSwagLabsPage(driver);
		swagLabs.preencherUsuario("standard_user");
		swagLabs.preencherSenha("secret_sauce");
		swagLabs.clicarBotaoLogin();
	}

	@Quando("o cliente adiciona um item ao carrinho")
	public void o_cliente_adiciona_um_item_ao_carrinho() {
		ClientePage cliente = new ClientePage(driver);
		cliente.adicionarMochilaCarrinho();
	}
	
	@Quando("o cliente adicionar varios itens ao carrinho")
	public void o_cliente_adicionar_varios_itens_ao_carrinho() {
		ClientePage cliente = new ClientePage(driver);
		cliente.adicionarMochilaCarrinho();
		cliente.adicionarFarolBikeCarrinho();
		cliente.adicionarCamisaCarrinho();
		cliente.adicionarJaquetaCarrinho();
		cliente.adicionarMacacaoCarrinho();
		cliente.adicionarCamisaVermelhaCarrinho();
	}

	@Quando("clica no carrinho")
	public void clica_no_carrinho() {
		ClientePage cliente = new ClientePage(driver);
		cliente.clicarcarrinho();
	}

	@Quando("clica em Checkout")
	public void clica_em_Checkout() {

		ClientePage cliente = new ClientePage(driver);
		cliente.clicarBotaoCheckout();
	}

	@Quando("prenche o campo First Name como {string}")
	public void prenche_o_campo_First_Name_como(String string) {
		ClientePage cliente = new ClientePage(driver);
		cliente.preencherFirstName(string);
	}

	@Quando("prenche o campo Last Name como {string}")
	public void prenche_o_campo_Last_Name_como(String string) {
		ClientePage cliente = new ClientePage(driver);
		cliente.preencherLastName(string);
	}

	@Quando("preenche o campo Postal Code como {string}")
	public void preenche_o_campo_Postal_Code_como(String string) {
		ClientePage cliente = new ClientePage(driver);
		cliente.preencherCodigoPostal(string);
	}

	@Quando("clicar no botao Continue")
	public void clicar_no_botao_Continue() {
		ClientePage cliente = new ClientePage(driver);
		cliente.clicarBotaoContinue();
	}
	
	@Quando("clicar no botao Finish")
	public void clicar_no_botao_Finish() {
		ClientePage cliente = new ClientePage(driver);
		cliente.clicarBotaoFinish();
	}

	@Entao("a compra deve ser realizada com sucesso")
	public void a_compra_deve_ser_realizada_com_sucesso() {
		assertTrue(driver.findElement(By.xpath("//h2[text() = 'THANK YOU FOR YOUR ORDER']")).isDisplayed());
		
	}
	
	@Quando("o cliente nao adicionar nenhum item ao carrinho")
	public void o_cliente_nao_adicionar_nenhum_item_ao_carrinho() {
	    
	}

	@Entao("a compra nao deve ser realizada")
	public void a_compra_nao_deve_ser_realizada() {
		assertTrue(driver.findElement(By.xpath("//h2[text() = 'THANK YOU FOR YOUR ORDER']")).isDisplayed());
		
	}

}

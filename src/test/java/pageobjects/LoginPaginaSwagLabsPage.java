package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import utils.MetodosUteis;

public class LoginPaginaSwagLabsPage extends MetodosUteis {
	
	protected WebDriver driver;
	
	public LoginPaginaSwagLabsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (how = How.ID, using = "user-name")
	private WebElement usuario;
	
	@FindBy (how = How.ID, using = "password")
	private WebElement senha;
	
	@FindBy (how = How.ID, using = "login-button")
	private WebElement botao;
	
	@FindBy (how = How.XPATH, using = "//span[text() = 'Products']")
	private WebElement paginaProdutos;
	
	public void preencherUsuario(String campoUsuario) {
		esperarElemento(usuario);
		usuario.sendKeys(campoUsuario);
	}
	
	public void preencherSenha(String campoSenha) {
		esperarElemento(senha);
		senha.sendKeys(campoSenha);
	}
	
	public void clicarBotaoLogin() {
		esperarElemento(botao);
		botao.click();
	}
	
	public void validarPaginaProdutos() {
		esperarElemento(paginaProdutos);
		assertTrue(paginaProdutos.isEnabled());
	}
	
}


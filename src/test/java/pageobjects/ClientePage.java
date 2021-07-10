package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class ClientePage extends MetodosUteis {

protected WebDriver driver;
	
	public ClientePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-backpack")
	private WebElement addMochilaCarrinho;
	
	@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-bike-light")
	private WebElement addFarolKikeCarrinho;
	
	@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-bolt-t-shirt")
	private WebElement addCamisaCarrinho;
	
	@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-fleece-jacket")
	private WebElement addJaquetaCarrinho;
	
	@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-onesie")
	private WebElement addMacacaoCarrinho;
	
	@FindBy (how = How.ID, using = "add-to-cart-test.allthethings()-t-shirt-(red)")
	private WebElement addCamisaVermelhaCarrinho;
	
	@FindBy (how = How.ID, using = "shopping_cart_container")
	private WebElement carrinho;
	
	@FindBy (how = How.ID, using = "checkout")
	private WebElement botaoCheckout;
	
	@FindBy (how = How.ID, using = "first-name")
	private WebElement firstName;
	
	@FindBy (how = How.ID, using = "last-name")
	private WebElement lastName;
	
	@FindBy (how = How.ID, using = "postal-code")
	private WebElement codigoPostal;
	
	@FindBy(how = How.ID, using = "continue")
	private WebElement botaoContinue;
	
	@FindBy(how = How.ID, using = "finish")
	private WebElement botaoFinish;
	
	
	
	public void adicionarMochilaCarrinho() {
		esperarElemento(addMochilaCarrinho);
		addMochilaCarrinho.click();
	}
	public void adicionarFarolBikeCarrinho() {
		esperarElemento(addFarolKikeCarrinho);
		addFarolKikeCarrinho.click();
	}
	public void adicionarCamisaCarrinho() {
		esperarElemento(addCamisaCarrinho);
		addCamisaCarrinho.click();
	}
	public void adicionarJaquetaCarrinho() {
		esperarElemento(addJaquetaCarrinho);
		addJaquetaCarrinho.click();
	}
	public void adicionarMacacaoCarrinho() {
		esperarElemento(addMacacaoCarrinho);
		addMacacaoCarrinho.click();
	}
	public void adicionarCamisaVermelhaCarrinho() {
		esperarElemento(addCamisaVermelhaCarrinho);
		addCamisaVermelhaCarrinho.click();
	}
	
	public void clicarcarrinho () {
		esperarElemento(carrinho);
		carrinho.click();
	}
	
	public void clicarBotaoCheckout () {
		esperarElemento(botaoCheckout);
		botaoCheckout.click();
	}
	
	public void preencherFirstName (String NomeCliente) {
		esperarElemento(firstName);
		firstName.clear();
		firstName.sendKeys(NomeCliente);
	}
	
	public void preencherLastName (String sobrenomeCliente) {
		esperarElemento(lastName);
		lastName.sendKeys(sobrenomeCliente);
	}
	
	public void preencherCodigoPostal(String codigo) {
		esperarElemento(codigoPostal);
		codigoPostal.sendKeys(codigo);
	}
	
	public void clicarBotaoContinue() {
		esperarElemento(botaoContinue);
		botaoContinue.click();
	}
	
	public void clicarBotaoFinish() {
		esperarElemento(botaoFinish);
		botaoFinish.click();
	}
	
	
	
}

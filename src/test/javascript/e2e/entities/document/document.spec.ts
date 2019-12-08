// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DocumentComponentsPage, DocumentDeleteDialog, DocumentUpdatePage } from './document.page-object';

const expect = chai.expect;

describe('Document e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let documentComponentsPage: DocumentComponentsPage;
  let documentUpdatePage: DocumentUpdatePage;
  let documentDeleteDialog: DocumentDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Documents', async () => {
    await navBarPage.goToEntity('document');
    documentComponentsPage = new DocumentComponentsPage();
    await browser.wait(ec.visibilityOf(documentComponentsPage.title), 5000);
    expect(await documentComponentsPage.getTitle()).to.eq('legaApp.document.home.title');
  });

  it('should load create Document page', async () => {
    await documentComponentsPage.clickOnCreateButton();
    documentUpdatePage = new DocumentUpdatePage();
    expect(await documentUpdatePage.getPageTitle()).to.eq('legaApp.document.home.createOrEditLabel');
    await documentUpdatePage.cancel();
  });

  it('should create and save Documents', async () => {
    const nbButtonsBeforeCreate = await documentComponentsPage.countDeleteButtons();

    await documentComponentsPage.clickOnCreateButton();
    await promise.all([
      documentUpdatePage.setNameInput('name'),
      documentUpdatePage.setCreationInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      documentUpdatePage.creatorSelectLastOption()
    ]);
    expect(await documentUpdatePage.getNameInput()).to.eq('name', 'Expected Name value to be equals to name');
    expect(await documentUpdatePage.getCreationInput()).to.contain(
      '2001-01-01T02:30',
      'Expected creation value to be equals to 2000-12-31'
    );
    await documentUpdatePage.save();
    expect(await documentUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await documentComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Document', async () => {
    const nbButtonsBeforeDelete = await documentComponentsPage.countDeleteButtons();
    await documentComponentsPage.clickOnLastDeleteButton();

    documentDeleteDialog = new DocumentDeleteDialog();
    expect(await documentDeleteDialog.getDialogTitle()).to.eq('legaApp.document.delete.question');
    await documentDeleteDialog.clickOnConfirmButton();

    expect(await documentComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});

describe('Check app', function() {
    const email = 'walker@jw.com';
    const password = 'password';
    const url = 'https://viktor-silakov.github.io/course-sut';

    it('click on hide button', async function() {
        await browser.url(url);
        await $('#login').setValue(email);
        await $('#password').setValue(password);
        await $('button').click();
        await $('#user-label').waitForDisplayed({ timeout: 15000 });
        await browser.execute(() => {
            const elementToRemove = document.querySelector('header.navbar');;
            elementToRemove.remove();
        });
        const alertBtnLocator = 'button.btn';
        await $(alertBtnLocator).waitForDisplayed();
        await $(alertBtnLocator).click();
        await browser.acceptAlert();
    });


});
describe('Check app', function() {
    it('click on hide button', async function() {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await browser.execute(() => {
            const elementToRemove = document.querySelector('.navbar-brand');;
            elementToRemove.remove();
        });
        // element is not interactable and not visible on page
        // await $('.navbar-toggler').click();

        await browser.execute(() => {
            alert("Hello world");
        });
        await browser.acceptAlert();
        await browser.pause(3000);
    });
});
describe('homework test 1', function() {
    const url = 'https://viktor-silakov.github.io/course-sut';
    it('should login and find red background-color', async function() {
        const email = 'walker@jw.com';
        const password = 'password';
        await browser.url(url);
        await $('#login').setValue(email);
        await $('#password').setValue(password);
        await $('button').click();
        await $('#spinner').waitForDisplayed({ timeout: 5000 });
        await $('#spinner').waitForDisplayed({ reverse: true });
        await $('#user-label').waitForDisplayed({ timeout: 15000 });
        await $('//a[@title = "Log out"]').waitForDisplayed({ timeout: 15000 });
        const menu = await $$('#first-nav-block li');
        for (const item of menu) {
            await item.moveTo();
            const text = await item.getText();
            console.log({ text });
            const color = await item.getCSSProperty('background-color');
            console.log(color.value);
            if (color.value === "rgba(255,0,0,1)") {
                throw new Error("The menu Item '" + text + "' has wrong color")
            }
        }

    });
});
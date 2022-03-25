describe('homework test 1', function() {
    it('should login', async function() {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: false, timeout: 5000 });
        await $('#user-label').waitForDisplayed({ timeout: 15000 });
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
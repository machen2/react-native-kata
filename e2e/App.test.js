describe('App', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
    it('should see the text', async () => {
      await expect(element(by.id('app-title'))).toBeVisible();
    });

    it('should have a recipe list', async () => {
       await expect(element(by.id('recipe-list'))).toBeVisible();
    });

    it('should display ingredients of a recipe when clicked', async () => {
        await element(by.text('Biscuits and Gravy')).tap();
        await expect(element(by.id('recipe-ingredients'))).toBeVisible();
    });
});

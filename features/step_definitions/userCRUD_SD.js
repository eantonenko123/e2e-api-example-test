const { Given, When, Then } = require('@cucumber/cucumber');

const userHelper = require('../helpers/userHelper');
const agent = require('../helpers/superagentHelper');
const userData = require('../test_data/userData');
const expect = require('chai').expect;

const user = userData.getUser();
const updateUser = userData.getUser({ name: "morpheus updated"});

// When('user create', async function () {
//     this.res = await userHelper.createNewUser(agent, user);
//     this.userId = this.res.body.id;
// });
//
// Then('check that user was created', function () {
//     expect(this.res.statusCode).to.equal(201);
//     expect(this.res.body.name).to.equal(user.name);
// });
//
// When('user updated', async function () {
//     this.res = await userHelper.updateUser(agent, updateUser, this.userId);
// });
//
// Then('check that user was updated', function () {
//     expect(this.res.statusCode).to.equal(200);
//     expect(this.res.body.name).to.equal(updateUser.name);
// });
//
// When('user delete', async function () {
//     this.res = await userHelper.deleteUser(agent, this.userId);
// });
//
// Then('check that user was deleted', function () {
//     expect(this.res.statusCode).to.equal(204);
// });

When('user {string}', async function (action) {
    switch (action) {
        case 'create':
            this.res = await userHelper.createNewUser(agent, user);
            this.userId = this.res.body.id;
            break;
        case 'update':
            this.res = await userHelper.updateUser(agent, updateUser, this.userId);
            break;
        case 'delete':
            this.res = await userHelper.deleteUser(agent, this.userId);
            break;
    }
});

Then('check that user was {string}', function (status) {
    console.log("status", status)
    console.log("this.res.statusCode", this.res.statusCode)
    expect(this.res.statusCode).to.equal(status);
});

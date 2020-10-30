const { Given, When, Then } = require('@cucumber/cucumber');

const userHelper = require('../helpers/userHelper');
const agent = require('../helpers/superagentHelper');
const userData = require('../test_data/userData');
const expect = require('chai').expect;

const user = userData.getUser();
const updateUser = userData.getUser({ name: "morpheus updated"});

When('user create', async function () {
    this.res = await userHelper.createNewUser(agent, user);
    this.userId = this.res.body.id;
});

Then('check that user was created', function () {
    expect(this.res.statusCode).to.equal(201);
    expect(this.res.body.name).to.equal(user.name);
});

When('user updated', async function () {
    this.res = await userHelper.updateUser(agent, updateUser, this.userId);
});

Then('check that user was updated', function () {
    expect(this.res.statusCode).to.equal(200);
    expect(this.res.body.name).to.equal(updateUser.name);
});

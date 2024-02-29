export default class Auth {
    provider;
    constructor(provider) {
        this.provider = provider;
    }
    async implAuth() {
        new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }
}
//# sourceMappingURL=auth.js.map
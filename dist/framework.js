// TODO: create extended entity example for Framework
export default class Framework {
    cmd;
    // TODO: Do dependency injection here
    // private auth: Auth = new Auth();
    constructor(cmd) {
        this.cmd = cmd;
    }
    async implValidation(cmdValidation, type) {
        new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }
    async implAuth() {
        new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }
}
//# sourceMappingURL=framework.js.map
export class BlockNotFoundError extends Error {
    constructor(blockId) {
        super('Could not find a block with the given blockId');
        this.blockId = blockId;
    }
}
//# sourceMappingURL=utils.js.map
module.exports = function(RED) {
    const { markdownToBlocks } = require('@tryfabric/martian');

    function MarkdownToNotionBlocks(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg, send, done) {
            try {
                msg.payload = markdownToBlocks(msg.payload);
                send(msg);
            } catch (error) {
                if (done) {
                    // Node-RED 1.0+
                    done(error);
                } else {
                    // Node-RED 0.x
                    node.error(error, msg);
                }
            }
        });
    }
    RED.nodes.registerType("markdown-to-notion", MarkdownToNotionBlocks);
};


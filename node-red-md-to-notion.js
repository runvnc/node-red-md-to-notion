module.exports = function(RED) {
    const { markdownToRichText } = require('@tryfabric/martian');

    function MarkdownToRichTextNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg, send, done) {
            // Convert Markdown to Rich Text
            try {
                msg.payload = markdownToRichText(msg.payload);
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
    RED.nodes.registerType("markdown-to-rich-text", MarkdownToRichTextNode);
};


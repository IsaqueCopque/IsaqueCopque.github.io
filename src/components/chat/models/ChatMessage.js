class ChatMessage {
    constructor({text, isSending, timestamp, isError}) {
        this.text = text;
        this.isSending = isSending;
        this.timestamp = timestamp ?? new Date();
        this.isError = isError ?? false;
    }
}

export default ChatMessage
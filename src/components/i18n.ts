const defaultMessages = {
    'confirm_dialog.confirm_header': 'Confirm',
    'confirm_dialog.message': 'Are you sure you want to take this action?',
    'confirm_dialog.yes': 'Yes',
    'confirm_dialog.no': 'No',
    'suggest.noResultMessage': 'Nothing found',
    'suggest.prompt': 'Enter value...'
};

class i18n {
    private messages = defaultMessages;

    getMessage(code, defaultValue = '') {
        return this.messages[code] || defaultValue;
    }

    setMessages(messages) {
        this.messages = messages;
    }
}

export default new i18n();
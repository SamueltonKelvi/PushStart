const TOKEN = '@app/token';

function storageGetItem() {
    return localStorage.getItem(TOKEN);
}
function storageSetItem(data) {
    return localStorage.getItem(TOKEN, data);
}

export {
    storageGetItem,
    storageSetItem
}
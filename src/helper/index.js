const TOKEN = '@app/token';

function storageGetItem() {
    return localStorage.getItem(TOKEN);
}
function storageSetItem(data) {
    return localStorage.setItem(TOKEN, JSON.stringify(data));
}
function storageRemoveItem(data) {
    return localStorage.removeItem(TOKEN);
}

export {
    storageGetItem,
    storageSetItem,
    storageRemoveItem
}
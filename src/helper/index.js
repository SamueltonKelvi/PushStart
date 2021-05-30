const TOKEN = '@app/token';

function storageGetItem() {
    return localStorage.getItem(TOKEN);
}
function storageSetItem(data) {
    return localStorage.setItem(TOKEN, JSON.stringify(data));
}

export {
    storageGetItem,
    storageSetItem
}
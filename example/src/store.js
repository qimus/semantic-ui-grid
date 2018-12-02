const data = require('./data/people.json');

class Store {
    maxInd = 4;

    getItems() {
        return data;
    }

    deleteItem(delId) {
        data.forEach((item, ind) => {
            if (item.id === delId) {
                data.splice(ind, 1);
            }
        });
    }

    updateItem(id, params) {
        data.forEach((item, ind) => {
            if (item.id == id) {
                data[ind] = { ...data[ind], ...params };
            }
        });
    }

    createItem(params) {
        data.push({
            id: ++this.maxInd,
            ...params
        })
    }
}

export default new Store();
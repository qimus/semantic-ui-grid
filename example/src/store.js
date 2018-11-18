const data = [
    {
        id: 1,
        name: 'John',
        age: 36,
        city: 'New York'
    },
    {
        id: 2,
        name: 'Denis',
        age: 18,
        city: 'Moscow'
    },
    {
        id: 3 ,
        name: 'Artur',
        age: 30,
        city: 'Astana'
    },
    {
        id: 4 ,
        name: 'Valera',
        age: 33,
        city: 'Astana'
    },
];

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
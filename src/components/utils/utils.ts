export const SORT_ASC = 'asc';
export const SORT_DESC = 'desc';

export const SORT_MAP = {
    '-': SORT_DESC,
    '+': SORT_ASC
};

const flip = (obj) => {
    let result = {};
    for (let field in obj) {
        if (obj.hasOwnProperty(field)) {
            result[obj[field]] = field;
        }
    }

    return result;
};

export const sortToString = (sort: any) => {
    if (typeof sort === 'string') {
        return sort;
    }

    let result = [];
    let sortMap = flip(SORT_MAP);
    for (let field in sort) {
        if (sort.hasOwnProperty(field)) {
            result.push(`${sortMap[sort[field]]}${field}`);
        }
    }

    return result.join(',');
};
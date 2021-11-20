const sorterPromise = (getArr = []) => {
    return new Promise((resolve, reject) => {
        const typeofArr = !getArr.some(element => typeof element !== "string");
        if (typeofArr) {
            try {
                //sortedArray = [...arr].sort();
                resolve(typeofArr.sort());
            } catch (error) {
                reject('Error: Not all elements are string type!');
            }
        }
        reject('Error: Not all elements are string type!');
    });
};

export default sorterPromise;
 

export default async (fetchReq, url) => {
    console.log("fetchReq")
    console.log(url)
    try {
        const res = await fetchReq;
        const val = await res.json();
        if (res.status === 200 || res.status === 201) {
            return val;
        } else {
            throw Object.assign({}, val, { status: res.status });
        }
    } catch (e) {
        if (e.status) throw e;
        throw { status: 599, errMessage: JSON.stringify(e) };
    }
};

export const fileReq = async fetchReq => {
    try {
        const res = await fetchReq;
        const val = URL.createObjectURL(await res.blob());

        if (res.status === 200 || res.status === 201) {
            return val;
        } else {
            throw Object.assign({}, val, { status: res.status });
        }
    } catch (e) {
        if (e.status) throw e;
        throw { status: 599, errMessage: JSON.stringify(e) };
    }
};

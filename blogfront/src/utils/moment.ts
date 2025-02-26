// 时间 YYYY.MM.DD
export const momentm = (date: Date): string => {
    const d = new Date(date);
    const Y = d.getFullYear();
    let M = String(d.getMonth() + 1);
    let D = String(d.getDate());

    // 补零操作
    if (parseInt(M) < 10) {
        M = `0${M}`;
    }
    if (parseInt(D) < 10) {
        D = `0${D}`;
    }

    const times = `${Y}.${M}.${D}`;
    return times;
}

export const momentm1 = (date: Date): string => {
    const d = new Date(date);
    const Y = d.getFullYear();
    let M = String(d.getMonth() + 1);
    let D = String(d.getDate());

    // 补零操作
    if (parseInt(M) < 10) {
        M = `0${M}`;
    }
    if (parseInt(D) < 10) {
        D = `0${D}`;
    }

    const times = `${Y}-${M}-${D}`;
    return times;
}